/**
 * Created by Administrator on 2017/6/2.
 */
//定义函数
function animate(elem,targetJSON,time){
    if(window.navigator.userAgent.indexOf("MSIE") == -1){
        var interval = 10;
    }else{
        var interval = 50;
    }

    //强行给我们动画的元素增加一个isanimate属性，是否在运动
    //上锁
    // obj.isanimate = true;
    var semaphoreJSON = {};
    for(var k in targetJSON){
        semaphoreJSON[k] = parseFloat(fetchComStyle(elem,k));
    }
    var maxcount = time/interval;
    var count = 0;
    var stepJSON ={};
    for( var k in targetJSON){
        targetJSON[k] = parseFloat(targetJSON[k]);
        stepJSON[k] = (targetJSON[k] - semaphoreJSON[k])/maxcount;
    }
    var timer = setInterval(function(){

        for(var k in semaphoreJSON){
            semaphoreJSON[k] += stepJSON[k];
            if(k != "opacity"){
                elem.style[k] = semaphoreJSON[k] + "px";
            }else{
                elem.style[k] = semaphoreJSON[k];
                elem.style.filter="alpha(opacity=" + (semaphoreJSON[k]*100)+ ")";
            }
        }
        count++;
        if(count == maxcount){
            for(var k in targetJSON){

                if(k != "opacity"){

                    elem.style[k] = targetJSON[k] + "px";
                }else{
                    elem.style[k] = targetJSON[k];
                    elem.style.filter="alpha(opacity=" + (targetJSON[k]*100)+ ")";
                }
            }
            clearInterval(timer);
            obj.isanimate = false;
            cellBack;
            // cellBack.call(obj);


        }
    },interval);
}

function fetchComStyle(obj,property){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[property];
    }else{
        return obj.currentStyle[property];
    }
}


var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
img4.onmouseover = function(){
    animate(img4,{"left":633},200);
    animate(img3,{"left":422},200);
    animate(img2,{"left":211},200);
}
img3.onmouseover = function(){
    animate(img4,{"left":972},200);
    animate(img3,{"left":422},200);
    animate(img2,{"left":211},200);
}
img2.onmouseover = function(){
    animate(img4,{"left":972},200);
    animate(img3,{"left":761},200);
    animate(img2,{"left":211},200);
}
img1.onmouseover = function(){
    animate(img4,{"left":972},200);
    animate(img3,{"left":761},200);
    animate(img2,{"left":550},200);
}
