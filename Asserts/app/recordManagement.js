/**
 * Created by wang on 14-4-24.
 */
/*
 视频管理
 */

var recordMenu = App.HeaderMenu.create({
    id: 'record',
    name: '录制管理',
    hrefTo: 'record'
});

headerMenus.pushObject(recordMenu);

App.RecordView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        datePicker();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $('#record').addClass('active');
    }
});

App.Task_Ipc_Area = Ember.Object.extend({
    task_id: Ember.number,
    task_name: Ember.string,
    ipc_sid: Ember.string,
    plan_begin_time: Ember.date,
    plan_end_time: Ember.date,
    real_begin_time: Ember.date,
    real_end_time: Ember.date,
    creator: Ember.string,
    position_x: Ember.number,
    position_y: Ember.number,
    area_id: Ember.number,
    area_name: Ember.string,
    ipc_detail: function() {
        return "所在地:" + this.get('area_name') + "\nX坐标：" + this.get('position_x') + "\nY坐标:" + this.get('position_y');
    }.property('area_name', 'position_x', 'position_y')


});

/**
 * video management
 * @type {*|void|Object}
 */
App.RecordRoute = Ember.Route.extend({
    templateName: 'template/record/videoRecord',

    model: function(params) {

        //加载video list

        var list = [];
        var url = '/gcks.video/api/v1/video/tasks';
        var me = this;
        getJSON(url).then(function(data){
            $(data).each(function(index, value) {
                var taskIpcArea = App.Task_Ipc_Area.create({
                    task_id: value.task_id,
                    task_name: value.task_name,
                    ipc_sid: value.ipc_sid,
                    plan_begin_time: value.plan_begin_time.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),
                    plan_end_time: value.plan_end_time.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),
                    real_begin_time: value.real_begin_time.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),
                    real_end_time: value.real_end_time.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),
                    creator: value.creator,
                    position_x: value.position_x,
                    position_y: value.position_y,
                    area_id: value.area_id,
                    area_name: value.area_name
                });

                list.pushObject(taskIpcArea);
            });
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionTo('login');
            else
                me.transitionTo('errorpage');
        });
        return list;
    },
    actions:{
        willTransition: function(transition) {
            this.controller.send('reset');
        }

    }
});


