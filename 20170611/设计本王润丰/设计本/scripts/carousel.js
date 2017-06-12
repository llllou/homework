var carouselMain = document.getElementById("carouselMain").getElementsByTagName("ul")[0];
var changeBtn = document.getElementById("changeBtn");
var count = 0;

console.log(carouselMain);

carouselMain.innerHTML += carouselMain.innerHTML;

var timerMain = setInterval(function(){
    var target = -2000*count - 100; 
    console.log(count);
    if(count == 2) target = -2000*count - 150;
    animation(carouselMain,{"left":target},300,function(){
        if(count >= 4){
            count = 0;
            carouselMain.style.left = "-100px";
            clearInterval(animation);
        }
    })
    count ++;
},5000);
