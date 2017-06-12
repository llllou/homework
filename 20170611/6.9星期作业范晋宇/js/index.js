var navFirst=document.getElementById("navFirst");
var code=document.getElementById("code");

navFirst.onmouseover=function(){
    code.style.display="block";
}
navFirst.onmouseout=function(){
    code.style.display="none";
}
var navInput=document.getElementById("navInput");
navInput.onfocus=function(){
    navInput.placeholder="";
}
navInput.onblur=function(){
    navInput.placeholder="请输入关键搜索词";
}
// 第二导航
var navStair=document.getElementsByClassName("navStair");
var navFooterSecond=document.getElementsByClassName("navFooterSecond");

for(var i=0;i<navStair.length;i++){
    navStair[i].index=i;
    navFooterSecond[i].index=i;
    navStair[i].onmouseover=function(){
            navStair[this.index].style.background="#dd4f50"
            navFooterSecond[this.index].style.display="block";
    }
    navStair[i].onmouseout=function(){
            navStair[this.index].style.background="#333";
            navFooterSecond[this.index].style.display="none";

    }
     navFooterSecond[i].onmouseover=function(){
            navFooterSecond[this.index].style.display="block";
            navStair[this.index].style.background="#dd4f50"
    }
    navFooterSecond[i].onmouseout=function(){
            navFooterSecond[this.index].style.display="none";
            navStair[this.index].style.background="#333";
    }
}
// 替换内容
var sBoxLLeft=document.getElementById("sBoxLLeft");
var sBoxLLeftSecond=document.getElementById("sBoxLLeftSecond");
var oAs=document.getElementById("sBoxLLeftSecond").getElementsByTagName("a");
var inntee="";
   for(var i=0;i<oAs.length;i++){
    oAs[i].index=i;
    oAs[i].onclick=function(){
        inntee=oAs[this.index].innerText;  
        oAs[this.index].innerText=sBoxLLeft.innerText;
        sBoxLLeft.innerText=inntee;
    }
}
sBoxLLeft.onmouseover=function(){
    sBoxLLeftSecond.style.display="block";
}
sBoxLLeft.onmouseout=function(){
    sBoxLLeftSecond.style.display="none";
}
sBoxLLeftSecond.onmouseover=function(){
    sBoxLLeftSecond.style.display="block";
}
sBoxLLeftSecond.onmouseout=function(){
    sBoxLLeftSecond.style.display="none";
}

// 轮播图
var frameworkText=document.getElementById("frameworkText");
var SpotoLis=document.getElementById("frameworkSpot").getElementsByTagName("li");
var timer;
SpotoLis[0].onclick=function(){
        clearInterval(timer);
        frameworkText.style.left=-262+"px";
        fun();
}
SpotoLis[1].onclick=function(){
        clearInterval(timer);
        frameworkText.style.left=-(262+1366+272+400)*1+"px";
        fun();
}
SpotoLis[2].onclick=function(){
        clearInterval(timer);
        frameworkText.style.left=-(131+1366+272+400)*2+"px";
        fun();
}
fun();
function fun(){
    var num=-262;
            timer=setInterval(function(){
                    num-=1366+272+400;
                    if(num<-(1366+262*2)*3){
                        num=-262;
                        frameworkText.style.transition=0+"s";
                    }
                    frameworkText.style.left=num+"px";
                    frameworkText.style.transition=1+"s";
            },4000);
}
// 相片墙
var oDivLeft=document.getElementById("oDivLeft");
         var oAs=oDivLeft.getElementsByTagName("a");
         var oDivRight=document.getElementById("oDivRight");
         var oDivs=oDivRight.getElementsByTagName("div");
              for(var i=0;i<oAs.length;i++){
            oAs[i].index=i;
            oAs[i].onmouseover=function(){
                    for(var j=0;j<oAs.length;j++){
                            oAs[j].className="";
                            oDivs[j].className="";
                    }
                    this.className="oDivLeftText";
                    oDivs[this.index].className="oDiv-rightOne";
            }
        }
        
        // 轮播图
        var RightTop=document.getElementById("RightTop");
        var buttonLeft=document.getElementById("buttonLeft");
        var buttonRight=document.getElementById("buttonRight");
        var ulTop=document.getElementById("ulTop");
        var ulTopLi=ulTop.getElementsByTagName("li");
        var ulButtom=document.getElementById("RightButtom");
        var ulButtonLi=ulButtom.getElementsByTagName("li");
        var longest=document.getElementById("longest");
        var longest2=document.getElementById("longest2");
        var num=0;
        var num2=0;
        var ulTopLiLength=ulTopLi.length;
        var ulButtonLiLength=ulButtonLi.length;
        ulTop.innerHTML+=ulTop.innerHTML;
        ulButtom.innerHTML+=ulButtom.innerHTML;
        buttonLeft.onclick=function(){
                num-=204;
                num2-=102;
                if(num<-204*ulTopLiLength||num2<-102*ulButtonLiLength){
                    num=0;
                    num2=0;
                }
                longest.style.left=num+"px";
                longest2.style.left=num2+"px";
        }
        buttonRight.onclick=function(){
                num+=204;
                num2+=102;
                if(num>0||num2>0){
                    num=-204*ulTopLiLength;
                    num2=-102*ulButtonLiLength;
                }
                longest.style.left=num+"px";
                longest2.style.left=num2+"px";
        }
