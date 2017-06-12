var sndListHover = document.getElementsByClassName("sndListHover")
var sndList = document.getElementsByClassName("sndList");
var menuList_left = document.getElementById("menuList_left").getElementsByTagName("dl");
var menuList_right = document.getElementById("menuList_right").getElementsByTagName("li");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

// 二级菜单监听
for(var i = 0; i< sndListHover.length; i ++){
    sndListHover[i].index = i;
    sndListHover[i].onmouseover = function(){
        sndList[this.index].className += " current";
    }
    sndListHover[i].onmouseout = function(){
        for(var j = 0; j < sndList.length; j ++){
            sndList[j].className = "sndList";
        }
    }
}

for(var i = 0; i < menuList_left.length; i ++){
    menuList_left[i].index = i;
    menuList_right[i].index = i;
    menuList_left[i].onmouseover = function(){
        menuList_right[this.index].className = "active";
        chanLine(this.index);
    }

    menuList_right[i].onmouseover = function(){
        menuList_right[this.index].className = "active";
        chanLine(this.index);
    }

    menuList_left[i].onmouseout = function(){
        for(var j = 0; j < menuList_right.length; j ++){
            menuList_right[this.index].className = ""
        }
        reLine(this.index);
    }

    menuList_right[i].onmouseout = function(){
        for(var j = 0; j < menuList_right.length; j ++){
            menuList_right[this.index].className = ""
        }
        reLine(this.index);
    }
}

// 二级菜单的边框改变
function chanLine(index){
    if(index == 0){
        line1.className += " long";
    }else if(index == 1){
        line1.className += " long";
        line2.className += " long";            
    }else{
        line2.className += " long";
        line3.className = "line long";
    }
}

function reLine(index){
    if(index == 0){
        line1.className = "line";
    }else if(index == 1){
        line1.className = "line";
        line2.className = "line";            
    }else{
        line2.className = "line";
        line3.className = "line whiteColor";
    }
}

