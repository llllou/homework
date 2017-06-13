/**
 * Created by llllou on 2017/6/12 0012.
 */
var area=document.getElementById("area");
var tank=document.getElementById("tank");
var bullet=[];
var tankX=tank.offsetLeft;
var tankY=tank.offsetTop;
var aim=1;
var count=0;
document.onkeydown=function(event) {
    event = event || window.event;
    (function move(){var dir = event.keyCode;
        console.log(dir);
        if (dir == 87) {
            tankY -= 14;
            tank.style.backgroundPosition = "-1px -112px";
            aim=1;
        }
        else if (dir == 65) {
            tankX -= 14;
            tank.style.backgroundPosition = "0 -197px";
            aim=2;
        }
        else if (dir == 83) {
            tankY += 14;
            tank.style.backgroundPosition = "-1px -168px";
            aim=3
        }
        else if (dir == 68) {
            tankX += 14;
            tank.style.backgroundPosition = "0 -142px";
            aim=4;
        }
        if (tankX >= area.offsetWidth - tank.offsetWidth) {
            tankX = area.offsetWidth - tank.offsetWidth
        }
        else if (tankX <= 0) {
            tankX = 0;
        }
        if (tankY >= area.offsetHeight - tank.offsetHeight) {
            tankY = area.offsetHeight - tank.offsetHeight
        }
        else if (tankY <= 0) {
            tankY = 0;
        }
        tank.style.left = tankX + "px";
        tank.style.top = tankY + "px"})()
    if(event.keyCode==74) {
        (function shoot() {
            if (aim == 1) {
                bullet[count]=document.createElement("span");
                area.appendChild(bullet[count]);
                //bullet[count].id="b"+count;
                bullet[count].className="bullet";
                bullet[count].style.left=(tankX+9)+"px";
                bullet[count].style.top=(tankY-13)+"px";
                var up;
                var upShoot=bullet[count].offsetTop;
                var container=bullet[count];
                up=setInterval(
                    function(){upShoot-=4;
                        if(upShoot<=0)
                        {
                            clearInterval(up);
                            area.removeChild(container);
                        };
                        container.style.top=upShoot+"px"}
                ,5);
                count++;
            }
            if (aim == 2) {
                bullet[count]=document.createElement("span");
                area.appendChild(bullet[count]);
                bullet[count].className="bullet";
                bullet[count].style.left=(tankX-12)+"px";
                bullet[count].style.top=(tankY+10)+"px";
                var left;
                var leftShoot=bullet[count].offsetLeft;
                var container=bullet[count];
                left=setInterval(
                    function(){leftShoot-=4;
                        if(leftShoot<=0)
                        {
                            clearInterval(left);
                            area.removeChild(container);
                        }
                        container.style.left=leftShoot+"px"}
                    ,5);
                count++;
            }
            if (aim == 3) {
                bullet[count]=document.createElement("span");
                area.appendChild(bullet[count]);
                bullet[count].className="bullet";
                bullet[count].style.left=(tankX+9)+"px";
                bullet[count].style.top=(tankY+30)+"px";
                var down;
                var downShoot=bullet[count].offsetTop;
                var container=bullet[count];
                down=setInterval(function(){downShoot+=4;
                    if(downShoot>=area.offsetHeight)
                    {
                        clearInterval(down);
                        area.removeChild(container);
                    }
                    container.style.top=downShoot+"px"},5);

                count++;
            }
            if (aim == 4) {
                bullet[count]=document.createElement("span");
                area.appendChild(bullet[count]);
                bullet[count].className="bullet";
                bullet[count].style.left=(tankX+30)+"px";
                bullet[count].style.top=(tankY+10)+"px";
                var right;
                var rightShoot=bullet[count].offsetLeft;
                var container=bullet[count];
                right=setInterval(function(){rightShoot+=4;
                    if(rightShoot>=area.offsetWidth)
                    {
                        clearInterval(right);
                        area.removeChild(container);
                    }
                    container.style.left=rightShoot+"px"},5);
                count++;
            }
        })()
    }
    function fire()
    {
        switch (aim)
        {
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
        }
    }
}