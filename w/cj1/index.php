<?php

header("Content-type: text/html; charset=utf-8");
require('db_class.php');
date_default_timezone_set('PRC');
set_time_limit(0) ;
define('SCRIPT_ROOT',dirname(__FILE__).'/');
$act=isset($_REQUEST['act'])?$_REQUEST['act']:'';
$mysql=new DB;
$str=file_get_contents('http://c.apiplus.net/newly.do?token=f10e5784d3099544&rows=5&format=json');
$str=json_decode($str,true);
$ahs=array('cqssc'=>'ssc-cq','tjssc'=>'ssc-tj','gd11x5'=>'syxw-gd','fc3d'=>'fc3d','bjkl8'=>'kl8','pl3'=>'pl3','xjcai'=>'xjcai','bjpk10'=>'pk10-bj','cqklsf'=>'klsf-cq','gdklsf'=>'gdkl10','jsk3'=>'jsk3','kl8'=>'kl8','shssl'=>'shssl','mlaft'=>'mlaft','xjssc'=>'xjssc');
foreach($str['data'] as $k => $v){
	$type=$mysql->get_one("select lot_type.id from lot_type where lot_type.name ='{$ahs[$v['code']]}'");

	$haveData=$mysql->get_one("select dat_id from lot_data where dat_type ='{$type['id']}' and dat_expect='{$v['expect']}'");
	if(empty($haveData)&&$type['id']!=0){
		$data['dat_open_time']=$v['opentimestamp'];
		$data['dat_codes']=$v['opencode'];
		$data['dat_expect']=$v['expect'];
		$data['dat_type']=$type['id'];
		$mysql->insert('lot_data',$data);
		echo date('Y-m-d H:i:s',time())."录入".$ahs[$v['code']].'<br>'."成功<br>";
	}
}

?>

<script>
	setTimeout('myFresh()',3000);

	function myFresh(){
		window.location.reload(true);
	}
</script>
