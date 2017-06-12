var centerTow=document.getElementById("centerTow");
var oB1=centerTow.getElementsByTagName("b")[0];
var centerLis=document.getElementById("centerLis");
var oB=centerLis.getElementsByTagName("b");
var oInput=document.getElementById("oInput");

oInput.onfocus=function(){
	oInput.value="";
}
oInput.onblur=function(){
	if(oInput.value==""){
		oInput.value="请输入搜索关键词";
	}
}
centerTow.onmouseover=function(){
	centerLis.style.display="block";
}
centerLis.onmouseover=function(){
	centerLis.style.display="block";
}
centerTow.onmouseout=function(){
	centerLis.style.display="none";
}
centerLis.onmouseout=function(){
	centerLis.style.display="none";
}
for(var i=0;i<oB.length;i++){
	oB[i].onclick=function(){
		var txt=this.innerHTML;
		this.innerHTML=oB1.innerHTML;
		oB1.innerHTML=txt;
		centerLis.style.display="none";
	}
}

//轮播
var banner=document.getElementById("banner");
var slideshow=document.getElementById("slideshow");
var slideshowLis=slideshow.getElementsByTagName("li");
var slideshowLeft=0;
var dot=document.getElementById("dot");
var dotLis=dot.getElementsByTagName("li");
var dotLisLength=dotLis.length;
var slideshowLisLength=slideshowLis.length;
var zhefandian=2*1675;
var timer;
move();

function move(){
    clearInterval(timer);
    var str=0;
    timer=setInterval(function(){
        slideshowLeft-= 1675;
        
         if(slideshowLeft < -zhefandian){
            slideshowLeft=0;
            str=0;
            slideshow.style.transition=0+"s";
            slideshow.style.left = slideshowLeft + 'px';
        }else{
        	slideshow.style.left = slideshowLeft + 'px';
        	slideshow.style.transition=0.3+"s";
        	str++;
        }
        for(var i=0;i<dotLisLength;i++){
			dotLis[i].className="";
		}
       dotLis[str].className="sign";
    },4000);
}

for(var j=0;j<dotLisLength;j++){
	dotLis[j].index=j;
	dotLis[j].onmouseover=function(){
		clearInterval(timer);
		for(var i=0;i<dotLisLength;i++){
			dotLis[i].className="";
		}
		slideshow.style.left = -(this.index*1675) + 'px';
		this.className="sign";
	}
	dotLis[j].onmouseout=function(){
		move();
	}
}



//侧边二级
var box1=document.getElementById("box1");
var box2=document.getElementById("box2");
var box3=document.getElementById("box3");
var box1Lis=document.getElementById("box1Lis");
var box2Lis=document.getElementById("box2Lis");
var box3Lis=document.getElementById("box3Lis");
box1.onmouseover=function(){
	box1Lis.style.display="block";
}
box1.onmouseout=function(){
	box1Lis.style.display="none";
}
box1Lis.onmouseover=function(){
	box1Lis.style.display="block";
}
box1Lis.onmouseout=function(){
	box1Lis.style.display="none";
}
box2.onmouseover=function(){
	box2Lis.style.display="block";
}
box2.onmouseout=function(){
	box2Lis.style.display="none";
}
box2Lis.onmouseover=function(){
	box1Lis.style.display="block";
}
box2Lis.onmouseout=function(){
	box2Lis.style.display="none";
}
box3.onmouseover=function(){
	box3Lis.style.display="block";
}
box3.onmouseout=function(){
	box3Lis.style.display="none";
}
box3Lis.onmouseover=function(){
	box3Lis.style.display="block";
}
box3Lis.onmouseout=function(){
	box3Lis.style.display="none";
}

//无缝
var outerBox=document.getElementById("outerBox");
var bigBoxLeft=document.getElementById("bigBoxLeft");
var leftLis=bigBoxLeft.getElementsByTagName("li");
var outer=document.getElementById("outer");
var outerDiv=outer.getElementsByClassName("outerBox");


for(var i=0;i<leftLis.length;i++){
	leftLis[i].index=i;
	leftLis[i].onmouseover=function(){
		for(var j=0;j<leftLis.length;j++){
            leftLis[j].className="";
            outerDiv[j].style.display="none";
		}
		this.className="pitch";
        outerDiv[this.index].style.display="block";
	}
}

var leftSpan=document.getElementById("leftSpan");
var rightSpan=document.getElementById("rightSpan");
var oDiv1=document.getElementById("oDiv1");
var oDiv2=document.getElementById("oDiv2");
var topUl=document.getElementById("top");
var topLis=topUl.getElementsByTagName("li");
var butUl=document.getElementById("but");
var butLis=butUl.getElementsByTagName("li");
var topLength=topLis.length;
var butLength=butLis.length;
var topLiWidth=topLis[1].offsetWidth;
var butLiWidth=butLis[1].offsetWidth;

oDiv1.innerHTML+=oDiv1.innerHTML;
oDiv2.innerHTML+=oDiv2.innerHTML;

