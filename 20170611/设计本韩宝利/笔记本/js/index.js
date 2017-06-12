
window.onload = function () {
    var oUl = document.querySelector(".banner_slider");
    var sLi = document.querySelectorAll(".banner_slider li");
    var xydList = document.querySelectorAll(".slider_mark li");
    var index = 0;
    var timer;
    interV();
    oUl.onmouseover = function () {
        clearInterval(timer);
    }
    oUl.onmouseout = function () {
        interV();
    }

    function interV() {
        timer = setInterval(function(){
            index--;
            if (index < 0) {
                index = sLi.length - 1;
            }
            chengPic();
        },2000);
    }
    function chengPic() {
        for(var i = 0;i < sLi.length; i++) {
            sLi[i].style.display = "none";
        }
        sLi[index].style.display = "block"

    }
    //小圆点的监听，要批量添加
    for (var i = 0; i < xydList.length; i++) {
        xydList[i].index = i;
        xydList[i].onclick = function () {
            index = this.index;
            for (var j = 0;j < xydList.length; j++) {
                xydList[j].style.background = "";
            }
            xydList[index].style.background = "orange";
            chengPic();
        }
    }
    var liList1 = document.querySelectorAll(".tab-name li");
    var twolist = document.querySelectorAll("#designers>div");
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var top = document.querySelector(".designers-list-top");
    var bottom = document.querySelector(".designers-list-bottom");
    for (var i = 0;i < liList1.length; i++) {
        liList1[i].index = i;
        liList1[i].onmouseover = function () {
            for (var j = 0;j < liList1.length; j++) {
                liList1[j].className = "";
                twolist[j].style.display = "none";
            }
            this.className = "currr"
            twolist[this.index].style.display = "block";
        }
    }
    var index = 0;
    var index2 = 0
    top.innerHTML += top.innerHTML;
    bottom.innerHTML += bottom.innerHTML;
    prev.onclick = function () {
        index += 204;
        index2 += 102;
        top.style.transition= "all 1s";
        if (index > 0) {
            index = -1632;
        }
        if (index2 > 0) {
            index2 = -918;
        }
        top.style.left = index + "px";
        bottom.style.left = index2 + "px"
    }
    next.onclick = function () {
        index += -204;
        index2 += -102;
        if (index < -1632) {
            index = 0;
        }
        if (index2 < -918) {
            index2 = 0;
        }
        top.style.left = index + "px";
        bottom.style.left = index2 + "px";
    }
    var sdiv = document.getElementById("index").getElementsByTagName("div");
    sdiv[1].onmouseover = function () {
        sdiv[1].style.left = "210px";
        sdiv[1].style.transition = "all 1s";
        sdiv[2].style.left = "";
        sdiv[3].style.left = "";
    }
    sdiv[2].onmouseover = function () {
        sdiv[1].style.left = "210px";
        sdiv[1].style.transition = "all 1s";
        sdiv[2].style.left = "420px";
        sdiv[2].style.transition = "all 1s";
        sdiv[3].style.left = "";
    }
    sdiv[3].onmouseover = function () {
        sdiv[1].style.left = "210px";
        sdiv[1].style.transition = "all 1s";
        sdiv[2].style.left = "420px";
        sdiv[2].style.transition = "all 1s";
        sdiv[3].style.left = "630px";
        sdiv[3].style.transition = "all 1s";
    }
    sdiv[0].onmouseover = function () {
        sdiv[1].style.left = "";
        sdiv[1].style.transition = "all 1s";
        sdiv[2].style.left = "";
        sdiv[2].style.transition = "all 1s";
        sdiv[3].style.left = "";
        sdiv[3].style.transition = "all 1s";
    }

    var ulList = document.querySelectorAll(".scroll--content");
    var ulS = document.getElementsByClassName("list");
    var liList = document.querySelectorAll("#list1 .news_list");
    moveTop();
    var newTop = 0;
    var timer2;
    for (var i = 0;i < ulS.length;i++) {
        ulS[i].innerHTML += ulS[i].innerHTML;
    }
    function moveTop() {
        clearInterval(timer2);
        timer2 = setInterval(function(){
            newTop -= 101;
            if (newTop == -909) {
                newTop = 0;
            }
            for (var i = 0 ;i < ulList.length; i++) {

                ulList[i].style.top = newTop + "px"
                ulList[i].style.transition = "all 1.5s"
            }
        },1500)

    }





}

