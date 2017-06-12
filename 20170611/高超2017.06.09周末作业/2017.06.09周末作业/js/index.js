// 顶菜单
var MainTop_one=document.getElementById("MainTop_one");
var MainTop_oneS=document.getElementById("MainTop_oneS");

MainTop_one.onmouseover=function () {
    MainTop_oneS.style.display="block";
};
MainTop_one.onmouseout=function () {
    MainTop_oneS.style.display="none";
};

var MainTop_listTne=document.getElementsByClassName("MainTop_listTne");
var MainTop_LsLIST=document.getElementsByClassName("MainTop_LsLIST");

for(var i=0;i<MainTop_listTne.length;i++){
    MainTop_listTne[i].index=i;
    MainTop_listTne[i].onmouseover =function () {
        for(var j=0; j<MainTop_listTne.length;j++){
            MainTop_LsLIST[j].style.display="none";
            MainTop_listTne[j].className="MainTop_listTne";
        }
        MainTop_LsLIST[this.index].style.display="block";
        this.className="MainTop_listTne MainTop_listOne";
    };
    MainTop_listTne[i].onmouseout =function () {
        this.className="MainTop_listTne";
            MainTop_LsLIST[this.index].style.display="none";
    }
}
for(var i=0;i<MainTop_LsLIST.length;i++){
    MainTop_LsLIST[i].index=i;
    MainTop_LsLIST[i].onmouseover =function () {

        this.style.display="block";
        MainTop_listTne[this.index].className="MainTop_listTne MainTop_listOne"
    };
    MainTop_LsLIST[i].onmouseout =function () {
        this.style.display="none";
        MainTop_listTne[this.index].className="MainTop_listTne"
    }
}

// 中部导航
var MianMenu_lis=document.getElementsByClassName("MianMenu_lis");
var MenuShadow=document.getElementsByClassName("MenuShadow");

for(var i=0;i<MianMenu_lis.length;i++){
    MianMenu_lis[i].index=i;
    MianMenu_lis[i].onmouseover=function () {
        this.style.backgroundColor="#dd4f50";
        MenuShadow[this.index].style.display="block"
    };
    MianMenu_lis[i].onmouseout=function () {
        this.style.backgroundColor="";
        MenuShadow[this.index].style.display="none";
    };
}
for(var i=0;i<MenuShadow.length;i++){
    MenuShadow[i].index=i;
    MenuShadow[i].onmouseover=function () {
        MianMenu_lis[this.index].style.backgroundColor="#dd4f50";
        this.style.display="block"
    };
    MenuShadow[i].onmouseout=function () {
        MianMenu_lis[this.index].style.backgroundColor="";
        this.style.display="none";
    };
}
// 轮播图
// var Watch=document.getElementById("Watch");
// var WatchLis=Watch.getElementsByTagName("li");
// var small=document.getElementById("small");
//
// var Newleft=0;
// var  sum=0;
// // move();
// function move() {
//     Watch.onmouseover=function () {
//         clearInterval(timer);
//     };
//     Watch.onmouseout=function () {
//         move();
//     };
//     var timer=setInterval(function () {
//         Newleft+= -WatchLis[0].offsetWidth;
//         if(Newleft< -Watch.offsetWidth+1366){
//             Newleft=0;
//         }else{
//             Watch.style.transition=1+"s"
//         }
//         Watch.style.left=Newleft+"px"
//     },1000)
// }

// 呼吸轮播图
var banner=document.getElementsByClassName("banner")[0];
var Watch=document.getElementById("Watch");
var WatchLis=Watch.getElementsByTagName("li");
var smallS=document.getElementById("small").getElementsByTagName("li");
var WatchLis_idx=0;
var WatchLisLength=WatchLis.length;
var interval=2000;

var timer=setInterval(move,interval);

banner.onmouseover=function () {
    clearInterval(timer);
};
banner.onmouseout=function () {
    timer=setInterval(move,interval);
};
for(var i=0; i<WatchLisLength;i++){
    smallS[i].index=i;
    smallS[i].onmouseover=function () {
        if(WatchLis[WatchLis_idx].isanimate) return;
        animate(WatchLis[WatchLis_idx],{"opacity":0},1000);
        WatchLis_idx=this.index;
        animate(WatchLis[WatchLis_idx],{"opacity":1},1000);
        SmallMove()
    }
}


