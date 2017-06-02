// var num = prompt('请输入一个数字');
// if(num%5==0 && num%6==0 ){
// 	alert('这个数字能同时被5和6整除');
// }else if(num%5 == 0 && nu%6 !=0){
// 	alert('这个数字能被5整除');
// }else if(num %6 == 0 && num %5 !=0){
// 	alert('这个数字能被6整除')
// }else{
// 	alert('这个数字不能被5和6整除');
// }

// var num1= prompt('请输入一个数字');
// var num2=prompt('请再输入一个数字');
// if(num1 % 2 == 0 && num2 % 2 ==0 || num1 % 2 == 1 && num2 % 2 ==1){
// 	alert('两数奇偶性相同');
// }else if(num1 % 2 == 1 && num2 % 2 ==0 || num1 % 2 == 0 && num2 % 2 ==1){
// 	alert('两数奇偶性不同');
// }


// var year=prompt('请输入年份');
// if(year%4==0 || year%400==0){
// 	alert(year+'年是闰年');
// }else{
// 	alert(year+'年不是闰年');
// }

// var time=prompt('请输入工作年份');
// var salary=prompt('请输入月薪');
// if(0 <= time < 1){
// 	if(salary > 8000){
// 		alert('发年终奖'+salary*1.2);
// 	}else{
// 		alert('发年终奖'+salary);
// 	}
// }else if(1 <= time < 2){
// 	if(salary > 10000){
// 		alert('发年终奖'+salary*1.7);
// 	}else{
// 		alert('发年终奖'+salary*1.5);
// 	}
	
// }else if(time >=2 ){
// 	if(salary > 12000){
// 		alert('发年终奖'+salary*3.2);
// 	}else{
// 		alert('发年终奖'+salary*3);
// 	}
	
// }

var weight=prompt('请输入您的体重');
var height=prompt('请输入您的身高');
var pmi=weight/(Math.pow(height,2));
if(pmi < 18.5){
	alert('体重过轻');
}else if(18.5 <= pmi && pmi < 24.99999){
	alert('正常');
}else if(25 <= pmi <27.999999){
	alert('过重');
}else if(28 <= pmi <31.999999){
	alert('肥胖');
}else if(pmi >= 32){
	alert('非常肥胖');
}