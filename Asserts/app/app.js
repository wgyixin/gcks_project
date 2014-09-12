var isCookie = false;
//IE8 不支持console
(function(console) {
    console||(console = window.console = {

        log: function(a, b, c, d, e) {},

        info: function(a, b, c, d, e) {},

        warn: function(a, b, c, d, e) {},

        error: function(a, b, c, d, e) {}
    });
})(window.console);

App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true,
    ready: function() {

        console.log("Ember.TEMPLATES: ", Ember.TEMPLATES);
        if (navigator.cookieEnabled) {
            isCookie = true;
        }
    }
});
App.LoadingView = Ember.View.extend({
    tagName:'h2',
    templateName:'template/loadingView'
});

App.LoginView = Ember.View.extend({
    loginTextField: Ember.TextField.extend({
        didInsertElement: function() {
            this._super();
            this.$().focus();
        }
    }),
    passTextField: Ember.TextField.extend({
        insertNewline: function() {
            //            var controller =  this.get("controller");    这样获得的是这个component的controller 而不是loginController
            // 当然如果 是直接loginView的方法可以直接用
            this.get("targetObject").send('login');
        }
    })

});
App.LoginController = Ember.ObjectController.extend({
    isLoggedIn: false,
    username: '',
    password: '',
    needs: ["main", "user","realtime","ipcs","ipcLink","mainframe","clientLink","plans","service","cn","rn","logs","usergroup","area","videoLife"],
    actions: {
        login: function() {

            var username = this.get('username');
            var password = this.get('password');

            $.cookie('username', username);
            this.get("controllers.main").set('curUser', $.cookie('username'));

            var url = '/gcks.video/api/v1/user/users/login';
            if (isCookie) {

                var data = JSON.stringify({
                    "user": {
                        "userName": username,
                        "password": password
                    }
                });
                var me = this;

                postJSON(url,data).then(function(json){
                        //成功
                    $(json).each(function(index, value) {

                        $.cookie(value.name, Boolean(value.rule));
                    });
                        me.set('username', '');
                        me.set('password', '');
                    me.get("controllers.main").set('videoRule',$.cookie('/videoMonotor')== 'true');
                    me.get("controllers.main").set('historyRule',$.cookie('/history')== 'true');
                    me.get("controllers.main").set('ipcRule', $.cookie('/ipcs')== 'true');
                    me.get("controllers.main").set('taskRule', $.cookie('/tasks')== 'true');
                    me.get("controllers.main").set('linkRule', ($.cookie('/linkedIPC')== 'true' || $.cookie('/linkedClient')== 'true'));
                    me.get("controllers.main").set('operationRule', ($.cookie('/CN')=='true' || $.cookie('/RN') =='true'
                        || $.cookie('/hosts') =='true' || $.cookie('/logs') == 'true' || $.cookie('/services')== 'true'));
                    me.get("controllers.main").set('sysRule', ($.cookie('/users') == 'true' || $.cookie('/userGroups') == 'true'
                        || $.cookie('/videoLifeCycle') == 'true' || $.cookie('/areas') == 'true'));


                    me.get("controllers.ipcs").set('operateRule',$.cookie('/ipcOperate')== 'true');

                    me.get("controllers.ipcLink").set('ipcLinkRule',$.cookie('/linkedIPC')== 'true');
                    me.get("controllers.ipcLink").set('clientLinkRule', $.cookie('/linkedClient')== 'true');

                    me.get("controllers.clientLink").set('ipcLinkRule',$.cookie('/linkedIPC')== 'true');
                    me.get("controllers.clientLink").set('clientLinkRule', $.cookie('/linkedClient')== 'true');

                    me.get("controllers.plans").set('planOperateRule',$.cookie('/tasksOperate')== 'true');

                    me.get("controllers.service").set('serviceRule',$.cookie('/services')== 'true');
                    me.get("controllers.service").set('cnRule', $.cookie('/CN')== 'true');
                    me.get("controllers.service").set('rnRule',$.cookie('/RN')== 'true');
                    me.get("controllers.service").set('hostsRule', $.cookie('/hosts')== 'true');
                    me.get("controllers.service").set('logRule', $.cookie('/logs')== 'true');

                        me.get("controllers.cn").set('serviceRule',$.cookie('/services')== 'true');
                        me.get("controllers.cn").set('cnRule', $.cookie('/CN')== 'true');
                        me.get("controllers.cn").set('rnRule',$.cookie('/RN')== 'true');
                        me.get("controllers.cn").set('hostsRule', $.cookie('/hosts')== 'true');
                        me.get("controllers.cn").set('logRule', $.cookie('/logs')== 'true');


                        me.get("controllers.rn").set('serviceRule',$.cookie('/services')== 'true');
                        me.get("controllers.rn").set('cnRule', $.cookie('/CN')== 'true');
                        me.get("controllers.rn").set('rnRule',$.cookie('/RN')== 'true');
                        me.get("controllers.rn").set('hostsRule', $.cookie('/hosts')== 'true');
                        me.get("controllers.rn").set('logRule', $.cookie('/logs')== 'true');


                        me.get("controllers.mainframe").set('serviceRule',$.cookie('/services')== 'true');
                        me.get("controllers.mainframe").set('cnRule', $.cookie('/CN')== 'true');
                        me.get("controllers.mainframe").set('rnRule',$.cookie('/RN')== 'true');
                        me.get("controllers.mainframe").set('hostsRule', $.cookie('/hosts')== 'true');
                        me.get("controllers.mainframe").set('logRule', $.cookie('/logs')== 'true');

                        me.get("controllers.logs").set('serviceRule',$.cookie('/services')== 'true');
                        me.get("controllers.logs").set('cnRule', $.cookie('/CN')== 'true');
                        me.get("controllers.logs").set('rnRule',$.cookie('/RN')== 'true');
                        me.get("controllers.logs").set('hostsRule', $.cookie('/hosts')== 'true');
                        me.get("controllers.logs").set('logRule', $.cookie('/logs')== 'true');



                        me.get("controllers.user").set('usersRule',$.cookie('/users')== 'true');
                        me.get("controllers.user").set('userGroupsRule', $.cookie('/userGroups')== 'true');
                        me.get("controllers.user").set('videoLifeCycleRule',$.cookie('/videoLifeCycle')== 'true');
                        me.get("controllers.user").set('areasRule', $.cookie('/areas')== 'true');

                        me.get("controllers.usergroup").set('usersRule',$.cookie('/users')== 'true');
                        me.get("controllers.usergroup").set('userGroupsRule', $.cookie('/userGroups')== 'true');
                        me.get("controllers.usergroup").set('videoLifeCycleRule',$.cookie('/videoLifeCycle')== 'true');
                        me.get("controllers.usergroup").set('areasRule', $.cookie('/areas')== 'true');

                        me.get("controllers.area").set('usersRule',$.cookie('/users')== 'true');
                        me.get("controllers.area").set('userGroupsRule', $.cookie('/userGroups')== 'true');
                        me.get("controllers.area").set('videoLifeCycleRule',$.cookie('/videoLifeCycle')== 'true');
                        me.get("controllers.area").set('areasRule', $.cookie('/areas')== 'true');

                        me.get("controllers.videoLife").set('usersRule',$.cookie('/users')== 'true');
                        me.get("controllers.videoLife").set('userGroupsRule', $.cookie('/userGroups')== 'true');
                        me.get("controllers.videoLife").set('videoLifeCycleRule',$.cookie('/videoLifeCycle')== 'true');
                        me.get("controllers.videoLife").set('areasRule', $.cookie('/areas')== 'true');


                        me.get("controllers.realtime").set('ptzRule', $.cookie('/PTZ')== 'true');
                        me.get("controllers.realtime").set('videoRule',$.cookie('/videoMonotor')== 'true');




                        me.transitionToRoute('realtime');
                },function(errorStatus){
                        //失败
                        me.set('username', '');
                        me.set('password', '');
                    if (errorStatus == 401) {

                        $('#hint').show();
                        me.transitionToRoute('login');
                    }
                    else
                        me.transitionToRoute('errorpage');

                }
            );



            } else {
                Ember.$.ajax({
                    type: 'POST',
                    url: url,
                    data: JSON.stringify({
                        "user": {
                            "userName": username,
                            "password": password
                        }
                    }),
                    context: this,
                    cache: false,
                    async: true,
                    contentType: "application/json;charset=UTF-8",
                    dataType: "json",
                    Authorization: "Basic MTExOjExMQ==",
                    success: function(data, textStatus) {
                        this.transitionToRoute('ipcs');

                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        console.log('error status:' + XMLHttpRequest.status + ' readyState:' + XMLHttpRequest.readyState + ' textStatus:' + textStatus);
                        if (XMLHttpRequest.status == 401) {
                            this.set('username', '');
                            this.set('password', '');
                            $('#hint').show();
                            this.transitionToRoute('login');
                        }
                        else
                            this.transitionToRoute('errorpage');

                    }
                });
            }
        }



        //测试  重试过渡   不行获取不到transition对象

        //        login:function(){
        //           var previousTransition = this.get('previousTransition');
        //            console.log('previousTransition::'+previousTransition);
        //            if(previousTransition){
        //                this.set('previousTransition',null);
        //                previousTransition.retry();
        //            }else{
        //                this.transitionToRoute('realtime');
        //            }
        //        }
    }
});