function move() {
    if(WatchLis[WatchLis_idx].isanimate) return;
    animate(WatchLis[WatchLis_idx],{"opacity":0},1000);
    WatchLis_idx++;
    if(WatchLis_idx>WatchLisLength-1)WatchLis_idx=0;
    animate(WatchLis[WatchLis_idx],{"opacity":1},1000);
    SmallMove();
}



function SmallMove() {
    for(var i=0;i<smallS.length;i++){
        smallS[i].className="";
    }
    smallS[WatchLis_idx].className="small_1";
}







// 轮播图上二级
var bannerol_1=document.getElementsByClassName("bannerol_1");
var bannerTlSha=document.getElementsByClassName("bannerTlSha");
var Non=document.getElementsByClassName("Non");

for(var i=0;i<bannerol_1.length;i++){
    bannerol_1[i].index=i;
    bannerol_1[i].onmouseover=function () {
        bannerTlSha[this.index].style.display='block';
        Non[this.index].style.display='block';
    };
    bannerol_1[i].onmouseout=function () {
        bannerTlSha[this.index].style.display='none';
        Non[this.index].style.display='none';
    }
}
for(var i=0;i<bannerTlSha.length;i++){
    bannerTlSha[i].index=i;
    bannerTlSha[i].onmouseover=function () {
        this.style.display='block';
        Non[this.index].style.display='block';
    };
    bannerTlSha[i].onmouseout=function () {
        this.style.display='none';
        Non[this.index].style.display='none';
    }
}

// 运动框架移动
var AdBot=document.getElementById("AdBot");
var AdBotlis=AdBot.getElementsByTagName("li");

for(var i=0; i<AdBotlis.length;i++){
    AdBotlis[i].index=i;
    AdBotlis[i].onmouseover=function () {
        for(var j=0;j<AdBotlis.length;j++){
            if(AdBotlis[j].isanimate){
                return
            }
            if(j<=this.index){
                animate(AdBotlis[j],{"left":210*j},300)
            }else{
                animate(AdBotlis[j],{"left":210*(j-1)+550},300)
            }
        }
    }
}

// 选项卡

var PhlistLLis=document.getElementById("PhlistL").getElementsByTagName("span");
var PhlistRLis=document.getElementById("PhlistR").getElementsByTagName("ul");
var Photo=document.getElementsByClassName("Photo");

for(var i=0; i<PhlistLLis.length;i++){
    PhlistLLis[i].index=i;
    PhlistLLis[i].onclick=function () {
        for(j=0; j<PhlistLLis.length;j++){
            PhlistRLis[j].className="";
            Photo[j].className="Photo";
            PhlistLLis[j].className="";
        }
        this.className="PhlistL_1";
        PhlistRLis[this.index].className="PhlistRSum";
        Photo[this.index].className="Photo PhotoSum";

    }
}

// 上下轮播
var SbSlook=document.getElementById("SbSlook");
var SbSlookUl=SbSlook.getElementsByTagName("ul")[0];
var SbSlookLis=SbSlook.getElementsByTagName("li");

var Newtop=0;

var SbSlookLislength=SbSlookLis.length;

SbSlookUl.innerHTML+=SbSlookUl.innerHTML;

var cound;
slideshow();
function slideshow() {
    clearInterval(cound);
    cound=setInterval(function () {
        Newtop+=-SbSlookLis[0].offsetHeight;
        if(Newtop<-SbSlookLislength*SbSlookLis[0].offsetHeight){
            Newtop=0;
        }
        SbSlook.style.top=Newtop+"px";
        SbSlook.style.transition=1+"s";
    },2000)
}


var SbSlook_1=document.getElementById("SbSlook_1");
var SbSlook_1Ul=SbSlook_1.getElementsByTagName("ul")[0];
var SbSlook_1Lis=SbSlook_1.getElementsByTagName("li");
var NewBottom=0;
var SbSlook_1LisLength=SbSlook_1Lis.length;
SbSlook_1Ul.innerHTML+=SbSlook_1Ul.innerHTML;
slideshow_1();
var cound_1;
function slideshow_1() {
    clearInterval(cound_1);
    cound_1=setInterval(function () {
        NewBottom+= -SbSlook_1Lis[0].offsetHeight;
        if(NewBottom<-SbSlook_1LisLength*SbSlook_1Lis[0].offsetHeight){
            NewBottom=0;
        }
        SbSlook_1.style.top=NewBottom+"px";
        SbSlook_1.style.transition=1+"s";
    },2000)
}

