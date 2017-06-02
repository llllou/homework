
               
// var a =  prompt("数字");
// if (a%5!=0 && a%6==0) {
//     alert("6可以5不可以");
// }
// if (a%5==0 && a%6!=0) {
//     alert("5可以6不可以");
// }
// if (a%5==0 && a%6==0) {
//     alert("都可以");
// }
// else{
//     alert("都不可以");
// };

// for(var a=1;a<=1000;a++){
//     if (a%5==0 && a%6==0) {
//     console.log(a);
// }
// }
//  var c=0;     
// var a =  parseInt(prompt("数字"));           
// for(var b=1;b<=a;b++){   
//     c+=b; 
// }                
//    console.log(c); 

//  var c=0;     
// var a =  parseInt(prompt("数字"));           
// for(var b=1;b<=a;b++){
//    c+=(b+1)/b;
// }
// console.log(c); 

// var a =  parseInt(prompt("数字"));           
// for(var b=1;b<=a;b++){
//    if (a%b==0) {
//     console.log(b); 
//    };
// }

// for(var b=1;b<=60;b++){
//    if (b%10!=7 && b%7!=0) {
//     console.log(b); 
//    } 
// }


// for(var e=100;e<=999;e++){
//   var f = parseInt(e/100);
//   var h= parseInt((e-f*100)/10);
//   var i = parseInt(e-f*100-h*10);
//    if (Math.pow(f,3)+Math.pow(h,3)+Math.pow(i,3)==e) {
//     console.log(e);
//    }
// }


// for(var e=1;e<=10000;e++){
//     var   g=0;
//   for(var f=1;f<e;f++){
//         if (e%f==0) {
//             g+=f;
//             if(g==e){
//             console.log(e);
//         }
//     }
//   }
// }

// var a =  parseInt(prompt("数字"));   
// var c=0;        
// for(var b=0;b<=a;b++){
//            if(a%b==0 ){
//                 c++;    
//              }   
//      }
//   if(c==2){
//                 console.log("hahaha");  
//      }else{
//         console.log("123456");}


      
// for(var b=2;b<=10000;b++){
//         var c=0;  
//            for(var a=1;a<=10000;a++){
//              if (b%a==0) {
//                 c++;
//                 }
//            }
//                              if(c == 2){
//                     console.log(b);
//              }
//      }


for(var a=0;a<=100;a++){  
       for(var b=0;b<=100-a;b++){  
             for(var c=0;c<=100-b;c++){  
                if (3*a+2*b+c ==200) {
                    console.log(a+"个"+b+"个"+c+"个");
                };
     }
     }
     }