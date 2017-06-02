var headImg=document.getElementsByTagName('header')[0];
var prev=document.getElementById('headleft');
var next=document.getElementById('headright');
var headPoint=document.getElementsByTagName('header')[0].getElementsByClassName('headshow')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
var count=0;
var headNav=document.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
var headList=document.getElementsByClassName('navList');
for (var i1 = 1; i1 < headNav.length; i1++) {
	(function(m){
		headNav[m].onmouseover=function(){
			this.className="active";
			headList[m-1].style.display="block";
		}
		headNav[m].onmouseout=function(){
			this.className="";
			headList[m-1].style.display="none";
		}
	}
		)(i1);
}
function run1()
{
	if (count>4) {count=0}
	else if (count<0) {count=4};
	headImg.style.backgroundImage="url(images/"+(count+1)+".jpg)";
	for (var i = 0; i < headPoint.length; i++) {
		headPoint[i].className="";
	}
	headPoint[count].className="active";
};
prev.onclick=function(){
	count--;
	run1();
};
next.onclick=function(){
	count++;
	run1();
};
for (var i2 = 0; i2< headPoint.length; i2++) {
	(function(m){
		headPoint[m].onclick=function()
		{
			count=m;
			run1();
		}
	})(i2);
};
var feedback1=document.getElementById('show').getElementsByTagName('ul')[0];
var ctrl=document.getElementById('control').getElementsByTagName('span');
var dis=0;
run2();
ctrl[0].onclick=function()
{
	dis=0;
	run2();

};
ctrl[1].onclick=function()
{	dis=1;
	run2();
};
function run2()
{
	if (dis==0) {feedback1.style.marginLeft="0px";ctrl[0].style.opacity=1;ctrl[1].style.opacity=0.4}
	else{feedback1.style.marginLeft="-1140px";ctrl[1].style.opacity=1;ctrl[0].style.opacity=0.4};
}
