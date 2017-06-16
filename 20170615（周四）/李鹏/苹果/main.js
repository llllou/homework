
var h3=document.getElementsByTagName("h3")[0];
var char=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",'q',"r","s","t","u","v","w","x","y","z"];
var scroe=0;
function Apple(){
	this.dom = null;
	this.timer;
	this.container = null;
	this.char= char[parseInt(Math.random()*26)];
	this.die=function() {
		this.dom.style.display = "none";
		clearInterval(this.timer);
	}
	this.corrput=function(){
		this.dom.style.display = 'none';
		clearInterval(this.timer);
	}
	this.move=function(obj) {
		var self=this;
		this.timer=setInterval(function(){
			this.container=obj.offsetTop;
			this.container+=1;
			if(this.container>=600){self.corrput()};
			obj.style.top=this.container+"px";
		},500)
	}
	this.init=function(){
		this.dom=document.createElement("p");
		document.body.appendChild(this.dom);
		this.dom.className="apple";
		this.dom.innerText=this.char;
		var obj=this.dom;
		this.dom.style.top=parseInt(Math.random()*200)+"px";
		this.dom.style.left = parseInt(Math.random()*1200)+"px";
		this.move(obj);		
	}
	this.init();
}
	var game=[];
	setInterval(function(){
		game.push(new Apple())
	},500);
	document.onkeydown=function(event){
		event = event||window.event;
		for (var i = 0; i < game.length; i++) {
		if(event.key==game[i].char)
			{
				game[i].die();
				game.splice(i,1);
				scroe++;
				h3.innerText="您的分数是："+scroe;
				break;
			}
		}
    }