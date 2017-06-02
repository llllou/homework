/* 铠甲勇士炎龙大战风鹰*/
  var yingxiong1 = "风鹰侠",HP=10000,gongjili=600; 
  var yingxiong2 = "炎龙侠",HP1=8000,gongjili1=700; 
  while(true){
                console.log(yingxiong1+"攻击了"+yingxiong2);
                HP1=HP1-gongjili;
                console.log(yingxiong2+"的HP减少了"+gongjili);
                if(HP1<=3000){
                    console.log("风鹰侠·发动必杀技能：穿风刺(风鹰侠之穿风刺贴，斩妖除魔，破于疾风)");
                    HP1+=100;
                }
                console.log(yingxiong2+"攻击了"+yingxiong1);
                HP=HP-gongjili1;
                console.log(yingxiong1+"的HP减少了"+gongjili1);
                if(HP<=3000){
                    console.log("炎龙侠·发动必杀技能：封魔斩(炎龙侠之封魔斩贴，降妖化兽，止于瞬间)");
                    HP1+=100;   
                 }
                if(HP<=0){
                    console.log(yingxiong1+"失败了！(五行相克·火克木)");
                    break;
                }
                if(HP1<=0){
                    console.log(yingxiong2+"失败了！");
                    break;
                }
            }