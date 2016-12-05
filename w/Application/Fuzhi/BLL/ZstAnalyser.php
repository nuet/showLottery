<?php
namespace Fuzhi\BLL;
class ZstAnalyser
{
    static function getArrSum($arrCodes)
    {
        return array_sum($arrCodes);
    }

    static function getBigOrSmall($value, $threshold)
    {
        $ret = '小';
        if ($value >= $threshold) $ret = '大';
        return $ret;
    }

    static function getEvenOrOdd($value)
    {
        $ret = '单';
        if ($value % 2 == 0) $ret = '双';
        return $ret;
    }

    static function getValueDigitSum($value)
    {
        $ret = 0;
        while ($value > 0) {
            $ret += $value % 10;
            $value /= 10;
        }
        return $ret;
    }

    static function getValueAttr($value, $arrAttr)
    {
        $ret = '';
        foreach ($arrAttr as $x => $x_value) {
            if ($x == $value) {
                $ret = $x_value;
                break;
            }
        }
        return $ret;
    }

    static function getCodeArr($value)
    {
        $ret = array();
        $orig = array(" ", "　", "\t", "\n", "\r", "+");
        $new = array("", "", "", "", "", ",");
        $codes = str_replace($orig, $new, $value);
        $ret = explode(',', $codes);
        return $ret;
    }

    static function getDragonOrTiger($value1, $value2)
    {
        if ($value1 > $value2) $ret = '龙'; else if ($value1 == $value2) $ret = '和'; else $ret = '虎';
        return $ret;
    }

    static function getThreePairs($code1, $code2, $code3)
    {
        $ret = '';
        $arrCodes = array($code1, $code2, $code3);
        sort($arrCodes);
        $m = 0;
        $n = 0;
        if ($arrCodes[2] - $arrCodes[1] == 0) $m++;
        if ($arrCodes[1] - $arrCodes[0] == 0) $m++;
        if ($m == 0) {
            if ($arrCodes[2] - $arrCodes[1] == 1) $n++;
            if ($arrCodes[1] - $arrCodes[0] == 0) $n++;
        }
        if ($m == 1) $ret = '对子'; else if ($m == 2) $ret = '豹子'; else if ($n == 1) $ret = '半顺'; else if ($n == 2) $ret = '顺子'; else $ret = '杂六';
        return $ret;
    }

    static function fetchRepeatMemberInArray($array)
    {
        $len = count($array);
        $repeat_arr = array();
        for ($i = 0; $i < $len; $i++) {
            for ($j = $i + 1; $j < $len; $j++) {
                if ($array [$i] == $array [$j]) {
                    $repeat_arr [] = $array [$i];
                    break;
                }
            }
        }
        return $repeat_arr;
    }
}