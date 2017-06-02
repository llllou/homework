window.onload = function(){
    function pic(){
        var disBtn = document.getElementById("disBtn");
        var ctrl = document.getElementById("ctrl");
        var ctrlBtn = document.getElementsByTagName("input");
        var img = document.getElementsByTagName("img");
        var count = 1;
        console.log(ctrlBtn[0]);
        
        disBtn.onclick = function(){
            if(count){
                disBtn.value = "隐藏";
                ctrl.style.display = "block";
                count --;
            }else{
                disBtn.value = "显示";
                ctrl.style.display = "none";
                count ++;
            }
        }

        ctrlBtn[1].onclick = function(){
            img[0].style.width = "500px";
        }
        ctrlBtn[2].onclick = function(){
            img[0].style.width = "600px";
        }
        ctrlBtn[3].onclick = function(){
            img[0].style.width = "700px";
        }
        ctrlBtn[4].onclick = function(){
            img[0].style.width = "800px";
        }
        ctrlBtn[5].onclick = function(){
            img[0].style.height = "300px";
        }
        ctrlBtn[6].onclick = function(){
            img[0].style.height = "400px";
        }
        ctrlBtn[7].onclick = function(){
            img[0].style.height = "500px";
        }
        ctrlBtn[8].onclick = function(){
            img[0].style.height = "600px";
        }
        ctrlBtn[9].onclick = function(){
            img[0].style.height = "700px";
        }
        ctrlBtn[10].onclick = function(){
            img[0].style.width = "400px";
            img[0].style.height = "200px";
        }
    }
    pic();
}