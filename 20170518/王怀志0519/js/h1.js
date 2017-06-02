// function plus(n)
// {	
// 	var sum=1;
// 	for (var i = 1; i <=n; i++) {
// 		sum*=i
// 	}
// 	return sum
// }
// var a=0;
// for (var i = 1; i <=10; i++) {
// 	a+=plus(i);
// }
// console.log(a);
// a=0;
// for (var i =100; i <=999; i++) {
// 	if (plus(parseInt(i/100))+plus(parseInt(i%100/10))+plus(i%10)==i) {console.log(i)}
// };
// function rev(n)
// {
// 	var w="";
// 	for (var i=10; i <=n*10; i*=10) {
// 		for (var a= 0; a<=9; a++) 
// 		{
// 			if (parseInt(n%i/(i/10))==a)
// 			{	w=w+a;
// 				break;
// 			}
// 		}
// 	}
// 	return w;
// }
// var n=prompt("input!!","");
// alert(rev(n));
function m2(a)
{
	var sum=1;
	for (var i = 2; i<=Math.sqrt(a); i++) 
	{
		if (a%i==0) {
			if (a/i!=i) {sum+=i+a/i}
			else{sum+=i}
		}	
	}
	return sum;
}
for (var a = 2; a<=3000; a++)
{
	for (var b= 2; b<a; b++) {
		if (m2(a)==b&&m2(b)==a) {
			console.log(a+"与"+b)
			break;
		}
	}
}
a=2;
b=2;