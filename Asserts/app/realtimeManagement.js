/**
 * Created by wang on 14-3-26.
 */
/*
 视频管理
 */
var isLogOcx = 0 ;

var realtimeMenu = App.HeaderMenu.create({
	id: 'realtime',
	name: '视频监控',
	hrefTo: 'realtime'
});

headerMenus.pushObject(realtimeMenu);
App.Tour = Ember.Object.extend({
    tour_name:Ember.string,
    tour_id:Ember.number,
    tour_descp:Ember.string,
    tourIpcList:[]

});
App.TourIpc = Ember.Object.extend({
   sid:Ember.string,
   name:Ember.string,
   index:Ember.number,
   plan_id:Ember.string
});

App.TourIpcForEdit = Ember.Object.extend({
    ipc_sid:Ember.string,
    name:Ember.string,
    index:Ember.number,
    plan_id:Ember.string
});

App.RealtimeRoute = Ember.Route.extend({
	templateName: 'template/video/realtime',
    model:function(){
//
//        var url = '/gcks.video/api/v1/resource/ipcslist';
//        var me = this;
//        return getJSON(url).then(function(data){
//            var list = [];
//            $(data).each(function(index, value) {
//                var ipc = App.Ipc.create({
//                    sid: value.sid,
//                    name:value.name,
//                    area_id: value.area_id,
//                    area_name: value.area_name,
//                    position_x: value.position_x,
//                    position_y: value.position_y,
//                    factory: value.factory,
//                    ipcModel: value.model,
//                    startTime: value.startTime !=null ?value.startTime.toString().substring(0, 16).replace(/T/g, ' ') : ' ', //.replace(/-/g,'/'),
//                    installTime: value.installTime!= null? value.installTime.toString().substring(0, 16).replace(/T/g, ' ') : ' ', //.replace(/-/g,'/'),
//                    descp:value.descp,
//                    ip_addr:value.ip_addr,
//                    reg_name:value.reg_name,
//                    protocol:value.protocol,
//                    is_live:value.is_live
//                });
//
//                list.pushObject(ipc);
//            });
//            return list;
//        },function(errorStatus){
//            if (errorStatus == 401)
//                me.transitionTo('login');
//            else
//                me.transitionTo('errorpage');
//        });



    },
    actions:{
        willTransition: function(transition) {
            this.controller.send('reset');
        }
    }

});


