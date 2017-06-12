var box=document.getElementById("box");
var oBox=box.getElementsByTagName("div");


oBox[0].onmouseover=function(){
    oBox[1].style.left=550+"px"
    oBox[2].style.left=734+"px"
    oBox[3].style.left=938+"px"
}
oBox[1].onmouseover=function(){
    oBox[1].style.left=195+"px"
}
oBox[2].onmouseover=function(){
    oBox[1].style.left=195+"px"
    oBox[2].style.left=400+"px"
}
oBox[3].onmouseover=function(){
    oBox[1].style.left=195+"px"
    oBox[2].style.left=400+"px"
    oBox[3].style.left=598+"px"
}

oBox[1].onmousedown=function(){
    oBox[2].style.left=734+"px"
    oBox[3].style.left=938+"px"
}
oBox[2].onmousedown=function(){
    oBox[3].style.left=938+"px"
}
