//添加（修改）cookie
//参数：
// 键
// 值
// 保质期：单位是天。
//返回值：无
function addCookie(key,value,days){
	//1、根据days获得失效时间
	var d = new Date();
	d.setDate(d.getDate()+days);
	//2、保存
	document.cookie = key+"="+ value+";expires="+d.toGMTString();
}
//获取cookie
//参数：
// 键
//返回值：值。null：表示cookie中没有保存（在cookie中没有找到）

function getCookie(keys){ 
	//1、
	var str = document.cookie;//username=jzm; userpass=123; yhm=baobao
	
	//2、用"; "分割字符串成数组
	var arr = str.split(";");
	//3、循环数组，找以key+"="开头的数组元素
	for(var i in arr){
		if(arr[i].indexOf(keys + '=') != -1){
			return arr[i].substring((keys +"=").length);
		}
	}
}

function checkCookie(user){
	var name = getCookie(user);
	if(name!=null || name!=undefined){
		alert("欢迎回家："+ name);
	}else{
		var kk = prompt('请输入用户名：','');
		addCookie('hym',kk,7);
	}
	return false;
}
//删除cookie
//参数：
//键，
//返回值：无
function removeCookie(key){
	addCookie(key,"",-1);
}



