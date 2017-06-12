var searchBox=document.getElementById("search-box");
searchBox.onfocus=function () {
    searchBox.value="";
}
searchBox.onblur=function () {
    searchBox.value="请输入搜素关键词";
}
var oLi=document.getElementById("rolling-ball").getElementsByTagName("li");
var oImg=document.getElementsByClassName("warp")[0];
    oLi[0].onclick = function () {
        for (f = 0; f < 3; f++) {
            oLi[f].className = "";
        }
        oLi[0].className = "firstLi";
        oImg.style.left = 0 + "px";
    }

oLi[1].onclick = function () {
    for (f = 0; f < 3; f++) {
        oLi[f].className = "";
    }
    oLi[1].className = "firstLi";
    oImg.style.left = -2300 + "px";
}
oLi[2].onclick = function () {
    for (f = 0; f < 3; f++) {
        oLi[f].className = "";
    }
    oLi[2].className = "firstLi";
    oImg.style.left = -4000 + "px";
}
var leftbox=document.getElementById("leftBox").getElementsByTagName("li");
var rightBox=document.getElementById("rightBox").getElementsByClassName("common");
var rightBoxF=document.getElementById("four");
var oUl=document.getElementById("carousel");
var oLi1=oUl.getElementsByTagName("li");
var leftBtn=document.getElementById("leftBtn");
var rightBtn=document.getElementById("rightBtn");
oUl.innerHTML=oUl.innerHTML+oUl.innerHTML+oUl.innerHTML;
var num=-1206;
var maxstep=6*oLi1[0].offsetWidth+16;
leftBtn.onclick=function () {
    num-=201;
    if(num<=-2412) num=-1206;
    oUl.style.left=num+"px";
}
rightBtn.onclick=function () {
    num+=201;
    if(num>=0) {
        num=-1206;
    }
    oUl.style.left=num+"px";
}
for(i=0;i<3;i++){
    leftbox[i].index=i;
    leftbox[i].onmouseover=function () {
        var a=this.index;
        fun(a);
    }
}
leftbox[3].onmouseover=function (){
    for(i=0;i<rightBox.length;i++){
        rightBox[i].style.display="none";
    }
    rightBoxF.style.display="block"
}
function  fun(f) {
    for(i=0;i<rightBox.length;i++){
        rightBox[i].style.display="none";
    }
    rightBox[f].style.display="block";
}
var first=document.getElementById("warp4").getElementsByTagName("div")[0];
var second=document.getElementById("warp4").getElementsByTagName("div")[1];
var third=document.getElementById("warp4").getElementsByTagName("div")[2];
var four=document.getElementById("warp4").getElementsByTagName("div")[3];
first.onmouseover=function () {
    second.style.left="600px";
    third.style.left="800px";
    four.style.left="1000px";
}
second.onmouseover=function () {
    second.style.left="300px";
    third.style.left="800px";
    four.style.left="1000px";
}
third.onmouseover=function () {
    second.style.left="300px";
    third.style.left="500px";
    four.style.left="1000px";
}
four.onmouseover=function () {
    second.style.left="300px";
    third.style.left="500px";
    four.style.left="700px";
}
var skip=document.getElementById("concent-third").getElementsByTagName("h4");
var skipUL=document.getElementById("concent-third").getElementsByTagName("ul");
var Block=document.getElementById("concent-third").getElementsByClassName("concent");
for(i=0;i<skip.length;i++){
    skip[i].index=i;
    skip[i].onclick=function () {
        for(j=0;j<skip.length;j++){
            skip[j].className="";
            skipUL[j].className="";
          Block[j].className="concent";
        }
        this.className="skip";
        Block[this.index].className="concent Block";
        skipUL[this.index].className="Ul-first";
    }
}
var OUL=document.getElementById("wheeled");
var OLI=OUL.getElementsByTagName("li");
OUL.innerHTML+=OUL.innerHTML;
var maxnum=OLI.length/2*OLI[0].offsetHeight;
var NUM=0;
var timer;
timer=setInterval(function () {
    NUM-=STEP;
    if(NUM<=-maxnum){
        NUM=0;
    }
    OUL.style.top=NUM+"px";
},2000);
var OUL1=document.getElementById("wheeled1");
var OLI1=OUL1.getElementsByTagName("li");
OUL1.innerHTML+=OUL1.innerHTML;
var maxnum1=OLI1.length/2*OLI1[0].offsetHeight;
var NUM1=0;
var timer1;
timer1=setInterval(function () {
    NUM1-=STEP;
    if(NUM1<=-maxnum1){
        NUM1=0;
    }
    OUL1.style.top=NUM1+"px";
},2000);
var OUL2=document.getElementById("wheeled2");
var OLI2=OUL2.getElementsByTagName("li");
OUL2.innerHTML+=OUL2.innerHTML;
var STEP=OLI2[0].offsetHeight;
var maxnum2=OLI2.length/2*STEP;
var NUM2=0;
var timer2;
timer2=setInterval(function () {
    NUM2-=STEP;
    if(NUM2<=-maxnum2){
        NUM2=0;
    }
    OUL2.style.top=NUM2+"px";
},2000);

