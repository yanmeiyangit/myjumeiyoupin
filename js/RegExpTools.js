//参数：验证的数据类型
//要验证的字符串
//判断该类型   
function checkAll(type,value){
	switch(type){//type是你要验证的类型（自定），value验证该值
		case 'Postcode'://邮政编码
			var reg = /^[1-9][0-9]{5}$/;
			break;
		case 'Phone'://电话号码
			var reg = /^1[3-9]\d{9}$/;
			break;
		case 'Email'://电子邮件
			var reg = /^\w+@\w+\.(com|cn|net)$/;
			break;
		case 'IdCard'://身份证号
			var reg = /^61\d{8}(0[1-9]|1[0-2])\d{2}\d{3}[\dX]$/; 
			break;
		case 'Birthday'://生日 1999-2-14
			var reg = /^\d{4}(((\.\d{2}){2}|(\-\d{2}){2}|(\/\d{2}){2}))$/; 
			break;
		case 'IpAddress'://Ip地址
			var reg = /^((\d|\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/;
			break;
		case 'Passwords'://密码
			var regLetter = /[a-zA-Z]/; 
			var regNum = /[0-9]/; 
			var regSpecial = /[\$!#]/; 
			break;
		case 'UserNames'://用户名
			var reg = /^[_a-zA-Z]\w{5,14}$/; 
			break;	
	}
		return reg.test(value);
}


