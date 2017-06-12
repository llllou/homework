var nccd = document.getElementById("nccd");
var nccd1 = document.getElementById("nccd-1");
var nccd2 = document.getElementById("nccd-2");
var nccd22 = nccd2.getElementsByTagName("p");
var nccd11 = document.getElementById("nccd-1-1");

nccd1.onmouseover = function () {
    nccd2.style.display = "block";
};
nccd2.onmouseover = function () {
    nccd2.style.display = "block";
};
nccd1.onmouseout = function () {
    nccd2.style.display = "none";
};
nccd2.onmouseout = function () {
    nccd2.style.display = "none";
};

for (var i = 0; i < nccd22.length; i++) {
    nccd22[i].index = i;
    nccd22[i].onclick = function () {
//                var nccdreplace = "";
        var nccdreplace = nccd11.innerHTML;
        nccd11.innerHTML = nccd22[this.index].innerHTML;
        nccd22[this.index].innerHTML = nccdreplace;
    }
}

var Photo = document.getElementById("photo");
var wrapLia = document.getElementsByClassName("wrap-li-11");
var wrapLit1 = document.getElementsByClassName("wrap-li-t1");
for (var j = 0; j < wrapLia.length; j++) {
    wrapLia[j].index = j;
    wrapLia[j].onmouseover = function () {
        wrapLit1[this.index].style.display = "block";
    }
    wrapLia[j].onmouseout = function () {
        wrapLit1[this.index].style.display = "none";
    }
}


//图片
var oPhoto = document.getElementById("photo-ul").getElementsByTagName("li");
//小圆点
var circlesLi = document.getElementById("circles").getElementsByTagName("li");

var imgLength = oPhoto.length;

var idx = 0;
var interval = 2000;
//自动轮播
var timer = setInterval(lunbo1, interval);
//鼠标移入停止
oPhoto.onmouseover = function () {
    clearInterval(timer);
};
//鼠标移出继续轮播
oPhoto.onmouseout = function () {
    timer = setInterval(lunbo1, interval);
};
for (var t = 0; t < imgLength; t++) {
    //先编号
    circlesLi[t].index = t;
    circlesLi[t].onclick = function () {
        //函数节流
        if (oPhoto[idx].isanimate) return;
        animate(oPhoto[idx], {"opacity": 0}, 1000);
        idx = this.index;
        animate(oPhoto[idx], {"opacity": 1}, 1000);
        changeCircle();
    }
}


function lunbo1() {
    // 函数节流
    if (oPhoto[idx].isanimate) return;

    // 当前图片运动改变透明度，淡出
    animate(oPhoto[idx], {"opacity": 0}, 1000);

    // 改变信号量
    idx++;
    if (idx > imgLength - 1) {
        idx = 0;
    }
    // 当前图片运动改变透明度，淡入
    animate(oPhoto[idx], {"opacity": 1}, 1000);

    changeCircle();
}

function changeCircle() {
    //排他
    for (var i = 0; i < circlesLi.length; i++) {
        circlesLi[i].className = '';
    }
    circlesLi[idx].className = "cur";
}


var secLeft = document.getElementById("sec-left");
var oLeftli = secLeft.getElementsByTagName("li");
var section = document.getElementById("section");
var oDiv = document.getElementsByClassName("sec-right");


//设计师
for (var i = 0; i < oLeftli.length; i++) {
    oLeftli[i].index = i;
    oLeftli[i].onclick = function () {
        for (var j = 0; j < oLeftli.length; j++) {
            oLeftli[j].className = "";
            oDiv[j].style.display = "none";
        }
        this.className = "sec-left-2";
        oDiv[this.index].style.display = "block";
    }
}
var oLspan1 = document.getElementById("list-span1");
var oLspan2 = document.getElementById("list-span2");

var oSecBigp = document.getElementById("sec-big1-ul1");
var images1 = oSecBigp.getElementsByTagName("li");

