console.log("第一题");
for(i=1;i<=1000;i++){
    if(i%5==0||i%6==0){
        console.log(i);
    }
}
var b=prompt("第二题：请输入一个数字n");
var sum=0;
a=b;
for (a=1;a<=b;a++){
    sum =sum+a;
}
alert(sum);
//第三题
var b=prompt("第三题：请输入一个数字");
var sum=0;
a=b;
for (a=2;a<=b;a++){
    sum =sum+(a+1)/a;
}
alert(sum);
//第四题
console .log("第四题");
var c=prompt("第四题：请输入一个数字");
d=c;
for (d=1;d<=c;d++){
    if(c%d==0){
        console .log(d);
    }
}
//第五题
console.log("第五题");
for(f=1;f<=60;f++){
   var A=f%7;
   var B=parseInt(f%10);
    if(A!=0&&B!=7){
        console .log(f);
    }
}
//第六题
console .log("第六题")
for(k=100;k<=999;k++){
    var Q=k%10;
    var W=parseInt((k/10)%10);
    var E=parseInt(k/100);
    if(Math.pow(Q,3)+Math.pow(W,3)+Math.pow(E,3)==k){
        console .log(k);
    }
}
//第七题
console .log("第七题");
for(g=1;g<=1000;g++){
    sum=0;
    for(h=1;h<g;h++){
        if(g % h== 0){
        sum+=h;
    }
    }
    if(sum==g){
        console .log(g);
    }
}
//第八题
var j=prompt("请输入一个数");
var cound=0;
for(l=1;l<=j;l++){
    if(j%l==0){
        cound++;
    }
}if(cound==2){
    alert("这个数是质数");
}else {
    alert("这个数不是质数");
}
第九题
console.log("第九题")
for(o=1;o<=10000;o++){
    var cound=0;
    for(p=1;p<=o;p++){
        if(o%p==0){
            cound++;
        }
    }if(cound==2){
       console.log(o);
    }
}
第十题
var a=3,A=66;
var b=2,B=100;
var c=1,C=200;
for(A=0;A<=66;A++){
    for(B=0;B<=100;B++){
        for(C=0;C<=200;C++){
            if(a*A+b*B+c*C<=200&&A+B+C==100){
                console .log("苹果"+A+"鸭梨"+B+"桃子"+C);
            }
        }
    }

}






