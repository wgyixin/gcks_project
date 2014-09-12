/**
 * Created by wang on 14-4-24.
 */
/*
 视频管理
 */

var linkMenu = App.HeaderMenu.create({
    id: 'ipcLink',
    name: '连接管理',
    hrefTo: 'ipcLink'
});

headerMenus.pushObject(linkMenu);


//ipcLink
App.IpcLink = Ember.Object.extend({
    ip: Ember.string,
    mediaPort: Ember.number,
    name: Ember.string,
    port: Ember.number,
    regTime: Ember.number,
    sid: Ember.string
});
App.IpcLinkRoute = Ember.Route.extend({
    templateName: 'template/link/ipcLink',
    model: function() {

        var url = '/gcks.video/api/v1/access/accessipcs';
        var me = this;
        return getJSON(url).then(function(data){
            var list = [];
            $(data).each(function(index, value) {
                var ipcLink = App.IpcLink.create({
                    ip: value.ip,
                    mediaPort: value.mediaPort,
                    name: value.name,
                    port: value.port,
                    regTime: value.regTime,
                    sid: value.sid
                });
                list.pushObject(ipcLink);

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
App.IpcLinkController = Ember.ArrayController.extend({
    content: [],
    ipcLinkRule:Ember.computed(function(){
       return $.cookie('/linkedIPC') == 'true';
    }),
    clientLinkRule:Ember.computed(function(){
        return $.cookie('/linkedClient') == 'true';
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
        return this.get('model').slice(start, end); //.sortBy('username')
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
App.IpcLinkView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#ipcLink").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题; 因为修改密码各处都有 所以要判断下
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});

//clientLink

App.ClientLink = Ember.Object.extend({
    ip: Ember.string,
    mediaPort: Ember.number,
    name: Ember.string,
    port: Ember.number,
    regTime: Ember.number,
    sid: Ember.string
});
App.ClientLinkRoute = Ember.Route.extend({
    templateName: 'template/link/clientLink',
    model: function() {

        var url = '/gcks.video/api/v1/access/accessclients';
        var me = this;
        return getJSON(url).then(function(data){
            var list = [];
            $(data).each(function(index, value) {
                var clientLink = App.ClientLink.create({
                    ip: value.ip,
                    mediaPort: value.mediaPort,
                    name: value.name,
                    port: value.port,
                    regTime: value.regTime,
                    sid: value.sid
                });
                list.pushObject(clientLink);

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
App.ClientLinkController = Ember.ArrayController.extend({
    content: [],
    ipcLinkRule:Ember.computed(function(){
        return $.cookie('/linkedIPC') == 'true'
    }),
    clientLinkRule:Ember.computed(function(){
        return $.cookie('/linkedClient') == 'true'
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
//

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

App.ClientLinkView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#ipcLink").addClass('active');

        //点击后退 backspace 直接的  弹出层的背景色还在的问题
        if( $('#iframe_ActiveX').attr('id') == undefined)
            $('div[class*=modal-backdrop]').remove();
    }
});