App.LoginRoute = Ember.Route.extend({
    templateName: 'template/login'
});

App.MainRoute = Ember.Route.extend({
    templateName: 'template/main',

    model: function() {
        if(!$.cookie('username'))    //使得不能直接通过url 访问，必须先登录
           this.transitionTo('login');
        return headerMenus;
    }

});
App.MainController = Ember.ArrayController.extend({
    needs: ["login", "user"],
    curUser: Ember.computed(function() {
        return $.cookie('username');
    }),

    //auth
    videoRule:Ember.computed(function(){
        return $.cookie('/videoMonotor') == 'true';
    }),
    historyRule:Ember.computed(function(){
        return $.cookie('/history') == 'true';
    }),

    ipcRule: Ember.computed(function() {
        return $.cookie('/ipcs')== 'true';
    }),
    linkRule :Ember.computed(function(){
       return ($.cookie('/linkedIPC') == 'true' || $.cookie('/linkedClient') == 'true');
    }),

    taskRule: Ember.computed(function() {
        return $.cookie('/tasks') == 'true';
    }),
    operationRule:Ember.computed(function(){
       return ($.cookie('/CN')=='true' || $.cookie('/RN') =='true'
           || $.cookie('/hosts') =='true' || $.cookie('/logs') == 'true' || $.cookie('/services')== 'true');
    }),

    sysRule: Ember.computed(function() {
        return ($.cookie('/users') == 'true' || $.cookie('/userGroups') == 'true'
            || $.cookie('/videoLifeCycle') == 'true' || $.cookie('/areas') == 'true');
    }),

    linkOption:(function(){
        if(this.get('linkRule'))
            if($.cookie('/linkedIPC') == 'true')
                return 'ipcLink';
            else
                return 'clientLink';
        else
            return '#';
    }).property('linkRule'),
    operationOption:(function(){
        if(this.get('operationRule'))
        {
            if($.cookie('/services') == 'true')
                return 'service';
            else if( $.cookie('/CN') == 'true')
                return 'cn';
            else if( $.cookie('/RN') == 'true')
                return 'rn';
            else if( $.cookie('/logs') == 'true')
                return 'logs';
            else
                return 'mainframe';
        }

        else
            return '#';
    }).property('operationRule'),
    sysOption:(function(){
        if(this.get('sysRule'))
            if($.cookie('/users') == 'true')
                return 'user';
            else if( $.cookie('/userGroups') == 'true')
                return 'usergroup';
            else if( $.cookie('/videoLifeCycle') == 'true')
                return 'videoLife';
            else
                return 'area';
        else
            return '#';
    }).property('sysRule'),


    actions: {
        logout: function() {
            console.log('logout');
            var url = "/gcks.video/api/v1/user/users/logout";
            if (isCookie) {
                var me = this;
                getJSON(url).then(function(json){
                    me.get("controllers.login").set('username', '');
                    me.get("controllers.login").set('password', '');

                    $.removeCookie('username');
                    me.set('curUser', '');
//
                    $.removeCookie('/ipcs');
                    $.removeCookie('/ipcOperate');
                    me.set('ipcRule', false);
//
                    $.removeCookie('/tasks');
                    $.removeCookie('/tasksOperate');

                    me.set('taskRule', false);
//
//
                    $.removeCookie('/videoMonotor');
                    $.removeCookie('/PTZ');

                    me.set('videoRule',false);
//
                    $.removeCookie('/history');
                    me.set('historyRule',false);
//
//
                    $.removeCookie('/linkedIPC');
                    $.removeCookie('/linkedClient');
                    me.set('linkRule',false);
//
                    $.removeCookie('/services');
                    $.removeCookie('/CN');
                    $.removeCookie('/RN');
                    $.removeCookie('/hosts');
                    $.removeCookie('/logs');

                    me.set('operationRule',false);

//
                    $.removeCookie('/users');
                    $.removeCookie('/userGroups');
                    $.removeCookie('/videoLifeCycle');
                    $.removeCookie('/areas');
                    me.set('sysRule',false);




                    me.transitionToRoute('login');
                },function(errorStatus){

                });

            }
        },
        validateForPasswd:function(){
            if(Ember.View.views["oldPassword"].get('tooltipDiv'))
                Ember.View.views["oldPassword"].removeTooltip();
            if(Ember.View.views["newPassword"].get('tooltipDiv'))
                Ember.View.views["newPassword"].removeTooltip();
            if(Ember.View.views["rePassword"].get('tooltipDiv'))
                Ember.View.views["rePassword"].removeTooltip();

            var oldPassword = this.get('oldPassword');
            var newPassword = this.get('newPassword');
            var rePassword = this.get('rePassword');
//            var pwdRight = (password == this.get('model.password'));
            var rePwdRight = (newPassword == rePassword);

            var validation = true;
//密码修改的验证
//            if(!pwdRight)
//                $('#pwdError').show();
            if(oldPassword === undefined || oldPassword == "" || oldPassword == null){
                validation = false;
                Ember.View.views["oldPassword"].addTooltip('请输入原密码');
            }
            if(!rePwdRight)
            {
                validation = false;
                Ember.View.views["rePassword"].addTooltip('两次密码输入不一致');
            }

            if((newPassword === undefined || newPassword == "" || newPassword == null)
            		&& (rePassword === undefined || rePassword == "" || rePassword == null) )
            {
                validation = false;
                Ember.View.views["newPassword"].addTooltip('请输入新密码');
            }

            if(validation)
                this.send('updatePasswd');
        },
        updatePasswd:function(){
            var url = '/gcks.video/api/v1/user/users/passset';
            var me = this;
            var data = JSON.stringify({
               "username":this.get('curUser'),
                "Password":this.get('oldPassword'),
                "newPassword":this.get('newPassword')
            });
            putJSON(url,data).then(function(json){
                if(json.result == "success" ){
                   me.send('removeIframe_ActiveX');
                    alert('修改密码成功')
                }

                else if(json.result== "wrong password")
                    Ember.View.views["oldPassword"].addTooltip('原密码不对');
                else
                {
                    me.send('removeIframe_ActiveX');
                    alert('修改密码失败');
                }
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });


        },
        removeIframe_ActiveX:function(){
            $('#updatePasswd').modal('hide');
            //删除该iframe
            removeIframe_ActiveX();
        },
        beforeUpdatePassword:function(){
            if(Ember.View.views["oldPassword"].get('tooltipDiv'))
                Ember.View.views["oldPassword"].removeTooltip();
            if(Ember.View.views["newPassword"].get('tooltipDiv'))
                Ember.View.views["newPassword"].removeTooltip();
            if(Ember.View.views["rePassword"].get('tooltipDiv'))
                Ember.View.views["rePassword"].removeTooltip();

            this.set('oldPassword','');
            this.set('newPassword','');
             this.set('rePassword','');


            var nowindex = parseInt( $('#updatePasswd').css('z-index'));
            $('#updatePasswd').css('z-index',nowindex+1);
            //加一个iframe以遮住ActiveX
            createIframe_ActiveX(nowindex);
            $('#updatePasswd').modal('show');
        }
    }
});

