var inner=document.getElementsByClassName("inner");
var innerMenu=document.getElementsByClassName("inner-menu");
for(var i=0;i<inner.length;i++){
    inner[i].index=i;
    inner[i].onmouseover=function(){
        for(var j=0;j<innerMenu.length;j++){
            innerMenu[j].style.display="none";
        }
        innerMenu[this.index].style.display="block";
    };
    inner[i].onmouseout=function(){
        for(var j=0;j<innerMenu.length;j++){
            innerMenu[j].style.display="none";
        }
    }
}

//轮播
var carouse = document.getElementById("carouse");
var carLis = carouse.getElementsByTagName("li");
var circle = document.getElementById("circle");
var cirLis = circle.getElementsByTagName("li");
for(var x=0;x<carLis.length;x++){
    carLis[x].style.display="none";
    cirLis[x].style.backgroundColor="#666";
}
carLis[0].style.display="block";
cirLis[0].style.backgroundColor="#333";
for(var y=0;y<cirLis.length;y++){
    cirLis[y].index=y;
    cirLis[y].onclick=function(){
        for(var j=0;j<carLis.length;j++){
            carLis[j].style.display="none";
            cirLis[j].style.backgroundColor="#666";
        }
        carLis[this.index].style.display="block";
        this.style.backgroundColor="#333";
    }
}
var num=0;
setInterval(function(){
    num++;
    if(num>=carLis.length)num=0;
    for(var i=0;i<carLis.length;i++){
        carLis[i].style.display="none";
        cirLis[i].style.backgroundColor="#666";
    }
    carLis[num].style.display="block";
    cirLis[num].style.backgroundColor="#333";

},3000);


var leftUl = document.getElementsByClassName("conLeft")[0];
var leftLis = leftUl.getElementsByTagName("li");
var oDivs=document.getElementById("conRight").getElementsByTagName("div");


//一级二级联动
for(var z=0;z<leftLis.length;z++){
    leftLis[z].index = z;
    leftLis[z].onmouseover=function(){
        for(var j=0;j<leftLis.length;j++){
            leftLis[j].className=" ";
            oDivs[j].className="hid";
        }
        this.className="cur";
        oDivs[this.index].className="";
    }
}

//无缝滚动
var imgl=document.getElementById("img").getElementsByTagName("ul");
var imgUl1=imgl[0];
var imgUl2=imgl[1];
var ul1Lis=imgUl1.getElementsByTagName("li");
var ul2Lis=imgUl2.getElementsByTagName("li");
var btnLeft=document.getElementById("left");
var btnRight=document.getElementById("right");


var w1 = ul1Lis[0].offsetWidth +20;
var w2 = ul2Lis[0].offsetWidth +20;
var li1Length = ul1Lis.length;
var li2Length = ul2Lis.length;
var li1Width = w1*li1Length;
var li2Width = w2*li2Length;
//    console.log(li2Width );
imgUl1.innerHTML+=imgUl1.innerHTML;
imgUl2.innerHTML+=imgUl2.innerHTML;

// //信号量
var con1=0;
var con2=0;
btnLeft.onclick=function(){
    con1-=w1;
    con2-=w2;
    imgMove();
};
btnRight.onclick=function(){
    con1+=w1;
    con2+=w2;
    imgMove();
};
function imgMove(){
    if(con1<-li1Width){con1=0;}
    if(con2<-li2Width){con2=0;}
    if(con1>0)con1=-li1Width;
    if(con2>0)con2=-li2Width;
    imgUl1.style.left=con1+"px";
    imgUl2.style.left=con2+"px";
}

//向上无缝滚动
var oTop = document.getElementsByClassName("cartop");
var oUls1=oTop[0].getElementsByTagName("ul")[0];
var oUls2=oTop[1].getElementsByTagName("ul")[0];
var oUls3=oTop[2].getElementsByTagName("ul")[0];
var oLis=oUls1.getElementsByTagName("li");
var oLiLength = oLis.length;
var loHeight= oLis[0].offsetHeight;
var liH=loHeight*oLiLength;
oUls1.innerHTML+=oUls1.innerHTML;
oUls2.innerHTML+=oUls2.innerHTML;
oUls3.innerHTML+=oUls3.innerHTML;
var newTop=0;
setInterval(function(){
    newTop =newTop- loHeight;
    if(newTop<-liH){newTop=0;}
    oUls1.style.top= newTop +"px";
    oUls2.style.top= newTop +"px";
    oUls3.style.top= newTop +"px";
},2500);
