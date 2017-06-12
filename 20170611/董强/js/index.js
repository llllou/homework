var LL=document.getElementById("LL");
var tList=document.getElementById("tList");
var nav_a=document.getElementById("nav_a");
var nav_aaa=document.getElementById("nav_aaa");
var serviceS=document.getElementById("serviceS");
var serviceSS=document.getElementById("serviceSS");
var srvice=document.getElementById("service");
var fuborderf=document.getElementById("fuborderf");
var designerd=document.getElementById("designerd");
var designerlistd=document.getElementById("designerlistd");
var siteMAP=document.getElementById("siteMAP");
var bigList=document.getElementById("bigList");
var Part_left_divs=document.getElementById("Part_left_divs");
var neck_list=document.getElementById("neck_list");
var ListTwo=document.getElementById("ListTwo");
var LiTwolist=document.getElementById("LiTwolist");
var ListThird=document.getElementById("ListThird");
var LiThirdlist=document.getElementById("LiThirdlist");
// 事件、
LL.onmouseover=function(){
    tList.style.display="block";
    nav_a.style.color="#dd4f50";
}
LL.onmouseout=function(){
    tList.style.display="none";
    nav_a.style.color="#999999"
}
nav_aaa.onmouseover=function(){
    nav_aaa.style.color="#dd4f50";
}
nav_aaa.onmouseout=function(){
    nav_aaa.style.color="#999";
}
serviceS.onmouseover=function(){
    serviceSS.style.display="block";
}
serviceS.onmouseout=function(){
    serviceSS.style.display="none";
}
serviceSS.onmouseover=function(){
    serviceSS.style.display="block";
    service.style.border="1px+solid+#999"
}
serviceSS.onmouseout=function(){
    serviceSS.style.display="none";
}
designerd.onmouseover=function(){
    designerlistd.style.display="block";
}
designerd.onmouseout=function(){
    designerlistd.style.display="none";
}
designerlistd.onmouseover=function(){
    designerlistd.style.display="block";
}
designerlistd.onmouseout=function(){
    designerlistd.style.display="none";
}
siteMAP.onmouseover=function(){
    bigList.style.display="block";
}
siteMAP.onmouseout=function(){
    bigList.style.display="none";
}
bigList.onmouseover=function(){
    bigList.style.display="block";
}
bigList.onmouseout=function(){
    bigList.style.display="none";
}
Part_left_divs.onmouseover=function(){
    neck_list.style.display="block";
}
Part_left_divs.onmouseout=function(){
    neck_list.style.display="none";
}
neck_list.onmouseover=function(){
    neck_list.style.display="block";
}
neck_list.onmouseout=function(){
    neck_list.style.display="none";
}
ListTwo.onmouseover=function(){
    LiTwolist.style.display="block";
}
ListTwo.onmouseout=function(){
    LiTwolist.style.display="none";
}
LiTwolist.onmouseover=function(){
    LiTwolist.style.display="block";
}
LiTwolist.onmouseout=function(){
    LiTwolist.style.display="none";
}
ListThird.onmouseover=function(){
  LiThirdlist.style.display="block";
}
ListThird.onmouseout=function(){
   LiThirdlist.style.display="none";
}
LiThirdlist.onmouseover=function(){
  LiThirdlist.style.display="block";
}
LiThirdlist.onmouseout=function(){
   LiThirdlist.style.display="none";
}
  
  var LISTFIVE=document.getElementById("LISTFIVE");
  var FIVElist=document.getElementById("FIVElist");
  LISTFIVE.onmouseover=function(){
    FIVElist.style.display="block";
  }
  LISTFIVE.onmouseout=function(){
    FIVElist.style.display="none";
  }
   FIVElist.onmouseover=function(){
    FIVElist.style.display="block";
  }
  FIVElist.onmouseout=function(){
    FIVElist.style.display="none";
  }
  // 轮播图部分
  var lunbo=document.getElementById("lunBo")
var lis=document.getElementById("lunBo").getElementsByTagName("li");
   // 信号量
   var newLeft=0;

 var timer= setInterval(function(){
    function fun(){
    var newLeft=newLeft-1366;
    // 业务
        change();
         } 
 function change(){
    lunbo.style.left=newLeft+"px";
 }
 },1000);
 // 轮播图
  var LeftTop=document.getElementById("LeftTop");
  var LeftToplist=document.getElementById("LeftToplist");

LeftTop.onmouseover=function(){
    LeftToplist.style.display="block";
}
LeftTop.onmouseout=function(){
    LeftToplist.style.display="none";
}
LeftToplist.onmouseover=function(){
    LeftToplist.style.display="block";
}
LeftToplist.onmouseout=function(){
    LeftToplist.style.display="none";
}
 var leftmiddle=document.getElementById("leftmiddle");
 var LeftMiddle_list=document.getElementById("LeftMiddle_list");
 leftmiddle.onmouseover=function(){
    LeftMiddle_list.style.display="block";
 }
 leftmiddle.onmouseout=function(){
    LeftMiddle_list.style.display="none";
 }
 LeftMiddle_list.onmouseover=function(){
    LeftMiddle_list.style.display="block";
 }
 LeftMiddle_list.onmouseout=function(){
    LeftMiddle_list.style.display="none";
 }
 var leftBottom_list=document.getElementById("leftBottom_list");
 var LeftBottom=document.getElementById("LeftBottom");
 LeftBottom.onmouseover=function(){
    leftBottom_list.style.display="block";
 }
 LeftBottom.onmouseout=function(){
    leftBottom_list.style.display="none";
 }
  leftBottom_list.onmouseover=function(){
    leftBottom_list.style.display="block";
 }
 leftBottom_list.onmouseout=function(){
    leftBottom_list.style.display="none";
 }
 var olo=document.getElementById("odiv_left_one");
    var olt=document.getElementById("odiv_left_two");
    var olT=document.getElementById("odiv_left_third");
    var olf=document.getElementById("odiv_left_four");
    var odivone=document.getElementById("odiv_right");
    var odivtwo=document.getElementById("odiv_right1");
    var odivthird=document.getElementById("odiv_right2");
    var odivfour=document.getElementById("odiv_right3");

    olo.onmouseover=function(){
        olo.style.color="red";
        olt.style.color="#666";
        olT.style.color="#666";
        olf.style.color="#666";
        odivone.style.display="block";
        odivtwo.style.display="none";
        odivthird.style.display="none";
        odivfour.style.display="none";
    }
    olt.onmouseover=function(){
        olt.style.color="red";
        olo.style.color="#666";
        olT.style.color="#666";
        olf.style.color="#666";
        odivone.style.display="none";
        odivtwo.style.display="block";
        odivthird.style.display="none";
        odivfour.style.display="none";
    }
    olT.onmouseover=function(){
        olo.style.color="#666";
        olt.style.color="#666";
        olT.style.color="red";
        olf.style.color="#666";
        odivone.style.display="block";
        odivtwo.style.display="none";
        odivthird.style.display="none";
        odivfour.style.display="none";
    }
    olf.onmouseover=function(){
        olf.style.color="red";
        olt.style.color="#666";
        olT.style.color="#666";
        olo.style.color="#666";
        odivone.style.display="none";
        odivtwo.style.display="none";
        odivthird.style.display="none";
        odivfour.style.display="block";
    }