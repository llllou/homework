window.onload = function(){

    var nav = document.getElementById("nav").getElementsByTagName("li");
    var content = document.getElementById("content").getElementsByTagName("ul");

    // 信号量
    var index = 0;

    // 导航的鼠标悬浮效果
    for(var i = 0; i < nav.length; i ++){
        (function(i){
            nav[i].onmousemove = function(){
                    index = i;

                    // 延迟变效果
                    setTimeout(chanNav(),500);
            }
        })(i);
    }

    // 改变的效果
    function chanNav(){
        return function(){
            // 清除class效果
            for(var j = 0; j < nav.length; j ++){
                nav[j].className = "";
                content[j].className = "";
            }

            // 给鼠标悬浮到的对象添加class效果
            nav[index].className = "active";
            content[index].className = "active";

            // 调用二级菜单的对应变动
            // chanCont();
        }
    }

}