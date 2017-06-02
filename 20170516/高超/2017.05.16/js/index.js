// var  num=prompt("请输入数字");
// if(num%5==0&&num%6==0){
//             alert("这个数字同时能被5和6整除");
// }else if(num%6==0){
//                 alert("这个数字能被6整除,但是不能被5整除");
// }else if(num%5==0){
//     alert("这个数字能被5整除，但是不能被6整除");
// }else{
//     alert("这个数字不能被5或者6整除");
// }
// 奇偶数
// var num=prompt("请输入一个数字");
// var numTwo=prompt("请在输入一个数字");
// var one=(num%2);
// var two=(numTwo%2);

// if (one==two){
//             alert("你好，这两个数字的奇偶性相同");
// }else{
//             alert("你好，这两个数字的奇偶性不同")
// }
// 年份
// var  year=prompt("请输入一个年份");
// var  one=year%100;
// if(one==0){
//         var list=year%400;
//         if(list==0){
//             alert(year+"是百年闰年")
//         }else{
//             alert(year+"不是百年闰年")
//         }
// }else{
//       var list=year%4;
//       if(list==0){
//         alert(year+"是闰年");
//     }else{
//         alert("不是闰年");
//        }
//  }
// 身高体重
// var  weight=prompt("请输入您的体重");
// var  height=prompt("请输入您的身高");
// var src=weight/Math.pow(height,2);
// if(src<=18.5){
//     alert("过轻；");
// }else if(18.5<src&&src<24.99999){
//     alert("正常；");
// }else if(25<=src&&src<=27.99999){
//     alert("过重；");
// }else if(28<=src&&src<=31.99999){
//     alert("肥胖；");
// }else if(32<=src){
//     alert("非常肥胖；");
// }
// 公司奖金
// var work=prompt("请问你工作多久了");
// if(0<work&&work<12){
//          var list=prompt("请输入你的月薪");

//          if(list>8000){
//             var  mon=list*1.2;
//             alert("你的年终奖为"+mon+"元");
//          }else{
//             var mon=list*1;
//             alert("你的年终奖为"+mon+"元");
//          }
// }else if(12<=work&&work<24){
//          var list=prompt("请输入你的月薪");
//         if(list>10000){
//             var mon=list*1.7;
//             alert("你的年终奖为"+mon+"元");
//         }else{
//             var mon=list*1.5;
//             alert("你的年终奖为"+mon+"元");
//         }
//  } else if(24<=work&&work<Infinity){
//              var list=prompt("请输入你的月薪");
//              if(list>12000){
//                 var mon=list*3.2;
//                alert("你的年终奖为"+mon+"元");
//              }else{
//                 var mon=list*3;
//                 alert("你的年终奖为"+mon+"元");
//              }
//  }

