// 第一题
// function factorial(b){
//     var sum=1;
//     for(var i=1;i<=b;i++){
//         sum=sum*i;    
//     }
//     return sum;
// }   
// var  c=0;
// for(var b=1;b<=10;b++){
//     c+=factorial(b);
// }console.log(c);
// 第二题
// function factorial(b){
//     var sum=1;
//     for(var i=1;i<=b;i++){
//         sum=sum*i;    
//     }
//     return sum;
// }  
// for(var i=100;i<=999;i++){
//     var a=parseInt(i/100);
//     var b=(i/10)%10;
//     var c=i%10;
//     if(i==factorial(a)+factorial(b)+factorial(c)){
//         console.log(i);
//     }
// }
// 第三题

// function rev(num){
//     var sum=0;
//     while(true){
//             var a=num%10;
//             if(num==0){
//                 break;
//             }sum=sum*10+a;
//             num=parseInt(num/10); 
//     }
//     return sum;
// }
// var num=parseInt(prompt("请输入一个数字"));
// alert("这个数倒着写是"+rev(num));
// 第四题
// function factorial(a){
//     var sum=0;
//     for(var i=1;i<a;i++){
//             if(a%i==0){
//                 sum=sum+i;
//             }
//     }return sum;
// }
// for(var b=1;b<=3000;b++){
//     for(var j=1;j<=b;j++){
//             if(factorial(b)==j&&factorial(j)==b){
//                 console.log(b+"和"+j+"是亲密数");
//             }
//     }
// }
// 哥德巴赫的猜想
// function sum2(num){
//     var prime=0;
//     for(var a=1;a<=num;a++){
//         if(num%a==0){
//             prime++;
//         }
//          }
//         if(prime==2){
//          return    true;
//         }else{
//           return   false;
//         }
// }
// var num=prompt("请输入偶数");
// for(var i=1;i<num;i++){
//     if(sum2(i)&&sum2(num-i)&&num-i>=i){
//         console.log(i+"加"+(num-i)+"等于"+num);
//     }
// }
// 踩地雷
// var a= parseInt(Math.random()*100+1);
// var max=100;
// var min=1;
// while(true){
//     var num=prompt("请输入一个"+min+"到"+max+"的数字");
//     if(num>min&&num<max){

//                 if(num>a){
//                 max=num;
//                 }else if(num<a){
//                 min=num;
//                 }else if(num==a){
//                     alert("恭喜踩雷");
//                     break;
//                 }
//     }else{
//         alert("请输入正确的数字");
//     }
// }
