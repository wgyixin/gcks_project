/**
 * Created by wang on 14-4-24.
 */
/*
 视频管理
 */

var operationMenu = App.HeaderMenu.create({
    id: 'operation',
    name: '运维管理',
    hrefTo: 'service'
});

headerMenus.pushObject(operationMenu);
//serviceg
App.RecordService = Ember.Object.extend({
    name: Ember.string,
    rnList: Ember.string,
    host: Ember.string,
    cn: Ember.string,
    details:[]

});
App.VideoPlayService = Ember.Object.extend({
    name: Ember.string,
    rnList: Ember.string,
    host: Ember.string,
    cn: Ember.string,
    details:[]

});
App.Status = Ember.Object.extend({
   host:Ember.string,
    RTP_RECIEVER:Ember.number,
    RTP_SENDER:Ember.number,
    completeTask:Ember.number,
    currentTask:Ember.number,
    record_Read:Ember.number,
    record_Write:Ember.number
});
App.Service = Ember.Object.extend({
    recordServices: [],
    videoPlayServices: []
});
App.ServiceView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});
App.ServiceRoute = Ember.Route.extend({
    templateName: 'template/operation/service',
    model: function() {

        var url = '/gcks.video/api/v1/servicemanage/serviceslist';
        var me = this;
        return getJSON(url).then(function(data){
            //数组里的每个对象可以不同

            var list = [];
            $(data).each(function(index, value) {


                $(value.RECORDSERVICE).each(function(sub_index, sub_value) {
                    var record = App.RecordService.create({
                        name: 'record',
                        rnList: sub_value.rnList,
                        host: sub_value.host,
                        cn: sub_value.cn,
                        details:[]
                    });
                    $(sub_value.rnDetail).each(function(index,value){
                       var status = App.Status.create({
                           host:value.host,
                           RTP_RECIEVER:value.status.RTP_RECIEVER,
                           RTP_SENDER:value.status.RTP_SENDER,
                           completeTask:value.status.completeTask,
                           currentTask:value.status.currentTask,
                           record_Read:value.status.record_Read,
                           record_Write:value.status.record_Write
                       }) ;
                        record.get('details').pushObject(status);
                    });
                    list.pushObject(record);

                });
                $(value.VIDEOPLAYSERVICE).each(function(sub_index, sub_value) {
                    var video = App.VideoPlayService.create({
                        name: 'video',
                        rnList: sub_value.rnList,
                        host: sub_value.host,
                        cn: sub_value.cn,
                        details:[]
                    });
                    $(sub_value.rnDetail).each(function(index,value){
                        var status = App.Status.create({
                            host:value.host,
                            RTP_RECIEVER:value.status.RTP_RECIEVER,
                            RTP_SENDER:value.status.RTP_SENDER,
                            completeTask:value.status.completeTask,
                            currentTask:value.status.currentTask,
                            record_Read:value.status.record_Read,
                            record_Write:value.status.record_Write
                        }) ;
                        video.get('details').pushObject(status);
                    });
                    list.pushObject(video);
                });

            });
            return list;
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionTo('login');
            else
                me.transitionTo('errorpage');
        });
    },

    actions: {
        testFilter: function() {

            $("#operation").removeClass('active');
            this.transitionTo("ipcs", {
                queryParams: {
                    position: '北京'
                }
            });

        },
        willTransition: function(transition) {
            this.controller.send('reset');
        }

    }
});

App.ServiceController = Ember.ObjectController.extend({

    videoPlayService: (function() {
        //       var video = this.get('model').get('videoPlayServices');
        return this.get('model').filterBy('name', 'video');


    }).property('model.[]', 'name'),
    recordService: (function() {
        return this.get('model').filterBy('name', 'record');

    }).property('model.[]', 'name'),
    serviceRule:Ember.computed(function(){
       return $.cookie('/services') == 'true';
    }),
    cnRule:Ember.computed(function(){
        return $.cookie('/CN') == 'true';
    }),
    rnRule:Ember.computed(function(){
        return $.cookie('/RN') == 'true';
    }),
    hostsRule:Ember.computed(function(){
        return $.cookie('/hosts') == 'true';
    }),
    logRule:Ember.computed(function(){
        return $.cookie('/logs') == 'true';
    })
});
//cn
App.Cn = Ember.Object.extend({
    sid: Ember.string,
    cn_name: Ember.string,
    host: Ember.string,
    port: Ember.number,
    sip_port: Ember.number,
    descp: Ember.string,
    install_time: Ember.date,
    is_alive: Ember.string,
    isLeader:Ember.string,
    requestCount:Ember.number

});

