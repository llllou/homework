var num=prompt("Please enter a number");
str1=num%5;
str2=num%6;
if(str1==0&&str2==0){
	alert("这个数字同时能被5和6整除！");
}
else if(str1==0){
	alert("这个数字能被5，不能被6整除！");
}
else if(str2==0){
	alert("这个数字能被6，不能被5整除！");
}
else{
	alert("这个数字既不能被5整除也不能被6整除");
}

//第二题
var num2=prompt("请输入一个数字");
var num3=prompt("请再输入一个数字");
if(num2-num2==num3-num3){
	str3=num2%2;
	str4=num3%2;
	if(str3==str4){
		alert("你好，这两个数奇偶性相同。");
	}
	else{
		alert("你好，这两个数奇偶性不相同。");
	}
}
else{
	alert("玩笑不是乱开的！")
}

//第三题
var year=prompt("请输入一个年份");
year2=year%100;
if(year2==0)
{
	str5=year%400;
	if(str5==0){
	alert(year+"年是整百数年，是闰年。")
	}
	else{
		alert(year+"年是整百数年，不是闰年。！")
	}
}
else{
		str5=year%4;
	if(str5==0){
		alert(year+"年不是整百数年，为闰年！")
	}
	else{
		alert(year+"年不是整百数年，不是闰年！")
	}
}
////第四题
var year=prompt("请问你工作几年了！");
var n;
if(year>=0&&year<1)
{
	var g=prompt("你的月薪为多少？");
	if(g>8000){
		n=g*1.2;
		alert("你的年终奖为"+n+"元");
	}
	else{
		n=g*1
		alert("你的年终奖为"+n+"元");
	}
}
else if(year<2){
	var g=prompt("你的月薪为多少？");
	if(g>10000){
		n=g*1.7;
		alert("你的年终奖为"+n+"元");
	}
	else{
		n=g*1.5;
		alert("你的年终奖为"+n+"元");
	}
}
else if(year>=2){
	var g=prompt("你的月薪为多少？");
	if(g>12000){
		n=g*3.2;
		alert("你的年终奖为"+n+"元");
	}
	else{
		n=g*3;
		alert("你的年终奖为"+n+"元");
	}
}
else{
	alert("你不是我公司员工别凑热闹！");
}



//第五题
var w=prompt("请输入你的体重，以kg为单位");
if(w<=0)
{
	alert("妖孽看我收你！")
	}
else{
	var h=prompt("请输入你的身高，以m为单位");
	if(h<=0)
	{
		alert("你已低于地平线！")
	}
	else
	{
	var z=w/Math.pow(h,2);
	if(z<18.5){
		alert("你的体质过轻！");
	}
	else if(z>=18.5&&z<25){
		alert("你的体质正常！");
	}
	else if(z>=25&&z<28){
		alert("你的体质过重！");
	}
	else if(z>=28&&z<32){
		alert("你的体质过重！");
	}
	else{
		alert("你的体质非常肥胖！");
	}
}
}
