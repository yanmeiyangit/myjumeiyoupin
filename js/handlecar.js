//function addCount(){
//		var counts=parseInt(this.previousElementSibling.value);
//		counts++;
//		this.previousElementSibling.value=counts;
//		var price=parseFloat(this.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
//		var money=counts*price;
//		this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.innerHTML=money+".00";	
//		totalMoneys();
//	}
//	//2、减号函数
//	function reduceCount(){
//		var counts=parseInt(this.nextElementSibling.value);
//		counts--;
//		if(counts<1){
//			return;
//		}
//		this.nextElementSibling.value=counts;
//		var price=parseFloat(this.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
//		var money=counts*price;
//		this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.innerHTML=money+".00";
//		totalMoneys();
//	}
//	//3、删除函数
//	function remove(){
//		var delTable=this.parentNode.parentNode.parentNode.parentNode;
//		delTable.removeChild(this.parentNode.parentNode.parentNode);
//		$("#removedowns").style.display="block";
//	}
//	
//function totalMoneys(){
//		var objTotal=$("#cartab").rows;
//		var totalPrice=0;
//		var totalNum=0;
//		for(var i=0;i<objTotal.length;i++){						
//			totalPrice+= parseFloat(objTotal[i].lastElementChild.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
//			totalNum+= parseFloat(objTotal[i].lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.value);
//		}
//		$("#totalmoney").innerHTML=totalPrice+".00";
//		$("#totalmoneys").innerHTML=totalPrice+".00";
//		$("#totalnums").innerHTML=totalNum+" ";
//}	



function addCount(){
    //先获取商品信息
    var counts=parseInt($(this).prev().val());
	counts++;
   	$(this).prev().val(counts);
    var price=parseFloat($(this).parent().parent().parent().prev().children(0).children(0).html());
	var money=counts*price;
	$(this).parent().parent().parent().next().children(0).children().eq(0).html(money+".00");	
    total();
}
//购物车-
function reduceCount(){
    //先获取商品信息
    var counts=parseInt($(this).next().val());
	counts--;
   	if(counts<1){
		return
	}
   	$(this).next().val(counts);
	var price=parseFloat($(this).parent().parent().parent().prev().children(0).children(0).html());
	var money=counts*price;
	$(this).parent().parent().parent().next().children(0).children().eq(0).html(money+".00");
   	 total();
}

function total(){
		var totalPrice=0;
		var totalNum=0;	
		divs=$(".shiji");
		for(var i=0;i<divs.length;i++){						
			totalPrice += parseFloat(divs.eq(i).children().eq(3).children().eq(0).children().eq(0).html());		
			totalNum+= parseFloat(divs.eq(i).children(0).eq(2).children().eq(0).children().eq(0).children().eq(1).val());
		}
		$("#totalmoney").html(totalPrice+".00")
		$("#totalmoneys").html(totalPrice+".00");
		$("#totalnums").html(totalNum+" ");
}
