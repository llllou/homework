// var a=prompt("请输入数字");
// if(a%5==0){
//     if (a%6==0) {
//         alert("这个数可以被五和六整除");
//     }else{
//         alert("这个数只能被五整除");
//     }
// }else if(a%6==0) {
//     alert("这个数可以被六整除");

// }else{
//     alert("这个数不可以被五六整除");
// }
// // 第二题
// var number=prompt("请输入数字");
// var number1=prompt("请输入数字");
// b=number%2;
// c=number1%2;
// if(b==0&&c==0){
//     alert("两个都是偶数");
// }else if(b==0&&c!=0) {
//     alert("这两个数奇偶性不同");
// }else if(b!=0&&c==0) {
//     alert("这两个数奇偶性不同");
// }else if(b!=0&&c!=0) {
//     alert("这两个数都是奇数");
// }
// 第三题
// var year=prompt("请输入年份");
// var d=year%100;
// if (d==0) {   
//    var c=year%400;
//         if (c==0) {
//             alert("今年是闰年");
//         }
//         else {
//             alert("今年不是闰年");
//         }
//  }
// else {   
//     d=year%4;
//         if (d==0) {
//             alert("今年是闰年");
//         }
//         else {
//             alert("今年不是闰年");
//         }   
// }
/*第四题*/
// var year=prompt("工作年份");
// if(year==0){
//     var money=prompt("请输入月薪");
//     if(money<=8000){
//          alert("你的年终奖是"+money*1);
//     } else{
//         alert("你的年终奖是"+money*1.2);
//     }
// }else if(year==1){
//      var money=prompt("请输入月薪");
//     if(money<=10000){
//          alert("你的年终奖是"+money*1.5);
//     } else{
//         alert("你的年终奖是"+money*1.7);
//     }
// }else if(year>=2){
//      var money=prompt("请输入月薪");
//     if(money<=12000){
//          alert("你的年终奖是"+money*3);
//     } else{
//         alert("你的年终奖是"+money*3.2);
//     }
// }
// 第五题
var height=prompt("请输入身高（m）");
var weight=prompt("请输入体重（kg）");
var c=weight/(height*height);
if  (c<18.5){
    alert("您BIM过轻");
}else if(c>18.5&&c<25){
    alert("您BIM正常");
}else if(c>25&&c<28){
    alert("您BIM过重");
}else if(c>28&&c<32){
    alert("您BIM肥胖");
}else if(c>32){
    alert("您BIM非常胖");
}