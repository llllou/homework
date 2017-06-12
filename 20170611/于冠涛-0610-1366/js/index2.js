var listLeftUl=document.getElementById("listLeftUl");
var listLeftLi=listLeftUl.getElementsByTagName("li");
var em1=listLeftUl.getElementsByTagName("em");
var listRight=document.getElementById("listRight");
var oDiv=listRight.getElementsByClassName("listRightOne");


for(var i=0;i<listLeftLi.length;i++){
    listLeftLi[i].index=i;
    listLeftLi[i].onmouseover=function(){
        for(var j=0;j<listLeftLi.length;j++){
            listLeftLi[j].className="";
            em1[j].className="";
            oDiv[j].style.display="none";

        }
        this.className="current";
        em1[this.index].className="em1";
        oDiv[this.index].style.display="block";
    }

}

var listRightTopUl=document.getElementById("listRightTopUl");
var listRightTop=document.getElementById("listRightTop");
var topLi=listRightTopUl.getElementsByTagName("li");
var leftBtn=document.getElementById("leftBtn");
var rightBtn=document.getElementById("rightBtn");
var listRightBottom=document.getElementById("listRightBottom");
var listRightBottomUl=document.getElementById("listRightBottomUl");


listRightTopUl.innerHTML+=listRightTopUl.innerHTML;
listRightTopUl.innerHTML+=listRightTopUl.innerHTML;

listRightBottomUl.innerHTML+=listRightBottomUl.innerHTML;

var topLeft=0;
var bottomLeft=-1;


leftBtn.onclick=function(){
    topLeft+=-204;
    bottomLeft+=-102;
     if(bottomLeft<-1018){
         bottomLeft=-1;
     }
     if(topLeft<-1018){
         topLeft=0;
     }
    listRightTop.style.left=topLeft+"px";
    listRightBottom.style.left=bottomLeft+"px";

}

rightBtn.onclick=function(){
    bottomLeft+=102;
    topLeft+=204;
    if(bottomLeft>0){
        bottomLeft=-1020;
    }
    if(topLeft>0){
        topLeft=-1018;
    }
    listRightTop.style.left=topLeft+"px";
    listRightBottom.style.left=bottomLeft+"px";

}
