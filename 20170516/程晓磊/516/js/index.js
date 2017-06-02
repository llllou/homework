var number=prompt("作业一：请输入一个数");
var a=parseInt(number%5);
 b=parseInt(number%6);
if (a ==0&&b==0){
    alert("能被5整除,也能被6整除");
}else if (a!=0&&b==0){
    alert("这个数不能被5整除,能被6整除");}

else if (a ==0&&b!=0){
    alert("这个数能被5整除，不能被6整除");
}
else  if (a !=0&&b!=0){
    alert("这个数不能被5整除，也不能被6整除");
}
//作业二
var number2=prompt("作业二：请输入一个数字");
 var number3=prompt("请再输入一个数字");
 var c=parseInt(number2%2);
 var d=parseInt(number3%2);
 if (c==0&&d==0){
     alert("您输入的两个数都是偶数");
 }
 else  if (c==0&&d!=0){
     alert("您输入的第一个数是偶数，第二个数是奇数");
 }
 else  if (c!=0&&d==0){
     alert("您输入的第一个数是奇数，第二个数是偶数");
 }
 else  if (c!=0&&d!=0){
     alert("您输入的两个数都不是偶数");
 }
// 作业三
var number4=prompt("作业三：请输入年份");
 e=parseInt(number4%100);
 if (e==0){
     e=parseInt(number4%400);
     if (e==0){
         alert(number4+"是百年也是润年");
     }
     else  if (e!=0){
         alert(number4+"是百年不是润年");
     }
 }
 else if (e!=0){
     e=parseInt(number4%4);
     if (e==0){
         alert(number4+"不是百年但是润年");
     }
     else if (e!=0){
         alert(number4+"不是百年也不是润年");
     }
 }
// 作业四
var year=prompt("作业四：请输入您的工龄");
var money=prompt("作业四：请输入您的工资");

 if (year<1&&money>8000){
   alert("您的年终奖为"+money*1.2+"人民币");
 }
 else  if (year<1&&money<8000){
     alert("您的年终奖为"+money*1+"人民币");
 }
if (year>=1&&money>10000){
    alert("您的年终奖为"+money*1.7+"人民币");
}
else  if (year>=1&&money<10000){
    alert("您的年终奖为"+money*1.5+"人民币");
}
if (year>=2&&money>12000){
    alert("您的年终奖为"+money*3.2+"人民币");
}
else  if (year>=2&&money<12000){
    alert("您的年终奖为"+money*3+"人民币");
}
//作业五
var A=prompt("请输入您的体重");
var B=prompt('请输入您的身高(单位是m 格式*.**(如：1.75))');
var C=A/(B*B);
if (C<18.5){
    alert("身体过轻");
}
else if (C>18.5&&C<24.99999){
    alert("身体正常");
}
else if (C>25&&C<27.99999){
    alert("身体过重");
}
else if (C>28&&C<31.99999){
    alert("身体肥胖");
}
else if (C>32){
    alert("非常肥胖");
}
else {
    alert("去死");
}