var str=0;
var str1=0;
leftSpan.onclick=function () {
    str-=topLiWidth;
    if(str<-topLength*topLiWidth){
        oDiv1.style.transition=0+"s";
        str=0;
        oDiv1.style.left=str+"px";
    }else {
        oDiv1.style.transition=0.5+"s";
        oDiv1.style.left=str+"px";
	}


    str1-=butLiWidth;
    if(str1<-butLength*butLiWidth){
        oDiv2.style.transition=0+"s";
        str1=0;
        oDiv2.style.left=str1+"px";
    }else{

        oDiv2.style.transition=0.5+"s";
        oDiv2.style.left=str1+"px";
	}

}
rightSpan.onclick=function () {
    str+=topLiWidth;
    if(str>0){
    	oDiv1.style.transition=0+"s";
        str=-butLength*butLiWidth;

    }
    oDiv1.style.left=str+"px";
    oDiv1.style.transition=0.5+"s";
    str1+=butLiWidth;
    if(str1>0){
        oDiv2.style.transition=0+"s";
        str1=-butLength*butLiWidth;
    }
    oDiv2.style.left=str1+"px";
    oDiv2.style.transition=0.5+"s";
}


//手风琴
var one=document.getElementById("one");
		var tow=document.getElementById("tow");
		var three=document.getElementById("three");
		var four=document.getElementById("four");
		
		
		one.onmouseover=function(){
			one.style.left=0+"px";
			tow.style.left=550+"px";
			three.style.left=762+"px";
			four.style.left=973+"px";
		}
		tow.onmouseover=function(){
			one.style.left=0+"px";
			tow.style.left=211+"px";
			three.style.left=762+"px";
			four.style.left=973+"px";
		}
		three.onmouseover=function(){
			one.style.left=0+"px";
			tow.style.left=211+"px";
			three.style.left=423+"px";
			four.style.left=973+"px";
		}
		four.onmouseover=function(){
			one.style.left=0+"px";
			tow.style.left=211+"px";
			three.style.left=423+"px";
			four.style.left=634+"px";
		}
		

//最后的无缝滚动

var searchEndMove=document.getElementById("searchEndMove");
var searchEndMoveUl=searchEndMove.getElementsByTagName("ul")[0];
var searchEndMoveUlLis=searchEndMove.getElementsByTagName("li");
var liHeight=searchEndMoveUlLis[0].offsetHeight;
var lisLength=searchEndMoveUlLis.length;
searchEndMoveUl.innerHTML+=searchEndMoveUl.innerHTML;
var ulTop=0;
var timer1;
end();
function end(){
	clearInterval(timer1);
	timer1=setInterval(function(){
		ulTop-=20;
		if(ulTop<-liHeight*lisLength){
			ulTop=0;
		}
		searchEndMoveUl.style.top=ulTop+"px";
	},200)
}
var searchEndMove2=document.getElementById("searchEndMove2");
var searchEndMoveUl2=searchEndMove2.getElementsByTagName("ul")[0];
var searchEndMoveUlLis2=searchEndMove2.getElementsByTagName("li");
var liHeight2=searchEndMoveUlLis2[0].offsetHeight;
var lisLength2=searchEndMoveUlLis2.length;
searchEndMoveUl2.innerHTML+=searchEndMoveUl2.innerHTML;
var ulTop2=0;
var timer2;
end2();
function end2(){
	clearInterval(timer2);
	timer2=setInterval(function(){
		ulTop2-=20;
		if(ulTop2<-liHeight*lisLength){
			ulTop2=0;
		}
		searchEndMoveUl2.style.top=ulTop+"px";
	},200)
}
var searchEndMove3=document.getElementById("searchEndMove3");
var searchEndMoveUl3=searchEndMove3.getElementsByTagName("ul")[0];
var searchEndMoveUlLis3=searchEndMove3.getElementsByTagName("li");
var liHeight3=searchEndMoveUlLis3[0].offsetHeight;
var lisLength3=searchEndMoveUlLis3.length;
searchEndMoveUl3.innerHTML+=searchEndMoveUl3.innerHTML;
var ulTop3=0;
var timer3;
end3();
function end3(){
	clearInterval(timer3);
	timer3=setInterval(function(){
		ulTop3-=20;
		if(ulTop3<-liHeight*lisLength){
			ulTop3=0;
		}
		searchEndMoveUl3.style.top=ulTop+"px";
	},200)
}


var oneB=document.getElementById("oneB");
var towB=document.getElementById("towB");
var oneSpan=document.getElementById("oneSpan");
var towSpan=document.getElementById("towSpan");
var towDiv=document.getElementById("towDiv");
var oneDiv=document.getElementById("oneDiv");
oneB.onclick=function(){
	oneSpan.style.display="block";
	towSpan.style.display="none";
	oneB.className="Col";
	towB.className="";
	oneDiv.style.display="block";
	towDiv.style.display="none";
	
}
towB.onclick=function(){
	oneSpan.style.display="none";
	towSpan.style.display="block";
	towB.className="Col";
	oneB.className="";
	oneDiv.style.display="none";
	towDiv.style.display="block";
	
}