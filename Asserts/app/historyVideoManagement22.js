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
    id: Ember.number,
    dataPosition: Ember.string,
    mediaType: Ember.string,
    coding: Ember.string,
    size: Ember.number,
    beginTime: Ember.date,
    timeLength: Ember.number,
    rn_sid: Ember.string,
    rn_name: Ember.string,
    task_id: Ember.number,
    task_name: Ember.string,
    ipc_sid: Ember.string

});

/**
 * video management
 * @type {*|void|Object}
 */
App.HistoryRoute = Ember.Route.extend({
    templateName: 'template/history/history',

    model: function(params) {

        //加载video list

        var list = [];
        var url = '/gcks.video/api/v1/video/medias?beginRCount=0&pageCount=10';
        var me = this;
        getJSON(url).then(function(json){
            $(json).each(function(index, value) {
                var video = App.Video.create({
                    id: value.id,
                    dataPosition: value.position,
                    mediaType: value.type,
                    coding: value.coding,
                    size: value.size,
                    beginTime: value.begintime.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),
                    timeLength: value.length,
                    rn_sid: value.rn_sid,
                    rn_name: value.rn_name,
                    task_id: value.task_id,
                    task_name: value.task_name,
                    ipc_sid: value.ipc_sid
                });

                list.pushObject(video);
            });
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionTo('login');
            else
                me.transitionTo('error');
        });
        return list;
    }
});


App.HistoryController = Ember.ArrayController.extend({
    content: [],
    newVideo: App.Video.create(),

    sortProperties: ['id'],
    sortAscending: false,

    page: 1,
    perPage: 1,
    count: 0, //继续请求10页

    totalPages: (function() {
        //        debugger
        return Math.ceil(this.get('model').length / this.get('perPage'));
    }).property("model.length", 'perPage'),

    pages: (function() {
        var collection = Ember.A();
        for (var i = 0; i < this.get('totalPages'); i++) {
            collection.pushObject(Ember.Object.create({
                number: i + 1 + this.get('count') * 10
            }));
        }

        return collection;
    }).property('totalPages', 'count'),

    hasPages: (function() {
        return (this.get('totalPages') > 1) || (this.get('count') > 0);
    }).property('totalPages', 'count'),

    prevPage: (function() {
        var page = this.get('page');
        var totalPages = this.get('totalPages');
        var count = this.get('count') * 10 + 1;

        if (page > count && totalPages > 1) {
            return page - 1;
        } else {
            return null;
        }
    }).property('page', 'totalPages', 'count'),

    nextPage: (function() {
        var page = this.get('page');
        var count = this.get('count') * 10;
        var totalPages = this.get('totalPages') + count;


        if (page < totalPages && totalPages > 1) {
            return page + 1;
        } else {
            return null;
        }
    }).property('page', 'totalPages', 'count'),

    prevTenPage: (function() {
        if (this.get('count') > 0)
            return true;
        else
            return false;

    }).property('count'),

    nextTenPage: (function() {
        if (this.get('model').length == 10)
            return true;
        else
            return false;

    }).property('model.length'),


    paginatedContent: (function() {
        //        var start = (this.get('page') - 1) * this.get('perPage');
        //        var end = start + this.get('perPage');


        var start;
        if (this.get('page') <= 10)
            start = (this.get('page') - 1) * this.get('perPage');
        else
            start = (this.get('page') - this.get('count') * 10 - 1) * this.get('perPage');
        var end = start + this.get('perPage');


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

    }).property('page', 'totalPages', 'count', 'model.[]', 'filter_ipc'),


    actions: {

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
            var beginRCount = this.get('count') * 10;

            //配合查询
            var search_startTime = this.get('search_startTime');
            var search_endTime = this.get('search_endTime');
            if (search_startTime && search_endTime) {
                this.send('searchLoad', search_startTime, search_endTime, beginRCount);
            } else {
                var me = this;
                var url = '/gcks.video/api/v1/video/medias?beginRCount=' + beginRCount + '&pageCount=10';

                getJSON(url).then(function(data){
                    me.get('model').clear();
                    $(data).each(function(index, value) {
                        console.log(value);
                        var video = App.Video.create({
                            id: value.id,
                            dataPosition: value.position,
                            mediaType: value.type,
                            coding: value.coding,
                            size: value.size,
                            beginTime: value.begintime.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),,
                            timeLength: value.length,
                            rn_sid: value.rn_sid,
                            rn_name: value.rn_name,
                            task_id: value.task_id,
                            task_name: value.task_name,
                            ipc_sid: value.ipc_sid
                        });

                        me.get('model').pushObject(video);
                    });
                },function(errorStatus){
                    if (errorStatus == 401)
                        me.transitionToRoute('login');
                    else
                        me.transitionToRoute('error');
                });

            }
        },

        deleteVideo: function(video) {
            var url = '/gcks.video/api/v1/video/medias/' + video.id;
            var me = this;
            deleteJSON(url).then(function(data){
                if (JSON.stringify(data) == 'true')
                    me.send('loadMore', 'delete');
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('error');
            });
        },

        searchLoad: function(beginTime, endTime, beginRCount) {

            beginTime = encodeURI(beginTime);
            endTime = encodeURI(endTime);

            var me = this;
            var url = "/gcks.video/api/v1/video/media/" + beginTime + "/" + endTime + "?beginRCount=" + beginRCount + "&pageCount=10";

            getJSON(url).then(function(data){
                me.get('model').clear();
                $(data).each(function(index, value) {
                    console.log(value);
                    var video = App.Video.create({
                        id: value.id,
                        dataPosition: value.position,
                        mediaType: value.type,
                        coding: value.coding,
                        size: value.size,
                        beginTime: value.begintime.toString().substring(0, 16).replace(/T/g, ' '), //.replace(/-/g,'/'),,
                        timeLength: value.length,
                        rn_sid: value.rn_sid,
                        rn_name: value.rn_name,
                        task_id: value.task_id,
                        task_name: value.task_name,
                        ipc_sid: value.ipc_sid
                    });
                    me.get('model').pushObject(video);
                });
            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('error');
            });
        },
        search: function() {
            var search_startTime = this.get('search_startTime');
            var search_endTime = this.get('search_endTime');
            if (search_startTime && search_endTime) {
                this.send('searchLoad', search_startTime, search_endTime, 0);
            } else
                this.send('loadMore', "searchAll");
        }
    }
});

App.HistoryView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        datePicker();
        //后退 2个菜单都选中
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#history").addClass('active');
    }
});