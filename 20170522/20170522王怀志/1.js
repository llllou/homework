var arr=["宫保鸡丁","鱼香肉丝","回锅肉","黑椒牛柳","京酱肉丝","木须肉","毛氏红烧肉","农家小炒肉","铁板日本豆腐","葱爆羊肉","炒烤羊肉","菠萝古老肉","冬阴汤","五谷丰登","蓝莓山药","鸡汁土豆泥"];
alert(arr[parseInt(Math.random()*arr.length)]);
var arr2=[8,2,3,22,4,5,33,47,8,9,1,13];
function num(arr)
{
	var arr3=[];
	var cycle=1;
	for (var i = 0; i <arr.length; i++)
	{
		var count=0;
		for (var a= 0; a<arr.length;a++) {
			if (arr[i]>arr[a]) 
			{
				count++;
			}
			cycle++;
		}
		if(arr3[count]===arr[i])
		{
			arr3[count+1]=arr[i]
		}
		else{arr3[count]=arr[i]};
	};
	console.log(cycle);
	return arr3
}
console.log(num(arr2));
function above(arr)
{
	var AVE=0;
	for (var i = 0; i <arr.length; i++) {
		AVE+=arr[i];
	}
	AVE=AVE/arr.length;
	var count=0;
	for (var a= 0; a<arr.length; a++) {
		if (arr[a]>=AVE) {
			count++;
		}
	}
	return count;
}
console.log(above(arr2));
function max(arr)
{
	
	for (var i = 0; i <arr.length; i++) {
		var sum=0;
		for (var a= 0; a<arr.length;a++) {
			if (arr[i]>=arr[a]) 
			{
				sum++;
			}
		};
		if (sum==arr.length) 
		{
			var res=[i,arr[i]];
			return res;
			break;
		};
	}
}
function min(arr)
{
	
	for (var i = 0; i <arr.length; i++) {
		var sum=0;
		for (var a= 0; a<arr.length;a++) {
			if (arr[i]<=arr[a]) 
			{
				sum++;
			}
		};
		if (sum==arr.length) 
		{
			var res=[i,arr[i]];
			return res;
			break;
		};
	}
}
var arr3=[30,40,50,60,77,88,11,44,66,12,45,77,98];
console.log(max(arr3));
console.log(min(arr3));