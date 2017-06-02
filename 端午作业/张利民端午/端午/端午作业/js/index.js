window.onload=function(){
    var navUl=document.getElementById("navUl");
    var navUlLis=document.getElementById("navUl").getElementsByTagName("li");
    var headerList=document.getElementById("headerList");
    var oLi=document.getElementById("oLi");
    var header=document.getElementById("header");

    for(var i=1;i<navUlLis.length;i++){
        navUlLis[i].onmouseover=function(){

            for(var j=1;j<navUlLis.length;j++){
                navUlLis[j].className="";
            }
            this.className="navLi";
        }
        navUlLis[i].onmouseout=function(){
            for(var j=1;j<navUlLis.length;j++){
                navUlLis[j].className="";
            }
        }
    }
    oLi.onmouseover=function(){
        oLi.className="navLi";
        headerList.style.display="block";
    }
    oLi.onmouseout=function(){
        oLi.className="";
        headerList.style.display="none";
    }
    headerList.onmouseover=function(){
        headerList.style.display="block";
    }
    headerList.onmouseout=function(){
        headerList.style.display="none";
    }

    var header=document.getElementById("header");
    var navRight=document.getElementById("navRight");
    var navRightLis=navRight.getElementsByTagName("li");
    for(var i=0;i<navRightLis.length;i++){
        navRightLis[i].onmouseover=function(){

            for(var j=0;j<navRightLis.length;j++){
                navRightLis[j].className="";
            }
            this.className="navRightLi";
        }
        navRightLis[i].onmouseout=function(){
            for(var j=1;j<navRightLis.length;j++){
                navRightLis[j].className="";
            }
        }
    }

    var headerLeft=document.getElementById("headerLeft");
    var headerRight=document.getElementById("headerRight");
    header.onmouseover=function(){
        headerLeft.style.display="block";
        headerRight.style.display="block";
    }
    header.onmouseout=function(){
        headerLeft.style.display="none";
        headerRight.style.display="none";
    }


    var index=1;
    headerRight.onclick=function(){
        index++;
        if(index>5){
           index=1;
        }
        header.style.background="url(image/"+index+".jpg"+") round";
        header.style.backgroundSize="100%";
    }
    headerLeft.onclick=function(){
        index--;
        if(index<1){
            index=5;
        }
        header.style.background="url(image/"+index+".jpg"+") round";
        header.style.backgroundSize="100%";
    }

    var headerBottom=document.getElementById("headerBottom");
    var bottomLis=headerBottom.getElementsByTagName("li");

    for(var i=0;i<bottomLis.length;i++){
        bottomLis[i].idx=i;
        bottomLis[i].onclick=function(){

            for(var j=0;j<bottomLis.length;j++){
                bottomLis[j].className="";
                header.style.background="url(image/"+(j+1)+".jpg"+") round";
                header.style.backgroundSize="100%";

            }
            bottomLis[this.idx].className="bottomLi";
            header.style.background="url(image/"+(this.idx+1)+".jpg"+") round";
            header.style.backgroundSize="100%";
        }
    }


    var wrapOne=document.getElementById("wrapOne");
    var wrapTwo=document.getElementById("wrapTwo");
    var wishOne=document.getElementById("wishOne");
    var wishTwo=document.getElementById("wishTwo");
    wishOne.onmouseover=function(){
        wrapOne.style.display="block";
        wrapTwo.style.display="none";
        wishOne.style.background="#ff9800";
    }
    wishOne.onmouseout=function(){
        wishOne.style.background="#d89336";
    }
    wishTwo.onmouseover=function(){
        wrapTwo.style.display="block";
        wrapOne.style.display="none";
        wishTwo.style.background="#ff9800";
    }
    wishTwo.onmouseout=function(){
        wishTwo.style.background="#d89336";
    }



    var oDiv=document.getElementById("oDiv");
    var inputs=document.getElementById("oDiv").getElementsByTagName("input");
    var popup=document.getElementById("popup");
    var Inputs=popup.getElementsByTagName("input");

    var button1=document.getElementById("button1");
    var button2=document.getElementById("button2");


    button1.onclick=function(){
        popup.style.display="block";
        button1.style.background="white";
        button1.style.color="black";
        var a =inputs[0].value;
        var b =inputs[1].value;
        Inputs[0].value=a;
        Inputs[1].value=b;
    }

    button2.onclick=function(){
        popup.style.display="none";
        alert("用户注册成功，登录中...")
    }

}
