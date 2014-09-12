/**
 * Created by wang on 14-3-26.
 */

var systemManageMenu = App.HeaderMenu.create({
    id: 'system',
    name: '系统管理',
    hrefTo: 'user'
});

headerMenus.pushObject(systemManageMenu);

//usergroup

App.Usergroup = Ember.Object.extend({
    descp: Ember.string,
    id: Ember.number,
    name: Ember.string,
    parent_id:Ember.number,
    authlist: []

});
App.GroupAuth = Ember.Object.extend({
    auth_decp: Ember.string,
    auth_id: Ember.number,
    auth_name: Ember.string,
    group_descp: Ember.string,
    group_id: Ember.number,
    group_name: Ember.string,
    rule: Ember.boolean
});
App.GroupUser = Ember.Object.extend({
    group_id: Ember.number,
    username: Ember.string,
    status: Ember.string
});

App.UsergroupRoute = Ember.Route.extend({
    templateName: 'template/system/usergroup',
    model: function() {

        var url = '/gcks.video/api/v1/user/childgroups';// /'+ encodeURI($.cookie('username'));
        var me = this;
        return getJSON(url).then(function(data){
            var usergroupList = [];
            $(data).each(function(index, value) {
                var usergroup = App.Usergroup.create({
                    descp: value.descp == 'null' ? '':value.descp,
                    id: value.id,
                    name: ''+value.name,
                    parent_id:value.parent_id,
                    authlist: []

                });
                usergroupList.pushObject(usergroup);

            });
            return usergroupList;
        },function(errorStauts){
            if (errorStauts == 401)
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
App.UsergroupController = Ember.ArrayController.extend({
    content: [],
    usersRule:Ember.computed(function(){
        return $.cookie('/users') == 'true';
    }),
    userGroupsRule:Ember.computed(function(){
        return $.cookie('/userGroups') == 'true';
    }),
    videoLifeCycleRule:Ember.computed(function(){
        return $.cookie('/videoLifeCycle') == 'true';
    }),
    areasRule:Ember.computed(function(){
        return $.cookie('/areas') == 'true';
    }),

    newUsergroup: App.Usergroup.create(),

    authForGroupList: [],
    inGroupList: [],
    notInGroupList: [],

    page: 1,
    perPage: 10,
    childgroups:function(){return this.get('model');}.property('model.length'),
    selectedGroup:null,

    count:0,//已请求第一个10页，从0开始计数
    currentTotalCounts:(function(){
        if(this.get('model').length >= this.get('perPage')*10 && this.get('count') > 0)
            return this.get('model').length-this.get('count')*this.get('perPage')*10;
        else if(this.get('model').length >= this.get('perPage')*10 && this.get('count') == 0)
            return this.get('perPage')*10;
        else
            return this.get('model').length;

    }).property('model.length','count','perPage'),//当前界面展示的的总数目,用于在分页组件中计算时候能加载下十页

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

        var filter_name = this.get('filter_groupName');

        //过滤   test不支持中文，使用indexOF
        if (filter_name) {
            var filterarray = this.get('model').filter(function(item) {
                //                var nameReg = new RegExp(filter_name);
                //                return  nameReg.test(item.name);
                return item.name.indexOf(filter_name) > -1;
            });

            //重新设置页码
            this.set('totalPages', Math.ceil(filterarray.length / this.get('perPage')));
            return filterarray.slice(start, end);
        } else {
            this.set('totalPages', Math.ceil(this.get('model').length / this.get('perPage')));
            return this.get('model').slice(start, end); //.sortBy('username')
        }
    }).property('page', 'totalPages', 'filter_groupName', 'model.[]','count'),



    actions: {
        reset:function(){
            this.set('page',1);
            this.set('count',0);
            this.set('selectedGroup',null);
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
        //

        deleteUsergroup: function(usergroup) {
            var url = '/gcks.video/api/v1/user/groups/' + usergroup.id;
            var me = this;
            deleteJSON(url).then(function(data){
                if (data == true){
                    me.get('model').removeObject(usergroup);
                    alert('删除成功');

                }else
                    alert('删除失败，请重新操作');

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        },

        beforeEdit: function(usergroup) {
            $('#edit').modal('show');
            if(Ember.View.views["edit_name"].get('tooltipDiv'))
                Ember.View.views["edit_name"].removeTooltip();
            this.set('edit_name', usergroup.name);
            this.set('edit_descp', usergroup.descp);
            this.set('curUsergroup', usergroup);

        },
        validateForEdit:function(){
            if(Ember.View.views["edit_name"].get('tooltipDiv'))
                Ember.View.views["edit_name"].removeTooltip();

            var name = this.get('edit_name');

            this.send("validate",name,"edit_name");

            if(this.get("validation"))
                this.send('editUsergroup');
        },
        editUsergroup: function() {

            var name = this.get('edit_name');
            var descp = this.get('edit_descp');
            var curUsergroup = this.get('curUsergroup');

            var me = this;
            var url = '/gcks.video/api/v1/user/groups';
            var data =  JSON.stringify({
                "usergroup": {
                    "id": curUsergroup.get('id'),
                    "name": name,
                    "descp": descp
                }
            });

            putJSON(url,data).then(function(json){
                if(json){
                    var group = me.get('model').findBy('id', curUsergroup.get('id'));
                    group.set('descp', descp);
                    group.set('name', ''+name);
                    $('#edit').modal('hide');
                    alert('修改成功');
                }
                else{
                    Ember.View.views["edit_name"].addTooltip('用户组名已存在');
//                    alert('修改失败，请重新操作');
                }


            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });


        },
        beforeAddUsergroup:function(){

            if(Ember.View.views["add_name"].get('tooltipDiv'))
                Ember.View.views["add_name"].removeTooltip();

//            var url = '/gcks.video/api/v1/user/childgroups/'+ encodeURI($.cookie('username'));
//            var me = this;
//            this.set('childgroups',[]);
            this.set('selectedGroup',null);
//            getJSON(url).then(function(data){
//                $(data).each(function(index, value) {
//                    var usergroup = App.Usergroup.create({
//                        descp: value.descp,
//                        id: value.id,
//                        name: value.name,
//                        parent_id:value.parent_id,
//                        authlist: []
//
//                    });
//                    me.get('childgroups').pushObject(usergroup);
//                });
//            },function(errorStauts){
//                if (errorStauts == 401)
//                    me.transitionTo('login');
//                else
//                    me.transitionTo('errorpage');
//            });
            $('#add').modal('show');
        },
        validateForAdd:function(){
            if(Ember.View.views["add_name"].get('tooltipDiv'))
                Ember.View.views["add_name"].removeTooltip();

            var name = this.newUsergroup.name;

            this.send("validate",name,"add_name");

            if(this.get("validation"))
                this.send('addUsergroup');
        },
        validate:function(name,name_view_id){

            var validateion = true;
            //用户组名
            if(name == null || name =='' || name==undefined){
                validateion = false;

                Ember.View.views[name_view_id].addTooltip('用户组名不能为空');
            }
            else if(name.length>10){
                validateion = false;
                Ember.View.views[name_view_id].addTooltip('用户组名长度不大于10个字符');
            }
            else if(containSpecial(name)){
                validateion = false;
                Ember.View.views[name_view_id].addTooltip('用户组名不能包含特殊字符');
            }
            else{
                if(Ember.View.views[name_view_id].get('tooltipDiv'))
                    Ember.View.views[name_view_id].removeTooltip();
            }


            this.set('validation',validateion);

        },
        addUsergroup: function() {
            var name = this.newUsergroup.name;
            var descp = this.newUsergroup.descp;
            var parent_id = this.get('selectedGroup.id');
            var url = '/gcks.video/api/v1/user/groups';
            var data = JSON.stringify({
                "usergroup": {
                    "name": name,
                    "descp": descp,
                    "parent_id":parent_id

                }
            });
            var me = this;
            postJSON(url,data).then(function(json){
               //返回的是usergroup的 id
                if (json != -1) {
                    var usergroup = App.Usergroup.create({
                        id: json,
                        name: ''+name,
                        descp: descp,
                        parent_id:parent_id
                    });
                    me.get('model').pushObject(usergroup);
                    $('#add').modal('hide');
                    alert('添加成功');
                }
                else{
                    Ember.View.views['add_name'].addTooltip('用户组名已存在');
                }

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

            this.set("this.newUsergroup", App.Usergroup.create());


        },
        cancelAdd: function() {
            this.set("this.newUsergroup", App.Usergroup.create());
        },


        beforeAssign: function(usergroup) {
            this.get('authForGroupList').clear();
            var me = this;
            this.set('assignUsergroup', usergroup.get('name'));

            var url = '/gcks.video/api/v1/user/groups/auths/'+usergroup.get('id');

            getJSON(url).then(function(data){
                $(data).each(function(index, value) {
//                    if (value.name == me.get('assignUsergroup')) {
//                        $(value.authlist).each(function(sub_index, sub_value) {
                            var groupAuth = App.GroupAuth.create({
                                auth_decp: value.auth_decp,
                                auth_id: value.auth_id,
                                auth_name: value.auth_name,
                                group_descp: value.group_descp,
                                group_id: value.group_id,
                                group_name: value.group_name,
                                rule: Boolean(value.rule)
                            });
                            me.authForGroupList.pushObject(groupAuth);
//                        });
//                    }
                });
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

            $('#assign').modal('show');
        },
        assignAuth: function() {
            var usergroup = this.get('model').findBy('name', this.get('assignUsergroup'));

            $(this.authForGroupList).each(function(index, value) {
                if ($("#" + value.auth_id).is(':checked'))
                    value.set('rule', 1);
                else
                    value.set('rule', 0);
            });
            usergroup.set('authlist', this.authForGroupList);

            var url = '/gcks.video/api/v1/user/groups/auths';
            var data = "{" + "GroupAuth:" + JSON.stringify(this.authForGroupList) + "}";
            var me = this;
            putJSON(url,data).then(function(json){
                if(json)
                   alert('分配成功');
                else
                  alert('分配失败，请重新操作');

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

        },

        //给用户组 add  or  remove 用户
        beforeAddOrRemove: function(usergroup) {
            this.set('assignUsergroup', usergroup.get('name'));
            this.get('inGroupList').clear();
            this.get('notInGroupList').clear();
            this.set('assignUsergroup', usergroup.get('name'));

            var me = this;
            var url = "/gcks.video/api/v1/user/groups/users/" + usergroup.get('id');//+"/"+ encodeURI($.cookie('username'))

            getJSON(url).then(function(data){
                $(data).each(function(index, value) {
                    $(value.inGroup).each(function(sub_index, sub_value) {

                        var groupUser = App.GroupUser.create({
                            group_id: usergroup.get('id'),
                            username: sub_value.username,
                            status: '1'
                        });
                        me.inGroupList.pushObject(groupUser);


                    });
                    $(value.notInGroup).each(function(sub_index, sub_value) {

                        var groupUser = App.GroupUser.create({
                            group_id: usergroup.get('id'),
                            username: sub_value.username,
                            status: '0'
                        });
                        me.notInGroupList.pushObject(groupUser);


                    });
                });


                // add  remove button  , all 样式
                $('#addeach_username').attr('disabled', true);
                $('#removeeach_username').attr('disabled', true);


                if (me.get('inGroupList').length > 0)
                    $('#removeall_username').attr('disabled', false);
                else
                    $('#removeall_username').attr('disabled', true);

                if (me.get('notInGroupList').length > 0)
                    $('#addall_username').attr('disabled', false);
                else
                    $('#addall_username').attr('disabled', true);

            },function(errorStatus){

                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

            $('#addOrRemove').modal('show');

        },


        add: function(filterName) {
            var notAdd = $('#notAdd_'+filterName).val();
            var me = this;
            $(notAdd).each(function(index, value) {
                var groupUser = me.notInGroupList.findBy(filterName, value);
                me.notInGroupList.removeObject(groupUser);
                me.inGroupList.pushObject(groupUser);
            });

            // add, remove all 样式
            if (this.inGroupList.length > 0)
                $('#removeall_'+filterName).attr('disabled', false);
            else
                $('#removeall_'+filterName).attr('disabled', true);

            if (this.notInGroupList.length > 0)
                $('#addall_'+filterName).attr('disabled', false);
            else
                $('#addall_'+filterName).attr('disabled', true);

            // add  remove button
            $('#addeach_'+filterName).attr('disabled', true);
            $('#removeeach_'+filterName).attr('disabled', true);

        },
        remove: function(filterName) {
            var added = $('#added_'+filterName).val();
            var me = this;
            $(added).each(function(index, value) {
                var groupUser = me.inGroupList.findBy(filterName, value);
                me.inGroupList.removeObject(groupUser);
                me.notInGroupList.pushObject(groupUser);
            });

            // add, remove all 样式
            if (this.inGroupList.length > 0)
                $('#removeall_'+filterName).attr('disabled', false);
            else
                $('#removeall_'+filterName).attr('disabled', true);

            if (this.notInGroupList.length > 0)
                $('#addall_'+filterName).attr('disabled', false);
            else
                $('#addall_'+filterName).attr('disabled', true);

            // add  remove button
            $('#addeach_'+filterName).attr('disabled', true);
            $('#removeeach_'+filterName).attr('disabled', true);

        },

        addAll: function(filterName) {
            var me = this;
            $(this.notInGroupList).each(function(index, value) {
                me.inGroupList.pushObject(value);
            });
            this.notInGroupList.clear();

            // add, remove all 样式
            if (this.inGroupList.length > 0)
                $('#removeall_'+filterName).attr('disabled', false);
            else
                $('#removeall_'+filterName).attr('disabled', true);

            if (this.notInGroupList.length > 0)
                $('#addall_'+filterName).attr('disabled', false);
            else
                $('#addall_'+filterName).attr('disabled', true);

            // add  remove button
            $('#addeach_'+filterName).attr('disabled', true);
            $('#removeeach_'+filterName).attr('disabled', true);

        },
        removeAll: function(filterName) {
            var me = this;
            $(this.inGroupList).each(function(index, value) {
                me.notInGroupList.pushObject(value);
            });
            this.inGroupList.clear();

            // add, remove all 样式
            if (this.inGroupList.length > 0)
                $('#removeall_'+filterName).attr('disabled', false);
            else
                $('#removeall_'+filterName).attr('disabled', true);

            if (this.notInGroupList.length > 0)
                $('#addall_'+filterName).attr('disabled', false);
            else
                $('#addall_'+filterName).attr('disabled', true);

            // add  remove button
            $('#addeach_'+filterName).attr('disabled', true);
            $('#removeeach_'+filterName).attr('disabled', true);
        },

        updateGroupUser: function() {
            var doAdd = this.inGroupList.filterBy('status', '0');
            var doRemove = this.notInGroupList.filterBy('status', '1');

            var url = '/gcks.video/api/v1/user/groups/users';
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
        },
        //分配IPC
        beforeAssignIPC:function(usergroup){
            this.set('assignUsergroup', usergroup.get('name'));
            this.get('inGroupList').clear();
            this.get('notInGroupList').clear();
            this.set('assignUsergroup', usergroup.get('name'));

            var me = this;
            var url = "/gcks.video/api/v1/resource/ipcs/group/" + usergroup.get('id');//+"/"+ encodeURI($.cookie('username'));

            getJSON(url).then(function(data){

                $(data).each(function(index, value) {

                    $(value.belong).each(function(sub_index, sub_value) {

                        var ipc = App.UserIpc.create({
                            sid:sub_value.sid,
                            ipcname:''+sub_value.name,
                            group_id:usergroup.get('id'),
                            status: '1'
                        });
                        me.inGroupList.pushObject(ipc);


                    });
                    $(value.notbelong).each(function(sub_index, sub_value) {
                        var ipc = App.UserIpc.create({
                            sid:sub_value.sid,
                            ipcname:''+sub_value.name,
                            group_id:usergroup.get('id'),
                            status: '0'
                        });
                        me.notInGroupList.pushObject(ipc);


                    });
                });


                // add  remove button  , all 样式
                $('#addeach_ipcname').attr('disabled', true);
                $('#removeeach_ipcname').attr('disabled', true);


                if (me.get('inGroupList').length > 0)
                    $('#removeall_ipcname').attr('disabled', false);
                else
                    $('#removeall_ipcname').attr('disabled', true);

                if (me.get('notInGroupList').length > 0)
                    $('#addall_ipcname').attr('disabled', false);
                else
                    $('#addall_ipcname').attr('disabled', true);

            },function(errorStatus){

                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
            $('#forIPC').modal('show');

        },
        assignIPC: function() {
            var doAdd = this.inGroupList.filterBy('status', '0');
            var doRemove = this.notInGroupList.filterBy('status', '1');

            var url = '/gcks.video/api/v1/resource/ipcs/group/allocate';
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
App.UsergroupView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();


        //添加 删除 组内用户的 select 的 change事件
        $('#notAdd_username').change(function() {
            if ($('#notAdd_username').val())
                $('#addeach_username').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#addeach_username').attr('disabled', true);
        });

        $('#added_username').change(function() {
            if ($('#added_username').val())
                $('#removeeach_username').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#removeeach_username').attr('disabled', true);

        });

//给用户组分配 IPC
        $('#notAdd_ipcname').change(function() {
            if ($('#notAdd_ipcname').val())
                $('#addeach_ipcname').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#addeach_ipcname').attr('disabled', true);
        });

        $('#added_ipcname').change(function() {
            if ($('#added_ipcname').val())
                $('#removeeach_ipcname').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#removeeach_ipcname').attr('disabled', true);

        });


        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $('#system').addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});



//videoLifeCycle  视频生命周期
App.VideoConfig = Ember.Object.extend({
    configvalue:Ember.number,
    id:Ember.number,
    name:Ember.string
});
App.VideoLifeRoute = Ember.Route.extend({
    templateName: 'template/system/videoLifeCycle',
    model: function(params) {
        var url = '/gcks.video/api/v1/sysmanage/configlist' ;// /'+ encodeURI($.cookie('username'));
        var me = this;
        return getJSON(url).then(function(data){
            var list = [];
            $(data).each(function(index, value) {
                var config = App.VideoConfig.create({
                    configvalue:value.configvalue,
                    id:value.id,
                    name:value.name
                });
                list.pushObject(config);

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
            this.controller.send('reset');//当离开路由后，重置controller中的临时参数
        }

    }
});
App.VideoLifeView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $('#system').addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});
App.VideoLifeController = Ember.ArrayController.extend({
    usersRule:Ember.computed(function(){
        return $.cookie('/users') == 'true';
    }),
    userGroupsRule:Ember.computed(function(){
        return $.cookie('/userGroups') == 'true';
    }),
    videoLifeCycleRule:Ember.computed(function(){
        return $.cookie('/videoLifeCycle') == 'true';
    }),
    areasRule:Ember.computed(function(){
        return $.cookie('/areas') == 'true';
    }),
    actions:{
        reset:function(){

        },
        validate:function(){
            var validation = true;
            $(this.get('model')).each(function(index,value){
                if(Ember.View.views[value.id].get('tooltipDiv'))
                    Ember.View.views[value.id].removeTooltip();

                var configvalue = value.configvalue;
               if(configvalue!="" && isNaN(configvalue)){
                    validation = false;
                    Ember.View.views[value.id].addTooltip('数值必须为整数');
                }
               else if(configvalue!="" && !isNaN(configvalue) && configvalue <=0)
               {
                   validation = false;
                   Ember.View.views[value.id].addTooltip('数值需大于0');
               }
                else{
                    if(Ember.View.views[value.id].get('tooltipDiv'))
                        Ember.View.views[value.id].removeTooltip();
                }
            });


            if(validation)
                this.send('save');
        },
        save:function(){
            var me = this;
            var url = '/gcks.video/api/v1/sysmanage/configlist';
            var data = "{"+"config:"+JSON.stringify(me.get('model'))+"}";
            putJSON(url,data).then(function(json){
                if(json){
                   alert('更新成功!');
                }else{
                   alert('更新失败!');
                }
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionTo('login');
                else
                    me.transitionTo('errorpage');
            });
        },
        cancel:function(){
            var url = '/gcks.video/api/v1/sysmanage/configlist' ;// /'+ encodeURI($.cookie('username'));
            var me = this;
            getJSON(url).then(function(data){
                me.get('model').clear();
                $(data).each(function(index, value) {
                    var config = App.VideoConfig.create({
                        configvalue:value.configvalue,
                        id:value.id,
                        name:value.name
                    });
                    me.get('model').pushObject(config);

                });

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionTo('login');
                else
                    me.transitionTo('errorpage');
            });
        }
    }

});


//user
App.User = Ember.Object.extend({
    username: '',
    password: '',
    name: '',
    tel: '',
    e_mail: '',
    level: '',
    client_id:'',
    client_password:'',
    protocol:''
});
App.AuthForUser = Ember.Object.extend({
    auth_name: Ember.string,
    auth_res_id: Ember.number,
    descp: Ember.string,
    rule: Ember.boolean,
    username: Ember.string,
    group_rule:Ember.boolean

});
App.GroupForUser = Ember.Object.extend({
   id:Ember.number,
   name:Ember.string,
   status:Ember.string
});

App.UserIpc = Ember.Object.extend({
    sid:Ember.string,
    ipcname:Ember.string,
    username:Ember.string,
    group_id:Ember.string,
    status:''
});

App.UserRoute = Ember.Route.extend({
    templateName: 'template/system/user',
    model: function(params) {
        var url = '/gcks.video/api/v1/user/users' ;// /'+ encodeURI($.cookie('username'));
        var me = this;
       return getJSON(url).then(function(data){
           var list = [];
            $(data).each(function(index, value) {
                var user = App.User.create({
                    username: ''+value.userName,
                    password: value.password,
                    name: value.name ===undefined? '':''+value.name,
                    tel: value.tel,
                    e_mail: value.e_mail,
                    level: value.level,
                    client_id:value.client_id =='null'? '':value.client_id,
                    client_password:value.client_password =='null'? '':value.client_password,
                    protocol:value.protocol
                });
                list.pushObject(user);

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
            this.controller.send('reset');//当离开路由后，重置controller中的临时参数
        }

    }

});
App.UserView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $('#system').addClass('active');

        //初始化 新增用户 wizard

        //  select 的 change事件   多个的视乎 取到的val()会是第一个选择框的 导致结果不对
//        $('select[id^=notAdd_]').change(function() {
//             
//            if ($('[id^=notAdd_]').val())
//                $('[id^=addeach_]').attr('disabled', false); //.removeAttr('disabled') ;//
//            else
//                $('[id^=addeach_]').attr('disabled', true);
//        });
//
//        $('select[id^=added_]').change(function() {
//            if ($('[id^=added_]').val())
//                $('[id^=removeeach_]').attr('disabled', false); //.removeAttr('disabled') ;//
//            else
//                $('[id^=removeeach_]').attr('disabled', true);
//
//        });
//新增用户的时候分配组
        $('#notAdd_name').change(function() {
            if ($('#notAdd_name').val())
                $('#addeach_name').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#addeach_name').attr('disabled', true);
        });

        $('#added_name').change(function() {
            if ($('#added_name').val())
                $('#removeeach_name').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#removeeach_name').attr('disabled', true);

        });

//给用户分配 IPC
        $('#notAdd_ipcname').change(function() {
            if ($('#notAdd_ipcname').val())
                $('#addeach_ipcname').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#addeach_ipcname').attr('disabled', true);
        });

        $('#added_ipcname').change(function() {
            if ($('#added_ipcname').val())
                $('#removeeach_ipcname').attr('disabled', false); //.removeAttr('disabled') ;//
            else
                $('#removeeach_ipcname').attr('disabled', true);

        });
        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();

    }
});



App.UserController = Ember.ArrayController.extend({
    content: [],
    usersRule:Ember.computed(function(){
        return $.cookie('/users') == 'true';
    }),
    userGroupsRule:Ember.computed(function(){
        return $.cookie('/userGroups') == 'true';
    }),
    videoLifeCycleRule:Ember.computed(function(){
        return $.cookie('/videoLifeCycle') == 'true';
    }),
    areasRule:Ember.computed(function(){
        return $.cookie('/areas') == 'true';
    }),

    newUser: App.User.create(),
    authList: [],
    authForUserList: [],
    notInGroupList:[],
    inGroupList:[],
    groupIpcList:[],

    page: 1,//当前页码
    perPage: 10,//每页记录数
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

    logRule: Ember.computed(function() {
        return $.cookie('/logs');
    }),



    hasLogRule: (function() {
        if (this.get('logRule') == 'true')
            return true;
        else
            return false;

    }).property('logRule'),

    totalPages: (function() {
//        var me = this;
//
//        setInterval(function() {
//            console.log('===============ajax==============');
//
//            var url = '/gcks.video/api/v1/user/users';
//            getJSON(url).then(function(data){
//                me.get('model').clear();
//                $(data).each(function(index, value) {
//                    var user = App.User.create({
//                        username: value.userName,
//                        password: value.password,
//                        name: value.name,
//                        tel: value.tel,
//                        e_mail: value.e_mail,
//                        level: value.level
//                    });
//                    me.get('model').pushObject(user);
//
//
//                });
//            },function(errorStatus){
//                if (errorStatus == 401)
//                    me.transitionToRoute('login');
//                else
//                    me.transitionToRoute('errorpage');
//            });
//
//        }, 1000 * 60 * 5);


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




        var filter_username = this.get('filter_username');
        var filter_name = this.get('filter_name');

        //过滤
        if (filter_username || filter_name) {
            var filterarray = this.get('model').filter(function(item) {

                //                var usernameReg = new RegExp(filter_username);
                //                var nameReg = new RegExp(filter_name);
                //                return usernameReg.test(item.username) && nameReg.test(item.name);

                //中文
                if (filter_username && filter_name)
                    return (item.username.indexOf(filter_username) > -1) && (item.name.indexOf(filter_name) > -1);
                else if (filter_name)
                    return item.name.indexOf(filter_name) > -1;
                else
                    return item.username.indexOf(filter_username) > -1;


            });

            //重新设置页码
            this.set('totalPages', Math.ceil(filterarray.length / this.get('perPage')));
            return filterarray.slice(start, end);
        } else {
            this.set('totalPages', Math.ceil(this.get('model').length / this.get('perPage')));
            return this.get('model').slice(start, end); //.sortBy('username')
        }

    }).property('page', 'perPage', 'count', 'filter_username', 'filter_name', 'totalPages', 'model.[]'),

    actions: {
        reset:function(){
            this.set('page',1);
            this.set('count',0);
            this.set('notInGroupList',[]);
            this.set('inGroupList',[]);
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
        //
        deleteUser: function(user) {
            if (user.username == $.cookie('username'))
                alert("你不能删除你自个！！");
            else {
                var url = '/gcks.video/api/v1/user/users/' + encodeURI(user.username);
                var me = this;
                deleteJSON(url).then(function(data){
                    if(data ){
                        me.get('model').removeObject(user);
                        alert('删除成功');
                    }else
                        alert('删除失败，请重新操作');

                },function(errorStatus){
                    if (errorStatus == 401)
                        me.transitionToRoute('login');
                    else
                        me.transitionToRoute('errorpage');
                });

            }

        },

        beforeEdit: function(user) {
            $('#edit').modal('show');

            $('#editappointUsergroup').css('display','none');
            $('#editInfo').css('display','block');
            $('#editappoint_label').removeClass('active').addClass('disabled');
            $('#editInfo_label').removeClass('disabled').addClass('active');

            if(Ember.View.views["edit_username"].get('tooltipDiv'))
                Ember.View.views["edit_username"].removeTooltip();
//            if(Ember.View.views["edit_password"].get('tooltipDiv'))
//                Ember.View.views["edit_password"].removeTooltip();
            if(Ember.View.views["edit_name"].get('tooltipDiv'))
                Ember.View.views["edit_name"].removeTooltip();

            if(Ember.View.views["edit_tel"].get('tooltipDiv'))
                Ember.View.views["edit_tel"].removeTooltip();
            if(Ember.View.views["edit_e_mail"].get('tooltipDiv'))
                Ember.View.views["edit_e_mail"].removeTooltip();

            if(Ember.View.views["edit_client_id"].get('tooltipDiv'))
                Ember.View.views["edit_client_id"].removeTooltip();
            if(Ember.View.views["edit_client_password"].get('tooltipDiv'))
                Ember.View.views["edit_client_password"].removeTooltip();

            this.set('edit_username', user.username);
            this.set('edit_password', user.password);
            this.set('edit_name', user.name);
            this.set('edit_tel', user.tel);
            this.set('edit_e_mail', user.e_mail);
            this.set('edit_level', user.level);
            this.set('edit_client_id',user.client_id);
            this.set('edit_client_password',user.client_password);
            this.set('edit_protocol',user.protocol);

            $('#edit_protocol').val(user.protocol);

            this.set('inGroupList',[]);
            this.set('notInGroupList',[]);
// 获得 所属组信息
//            var url = '/gcks.video/api/v1/user/childgroups/'+ encodeURI(user.username);
//            var me = this;
//            getJSON(url).then(function(data){
//
//                $(data).each(function(index, value) {
//                    var usergroup = App.GroupForUser.create({
//                        id: value.id,
//                        name: value.name,
//                        status:'1'
//
//                    });
//                    me.get('inGroupList').pushObject(usergroup);
//                });
//            },function(errorStauts){
//                if (errorStauts == 401)
//                    me.transitionTo('login');
//                else
//                    me.transitionTo('errorpage');
//            });

        },
        edit_next:function(){
            if(Ember.View.views["edit_username"].get('tooltipDiv'))
                Ember.View.views["edit_username"].removeTooltip();
//            if(Ember.View.views["edit_password"].get('tooltipDiv'))
//                Ember.View.views["edit_password"].removeTooltip();
            if(Ember.View.views["edit_name"].get('tooltipDiv'))
                Ember.View.views["edit_name"].removeTooltip();

            if(Ember.View.views["edit_tel"].get('tooltipDiv'))
                Ember.View.views["edit_tel"].removeTooltip();
            if(Ember.View.views["edit_e_mail"].get('tooltipDiv'))
                Ember.View.views["edit_e_mail"].removeTooltip();

            if(Ember.View.views["edit_client_id"].get('tooltipDiv'))
                Ember.View.views["edit_client_id"].removeTooltip();
            if(Ember.View.views["edit_client_password"].get('tooltipDiv'))
                Ember.View.views["edit_client_password"].removeTooltip();

            var username = this.get('edit_username');
            var password = this.get('edit_password');
            var name = this.get('edit_name');
            var tel = this.get('edit_tel');
            var e_mail = this.get('edit_e_mail');

            var client_id = this.get('edit_client_id');
            var client_password = this.get('edit_client_password');

            this.send("validate",username,"edit_username",password,"edit_password",name,"edit_name",
                tel,"edit_tel",e_mail,"edit_e_mail",client_id,"edit_client_id",client_password,"edit_client_password");
            if(this.get("validation"))
                this.send('editUserInfo');

        },

        editUserInfo: function() {

            var username = this.get('edit_username');
//            var password = this.get('edit_password');
            var name = this.get('edit_name');
            var tel = this.get('edit_tel');
            var e_mail = this.get('edit_e_mail');
            var level = this.get('edit_level');

            var client_id = this.get('edit_client_id');
            var client_password = this.get('edit_client_password');
            var protocol = $('#edit_protocol').val();

            var me = this;
            var url = '/gcks.video/api/v1/user/users';
            var data = JSON.stringify({
                "user": {
                    "userName": username,
//                    "password": password,
                    "name": name,
                    "tel": tel,
                    "e_mail": e_mail,
                    "level": level,
                    "client_id":client_id,
                    "client_password":client_password,
                    "protocol":protocol
//                    "groupList":this.get('inGroupList')
                }
            });
            putJSON(url,data).then(function(json){
                if(json){
                    var user = me.get('model').findBy('username', ''+username);
//                    user.set('password', password);
                    user.set('name', name ===undefined? '':''+name);
                    user.set('tel', tel);
                    user.set('e_mail', e_mail);
                    user.set('level', level);
                    user.set('client_id',client_id);
                    user.set('client_password',client_password);
                    user.set('protocol',protocol);
//                    me.send('next','edit');
                }
                else
                    alert('更新失败');

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
            $('#edit').modal('hide');

        },
        editUserForGroup: function() {

            var username = this.get('edit_username');
            var doAdd = this.inGroupList.filterBy('status', '0');
            var doRemove = this.notInGroupList.filterBy('status', '1');

            var url = '/gcks.video/api/v1/user/groups/users';
            var data = "{" + "doAdd:" + JSON.stringify(doAdd) + ",doRemove:" + JSON.stringify(doRemove) + "}";
            var me = this;
            putJSON(url,data).then(function(json){
                if(json){
                    $('edit').modal('hide');
                    alert('更新成功');

                }

                else
                    alert('更新失败，请重新操作');
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

        },
        beforeAdd:function(){
            $('#addappointUsergroup').css('display','none');
            $('#addInfo').css('display','block');
            $('#addappoint_label').removeClass('active').addClass('disabled');
            $('#addInfo_label').removeClass('disabled').addClass('active');


            if(Ember.View.views["add_username"].get('tooltipDiv'))
                Ember.View.views["add_username"].removeTooltip();
            if(Ember.View.views["add_password"].get('tooltipDiv'))
                Ember.View.views["add_password"].removeTooltip();
            if(Ember.View.views["add_name"].get('tooltipDiv'))
                Ember.View.views["add_name"].removeTooltip();

            if(Ember.View.views["add_tel"].get('tooltipDiv'))
                Ember.View.views["add_tel"].removeTooltip();
            if(Ember.View.views["add_e_mail"].get('tooltipDiv'))
                Ember.View.views["add_e_mail"].removeTooltip();

            if(Ember.View.views["add_client_id"].get('tooltipDiv'))
                Ember.View.views["add_client_id"].removeTooltip();
            if(Ember.View.views["add_client_password"].get('tooltipDiv'))
                Ember.View.views["add_client_password"].removeTooltip();

//  现在新增用户 不分组
//            this.set('inGroupList',[]);
//            this.set('notInGroupList',[]);
//            var url = '/gcks.video/api/v1/user/childgroups/'+ encodeURI($.cookie('username'));
//            var me = this;
//            getJSON(url).then(function(data){
//
//                $(data).each(function(index, value) {
//                    var usergroup = App.GroupForUser.create({
//                        id: value.id,
//                        name: value.name,
//                        status:'0'
//
//                    });
//                    me.get('notInGroupList').pushObject(usergroup);
//                });
//            },function(errorStauts){
//                if (errorStauts == 401)
//                    me.transitionTo('login');
//                else
//                    me.transitionTo('errorpage');
//            });


            $('#add').modal('show');

        },


        next:function(pix){
            $('#'+pix+'Info').css('display','none');
            $('#'+pix+'appointUsergroup').css('display','block');
            $('#'+pix+'Info_label').removeClass('active').addClass('disabled');
            $('#'+pix+'appoint_label').removeClass('disabled').addClass('active');



            // add  remove button  , all 样式
            $('#addeach_name').attr('disabled', true);
            $('#removeeach_name').attr('disabled', true);


            if (this.get('inGroupList').length > 0)
                $('#removeall_name').attr('disabled', false);
            else
                $('#removeall_name').attr('disabled', true);

            if (this.get('notInGroupList').length > 0)
                $('#addall_name').attr('disabled', false);
            else
                $('#addall_name').attr('disabled', true);

        },
        previous:function(pix){
            $('#'+pix+'appointUsergroup').css('display','none');
            $('#'+pix+'Info').css('display','block');
            $('#'+pix+'appoint_label').removeClass('active').addClass('disabled');
            $('#'+pix+'Info_label').removeClass('disabled').addClass('active');
        },
        add:function(filterName){
            var notAdd = $('#notAdd_'+filterName).val();
            var me = this;
            $(notAdd).each(function(index, value) {
                var groupUser = me.notInGroupList.findBy(filterName, value);
                me.notInGroupList.removeObject(groupUser);
                me.inGroupList.pushObject(groupUser);
            });

            // add, remove all 样式
            if (this.inGroupList.length > 0)
                $('#removeall_'+filterName).attr('disabled', false);
            else
                $('#removeall_'+filterName).attr('disabled', true);

            if (this.notInGroupList.length > 0)
                $('#addall_'+filterName).attr('disabled', false);
            else
                $('#addall_'+filterName).attr('disabled', true);

            // add  remove button
            $('#addeach_'+filterName).attr('disabled', true);
            $('#removeeach_'+filterName).attr('disabled', true);

        },
        remove: function(filterName) {
            var added = $('#added_'+filterName).val();
            var me = this;
            $(added).each(function(index, value) {
                var groupUser = me.inGroupList.findBy(filterName, value);
                me.inGroupList.removeObject(groupUser);
                me.notInGroupList.pushObject(groupUser);
            });

            // add, remove all 样式
            if (this.inGroupList.length > 0)
                $('#removeall_'+filterName).attr('disabled', false);
            else
                $('#removeall_'+filterName).attr('disabled', true);

            if (this.notInGroupList.length > 0)
                $('#addall_'+filterName).attr('disabled', false);
            else
                $('#addall_'+filterName).attr('disabled', true);

            // add  remove button
            $('#addeach_'+filterName).attr('disabled', true);
            $('#removeeach_'+filterName).attr('disabled', true);

        },

        addAll: function(filterName) {
            var me = this;
            $(this.notInGroupList).each(function(index, value) {
                me.inGroupList.pushObject(value);
            });
            this.notInGroupList.clear();

            // add, remove all 样式
            if (this.inGroupList.length > 0)
                $('#removeall_'+filterName).attr('disabled', false);
            else
                $('#removeall_'+filterName).attr('disabled', true);

            if (this.notInGroupList.length > 0)
                $('#addall_'+filterName).attr('disabled', false);
            else
                $('#addall_'+filterName).attr('disabled', true);

            // add  remove button
            $('#addeach_'+filterName).attr('disabled', true);
            $('#removeeach_'+filterName).attr('disabled', true);

        },
        removeAll: function(filterName) {
            var me = this;
            $(this.inGroupList).each(function(index, value) {
                me.notInGroupList.pushObject(value);
            });
            this.inGroupList.clear();

            // add, remove all 样式
            if (this.inGroupList.length > 0)
                $('#removeall_'+filterName).attr('disabled', false);
            else
                $('#removeall_'+filterName).attr('disabled', true);

            if (this.notInGroupList.length > 0)
                $('#addall_'+filterName).attr('disabled', false);
            else
                $('#addall_'+filterName).attr('disabled', true);

            // add  remove button
            $('#addeach_'+filterName).attr('disabled', true);
            $('#removeeach_'+filterName).attr('disabled', true);
        },
        add_next:function(){
            if(Ember.View.views["add_username"].get('tooltipDiv'))
                Ember.View.views["add_username"].removeTooltip();
            if(Ember.View.views["add_password"].get('tooltipDiv'))
                Ember.View.views["add_password"].removeTooltip();
            if(Ember.View.views["add_name"].get('tooltipDiv'))
                Ember.View.views["add_name"].removeTooltip();

            if(Ember.View.views["add_tel"].get('tooltipDiv'))
                Ember.View.views["add_tel"].removeTooltip();
            if(Ember.View.views["add_e_mail"].get('tooltipDiv'))
                Ember.View.views["add_e_mail"].removeTooltip();

            if(Ember.View.views["add_client_id"].get('tooltipDiv'))
                Ember.View.views["add_client_id"].removeTooltip();
            if(Ember.View.views["add_client_password"].get('tooltipDiv'))
                Ember.View.views["add_client_password"].removeTooltip();

            var username = this.newUser.username;
            var password = this.newUser.password;
            var name = this.newUser.name;
            var tel = this.newUser.tel;
            var e_mail = this.newUser.e_mail;

            var client_id = this.newUser.client_id;
            var client_password = this.newUser.client_password;


            this.send("validate",username,"add_username",password,"add_password",name,"add_name",
                tel,"add_tel",e_mail,"add_e_mail",client_id,"add_client_id",client_password,"add_client_password");

            if(this.get("validation"))

//                this.send('next','add');
                this.send('addUser');
        },

        validate:function(username,username_view_id,password,password_view_id,name,name_view_id,tel,tel_view_id,
                          e_mail,e_mail_view_id,client_id,client_id_view_id,client_password,client_password_view_id){

            var validateion = true;
            //用户名
            if(username == null || username =='' || username==undefined){
                validateion = false;

                Ember.View.views[username_view_id].addTooltip('用户名不能为空');
            }
            else if(username.length>10){
                validateion = false;
                Ember.View.views[username_view_id].addTooltip('用户名长度不大于10个字符');
            }
            else if(containSpecial(username)){
                validateion = false;
                Ember.View.views[username_view_id].addTooltip('用户名不能含特殊字符');
            }
            else{
                if(Ember.View.views[username_view_id].get('tooltipDiv'))
                    Ember.View.views[username_view_id].removeTooltip();
            }

            //密码
            if(password_view_id == 'add_password'){
                if(password == null || password =='' || password==undefined){
                    validateion = false;

                    Ember.View.views[password_view_id].addTooltip('密码不能为空');
                }
                else if(password.length>20){
                    validateion = false;
                    Ember.View.views[password_view_id].addTooltip('密码长度不大于20个字符');
                }
                else{
                    if(Ember.View.views[password_view_id].get('tooltipDiv'))
                        Ember.View.views[password_view_id].removeTooltip();
                }
            }


            //真实姓名
           if(name.length>10){
                validateion = false;
                Ember.View.views[name_view_id].addTooltip('姓名长度不大于10个字符');
            }
           else if(containSpecial(name)){
               validateion = false;
               Ember.View.views[name_view_id].addTooltip('姓名不能含特殊字符');
           }
            else{
                if(Ember.View.views[name_view_id].get('tooltipDiv'))
                    Ember.View.views[name_view_id].removeTooltip();
            }
            //电话
            if(tel.length>0){
                var telReg = /^1[3-8]+\d{9}$/;
                var telRight = telReg.test(tel);
                if(!telRight){
                    validateion = false;
                    Ember.View.views[tel_view_id].addTooltip('电话格式不对');
                }

            }
            else{
                if(Ember.View.views[tel_view_id].get('tooltipDiv'))
                    Ember.View.views[tel_view_id].removeTooltip();
            }
            //邮箱
            if(e_mail.length>0){
                var mailReg =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                var emailRight = mailReg.test(e_mail);
                if(!emailRight){
                    validateion = false;
                    Ember.View.views[e_mail_view_id].addTooltip('邮箱格式不对');
                }

            }
            else{
                if(Ember.View.views[e_mail_view_id].get('tooltipDiv'))
                    Ember.View.views[e_mail_view_id].removeTooltip();
            }

            //访问id
            if( client_id!= undefined &&client_id.length > 0 && client_id.length!=20){
                validateion = false;
                Ember.View.views[client_id_view_id].addTooltip('访问ID长度必须为20位');
            }
            else if(client_id!= undefined &&client_id.length > 0 && !$.isNumeric(client_id)){
                validateion = false;
                Ember.View.views[client_id_view_id].addTooltip('访问ID必须为数字');
            }
            else{
                if(Ember.View.views[client_id_view_id].get('tooltipDiv'))
                    Ember.View.views[client_id_view_id].removeTooltip();
            }

            //访问密码
            if( client_password!= undefined && client_password.length>20){
                validateion = false;
                Ember.View.views[client_password_view_id].addTooltip('访问密码长度不大于20个字符');
            }
            else{
                if(Ember.View.views[client_password_view_id].get('tooltipDiv'))
                    Ember.View.views[client_password_view_id].removeTooltip();
            }
            this.set('validation',validateion);

        },

        addUser: function() {
            var username = this.newUser.username;
            var password = this.newUser.password;
            var name = this.newUser.name;
            var tel = this.newUser.tel;
            var e_mail = this.newUser.e_mail;
            var level = this.newUser.level;
            var client_id = this.newUser.client_id;
            var client_password = this.newUser.client_password;
            var protocol = $('#add_protocol').val();

            var url = '/gcks.video/api/v1/user/users';
            var data = JSON.stringify({
                "user": {
                    "userName": username,
                    "password": password,
                    "name": name,
                    "tel": tel,
                    "e_mail": e_mail,
                    "level": level,
                    "client_id":client_id,
                    "client_password":client_password,
                    "protocol":protocol
//                    "groupList":this.get('inGroupList')

                }
            });
            var me = this;
            postJSON(url,data).then(function(json){
                if(json){
                    var user = App.User.create({
                        username: ''+username,
                        password: password,
                        name: name ===undefined? '':''+name,
                        tel: tel,
                        e_mail: e_mail,
                        level: level,
                        client_id:client_id,
                        client_password:client_password,
                        protocol:protocol
                    });
                    me.get('model').pushObject(user);
                    $('#add').modal('hide');
                    alert('添加成功');
                }else{
                    Ember.View.views['add_username'].addTooltip('用户名已存在');
                }

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

            this.set("this.newUser", App.User.create());


        },
        cancelAdd: function() {
            this.set("this.newUser", App.User.create());
        },
        beforeAssign: function(user) {
            this.authForUserList.clear();
            var me = this;
            this.set('assignUser', user.get('username'));
            var url = '/gcks.video/api/v1/user/users/auths/' + encodeURI(this.get('assignUser'));
            getJSON(url).then(function(data){
                $(data).each(function(index, value) {
                    var authForUser = App.AuthForUser.create({
                        auth_name: value.name,
                        auth_res_id: value.id,
                        descp: value.descp,
                        rule: Boolean(value.rule),
                        username: user.username
//                        group_rule:false

                    });
                    me.get('authForUserList').pushObject(authForUser);
                });
                me.send('getGroupAuth');
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });

        },
        getGroupAuth:function(){
            var me = this;
            var url = '/gcks.video/api/v1/user/users/group/auths/' + encodeURI(this.get('assignUser'));
            getJSON(url).then(function(data){
                $(data).each(function(index, value) {
                    me.get('authForUserList').findBy('auth_name',value.name).set('group_rule',Boolean(value.rule));//.pushObject(authForUser);
                });
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
            $('#assign').modal('show');
        },
        assignAuth: function() {
            $(this.authForUserList).each(function(index, value) {
                if ($("#" + value.auth_res_id).is(':checked'))
                    value.set('rule', 1);
                else
                    value.set('rule', 0);
            });
            var url = '/gcks.video/api/v1/user/users/auths';
            var data =  "{" + "UserAuth:" + JSON.stringify(this.authForUserList) + "}";
            var me = this;
            putJSON(url,data).then(function(json){
                if(json)
                      alert('成功');
                else
                      alert('失败');


            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        },
        //分配IPC
        beforeAssignIPC:function(user){
            this.set('assignUsergroup', user.get('username'));
            this.set('inGroupList',[]);
            this.set('notInGroupList',[]);

            var me = this;
            var url = "/gcks.video/api/v1/resource/ipcs/user/"+encodeURI(user.get('username')); // + encodeURI($.cookie('username')) +"/" +encodeURI(user.get('username'));

            getJSON(url).then(function(data){
                $(data).each(function(index, value) {
                    $(value.belong).each(function(sub_index, sub_value) {

                        var ipc = App.UserIpc.create({
                            sid:sub_value.sid,
                            ipcname:''+sub_value.name,
                            username:user.get('username'),
                            status: '1'
                        });
                        me.inGroupList.pushObject(ipc);


                    });
                    $(value.notbelong).each(function(sub_index, sub_value) {
                        var ipc = App.UserIpc.create({
                            sid:sub_value.sid,
                            ipcname:''+sub_value.name,
                            username:user.get('username'),
                            status: '0'
                        });
                        me.notInGroupList.pushObject(ipc);


                    });
                });

                // add  remove button  , all 样式
                $('#addeach_ipcname').attr('disabled', true);
                $('#removeeach_ipcname').attr('disabled', true);


                if (me.get('inGroupList').length > 0)
                    $('#removeall_ipcname').attr('disabled', false);
                else
                    $('#removeall_ipcname').attr('disabled', true);

                if (me.get('notInGroupList').length > 0)
                    $('#addall_ipcname').attr('disabled', false);
                else
                    $('#addall_ipcname').attr('disabled', true);

            },function(errorStatus){

                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });


            url = "/gcks.video/api/v1/resource/ipcs/groupIpcs/" +encodeURI(user.get('username'));
            this.set('groupIpcList',[]);
            getJSON(url).then(function(data){
                $(data).each(function(index, value) {

                        var ipc = App.UserIpc.create({
                            sid:value.sid,
                            ipcname:''+value.name,
                            username:user.get('username'),
                            status: '1'
                        });
                        me.get('groupIpcList').pushObject(ipc);
                });
            },function(errorStatus){

                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });



            $('#forIPC').modal('show');

        },
        assignIPC: function() {
            var doAdd = this.inGroupList.filterBy('status', '0');
            var doRemove = this.notInGroupList.filterBy('status', '1');

            var url = '/gcks.video/api/v1/resource/ipcs/user/allocate';
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


//area
App.Area = Ember.Object.extend({
    id: Ember.number,
    name: Ember.string,
    descp: Ember.string,
    p_id: Ember.number
});
App.AreaRoute = Ember.Route.extend({
    templateName: 'template/system/area',
    model: function(params) {

        var url = '/gcks.video/api/v1/sysmanage/areas';
        var me = this;
        return getJSON(url).then(function(data){
            var  areaList = [];
            $(data).each(function(index, value) {
                var area = App.Area.create({
                    id: value.id,
                    name: ''+value.name,
                    descp: value.descp == "null"? "" :value.descp,
                    p_id: value.p_id
                });
                areaList.pushObject(area);

            });
            return areaList;
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionTo('login');
            else
                me.transitionTo('errorpage');
        });

    },
    actions:{
        willTransition: function(transition) {
            this.controller.send('reset');//当离开路由后，重置controller中的临时参数
        }

    }

});

App.AreaView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $('#system').addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});


App.AreaController = Ember.ArrayController.extend({
    content: [],
    usersRule:Ember.computed(function(){
        return $.cookie('/users') == 'true';
    }),
    userGroupsRule:Ember.computed(function(){
        return $.cookie('/userGroups') == 'true';
    }),
    videoLifeCycleRule:Ember.computed(function(){
        return $.cookie('/videoLifeCycle') == 'true';
    }),
    areasRule:Ember.computed(function(){
        return $.cookie('/areas') == 'true';
    }),

    newArea: App.Area.create(),

    page: 1,
    perPage: 10,
    count:0,
    areaList:(function(){
        return this.get('model');
    }).property('model.length'),
    selectedArea:null,

    currentTotalCounts:(function(){
        if(this.get('model').length >= this.get('perPage')*10 && this.get('count') > 0)
            return this.get('model').length-this.get('count')*this.get('perPage')*10;
        else if(this.get('model').length >= this.get('perPage')*10 && this.get('count') == 0)
            return this.get('perPage')*10;
        else
            return this.get('model').length;

    }).property('model.length','count','perPage'),//当前界面展示的的总数目,用于在分页组件中计算时候能加载下十页
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


        var filter_name = this.get('filter_name');

        //过滤
        if (filter_name) {
            var filterarray = this.get('model').filter(function(item) {
                    return item.name.indexOf(filter_name) > -1;


            });

            //重新设置页码
            this.set('totalPages', Math.ceil(filterarray.length / this.get('perPage')));
            return filterarray.slice(start, end);
        } else {
            this.set('totalPages', Math.ceil(this.get('model').length / this.get('perPage')));
            return this.get('model').slice(start, end); //.sortBy('username')
        }
    }).property('page','perPage','count', 'totalPages', 'model.[]','filter_name'),


    actions: {
        reset:function(){
            this.set('page',1);
            this.set('count',0);
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
        },
        deleteArea: function(area) {
            var url = '/gcks.video/api/v1/sysmanage/areas/' + area.id;
            var me = this;
            deleteJSON(url).then(function(data){
                if(data == true){
                    me.get('model').removeObject(area);
                    alert('删除成功');
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

        beforeEdit: function(area) {

            //②：内置select view
            var p_area = (this.get('areaList').findBy('id',area.p_id) == undefined || this.get('areaList').findBy('id',area.p_id) ==null)?
                null :this.get('areaList').findBy('id',area.p_id);
            this.set('selectedArea',p_area);



            this.set('edit_name', area.name);
            this.set('edit_descp', area.descp);
            $('#edit').modal('show');

        },

        editArea: function() {


            var name = this.get('edit_name');
            var descp = this.get('edit_descp');

            var p_id = this.get('selectedArea.id');//$('#edit_p_name').val();

            var url = '/gcks.video/api/v1/sysmanage/areas';
            var data = JSON.stringify({
                "area": {
                    "name": name,
                    "descp": descp,
                    "id":this.get('model').findBy('name',name).id ,
                    "p_id":p_id
                }
            });
            var me = this;
            putJSON(url,data).then(function(json){
                if(json == true ){
                    var area = me.get('model').findBy('name', name);
                    area.set('p_id',p_id);
                    area.set('descp', descp);
                    alert('成功');
                }else
                  alert('失败');

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
        },
        beforeAdd:function(){
            if(Ember.View.views["add_name_view"].get('tooltipDiv'))
                Ember.View.views["add_name_view"].removeTooltip();
            this.set('selectedArea',null);
        },
        validate:function(){
            if(Ember.View.views["add_name_view"].get('tooltipDiv'))
                Ember.View.views["add_name_view"].removeTooltip();

            var name = this.get('newArea.name');

            var validation = true;
            //区域名
            if(name == null || name =='' || name==undefined){
                validation = false;

                Ember.View.views["add_name_view"].addTooltip('区域名不能为空');
            }
            else if(containSpecial(name)){
                validation = false;

                Ember.View.views["add_name_view"].addTooltip('区域名不能含特殊字符');
            }
            else{
                if(Ember.View.views["add_name_view"].get('tooltipDiv'))
                    Ember.View.views["add_name_view"].removeTooltip();
            }


            if(validation)
                this.send('addArea');
        },

        addArea: function() {
            $('#add').modal('hide');
            var name = this.get('newArea.name');
//            var p_name = $('#add_p_name').val();
//            var p_id = this.get('areaList').findBy('name',p_name)!=undefined? this.get('areaList').findBy('name',p_name).id:null;

            var p_id = this.get('selectedArea.id');
            var descp = this.get('newArea.descp');


            var url = '/gcks.video/api/v1/sysmanage/areas';
            var data = JSON.stringify({
                "area": {
                    "name": name,
                    "descp": descp,
                    "p_id":p_id

                }
            });

            var me = this;
            postJSON(url,data).then(function(json){
                if(json.id != null || json.id != "" || json.id != undefined ){

                    var area = App.Area.create({
                        id:json.id,
                        name: ''+name,
                        descp: descp,
                        p_id:p_id
                    });
                    me.get('model').pushObject(area);
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
            this.set("newArea", App.Area.create());


        },
        cancelAdd: function() {
            if(Ember.View.views["add_name_view"].get('tooltipDiv'))
                Ember.View.views["add_name_view"].removeTooltip();
            this.set("newArea", App.Area.create());
        }
    }
});



























