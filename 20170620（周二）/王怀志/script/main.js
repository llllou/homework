function Ball (top,left,speed,changeX,changeY) {
	this.changeX = changeX || 5;
    this.changeY = changeY || 5;
    this.left = left;
    this.top = top;
    this.speed = speed;
    this.dom = null;
    this.timer = 0;
    this.point=point;
    this.init();
    this.move();   
}
Ball.prototype.init = function() {
	this.dom=document.createElement("p");
	this.dom.style.top=this.top+"px";
	this.dom.style.left = this.left+'px';
	document.body.appendChild(this.dom);
}
Ball.prototype.move = function(){
    var self=this;
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var height = document.documentElement.clientHeight || document.body.clientHeight;
    this.timer=setInterval(function () 
        {
        self.top += self.changeY;
        self.left += self.changeX;
        if (self.left <= 0 || self.left >= width - self.dom.offsetWidth-2) {
            self.changeX= -self.changeX;
          }
        if (self.top <= 0 || self.top >= height - self.dom.offsetHeight) {
            self.changeY = -self.changeY;
          }
        self.dom.style.top=self.top+"px";
        self.dom.style.left = self.left+'px';
        },this.speed)
};
Ball.prototype.check=function (box) {
    var height=document.documentElement.clientHeight || document.body.clientHeight;
    if(this.top>=height-10-this.dom.offsetHeight&&this.changeY>0)
        {
            console.log("check")
            if(this.left>=box-35&&this.left<=box+15)
            {this.changeY = -this.changeY-1;
                return true; } 

        }
}
var stick=document.getElementById("stick");
var scroce=document.getElementById("scorce");
var point=scroce.innerHTML;
point=10
var ball1=new Ball(200, 200, 30, 9, 9,point);
document.onmousemove=function(event)
{   
    event=event||window.event;
    var box=event.clientX;
    clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var left=event.clientX-25;
    left<=1315?left=left:left=1315;
    stick.style.left=left+"px";
    if(ball1.check(box)){
        point++;
        scroce.innerHTML=point};
}