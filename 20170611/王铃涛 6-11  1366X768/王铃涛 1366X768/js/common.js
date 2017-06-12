/**
 * Created by Administrator on 2017/6/6.
 */

/**
 *
 * @param dom id,className,tagName,name
 * @returns {*}
 */
function $(dom){
    if(document.getElementById(dom)){
        return document.getElementById(dom);
    }else if(getByClassName(dom).length != 0){
        return document.getElementsByClassName(dom)[0];
    }else if(document.getElementsByTagName(dom).length != 0){
        return document.getElementsByTagName(dom)[0];
    }else if(document.getElementsByName(dom).length != 0){
        return document.getElementsByName(dom)[0];
    }
}


/**
 *
 * @param obj 运动对象
 * @param targetJSON  {"样式":目标值}
 * @param time  所需时间
 * @param callback 回调函数
 */
function animate(obj,targetJSON,time,callback){
    //判断是否是IE
    if(window.navigator.userAgent.indexOf('MSIE') == -1){
        var interval=50;
    }else{
        var interval=10;
    }
    var semaphore={};
    for(var k in targetJSON){
        semaphore[k]=parseFloat(fetchColumn(obj,k));
    }
    //fetchColumn函数获取元素的样式属性的初始值
    /**
     *
     * @param obj 所属样式的对象
     * @param property 样式
     * @returns {*} 返回样式的初始值
     */
    function fetchColumn(obj,property){
        if(window.getComputedStyle){
            return window.getComputedStyle(obj)[property];
        }else{
            return obj.currentStyle[property];
        }
    }
    var maxCount=time/interval;
    var stepJSON={};
    for(var k in targetJSON){
        stepJSON[k]=parseFloat((targetJSON[k]-semaphore[k])/maxCount);
    }
    var count=0;
    obj.isanimate=true;
    var timer=setInterval(function(){
        for(var k in targetJSON){
            semaphore[k]+=stepJSON[k];
            if(k != 'opacity'){
                obj.style[k]=semaphore[k]+'px';
            }else{
                obj.style[k]=semaphore[k];
                obj.style.filter='alpha(opacity='+ semaphore[k] +')';
            }
        }
        count++;
        if(count == maxCount){
            for(var k in targetJSON){
                if(k != 'opacity'){
                    obj.style[k]=targetJSON[k]+'px';
                }else{
                    obj.style[k]=targetJSON[k];
                    obj.style.filter='alpha(opacity='+ semaphore[k] +')';
                }
            }
            clearInterval(timer);
            obj.isanimate=false;
            callback&&callback();
        }
    },interval);
}

/**
 *
 * @param className 获取的类名
 * @returns {*} 返回获取的对象
 */
function getByClassName(className){
    if(document.getElementsByClassName){
        return document.getElementsByClassName(className);
    }else{
        var arr=[];
        var nodes=document.getElementsByTagName('*');
        for(var i=0;i<nodes.length;i++){
            var classArr=nodes[i].className.split(' ');
            for(var j=0;j<classArr.length;j++){
                if(classArr[j] == className){
                    arr.push(nodes[i]);
                }
            }
        }
        return arr;
    }
}
/**
 *
 * @param obj 元素对象
 * @param className 类名
 */
function addClass(obj,className) {
    var classArr=obj.className.split(' ');
    classArr.push(className);
    var newClass=classArr.join(' ');
    obj.className=newClass;
}

/**
 *
 * @param obj 元素对象
 * @param className 类名
 */
function removeClass(obj,className){
    var length=className.length;
    var index=obj.className.indexOf(className);
    obj.className.

    console.log(classArr);
    var newClass=classArr.join(' ');
    obj.className=newClass;
}

/**
 * @获取元素中的子节点
 * @param obj  元素对象
 * @param num 下标
 * @returns {Array} obj下的所有子元素或第num个子元素
 */
function getChildNodes(obj,num){
    var childs=obj.childNodes;
    var eleNodes=[];
    for(var i=0;i<childs.length;i++){
        if(childs[i].nodeType==1){
            eleNodes.push(childs[i]);
        }
    }
    return num? eleNodes[num]:eleNodes;
}
/**
 * 获取当前元素之前的所有兄弟节点
 * @param obj
 */
function getPrevSiblings(obj){
    var siblings=[];
    var sibling=obj;
    while(sibling=sibling.previousSibling){
        if(sibling.nodeType ==1){
            siblings.push(sibling);
        }
    }
    return siblings;
}

/**
 *
 * @param obj 元素对象
 * @param event
 * @param fn
 */
function addEvent(obj,event,fn){
    if(obj.addEventListener){
        console.log('gao');
        obj.addEventListener(event,fn,false);
    }else if(obj.attachEvent){
        console.log('di');
        obj.attachEvent('on'+event,function(){
            fn.call(obj);
        });
    }else{
        obj['on'+event]=fn;
    }
}

