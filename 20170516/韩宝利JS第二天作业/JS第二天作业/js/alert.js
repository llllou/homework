/*第一道题*/
var a=parseInt(prompt("请输入一个数字"));
     if (a%5==0&&a%6==0) {
          alert("这个数字同时能够被6和5整除");
     } else  if (a%5 == 0&&a%6 != 0){
         alert("这个数字不能够被6但能被啥5整除");
     } else  if (a%5 != 0&&a%6 == 0){
         alert("这个数字不能够被5但能被啥6整除");
     } else  if (a%5 != 0&&a%6 != 0){
         alert("这个数字不能够被6和5整除");
     }
/*第二道题*/
var b=parseInt(prompt("请输入一个数字"));
var c=parseInt(prompt("请再输入一个数字"));
   if ((b+c)%2===0) {
     
    alert("您好，这个数字奇偶性相同")
   } else  if ((b+c)%2===1) {
    alert("您好，这个数字奇偶性不同");
   } else{
   alert("您好，你输入错误了!");
   }
   /*第三道题*/
   var d=parseInt(prompt("请输入一个年份"));
      if (d%100==0) {
             if (d%400==0) {
                alert("就是闰年");
             }else {
               alert("不是闰年");
             }   
      } else  if (d%100!=0){
         if (d%4==0){
            alert("就是闰年");
         }else {
            alert("不是闰年");
          }  
      }
/*第四道题*/
var d=parseInt(prompt("请输入您工作了几年？"));
var f=parseInt(prompt("请输入您的月薪？"));
   if (d>=0&&d<1) {
       if (f>8000) {
         alert("年终奖为"+(1.2*f));
       } else{
        alert("年终奖为"+f);
        }
   } else if (d>=1&&d<2) {
       if (f>10000) {
         alert("年终奖为"+(1.7*f));
       } else{
        alert("年终奖为"+(1.5*f));
        }
    } else if (d>=2) {
       if (f>12000) {
         alert("年终奖为"+(3.2*f));
       } else{
        alert("年终奖为"+(3*f));
        }
    }
    /*第五道题*/
    var kg=prompt("请输入您的体重？(kg)");
    var m= prompt("请输入您的身高？(m)");
     var  BMI= parseFloat((kg/Math.pow(m,2)));
     if (BMI<18.5) {
          alert("您的体重过轻！");
     }  else  if (BMI>18.5&&BMI<24.99999) {
          alert("您的体重正常！");
     }  else if (BMI>25&&BMI<27.99999) {
          alert("您的体重过重！");
     }  else if (BMI>28&&BMI<31.99999) {
          alert("您的体重超重！");
     }  else if (BMI>32) {
          alert("您的体重像头猪！");
     } else{
        alert("您的输入错误0.0！");
     } 