/**
 * 运动框架
 */
function animation(elem, target, time, callback){
    var li = elem.getElementsByTagName("li");
    var interval = 10;

    var semaphore = {};
    var step = {};
    var count = 0;
    var maxcount = time / interval * 2;

    for(var k in target){
        semaphore[k] = parseFloat(fetchComStyle(elem, k));
        step[k] = (target[k] - semaphore[k]) / maxcount;
    }

    var timer = setInterval(function(){
        for(var k in semaphore){
            semaphore[k] += step[k];

            if(k != "opacity"){
                elem.style[k] = semaphore[k] + "px";
            }else{
                elem.style[k] = semaphore[k];
                elem.style.filter = "alpha(opacity=" + semaphore[k]*100 + ")"
            }
        }

        count ++;
        if(count == maxcount){
            clearInterval(timer);
            if(callback){
                callback(elem,li);
            }
        }
    },interval)
}

/**
 * 获取元素，兼容处理
 */
function fetchComStyle(elem, style){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem)[style]
    }else{
        return elem.currentStyle[style]
    }
}