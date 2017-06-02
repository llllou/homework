 var CenMiddle=document.getElementById("navCenMiddle");
var navSecondary=document.getElementById("navSecondary");
var sum="none";
// 轮播图
var oImgs=document.getElementById("slideshow").getElementsByTagName("img");
var oScroll=document.getElementById("scrollbar").getElementsByTagName("li");
var oButtons=document.getElementById("slideshow").getElementsByTagName("button");
var num=0;
// 轮播图2
var oSliImg=document.getElementById("secButt-slideshow").getElementsByTagName("ul");
var option=document.getElementById("secButtSlideshow-scrollbar").getElementsByTagName("span");
var str=0;
// 登录表
var oInput=document.getElementById("secInput").getElementsByTagName("input");
var register=document.getElementById("secInputRegister");
var oWindows=document.getElementById("secInWindows");
var oWindowsText=oWindows.getElementsByTagName("input");
var oWindowsConfirm=oWindows.getElementsByTagName("button");

// nav二级菜单
CenMiddle.onclick=function(){
    sum=sum=="none"?"block":"none";
    navSecondary.style.display=sum;
}
// 轮播图
oButtons[0].onclick=function(){
    num--;
    if(num<0){
        num=4
    }
    fun();
}
oButtons[1].onclick=function(){
    num++;
    if(num>4){
        num=0;
    }
    fun();
}
for(var i=0;i<oScroll.length;i++){
            (function(a){
                    oScroll[a].onclick=function(){
                            num=a;
                            fun();
                    }
            })(i)      
}
// 轮播图2
for(var j=0;j<option.length;j++){
    (function(m){
           option[m].onclick=function(){
                    str=m;
                    fun2();
           }
    })(j);
}
// 注册表
register.onclick=function(){
        oWindows.style.display="block";
        oWindowsText[0].value=oInput[0].value;
        oWindowsText[1].value=oInput[1].value;
}
oWindows.onclick=function(){
    oWindows.style.display="none";
}
// 业务
function fun(){
    for(var k=0; k<oScroll.length;k++){
        oImgs[k].className="";
        oScroll[k].className="";
    }
        oImgs[this.num].className="slidesImg";
        oScroll[num].className="scrollText";
    
}
function fun2(){
    for(var m=0;m<oSliImg.length;m++){
        oSliImg[m].className="";
        option[m].className="";
    }
        oSliImg[this.str].className="secButSli-special";
        option[this.str].className="secButtSlideshowScFirst";

}

