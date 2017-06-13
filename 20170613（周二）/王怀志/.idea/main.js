/**
 * Created by llllou on 2017/6/13 0013.
 */
var small=document.getElementById("small");
var lun=document.getElementById("lun");
var big=document.getElementById("big");
var bigImg=big.getElementsByTagName("img")[0];
var smallImg=small.getElementsByTagName("img")[0];
var img=document.getElementsByClassName("show")[0];
event=event||window.event;
img.onclick=function(event)
{
    var container="";
    var target=event.target||event.srcElement;
    if(target.nodeName.toLowerCase()=="img"){
        container=target.src;
        container=container.replace(/(50x64)/,"350x449");
        smallImg.src=container;
        container=target.src.replace(/(50x64)/,"800x1026");
        bigImg.src=container;
    }
}
function getAllTop(obj){
    var current=obj;
    var alltop=obj.offsetTop;
    while(current=current.offsetParent)
    {
        alltop+=current.offsetTop;
    }
    return alltop;
}
small.onmouseover=function(){
    lun.style.display="block";
    big.style.display="block";
}
small.onmousemove=function (event) {
    var rate=800/350;
    var st=document.body.scrollTop||document.documentElement.scrollTop;
    var x=event.clientX- small.offsetLeft-0.5*lun.offsetWidth;
    var y=event.clientY-(getAllTop(small)-st)-0.5*lun.offsetHeight;
    if(x>=small.offsetWidth-lun.offsetWidth)
    {
        x=small.offsetWidth-lun.offsetWidth
    }
    else if(x<=0)x=0;
    if (y>=small.offsetHeight-lun.offsetHeight)
    {
        y=small.offsetHeight-lun.offsetHeight
    }
    else if(y<=0)y=0;
    lun.style.top=y+"px";
    lun.style.left=x+"px";
    bigImg.style.top=(-1*y)*rate+"px";
    bigImg.style.left=(-1*x)*rate+"px";
}
small.onmouseout=function(){
    big.style.display="none";
    lun.style.display="none";
}