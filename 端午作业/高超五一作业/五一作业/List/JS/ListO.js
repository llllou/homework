 var OneListlis=document.getElementById("OneList").getElementsByTagName("li");
 var TwoListlis=document.getElementById("TwoList").getElementsByTagName("li");


 for(var i=0;i<OneListlis.length;i++) {
     OneListlis[i].index = i;
     OneListlis[i].onmouseover = function () {
         for (var j = 0; j < OneListlis.length; j++) {
             OneListlis[j].className = "";
             TwoListlis[j].className = "";
             // TwoListlis[j].style.display="none";

         }
         this.className = "OneList-One";
         TwoListlis[this.index].className = "TwoList-One";
         TwoListlis[this.index].style.visibility = "visible";

     };
     OneListlis[i].onmouseout = function () {
         for (var j = 0; j < OneListlis.length; j++) {
             OneListlis[j].className = "";
             TwoListlis[j].className = "";
             TwoListlis[j].style.visibility = "hidden";
         }

     };
 }
for(var z=0; z<TwoListlis.length;z++){
        TwoListlis[z].index=z;
    TwoListlis[z].onmousemove = function () {
        for (var j = 0; j < TwoListlis.length; j++) {
            this.style.visibility="visible";
            OneListlis[this.index].className="OneList-One"
        }
    };
    TwoListlis[z].onmouseout=function () {
        this.style.visibility="hidden";
        OneListlis[this.index].className=""
    }
}

