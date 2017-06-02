var oDiv1=document.getElementById("div1");
var oDiv2=document.getElementById("div2");
var oImg=document.getElementById("Img");
var a=1;
oDiv1.onclick=function () {
    a--;
    if(a<=0) a=5;

    fun();
}
oDiv2.onclick=function () {
    a++;
    if(a>5) a=1;

    fun();
}
function fun() {
    oImg.src="img/"+a+".jpg";
}
