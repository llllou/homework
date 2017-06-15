var tree=document.getElementById("tree");
var h3=document.getElementsByTagName("h3")[0];
var charBox=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",'q',"r","s","t","u","v","w","x","y","z"];
var scroe=0;
function Apple(){
	this.dom=null;
	this.timer;
	this.container=null;
	this.char=charBox[parseInt(Math.random()*26)];
	this.die=function() {
		var self=this;
		this.dom.style.backgroundImage = 'url("images/explosion.png")';
		clearInterval(this.timer);
		setTimeout(function(){tree.removeChild(self.dom)},300) ;		
	}
	this.corrput=function(){
		var self=this;
		this.dom.style.backgroundImage = 'url("images/head.png")';
		clearInterval(this.timer);
		setTimeout(function(){tree.removeChild(self.dom)},300);
	}
	this.move=function(obj)
	{	var self=this;
		this.timer=setInterval(function(){
			this.container=obj.offsetTop;
			this.container+=1;
			if(this.container>=468){self.corrput()};
			obj.style.top=this.container+"px";
		},500)
	}
	this.init=function(){
		/*创造苹果*/
		this.dom=document.createElement("p");
		tree.appendChild(this.dom);
		this.dom.className="apple";
		this.dom.innerHTML=this.char;
		var obj=this.dom;
		this.dom.style.top=parseInt(Math.random()*100)+"px";
		this.dom.style.left = parseInt(Math.random()*750)+"px";
		this.move(obj);		
	}
	this.init();
	
}
var game=[];
setInterval(function(){game.push(new Apple())},500);
document.onkeydown=function(event){
	event=event||window.event;
	for (var i = 0; i < game.length; i++) {
	if(event.key===game[i].char)
		{
			game[i].die();
			game.splice(i,1);			
			scroe++;
			h3.innerHTML="您的分数是："+scroe;
			continue;
		}
	}
}