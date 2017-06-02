var tuoList =document.getElementById("tuoList");
var list =document.getElementById("list");
var open = 0;
tuoList.onclick=function () {
    open = open == 0? 1:0;
    open = open == 0? "":"block";
    list.style.display=open;
}

var imgs =document.getElementById("imgs").getElementsByTagName("a");
var leftSp =document.getElementById("leftSp");
var rightSp =document.getElementById("rightSp");
var rub = document.getElementById("rub").getElementsByTagName("li");
var show = 0;
leftSp.onclick=function () {
    show--;
    if (show < 0){
        show = 4;
    }
    char();
};
rightSp.onclick=function () {
    show++;
    if (show > 4){
        show = 0;
    }
    char();
};

for (var i = 0;i< rub.length;i++){
    (function (i) {
        rub[i].onmouseover=function () {
            show = i;
            char();
        }
    })(i)
};

function char() {
    for(var i = 0;i < imgs.length; i ++){
        rub[i].className="";
        imgs[i].className="";
    }
    imgs[show].className="show";
    rub[show].className="show";
};



var feedBacks =document.getElementById("feedback").getElementsByTagName("li");
var ocrs = document.getElementById("ocrs").getElementsByTagName("li");
var op = 0;


for (var i = 0;i< ocrs.length;i++){
    (function (i) {
        ocrs[i].onmouseover=function () {
            op = i;
            chars();
        }
    })(i)
};

function chars() {
    for(var i = 0;i < feedBacks.length; i ++){
        feedBacks[i].className="";
        ocrs[i].className="";
    }
    feedBacks[op].className="show";
    ocrs[op].className="show";
};