var oSecBigs = document.getElementById("sec-big1-ul2");
var images2 = oSecBigs.getElementsByTagName("li");

oSecBigp.innerHTML += oSecBigp.innerHTML;
var image1Length = images1.length;
var zfd = images1[image1Length / 2].offsetLeft;


oSecBigs.innerHTML += oSecBigs.innerHTML;
var image2Length = images2.length;
var zfd2 = images2[image2Length / 2].offsetLeft;

var z = 0;
var x = 0;
oLspan1.onclick = function () {
    z -= 200;
    x -= 102;
    oSecBigp.style.transition = "left 0.5s,right,0.5s";
    oSecBigs.style.transition = "left 0.5s,right,0.5s";
    fun1();
};
oLspan2.onclick = function () {
    z += 200;
    x += 102;
    oSecBigp.style.transition = "left 0.5s,right,0.5s";
    oSecBigs.style.transition = "left 0.5s,right,0.5s";
    fun1();
};
function fun1() {
    if (z < -zfd) {
        oSecBigp.style.transition = "left 0s,right 0s";
        z = 0;
    }
    if (z > 0) {
        oSecBigp.style.transition = "left 0s,right 0s";
        z = -zfd;
    }
    if (x < -zfd2) {
        oSecBigs.style.transition = "left 0s,right 0s";
        x = 0;
    }
    if (x > 0) {
        oSecBigs.style.transition = "left 0s,right 0s";
        x = -zfd;
    }
    oSecBigp.style.left = z + "px";
    oSecBigs.style.left = x + "px";
}

//品牌
var oDiv1 = document.getElementById("oDiv");
var images = oDiv1.getElementsByTagName("div");

images[0].onmouseover = function () {
    images[1].style.left = 550 + "px";
    images[2].style.left = 760 + "px";
    images[3].style.left = 970 + "px";
};
images[1].onmouseover = function () {
    images[1].style.left = 210 + "px";
    images[2].style.left = 760 + "px";
    images[3].style.left = 970 + "px";
};
images[2].onmouseover = function () {
    images[1].style.left = 210 + "px";
    images[2].style.left = 420 + "px";
    images[3].style.left = 970 + "px";
};
images[3].onmouseover = function () {
    images[1].style.left = 210 + "px";
    images[2].style.left = 420 + "px";
    images[3].style.left = 630 + "px";
};

//家装图库
var oDesTop = document.getElementsByClassName("designers-top-p1");
var oPicUl = document.getElementsByClassName("pic-ul");

for (var p = 0; p < oDesTop.length; p++) {
    oDesTop[p].index = p;
    oDesTop[p].onclick = function () {
        for (var j = 0; j < oDesTop.length; j++) {
            oDesTop[j].className = "";
            oPicUl[j].style.display = "none";
        }
        this.className = "designers-top-p2";
        oPicUl[this.index].style.display = "block";
    }

}
var oAnNews = document.getElementsByClassName("answer-news");
var oAnMo=document.getElementById("answer-move");
var oAnMo2=document.getElementById("answer-move2");
var oAnMo3=document.getElementById("answer-move3");

qaq();
oAnMo.innerHTML += oAnMo.innerHTML;
oAnMo2.innerHTML += oAnMo2.innerHTML;
oAnMo3.innerHTML += oAnMo3.innerHTML;
var oAnNewsLength = oAnNews.length;
var zfd1 = oAnNews[oAnNewsLength / 2].offsetTop;
var aaa;
var k = 0;
var u = -5;

function qaq() {
    clearInterval(aaa);
    aaa = setInterval(function () {
        k += u;

        if (k < -zfd1) {
            k = 0;
        }
        if (k > 0) {
            k = -zfd1;
        }
        oAnMo.style.top = k + "px";
        oAnMo2.style.top = k + "px";
        oAnMo3.style.top = k + "px";
    }, 100);
}

