window.onload = function(){
    var imagesList = document.getElementById("imagesList").getElementsByTagName("li");
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var circle = document.getElementById("circle").getElementsByTagName("li");
    
    // 信号量
    var index = 0;

    // 上一张图片
    prevBtn.onclick = function(){
        index --;
        if(index < 0){
            index = 4;
        }
        chanImg();
    }

    // 下一张图片
    nextBtn.onclick = function(){
        index ++;
        if(index > 4){
            index = 0;
        }
        chanImg();
    }

    // 给每个小圆添加点击事件
    for(var i = 0; i < circle.length; i ++){
        (function(i){
            circle[i].onclick = function(){
                index  = i;
                chanImg();
            }
        })(i);
    }    

    // 改变图片
    function chanImg(){
        // 清空class（默认不显示）
        for(var i = 0; i < imagesList.length; i ++){
            imagesList[i].className = "";
        }
        // 将要显示的图片添加显示class
        imagesList[index].className = "active";

        // 清空class(默认灰色)
        for(var j = 0; j < circle.length; j ++){
            circle[j].className = "";
        }
        // 将对应的小圆变红
        circle[index].className = "active";
    }

    //
}