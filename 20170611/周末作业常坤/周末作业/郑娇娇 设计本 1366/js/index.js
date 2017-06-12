//二级
var oneLis=document.getElementsByClassName("last");
var twoLists=document.getElementsByClassName("twoList");

for(var i=0;i<oneLis.length;i++){
	oneLis[i].index=i;
	oneLis[i].onmouseover=function(){
		twoLists[this.index].style.display="block"
	}
	oneLis[i].onmouseout=function(){
		twoLists[this.index].style.display="none";
	}
}
//轮播
var ban = document.getElementById("ban")
var bannerLi = document.getElementById("banner").getElementsByTagName("li");
var circlesLi = document.getElementById("circles").getElementsByTagName("li");
var banlisLenght=bannerLi.length;
var idx=2;
var interval=2000;
var timer=setInterval(lunbo,interval);

ban.onmouseover=function(){
	clearInterval(timer);
}
ban .onmouseout=function(){
	timer=setInterval(lunbo,interval);
}
for(var i=0;i<banlisLenght;i++){
	circlesLi[i].index=i;
	circlesLi[i].onclick=function(){
		 animate(bannerLi[idx],{"opacity":0},300);

            idx = this.index;
            animate(bannerLi[idx],{"opacity":1},300);
            changeCircle();
            }
       }
function lunbo(){
    animate(bannerLi[idx],{"opacity":0},300);
    idx++;
    if(idx>banlisLenght-1){
        idx = 0;
    }
    animate(bannerLi[idx],{"opacity":1},300);
    changeCircle();
}

function changeCircle(){
    for(var i=0;i<circlesLi.length;i++){
        circlesLi[i].className='';
    }
    circlesLi[idx].className="cur";
}

//设计师



//设计机构

//无缝
move();
var dongul=document.getElementsByClassName("dongul")[0];
var dongul1=document.getElementsByClassName("dongul")[1];
var dongul2=document.getElementsByClassName("dongul")[2];
var dongulLi=dongul.getElementsByTagName("li");
var dongulLi1=dongul1.getElementsByTagName("li");
var dongulLi2=dongul2.getElementsByTagName("li");

var dongUls=dongulLi[0].offsetHeight*dongulLi.length;
var newTop=0;
var topDong;

dongul.innerHTML+=dongul.innerHTML;
dongul1.innerHTML+=dongul1.innerHTML;
dongul2.innerHTML+=dongul2.innerHTML;
function move(){
	clearInterval(topDong);
	topDong=setInterval(function(){
		newTop-=101;
		if(newTop<-dongUls){
			newTop=-100;
		}
		dongul.style.top=newTop+"px";
		dongul1.style.top=newTop+"px";
		dongul2.style.top=newTop+"px";
	},900);
}
//dongul.onmouseover=function(){
//	clearInterval(topDong);
//}
//dongul.onmouseout=function(){
//	move();
//}
//dongul1.onmouseover=function(){
//	clearInterval(topDong);
//}
//dongul1.onmouseout=function(){
//	move();
//}
//dongul2.onmouseover=function(){
//	clearInterval(topDong);
//}
//dongul2.onmouseout=function(){
//	move();
//}


