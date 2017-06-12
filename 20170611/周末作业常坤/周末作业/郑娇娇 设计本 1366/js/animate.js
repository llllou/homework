 function animate(obj,target,time,cellBack){
            //判断浏览器 决定interval帧数
            // var interval = window.navigator.userAgent.indexOf("MSIE") == -1 ? 5 : 50;
            if(window.navigator.userAgent.indexOf("MSIE") == -1){
                var interval = 5;
            }else{
                var interval = 50;
            }

            //信号量  obj当前要改变计算属性的位置  计数器count
            var count = 0;
            var semaphore = {};

            for(var k in target){
                semaphore[k] = parseFloat(fetchComStyle(obj,k));

            //     semaphore[left] =parseFloat(fetchComStyle(oBox1,left));
            //                     =parseFloat(186px);
            // semaphore[left]  =       186
            }
            //总执行次数
            var maxcount = time/interval;

            //步长  目标值-当前位置  / 最大次数
            var step = {};

            for(var k in target){
                //捎带脚，把target里面单位去掉
                target[k] = parseFloat(target[k]);
                //步长
                step[k] = (target[k]-semaphore[k]) / maxcount;

            }

            //定时器 运动
            var timer = setInterval(function(){

                //要让所有的信号量发生变化
                for( var k in semaphore){
                    semaphore[k] += step[k];

                    //透明度问题兼容处理
                    if( k != "opacity"){
                        obj.style[k] = semaphore[k] + "px";
                    }else{
                        obj.style[k] = semaphore[k];
                        obj.style.filter="alpha(opacity=" +(semaphore[k]*100)+")";
                    }
                }

                //用计数器 自动停止运动
                count++;
                if(count == maxcount){

                    //我们强行让obj 跑到target 指定位置
                    for( var k in target){

                    //透明度问题兼容处理
                    if( k != "opacity"){
                        obj.style[k] = target[k] + "px";
                    }else{
                        obj.style[k] = target[k];
                        obj.style.filter="alpha(opacity=" +(target[k]*100)+")";
                    }
                }

                    //清除定时器
                    clearInterval(timer);
                    cellBack&& cellBack();
                }


            },interval);





        }

        function fetchComStyle(obj,property){
        //能力检测
            if(window.getComputedStyle){
                return window.getComputedStyle(obj)[property];
            }else{
                return obj.currentStyle[property];
            }

        }