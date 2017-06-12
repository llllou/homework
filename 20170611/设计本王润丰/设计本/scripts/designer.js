var designer = [
    {
        "name":"方建星"
    },
]

var carousel = document.getElementById("carousel");
var recommend = document.getElementById("recommend");
var newest = document.getElementById("newest");
var bigshot = document.getElementById("bigshot");
var wellknown = document.getElementById("wellknown");
var newestTop = newest.getElementsByTagName("ul")[0];
var newestBottom = newest.getElementsByTagName("ul")[1];
var bigshotTop = bigshot.getElementsByTagName("ul")[0];
var bigshotBottom = bigshot.getElementsByTagName("ul")[1];
var wellknownTop = wellknown.getElementsByTagName("ul")[0];
var wellknownBottom = wellknown.getElementsByTagName("ul")[1];
var recommendTop = recommend.getElementsByTagName("ul")[0];
var recommendBottom = recommend.getElementsByTagName("ul")[1];
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var menu = document.getElementById("menu").getElementsByTagName("li");
var designer = document.getElementById("designer").getElementsByClassName("content");

recommendTop.innerHTML += "<li class='margleft'><a href='#'><img src='./images/recom_" + 0 + ".jpg'></a></li>"; 
newestTop.innerHTML += "<li class='margleft'><a href='#'><img src='./images/newest_" + 0 + ".jpg'></a></li>"; 
bigshotTop.innerHTML += "<li class='margleft'><a href='#'><img src='./images/bigshot_" + 0 + ".jpg'></a></li>"; 
wellknownTop.innerHTML += "<li class='margleft'><a href='#'><img src='./images/wellknown_" + 0 + ".jpg'></a></li>";

wellknownBottom.innerHTML += "<li class='margleft'><a href='#'><img src='./images/wellknown_0" + 0 + ".jpg'></a></li>"; 

for(var i = 1; i < 4; i ++){
    recommendTop.innerHTML += "<li><a href='#'><img src='./images/recom_" + i + ".jpg'></a></li>"; 
    newestTop.innerHTML += "<li><a href='#'><img src='./images/newest_" + i + ".jpg'></a></li>"; 
    bigshotTop.innerHTML += "<li><a href='#'><img src='./images/bigshot_" + i + ".jpg'></a></li>"; 
    wellknownTop.innerHTML += "<li><a href='#'><img src='./images/wellknown_" + i + ".jpg'></a></li>"; 
    wellknownBottom.innerHTML += "<li><a href='#'><img src='./images/wellknown_0" + i + ".jpg'></a></li>";
}
recommendTop.innerHTML += "<li><a href='#'><img src='./images/recom_" + 4 + ".jpg'></a></li>";
newestTop.innerHTML += "<li><a href='#'><img src='./images/newest_" + 4 + ".jpg'></a></li>"; 
bigshotTop.innerHTML += "<li><a href='#'><img src='./images/bigshot_" + 4 + ".jpg'></a></li>"; 
wellknownTop.innerHTML += "<li><a href='#'><img src='./images/wellknown_" + 4 + ".jpg'></a></li>"; 
wellknownBottom.innerHTML += "<li><a href='#'><img src='./images/wellknown_0" + 4 + ".jpg'></a></li>"; 

var topIndexLeft = i;
var topIndexRight = 30;

recommendBottom.innerHTML += "<li class='margleft'><a href='#'><img src='./images/recom_0" + 0 + ".jpg'></a></li>"; 
newestBottom.innerHTML += "<li class='margleft'><a href='#'><img src='./images/newest_0" + 0 + ".jpg'></a></li>"; 
bigshotBottom.innerHTML += "<li class='margleft'><a href='#'><img src='./images/bigshot_0" + 0 + ".jpg'></a></li>"; 
for(var i = 1; i < 9; i ++){
    recommendBottom.innerHTML += "<li><a href='#'><img src='./images/recom_0" + i + ".jpg'></a></li>"; 
    newestBottom.innerHTML += "<li><a href='#'><img src='./images/newest_0" + i + ".jpg'></a></li>"; 
    bigshotBottom.innerHTML += "<li><a href='#'><img src='./images/bigshot_0" + i + ".jpg'></a></li>";  
}
recommendBottom.innerHTML += "<li><a href='#'><img src='./images/recom_0" + 9 + ".jpg'></a></li>"; 
newestBottom.innerHTML += "<li><a href='#'><img src='./images/newest_0" + 9 + ".jpg'></a></li>"; 
bigshotBottom.innerHTML += "<li><a href='#'><img src='./images/bigshot_0" + 9 + ".jpg'></a></li>"; 
var bottomIndexLeft = i;
var bottomIndexRight = 13;
var lock = !![];

/**
 * 按钮点击事件
 */
prevBtn.onclick = function(){
    movement(recommendTop, recommendBottom, -204, -204,"left", 200);
}

nextBtn.onclick = function(){
    movement(recommendTop, recommendBottom, 204, 224,"right", 200);
}

for(var i = 0; i < menu.length; i ++){
    menu[i].index = i;
    menu[i].onmouseover = function(){
        for(var j = 0; j < menu.length; j ++){
            menu[j].className = "";
            designer[j].style.display = "none";
        }
        menu[this.index].className = "active";
        designer[this.index].style.display = "block";
        console.log(this.index);
    }
}

/**
 * recommend的运动
 */
function movement(elem1, elem2, distance1, distance2, direction,time){
    if(!lock) return;
    lock = ![];

    var li1 = elem1.getElementsByTagName("li");
    var li2 = elem2.getElementsByTagName("li");

    elem1.style = "";
    elem2.style = "";
    if(direction == "right"){
        elem2.style.right = "122px";
        if(topIndexLeft == 29) topIndexLeft = 0;
        if(bottomIndexLeft == 12) bottomIndexLeft = 0;
        var checkDirect = 1;
        elem1.innerHTML += "<li><a href='#'><img src='./images/recom_" + (++ topIndexLeft) + ".jpg'></a></li>"; 
        elem2.innerHTML += "<li><a href='#'><img src='./images/recom_0" + (++ bottomIndexLeft) + ".jpg'></a></li>"; 
        animation(elem1, {"right" : distance1*checkDirect}, time, deleteLiLeft);
        animation(elem2, {"right" : distance2*checkDirect}, time, deleteLiLeft);
    }else{
        elem2.style.left = "102px";
        if(topIndexRight == 0) topIndexRight = 29;
        if(bottomIndexRight == 0) bottomIndexRight = 12;
        var checkDirect = -1; 
        elem1.innerHTML = "<li><a href='#'><img src='./images/recom_" + (-- topIndexRight) + ".jpg'></a></li>" + elem1.innerHTML;
        elem2.innerHTML = "<li><a href='#'><img src='./images/recom_0" + (-- bottomIndexRight) + ".jpg'></a></li>" + elem2.innerHTML;
        li1[1].className = "";
        li2[1].className = "";
        animation(elem1, {"left" : distance1*checkDirect}, time, deleteLiRight);
        animation(elem2, {"left" : distance2*checkDirect}, time, deleteLiRight);
    }
    setTimeout(function(){lock = !![]},400);
    function deleteLiLeft(elem,li){
        elem.removeChild(li[0]);
        li[0].className = "margleft";
        elem.style = elem == recommendTop ? "":"left: 102px";
    }
    function deleteLiRight(elem,li){
        li[1].className = "";
        elem == recommendTop ? elem.removeChild(li[5]):elem.removeChild(li[10]);
        li[0].className = "margleft";
        elem.style = elem == recommendTop ? "":"left: 102px";
    }
}

