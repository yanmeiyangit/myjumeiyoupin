<?php	
	header("Content-type:text/html;charset=utf-8");
	$userphone=$_GET['userphone'];
	//1、建立连接(搭桥)
	$con=mysql_connect("localhost","root","root");
	//2、选择数据库（选择目的地）
	if(!$con){
		echo "连接数据库失败";
	}else{
		mysql_select_db("jumei",$con);
		$sqlStr="select * from jumeiuser where userphone='$userphone'";
		$result=mysql_query($sqlStr,$con);
		mysql_close($con);		
		$rows=mysql_num_rows($result);
		if($rows==0){			
			echo "1";		
		}else{
			echo "0";	
		}
	}	
?>