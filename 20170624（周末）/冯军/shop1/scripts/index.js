var cat_id = $.getQueryString('cat_id');
var ul = document.createElement("ul");
document.body.appendChild(ul);
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_goods.php?cat_id=" + cat_id,
//        "url": 'http://lc.shudong.wang/api_goods.php',
    "type": "GET",
    "dataType": "json",
    "success": function (response) {
//处理返回的数据
           console.log(response);
        if (response.data.length === 0) {
            var oH1 = document.createElement('h1');
            oH1.innerText = "当前分类下面没有商品";
            ul.appendChild(oH1);
            return;
        }
        for (var i = 0; i < response.data.length; i++) {

            var li = document.createElement("li");
            ul.appendChild(li);
            li.innerText = response.data[i].goods_name;




            var bA=document.createElement("a");
            bA.href='detail.html?goods_id='+response.data[i].goods_id;
            li.appendChild(bA);

            var p = document.createElement("p");
            p.innerText = response.data[i].goods_desc;
            bA.appendChild(p);

            var img = document.createElement("img");
            img.src = response.data[i].goods_thumb;
            bA.appendChild(img);

            var oP = document.createElement("p");
            oP.className = "oP";
            oP.innerText ="价格:  "+ response.data[i].price+"$";
            bA.appendChild(oP);






        }
    },
    "error": function (message) {
//
//            console.log(message);
    }
});
