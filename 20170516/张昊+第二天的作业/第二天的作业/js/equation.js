// // 算式
// var a = 123+45*78,b = 34+543,c = 9*(324-34);
// console.log(a/b-c);
// // 温度
// var A = prompt("请输入摄氏度");
// alert(9/5*parseInt(A)+32);
// // 次方mat
// var _a = 23+Math.pow(5,7),_b = 45;
// console.log(Math.pow(_a/_b,2));
// 六边形
// var _A = prompt("请输入边长");
// console.log(typeof _A);
// console.log(3*Math.sqrt(3)/2*Math.pow(parseInt(_A),2));
// console.log(typeof _A);
//星期天
// console.log("1000天后是星期"+((1000%7+1)%7+1));
// var Q = prompt("请输入天数");
// alert(Q+"天后是星期"+((1+parseInt(Q)%7)));
//三位数
// var a = prompt("请输入数字");
// var b = parseInt(a/100);
// console.log(b);
// var s = parseInt((a-b*100)/10);
// console.log(s);
// var g = parseInt(a-b*100-s*10);
// console.log(g);
// console.log(b+s+g);
// var a = prompt("请输入数字");
// var b = parseInt(a/100);
// var s = parseInt(a%100/10);
// var g = parseInt(a%100%10);
// console.log(b+s+g);
// alert((123+45*78)/(34+543)-9*(324-34));
// var a = prompt("请输入摄氏度");
// alert(9/5*a+32);
// alert(Math.pow((23+Math.pow(5,7))/45,2));
// var a = prompt("请输入边长");
// alert(3*Math.sqrt(3)/2*Math.pow(a,2));
// var a = prompt("请输入数字");
// var g = a%100%10;
// var s = parseInt(a%100/10);
// var b = parseInt(a/100);
// alert(b+s+g);
// console.log(1 > 2); //false
// console.log(1 < 2); //true
// console.log("1" == 1);  //true
// console.log("1" === 1); //false
// console.log("1" != 1); //false
// console.log("1" !== 1); //true
// console.log(1<2 && 2>3); //false
// console.log(1<2 && 2<3); //true
// console.log(1>2 && 2<3); //false
// console.log(1<2 || 2>3); //true
// console.log(1<2 || 2<3); //true
// console.log(1>2 || 2<3); //true
// console.log(!true); //false
// console.log(!false); //true
// console.log((a > b) && (c < b) || (e > f));
//           false && true || false
//           false || false
//           false
// console.log((a < b) && (c > b) || (e < f));
//            true && false || true
//            false || true
//            true
// console.log((c < d) && (e > c) || (d < b));
//             false && false || true
//             false || true
//             true
// console.log((g > f) && (e < b) || (a > d));
//               false && true || false
//               false || false
//               false
// console.log((a > f) && (b < c) || (e > g));
//          false && false || true
//          false || true
//          true
// console.log(a > d);
// var a = 0;
// var b = 1;
// var c = NaN;
// var d = null;
// var e = false;
// var f = true ;
// var g = -1;
// var h = "你好";
// b += 2;
// b -= 2;
// b *= 5;
// b /= 5;
// b %= 1;
// b++;
// b++;
// console.log(b++);
// console.log(b);
// console.log(++b);
// var a = 1 + 2 < 3 + 3 && 3 + 4 < 2 * 7;
//     3 < 4 && 7 < 14;
//     true && true;
//     true;
// var a = 15;
// false + a++ + true > 8 && 13 || 6
//    false + 15 +true >　8 && 13 || 6;
//    16 > 8 && 13 || 6;
//    true && 13 || 6;
//    13 || 6;
//    13;
// var SS = parseInt(prompt("请输入您的成绩"));
//     if (SS >= 60){
//         alert("恭喜你及格了~~")
// }else{
//         alert("不及格~~")
// };
// var SSS = prompt("请输入口令，领取红包~~");
// if (SSS == 123) {
//     alert("你抢到了50万~~");
// }else if(SSS == 234) {
//     alert("你抢到了100万~~");
// }else if(SSS == 345) {
//     alert("你抢到了1000万");
// }else {
//     alert("口令错误！");
// };
// alert("谢谢惠顾！");