App.Router.map(function() {
    this.resource('login', {
        path: '/'
    });

    this.resource('errorpage');
    this.resource("main", function() {


        this.resource("realtime");

        this.resource("gis");
        this.resource("history");
        //record
        this.resource("plans");
        this.resource("record");

        //ipc management
        this.resource("ipcs", {
            queryParams: ['position']
        }, function() {
            //            this.resource('ipc',{queryParams:['id'],path:'ipcs/:ipc_id'});
            //ipc', { path: ':ipc_id' }
        });
        this.resource('ipc', {
            queryParams: ['id'],
            path: 'ipcs/:ipc_id'
        });

        this.resource("major");

        //link management
        this.resource("ipcLink");
        this.resource("clientLink");

        this.resource("statistics");
        this.resource("imgStatistics");
        this.resource("serviceStatistics");
        //system
        this.resource("user");
        this.resource("usergroup");
        this.resource("videoLife");
        this.resource("area");


        //operation
        this.resource("service");
        this.resource("cn");
        this.resource("database");
        this.resource("hdfs");
        this.resource("mainframe");
        this.resource("rn");
        this.resource("webServer");
        this.resource("monitoringApp");
        this.resource("logs");

        //userinfo
        this.resource('userinfo');
    });

});


App.HeaderMenu = Ember.Object.extend({
    id: '',
    name: '',
    hrefTo: ''
});
var headerMenus = [];

App.ErrorpageRoute = Ember.Route.extend({
   templateName:'template/errorpage'
});

