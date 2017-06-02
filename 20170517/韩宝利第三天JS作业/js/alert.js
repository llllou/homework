/* 第一道题
for ( var i=1; i<=1000; i++){
    if (i%5==0||i%6==0) {
         console.log(i);
    }
}*/
/*第二道题*/
/*var num=0
var  n= prompt("请输入一个数！");
for(var i=1; i<=n; i++){

      num+=i;
 }
 console.log(num);*/
 /*第三道题*/
 
 /*var b =  prompt("请输入一个数字");
  var  num = 0 ;
    for( var c=2; c <= b; c++) {
         var s=(c+1)/c;
         num+=s;
    }
    console.log(num);*/
/*第四题*/
/*var  m=prompt("请输入一个数字");
for(var i=1; i<=m; i++  ){

    if(m%i===0){
        console.log(i);
    }
}*/
/*第五道题*/
  /*for(var e=1; e<=60; e++ ){
    if(e%7!=0&&e%10!=7){
       console.log(e);
    }
}*/
/*第六道题*/
/*for(var i=100; i<999; i++){

     var a= i % 10;
     var b=parseInt(i/10%10);
     var c=parseInt(i/100    if(Math.pow(a,3)+Math.pow(b,3)+Math.po);
w(c,3) == i) {
        console.log(i);
     }
}*/
/*第七道题*/
/*for(var k=1; k<=10000; k++){
    var sum = 0;
    for (var n = 1;n < k;n++) {
        if (k % n === 0)  {
                sum += n;
        }
    }
     if(sum === k) {
        console.log(k);
     }
}*/
/*第八道题*/
/*var x=prompt("请输入一个不小于2的数字");
  var cound = 0;
    for(var i = 1; i <= x; i++){
        if(x % i === 0){
                cound++;
       }
   }
     if (cound === 2) {
        alert("他就是质数")
    }else{
        alert("他就不是质数")
    }
*/
 /* var a = prompt("请输入一个不小于2的数字");
    for (var i = 2; i <= a - 1; i ++){
        if(a % i == 0){//
                alert("不是质数");//何为质数能被1和它本身相除的数
               break;
       }
   }
   if ( i == a ) {
            alert("是质数");
   }*/

  //第九题
  
 /*for(var i=2; i<=10000; i++){
     var  cound=0;
    for( var j=1; j<=i; j++){
          if(i%j===0){
                cound++;//i=2  j=1   i%j=0 所以   1
           }                   //i=2  j=2    i%j=0    1    (cound++)1 +1=2符合为质数
     }                                                                                   
    if(cound==2){
        console.log(i)
     }
}*/
//第十题

for (var i = 0;i <= 100; i++) {
   for (var j = 0;j <= 100 - i; j++) {
       var k = 100 - i - j;
       if (3*i + 2*j + k === 200) {
        console.log("需要买苹果" + i +"个,需要买梨子" + j +"个, 需要买桃子" + k+"个。");
       }
   }
}