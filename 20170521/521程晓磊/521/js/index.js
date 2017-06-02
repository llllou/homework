var a="本拉登",hp="100000",gongji="400";
var b="奥巴马",hp1="110000",gongji1="4000";
while (true){
    console .log(b+"攻击了"+a+"一下");
    hp=hp-parseInt(Math.random()*(8000-4000+1)+4000);
    console.log(a+"的血量剩余"+hp);
    console .log(a+"攻击了"+b+"一下");
    console .log(a+"又攻击了"+b+"一下");
    console .log(a+"又特么攻击了"+b+"一下");
    hp1=hp1-parseInt(Math.random()*(800-400+1)+400);
    hp1=hp1-parseInt(Math.random()*(800-400+1)+400);
    hp1=hp1-parseInt(Math.random()*(800-400+1)+400);
    console.log(b+"的血量剩余"+hp1);
    if(hp<=0){
        console.log(a+"挂了");
        break;

    }else  if(hp1<=0){
        console.log(b+"挂了");
        break;
    }else  if(hp1<=5000){
        console.log(b+"的血量剩余"+hp1+"并且发动了技能加了一滴血");
        hp1+=1;
    }else  if(hp<=5000){
        console.log(a+"的血量不多了,并且发动了技能加了一滴血");
        hp1+=1;
    }
    }



