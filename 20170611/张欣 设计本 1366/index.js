// 二级
var lis=document.getElementsByClassName("wrap_meitu")[0].getElementsByClassName("young");
var oDiv=document.getElementsByClassName("inner");

for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmousemove=function(){
        for(var j=0; j<oDiv.length;j++){
            oDiv[j].style.display="none";
        }
        oDiv[this.index].style.display="block";
    }
        lis[i].onmouseout=function(){

         for(var j=0; j<oDiv.length;j++){
            oDiv[j].style.display="none";
        }
    }
}
// 轮播图
var  ow=document.getElementById("index_slider");
var  oT=ow.getElementsByClassName("lun")[0];
var  ol=ow.getElementsByTagName("li");

oT.innerHTML+=oT.innerHTML;
var newLeft=0;
var nu=1600;
var timer;
hee();
function hee(){
    timer=setInterval(function(){
    newLeft-=nu;
    if(newLeft<=-1600*ol.length/2){
        newLeft=0;
    }
    // console.log(newLeft);
    // if(newLeft>0){
    //     newLeft=-1600*ol.length/2;
    // }
    oT.style.left=newLeft+"px";
},2000);

}













// 设计师
  var lis=document.getElementsByClassName("tabname")[0].getElementsByTagName("li");
            var div1=document.getElementsByClassName("deta");
             for(var j=0; j<lis.length;j++){
                            div1[j].style.display="none";
                        }
                    div1[0].style.display="block";
                // 二级
            for(var i=0; i<lis.length;i++){
                lis[i].index=i;
                lis[i].onmouseover=function(){
                        for(var j=0; j<lis.length;j++){
                            div1[j].style.display="none";
                        }
                    div1[this.index].style.display="block";
                }
            }


            var imgul1=document.getElementsByClassName("detall")[0].getElementsByClassName("top")[0];
            var imgul2=document.getElementsByClassName("detall")[0].getElementsByClassName("bottom")[0];
            var ullis1=imgul1.getElementsByTagName("li");
            var ullis2=imgul2.getElementsByTagName("li");
            var btn1=document.getElementsByClassName("btn1")[0];
             var btn2=document.getElementsByClassName("btn2")[0];

             var w1=204;
             var w2=102;
             // console.log(ullis2[0].offsetWidth);

             var li1Length=ullis1.length;
             var li2Length=ullis2.length;
            var li1width=w1*li1Length;
            var li2width=w2*li2Length;

            imgul1.innerHTML+=imgul1.innerHTML;
            imgul2.innerHTML+=imgul2.innerHTML;

            var con1=0;
            var con2=0;
            btn1.onclick=function(){
                con1-=w1;
                con2-=w2;
                imgMove();
            }
             btn2.onclick=function(){
                con1+=w1;
                con2+=w2;
                imgMove();
            }
            function imgMove(){
                    if(con1<-li1width){con1=0;}
                    if(con2<-li2width){con2=0;}
                    if(con1>0)con1=-li1width;
                    if(con2>0)con2=-li1width;
                    imgul1.style.left=con1+"px";
                     imgul2.style.left=con2+"px";
            }



// 向上无缝滚动

// var show=document.getElementById("show");
var show=document.getElementsByClassName("column_new_content");
var ul=show[0].getElementsByClassName("wul")[0];
var ul1=show[1].getElementsByClassName("wul")[0];
var ul2=show[2].getElementsByClassName("wul")[0];
var oli=ul.getElementsByTagName("li");       

ul.innerHTML+=ul.innerHTML;
ul1.innerHTML+=ul1.innerHTML;
ul2.innerHTML+=ul2.innerHTML;
var newTop=0;
var num=100;
var timer;
move();
function move(){
  timer=setInterval( function(){
        newTop-=num;
        if(newTop<-100*oli.length/2){
            newTop=0;
        }
        if(newTop>0){
            newTop<-100*oli.length/2;
        }
        ul.style.top=newTop+"px";
        ul1.style.top=newTop+"px";
        ul2.style.top=newTop+"px";
  },1000);
}


