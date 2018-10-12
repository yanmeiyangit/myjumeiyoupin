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
		if(counts<0){
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