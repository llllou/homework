var twoList1 = document.getElementsByClassName("twoList1");
var twoList1s = document.getElementsByClassName("twoList1s");
  for (var i = 0 ; i < twoList1.length;i++){
      twoList1[i].index = i;
      twoList1[i].onmouseover = function () {
          for (var i = 0;i<twoList1s.length;i++){
              twoList1s[i].style.display = "none"
          }
          twoList1s[this.index].style.display = "block"
      };
      twoList1[i].onmouseout =function () {
          // setTimeout(function(){
              for (var i = 0;i<twoList1s.length;i++){
                  twoList1s[i].style.display = "none"
              }
          // },1500)
      }
  }
var twoList2 = document.getElementsByClassName("twoList2")[0];
var twoList2s = document.getElementsByClassName("twoList2s")[0];
    twoList2.onmouseover = function () {
        twoList2s.style.display = "block"
    };
    twoList2.onmouseout =function () {
            twoList2s.style.display = "none"
    };

var twoList3 = document.getElementsByClassName("twoList3");
var twoList3s = document.getElementsByClassName("twoList3s");
for (var i = 0 ; i < twoList3.length;i++){
    twoList3[i].index = i;
    twoList3[i].onmouseover = function () {
        for (var i = 0;i<twoList3s.length;i++){
            twoList3s[i].style.display = "none"
        }
        twoList3s[this.index].style.display = "block"
    };
    twoList3[i].onmouseout =function () {
        for (var i = 0;i<twoList3s.length;i++){
            twoList3s[i].style.display = "none"
        }
    }
}

var twoList4 = document.getElementsByClassName("twoList4");
var twoList4s = document.getElementsByClassName("twoList4s");
for (var i = 0 ; i < twoList4.length;i++){
    twoList4[i].index = i;
    twoList4[i].onmouseover = function () {
        for (var i = 0;i<twoList4s.length;i++){
            twoList4s[i].style.display = "none"
        }
        twoList4s[this.index].style.display = "block"
    };
    twoList4[i].onmouseout =function () {
        for (var i = 0;i<twoList4s.length;i++){
            twoList4s[i].style.display = "none"
        }
    }
}

var cor = document.getElementsByClassName("cor")[0];
var yuand = document.getElementsByClassName("yuand");
var key1 = 1;
var key2 = 0;
function yuan() {
    for (var i = 0;i<yuand.length;i++){
        yuand[i].style.background = "gold";
    }
    yuand[key2].style.background = "red";
}
setInterval(function () {
    key1++;
    key2++;
    if (key2 >= 3){
        key2 = 0
    }
    if (key1 >= 4){
        key1 = 1
    }
    yuan()
    zhix();
},1500);
function  zhix(){
    cor.style.background = "url("+"image/"+key1+".jpg"+")";
}

var oUl = document.getElementById("box1");
var oli = oUl.getElementsByTagName("li");
var box = document.getElementById("box");
var box2 = box.getElementsByClassName("box2");
for(var i = 0;i<oli.length;i++){
    oli[i].index = i;
    oli[i].onmouseover= function () {
        for (var i = 0;i<oli.length;i++){
            oli[i].style.borderLeft= "3px solid #666"
        }
        this.style.borderLeft ="3px solid red"
        for (var i = 0;i<box2.length;i++){
            box2[i].style.display= "none"
        }
        box2[this.index].style.display= "block"
    }
}

var cor1 = document.getElementById("cor1");
var cor2 = document.getElementById("cor2");
var butLeft = document.getElementById("butleft");
var butRight = document.getElementById("butright");
var key = 0;
butLeft.onclick=function () {
    key++;
    if (key<0){
        key = 5;
    }
    yd();
};
butLeft.onclick=function () {
    key++;
    if (key>10){
        key = 0;
    }
    yd();
};

function yd() {
    var lif = -key*120;
    cor2.style.left = (lif*2)+"px";
    cor1.style.left = lif+"px";
}

var four=document.getElementById("four");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
four.onmouseover=function(){
    one.style.left=551+"px";
    two.style.left=760+"px";
    three.style.left=969+"px";

}
one.onmouseover=function(){
    one.style.left=211+"px";
    two.style.left=760+"px";
    three.style.left=969+"px";
}
two.onmouseover=function(){
    one.style.left=211+"px";
    two.style.left=421+"px";
    three.style.left=969+"px";
}
three.onmouseover=function(){
    one.style.left=211+"px";
    two.style.left=421+"px";
    three.style.left=630+"px";
}

var twoList5s = document.getElementsByClassName("twoList5s");
var topkey = 0;

setInterval(function () {
    topkey--;
    if(topkey<-3){
        topkey=0;
    }
    var b = topkey*101;
    for (var i = 0;i<twoList5s.length;i++){
        twoList5s[i].style.top = b+"px"
    }
},1500);
