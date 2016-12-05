<?php
header('Access-Control-Allow-Origin:*');
header('Content-type:text/json');

require('db_class.php');
date_default_timezone_set('PRC');
set_time_limit(0) ;
define('SCRIPT_ROOT',dirname(__FILE__).'/');
$act=isset($_REQUEST['act'])?$_REQUEST['act']:'';
$mysql=new DB;


$results = array(
    'code' => 200,
    'msg' => 'ok',
    'data' => array()
);

$pk_result = $mysql -> get_all("select *  from lot_data   where dat_type = 20  order by dat_id desc LIMIT 0,3");
$ft_result = $mysql -> get_all("select * from lot_data    where dat_type = 34  order by dat_id desc LIMIT 0,3");
$data = array_merge($pk_result,$ft_result);
$results['data'] = mysqli_fetch_assoc($data);

$data = json_encode($results);

echo $data;

?>

<script>
    setTimeout('myFresh()',3000);

    function myFresh(){
        window.location.reload(true);
    }
</script>



