var goods_id = $.getQueryString('goods_id');
console.log(goods_id);

$.ajax({
    'url': 'http://h6.duchengjiu.top/shop/api_goods.php?goods_id=' + goods_id,
    'type': 'GET',
    'dataType': 'json',
    'success': function (response) {
        var obj = response.data[0];
        console.log(obj);


        var oDiv = document.createElement('div');
        var oImg = document.createElement('img');
        oImg.src = obj.goods_thumb;
        oDiv.appendChild(oImg);

        var oP = document.createElement('p');
        oP.innerText = obj.goods_desc;
        oDiv.appendChild(oP);

        for (var i = 0; i < response.data.length; i++) {
            var Price = document.createElement("span");
            Price.className = "oSpan";
            Price.innerHTML = "$"+response.data[i].price;
            oDiv.appendChild(Price);
        }


        var oBtn = document.createElement('button');
        oBtn.className="oBtn";
        oBtn.innerText = '加入购物车';
        oDiv.appendChild(oBtn);
        document.body.appendChild(oDiv);


    }
});
