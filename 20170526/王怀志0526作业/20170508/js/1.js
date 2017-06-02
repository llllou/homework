/**
 * Created by llllou on 2017/5/26 0026.
 */
var img=document.getElementsByClassName("sec-container-1")[0].getElementsByTagName("a");
var left=document.getElementById("left")
var right=document.getElementById("right");
var point=document.getElementsByClassName("sec-container-1")[0].getElementsByTagName("li");
var index=0;
function pic()
{
    if (index>4){
        index=0;
    }
    else if(index<0){
        index=4;
    }
    for (i=0;i<5;i++)
    {
        img[i].className="";
        point[i].className="";
    }
    img[index].className="active";
    point[index].className="active";
};
left.onclick=function(){
    index--;
    pic();
}
right.onclick=function(){
    index++;
    pic();
}
for(var i=0;i<5;i++)
{
    img[i].idx=i;
    point[i].idx=i
    point[i].onclick=function()
    {
        index=this.idx;
        pic();
    }
};
var aside_jump=document.getElementsByClassName("aside-content1")[0].getElementsByTagName("span");
var aside_p=document.getElementsByClassName("aside-content1")[0].getElementsByTagName("p");
for(var m=0;m<5;m++)
{
    (function (c){
       aside_jump[c].onclick=function(){
            for(j=0;j<=4;j++){
                aside_p[j].className="";
                aside_jump[j].className="";
            };
           aside_p[c].className="active";
           aside_jump[c].className="active"
        }
    })(m);
}