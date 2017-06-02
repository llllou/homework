/**
 * Created by sks on 2017/5/27.
 */
// 轮播图事件
var images = document.getElementById("images").getElementsByTagName("li");
var roundDot = document.getElementById("roundDot").getElementsByTagName("li");
var leftBut = document.getElementById("leftBut");
var rightBut = document.getElementById("rightBut");
var towList = document.getElementById("towList");
var towContent = document.getElementById("towContent");
var oDiv1Ul = document.getElementById("oDiv1").getElementsByTagName("ul");
var roundDot2 = document.getElementById("roundDot2").getElementsByTagName("li");
var bomb = document.getElementById("bomb");
var oDiv2Name = document.getElementById("oDiv2Name");
var oDiv2Email = document.getElementById("oDiv2Email");
var bombButbut = document.getElementById("bombButbut");
var bombName = document.getElementById("bombName");
var bombEmail = document.getElementById("bombEmail");
var sum = 0 ;
leftBut.onclick=function () {
    sum++;
    fun();
};
rightBut.onclick=function () {
    sum--;
    fun();
};
for (var t = 0 ;t < roundDot.length;t++){
    roundDot[t].index=t;
    roundDot[t].onmouseover=function () {
        sum = this.index;
        fun();
    }
}
function fun() {
    if(sum > 4) sum = 0;
    if(sum < 0) sum = 4;
    for(var i =0 ; i < images.length;i++){
        images[i].className="";
        roundDot[i].className="";
    }
    images[sum].className="images-sp";
    roundDot[sum].className="roundDot-sp";
}
// 二级
towList.onclick=function () {
    if(towContent.style.display =="none"){
        towContent.style.display ="block"
    }else{
        towContent.style.display ="none"
    }
};
// 轮播栏
for(var i = 0 ; i < roundDot2.length;i++ ){
    roundDot2[i].index=i;
    roundDot2[i].onmouseover=function () {
        for(var t = 0 ;t < roundDot2.length;t++){
            oDiv1Ul[t].style.display="none";
            roundDot2[t].className="";
        }
        this.className="roundDot2-sp";
        oDiv1Ul[this.index].style.display="block";
    }
}
// 弹框
bombButbut.onclick=function () {
    if(oDiv2Name.value=="" && oDiv2Email.value==""){
        alert("请输入内容！")
    }else {
        funBomb();
    }
}
function funBomb() {
    bombName.innerText="Name:"+oDiv2Name.value;
    bombEmail.innerText= "Email:"+oDiv2Email.value;
    if(bomb.style.display=="block"){
        bomb.style.display="none"
    }else {
        bomb.style.display="block"
    }
}