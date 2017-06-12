var navLeftB=document.getElementById("navLeftB");
var erWeiMa=document.getElementById("erWeiMa");
navLeftB.onmouseover=function(){
    erWeiMa.style.display="block";
}
navLeftB.onmouseout=function(){
    erWeiMa.style.display="none";
}

var navLi=document.getElementsByClassName("navLi");
var navDiv1=document.getElementById("navDiv1");
var navDiv2=document.getElementById("navDiv2");
var navDiv3=document.getElementById("navDiv3");
var timer;
navLi[0].onmouseover=function(){
    clearTimeout(timer);
    navDiv1.style.display="block";
    navLi[0].style.border="1px solid #999";
    navLi[0].style.borderBottom="none";
}
navLi[0].onmouseout=function(){
    timer=setTimeout(function(){
        navDiv1.style.display="none";
    },200);
    navLi[0].style.borderColor="rgba(255,255,255,0)";
}
navDiv1.onmouseover=function(){
    clearTimeout(timer);
    navDiv1.style.display="block";
    navLi[0].style.border="1px solid #999";
    navLi[0].style.borderBottom="none";
}
navDiv1.onmouseout=function(){
    navDiv1.style.display="none";
    navLi[0].style.borderColor="rgba(255,255,255,0)";
}


var timer1;
navLi[1].onmouseover=function(){
    clearTimeout(timer1);
    navDiv2.style.display="block";
    navLi[1].style.border="1px solid #999";
    navLi[1].style.borderBottom="none";
}
navLi[1].onmouseout=function(){
    timer1=setTimeout(function(){
        navDiv2.style.display="none";
    },200);
    navLi[1].style.borderColor="rgba(255,255,255,0)";
}
navDiv2.onmouseover=function(){
    clearTimeout(timer1);
    navDiv2.style.display="block";
    navLi[1].style.border="1px solid #999";
    navLi[1].style.borderBottom="none";
}
navDiv2.onmouseout=function(){
    navDiv2.style.display="none";
    navLi[1].style.borderColor="rgba(255,255,255,0)";
}

var timer2;
navLi[2].onmouseover=function(){
    clearTimeout(timer2);
    navDiv3.style.display="block";
    navLi[2].style.border="1px solid #999";
    navLi[2].style.borderBottom="none";
}
navLi[2].onmouseout=function(){
    timer2=setTimeout(function(){
        navDiv3.style.display="none";
    },200);
    navLi[2].style.borderColor="rgba(255,255,255,0)";
}
navDiv3.onmouseover=function(){
    clearTimeout(timer2);
    navDiv3.style.display="block";
    navLi[2].style.border="1px solid #999";
    navLi[2].style.borderBottom="none";
}
navDiv3.onmouseout=function(){
    navDiv3.style.display="none";
    navLi[2].style.borderColor="rgba(255,255,255,0)";
}


var headerUl=document.getElementById("headerUl");
var spanDiv=document.getElementById("spanDiv");

var headerLi=headerUl.getElementsByTagName("li");
spanDiv.onmouseover=function(){
    headerUl.style.display="block";
}
spanDiv.onmouseout=function(){
    headerUl.style.display="none";
}
headerUl.onmouseover=function(){
    headerUl.style.display="block";
}
headerUl.onmouseout=function(){
    headerUl.style.display="none";
}


for(var i=0;i<headerLi.length;i++){
    headerLi[i].index=i;
    headerLi[i].onclick=function(){
        for(var j=0;j<headerLi.length;j++){
            var a=headerLi[j].innerText;
            headerLi[j].innerText=spanDiv.innerText;
            spanDiv.innerText=a;
        }
    }

}


var lunBoNav=document.getElementById("lunBoNav")
var lTwo=lunBoNav.getElementsByClassName("lTwo");
var lunBoNavDiv=document.getElementsByClassName("lunBoNavDiv");

for(var i=0;i<lTwo.length;i++) {
    lTwo[i].index = i;
    lTwo[i].onmouseover = function () {
        for (var j = 0; j < lTwo.length; j++) {
            lTwo[j].className = "";
            lunBoNavDiv[j].style.display="none";
        }
        this.className = "current";
        lunBoNavDiv[this.index].style.display="block";
        lunBoNavDiv[this.index].style.zIndex=999;
    }
    lTwo[i].onmouseout = function () {
        this.className = "";
        lunBoNavDiv[this.index].style.display="none";
    }
}


var lunBo=document.getElementById("lunBo");
var circles=document.getElementById("circles");
var circlesLis=circles.getElementsByTagName("li");

var timer3;
var count=1;
timer3=setInterval(function(){
    count++;
    if(count>3){
        count=1;
    }
    lunBo.style.background="url(image/"+count+".jpg) center center no-repeat";
    changeC();
},1500);

function changeC(){
    for(var i=0;i<circlesLis.length;i++){
        circlesLis[i].className="";
    }
    circlesLis[count-1].className="current";
}

for(var i=0;i<circlesLis.length;i++){
    circlesLis[i].index=i;
    circlesLis[i].onclick=function(){
        for(var j=0;j<circlesLis.length;j++){
            circlesLis[j].className="";
        }
        this.className="current";
        count=this.index;
        changeP();
    }

}
function changeP(){
    lunBo.style.background="url(image/"+(count+1)+".jpg) center center no-repeat";
}


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

var topLeft=-1;
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


var showQuestionList=document.getElementById("showQuestionList");
var m_unit=document.getElementById("m_unit");
var lisUl=m_unit.getElementsByTagName("ul")[0];
var lisLis=lisUl.getElementsByTagName("li");
var timer5;
var newTop=0;
lisUl.innerHTML+=lisUl.innerHTML;
timer5=setInterval(function(){
    newTop+=-101;
    if(newTop<-505){
        newTop=-101;
    }
    m_unit.style.top=newTop+"px";
},1500);

var showQuestionList1=document.getElementById("showQuestionList1");
var m_unit1=document.getElementById("m_unit1");
var lisUl1=m_unit1.getElementsByTagName("ul")[0];
var lisLis1=lisUl1.getElementsByTagName("li");
var timer6;
var newTop1=0;
lisUl1.innerHTML+=lisUl1.innerHTML;
timer6=setInterval(function(){
    newTop1+=-101;
    if(newTop1<-505){
        newTop1=-101;
    }
    m_unit1.style.top=newTop1+"px";
},1500);

var showQuestionList2=document.getElementById("showQuestionList2");
var m_unit2=document.getElementById("m_unit2");
var lisUl2=m_unit2.getElementsByTagName("ul")[0];
var lisLis2=lisUl2.getElementsByTagName("li");
var timer7;
var newTop2=0;
lisUl2.innerHTML+=lisUl2.innerHTML;
timer7=setInterval(function(){
    newTop2+=-101;
    if(newTop2<-505){
        newTop2=-101;
    }
    m_unit2.style.top=newTop2+"px";
},1500);