
var guanyu="关羽",Hp1=3000,Ad1=50;
var lvbu="吕布",Hp=4500,Ad=60;
while(true){
    var guanji=parseInt(Math.random()*8+3);
    console.log(guanyu+"向"+lvbu+"斩出十刀");
    Hp=Hp-guanji*Ad1;
    console.log(lvbu+"被"+guanyu+"斩中"+guanji+"刀,掉了"+(guanji*Ad1)+"血");

    var lvji=parseInt(Math.random()*6+1);
    console.log(lvbu+"向"+guanyu+"刺出六戟");
    Hp1=Hp1-lvji*Ad;
    console.log(guanyu+"被"+lvbu+"刺中"+lvji+"戟,掉了"+(lvji*Ad)+"血");

   if(Hp1<=2000&&Hp1>=1600){
    console.log(guanyu+"感受到了对手的强大，开始使出全力");
   }
     if(Hp<=4000&&Hp1>=3000){
    console.log(lvbu+"不敢再小觑对手，开始使出全力");
   }

    if(Hp1<=2000){
           var nuqi=parseInt(Math.random()*201+300);
           Hp=Hp-nuqi;
           console.log(guanyu+"猛然睁开双眼，大喝一声！向"+lvbu+"斩出一刀"+lvbu+"掉了"+nuqi+"血");
    }
    if(Hp<=4000){
           var nuqi2=parseInt(Math.random()*101+200);
            Hp1=Hp1-nuqi2;
            var nuqi3=parseInt(Math.random()*41+30);
            Hp=Hp-nuqi3;
            console.log(lvbu+"放弃防御，全力向关羽刺出一戟"+guanyu+"掉了"+nuqi2+"血，并且自己也掉了"+nuqi3+"血");
    }
     if(Hp1<=600&&Hp1>=300){
        var xueliang=parseInt(Math.random()*201+100);
        Hp1=Hp1+xueliang;
        console.log(guanyu+"在战斗中，看穿吕布的戟法，战意提升，血量增加"+xueliang);
     }
      if(Hp<=200&&Hp>=0){
        var xueliang1=parseInt(Math.random()*701+300);
        Hp=Hp+xueliang1;
        console.log(lvbu+"在濒死前，想起貂蝉，爆喝一声，血量增加"+xueliang1);
     }
      if(Hp<=100){
        var juesha=parseInt(Math.random()*101+100);
        Hp1=Hp1-juesha;
        console.log(lvbu+"濒死之际，向关羽刺出绝杀一戟");
      }
       if(Hp1<=100){
        var juesha1=parseInt(Math.random()*301+200);
        Hp=Hp-juesha1;
        console.log(guanyu+"濒死之际，向吕布斩出毙命一刀");
      }
    if(Hp1<=0&&Hp<=0){
        console.log("绝杀成功,双方英勇战死！");
        break;
    }
    if(Hp1<=0){
        console.log(guanyu+"绝杀失败，含恨而终，卒");
        break;
    } if(Hp<=0){
        console.log(lvbu+"绝杀失败，被斩于马下！卒");
        break;
    }
}