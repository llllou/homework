// var navList = document.getElementById('nav-list');
// $.ajax({
//     "url": "http://lc.shudong.wang/api_cat.php",
//     'type': 'GET',
//     'dataType': 'json',
//     'success': function(response){
//         // 处理返回的数据
//         console.log(response);
//         for(var i = 0; i < response.data.length; i++){
//             var obj = response.data[i];
//             var oLi = document.createElement('li');
//             var oA = document.createElement('a');
//             oA.innerText = obj.cat_name;
//             oA.href = 'list.html?cat_id=' + obj.cat_id;
//             navList.appendChild(oLi);
//             oLi.appendChild(oA);
//         }
//     },
//     "error": function(message) {
//         //
//         console.log(message);
//     }
// });


// 阿贾克斯的调用


$.ajax({
    'url': 'http://h6.duchengjiu.top/shop/api_goods.php',
    'type': 'GET',
    'dataType':'json',
    'success': function (response) {
        var Shop = document.getElementById('shop');
        for(var i = 0; i < response.data.length;i++){
            var obj = response.data[i];
            console.log(obj);

            var oDiv = document.createElement('div');
            Shop.appendChild(oDiv);
            var OLink = document.createElement('a');
            OLink.href = "shopList.html?goods_id=" + obj.goods_id;
            oDiv.appendChild(OLink);
            var oImg = document.createElement('img');
            oImg.src = obj.goods_thumb;
            OLink.appendChild(oImg);
            var oP = document.createElement('p');
            oP.innerText = obj.goods_desc;
            OLink.appendChild(oP);
            var oA = document.createElement('a');
            oA.innerText = obj.goods_name;
            OLink.appendChild(oA);

        }
    }
});













// 四步走方式
// var xhr = new XMLHttpRequest();
//
//
// xhr.onreadystatechange = function () {
//   if(xhr.readyState == 4) {
//       var response = JSON.parse(xhr.responseText);
//       for(var i = 0; i < response.data.length-4; i++){
//           var obj = response.data[i];
//           var oli =  document.createElement('li');
//           var oA = document.createElement('a');
//           oA.href =
//           oA.innerText = obj.cat_name;
//           oli.appendChild(oA);
//           navList.appendChild(oli);
//       }
//   }
// };
// xhr.open('GET', 'http://lc.shudong.wang/api_cat.php');
// xhr.send();


// var Shop = document.getElementById('shop');
//
// var ShopLi = new XMLHttpRequest();
//
// ShopLi.onreadystatechange = function () {
//     if(ShopLi.readyState == 4){
//         console.log(ShopLi.responseText);
//         var response = JSON.parse(ShopLi.responseText);
//         for(var i = 0; i < response.data.length;i++){
//             var obj = response.data[i];
//             console.log(obj);
//             var oDiv = document.createElement('div');
//             Shop.appendChild(oDiv);
//             var oImg = document.createElement('img');
//             oImg.src = obj.goods_thumb;
//             oDiv.appendChild(oImg);
//             var oP = document.createElement('p');
//             oP.innerText = obj.goods_desc;
//             oDiv.appendChild(oP);
//             var oA = document.createElement('a');
//             oA.innerText = obj.goods_name;
//             oDiv.appendChild(oA);
//         }
//     }
// };
// ShopLi.open('GET', 'http://lc.shudong.wang/api_goods.php');
// ShopLi.send();