var itemHead=document.getElementsByClassName("item-head")[0];
var itemShow=document.getElementsByClassName("item")[0].getElementsByTagName("li");
new tool.ajax({
	"url":cat,
	"type": "GET",
    "dataType": "json",
    "success": function(response){
       	addTag(itemHead,"a","cat_name",response.data,"item-head-name");
        var kind=document.getElementsByClassName("item-head-name");		
			for (var n = 0; n < kind.length; n++) {
			kind[n].idx=n;
			kind[n].href="list.html?cat_id="+response.data[n].cat_id;
			}			
        },
    "error": function(message) {
      //
      console.log(message);
    }
});
new tool.ajax({
	"url":goods,
	"type":"GET",
	"dataType":"json",
	"success":function(response){
		var img=document.getElementsByClassName("item-img");
		var itemName=document.getElementsByClassName("item-name");
		var itemDetail=document.getElementsByClassName("item-detail")
		addImg(img,"goods_thumb",response.data);
		addText(itemName,"goods_name",response.data,true);
		addText(itemDetail,"goods_desc",response.data)
	},
	"error":function(message){
		console.log(message);
	}
});
var search =document.getElementsByName("search")[0];
var searchBtn = document.getElementById("search-btn");
searchBtn.onclick=function(){
 	tool.ajax ({
		"url":goods+"?search_text="+search.value,
		"type":"GET",
		"dataType":"json",
		"success":function(response){
			console.log(response);
			location.href="search.html?search_text="+search.value
		},
		"error":function(message){console.log(message)}
	})
 }
