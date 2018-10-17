function fix(){	
	var offset1= $("#guding").offset().top;
	var scrolls = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrolls>= offset1-10){
			$("#guding")[0].style.position = "fixed";
			$("#guding")[0].style.top = 0;
			$("#guding")[0].style.width="1090px";
			$("#guding")[0].style.boxShadow="0 2px 3px #ccc";
	}else{
			$("#guding")[0].style.position="static";
			$("#guding")[0].style.top=offset1+"px";
	}	
}
