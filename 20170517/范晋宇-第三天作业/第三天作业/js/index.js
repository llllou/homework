// 第一题
// for(var num=1;num<=1000;num++){
//       if(num%5==0||num%6==0){
//         console.log(num);
//       }
// }
// 第二题

// var num=parseInt(prompt("请输入一个数字"));
// var b=0;
// for(var i=1;i<=num;i++){
//       b=b+i;
// }
// console.log(b);
// 第三题
// var num=parseInt(prompt("请输入一个数字"));
// var c=0;
// for(var i=2;i<=num;i++){
//     c=c+(i+1)/i;
// }
// console.log(c);
// 第四题
// var num=parseInt(prompt("请输入一个数字"));
//  for (var i=1;i<=num;i++){
//         if(num%i==0){
//                 console.log(i);
//         }
// }
// 第五题
// for(var i=1;i<=60;i++){
//     if(i%7!=0&&i%10!=7){
//         console.log(i)
//     }
// }
// 第六题
// for(var i=100;i<=999;i++){
//     var a=i%10;
//     var b=parseInt((i/10)%10);
//     var c=parseInt(i/100);
//     if(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)==i){
//         console.log(i);
//     }
// }
// 第七题
// for(var i=1;i<=10000;i++){
//     var a=0;
//     for(var b=1;b<i;b++){
//         if(i%b==0){
//                 a=a+b;
                   
//         }
//  } if(a==i){
//              console.log(i);           
//       }              
// }
// 第八题
// var b=0;
// var num=parseInt(prompt("请输入一个数字"));
// for(var a=1; a<=num;a++){
//     if (num%a==0) {
//         b++;
//     };
// } if(b==2){
//     console.log("这个数是质数");
// }else{
//     console.log("这个数不是质数");
// }
// 第九题
// for(var i=1;i<=10000;i++){
//     var b=0;
//     for(var a=1;a<=i;a++){
//         if(i%a==0){
//             b++;
//         }
//     }if(b==2){
//         console.log(i);
//         }
// }
// 第十题
// var a=3,b=2,c=1;
// for(var A=0;A<=66;A++){
//     for(var B=0;B<=100;B++){
//         for(var C=0;C<=200;C++){
//                  if(a*A+b*B+c*C<=200&&A+B+C==100){
//                       console.log("苹果"+A+"鸭梨"+B+"桃子"+C);
//                  }
//         }
//     }
// }