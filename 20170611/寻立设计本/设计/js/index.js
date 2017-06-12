var leftBtn = document.getElementById("leftBtn");
        var rightBtn = document.getElementById("rightBtn");
        var circlesLis = document.getElementById("circles").getElementsByTagName("li");
        var imagesList = document.getElementById("imagesList");
        var imagesListLis = document.getElementById("imagesList").getElementsByTagName("li");
        var img_idx = 0;
        rightBtn.onclick = function(){

            img_idx++; 

            if(img_idx>2){
                img_idx=0;
            }

            chengPic();
        }
       
        leftBtn.onclick = function(){
   
            img_idx--;

            if(img_idx<0){
                img_idx=2;
            }
            chengPic();
        }
        for(var i = 0;i<circlesLis.length;i++){
           
            circlesLis[i].index=i;
            circlesLis[i].onmouseover = function(){

                    img_idx = this.index;

                    chengPic();
                }

        }

        function chengPic(){

            for(var i = 0; i<imagesListLis.length;i++){
                imagesListLis[i].className = "";
            }

            imagesListLis[img_idx].className="current";


            for(var i=0;i<circlesLis.length;i++){

                circlesLis[i].className = "";

            }

            circlesLis[img_idx].className = "current";
        }
     var timer=setInterval(function(){
           img_idx++;

            if(img_idx>2){
                img_idx=0;
            }
            chengPic();
     },2000)

     imagesList.onmouseover=function(){
         clearInterval(timer)
     }
    imagesList.onmouseout=function(){
          clearInterval(timer);

          timer=setInterval(function(){
           img_idx++;

            if(img_idx>2){
                img_idx=0;
            }
            chengPic();
     },2000)

     }
