/**
 * Created by wang on 14-4-24.
 */
/*
 视频管理
 */

var historyVideoMenu = App.HeaderMenu.create({
    id: 'history',
    name: '历史视频',
    hrefTo: 'history'
});

headerMenus.pushObject(historyVideoMenu);
App.Video = Ember.Object.extend({
   codec:Ember.string,
   dataTime:Ember.string,
   endTime:Ember.string,
   ipc_name:Ember.string,
   name:Ember.string,
   size:Ember.long

});


/**
 * video management
 * @type {*|void|Object}
 */
App.HistoryRoute = Ember.Route.extend({
    templateName: 'template/history/history',

    model:function(){

        var url = '/gcks.video/api/v1/resource/ipcs';//+encodeURI($.cookie('username'));
        var me = this;
        return getJSON(url).then(function(data){
            var list = [];
            $(data).each(function(index, value) {
                var ipc = App.Ipc.create({
                    sid: value.sid,
                    name:value.name,
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

                list.pushObject(ipc);
            });


            return list;

        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionTo('login');
            else
                me.transitionTo('errorpage');
        });



    },
    actions:{
        willTransition: function(transition) {
            this.controller.send('reset');
        }

    }

});

App.HistoryController = Ember.ArrayController.extend({
    content: [],

    page: 1,
    perPage: 10,
    count: 0, //继续请求10页,请求第几个10页,从0开始编码

    curIpc:null,

    currentTotalCounts:(function(){
        return this.get('videoDatas').length;
    }).property('videoDatas.length'),//当前加载的总数目


    totalPages: (function() {
        return Math.ceil(this.get('videoDatas').length / this.get('perPage'));
    }).property("videoData.length", 'perPage'),


    paginatedContent: (function() {
        var start;
        if (this.get('page') <= 10)
            start = (this.get('page') - 1) * this.get('perPage');
        else
            start = (this.get('page') - this.get('count') * 10 - 1) * this.get('perPage');
        var end = start + this.get('perPage');

/*
        var filter_ipc = this.get('filter_ipc');

        //过滤   test不支持中文，使用indexOF
        if (filter_ipc) {
            var filterarray = this.get('model').filter(function(item) {
                //                var nameReg = new RegExp(filter_name);
                //                return  nameReg.test(item.name);
                return item.ipc_sid.indexOf(filter_ipc) > -1;
            });

            //重新设置页码
            this.set('totalPages', Math.ceil(filterarray.length / this.get('perPage')));
            return filterarray.slice(start, end);
        } else {
            this.set('totalPages', Math.ceil(this.get('model').length / this.get('perPage')));
            return this.get('model').slice(start, end);
        }
*/
        this.set('totalPages', Math.ceil(this.get('videoDatas').length / this.get('perPage')));
        return this.get('videoDatas').slice(start, end);

    }).property('page','perPage', 'totalPages', 'count', 'videoDatas.[]', 'videoDatas.length'),//.property('page', 'totalPages', 'count', 'model.[]', 'filter_ipc'),


//    paginatedContent:(function(){
//        var start;
//        if (this.get('page') <= 10)
//            start = (this.get('page') - 1) * this.get('perPage');
//        else
//            start = (this.get('page') - this.get('count') * 10 - 1) * this.get('perPage');
//        var end = start + this.get('perPage');
//
//
//
//            var list_record = [];
//            var url_record = '/gcks.video/api/v1/video/records?beginRCount=0&pageCount=10';
//            getJSON(url_record).then(function(json){
//                $(json).each(function(index, value) {
//                    var video = App.Video.create({
//                       codec:value.codec,
//                        dataTime:value.dataTime,
//                       name:value.name,
//                       ipc_name:value.ipc_name,
//                       size:value.size
//                    });
//                    list_record.pushObject(video);
//                });
//
//            },function(errorStatus){
//                if (errorStatus == 401)
//                    me.transitionTo('login');
//                else
//                    me.transitionTo('errorpage');
//            });
//           return list_record;//.slice(start, end);
//
//    }).property('page','totalPage','count','curIpc'),

    isVideoOk:false,

    //因为 历史视频model中获取的ipc列表，所以，关于历史视频的页码只能另外算，和之前的不一样
    videoDatas:(function(){
        this.set('count',0);
        this.set('page',1);
        var me = this;

        var url_record ;
        if(this.get('curIpc') == null){
            url_record = '/gcks.video/api/v1/video/records?beginRCount=0&pageCount=10';
        }
        else
        {
            url_record = '/gcks.video/api/v1/video/records/'+this.get('curIpc.sid')+'?beginRCount=0&pageCount=10';
        }
        var list = [];
         getJSON(url_record).then(function(json){

            $(json).each(function(index, value) {
                var video = App.Video.create({
                    codec:value.codec,
                    dataTime:value.dataTime,
                    endTime:value.endTime,
                    name:value.name,
                    ipc_name:value.ipc_name,
                    size:value.size
                });
                list.pushObject(video);
            });

             me.set('isVideoOk',true);


        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionTo('login');
            else
                me.transitionTo('errorpage');
        });
        return list;

    }).property('curIpc'),

    actions: {
        reset:function(){
            this.set('page',1);
            this.set('count',0);
            this.set('search_ipc','');
            this.set('search_area','');
            this.set('search_startTime','');
            this.set('search_endTime','');

            this.set('isVideoOk',false);
        },

        selectPage: function(number) {
            this.set('page', number);
        },
        loadIpcVideo:function(ipc){
//            this.set('curIpc',ipc);
            $('ul.main-menu li.active').removeClass('active');
            if(ipc == 'null'){
                //全部视频
                this.set('curIpc',null);
                $('#all_video').addClass('active');
            }
            else{
                this.set('curIpc',ipc);
                $('#'+ipc.sid).addClass('active');
            }



            // id 中不能包含  .   不然去不到对象$('#10.7.160')
        },

        loadMore: function(direction) {
            var nowCount = this.get('count');
            if (direction == "next") {
                this.set('count', nowCount + 1);
            } else if (direction == "prev") {
                this.set('count', nowCount - 1);
            } else {
                this.set('count', 0);
            }

            this.set('page', this.get('count') * 10 + 1);
            var beginRCount = this.get('count') * 10 * this.get('perPage'); //请求的起始记录编号
            //配合查询
            var search_startTime = this.get('search_startTime');
            var search_endTime = this.get('search_endTime');
            if (search_startTime && search_endTime) {
                this.send('searchLoad', search_startTime, search_endTime, beginRCount);
            } else {
                var me = this;
                var url;
                if(this.get('curIpc') == null)
                    url = '/gcks.video/api/v1/video/records?beginRCount=' + beginRCount + '&pageCount=10';
                else
                {
                    url = '/gcks.video/api/v1/video/records/'+me.get('curIpc.sid')+'?beginRCount=' + beginRCount + '&pageCount=10';
                }

//                var url = '/gcks.video/api/v1/video/records?beginRCount=' + beginRCount + '&pageCount=10';

                getJSON(url).then(function(data){
                    me.get('videoDatas').clear();
                    $(data).each(function(index, value) {
                        console.log(value);
                        var video = App.Video.create({
                            codec:value.codec,
                            dataTime:value.dataTime,
                            endTime:value.endTime,
                            name:value.name,
                            ipc_name:value.ipc_name,
                            size:value.size
                        });

                        me.get('videoDatas').pushObject(video);
                    });
                },function(errorStatus){
                    if (errorStatus == 401)
                        me.transitionToRoute('login');
                    else
                        me.transitionToRoute('errorpage');
                });

            }
        },

        deleteVideo: function(video) {
            var url = '/gcks.video/api/v1/video/records/' + video.id;
            var me = this;
            deleteJSON(url).then(function(data){
                if (JSON.stringify(data) == 'true')
                    me.send('loadMore', 'delete');
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        },

        searchLoad: function(beginTime, endTime, beginRCount) {

            beginTime = encodeURI(beginTime);
            endTime = encodeURI(endTime);

            var me = this;
            var url;

            if(this.get('curIpc') == null)
                url = "/gcks.video/api/v1/video/records/" + beginTime + "/" + endTime + "?beginRCount=" + beginRCount + "&pageCount=10";
            else
            {
                url = '/gcks.video/api/v1/video/records/'+me.get('curIpc.sid')+'/' + beginTime + "/" + endTime + "?beginRCount=" + beginRCount + "&pageCount=10";
            }

//            var url = "/gcks.video/api/v1/video/record/" + beginTime + "/" + endTime + "?beginRCount=" + beginRCount + "&pageCount=10";
            getJSON(url).then(function(data){
                me.get('videoDatas').clear();
                $(data).each(function(index, value) {
                    console.log(value);
                    var video = App.Video.create({
                        codec:value.codec,
                        dataTime:value.dataTime,
                        endTime:value.endTime,
                        name:value.name,
                        ipc_name:value.ipc_name,
                        size:value.size
                    });

                    me.get('videoDatas').pushObject(video);
                });
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        },
        search: function() {
            var search_startTime = this.get('search_startTime');
            var search_endTime = this.get('search_endTime');
            if( ((search_startTime == null ||search_startTime =="" || search_startTime == undefined )&&search_endTime)
                ||
                (search_startTime && (search_endTime == null || search_endTime == "" || search_endTime == undefined))
                )
                alert('请填写完整的时间参数');
            else if(strToLong(search_startTime) > strToLong(search_endTime))
                  alert('开始时间不能大于结束时间');
            else{
                if (search_startTime && search_endTime) {
                    this.send('searchLoad', search_startTime, search_endTime, 0);
                } else
                    this.send('loadMore', "searchAll");
            }

        }
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
            me.get('model').clear();
            $(data).each(function(index, value) {
                var ipc = App.Ipc.create({
                    sid: value.sid,
                    name:value.name,
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
                me.get('model').pushObject(ipc);
            });
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionToRoute('login');
            else
                me.transitionToRoute('errorpage');
        });
    }
});

App.HistoryView = Ember.View.extend({
    didInsertElement: function() {
        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();


        elementAction();
        datePicker();
        //后退 2个菜单都选中
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#history").addClass('active');


        //展示ipc列表框大小
        $('.ipc-resource-div').css('height',$(window).height()*0.5);
        $(window).resize(function() {
            $('.ipc-resource-div').css('height',$(window).height()*0.5);
        });
    }
});