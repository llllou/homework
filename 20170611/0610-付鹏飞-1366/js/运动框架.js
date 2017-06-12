// <script type="text/javascript">
// var oBox1 = document.getElementById("oBox1");
// var oBox2 = document.getElementById("oBox2");
// var oBox3 = document.getElementById("oBox3");
//
// // 调用函数
// animate(oBox1,{"left":500,"top":200,"opacity":1},1600);
// animate(oBox2,{"left":200,"top":800,"opacity":1},2600);
// animate(oBox3,{"left":500,"top":300,"opacity":1},3600);



//定义函数
function animate(elem,targetJSON,time){
    //动画间隔要根据不同浏览器来设置：最小时间间隔为50毫秒
    //找到MSIE代表是IE浏览器 间隔支持是50
    if(window.navigator.userAgent.indexOf("MSIE") == -1){
        var interval = 10;
    }else{
        var interval = 50;  //间隔也可以是5毫秒
    }

    //我们现在要得到现在的状态！当做信号量，这个信号量是所有变化的属性的集合。
    var semaphoreJSON = {};

    //给信号量对象添加属性，添加什么属性，目标对象中有什么属性，这里就添加什么属性。
    //值就是当前的计算样式
    for(var k in targetJSON){
        semaphoreJSON[k] = parseFloat(fetchComStyle(elem,k));
    }

    // 赋值 semaphoreJSON[left] = 得到一个去掉单位的 计算样式的值

    //我们思考一下，我们的动画是5毫秒执行一次，而用户让我time毫秒执行完毕动画
    //也就是说 ，总执行次数
    var maxcount = time/interval;

    var count = 0; //当前执行了多少次，当执行的次数和maxcount相同，说明动画应该结束了。


    //继续深入思考！动画总次数是maxcount次，那么每一次动画变化的步长就有了！
    //所以我们现在再来一个json，放置所有属性的步长
    var stepJSON ={};
    for( var k in targetJSON){
        //把每个targetJSON中的px都去掉
        targetJSON[k] = parseFloat(targetJSON[k]);
        // stepJSON[left]    =    700 - 100 / 150
        stepJSON[k] = (targetJSON[k] - semaphoreJSON[k])/maxcount;
    }

    //至此，三个非常重要的JSON整理完毕。分别是：
    //信号量JSON  :    semaphoreJSON
    //终点JSON    ：   targetJSON
    //步长JSON    :    stepJSON
    //这三个JSON所有的k都一样
    // console.log(semaphoreJSON);
    // console.log(targetJSON);
    // console.log(stepJSON);

    //定时器
    var timer = setInterval(function(){

        //要让所有的信号量发生变化
        for(var k in semaphoreJSON){

            semaphoreJSON[k] += stepJSON[k];

            //动：

            if(k != "opacity"){

                elem.style[k] = semaphoreJSON[k] + "px";
            }else{
                elem.style[k] = semaphoreJSON[k];
                elem.style.filter="alpha(opacity=" + (semaphoreJSON[k]*100)+ ")";
            }
        }

        //计数器，自动停止
        count++;
        if(count == maxcount){

            //次数够了，
            //强行让elem跑到targetJSON那个位置
            for(var k in targetJSON){

                if(k != "opacity"){

                    elem.style[k] = targetJSON[k] + "px";
                }else{
                    elem.style[k] = targetJSON[k];
                    elem.style.filter="alpha(opacity=" + (targetJSON[k]*100)+ ")";
                }
            }
            clearInterval(timer);
        }

    },interval);
}

//得到计算后的样式
function fetchComStyle(obj,property){

    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[property];
    }else{
        return obj.currentStyle[property];
    }

}
// </script>
