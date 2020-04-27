window.onload = function(){
	//获取元素
	var banner_btn = document.querySelector(".banner-btn");
	var banner_list = document.querySelector(".banner-list");
	var banner_box = document.querySelector(".banner-box");
	var li_1 = banner_list.querySelector("li");
	var ospan = banner_btn.querySelectorAll("span");
	var w = banner_box.offsetWidth;
	//绑定点击事件
	for(var j=0;j<ospan.length;j++){
		ospan[j].index = j;
		ospan[j].onclick = function(){
			banner_list.style.left = -this.index*w+"px";
			for(var k=0;k<ospan.length;k++){
				ospan[k].style.background = "#ccc";
			}
			this.style.background = "#60c14d";
		}
	}
}
