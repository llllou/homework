var oImg = document.getElementById("oImg").getElementsByTagName("li");
var round = document.getElementById("round").getElementsByTagName("li");
var leftBtn = document.getElementById("leftBtn");
var rgtBtn = document.getElementById("rgtBtn");
var oneList = document.getElementById("oneList");
var twoList = document.getElementById("twoList");
var feedRound = document.getElementById("feedRound").getElementsByTagName("li");
var feedback = document.getElementById("feedback").getElementsByTagName("div");
var btn =document.getElementById("btn");
var xinxi = document.getElementById("xinxi");
var leftText =document.getElementById("leftText");
var rgtText =document.getElementById("rgtText");
var xinxip = document.getElementById("xinxi").getElementsByTagName("p");


var str = 0;
// 轮播按钮
leftBtn.onclick=function () {
    str--;
    if(str<0){
        str=4;
    }
    change();
}
rgtBtn.onclick=function () {
    str++;
    if(str>4){
        str=0;
    }
    change();
}
for(j=0;j<round.length;j++){
    round[j].index=j;
    round[j].onmouseover=function () {
        str = this.index;
        change();
    }

}
function change() {
    for(i=0;i<oImg.length;i++){
        oImg[i].className="";
        round[i].className="";
    }
    oImg[str].className="oImgLi";
    round[str].className="roundLi";
}
// 二级
oneList.onclick = function () {
    if(twoList.style.display=="none"){
        twoList.style.display="block";
    }else{
        twoList.style.display="none";
    }
}

var sum = 0;
for(z=0;z<feedRound.length;z++){
    feedRound[z].idx=z;
    feedRound[z].onmouseover = function () {
        sum = this.idx;
        cheng();
    }
}
function cheng() {
    for(c=0;c<feedback.length;c++){
        feedRound[c].className="";
        feedback[c].style.display="";
    }
    feedRound[sum].className="Rounds"
    feedback[sum].style.display="block";
}
// 文本框区
btn.onclick = function () {
    if(xinxi.style.display=="none"){
        xinxi.style.display="block";
    }else {
        xinxi.style.display="none"
    }
    xinxip[0].innerText="Name:"+leftText.value;
    xinxip[1].innerText="Email:"+rgtText.value;
}
