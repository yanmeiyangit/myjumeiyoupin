function addCount(){
		var counts=parseInt(this.previousElementSibling.value);
		counts++;
		this.previousElementSibling.value=counts;
		var price=parseFloat(this.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
		var money=counts*price;
		this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.innerHTML=money+".00";	
		totalMoneys();
	}
	//2、减号函数
	function reduceCount(){
		var counts=parseInt(this.nextElementSibling.value);
		counts--;
		if(counts<1){
			return;
		}
		this.nextElementSibling.value=counts;
		var price=parseFloat(this.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
		var money=counts*price;
		this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.innerHTML=money+".00";
		totalMoneys();
	}
	//3、删除函数
	function remove(){
		var delTable=this.parentNode.parentNode.parentNode.parentNode;
		delTable.removeChild(this.parentNode.parentNode.parentNode);
		$("#removedowns").style.display="block";
	}
	
function totalMoneys(){
		var objTotal=$("#cartab").rows;
		var totalPrice=0;
		var totalNum=0;
		for(var i=0;i<objTotal.length;i++){						
			totalPrice+= parseFloat(objTotal[i].lastElementChild.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
			totalNum+= parseFloat(objTotal[i].lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.value);
		}
		$("#totalmoney").innerHTML=totalPrice+".00";
		$("#totalmoneys").innerHTML=totalPrice+".00";
		$("#totalnums").innerHTML=totalNum+" ";
}	


/*function increase(btn){
    //先获取商品信息
    let text = $(btn).next();
    let num = parseInt($(text).val());
    $(text).val(++num);
    //单价
    let price = parseFloat($(text).parent().prev().children(0).html());
    //把单价赋单价给盒子
    $(text).parent().prev().children(0).val(price)
    //总价
    let subTotal1 = (price*num).toFixed(2);
    //把总价赋总价给盒子
    $(text).parent().next().children().eq(0).text(subTotal1);
    //打折之前被划掉的价格
    let discount = parseFloat($(text).parent().prev().children().eq(1).html());
    let subTotal2 = (discount*num).toFixed(2);
    $(text).parent().next().children().eq(1).html(subTotal2+"元");
    total();
}
function decrease(btn){
    //先获取商品信息
    let text = $(btn).prev();
    let num = parseInt($(text).val());
    //判断num不能小于1
    if(num<2){
		return;
	}
    $(text).val(--num);
    //单价
    let price = parseFloat($(text).parent().prev().children().eq(0).html());
    //总价
    let subTotal1 = (price*num).toFixed(2);
//把总价赋总价给盒子
    $(text).parent().next().children().eq(0).text(subTotal1);
    let discount = parseFloat($(text).parent().prev().children().eq(1).html());
    let subTotal2 = (discount*num).toFixed(2);
    $(text).parent().next().children().eq(1).html(subTotal2+"元");
    total();
}
function total(){
	
		
	
		let dls = $(".shopContent dl");
		let sum = 0;
		console.log(typeof(sum));
		//console.log(typeof(dls.eq(0).children().eq(4).children().eq(0).text()));
		
		for(let i=0; i<dls.length; i++) {
			let price = parseFloat(dls.eq(i).children().eq(4).children().eq(0).text());
			console.log(price);
			console.log(typeof(price));
			sum += price;
		}
		$(".totalPrice").text(sum+".00元");
} */