App.RecordController = Ember.ArrayController.extend({
    content: [],
    newTaskIpc: App.Task_Ipc_Area.create(),
    needs: ["login"],

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
        },

        deleteTask: function(task) {
            var url = '/gcks.video/api/v1/video/tasks/' + task.task_id;
            var me = this;
            deleteJSON(url).then(function(data){
                if(data == true)
                  me.get('model').removeObject(task);
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        },

        beforeEdit: function(taskIpc) {
            $('#edit').modal('show');

            this.set('edit_task_id', taskIpc.task_id);
            this.set('edit_task_name', taskIpc.task_name);
            this.set('edit_ipc_sid', taskIpc.ipc_sid);
            this.set('edit_coding', taskIpc.coding);
            this.set('edit_plan_begin_time', taskIpc.plan_begin_time);
            this.set('edit_plan_end_time', taskIpc.plan_end_time);
            this.set('edit_real_begin_time', taskIpc.real_begin_time);
            this.set('edit_real_end_time', taskIpc.real_end_time);
            this.set('edit_creator', taskIpc.creator);
            //            this.set('edit_position_x:',taskIpc.position_x);
            //            this.set('edit_position_y',taskIpc.position_y);
            //            this.set('edit_area_id',taskIpc.area_id);
            //            this.set('edit_area_name',taskIpc.area_name);

        },
        editTaskIpc: function() {

            var me = this;
            var task_id = this.get('edit_task_id');
            var task_name = this.get('edit_task_name');
            var ipc_sid = this.get('edit_ipc_sid');
            var coding = this.get('edit_coding');
            var plan_begin_time = this.get('edit_plan_begin_time');
            var plan_end_time = this.get('edit_plan_end_time');
            var real_begin_time = this.get('edit_real_begin_time');
            var real_end_time = this.get('edit_real_end_time');
            var creator = this.get('edit_creator');
            //            var  position_x = this.get('edit_position_x');
            //            var  position_y = this.get('edit_position_y');
            //            var  area_id = this.get('edit_area_id');
            //            var area_name = this.get('edit_area_name');

            var url = '/gcks.video/api/v1/video/tasks';
            var data = JSON.stringify({
                "task": {
                    "task_id": task_id,
                    "task_name": task_name,
                    "ipc_sid": ipc_sid,
                    "coding": coding,

                    "plan_begin_time": plan_begin_time,
                    "plan_end_time": plan_end_time,
                    "real_begin_time": real_begin_time,
                    "real_end_time": real_end_time,
                    "creator": creator
                    //                    "position_x":position_x,"position_y":position_y,"area_id":area_id,"area_name":area_name
                }
            });

            putJSON(url,data).then(function(json){
                if (json == true) {
                    var task = me.get('model').findBy('task_id', task_id);
                    task.set('task_name', task_name);
                    task.set('ipc_sid', ipc_sid);
                    task.set('coding', coding);
                    task.set('plan_begin_time', plan_begin_time);
                    task.set('plan_end_time', plan_end_time);
                    task.set('real_begin_time', real_begin_time);
                    task.set('real_end_time', real_end_time);
                    task.set('creator', creator);
                    //                    task.set('position_x:',position_x);
                    //                    task.set('position_y',position_y);
                    //                    task.set('area_id',area_id);
                    //                    task.set('area_name',area_name);

                }
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        },
        addTaskIpc: function() {

            var task_id = this.newTaskIpc.task_id;
            var task_name = this.newTaskIpc.task_name;
            var ipc_sid = this.newTaskIpc.ipc_sid;
            var plan_begin_time = new Date(this.newTaskIpc.plan_begin_time);
            var plan_end_time = new Date(this.newTaskIpc.plan_end_time);
            var real_begin_time = new Date(this.newTaskIpc.real_begin_time);
            var real_end_time = new Date(this.newTaskIpc.real_end_time);
            var creator = $.cookie('username');

            var url = '/gcks.video/api/v1/video/tasks';
            var data = JSON.stringify({
                "task": {
                    "task_name": task_name,
                    "ipc_sid": ipc_sid,

                    "plan_begin_time": plan_begin_time,
                    "plan_end_time": plan_end_time,
                    "real_begin_time": real_begin_time,
                    "real_end_time": real_end_time,
                    "creator": creator
                    //                    "position_x":position_x,"position_y":position_y,"area_id":area_id,"area_name":area_name
                }
            });
            var me = this;
            postJSON(url,data).then(function(json){
                if(json == true){
                    var taskIpcArea = App.Task_Ipc_Area.create({
                        task_id: task_id,
                        task_name: task_name,
                        ipc_sid: ipc_sid,
                        plan_begin_time: plan_begin_time,
                        plan_end_time: plan_end_time,
                        real_begin_time: real_begin_time,
                        real_end_time: real_end_time,
                        creator: creator
                        //                        position_x:position_x,
                        //                        position_y:value.position_y,
                        //                        area_id:value.area_id,
                        //                        area_name:value.area_name
                    });

                    me.get('model').pushObject(taskIpcArea);
                }
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
            this.set("this.newTaskIpc", App.Task_Ipc_Area.create());
        },
        cancelAdd: function() {
            this.set("this.newTaskIpc", App.Task_Ipc_Area.create());
        }

    }
});


// planlist



/**
 * video management
 * @type {*|void|Object}
 */
App.PlanTask = Ember.Object.extend({
    name: Ember.string,
//    sid: Ember.string,
//    ipc_name:Ember.string,
    timeCron: Ember.string,
    timeLength: Ember.number
});
//ipc -name  sid status
//App.PlanIpc = Ember.Object.extend({
//    name:Ember.string,
//    sid:Ember.string
//});
App.PlanIpc = Ember.Object.extend({
    plantask_name:Ember.string,
    name:Ember.string,
    sid:Ember.string,
    status:Ember.number
});
App.PlansView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        datePicker();
        //初始化cron控件
        initCornUi();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $('#record').addClass('active');


        // 指定IPC 的 select 的 change事件
        $('#notAdd').change(function() {
            if ($('#notAdd').val())
                $('#addeach').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#addeach').attr('disabled', true);
        });

        $('#added').change(function() {
            if ($('#added').val())
                $('#removeeach').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#removeeach').attr('disabled', true);

        });


        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});


App.PlansRoute = Ember.Route.extend({
    templateName: 'template/record/planList',

    model: function(params) {


        var planList = [];
        var url = '/gcks.video/api/v1/video/plantasks';
        var me = this;
        getJSON(url).then(function(data){

            $(data).each(function(index, value) {
                console.log(value);
                var planTask = App.PlanTask.create({
                    name: value.name,
//                    sid: value.sid,
//                    ipc_name:value.ipc_name,
                    timeCron: value.timeCron.substring(2, value.timeCron.length),
                    timeLength: value.timeLength
                });

                planList.pushObject(planTask);
            });
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionToRoute('login');
            else
                me.transitionToRoute('errorpage');
        });
        return planList;
    },
    actions:{
        willTransition: function(transition) {
            this.controller.send('reset');
        }

    }
});


App.PlansController = Ember.ArrayController.extend({
    content: [],

    planOperateRule:Ember.computed(function(){
       return $.cookie('/tasksOperate') == 'true';
    }),

    inPlanList:[],
    outPlanList:[],
    title: "",
    ipcList: [],
    isEdit: (function() {
        if (this.get('title') == "新增")
            return false;
        else
            return true;
    }).property('title'),

    needs: ["login"],

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

        var filter_ipc = this.get('filter_ipc');
        //过滤
        if (filter_ipc ) {
            var filterarray = this.get('model').filter(function(item) {
//                var ipcReg = new RegExp(filter_ipc);
//                    return ipcReg.test(item.sid);
                return item.ipc_name.indexOf(filter_ipc) > -1;
            });

            //重新设置页码
            this.set('totalPages', Math.ceil(filterarray.length / this.get('perPage')));
            return filterarray.slice(start, end);
        } else {
            this.set('totalPages', Math.ceil(this.get('model').length / this.get('perPage')));
            return this.get('model').slice(start, end);
        }

    }).property('page', 'perPage', 'count', 'totalPages', 'model.[]', 'filter_ipc'),


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
        },

        deletePlanTask: function(params) {
            var url = '/gcks.video/api/v1/video/plantasks/' + params.name;
            var me = this;
            deleteJSON(url).then(function(data){
                if (data == true) {
                    me.get('model').removeObject(params);
                }
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        },

        beforeAddOrEdit: function(params) {

            if(Ember.View.views["plan_name_view"].get('tooltipDiv'))
                Ember.View.views["plan_name_view"].removeTooltip();
            if(Ember.View.views["plan_timeLength_view"].get('tooltipDiv'))
                Ember.View.views["plan_timeLength_view"].removeTooltip();

            if (params == "add") {
//                this.ipcList.clear();
//                var me = this;
//                var url = '/gcks.video/api/v1/resource/ipcslist';
//                //先获得所有的ipc列表
//                getJSON(url).then(function(data){
//                    $(data).each(function(index, value) {
////                        var ipc = value.sid;
////                        var ipc = value.name;
//                        var ipc = App.PlanIpc.create({
//                            name:value.name,
//                            sid:value.sid
//                        });
//                        me.get('ipcList').pushObject(ipc);
//                    });
//                },function(errorStatus){
//                    if (errorStatus == 401)
//                        me.transitionTo('login');
//                    else
//                        me.transitionTo('errorpage');
//                });

                this.set('plan_name', '');
                this.set('plan_timeLength', '');


                $('#plan_name_view').attr('disabled', false);
                $('#ipc_selector').attr('disabled', false);

                this.set('title', '新增');
                $('#cron').val('* * * * ?');
               //将cron的数据反解析到 界面中
                readCron();

            } else {
                this.set('plan_name', params.name);
                this.set('plan_timeLength', params.timeLength);
//                this.set('plan_sid', params.sid);

                //如果不对select 初始化option 直接给select赋值是null.   而如果最初点击编辑 而不是新增，则没有初始化
                //                $('#ipc_selector').val(params.sid);
                //
                //                var dd =  $('#ipc_selector').val();
                //
                $('#cron').val(params.timeCron); //  var cron_value = params.timeCron;  cron_value.substring(2,cron_value.length)
                readCron(); //将cron的数据反解析到 界面中
//                $('#plan_name_view').attr('disabled', true);
//                $('#plan_sid').attr('disabled', true);

                this.set('title', '修改');
            }



            $('#add_edit').modal('show');
        },
        validate:function(){
            if(Ember.View.views["plan_name_view"].get('tooltipDiv'))
                Ember.View.views["plan_name_view"].removeTooltip();

            if(Ember.View.views["plan_timeLength_view"].get('tooltipDiv'))
                Ember.View.views["plan_timeLength_view"].removeTooltip();

            var plan_name = this.get('plan_name');
            var plan_timeLength = this.get('plan_timeLength');
            var validation = true;
            //计划名
            if(plan_name == null || plan_name =='' || plan_name==undefined){
                validation = false;

                Ember.View.views["plan_name_view"].addTooltip('计划名不能为空');
            }
            else if(containSpecial(plan_name)){
                validation = false;

                Ember.View.views["plan_name_view"].addTooltip('计划名不能含特殊字符');
            }
            else{
                if(Ember.View.views["plan_name_view"].get('tooltipDiv'))
                    Ember.View.views["plan_name_view"].removeTooltip();
            }

            //时长
            if(plan_timeLength == null || plan_timeLength =='' || plan_timeLength==undefined){
//                validation = false;
//
//                Ember.View.views["plan_timeLength_view"].addTooltip('时长不能为空');

            }
            else if(!$.isNumeric(plan_timeLength)){
                validation = false;
                Ember.View.views["plan_timeLength_view"].addTooltip('时长必须为数字');

            }else if(plan_timeLength < 5 && plan_timeLength != -1){
                validation = false;
                Ember.View.views["plan_timeLength_view"].addTooltip('时长为-1或大于等于5分钟');

            }
            else
            {
                if(Ember.View.views["plan_timeLength_view"].get('tooltipDiv'))
                    Ember.View.views["plan_timeLength_view"].removeTooltip();
            }
            if(  $('#cron').val() == '* * * * ?'){
                validation = false;
                alert('必须填写规则')
            }


            if(validation)
                this.send('addOrEdit');
        },

        addOrEdit: function() {
            var doAction = this.get('title');
            if (doAction == "新增") {
                this.send('addPlanTask');
            } else if (doAction == "修改") {
                this.send('editPlanTask');
            }
        },
        addPlanTask: function() {

            var name = this.get('plan_name');
//            var ipc_name = $('#ipc_selector').val();

//            var sid = this.get('ipcList').findBy('name',ipc_name).get('sid');

            var timeLength = this.get('plan_timeLength')>5?this.get('plan_timeLength'):-1;
            var timeCron = "0 " + $('#cron').val() ;

            var me = this;
            var url = '/gcks.video/api/v1/video/plantasks';
            var data = JSON.stringify({
                "planTask": {
                    "name": name,
//                    "sid": sid,
                    "timeLength": timeLength,
                    "timeCron": timeCron
                }
            });
            postJSON(url,data).then(function(json){
                if(json){
                    var planTask = App.PlanTask.create({
                        name: name,
//                        sid: sid,
//                        ipc_name:ipc_name,
                        timeCron: timeCron.substring(2, timeCron.length),
                        timeLength: timeLength
                    });
                    me.get('model').pushObject(planTask);
                }else
                    alert('添加失败');
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
            $('#add_edit').modal('hide');
//            this.set("this.newPlanTask", App.PlanTask.create());

        },

        editPlanTask: function() {

            var name = this.get('plan_name');
//            var sid = $('#plan_sid').val();

            var timeLength = this.get('plan_timeLength');
            var timeCron = "0 " + $('#cron').val();

            if(timeLength == null || timeLength == "" || timeLength == undefined){
                //循环录制
                timeLength = -1;
            }

            var me = this;
            var url = '/gcks.video/api/v1/video/plantasks';
            var data = JSON.stringify({
                "planTask": {
                    "name": name,
//                    "sid": sid,
                    "timeLength": timeLength,
                    "timeCron": timeCron
                }
            });
            putJSON(url,data).then(function(json){
                if (json) {
                    var planTask = me.get('model').findBy('name', name);
                    planTask.set('timeCron',  timeCron.substring(2, timeCron.length));
                    planTask.set('timeLength', timeLength);

                    alert('成功');

                }
                else
                    alert('失败');
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

            $('#add_edit').modal('hide');
        },

        //给策略指定IPC
        beforePointIpc: function(plan) {
            this.set('assignPlan', plan.get('name'));
            this.get('inPlanList').clear();
            this.get('outPlanList').clear();

            var me = this;
            var url = '/gcks.video/api/v1/video/plantasks/ipcs?name=' +plan.get('name');

            getJSON(url).then(function(data){
                $(data).each(function(index, value) {
                    $(value.inplan).each(function(sub_index, sub_value) {

                        var ipc = App.PlanIpc.create({
                            plantask_name:plan.get('name'),
                            name: sub_value.name,
                            sid: sub_value.sid,
                            status: '1'
                        });
                        me.inPlanList.pushObject(ipc);


                    });
                    $(value.outplan).each(function(sub_index, sub_value) {

                        var ipc = App.PlanIpc.create({
                            plantask_name:plan.get('name'),
                            name: sub_value.name,
                            sid: sub_value.sid,
                            status: '0'
                        });
                        me.outPlanList.pushObject(ipc);


                    });
                });


                // add  remove button  , all 样式
                $('#addeach').attr('disabled', true);
                $('#removeeach').attr('disabled', true);


                if (me.get('inPlanList').length > 0)
                    $('#removeall').attr('disabled', false);
                else
                    $('#removeall').attr('disabled', true);

                if (me.get('outPlanList').length > 0)
                    $('#addall').attr('disabled', false);
                else
                    $('#addall').attr('disabled', true);

            },function(errorStatus){

                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

            $('#addOrRemove').modal('show');

        },


        add: function() {
            var notAdd = $('#notAdd').val();
            var me = this;
            $(notAdd).each(function(index, value) {
                var ipc = me.outPlanList.findBy('name', value);
                me.outPlanList.removeObject(ipc);
                me.inPlanList.pushObject(ipc);
            });

            // add, remove all 样式
            if (this.inPlanList.length > 0)
                $('#removeall').attr('disabled', false);
            else
                $('#removeall').attr('disabled', true);

            if (this.outPlanList.length > 0)
                $('#addall').attr('disabled', false);
            else
                $('#addall').attr('disabled', true);
            // add  remove button
            $('#addeach').attr('disabled', true);
            $('#removeeach').attr('disabled', true);

        },
        remove: function() {
            var added = $('#added').val();
            var me = this;
            $(added).each(function(index, value) {
                var ipc = me.inPlanList.findBy('name', value);
                me.inPlanList.removeObject(ipc);
                me.outPlanList.pushObject(ipc);
            });

            // add, remove all 样式
            if (this.inPlanList.length > 0)
                $('#removeall').attr('disabled', false);
            else
                $('#removeall').attr('disabled', true);

            if (this.outPlanList.length > 0)
                $('#addall').attr('disabled', false);
            else
                $('#addall').attr('disabled', true);

            // add  remove button
            $('#addeach').attr('disabled', true);
            $('#removeeach').attr('disabled', true);
        },

        addAll: function() {
            var me = this;
            $(this.outPlanList).each(function(index, value) {
                me.inPlanList.pushObject(value);
            });
            this.outPlanList.clear();

            // add, remove all 样式
            if (this.inPlanList.length > 0)
                $('#removeall').attr('disabled', false);
            else
                $('#removeall').attr('disabled', true);

            if (this.outPlanList.length > 0)
                $('#addall').attr('disabled', false);
            else
                $('#addall').attr('disabled', true);

            // add  remove button  ,
            $('#addeach').attr('disabled', true);
            $('#removeeach').attr('disabled', true);
        },
        removeAll: function() {
            var me = this;
            $(this.inPlanList).each(function(index, value) {
                me.outPlanList.pushObject(value);
            });
            this.inPlanList.clear();

            // add, remove all 样式
            if (this.inPlanList.length > 0)
                $('#removeall').attr('disabled', false);
            else
                $('#removeall').attr('disabled', true);

            if (this.outPlanList.length > 0)
                $('#addall').attr('disabled', false);
            else
                $('#addall').attr('disabled', true);
            // add  remove button
            $('#addeach').attr('disabled', true);
            $('#removeeach').attr('disabled', true);

        },

        pointIpc: function() {
            var doAdd = this.inPlanList.filterBy('status', '0');
            var doRemove = this.outPlanList.filterBy('status', '1');

            var url = '/gcks.video/api/v1/video/plantasks/ipcs';
            var data = "{" + "doAdd:" + JSON.stringify(doAdd) + ",doRemove:" + JSON.stringify(doRemove) + "}";
            var me = this;
            putJSON(url,data).then(function(json){
                if(json)
                    alert('更新成功');
                else
                    alert('更新失败，请重新操作');
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        }


    }
});