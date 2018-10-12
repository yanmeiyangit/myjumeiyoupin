<?php	
	header("Content-type:text/html;charset=utf-8");
	
	$userphone=$_POST['userphone'];
	$usermessage=$_POST['usermessage'];
	$userpass=$_POST['userpass'];
	
	//1、建立连接(搭桥)
	$con=mysql_connect("localhost","root","root");
	//2、选择数据库（选择目的地）
	if(!$con){
		echo "连接数据库失败";
	}else{
		mysql_select_db("jumei",$con);
		$sqlstr="select * from jumeiuser where userphone='$userphone'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);			
		if($rows>0){				
			//4）、关闭数据库（过河拆桥）
			mysql_close($con);
			echo "亲，注册失败，用户名已经存在";
		}else{
			$sqlstr="insert into jumeiuser(userphone,usermessage,userpass) values('$userphone','$usermessage','$userpass')";
			$result = mysql_query($sqlstr,$con);	
			//4）、关闭数据库（过河拆桥）
			mysql_close($con);			
			//3、响应
			if($result){	
				echo "注册成功！";
//				header("location:login.html");
				echo "<script>alert('亲，恭喜您，注册成功！');location.href='login.html'</script>";				
			}else{
				echo "注册失败！";
			}			
		}
	}	
?>