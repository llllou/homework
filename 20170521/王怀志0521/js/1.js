alert("luck battle start!!")
var p1=prompt("请输入一号角色名字","");
var p2=prompt("请输入二号角色名字","");
function d20()
{
	return parseInt(Math.random()*20+1)
};
function d6()
{
	return parseInt(Math.random()*6+1)
};

var atk1=1+d20(),atk2=d20()+1,agi1=d6()+1,agi2=1+d6(),str1=5*d20(),str2=5*d20(),def1=1+d6(),def2=1+d6();
console.log(p1+"属性为：\nATK:"+atk1+"\nSTR:"+str1+"\nDEF:"+def1+"\nAGI:"+agi1);
console.log(p2+"属性为：\nATK:"+atk2+"\nSTR:"+str2+"\nDEF:"+def2+"\nAGI:"+agi2);
do
{
	if (agi1>=agi2) 
	{
		if(agi1+d20()>=12)
		{
		str2=str2-atk1*(1-def2/10);
		console.log(p1+"发动了攻击，造成了"+atk1*(1-def2/10)+"点伤害");
		console.log(p1+"HP:"+str1);
		console.log(p2+"HP:"+str2);
		if (str2<=0)
			{
				console.log(p1+"胜利了");
				break;
			}	
		}
		else{console.log(p1+"的攻击落空了")};
		if(agi2+d20()>=12)
		{
		str1=str1-atk2*(1-def1/10);
		console.log(p2+"发动了攻击，造成了"+atk2*(1-def1/10)+"点伤害");
		console.log(p1+"HP:"+str1);
		console.log(p2+"HP:"+str2);
		if (str1<=0)
			{
				console.log(p2+"胜利了");
				break;
			}	
		}
		else{console.log(p2+"的攻击落空了")};
		
	}
	else
	{
		if(agi2+d20()>=12)
		{
		str1=str1-atk2*(1-def1/10);
		console.log(p2+"发动了攻击，造成了"+atk2*(1-def1/10)+"点伤害");
		console.log(p1+"HP:"+str1);
		console.log(p2+"HP:"+str2);
		if (str1<=0)
			{
				console.log(p2+"胜利了");
				break;
			}	
		}
		else{console.log(p2+"的攻击落空了")};
		if(agi1+d20()>=12)
		{
		str2=str2-atk1*(1-def2/10);
		console.log(p1+"发动了攻击，造成了"+atk1*(1-def2/10)+"点伤害");
		console.log(p1+"HP:"+str1);
		console.log(p2+"HP:"+str2);
		if (str2<=0)
			{
				console.log(p1+"胜利了");
				break;
			}	
		}
		else{console.log(p1+"的攻击落空了")};
	}
}
while(true);