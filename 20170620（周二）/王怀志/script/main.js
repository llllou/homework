function Game () {

function Map(row,col)
{
	this.row=row;
	this.col=col;
	this.mapArray=[];
	this.dom=null;
	this.init();
}
Map.prototype.init = function(){
	this.dom=document.createElement("table");
	document.body.appendChild(this.dom)
	this.dom.className="map"
	for(var i=0; i < this.row; i++){
		var tr=document.createElement("tr");
		var MapTr=[];
		for(var k = 0; k <this.col; k++)
		{
			var maptd=document.createElement("td");
			maptd.className="map-cube"
			MapTr.push(maptd);
			tr.appendChild(maptd);
		};
		this.mapArray.push(MapTr);
		this.dom.appendChild(tr)
	}
	window.mapArray=this.mapArray;
	window.col=this.col;
	window.row=this.row;
}
var map = new Map(20,20);
function Snake(speed){
	this.speed=speed||1000;
	var direction=[0,1,2,3];
	this.head=direction[1]
	this.snake=[];
	this.timer;
	this.init(14,10);
	this.init(13,10);
	this.init(12,10);
	this.init(11,10);
	this.init(10,10);
	this.move();
	
	window.snake=this.snake;
}
Snake.prototype.init=function (mapX,mapY) {
	var Snakebody=document.createElement("div");
	Snakebody.className = 'snake-body';
	this.snake.unshift(Snakebody);
	try{mapArray[mapY][mapX].appendChild(Snakebody)}catch(err){this.die()};
	Snakebody.x=mapX;
	Snakebody.y=mapY;
}
Snake.prototype.eat=function (mapX,mapY) {
	var Snakebody=document.createElement("div");
	Snakebody.className = 'snake-body';
	this.snake.push(Snakebody);
	try{mapArray[mapY][mapX].appendChild(Snakebody)}catch(err){this.die()};
	Snakebody.x=mapX;
	Snakebody.y=mapY;
}
Snake.prototype.die=function(){
	clearInterval(this.timer);
	alert("game over");
	for (var i =0;i<row; i++) {
		for (var n = 0; n <col; n++) {
			mapArray[i][n].innerHTML="";
		}
	}
}
Snake.prototype.move=function()
{
	var self=this;
	this.timer=setInterval(function(){
		var snakeLast=self.snake[self.snake.length-1];
		var snakeHead=self.snake[0];
		mapArray[snakeLast.y][snakeLast.x].removeChild(snakeLast);
		self.snake.pop();
		document.onkeydown = function(event) {
	      event = event || window.event;
	      switch(event.keyCode) {
	        case 37: 
	          if (self.head !== 3) self.head = 1;
	          break;
	        case 38:
	          if (self.head !== 2) self.head = 0;
	          break;
	        case 39:
	          if (self.head !== 1) self.head = 3;
	          break;
	        case 40:
	          if (self.head !== 0) self.head = 2;
	          break;
	      }
	    };

		if (self.head==1) {self.init(snakeHead.x-1,snakeHead.y);
		}
		if (self.head==0) {self.init(snakeHead.x,snakeHead.y-1);
		}
		if (self.head==2) {self.init(snakeHead.x,snakeHead.y+1);
		}
		if (self.head==3) {self.init(snakeHead.x+1,snakeHead.y);
		}
		for (var i = 1; i < self.snake.length; i++) {
			if(self.snake[0].x==self.snake[i].x&&self.snake[0].y==self.snake[i].y)
				{self.die()};
		}
		if (snakeHead.x==food.x&&snakeHead.y==food.y) {
			setTimeout(function(){
				self.eat(food.x,food.y)
				food.Posit();
				food.init();
			},self.speed*(snake.length-1));
		}
		snakeLast=self.snake[self.snake.length-1];
		snakeHead=self.snake[0];		
	},this.speed)
}
function Food (){
	this.x;
	this.y;
	this.Posit();
	this.init=function () {
		for (var i =0; i<col; i++) {
			for (var n = 0; n < row; n++) {
				mapArray[i][n].className="map-cube"
			}
		}
		mapArray[this.y][this.x].className="food";
	};
	this.init();
};
Food.prototype.Posit=function () {
		this.x=parseInt(Math.random()*col);
		this.y=parseInt(Math.random()*row);
		for (var i = 0; i < snake.length; i++) {
	      if (this.x === snake[i].x && this.y === snake[i].y) {
	        this.Posit();
	        return;
	      }
		}
	}
new Snake(500);
var food=new Food();
window.food=food;
}
new Game();