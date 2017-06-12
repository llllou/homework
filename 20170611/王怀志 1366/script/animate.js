var lock=false;
function animate(obj,json,time,lastfun)
{
    var interval;
    var container={};
    var step={};
    var maxcount=0;
    var box={};
    var count=0;

    if(window.navigator.userAgent.indexOf("MSIE")==-1)
    {
        interval=5;
    }
    else
    {
        interval=50;
    }
    for(var k in json)
    {
        container[k]=parseFloat(fetch(obj,k));
        maxcount=time/interval;
        step[k]=(parseFloat(json[k])-container[k])/maxcount;
    };
    var timer;
    if(lock)
    {return};
    timer=setInterval(function () {
        lock=true;
        for(var k in json)
        {
            container[k]+=step[k];
            if (k=="opacity")
            {
                obj.style.opacity=container[k];
                obj.style.filter="alpha(opacity="+container[k]*100+")"
            }
            else
            {
                obj.style[k]=container[k]+"px";
            }
        };
        count++;
        if(count==maxcount){
            for(var k in json)
            {
                container[k]=json[k];
                if (k=="opacity")
                {
                    obj.style.opacity=container[k];
                    obj.style.filter="alpha(opacity="+container[k]*100+")"
                }
                else
                {
                    obj.style[k]=container[k]+"px";
                }
            };
            lock=false;
            clearInterval(timer);
        };
    },interval);
    //lastfun.call(obj);

};
function fetch(obj,property)
{
    if(window.getComputedStyle)
    {
        return getComputedStyle(obj)[property];
    }
    else{
        return obj,currentStyle[property]
    }
};

