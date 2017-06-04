var section=document.getElementsByTagName("section")[0];
var left=document.getElementsByClassName("left")[0];
var right=document.getElementsByClassName("right")[0];
var index=0;
var timer1;
left.onclick=function(){index--; banner();}
right.onclick=function(){index++;banner();}
section.onmouseover=function(){clearInterval(timer1)}
section.onmouseout=function(){
    clearInterval(timer1);
    timer1=setInterval(function()
    {
        index++;
        banner();
    }
    ,3600);}
timer1=setInterval(function()
    {
        index++;
        banner();
    }
    ,3600);
function banner()
{
    if(index>3){index=0}
    else if(index<0){index=3};
    section.style.backgroundImage="url(\"image/banner"+index+".jpg\")";
};
var user=document.getElementById("user");
var password=document.getElementById("password");
var submit=document.getElementsByClassName("login")[0];
submit.onclick=function()
{
    if (user.value=="")
    {alert("用户名不能为空")
    }
    else if(password.value=="")
    {
      alert("请输入密码")
    }
    else if(user.value=="admin"&&password.value=="123")
    {
        alert("登录成功")
    }
    else
    {alert("密码或用户名错误")}
};
var list1=document.getElementById("navList").getElementsByTagName("div");
var list2=document.getElementsByClassName("list1");
for(var i= 0;i<4;i++){
    list1[i].idx=i;
    list2[i].idx=i;
    list1[i].onmouseover= function () {
    list2[this.idx].style.display="block";
    };
    list1[i].onmouseout= function () {
        list2[this.idx].style.display="none";
    };
}
var love=document.getElementById("scroll");
var timer;
var lth=parseInt(love.offsetHeight);
love.innerHTML+=love.innerHTML;
var count=0;
function run(){
    clearInterval(timer);
    timer=setInterval(function(){
    count-=1;
    if(count<-lth){
        count=0
    }
    love.style.top=count+"px";
},12)};
run();
love.onmouseover=function()
{
    clearInterval(timer);
}
love.onmouseout=function(){
    run();
}