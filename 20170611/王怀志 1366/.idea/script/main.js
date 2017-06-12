/**
 * Created by llllou on 2017/6/9 0009.
 */
var headNav=document.getElementsByClassName("head-nav3-3")[0].getElementsByTagName("li");
var headList=document.getElementsByClassName("head-list");
var headBorder=document.getElementsByClassName("headbox")
for(i=0;i<headList.length;i++)
{
    headList[i].idx=i;
    headNav[i].idx=i;
    headNav[i].onmouseover=function()
    {
        headList[this.idx].style.display="block";
        this.style.borderWidth="1px 1px 0px 1px";
        this.style.backgroundColor="white";
        this.style.paddingTop="8px"
        headBorder[this.idx].style.borderLeftWidth="0px";
        if(headBorder[this.idx+1]){headBorder[this.idx+1].style.borderLeftWidth="0px";}

    }
    headNav[i].onmouseout=function(){
        headList[this.idx].style.display="none";
        this.style.borderWidth="0px";
        this.style.backgroundColor="transparent";
        this.style.paddingTop="9px"
        headBorder[this.idx].style.borderLeftWidth="1px";
        if(headBorder[this.idx+1])
        {headBorder[this.idx+1].style.borderLeftWidth="1px";}
    }
}
var pointer1=document.getElementsByClassName("pointer1")[0].getElementsByTagName("span");
var container1=document.getElementById("roundshow1");
var li1=container1.getElementsByTagName("li");
var count=0;
(function(){
    var timer;
    timer=setInterval(function(){
        count++;
        move();
    },2000);
    for(var i=0;i<li1.length;i++)
    {
        pointer1[i].idx=i;
        li1[i].idx=i;
        pointer1[i].onclick=function()
        {
            count=this.idx;
            move();
            clearInterval(timer)
            setTimeout(timer,2000)
        }
    };



    function move()
    {   if(count>2){count=0};
        animate(container1,{"left":(count*li1[0].offsetWidth*-1)+"px"},500);
        for(var n=0;n<pointer1.length;n++)
        {pointer1[n].className=""};
        pointer1[count].className="current";

    }
})();
var list=document.getElementsByClassName("list")[0].getElementsByTagName("li");
var show=document.getElementsByClassName("main")[0].getElementsByClassName("show");
var up=document.getElementsByClassName("first")[0].getElementsByTagName("ul")[0];
var down=document.getElementsByClassName("first")[0].getElementsByTagName("ol")[0];
up.innerHTML=up.innerHTML+up.innerHTML+up.innerHTML;
down.innerHTML=down.innerHTML+down.innerHTML+down.innerHTML;
list[3].style.borderBottom="0px";
console.log(show.length);
for(var i=0;i<list.length;i++)
{
    list[i].idx=i;
    list[i].onmouseover=function run(){
        for(var n=0;n<show.length;n++)
        {
            show[n].className=show[n].className.replace(/\s+current/," ");
        };
        show[this.idx].className+=" current";
    }
};
up.style.left="-1020px";
down.style.left="-1020px";
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var lock=0;
function move(oDiv,end) {
    var timer = null;
    var step=end/100;
    var container=parseInt(oDiv.offsetLeft);
    var count=0;
    if(lock==1){return};
    timer = setInterval(function () {
        lock=1;
        container+=step;
        oDiv.style.left=container+"px";
        count++;
        if (oDiv.offsetLeft>=0||oDiv.offsetLeft<=-2040){
            oDiv.style.left="-1020px";
            clearInterval(timer)
            lock=0
        }
        else if(count>=100)
        {
            clearInterval(timer);
            lock=0;
        }

    }, 5)
}
prev.onclick=function(){ move(up,-204);move(down,-102);};
next.onclick=function(){ move(up,204);move(down,102);};
var div=document.getElementsByClassName("content4")[0].getElementsByTagName("div");
for(i=1;i<div.length;i++)
{
    div[i].idx=i;
    div[i].onmouseover=function (){
        if (this.idx== 1) {
            animate(div[2], {"left": "550px"}, 500);
            animate(div[3], {"left": "760px"}, 500);
            animate(div[4], {"left": "970px"}, 500)
        }
        else if (this.idx== 2) {
            animate(div[2], {"left": "210px"}, 500);
            animate(div[3], {"left": "760px"}, 500);
            animate(div[4], {"left": "970px"}, 500)
        }
        else if (this.idx== 3) {
            animate(div[2], {"left": "210px"}, 500);
            animate(div[3], {"left": "420px"}, 500);
            animate(div[4], {"left": "970px"}, 500)
        }
        else if (this.idx == 4)
        {
            animate(div[2], {"left": "210px"}, 500);
            animate(div[3], {"left": "420px"}, 500);
            animate(div[4], {"left": "630px"}, 500)
        }

    }
}
var btn1=document.getElementById("base1");
var btn2=document.getElementById("base2");
var content5=document.getElementsByClassName("content5-show");
btn1.onclick=function(){
    content5[0].className="content5-show";
    content5[1].className="content5-show off";
    btn1.style.color="#dd4f50";
    btn2.style.color="#3c3c3c"
}
btn2.onclick=function(){
    content5[1].className="content5-show";
    content5[0].className="content5-show off";
    btn2.style.color="#dd4f50";
    btn1.style.color="#3c3c3c"
}
var roundshow=document.getElementsByClassName("roundshow2");
(function() {
        var box = 0;
        var timer;
        setInterval(
            function () {
                box -=101;
                for (var i = 0; i< roundshow.length; i++) {
                    if (box <= -366){
                        box = 0;
                    }
                   roundshow[i].style.top=box+"px"
                }
            }, 3000);
    }
)();