var SbSlook_2=document.getElementById("SbSlook_2");
var SbSlook_2Ul=SbSlook_2.getElementsByTagName("ul")[0];
var SbSlook_2Lis=SbSlook_2.getElementsByTagName("li");
var Newtop_2=0;
var SbSlook_2Lislength=SbSlook_2Lis.length;
SbSlook_2Ul.innerHTML+=SbSlook_2Ul.innerHTML;
sildeshow_3();
var cound_2;
function sildeshow_3() {
    clearInterval(cound_2);
    cound_2=setInterval(function () {
        Newtop_2+= -SbSlook_2Lis[0].offsetHeight;
        if(Newtop_2<-SbSlook_2Lislength*SbSlook_2Lis[0].offsetHeight){
           Newtop_2=0;
        }
        SbSlook_2.style.top=Newtop_2+"px";
        SbSlook_2.style.transition=1+"s";
    },2000)
}


// 大小轮播重做

var BoxPho_1=document.getElementById("BoxPho_1");
var BoxPho_1Ul=BoxPho_1.getElementsByTagName("ul")[0];
var BoxPho_1Lis=BoxPho_1.getElementsByTagName("li");

var BoxPho_1Lislength=BoxPho_1Lis.length;
var BoxPho_1timer;

var BoxPhoButL=document.getElementById("BoxPhoButL");
var BoxPhoButR=document.getElementById("BoxPhoButR");
BoxPho_1Ul.innerHTML+=BoxPho_1Ul.innerHTML;
var BoxPho_1Sum=204;
var BoxPho_1Left=0;
BoxPho_1move();
BoxPho_1.onmouseover=function () {
    clearInterval(BoxPho_1timer);
};
BoxPho_1.onmouseout=function () {
    BoxPho_1move();
};
BoxPhoButL.onclick=function () {
    BoxPho_1Sum=204;
    BoxPho_2Num=102;
};
BoxPhoButR.onclick=function () {
    BoxPho_1Sum=-204;
    BoxPho_2Num=-102;
};
function BoxPho_1move() {
    clearInterval(BoxPho_1timer);
    BoxPho_1timer=setInterval(function () {
        BoxPho_1Left+= BoxPho_1Sum;
        if(BoxPho_1Left<-204*BoxPho_1Lislength){
            BoxPho_1Left=0;
        }
        if(BoxPho_1Left>0){
            BoxPho_1Left=-204*BoxPho_1Lislength;
        }
        BoxPho_1.style.left=BoxPho_1Left+"px";
        BoxPho_1.style.transition=1+"s";
    },2000)
}

// 小轮播
var BoxPho_2=document.getElementById("BoxPho_2");
var BoxPho_2Ul=BoxPho_2.getElementsByTagName("ul")[0];
var BoxPho_2Lis=BoxPho_2.getElementsByTagName("li");
var BoxPho_2Left=0;
var BoxPho_2Num=102;
var BoxPho_2Lislength=BoxPho_2Lis.length;
var BoxPho_2timer;
BoxPho_2Ul.innerHTML+=BoxPho_2Ul.innerHTML;
BoxPho_2move();
BoxPho_2.onmouseover=function () {
    clearInterval(BoxPho_2timer);
};
BoxPho_2.onmouseout=function () {
    BoxPho_2move();
};
function BoxPho_2move() {
    clearInterval(BoxPho_2timer);
    BoxPho_2timer=setInterval(function(){
        BoxPho_2Left+=BoxPho_2Num;
        if(BoxPho_2Left<-102*BoxPho_2Lislength){
            BoxPho_2Left=0;
        }
        if(BoxPho_2Left>0){
            BoxPho_2Left=-102*BoxPho_2Lislength;
        }
        BoxPho_2.style.left=BoxPho_2Left+"px";
        BoxPho_2.style.transition=1+"s";
    },2000)
}

// 大小轮播选项卡
var BoxListLis=document.getElementById("BoxList").getElementsByTagName("li");
var BoxPho=document.getElementsByClassName("BoxPho");

for(var i=0; i<BoxListLis.length;i++) {
    BoxListLis[i].index=i;
    BoxListLis[i].onmouseover=function () {
        for(var j=0;j<BoxListLis.length;j++){
            BoxListLis[j].className='';
            BoxPho[j].className='BoxPho';
        }
        this.className="BoxListOne";
        BoxPho[this.index].className="BoxPho BoxPhoS";
    }
}
