var goods_id = $.getQueryString('goods_id');
console.log(goods_id);

$.ajax({
    'url': 'http://h6.duchengjiu.top/shop/api_goods.php?goods_id=' + goods_id,
   'type': 'GET',
    'dataType': 'json',
    'success': function (response) {
        var obj = response.data[0];
        console.log(obj);
        var shopList = document.getElementById('shopList');
        var oImg = document.createElement('img');
        oImg.src = obj.goods_thumb;
        shopList.appendChild(oImg);
        var shopListRight = document.getElementById('shopListRight');
        var oh1 = document.getElementById('oh1');
        oh1.innerText = obj.goods_name;
        var slroPrice = document.getElementById('slroPrice');
        slroPrice.innerText = "￥"+obj.price;


    }
});