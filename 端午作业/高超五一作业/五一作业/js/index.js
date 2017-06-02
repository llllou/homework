

    var OneLists=document.getElementById("OneList").getElementsByTagName("a");
    var navCenterShadow=document.getElementById("navCenterShadow");



    OneLists[3].onclick=function () {
        navCenterShadow.style.display="block";
    };

    navCenterShadow.onmouseover=function () {
        navCenterShadow.style.display="block";
    };
    navCenterShadow.onmouseout=function () {
        navCenterShadow.style.display="none";
    };
    // OneLists[3].onmouseout=function () {
    //     navCenterShadow.style.display="none";
    // };

    for(var i=0; i<OneLists.length; i++) {
        OneLists[i].onmouseover = function () {
            this.style.color="darkorange";
        };
        OneLists[i].onmouseout = function () {
            this.style.color="white";
        };
    }


    var Banner=document.getElementById("Banner");
    var LeftBut=document.getElementById("LeftBut");
    var RightBut=document.getElementById("RightBut");
    var Smalls=document.getElementById("Small").getElementsByTagName("li");
    var arr=["images/1.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg"];

    var img_idx=0;

    LeftBut.onclick=function () {
            img_idx--;
            if(img_idx<0)img_idx=4;
            binss();
    };

    RightBut.onclick=function () {
        img_idx++;
        if(img_idx>4)img_idx=0;
        binss();
    };

    for(var i=0;i<Smalls.length; i++){
        Smalls[i].index=i;
        Smalls[i].onmouseover=function(){
                img_idx=this.index;
                binss()
        }
    }
    function binss() {
        Banner.style.background="url("+arr[img_idx]+")100% 670px";

        for(var j=0; j<Smalls.length; j++){
            Smalls[j].className="";
        }
            Smalls[img_idx].className="SmallOne";
    }
    var BoxS=document.getElementById("Box").getElementsByClassName("BoxSum");
    // var BoxSum=document.getElementById("BoxSum");
    // var BoxSha=document.getElementById("BoxSha");
    var SmallTwos=document.getElementById("SmallTwo").getElementsByTagName("li");
    var number=0;

    for(var i=0; i<SmallTwos.length; i++) {
        SmallTwos[i].index = i;
        SmallTwos[i].onmouseover = function () {
            number = this.index;
            for(var i=0;i<BoxS.length;i++){
                BoxS[i].style.display="none";
            }
            BoxS[number].style.display="block";

            for(var j=0; j<SmallTwos.length; j++){
                SmallTwos[j].className="";
            }
            SmallTwos[number].className="Smalltwo-d";
        };
    }

    var LinkO=document.getElementById("LinkO");
    var LinkT=document.getElementById("LinkT");
    var LinkS=document.getElementById("LinkS");
    var LinkF=document.getElementById("LinkF");
    var LinkF_btn=document.getElementById("LinkF_btn");
    var SpanO=document.getElementById("SpanO");
    var SpanT=document.getElementById("SpanT");


    LinkF_btn.onclick = function () {
        LinkF.style.display="none";
    };
    LinkS.onclick = function () {
        LinkF.style.display="block";
        SpanO.innerText=LinkO.value;
        SpanT.innerText=LinkT.value;
    };