// 第二段
var four=document.getElementById("four");
            var one=document.getElementById("one");
            var two=document.getElementById("two");
            var three=document.getElementById("three");
            four.onmouseover=function(){
                    one.style.left=551+"px";
                    two.style.left=760+"px";
                    three.style.left=969+"px";

            }
            one.onmouseover=function(){
                    one.style.left=211+"px";
                    two.style.left=760+"px";
                    three.style.left=969+"px";
            }
            two.onmouseover=function(){
                    one.style.left=211+"px";
                    two.style.left=421+"px";
                    three.style.left=969+"px";
            }
            three.onmouseover=function(){
                    one.style.left=211+"px";
                    two.style.left=421+"px";
                    three.style.left=630+"px";
            }
// 结尾无缝滚动
var oMarqueeWithin=document.getElementById("oMarqueeWithin");
var oMarqueeWithinLi=oMarqueeWithin.getElementsByTagName("li");
var oMarqueeOutlineborder=document.getElementById("oMarqueeOutlineborder");
var Lilength=oMarqueeWithinLi.length;
oMarqueeWithin.innerHTML+=oMarqueeWithin.innerHTML;
var nummer=0;
var thisse;
function play(){
        thisse=setInterval(function(){
                nummer-=103;
                if(nummer<-Lilength*83){
                    oMarqueeOutlineborder.style.transition=0+"s";
                    nummer=0;   
                }
                oMarqueeOutlineborder.style.transition=0.5+"s";
                oMarqueeOutlineborder.style.top=nummer+"px";
        },2000);
}
play();
oMarqueeOutlineborder.onmouseover=function(){
    clearInterval(thisse);
}
oMarqueeOutlineborder.onmouseout=function(){
    play();
}


var oMarqueeWithin1=document.getElementById("oMarqueeWithin1");
var oMarqueeWithinLi1=oMarqueeWithin1.getElementsByTagName("li");
var oMarqueeOutlineborder1=document.getElementById("oMarqueeOutlineborder1");
var Lilength1=oMarqueeWithinLi1.length;
oMarqueeWithin1.innerHTML+=oMarqueeWithin1.innerHTML;
var nummer1=0;
var thisse1;
function play1(){
        thisse1=setInterval(function(){
                nummer1-=103;
                if(nummer1<-Lilength1*83){
                    oMarqueeOutlineborder1.style.transition=0+"s";
                    nummer1=0;
                    
                }
                oMarqueeOutlineborder1.style.transition=0.5+"s";
                oMarqueeOutlineborder1.style.top=nummer1+"px";
        },1700);
}
play1();
oMarqueeOutlineborder1.onmouseover=function(){
    clearInterval(thisse1);
}
oMarqueeOutlineborder1.onmouseout=function(){
    play1();
}

var oMarqueeWithin2=document.getElementById("oMarqueeWithin2");
var oMarqueeWithinLi2=oMarqueeWithin2.getElementsByTagName("li");
var oMarqueeOutlineborder2=document.getElementById("oMarqueeOutlineborder2");
var Lilength2=oMarqueeWithinLi2.length;
oMarqueeWithin2.innerHTML+=oMarqueeWithin2.innerHTML;
var nummer2=0;
var thisse2;
function play2(){
        thisse2=setInterval(function(){
                nummer2-=103;
                if(nummer2<-Lilength2*83){
                    oMarqueeOutlineborder2.style.transition=0+"s";
                    nummer2=0;
                }
                oMarqueeOutlineborder2.style.transition=0.5+"s";
                oMarqueeOutlineborder2.style.top=nummer2+"px";
        },2300);
}
play2();
oMarqueeOutlineborder2.onmouseover=function(){
    clearInterval(thisse2);
}
oMarqueeOutlineborder2.onmouseout=function(){
    play2();
}