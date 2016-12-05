<?php 
 if (isset($_GET['dir'])){  
 $basedir=$_GET['dir']; 
 }else{ 
 $basedir = '.'; 
 } 
 $auto = 0; 
 checkdir($basedir); 
 function checkdir($basedir){ 
 if ($dh = opendir($basedir)) { 
   while (($file = readdir($dh)) !== false) { 
    if ($file != '.' && $file != '..'){ 
     if (!is_dir($basedir."/".$file)) { 
      echo "filename: $basedir/$file ".checkBOM("$basedir/$file")." <br>"; 
     }else{ 
      $dirname = $basedir."/".$file; 
      checkdir($dirname); 
     } 
    } 
   } 
 closedir($dh); 
 } 
 } 
 function checkBOM ($filename) { 
 global $auto; 
 $contents = file_get_contents($filename); 
 $charset[1] = substr($contents, 0, 1); 
 $charset[2] = substr($contents, 1, 1); 
 $charset[3] = substr($contents, 2, 1); 
 if (ord($charset[1]) == 239 && ord($charset[2]) == 187 && ord($charset[3]) == 191) { 
   if ($auto == 1) { 
    $rest = substr($contents, 3); 
    rewrite ($filename, $rest); 
    return ("<font color=red>BOM found, automatically removed.</font>"); 
   } else { 
    return ("<font color=red>BOM found.</font>"); 
   } 
 } 
 else return ""; 
 } 
 function rewrite ($filename, $data) { 
 $filenum = fopen($filename, "w"); 
 flock($filenum, LOCK_EX); 
 fwrite($filenum, $data); 
 fclose($filenum); 
 }

function replace_php_src($src) {
    static $IW = array(
        T_CONCAT_EQUAL,             // .=
        T_DOUBLE_ARROW,             // =>
        T_BOOLEAN_AND,              // &&
        T_BOOLEAN_OR,               // ||
        T_IS_EQUAL,                 // ==
        T_IS_NOT_EQUAL,             // != or <>
        T_IS_SMALLER_OR_EQUAL,      // <=
        T_IS_GREATER_OR_EQUAL,      // >=
        T_INC,                      // ++
        T_DEC,                      // --
        T_PLUS_EQUAL,               // +=
        T_MINUS_EQUAL,              // -=
        T_MUL_EQUAL,                // *=
        T_DIV_EQUAL,                // /=
        T_IS_IDENTICAL,             // ===
        T_IS_NOT_IDENTICAL,         // !==
        T_DOUBLE_COLON,             // ::
        T_PAAMAYIM_NEKUDOTAYIM,     // ::
        T_OBJECT_OPERATOR,          // ->
        T_DOLLAR_OPEN_CURLY_BRACES, // ${
        T_AND_EQUAL,                // &=
        T_MOD_EQUAL,                // %=
        T_XOR_EQUAL,                // ^=
        T_OR_EQUAL,                 // |=
        T_SL,                       // <<
        T_SR,                       // >>
        T_SL_EQUAL,                 // <<=
        T_SR_EQUAL,                 // >>=
    );
    if(is_file($src)) {
        if(!$src = file_get_contents($src)) {
            return false;
        }
    }
    $tokens = token_get_all(substr ($src, 0, -2));

    $new = "";
    $c = sizeof($tokens);
    $iw = false; // ignore whitespace
    $ih = false; // in HEREDOC
    $ls = "";    // last sign
    $ot = null;  // open tag
    for($i = 0; $i < $c; $i++) {
        $token = $tokens[$i];
        if(is_array($token)) {
            list($tn, $ts) = $token; // tokens: number, string, line
            $tname = token_name($tn);
            if($tn == T_INLINE_HTML) {
                $new .= $ts;
                $iw = false;
            } else {
                if($tn == T_OPEN_TAG) {
                    if(strpos($ts, " ") || strpos($ts, "\n") || strpos($ts, "\t") || strpos($ts, "\r")) {
                        $ts = rtrim($ts);
                    }
                    $ts .= " ";
                    $new .= $ts;
                    $ot = T_OPEN_TAG;
                    $iw = true;
                } elseif($tn == T_OPEN_TAG_WITH_ECHO) {
                    $new .= $ts;
                    $ot = T_OPEN_TAG_WITH_ECHO;
                    $iw = true;
                } elseif($tn == T_CLOSE_TAG) {
                    if($ot == T_OPEN_TAG_WITH_ECHO) {
                        $new = rtrim($new, "; ");
                    } else {
                        $ts = " ".$ts;
                    }
                    $new .= $ts;
                    $ot = null;
                    $iw = false;
                } elseif(in_array($tn, $IW)) {
                    $new .= $ts;
                    $iw = true;
                } elseif($tn == T_CONSTANT_ENCAPSED_STRING
                       || $tn == T_ENCAPSED_AND_WHITESPACE)
                {
                    if($ts[0] == '"') {
                        $ts = addcslashes($ts, "\n\t\r");
                    }
                    $new .= $ts;
                    $iw = true;
                } elseif($tn == T_WHITESPACE) {
                    $nt = @$tokens[$i+1];
                    if(!$iw && (!is_string($nt) || $nt == '$') && !in_array($nt[0], $IW)) {
                        $new .= " ";
                    }
                    $iw = false;
                } elseif($tn == T_START_HEREDOC) {
                    $new .= "<<<S\n";
                    $iw = false;
                    $ih = true; // in HEREDOC
                } elseif($tn == T_END_HEREDOC) {
                    $new .= "S;";
                    $iw = true;
                    $ih = false; // in HEREDOC
                    for($j = $i+1; $j < $c; $j++) {
                        if(is_string($tokens[$j]) && $tokens[$j] == ";") {
                            $i = $j;
                            break;
                        } else if($tokens[$j][0] == T_CLOSE_TAG) {
                            break;
                        }
                    }
                } elseif($tn == T_COMMENT || $tn == T_DOC_COMMENT) {
                    $iw = true;
                } else {
                    if(!$ih) {
                        $ts = strtolower($ts);
                    }
                    $new .= $ts;
                    $iw = false;
                }
            }
            $ls = "";
        } else {
            if(($token != ";" && $token != ":") || $ls != $token) {
                $new .= $token;
                $ls = $token;
            }
            $iw = true;
        }
    }
	rewrite($src,$new);
} 
 ?>