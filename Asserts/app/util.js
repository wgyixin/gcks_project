
//解决IE 不支持 new Date()
function createDate(str){
    var daystr = str.substring(0,str.indexOf(' ')).split('-');

    var timestr = str.substring(str.indexOf(' ')+1,str.length).split(':');

//IE不兼容 new Date()
    var date = new Date(daystr[0],daystr[1]-1,daystr[2],timestr[0],timestr[1]);
    return date;
}
//将 日期格斯改为Long 去比较大小
function strToLong(str){
    str = str.replace(/-/g,'');
    str = str.replace(/:/g,'');
    str = str.replace(/ /g,'');
    return parseFloat(str);
}
//判断是包含特殊字符
function containSpecial( s )
{
    var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#) (\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/) (\<)(\>)(\?)(\)]+/);
    return containSpecial.test(s) ;
}

//解决  ActiveX 控件遮住 DIV弹出层


function createIframe_ActiveX(nowindex){


    var iframeBodyCover = document.createElement("iframe");
    iframeBodyCover.id = 'iframe_ActiveX';
    //注意需要设置display = block  否则无法消除 ActiveX控件的遮罩效果  同事设置透明opacity
    iframeBodyCover.style.cssText = "position:absolute;top:0;left:0;width:" + document.body.clientWidth
        + "px; height:" + document.body.clientHeight + "px;background-color:#000000;filter:alpha(opacity=0);opacity:0.1"; //display:none;filter:alpha(opacity=80);
    iframeBodyCover.src ="javascript:false;";         //filter:alpha(opacity=0)  为了支持IE8       opacity:0.1  IE10及各大浏览器都支持
    document.body.appendChild(iframeBodyCover);
        //iframe的z-index比div的要低
    $('#iframe_ActiveX').css('z-index',nowindex);
}
function removeIframe_ActiveX(){
//    $('#iframe_ActiveX').css('display','none');
//    $('#iframe_ActiveX').name = '';
    $('#iframe_ActiveX').remove();
}

