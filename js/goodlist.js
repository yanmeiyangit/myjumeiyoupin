function scales(evt){
		let left1=evt.pageX-$("#box").offset().left-50;
		let top1=evt.pageY-$("#box").offset().top-50;
		if(left1<0){
			left1=0;
		}else if(left1>350-100){
			left1=350-100;
		}
		if(top1<0){
			top1=0;
		}else if(top1>350-100){
			top1=350-100
		}
		
		$("#mirrorbox")[0].style.left=left1+"px";
		$("#mirrorbox")[0].style.top=top1+"px";
		$("#showbox")[0].style.backgroundPosition=(-3*left1)+"px "+(-3*top1)+"px";

}

		
