window.onload = function(){
    var char = document.getElementById("char");
    var btnPlus = document.getElementsByTagName("input");

    btnPlus[0].onclick = function(){
        fontSizePlus();
    }

    btnPlus[1].onclick = function(){
        fontSizeMinus();
    }

    btnPlus[2].onclick = function(){
        fontStyleYahei();
    }

    btnPlus[3].onclick = function(){
        fontStyleNormal();
    }

    function fontSizePlus(){
        var fontSizePlus = char.style.fontSize;
        var temp = parseInt(fontSizePlus);
        if(temp<25){
            temp += 1;
        }
        else{
            alert("不能再放大了！");
        }
        char.style.fontSize = temp + "px";
        console.log(fontSizePlus);
    }

    function fontSizeMinus(){
        var fontSizeMinus = char.style.fontSize;
        var temp = parseInt(fontSizeMinus);
        if(temp>10){
            temp -= 1;
        }
        else{
            alert("不能再缩小了！");
        }
        char.style.fontSize = temp + "px";
    }

    function fontStyleYahei(){
        char.style.fontFamily = "microsoft yahei";
        char.style.color = "blue";
    }

    function fontStyleNormal(){
        char.style.fontFamily = "宋体";
        char.style.color = "green";
        char.style.fontSize = "20px";
        char.style.backgroundColor = "yellow";
    }
}