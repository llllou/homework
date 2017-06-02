var navLis=document.getElementById("nav").getElementsByTagName("li");
var ListLis=document.getElementById("list").getElementsByTagName("li");

var tstr=292;
for(var i=0;i<ListLis.length;i++){
    ListLis[i].style.left=tstr+"px";
    tstr+=160;
}
var str=0;
for(var j=0;j<navLis.length;j++){
    navLis[j].index=j;
    navLis[j].onmouseover=function () {
        str=this.index;
        chang();
    }
    navLis[j].onmouseout=function () {
        str=this.index;
        ListLis[str].style.display="none";
    }
    for(var i=0;i<ListLis.length;i++){
        (function(i) {
            ListLis[i].onmouseover=function () {
                ListLis[i].style.display="block";
            }
        })(i)
        ListLis[i].index=i;
        ListLis[i].onmouseout=function () {
            str=this.index
            ListLis[str].style.display="none";
        }
    }
}





function chang() {
    for(var i=0;i<navLis.length;i++){
        navLis[i].className="";
    }
    navLis[str].className="current";

    for(var i=0;i<ListLis.length;i++){
        ListLis[i].style.display="none";
    }
    ListLis[str].style.display="block";
}
