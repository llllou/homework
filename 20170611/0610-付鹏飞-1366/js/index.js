var huanLi = document.getElementById("huanList").getElementsByTagName("li");
var huanList=document.getElementById("huanList");
var huanOne =document.getElementById("huanOne");
var listImg=document.getElementById("listImg");


huanOne.onmouseover=huanList.onmouseover=function () {
    huanList.style.display="block";
}
huanOne.onmouseout=huanList.onmouseout=function () {
    huanList.style.display="none";
}
for(i=0;i<huanLi.length;i++){
    huanLi[i].index=i;
    huanLi[i].onclick=function () {
        var inner=huanLi[this.index].innerHTML;
        huanOne.innerHTML=inner;
    }
}
// 轮播图
var timer;
var bannerLeft=-1349;
function mover() {
    clearInterval(timer);
    timer=setInterval(function () {
        bannerLeft-=1349;
        listImg.style.transition="1s";
        if(bannerLeft==-1349*4){
            bannerLeft=0;
            listImg.style.transition="";
        }
        listImg.style.left=bannerLeft+"px";
    },3000);
}
mover();

// 找设计师
var seaUl=document.getElementById("seaUl").getElementsByTagName("li");
var tent=document.getElementsByClassName("tent");
var btnleft=document.getElementById("btnleft");
var btnrgt=document.getElementById("btnrgt");
var tent1Top=document.getElementById("tent1Top");
var tent1Btm=document.getElementById("tent1Btm");



for(k=0;k<seaUl.length;k++){
    seaUl[k].index=k;
    seaUl[k].onmouseover=function () {
        for(i=0;i<seaUl.length;i++){
            seaUl[i].className="";
            tent[i].style.display="none";
        }
        seaUl[this.index].className="seaLi";
        tent[this.index].style.display="block";
    }
}
var new1Left=0;
var new2Left=0;
btnleft.onclick=function () {
    new1Left+=200;
    new2Left+=100;
    tent1Top.style.transition="1s";
    tent1Btm.style.transition="1s";
    if(new1Left>0){
        new1Left=200*-5;
        tent1Top.style.transition="";
    }
    if(new2Left>0){
        new2Left=100*-10;
        tent1Btm.style.transition="";
    }
    tent1Top.style.left=new1Left+"px";
    tent1Btm.style.left=new2Left+"px";

}
btnrgt.onclick=function () {
    new1Left-=200;
    new2Left-=100;
    tent1Top.style.transition="1s";
    tent1Btm.style.transition="1s";
        if(new1Left<200*-5){
            new1Left=0;
            tent1Top.style.transition="";
        }
        if(new2Left<100*-10){
            new2Left=0;
            tent1Btm.style.transition="";
        }
        tent1Top.style.left=new1Left+"px";
        tent1Btm.style.left=new2Left+"px";
}

// 设计案例
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");

img1.onmouseover=function () {
    animate(img2,{"left":570},500);
    animate(img3,{"left":790},500);
    animate(img4,{"left":1000},500);
}
img2.onmouseover=function () {
    animate(img2,{"left":200},500);
    animate(img3,{"left":790},500);
    animate(img4,{"left":1000},500);
}
img3.onmouseover=function () {
    animate(img2,{"left":200},500);
    animate(img3,{"left":415},500);
    animate(img4,{"left":1000},500);
}
img4.onmouseover=function () {
    animate(img2,{"left":200},500);
    animate(img3,{"left":410},500);
    animate(img4,{"left":600},500);
}

var tentOne=document.getElementById("tentOne");
var tentTwo=document.getElementById("tentTwo");
var tentThree=document.getElementById("tentThree");
var tentTop=0;
var ties;
function tnt() {
    clearInterval(ties);
    ties=setInterval(function () {
        tentTop-=101;
        tentOne.style.transition="1s";
        tentTwo.style.transition="1s";
        tentThree.style.transition="1s";
        if(tentTop<-606){
            tentTop=0;
            tentOne.style.transition="";
            tentTwo.style.transition="";
            tentThree.style.transition="";
        }
        tentOne.style.top=tentTop+"px";
        tentTwo.style.top=tentTop+"px";
        tentThree.style.top=tentTop+"px";
    },1000);
}
tnt();