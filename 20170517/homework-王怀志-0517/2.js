console.log("作业一");
for (var i = 1; i <=1000; i++) {
	if (i%5==0||i%6==0) {
		console.log(i)
	}
};
console.log("作业二")
var n=parseInt(prompt("请输入求和数字",""));
var sum=0
for (var i = 0; i<=n; i++) {sum+=i
};
alert(sum);
console.log("作业三");
var n=parseInt(prompt("请输入求分数数字",""));
var sum=0
for (var i = 2; i <=n;i++) {sum+=(i+1)/i
};
alert(sum);
console.log("作业四");
var n=parseInt(prompt("请输入求约数字",""));
for (var i = 1; i <=n; i++) {
	if (n%i==0) {console.log(i)}
};
console.log("作业五");
for (var i = 1; i <=60; i++) 
{
	if (i%7!=0&&i%10!=7) {console.log(i)}
};
console.log("作业六");
for (var i = 100; i <1000; i++) {
	if (Math.pow(parseInt(i/100),3)+Math.pow(parseInt(i%100/10),3)+Math.pow(i%10,3)==i) {
		console.log(i)
	}
};
console.log("作业七");
for (var i = 1; i <=10000; i++) {
	var sum=0;
	for (var r = 1; r<i;r++) {
		if (i%r==0) {
			sum+=r
		}
	};
	if (sum==i) {
		console.log(i)
	};
};
console.log("作业八");
var n=parseInt(prompt("请输入求质数字",""));
var sum=0;
for (var i =1; i<=n; i++){
	if (n%i==0) {sum++}
};
sum==2?alert("是质数"):alert("不是质数");
console.log("作业九");
for (var i = 2; i<=10000; i++) 
{
	var count=0;
	for (var n = 1; n<=i; n++) 
	{
		if (i%n==0) 
		{
		count++;}
	};
	if(count==2){console.log(i)};

}
console.log("作业10");
for (var a= 0; a<67; a++) {
	for (var b= 0; b <=100; b++) {
		for (var c= 0; c<=200; c++) {
			if (3*a+2*b+c==200&&a+b+c==100) {
				console.log("可以买苹果"+a+"个、"+"鸭梨"+b+"个、"+"桃子"+c+"个。")
			}
		}
	}
}

