<?php	
	header("Content-type:text/html;charset=utf-8");
	$userphone=$_POST['userphone'];
	$userpass=$_POST['userpass'];
	//1、建立连接(搭桥)
	$con=mysql_connect("localhost","root","root");
	//2、选择数据库（选择目的地）
	if(!$con){
		echo "连接数据库失败";
	}else{
		mysql_select_db("jumei",$con);
		$sqlstr="select * from jumeiuser where userphone='$userphone' and userpass='$userpass'";
		$result=mysql_query($sqlstr,$con);
		mysql_close($con);
		$rows=mysql_num_rows($result);
		if($rows==0){
			echo "登录失败！";		
		}else{
			header("location:index.html");
		}
	}	
?>