App.RealtimeView = Ember.View.extend({
	didInsertElement: function() {
		elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
		$("#realtime").addClass('active');

        //展示ipc列表框大小
        $('.ipc-resource-div').css('height',$(window).height()*0.58);
        $(window).resize(function() {
            $('.ipc-resource-div').css('height',$(window).height()*0.58);
        });

        //为轮巡选择框加上事件
        var me = this;
        $('#lunxun_selector').change(function() {
            me.controller.send('removeIpcInTour');
        });
        //预案选择框加上事件
        $('#yuan_selector').change(function() {
            me.controller.send('setCurrentTour');
        });



        //控件登录
        //因为要等待界面中 OCX控件加载完成，所以初始化需要延迟一会加载 , init()必须在外面在包一层function 才行，不然又没了？？？？？
		//其实只要传递方法名就好的。。
//        Ember.run.later(this,function(){Init();},100);

		Ember.run.later(this,Init,100);
//        //默认登陆
//        Ember.run.later(this,Login,100);


        $(document).ready(function(){
            Login();
        });


        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();

    }
});
var startFunc;
var startTimeOut;
App.RealtimeController = Ember.ArrayController.extend({
    ipcList:[],

    ptzRule:Ember.computed(function(){
        return $.cookie('/PTZ') == 'true';
    }),
    videoRule:Ember.computed(function(){
        return $.cookie('/videoMonotor') == 'true';
    }),
    //轮巡预案相关的
    curTour:null,
    ipcTourList:[],//一次轮巡中的ipc
    tourList:[], //预案列表
    isSelected_Tour:(function(){  //是否选择了预案
        if(this.get('curTour') == null)
            return false;
        else
            return true;
    }).property('curTour'),
    idaddtourAndIpc:false, //是否新增预案   同时添加ipc
    actions:{
        reset:function(){
            this.set('search_ipc','');
            this.set('search_area','');
            this.set('ipcList',[]);
            this.set('curTour',null);
            this.set('ipcTourList',null);
            this.set('isSelected_Tour',false);
            console.log('logout ocx');
            Ocx.Logout();
        },
        playRealVideo:function(ipc){
            var is_lunxun = $('input[name=is_lunxun]').is(':checked');
            if(this.get('videoRule')){
                if( ipc.is_live){
                    $('ul.main-menu li.active').removeClass('active');
                    $('#'+ipc.sid).addClass('active');
                    if(is_lunxun)
                        this.get('ipcTourList').pushObject(ipc);
                    else
                         PlayRealVideo(ipc.sid,ipc.sid,ipc.name);

                }
            }else
               alert('抱歉，您没有实时监控的权限！');


        },
        removeIpcInTour:function(){
//            var lunxun = $('#lunxun_selector').val();
            var me = this;
//            $(lunxun).each(function(index, value) {
//                var ipc = me.get('ipcTourList').findBy('name', value);
//                console.log(me.get('ipcTourList').indexOf(ipc));
//                me.get('ipcTourList').removeAt(me.get('ipcTourList').indexOf(ipc));
////                me.get('ipcTourList').removeObject(ipc);
//
//            });


            var lunxun = $("#lunxun_selector").get(0).options;
            for (var i = 0; i < lunxun.length; i++) {
                if(lunxun[i].selected)
                    me.get('ipcTourList').removeAt(i);

            }

        },
        saveAsTour:function(){

            if(this.get('curTour') == null){
//                if(Ember.View.views['tour_name'].get('tooltipDiv'))
//                    Ember.View.views['tour_name'].removeTooltip();
//
//                var nowindex =  $('#addTour').css('z-index');
//                $('#addTour').css('z-index',nowindex+1);
//                //加一个iframe以遮住ActiveX
//                createIframe_ActiveX(nowindex);
//                $('#addTour').modal('show');
//                this.send('validateAddTour');
            this.set('idaddtourAndIpc',true);
                this.send('beforeAddTour');
            }else{
                this.send('editTour');
            }

        },
        beforeAddTour:function(){

            if(Ember.View.views['tour_name'].get('tooltipDiv'))
                Ember.View.views['tour_name'].removeTooltip();
            this.set('tour_name','');
            this.set('tour_descp','');

            var nowindex =  parseInt($('#addTour').css('z-index'));
            $('#addTour').css('z-index',nowindex+1);
            //加一个iframe以遮住ActiveX
            createIframe_ActiveX(nowindex);
            $('#addTour').modal('show');

//            this.send('addTour');
        },
        removeIframe_ActiveX:function(){
            $('#addTour').modal('hide');
            //删除该iframe
            removeIframe_ActiveX();
        },
        validateAddTour:function(){
            var validateion = true;
            var name = this.get('tour_name');
            //用户组名
            if(name == null || name =='' || name==undefined){
                validateion = false;

                Ember.View.views['tour_name'].addTooltip('预案名不能为空');
            }
            else if(name.length>10){
                validateion = false;
                Ember.View.views['tour_name'].addTooltip('预案名长度不大于10个字符');
            }
            else if(containSpecial(name)){
                validateion = false;
                Ember.View.views['tour_name'].addTooltip('预案名不能包含特殊字符');
            }
            else{
                if(Ember.View.views['tour_name'].get('tooltipDiv'))
                    Ember.View.views['tour_name'].removeTooltip();
            }
            if(validateion)
                this.send('addTour');


        },
        addTour:function(){
            var tour_name = this.get('tour_name');
            var tour_descp = this.get('tour_descp');
            var split_count = GetWndNum(); //分屏数
            var url = "/gcks.video/api/v1/plan/tours";
            var data = JSON.stringify({
               "tour":{
                   "plan_name":tour_name,
                   "descp":tour_descp,
                   "split_count":split_count
               }
            });
            var me = this;
            postJSON(url,data).then(function(json){
                if( typeof json.result == "number"){
                    var tour = App.Tour.create({
                        tour_name:tour_name,
                        tour_id:json.result,
                        tour_descp:tour_descp,
                        split_count:split_count,
                        tourIpcList:[]
                    });
                    me.get('tourList').pushObject(tour);

                    if(me.get('idaddtourAndIpc'))
                        me.send('editTour',tour.tour_id);
                    me.send('removeIframe_ActiveX');
                }else if(json.result == "repeat plan_name"){
                    Ember.View.views['tour_name'].addTooltip('预案名已存在');
                }else{
                    alert('操作失败，请重新操作！');
                    me.send('removeIframe_ActiveX');
                }

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

        },
        editTour:function(tour_id){
            if(tour_id == undefined)
                tour_id = this.get('curTour').tour_id;
            var  url = "/gcks.video/api/v1/plan/tour_ipc/"+tour_id;
            var me = this;
            var postIpcList = [];
            $(this.get('ipcTourList')).each(function(index,value){
                var ipc  = App.TourIpcForEdit.create({
                    ipc_sid:value.sid,
//                    name:value.name,
                    index:index+1,
                    plan_id:tour_id
                });
                postIpcList.pushObject(ipc);
            });
            var data = "{"+"tour_ipc:"+JSON.stringify(postIpcList)+"}";
            putJSON(url,data).then(function(json){
                if(json)
                    alert('操作成功');
                else
                    alert('操作失败');
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });



        },
        setCurrentTour:function(){
            var yuan = $("#yuan_selector").get(0).options;
            for (var i = 0; i < yuan.length; i++) {
                if(yuan[i].selected){
                    this.set('curTour',this.get('tourList').objectAt(i));
                    this.set('ipcTourList',this.get('curTour').tourIpcList);
                    break;
                }
            }
        },
        deSelectTour:function(){
            this.set('curTour',null);
            $('#yuan_selector').val('');
            this.set('ipcTourList',[]);
        },
        deleteTour:function(){
          var url = "/gcks.video/api/v1/plan/tours/"+ this.get('curTour').tour_id;
          var me = this;
           deleteJSON(url).then(function(json){

               if(json){
                   me.get('tourList').removeObject(me.get('curTour'));
                   me.send('deSelectTour');
                   alert('删除成功！');
               }

               else
                alert('删除失败');
           },function(errorStatus){
               if (errorStatus == 401)
                   me.transitionToRoute('login');
               else
                   me.transitionToRoute('errorpage');
           });
        },
        getTourList:function(){

            this.set('idaddtourAndIpc',false);  //只是新增 预案  不包含IPC
          var url = "/gcks.video/api/v1/plan/tour_ipc";
          var me = this;
          getJSON(url).then(function(data){

              me.get('tourList').clear();
              $(data).each(function(index,value){
                  var tour = App.Tour.create({
                      tour_name:value.tour.plan_name,
                      tour_id:value.tour.plan_id,
                      tour_descp:value.tour.descp,
                      split_count:value.tour.split_count,
                      tourIpcList:[]
                  });
                  $(value.tour_ipc).each(function(index,value){
                     var ipc = App.TourIpc.create({
                            sid:value.ipc_sid,
                            name:value.ipc_name,
                            index:value.index,
                            plan_id:tour.tour_id
                     }) ;
                      tour.get('tourIpcList').pushObject(ipc);
                  });
                  me.get('tourList').pushObject(tour);
              });
          },function(errorStatus){
              if (errorStatus == 401)
                  me.transitionTo('login');
              else
                  me.transitionTo('errorpage');
          });
        },
        //开始轮巡
        startTour:function(){
            console.log("============开始轮巡===========");
            var interval_time = $('#interval-time').val();
            var split_count = GetWndNum();//当前分屏数
            var length = this.get('ipcTourList').length;
            var nCount = 0; //元素下标
            var times = 1; //当 下标小于length 时，能进行的轮巡次数
            var me = this;


            //第一次轮巡 立即开始 不做等待
            for(; nCount < times*split_count && nCount < length; nCount++){
                console.log('元素下标：'+nCount+" ; 分屏窗口： "+ (nCount%split_count));
                var ipc = me.get('ipcTourList').objectAt(nCount);
                PlayRealVideoEx(ipc.sid,ipc.sid,ipc.name,nCount%split_count);
            }
            if(nCount >= length){
                nCount = 0;
                times = 1;
            }else{
                times++;
            }
            //之后每隔 间隔时间 后轮巡
            startFunc = setInterval(function(){
                  for(var i = 0; nCount < times*split_count && nCount < length; nCount++,i++){
                      console.log('元素下标：'+nCount+" ; 分屏窗口： "+ (nCount%split_count));
                      var ipc = me.get('ipcTourList').objectAt(nCount);
                      PlayRealVideoEx(ipc.sid,ipc.sid,ipc.name,nCount%split_count);
                    }
                    //切换轮巡的摄像头后， 需要将  本次轮巡中 没有播放视频的窗口的 视频停掉。以免还在播放之前的视频
                        //如果 本次仍需要播放视频的话  不用调用这个方法。因为 每次请求前会先停止视频
                   for(; i < split_count;i++ ){

                       StopRealVideo(i);
                   }
                    if(nCount >= length){
                        nCount = 0;
                        times = 1;
                    }else{
                        times++;
                    }
                },1000*interval_time);

        },

        //结束轮巡
        endTour:function(){

            clearInterval(startFunc);
            var split_count = GetWndNum();//当前分屏数
            for(var i=0; i< split_count;i++ ){
                StopRealVideo(i);
            }
            console.log("============结束轮巡===========");
        },
        searchIpc:function(){
            var search_ipc = this.get('search_ipc');
            var search_area = this.get('search_area');
            var url = '/gcks.video/api/v1/search/ipcs/';
            if(search_ipc&&search_area)
                url+="byareaandname/"+encodeURI(search_area)+"/"+encodeURI(search_ipc);//+"/"+encodeURI($.cookie('username'));
            else if(search_area)
                url+= "byarea/"+encodeURI(search_area);//+"/"+encodeURI($.cookie('username'));
            else if(search_ipc)
                url+="byname/"+encodeURI(search_ipc);//+"/"+encodeURI($.cookie('username'));
            else
                url = "/gcks.video/api/v1/resource/ipcs";//+encodeURI($.cookie('username'));

            var me = this;
            getJSON(url).then(function(data){
                me.get('ipcList').clear();
                $(data).each(function(index, value) {
                    var ipc = App.Ipc.create({
                        sid: value.sid,
                        name:''+value.name, //402 会被认为是数字 在filterBy的时候无法找到。但是0420则不会
                        area_id: value.area_id,
                        area_name: value.area_name,
                        position_x: value.position_x,
                        position_y: value.position_y,
                        factory: value.factory,
                        ipcModel: value.model,
                        startTime: value.startTime !=null ?value.startTime.toString().substring(0, 16).replace(/T/g, ' ') : ' ', //.replace(/-/g,'/'),
                        installTime: value.installTime!= null? value.installTime.toString().substring(0, 16).replace(/T/g, ' ') : ' ', //.replace(/-/g,'/'),
                        descp:value.descp,
                        ip_addr:value.ip_addr,
                        reg_name:value.reg_name,
                        protocol:value.protocol,
                        is_live:value.is_live
                    });
                    me.get('ipcList').pushObject(ipc);
                });
                me.set('ipcList',me.get('ipcList').sortBy('is_live').reverse());
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionTo('login');
                else
                    me.transitionTo('errorpage');
            });

        }

    }

});

function Init() {
    //设置控件操作模式 0：实时预览 1：历史回放

    Ocx.SetMode(0);

    //设置控件大小

    //根据浏览器大小改变窗口大小
//    Ocx.SetWndRect(  $(window).width()*0.65 , $(window).height()*0.7);
//    $(window).resize(function() {
//        Ocx.SetWndRect(  $(window).width()*0.65 , $(window).height()*0.7);
//    });
    //根据父div大小  改变窗口大小
    Ocx.SetWndRect(  $('#play').width() , $(window).height()*0.65);
    $(window).resize(function() {
        Ocx.SetWndRect(   $('#play').width() , $(window).height()*0.65);
    });


}

/*
控件的操作控制*/

/* 设置控件分屏数 */
function SetPlayWndNum(Num) {
    if (Num == 0) {
        Ocx.SetWndMax();
    }
    else {
        Ocx.SetPlayWndNum(Num);
    }
}

/* 登录 */
function Login() {
    var url = "/gcks.video/api/v1/user/clientInfo";//+ $.cookie('username');
    var sServerIp = "10.7.100.31";
    var sServerPort ="5060";// $('#ServerPort').val();
    var sServerCode = "44030300002000000000";//$('#ServerCode').val();
    var sClientCode = "44030300004000000101";//$('#ClientCode').val();
    var sClientPass = "12345678";//$('#ClientPass').val();
//    Ocx.SetConfig(sServerIp, sServerPort, sServerCode, sClientCode, sClientPass);

    getJSON(url).then(function(data){
        sServerIp = data.cn.ip;
        sServerPort = data.cn.port;
        sServerCode = data.cn.sid;
        sClientCode = data.user.client_id;
        sClientPass = data.user.client_password;
//        alert('sServerIp='+sServerIp+"sServerPort="+sServerPort+"sServerCode="+sServerCode+"sClientCode="+sClientCode+"sClientPass="+sClientPass);
        Ocx.SetConfig(sServerIp, sServerPort, sServerCode, sClientCode, sClientPass);
        isLogOcx ++;

    },function(errorStatus){
        if (errorStatus == 401)
            this.transitionToRoute('login');
        else
            this.transitionToRoute('errorpage');
    });



}

/* 播放实时视频 */
function PlayRealVideo(CamCode, ForwardCode, CamName) {
    //第一次点击登录
//    if(isLogOcx == 0)
//         Login();

    Ocx.PlayRealVideo(CamCode, ForwardCode, CamName);
//    Ocx.PlayVodVideo('44030300001320000402', '44030300001320000402','2014-06-26T16:53:04' , '2014-06-26T17:53:04');
}
//轮巡播放视频
function PlayRealVideoEx (CamCode, ForwardCode, CamName, WndIndex){
    Ocx.PlayRealVideoEx(CamCode, ForwardCode, CamName, WndIndex);
}

//停止视频
function StopRealVideo(i){
    Ocx.StopRealVideo(i);
}

/* 云台控制 */
function PTZControl(Type) {
    var Speed;
    var SpeedStr = $('#sel').val();
    if (SpeedStr.indexOf(",") > 0) {
        Speed = SpeedStr.split(",");
    }
    Ocx.PTZControl(Type, Speed[0], Speed[0], Speed[1]);
}

/* 停止预览 */
//function StopRealVideo() {
//    var Num = Ocx.StopRealVideo();
//    var Msg = "当前分屏数：" + Num;
//    alert(Msg);
//}

/* 获得窗口号  分屏数*/
function GetWndNum() {
    var Num = Ocx.GetWindowNum();
    if (Num == 7) {
        Num = 6;
    }
    var Msg = "当前分屏数：" + Num;
    return Num;
}

/* 获得当前操作窗口 */
function GetSelWnd() {
    var Num = Ocx.GetSelWnd();
    var Msg = "当前操作窗口：" + Num;
    alert(Msg);
}

/* 设置当前选择窗口 */
function SetSelWnd(Num) {
    Ocx.SetSelWnd(Num);
}

/* 获得当前窗口通道编码 */
function GetCamCodeOfWnd() {
    var Num = Ocx.GetSelWnd();
    var Code = Ocx.GetCamCodeOfWnd(Num);
    var Msg = "当前窗口通道编码：" + Code;
    alert(Msg);
}

//云台控制
function testYuntai(msg){
    alert(msg);
}


