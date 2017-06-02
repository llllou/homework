/*第一道题*/
/*var arr = ["李鹏","张利民","程晓磊","张昊","范晋宇","曹锟","冯军","付鹏飞","高超","王怀志","王润丰","于冠涛","郑娇娇","张美","张欣","董强","韩宝利","常坤","罗群","魏慧霞","吴雄健","王凌涛"];
       
        var sjdm= parseInt(Math.random()*22);

           console.log(arr[sjdm]);*/
/*第二道题*/
/*var arr=[8,2,3,22,4,5,33,47,8,9,1,13]; //1,13,2,22,3,33,4,47,5,8,8,9
//arr.length 11 //适合短列排序法 不推荐使用此方法，，
arr[0]=1;
arr[1]=2;
arr[2]=3;
arr[3]=4;
arr[4]=5;
arr[5]=8;
arr[6]=8;
arr[7]=9;
arr[8]=13;
arr[9]=22;
arr[10]=33;
arr[11]=47;
console.log(arr);*/
/*第三题*/
/*var arr=[78,69,89,65,59,81,44,90,100,93];
      sum=0,
      pjs = 0,
      count = 0,
      newArr = new Array();
for(var i=0;i<arr.length;i++){
     sum+=arr[i];   
     if(i == arr.length - 1){
        pjs =parseInt(sum/arr.length);
     }
}
for(var j = 0; j < arr.length; j ++){
     if (pjs<arr[j]) {
        count ++;
        newArr[count] = arr[j];
     }
}

console.log(newArr);*/
/*第四题*/
var arr=[78,69,89,65,59,81,44,90,100,93];
  var max=arr[0] , xiabiao=0, min=arr[0],xiabiao1=0;//假设最大最小值在前后排，
   for(var i=1; i<arr.length; i++){//与其比较大小
      if(max<arr[i]){
        max=arr[i];
         xiabiao=i;

      }
        if(min>arr[i]){
        min=arr[i];
         xiabiao1=i;
         
      }
   }
    console.log("它的最大值是"+max);
    console.log("它的最大值下标是"+xiabiao);  
    console.log("它的最小值是"+min);  
    console.log("它的最小值是"+xiabiao1);  


