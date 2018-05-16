//选项卡
function webtab(num,classN){
	if(num == 0){
		num = "";
	}else{
		num = num;
	}
	var $div_li =$(".tab"+num+" .tab_menu"+num+"").find("li");
	$div_li.click(function(){
		$(this).addClass(classN).siblings().removeClass(classN); 
		var index =  $div_li.index(this);
		$("div.tab_box"+num+" > div").eq(index).show().siblings().hide();
	})
}
//首页头条新闻
function autoScroll(obj,sj){
	if($(obj).find(">li").length >2){
		var lH = $(obj).find(">li").height();
		setInterval(function(){
			$(obj).find(">li").eq(0).animate({marginTop:-lH,opacity:0},500,function(){
				$(this).eq(0).css('margin-top','').appendTo(obj).animate({opacity:1});
			});
		},sj);
	}	
};
//首页头部固定
function headerScroll(obj){
	$(window).scroll(function () {
		var scrollTop	= 	$(document).scrollTop();
		var BanHeight	= 	$(".hm_banner").height()-$(".index-header").height();
		var ratio=scrollTop/BanHeight;

		if(scrollTop < BanHeight){
			$(".home-hd").css("background-color","rgba(255,255,255,"+ratio+")");
			$(".home-hd .location span").css("color","rgb("+(255-parseInt((255-153)*ratio))+","+(255-parseInt((255-153)*ratio))+","+(255-parseInt((255-153)*ratio))+")");
			$(".home-hd .location .icon-white .icon-gray").css("opacity",ratio);
			$(".home-hd .search-input").css("background-color","rgba("+(255-parseInt((255-234)*ratio))+","+(255-parseInt((255-235)*ratio))+","+(255-parseInt((255-238)*ratio))+",0.6)");
			$(".home-hd .search-input .search-placeholder").css("color","rgb("+(255-parseInt((255-102)*ratio))+","+(255-parseInt((255-102)*ratio))+","+(255-parseInt((255-102)*ratio))+")");
			$(".home-hd .search-input .search-icon .icon-gray").css("opacity",ratio);
			$(".home-hd .icon-mess .icon-mess-gray").css("opacity",ratio);
		}else{
			$(".home-hd").css("background-color","rgba(255,255,255,1)");
			$(".home-hd .location span").css("color","rgb(153,153,153)");
			$(".home-hd .location .icon-white .icon-gray").css("opacity",1);
			$(".home-hd .search-input").css("background-color","rgba(234,235,238,0.6)");
			$(".home-hd .search-input .search-placeholder").css("color","rgb(102,102,102)");
			$(".home-hd .search-input .search-icon .icon-gray").css("opacity",1);
			$(".home-hd .icon-mess .icon-mess-gray").css("opacity",1);
		}
	});
}
//头部下拉菜单
function dropNav(){
	$(".drop-nav span").click(function(){
        $(".drop-nav-list").toggle();
    });
}
//关闭弹出层
function closedPopup(){
    $(".popup-mask").click(function(){
        $(".popup-mask,.popup").hide();
        $("html").removeClass();
    });
    $(".popup .closed,.popup .btn-sure").click(function(){
        $(".popup-mask,.popup").hide();
        $("html").removeClass();
    });
}

/*
清空Input
obj		Input盒子名称
clear 	关闭按钮名称
*/
function clearInput(obj,clear){
	$(obj).on("propertychange input focus",function(){
		$(this).siblings("i").show();
	}).on("blur",function(){
		var $this=$(this);
		setTimeout(function(){
			$this.siblings("i").hide();
		},200);
		$(clear).on("click",function(){
			$(this).siblings("input").val("").focus();
			$(this).hide();
		})
	});
}
//事件转移
function fn_up(obj){
	document.getElementById(obj).click();
}

//短信发送
var countdown=60; 
function settime(obj) {
	if (countdown == 0) { 
		obj.removeAttribute("disabled");    
		obj.value="重新发送"; 
		return;
	} else { 
		obj.setAttribute("disabled", true); 
		obj.value = countdown + "s";
		countdown--; 
	} 
	setTimeout(function() { 
		settime(obj)
	},1000) 
}

/*计算已输入字数*/
function getLength(str){
	return String(str).replace(/[^\x00-\xff]/g,'aa').length;
}
/*
	textarea : 文本区
	word : 显示已输入字数区域
	total : 限制的最大输入字数
*/
function wordCount(textarea,word,total){
	var num=Math.ceil(getLength(textarea.val())/2);
	if(num<=total){
		word.html(num);
	}else{
		var val="";
		var valLength=0;
		var i=0;
		while(valLength<total*2){			
			var str=textarea.val().substring(i,i+1);
			i++;
			val=val+str; 
			if (/[^\x00-\xff]/g.test(str)) {  
				valLength += 2;
			} else {  
				valLength++;  
			}				
		}			
		textarea.val(val);
		word.html(total);
	}
}

