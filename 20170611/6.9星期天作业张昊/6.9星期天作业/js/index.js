/**
 * Created by sks on 2017/6/9.
 */
// 点击替换文字
var substitute = document.getElementById("substitute");
var subint = document.getElementById("subint");
var subintas = subint.getElementsByTagName("a");
for(var i = 0 ; i < subintas.length ; i++){
    subintas[i].index=i;
    subintas[i].onclick=function () {
        var str = "";
        str=subintas[this.index].innerText;
        subintas[this.index].innerText=substitute.innerText;
        substitute.innerText=str;
    }
}
subint.onmouseover=substitute.onmouseover=function(){
    subint.style.display="block";
};
subint.onmouseout=substitute.onmouseout=function () {
    subint.style.display="none";
};
// 轮播图
var carouselImg = document.getElementById("carouselImg");
var carouselImgs = carouselImg.getElementsByTagName("li");
var carouselImgsLength = carouselImgs.length;
carouselImg.innerHTML+=carouselImg.innerHTML;
var nLeft = -190;
var num = -10;
var index = 1;
var timer;
setTimeout(str,5000);
function str() {
    timer = setInterval(fun,5);
}
function fun() {
    nLeft+=num;
    if(nLeft < -2000*carouselImgsLength-190){ nLeft=-190;index=0}
    if(nLeft < -2000*index-190 ){
        nLeft=-2000*index-190;
        index++;
        clearInterval(timer);
        setTimeout(str,5000);
    }
    if(nLeft > -190) nLeft=-2000*carouselImgsLength;
    carouselImg.style.left=nLeft+"px";
}
// 小圆点预留
var circle = document.getElementById("circle");
var circleLis = circle.getElementsByTagName("li");

// 大碗
var oUl = document.getElementById("oUl");
var lis = oUl.getElementsByTagName("li");
var lmageList = document.getElementById("lmageList");
var lmageoDivs = lmageList.getElementsByTagName("div");
for(var i = 0 ; i < lis.length ; i++){
    lis[i].index=i;
    lis[i].onmouseover=function () {
        for(var t = 0 ; t < lis.length ; t++){
            lis[t].className="";
            lmageoDivs[t].className="";
        }
        this.className="liSp";
        lmageoDivs[this.index].className="disnone";
    }
}

var content = document.getElementById("content");
var content2 = document.getElementById("content2");
var lmageS = content.getElementsByTagName("li");
var lmages2 = content2.getElementsByTagName("li");
var butLeft = document.getElementById("butLeft");
var butRight = document.getElementById("butRight");

content.innerHTML+=content.innerHTML;
var lmagesLength = lmageS.length;
var zfd = lmageS[lmagesLength/2].offsetLeft;

content2.innerHTML+=content2.innerHTML;
var lmages2Length = lmages2.length;
var zfd2 = lmages2[lmages2Length/2].offsetLeft;


var newLeft=0;
var newLeft2=0;
butLeft.onclick=function () {
    newLeft-=203;
    newLeft2-=101.5;
    content.style.transition="left 0.5s,right 0.5s";
    content2.style.transition="left 0.5s,right 0.5s";
    fun1();
};
butRight.onclick=function () {
    newLeft+=203;
    newLeft2+=101.5;
    content.style.transition="left 0.5s,right 0.5s";
    content2.style.transition="left 0.5s,right 0.5s";
    fun1();
};
function fun1() {
    if(newLeft < -zfd){content.style.transition="left 0s,right 0s"; newLeft=0;}
    if(newLeft > 0){content.style.transition="left 0s,right 0s"; newLeft= -zfd;}
    if(newLeft2 < -zfd2){ content2.style.transition="left 0s,right 0s";newLeft2=0;}
    if(newLeft2 > 0){ content2.style.transition="left 0s,right 0s";newLeft2= -zfd;}
    content.style.left=newLeft+"px";
    content2.style.left=newLeft2+"px";
}
// 机构
var oDiv = document.getElementById("oDiv");
var lmages = oDiv.getElementsByTagName("div");
lmages[0].onmouseover=function () {
    lmages[1].style.left=550+"px";
    lmages[2].style.left=760+"px";
    lmages[3].style.left=970+"px";
};
lmages[1].onmouseover=function () {
    lmages[1].style.left=210+"px";
    lmages[2].style.left=760+"px";
    lmages[3].style.left=970+"px";
};
lmages[2].onmouseover=function () {
    lmages[1].style.left=210+"px";
    lmages[2].style.left=420+"px";
    lmages[3].style.left=970+"px";
};
lmages[3].onmouseover=function () {
    lmages[1].style.left=210+"px";
    lmages[2].style.left=420+"px";
    lmages[3].style.left=630+"px";
};
// 图库
var sectionStylistTopSp = document.getElementById("sectionStylistTopSp");
var sectionStylistTopSpTwo = document.getElementById("sectionStylistTopSpTwo");
var mapDepotInterior = document.getElementById("mapDepotInterior");
var mapDepotInteriorTow = document.getElementById("mapDepotInteriorTow");
sectionStylistTopSp.onclick=function () {
    event.preventDefault();
    mapDepotInterior.style.display="block";
    mapDepotInteriorTow.style.display="none";
    sectionStylistTopSp.className="sectionStylistTopSp";
    sectionStylistTopSpTwo.className="";
};
sectionStylistTopSpTwo.onclick=function () {
    event.preventDefault();
    mapDepotInterior.style.display="none";
    mapDepotInteriorTow.style.display="block";
    sectionStylistTopSp.className="";
    sectionStylistTopSpTwo.className="sectionStylistTopSp";
};
// 最新动态
var RollInterior = document.getElementById("RollInterior");
var RollInteriorTwo = document.getElementById("RollInteriorTwo");
var RollInteriorThree = document.getElementById("RollInteriorThree");

RollInterior.innerHTML+=RollInterior.innerHTML;
RollInteriorTwo.innerHTML+=RollInteriorTwo.innerHTML;
RollInteriorThree.innerHTML+=RollInteriorThree.innerHTML;

var RollInteriorLis = RollInterior.getElementsByTagName("li");

var RollInteriorLisLength = RollInteriorLis.length;

var retrace = RollInteriorLis[RollInteriorLisLength/2].offsetHeight;
var newHeight = 0;
var acc = -1;
var tremtOne;
var sumTwo = 0;
newDynamic();
function newDynamic() {
    tremtOne=setInterval(newDynamicRoll,5)
}
function newDynamicRoll() {
    newHeight+=acc;
    sumTwo+=acc;
    if(sumTwo < -101){
        sumTwo=0;
        newHeight=-101;
        clearInterval(tremtOne);
        setTimeout(newDynamic,1000);
    }
    if(newHeight < -retrace) newHeight = 0;
    if(newHeight > 0 ) newHeight = -retrace;
    RollInterior.style.top=newHeight+"px";
    RollInteriorTwo.style.top=newHeight+"px";
    RollInteriorThree.style.top=newHeight+"px";
}