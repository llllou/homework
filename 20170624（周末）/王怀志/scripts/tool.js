function addTag(obj,tag,content,json,tagclass){
	for (var i = 0; i < json.length; i++) {
		var addContent=json[i][content];
    var child=document.createElement(tag);
    child.className=tagclass||"";
		obj.appendChild(child);
		var addTag=obj.getElementsByTagName(tag);
		addTag[i].innerHTML=addContent;
	}}
function addText(obj,content,json,href){
  for (var i = 0; i < json.length; i++) {
    var addContent=json[i][content];
    if (href){obj[i].href="detail.html?goods_id="+json[i]["goods_id"]}
    try{obj[i].innerHTML=addContent;}catch(err){return};
  }};
function addImg(obj,content,json){
  for (var i = 0; i < json.length; i++) {
    var addContent=json[i][content];
    try{obj[i].src=addContent;}catch(err){return};
  }};
tool={
	ajax:function(options){var url = options.url;
    if (url === undefined) {
      throw new Error('ajax一定要传URL');
      return;
    }
    this.response=null;
    var type = options.type || 'GET';
    var dataType = options.dataType || 'string';
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open(type, url);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          if ((typeof options.success) === 'function') {
            var response = '';
            if (dataType === 'string') {
              response = xhr.responseText;
            } else if(dataType === 'json') {
              response = JSON.parse(xhr.responseText);              
            }
            options.success(response);
          }
        } else {
          if ((typeof options.error) === 'function') {
            options.error(xhr.responseText);
          }
        }
      }
    }
  },
  getQueryString:function(name){
    var search = location.search.substr(1);
    var reg=new RegExp('(^|&)*'+name+'([^&]*)(&|$)*');
    decodeURI(search) ;
    var r=search.match(reg);
    if (r===null) {return null} else {return decodeURI(r[2])}
  }
}
var cat='http://h6.duchengjiu.top/shop/api_cat.php';
var goods='http://h6.duchengjiu.top/shop/api_goods.php';