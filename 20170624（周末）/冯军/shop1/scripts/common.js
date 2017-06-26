// var nav = document.createElement("nav");
// document.body.appendChild(nav);
var oNav = document.getElementsByTagName("nav")[0];
$.ajax({
    "url": 'http://h6.duchengjiu.top/shop/api_cat.php',
    "type": "GET",
    "dataType": "json",
    "success": function (response) {
        //处理返回的数据
        // var oNavLiTemplateStr = document.getElementById('nav-li-template').innerHTML;
        console.log(response);


        var oTop = document.createElement("div");
        oTop.className = "nav-top";
        oNav.appendChild(oTop);

        for (var i = 0; i < response.data.length; i++) {
            var obj = response.data[i];

            var oA = document.createElement("a");
            oA.className = "nav-a";

            oA.innerText = response.data[i].cat_name;
            oA.href = "index.html?cat_id=" + obj.cat_id;
            oTop.appendChild(oA);
            // obj.cat_name = '(' + obj.cat_name + ')';
            // nav.innerHTML += $.compile(oNavLiTemplateStr, obj);

        }
    },
    "error": function (message) {
        //
//            console.log(message);
    }
});

var searchBtn = document.getElementById('search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', function () {
        console.log('click');
        //获得关键字
        var searchText = document.getElementById('search-text').value;
        console.log(searchText);

        location.href = 'search.html?search_text=' + searchText;
    }

    );
}
var search =document.getElementsByTagName("div")[0];
search.onkeydown=function (event) {
    if (event.keyCode==13){
        var searchText = document.getElementById('search-text').value;
        location.href = 'search.html?search_text=' + searchText;
    }
};











