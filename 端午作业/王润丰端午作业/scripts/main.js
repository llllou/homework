window.onload = function(){
    // 二级菜单
    var pages = document.getElementById("pages");
    var subPages = pages.getElementsByTagName("ul")[0];
    
    var count = 0;
    pages.onclick = function(){
        subPages.className = count == 0 ? "visible" : "";
        count = count == 0 ? 1 : 0;
    }

    // 轮播图
    var banner = document.getElementById("banner").getElementsByTagName("div")[0].getElementsByTagName("img");
    var prevBtn = document.getElementById("banner").getElementsByTagName("div")[1].getElementsByTagName("img")[0];
    var nextBtn = document.getElementById("banner").getElementsByTagName("div")[1].getElementsByTagName("img")[1];
    var midBtn = document.getElementById("banner").getElementsByTagName("div")[2].getElementsByTagName("em");

    // 信号量
    var caro_idx = 0;
    prevBtn.onclick = function(){
        caro_idx > 0 ? caro_idx -- : caro_idx = 4;
        chanImg();
        console.log(caro_idx);
    }

    nextBtn.onclick = function(){
        caro_idx < 4 ? caro_idx ++ : caro_idx = 0;
        chanImg();
        console.log(caro_idx);
    }

    for(var i = 0; i < midBtn.length; i ++){
        (function(i){
            midBtn[i].onclick = function(){
                caro_idx = i;
                chanImg();
            }
        })(i);
    }

    // 改变图片
    function chanImg(){
        for(var i = 0; i < banner.length; i ++){
            banner[i].className = "";
        }
        banner[caro_idx].className = "active";

        for(var i = 0; i < midBtn.length; i ++){
            midBtn[i].className = "";
        }
        midBtn[caro_idx].className = "active";
    }

    // feedBack中的内容
    var feedBack = document.getElementById("feedBack").getElementsByTagName("ul");
    var chanList = document.getElementById("chanList").getElementsByTagName("em");

    // 信号量
    var feed_idx = 0;
    var i = 0;
    do{
        chanList[i].index = i;
        chanList[i].onclick = function(){
            for(var j = 0; j < chanList.length; j ++){
                feedBack[j].className = "";
                chanList[j].className = "";
            }
            feedBack[this.index].className = "active";
            chanList[this.index].className = "active";
        }
        i ++;
    }while(i < 2);

    // Subscribe的内容
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subsBtn = document.getElementById("subsBtn");
    var info = document.getElementById("info");
    var infoName = info.getElementsByTagName("span")[1];
    var infoEmail = info.getElementsByTagName("span")[3];
    var infoClose = info.getElementsByTagName("em")[0];
    var infoBg = document.getElementById("blackBg");

    subsBtn.onclick = function(){
        if(name.value == "" || email.value == ""){
            alert("name or email can not be null");
        }else{
            info.style.display = "block";
            infoBg.style.display = "block";
            infoName.innerHTML = name.value;
            infoEmail.innerHTML = email.value;
        }
    }

    infoClose.onclick = function(){
        info.style.display = "none";
        infoBg.style.display = "none";
        name.value = "";
        email.value = "";
    }
}