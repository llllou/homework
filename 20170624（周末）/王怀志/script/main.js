event=event||window.event;
var box=document.getElementById("background");
var hp=100;
function Ballon (hp,ballon)
{	
	
	this.point=[1,2,3,"*2",0,-1];
	this.init=function()
	{
		this.dom=document.createElement("p");		
		this.dom.style.top ='410px';
		this.dom.style.left = parseInt(Math.random()*910)+"px";
		this.dom.mean=this.point[parseInt(Math.random()*6)];
		box.appendChild(this.dom);
		this.dom.innerHTML=this.dom.mean;
		this.move();
	}
	this.timer;
	this.move=function()
	{
		var self= this;
		var step;
		step=self.dom.offsetTop;
		this.timer=setInterval(function(){			
			step-=2;
			self.dom.style.top =step+"px";
			if(step<=0)self.die();
		},10);
	}
	this.die=function(hp)
	{
		clearInterval(this.timer);
		try{box.removeChild(this.dom)}
		catch(err){};		
		ballon.splice(ballon.indexOf(this.dom),1)
	}
	this.init();	
}
function check()
{
	if (this.mean===1) {hp++}
	else if (this.mean===2) {hp+=2}
	else if (this.mean==3) {hp+=3;}
	else if (this.mean==="*2") {hp*=2}
	else if(this.mean===-1){hp-=1}
	else if (this.mean===0) {hp=0};
	box.removeChild(this);
};
var h3=document.getElementById("h3");
var ballon=[];
setInterval(function(){ballon.push(new Ballon(hp,ballon))},500);
box.onclick=function(event)
{
	var target=event.target||event.srcElement;	
	if(target.nodeName=="P")
	{
		// ballon.splice(ballon.indexOf(target),1);
		check.call(target);	
		h3.innerHTML=hp;		
	}
}
var mic=document.getElementById("music").getElementsByTagName("div");
function Music (first,second,third) {
	this.dom;
	this.init=function()
	{
		this.dom=document.createElement("p");	
		this.dom.className="music-cube"	;
		this.dom.style.top =0
		this.dom.style.left = 0;
		console.log(cube1);
		this.dom.chose=parseInt(Math.random()*3)
		switch (this.dom.chose) {
			case 0:
				mic[0].appendChild(this.dom);
				first.push(this.dom);
				break;
			case 1:
				mic[1].appendChild(this.dom);
				second.push(this.dom);
				break;
			case 2:
				mic[2].appendChild(this.dom);
				third.push(this.dom);
				break;
		}
		this.move();
	}
	this.timer;
	this.move=function()
	{
		var self= this;
		var step;
		step=self.dom.offsetTop;
		this.timer=setInterval(function(){			
			step+=3;
			self.dom.style.top =step+"px";
			if(step>=568)self.die();
		},10);
	}
	this.die=function()
	{
		clearInterval(this.timer);
		if (this.dom.chose==0)first.shift();
		else if(this.dom.chose==1)second.shift();
		else if (this.dom.chose==2)third.shift();
		for (var i =0;i <mic.length; i++) 
		{
			try {
				mic[i].removeChild(this.dom);
			} catch(e) {break}			
		}
	}
	this.init();
}
var cube1=new Array();
var cube2=new Array();
var cube3=new Array();
setInterval(function(){
	new Music(cube1,cube2,cube3)
},300)
document.onkeydown=function (event) {
	if(event.key=="q") 
	{
		for(var k = 0, length3 = cube1.length; k < length3; k++){
			if(cube1[k].offsetTop>=495 && cube1[k].offsetTop<=530)cube1[k].style.display ="none";			
		}		
	}
	else if (event.key=="w") {
		for(var j = 0, length4 = cube2.length; j < length4; j++){
			if(cube2[j].offsetTop>=495 && cube2[j].offsetTop<=530)cube2[j].style.display ="none";			
		}	
	}
	else if(event.key=="e")
	{
		for(var n = 0, length5 = cube3.length; n < length5; n++){
			if(cube3[n].offsetTop>=495 && cube3[n].offsetTop<=530)cube3[n].style.display ="none";			
		}	
	}
}