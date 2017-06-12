
var oUl=document.getElementById("oneList");
var Lis=oneList.getElementsByTagName("li");
var twoList=document.getElementsByClassName("two-List");
		
		twoList[0].style.display="block";
		for(var i=0;i<Lis.length;i++){
		Lis[i].index=i;
		Lis[i].onmouseover=function(){
			twoList[this.index].style.display="block";
		}	
		twoList[0].onmouseover=function(){
			twoList[0].style.display="block";
		}
		twoList[1].onmouseover=function(){
			twoList[1].style.display="block";
		}
		twoList[2].onmouseover=function(){
			twoList[2].style.display="block";
		}	
		for(var j=0;j<oUl.length;j++){
			twoList[j].style.display="block"
		}
		Lis[i].onmouseout=function(){
			twoList[this.index].style.display="none";
		}
	}
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var oul1=document.getElementById("photo");
var oul2=document.getElementById("picture");
var lis1=oul1.getElementsByTagName("li");
var lis2=oul2.getElementsByTagName("li");

var one=204;
var two=104;

var liLength1=lis1.length;
var liLength2=lis2.length;

var onewidth=one*liLength1;
var twowidth=two*liLength2;

oul1.innerHTML+=oul1.innerHTML;
oul2.innerHTML+=oul2.innerHTML;

var newone=0;
var newtwo=0;
btn1.onclick=function(){
	newone-=one;
	newtwo-=two;
	move();
}
btn2.onclick=function(){
	newone+=one;
	newtwo+=two;
	move();
}
function move(){
	if(newone<-onewidth){
		newone=0;
	}
	if(newtwo<-twowidth){
		newtwo=0;
	}
	if(newone>0){
		newone=-onewidth
	}
	if(newtwo>0){
		newtwo=-twowidth
	}
	oul1.style.left=newone+"px";
	oul2.style.left=newtwo+"px";
}

 