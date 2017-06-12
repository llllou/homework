/**
 * Created by llllou on 2017/6/8 0008.
 */
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
