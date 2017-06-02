var font1=document.getElementById("font1");
var font2=document.getElementById("font2");
var box=document.getElementById("headFirst");
var a=12;
font1.onclick=function()
{
	if(a<=30){
		a+=2;
	}
	box.style.fontSize=a+"px";
}
font2.onclick=function()
{
	if (a>=12) {
		a-=2;
	}
	box.style.fontSize=a+"px";
};

