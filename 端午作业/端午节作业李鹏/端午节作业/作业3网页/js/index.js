window.onload = function () {
    var navLeftA = document.querySelectorAll('#navLeft li a');
    for (var i = 0;i < navLeftA.length; i++) {
        navLeftA[i].onmouseover = function () {
            for (var j = 0; j < navLeftA.length; j++) {
                navLeftA[j].style.color = "";
            }
            this.style.color = "#ae8438";
        }
    }
    var leftBtn = document.getElementById("leftBtn");
    var rightBtn = document.getElementById("rightBtn");
    var circlesLis = document.getElementById("circles").getElementsByTagName("li");
    var imageList = document.getElementById("imageList");
    var imagesListLis = document.getElementById("imageList").getElementsByTagName("li");
    //信号量
    var img_index = 0;
    //左边按钮监听
    leftBtn.onclick = function () {
        img_index--;
        if (img_index < 0) {
            img_index = imagesListLis.length - 1;
        }
        chengPic();
    }
    //右边按钮监听
    rightBtn.onclick = function () {
        img_index++;
        if (img_index > imagesListLis.length - 1) {
            img_index = 0;
        }
        chengPic();
    }
    //小圆点的监听，要批量添加
    for (var i = 0; i < circlesLis.length; i++) {
        circlesLis[i].index = i;
        circlesLis[i].onmouseover = function () {
            img_index = this.index;
            chengPic();
        }

    }
    /* for (var i = 0; i < circlesLis.length; i++) {
     (function (i) {
     circlesLis[i].onmouseover = function () {
     img_index = i;//改变信号量
     chengPic();//调用业务量
     }
     })(i)
     }
     */

    //具体业务函数，根据当前的信号量的值，来切换图片
    function chengPic() {
        for (var i = 0;i < imagesListLis.length; i++) {
            imagesListLis[i].className = ""
        }
        imagesListLis[img_index].className = "current"
        for (var i = 0;i < circlesLis.length; i++) {
            circlesLis[i].className = ""
        }
        circlesLis[img_index].className = "current"

    }
    var circlesLis2 = document.getElementById("twoCircles").getElementsByTagName("li");
    var lunbo = document.getElementById("lunbo").getElementsByTagName("ul");
    var lunbo_index = 0;
    for (var i = 0; i < circlesLis2.length; i++) {
        circlesLis2[i].index = i;
        circlesLis2[i].onmouseover = function () {
           lunbo_index = this.index;
            for (var j = 0;j < circlesLis2.length; j++) {
                circlesLis2[j].style.background = ""
                lunbo[j].style.display = "none";
            }
          this.style.background = "#ff9800"
            lunbo[lunbo_index].style.display="block"
        }
    }
    var nameInputs = document.getElementById("nameInputs");
    var mainInputs = document.getElementById("mainInputs");
    var Btn = document.getElementById("submit");
    var Popup = document.getElementById("Popup");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var queren = document.getElementById("queren");
    nameInputs.onclick = function() {
        nameInputs.value = ""
    }
    mainInputs.onclick = function() {
        mainInputs.value = ""
    }
    Btn.onclick = function () {
        if(nameInputs.value != "Name" && mainInputs.value != "Email") {
            Btn.disabled = "disabled";
            name.innerText = name.innerText + nameInputs.value;
            email.innerText = email.innerText + mainInputs.value;
            Popup.style.display = "block";
            nameInputs.value = "Name";
            mainInputs.value = "Email";
            queren.onclick = function () {
                Popup.style.display = "none";
                alert("提交成功");
            }
        }else {
            alert("您的输入有误，请重新输入")
        }



    }



}