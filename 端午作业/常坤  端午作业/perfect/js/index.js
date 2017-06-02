var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var circlesLis = document.getElementById("circles").getElementsByTagName("li");
var oImgs = document.getElementById("oImgs");
var oImgsListLis = document.getElementById("oImgs").getElementsByTagName("li");

var img_idx = 0;
rightBtn.onclick = function(){
    //信号量++
    img_idx++;

    if(img_idx>4){
        img_idx=0;
    }
    chengPic();
}
leftBtn.onclick = function(){
    img_idx--;
    if(img_idx<0){
        img_idx=4;
    }
    chengPic();
}
for(var i = 0;i<circlesLis.length;i++){
    circlesLis[i].index=i;
    circlesLis[i].onmouseover = function(){
        img_idx = this.index;
        chengPic();
    }
}
function chengPic(){
    for(var i = 0; i<oImgsListLis.length;i++){
        oImgsListLis[i].className = "";
    }
    oImgsListLis[img_idx].className="current";
    for(var i=0;i<circlesLis.length;i++){
        circlesLis[i].className = "";
    }
    circlesLis[img_idx].className = "current";
}


var sole=document.getElementById("sole");
var list=document.getElementById("list");
var str2="none";
sole.onclick=function () {
    str2=str2=="none"?"block":"none";
    list.style.display=str2;
}

var ftBox=document.getElementById("ftBox");
var ftBoxUls=ftBox.getElementsByTagName("ul");
var ftListlis=document.getElementById("ftList").getElementsByTagName("li");
var ftBoxTow=ftBox.getElementsByClassName("towBox");
var str=0;
for(var j = 0;j<ftListlis.length;j++){
    ftListlis[j].index=j;
    ftListlis[j].onclick = function(){
        str = this.index;
        cheng();
    }
}
function cheng(){
    for(var j=0;j<ftBoxUls.length;j++){
        ftBoxUls[j].className="";
    }
    ftBoxUls[str].className="ftBoxOne"
    for(var i=0;i<ftListlis.length;i++){
        ftListlis[i].className = "";
    }
    ftListlis[str].className = "ftBoxOne";
}

var ontInput=document.getElementById("oneInput");
var towInput=document.getElementById("towInput");
var threeInput=document.getElementById("threeInput");
var fourInput=document.getElementById("fourInput");
var popUp=document.getElementById("popUp");
var oBut1=document.getElementById("oBut1");
var str1="none"
oBut1.onclick=function () {
    threeInput.value=ontInput.value;
    fourInput.value=towInput.value;
    str1=str1=="none"?"block":"none";
    popUp.style.display=str1;
}