function game()
{var min=0;
var max=100;
var mine=parseInt(Math.random()*101)
do
{
	a=parseInt(prompt("请您输入一个"+min+"到"+max+"的数字",""));
	if(a>min&&a<mine)
		{min=a}
	else if(a>mine&&a<max){max=a}
	else if(a==mine){
		alert("boom!!");
		break;
	}
	else{alert("请不要超限")}
}
while(true)}
game();