App.CnView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});
App.CnRoute = Ember.Route.extend({
    templateName: 'template/operation/cn',
    model: function(params) {

        //加载video list


        var url = '/gcks.video/api/v1/resource/cns';
        var me = this;

        return getJSON(url).then(function(data){
            var list = [];
            $(data).each(function(index, value) {
                console.log(value);
                var cn = App.Cn.create({
                    sid: value.sid,
                    cn_name: value.cn_name,
                    host: value.host,
                    port: value.port,
                    sip_port: value.sip_port,
                    descp: value.descp,
                    install_time: value.install_time.toString().substring(0, 19).replace(/T/g, ' '), //.replace(/-/g,'/'),
                    is_alive: value.isalive == "alive",
                    isLeader:value.status.isLeader == true ?'Yes':'No',
                    requestCount:value.status.requestCount
                });

                list.pushObject(cn);
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


App.CnController = Ember.ArrayController.extend({
    content: [],
    serviceRule:Ember.computed(function(){
        return $.cookie('/services') == 'true';
    }),
    cnRule:Ember.computed(function(){
        return $.cookie('/CN') == 'true';
    }),
    rnRule:Ember.computed(function(){
        return $.cookie('/RN') == 'true';
    }),
    hostsRule:Ember.computed(function(){
        return $.cookie('/hosts') == 'true';
    }),
    logRule:Ember.computed(function(){
        return $.cookie('/logs') == 'true';
    }),
    page: 1,
    perPage: 10,
    //
    count:0,//已请求第一个10页，从0开始计数
    currentTotalCounts:(function(){
        if(this.get('model').length >= this.get('perPage')*10 && this.get('count') > 0)
            return this.get('model').length-this.get('count')*this.get('perPage')*10;
        else if(this.get('model').length >= this.get('perPage')*10 && this.get('count') == 0)
            return this.get('perPage')*10;
        else
            return this.get('model').length;

    }).property('model.length','count','perPage'),//当前界面展示的的总数目,用于在分页组件中计算时候能加载下十页
    ///
    ///

    totalPages: (function() {
        return Math.ceil(this.get('model').length / this.get('perPage'));
    }).property("model.length", 'perPage'),


    paginatedContent: (function() {
        var start;
        if (this.get('page') <= 10)
            start = (this.get('page') - 1) * this.get('perPage');
        else
            start = (this.get('page') - this.get('count') * 10 - 1) * this.get('perPage');
        var end = start + this.get('perPage');

//        var start = (this.get('page') - 1) * this.get('perPage');
//        var end = start + this.get('perPage');
        return this.get('model').slice(start, end);
    }).property('page','perPage','count', 'totalPages', 'model.[]', 'cnList.[]'),


    actions: {
        reset:function(){
            this.set('page',1);
            this.set('count',0);
        },

        selectPage: function(number) {

            this.set('page', number);
        },
        //
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
        }
        //
    }
});

//database

App.DatabaseView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});
App.DatabaseRoute = Ember.Route.extend({
    templateName: 'template/operation/database'
});

//hdfs
App.HdfsView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});
App.HdfsRoute = Ember.Route.extend({
    templateName: 'template/operation/hdfs'
});
//mainframe
App.Mainframe = Ember.Object.extend({
    id:Ember.string,
    name:Ember.string,
    ip:Ember.string,
    ram:Ember.string,
    cpu:Ember.string,
    host_status:Ember.boolean,

    disk_free:Ember.number,

    disk_total:Ember.number,
    disk_user:function(){
        return Math.round( (this.get('disk_total')-this.get('disk_free'))*100)/100;  //浮点数小数点后2为
    }.property('disk_total','disk_free'),


    disk_usage: function() {
        return  "width:"+Math.round((this.get('disk_user')/this.get('disk_total'))*10000)/100+"%;";   //百分数小数点后2位

    }.property('disk_user','disk_total'),
    disk_usage_detail: function() {
        return this.get('disk_user')+"GB/"+this.get('disk_total')+"GB("+
            Math.round((this.get('disk_user')/this.get('disk_total'))*10000)/100+'%used)';
    }.property('disk_user','disk_total'),

    componentsNum:function() {
        return this.get('rnList').length+this.get('cnList').length;
    }.property('rnList.length','cnList.length'),
    rnList:[],
    cnList:[]
});
App.MainframeView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');
        datePicker();

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();

    }
});
App.MainframeRoute = Ember.Route.extend({
    templateName: 'template/operation/mainframe',
    model: function() {

        var url = '/gcks.video/api/v1/resource/hostsInfo';
        var me = this;
        return getJSON(url).then(function(data){
            var list = [];
            $(data).each(function(index, value) {
                var mainframe = App.Mainframe.create({
                    id:'host_'+index,
                    name: value.hostInfo.host_name,
                    ip: value.hostInfo.ip,
                    host_status:value.hostInfo.host_status != 'UNKNOWN',
                    disk_free: value.hostInfo.disk.disk_free,//Math.round(value.hostInfo.disk.disk_free*100)/100,
                    disk_total:value.hostInfo.disk.disk_total,//Math.round(value.hostInfo.disk.disk_total*100)/100,
                    ram: Math.round((value.hostInfo.memory.mem_total-value.hostInfo.memory.mem_cached-value.hostInfo.memory.mem_free)/1024/1024 * 100)/100
                        +"GB/"+Math.round(value.hostInfo.memory.mem_total/1024/1024 * 100)/100 +"GB",
                    cpu: 'system: '+ Math.round(value.hostInfo.cpu_metrics.cpu_system * 100)/100+"%"
                        +"\t user: "+ Math.round(value.hostInfo.cpu_metrics.cpu_user * 100)/100+"%",
                    rnList:[],
                    cnList:[]
                });
//                mainframe.set('rnList',[]);
//                mainframe.set('cnList',[]);
                if(value.rn !=null && value.rn != undefined){
                    $(value.rn).each(function(index,rnvalue){
                        mainframe.rnList.pushObject(rnvalue.rn_name);
                    });
                }
                if(value.cn !=null && value.cn != undefined){
                    $(value.cn).each(function(index,cnvalue){
                        mainframe.cnList.pushObject(cnvalue.cn_name);
                    });
                }
                list.pushObject(mainframe);
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
App.MainframeController = Ember.ArrayController.extend({
    content: [],
    serviceRule:Ember.computed(function(){
        return $.cookie('/services') == 'true';
    }),
    cnRule:Ember.computed(function(){
        return $.cookie('/CN') == 'true';
    }),
    rnRule:Ember.computed(function(){
        return $.cookie('/RN') == 'true';
    }),
    hostsRule:Ember.computed(function(){
        return $.cookie('/hosts') == 'true';
    }),
    logRule:Ember.computed(function(){
        return $.cookie('/logs') == 'true';
    }),
    page: 1,
    perPage: 10,
    //
    count:0,//已请求第一个10页，从0开始计数
    currentTotalCounts:(function(){
        if(this.get('model').length >= this.get('perPage')*10 && this.get('count') > 0)
            return this.get('model').length-this.get('count')*this.get('perPage')*10;
        else if(this.get('model').length >= this.get('perPage')*10 && this.get('count') == 0)
            return this.get('perPage')*10;
        else
            return this.get('model').length;

    }).property('model.length','count','perPage'),//当前界面展示的的总数目,用于在分页组件中计算时候能加载下十页
    ///
    ///

    totalPages: (function() {
        var me = this;
        return Math.ceil(this.get('model').length / this.get('perPage'));
    }).property("model.length", 'perPage'),


    paginatedContent: (function() {
        var start;
        if (this.get('page') <= 10)
            start = (this.get('page') - 1) * this.get('perPage');
        else
            start = (this.get('page') - this.get('count') * 10 - 1) * this.get('perPage');
        var end = start + this.get('perPage');
//        var start = (this.get('page') - 1) * this.get('perPage');
//        var end = start + this.get('perPage');
        return this.get('model').slice(start, end); //.sortBy('username')

    }).property('page','perPage','count', 'filter_username', 'filter_name', 'totalPages', 'model.[]'),
    actions: {
        reset:function(){
            this.set('page',1);
            this.set('count',0);
        },

        selectPage: function(number) {
            this.set('page', number);
        }, //
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
        },
        //
        showComponents:function(componentId){
           var display =  $('#'+componentId).css('display');
            if(display == '' || display == 'none')
                $('#'+componentId).css('display','block');
            else
                $('#'+componentId).css('display','none');

        }

    }
});



//rn
App.RnView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});


App.Rn = Ember.Object.extend({
    sid: Ember.string,
    rn_name: Ember.string,
    host: Ember.string,
    port: Ember.number,
    descp: Ember.string,
    install_time: Ember.date,
    is_alive: Ember.string,
    workStatus:Ember.string

});

App.RnRoute = Ember.Route.extend({
    templateName: 'template/operation/rn',
    model: function(params) {
        var url = '/gcks.video/api/v1/resource/rns';
        var me = this;
        return getJSON(url).then(function(data){
            var list = [];
            $(data).each(function(index, value) {
                console.log(value);
                var rn = App.Rn.create({
                    sid: value.sid,
                    rn_name: value.rn_name,
                    host: value.host,
                    port: value.port,
                    descp: value.descp,
                    install_time: value.install_time.toString().substring(0, 19).replace(/T/g, ' '), //.replace(/-/g,'/'),
                    is_alive: value.is_alive == "alive",
                    workStatus:value.status.currentTask+" / "+value.status.completeTask

                });

                list.pushObject(rn);
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


App.RnController = Ember.ArrayController.extend({
    content: [],
    serviceRule:Ember.computed(function(){
        return $.cookie('/services') == 'true';
    }),
    cnRule:Ember.computed(function(){
        return $.cookie('/CN') == 'true';
    }),
    rnRule:Ember.computed(function(){
        return $.cookie('/RN') == 'true';
    }),
    hostsRule:Ember.computed(function(){
        return $.cookie('/hosts') == 'true';
    }),
    logRule:Ember.computed(function(){
        return $.cookie('/logs') == 'true';
    }),
    page: 1,
    perPage: 10,
    //
    count:0,//已请求第一个10页，从0开始计数
    currentTotalCounts:(function(){
        if(this.get('model').length >= this.get('perPage')*10 && this.get('count') > 0)
            return this.get('model').length-this.get('count')*this.get('perPage')*10;
        else if(this.get('model').length >= this.get('perPage')*10 && this.get('count') == 0)
            return this.get('perPage')*10;
        else
            return this.get('model').length;

    }).property('model.length','count','perPage'),//当前界面展示的的总数目,用于在分页组件中计算时候能加载下十页
    ///
    ///

    totalPages: (function() {
        //        debugger
        return Math.ceil(this.get('model').length / this.get('perPage'));
    }).property("model.length", 'perPage'),

    paginatedContent: (function() {
        var start;
        if (this.get('page') <= 10)
            start = (this.get('page') - 1) * this.get('perPage');
        else
            start = (this.get('page') - this.get('count') * 10 - 1) * this.get('perPage');
        var end = start + this.get('perPage');

//        var start = (this.get('page') - 1) * this.get('perPage');
//        var end = start + this.get('perPage');
        return this.get('model').slice(start, end);
    }).property('page','perPage','count', 'totalPages', 'model.[]'),


    actions: {
        reset:function(){
            this.set('page',1);
            this.set('count',0);
        },

        selectPage: function(number) {

            this.set('page', number);
        },
        //
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
        }
        //
    }
});

//webServer
App.WebServerView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});
App.WebServerRoute = Ember.Route.extend({
    templateName: 'template/operation/webServer'
});
//monitoringApp
App.MonitoringAppView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});
App.MonitoringAppRoute = Ember.Route.extend({
    templateName: 'template/operation/monitoringApp'
});





//log
App.Log = Ember.Object.extend({
    id: Ember.number,
    operationTime: Ember.date,
    duration: Ember.number,
//    class_id: Ember.number,
    class_name: Ember.string,
    type: Ember.number,
    level_name: Ember.string,
    content: Ember.string,
    src:Ember.string,
    goal:Ember.string,
    op_user:Ember.string,
//    less_content:function() {
//        if(this.get('conetent') && this.get('conetent').length>4)
//            return this.get('conetent').substring(0,4);
//        else
//            return this.get('content');
//    }.property('content')
    less_content:Ember.string


});
App.LogsRoute = Ember.Route.extend({
    templateName: 'template/operation/log',
    model: function(params) {
        var url = '/gcks.video/api/v1/report/logs?beginRCount=0&pageCount=10';
        var me = this;
        return getJSON(url).then(function(json){
            var logList = [];
            $(json).each(function(index, value) {
                var log = App.Log.create({
                    id: value.id,
                    operationTime: value.operationTime.toString().substring(0, 19).replace(/T/g, ' '), //.replace(/-/g,'/'),
                    duration: value.duration < 0 ?  '' :  Math.round(value.duration/1000*10)/10,
                    class_name: value.class_name,
                    src: (value.src_ip == "null" ||value.src_ip == "" ||value.src_ip == undefined) ?'' :
                        ((value.src_type == "null" || value.src_type == "" ||value.src_type == undefined)?"("+value.src_ip+")"
                            :value.src_type.toUpperCase()+"("+value.src_ip+")") ,
                    goal: (value.goal_ip == "null" || value.goal_ip ==""|| value.goal_ip ==undefined )?'':
                        ((value.goal_type == "null" || value.goal_type == "" ||value.goal_type == undefined)?"("+value.goal_ip+")"
                            :value.goal_type.toUpperCase()+"("+value.goal_ip+")") ,
                    type: value.type_name,
                    level_name: value.level_name,
                    content: value.content,
                    op_user:value.op_user == "null" ? '' :value.op_user,
                    less_content:value.content.length>4?value.content.substring(0,4):value.content

                });
                logList.pushObject(log);
            });
            return logList;
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

App.LogsController = Ember.ArrayController.extend({
    content: [],
    serviceRule:Ember.computed(function(){
        return $.cookie('/services') == 'true';
    }),
    cnRule:Ember.computed(function(){
        return $.cookie('/CN') == 'true';
    }),
    rnRule:Ember.computed(function(){
        return $.cookie('/RN') == 'true';
    }),
    hostsRule:Ember.computed(function(){
        return $.cookie('/hosts') == 'true';
    }),
    logRule:Ember.computed(function(){
        return $.cookie('/logs') == 'true';
    }),
    sortProperties: ['id'],
    sortAscending: false,

    typeList:Ember.computed(function() {
        var list = [];
        var url = "/gcks.video/api/v1/report/logs/type";
        var me = this;

        getJSON(url).then(function(data){
            list.clear();
            list.pushObject('');
            list.pushObjects(data);
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionToRoute('login');
            else
                me.transitionToRoute('errorpage');
        });
        return list;

    }),
    selectedType:'',

    page: 1,
    perPage: 10,
    count: 0,
    currentTotalCounts:(function(){
        return this.get('model').length;
    }).property('model.length'),//当前加载的总数目

    totalPages: (function() {
        //        debugger
        return Math.ceil(this.get('model').length / this.get('perPage'));
    }).property("model.length", 'perPage'),

    paginatedContent: (function() {
        //        var start = (this.get('page') - 1) * this.get('perPage');
        //        var end = start + this.get('perPage');


        var start;
        if (this.get('page') <= 10)
            start = (this.get('page') - 1) * this.get('perPage');
        else
            start = (this.get('page') - this.get('count') * 10 - 1) * this.get('perPage');
        var end = start + this.get('perPage');


//        var filter_type = this.get('filter_type');
        var filter_level = this.get('filter_level');

        //过滤
//        if (filter_type || filter_level) {
        if (filter_level) {
            var filterarray = this.get('model').filter(function(item) {
                //中文
//                if (filter_type && filter_level)
//                    return (item.type.indexOf(filter_type) > -1) && (item.level_name.indexOf(filter_level) > -1);
//                else if (filter_type)
//                    return item.type.indexOf(filter_type) > -1;
//                else
//                    return item.level_name.indexOf(filter_level) > -1;
                  return item.level_name.indexOf(filter_level) > -1;
            });

            //重新设置页码
            this.set('totalPages', Math.ceil(filterarray.length / this.get('perPage')));
            return filterarray.slice(start, end);
        } else {
            this.set('totalPages', Math.ceil(this.get('model').length / this.get('perPage')));
            return this.get('model').slice(start, end);
        }

    }).property('page', 'totalPages', 'count', 'model.[]','perPage','filter_type','filter_level'),


    actions: {
        reset:function(){
            this.set('page',1);
            this.set('count',0);
            this.set('selectedType','');
        },

        selectPage: function(number) {
            this.set('page', number);
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
            var beginRCount = this.get('count')*this.get('perPage') * 10;

            //配合查询
            var search_startTime = this.get('search_startTime');
            var search_endTime = this.get('search_endTime');
            var search_type = this.get('selectedType');
            var search_user = this.get('search_user');
            if ((search_startTime && search_endTime) || search_type || search_user) {
                this.send('searchLoad', search_startTime, search_endTime,search_type, search_user,beginRCount);
            } else {
                var me = this;
                var url = '/gcks.video/api/v1/report/logs?beginRCount=' + beginRCount + '&pageCount=10';

//            var me = this;
//            var url = '/gcks.video/api/v1/report/logs?beginRCount=' + beginRCount + '&pageCount=10';

                getJSON(url).then(function(data){
                    me.get('model').clear();
                    $(data).each(function(index, value) {
                        console.log(value);
                        var log = App.Log.create({
                            id: value.id,
                            operationTime: value.operationTime.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),
                            duration: value.duration < 0 ?  '' :  Math.round(value.duration/1000*10)/10,
                            class_name: value.class_name,
                            src: (value.src_ip == "null" ||value.src_ip == "" ||value.src_ip == undefined) ?'' :
                                ((value.src_type == "null" || value.src_type == "" ||value.src_type == undefined)?"("+value.src_ip+")"
                                    :value.src_type.toUpperCase()+"("+value.src_ip+")") ,
                            goal: (value.goal_ip == "null" || value.goal_ip ==""|| value.goal_ip ==undefined )?'':
                                ((value.goal_type == "null" || value.goal_type == "" ||value.goal_type == undefined)?"("+value.goal_ip+")"
                                    :value.goal_type.toUpperCase()+"("+value.goal_ip+")") ,
                            type: value.type_name,
                            level_name: value.level_name,
                            content: value.content,
                            op_user:value.op_user == "null" ? '' :value.op_user,
                            less_content:value.content.length>4?value.content.substring(0,4):value.content
                        });
                        me.get('model').pushObject(log);
                    });
                },function(errorStatus){
                    if (errorStatus == 401)
                        me.transitionToRoute('login');
                    else
                        me.transitionToRoute('errorpage');
                });

            }
        },

        search: function() {

            var search_startTime = this.get('search_startTime');
            var search_endTime = this.get('search_endTime');
            var search_type = this.get('selectedType');
            var search_user = this.get('search_user');
            if( ((search_startTime == null ||search_startTime =="" || search_startTime == undefined )&&search_endTime)
                ||
                (search_startTime && (search_endTime == null || search_endTime == "" || search_endTime == undefined))
                )
                alert('请填写完整的时间参数');
            else if(search_startTime&& search_endTime && strToLong(search_startTime) > strToLong(search_endTime))
                alert('开始时间不能大于结束时间');
            else{
                if ((search_startTime && search_endTime) || search_type || search_user) {
                    this.send('searchLoad', search_startTime, search_endTime,search_type,search_user, 0);
                } else
                    this.send('loadMore', "searchAll");
            }

        },
        searchLoad: function(beginTime, endTime,type,user, beginRCount) {
            var me = this;
            var url;
            if(beginTime&&endTime&&type&&user){
                beginTime = encodeURI(beginTime);
                endTime = encodeURI(endTime);
                type = encodeURI(type);
                user = encodeURI(user);
                url = '/gcks.video/api/v1/search/logs/bytime_type_name/'+ beginTime + "/" + endTime +
                    "/"+type+"/"+user+"/" + beginRCount + "/10";

            }else if(beginTime&&endTime&&type){
                beginTime = encodeURI(beginTime);
                endTime = encodeURI(endTime);
                type = encodeURI(type);
                url = '/gcks.video/api/v1/search/logs/bytime_type/'+ beginTime + "/" + endTime +
                    "/" +type+"/"+ beginRCount + "/10";

            }else if(beginTime&&endTime&&user){
                beginTime = encodeURI(beginTime);
                endTime = encodeURI(endTime);
                user = encodeURI(user);
                url = '/gcks.video/api/v1/search/logs/bytime_name/'+ beginTime + "/" + endTime +
                    "/" +user+"/"+ beginRCount + "/10";

            }else if(type&&user){
                type = encodeURI(type);
                user = encodeURI(user);
                url = '/gcks.video/api/v1/search/logs/bytype_name/'+ type + "/" + user +
                   "/"+ beginRCount + "/10";

            }
            else if(beginTime&&endTime){
                beginTime = encodeURI(beginTime);
                endTime = encodeURI(endTime);
                url = '/gcks.video/api/v1/search/logs/bytime/'+ beginTime + "/" + endTime +
                    "/"+ beginRCount + "/10";

            }
            else if(user){
                user = encodeURI(user);
                url = '/gcks.video/api/v1/search/logs/byname/' + user +
                    "/"+ beginRCount + "/10";

            }
            else{
                type = encodeURI(type);
                url = '/gcks.video/api/v1/search/logs/bytype/'+type+"/" + beginRCount + "/10";

            }

            getJSON(url).then(function(data){
                me.get('model').clear();
                $(data).each(function(index, value) {
                    console.log(value);
                    var log = App.Log.create({
                        id: value.id,
                        operationTime: value.operationTime.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),
                        duration: value.duration < 0 ?  '' :  Math.round(value.duration/1000*10)/10,
                        class_name: value.class_name,
                        src: (value.src_ip == "null" ||value.src_ip == "" ||value.src_ip == undefined) ?'' :
                            ((value.src_type == "null" || value.src_type == "" ||value.src_type == undefined)?"("+value.src_ip+")"
                                :value.src_type.toUpperCase()+"("+value.src_ip+")") ,
                        goal: (value.goal_ip == "null" || value.goal_ip ==""|| value.goal_ip ==undefined )?'':
                            ((value.goal_type == "null" || value.goal_type == "" ||value.goal_type == undefined)?"("+value.goal_ip+")"
                                :value.goal_type.toUpperCase()+"("+value.goal_ip+")") ,
                        type: value.type_name,
                        level_name: value.level_name,
                        content: value.content,
                        op_user:value.op_user == "null" ? '' :value.op_user,
                        less_content:value.content.length>4?value.content.substring(0,4):value.content

                    });
                    me.get('model').pushObject(log);
                });
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        }
    }
});


App.LogsView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        datePicker();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#operation").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();


    }
});

