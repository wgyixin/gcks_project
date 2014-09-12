App.DeleteConfirmComponent = Ember.Component.extend({
    templateName: 'template/components/delete-confirm',
    tagName: 'a',
    actions: {
        showConfirmation: function() {
            this.$().parent().find('.delete-confirm').modal('show'); //this.$()  获得当前对象的Dom
            //         this.toggleProperty('isShowingConfirmation');
        },
        confirm: function() {
            //           this.toggleProperty('isShowingConfirmation');
            //向controller中的方法冒泡
            this.sendAction('action', this.get('param'));
        }
    }
});
//历史播放
App.PlayHistoryComponent = Ember.Component.extend({
    templateName: 'template/components/play-history',
    tagName: 'a',
    actions: {
        playHistoryVideo: function() {

            this.$().parent().find('.history-video').modal('show'); //this.$()  获得当前对象的Dom
            //            this.$().parent().find('.history-video').append(" <div class='corn-modal-body'  >"
            //            +"<object classid='clsid:9bd174ee-0794-4c5b-b9e3-7845d6de41fb' id='history_ocx'>"
            //              +" </object>"
            //               +" </div>");
            this.$().parent().find('.history-video').find('.corn-modal-body').append(
                "<object classid='clsid:9bd174ee-0794-4c5b-b9e3-7845d6de41fb' id='history_ocx'>" + " </object>"
            );

            //如果将控件写在hbs中会导致有N个控件加载界面上

            //设置控件操作模式 0：实时预览 1：历史回放
            Ember.run.later(this, function() {
                history_ocx.SetMode(1);

                //设置控件大小
                history_ocx.SetWndRect(600, 500);
            }, 100);

            //登录

            //            var sServerIp = "10.7.100.31";//$('#ServerIp').val();
            //            var sServerPort ="5060";// $('#ServerPort').val();
            //            var sServerCode = "44030300002000000000";//$('#ServerCode').val();
            //            var sClientCode = "44030300004000000101";//$('#ClientCode').val();
            //            var sClientPass = "12345678";//$('#ClientPass').val();
            //            history_ocx.SetConfig(sServerIp, sServerPort, sServerCode, sClientCode, sClientPass);
            var url = "/gcks.video/api/v1/user/clientInfo";// + $.cookie('username');


            var params = this.get('param');
            var beginTime = params.dataTime.toString().replace(/ /g, 'T');
            var endTime = params.endTime.toString().replace(/ /g, 'T');
//            alert('endTime=='+endTime+"ipc=="+params.ipc_name);


            getJSON(url).then(function(data) {
                sServerIp = data.cn.ip;
                sServerPort = data.cn.port;
                sServerCode = data.cn.sid;
                sClientCode = data.user.client_id;
                sClientPass = data.user.client_password;
                history_ocx.SetConfig(sServerIp, sServerPort, sServerCode, sClientCode, sClientPass);
//                        alert('sServerIp='+sServerIp+"sServerPort="+sServerPort+"sServerCode="+sServerCode+"sClientCode="+sClientCode+"sClientPass="+sClientPass);



                //请求历史视频
                Ember.run.later(this, function() {
                    //            history_ocx.PlayVodVideo('44030300001320000402', '44030300001320000402','2014-06-26T16:56:00' , '2014-06-26T16:57:50');
                    history_ocx.PlayVodVideo(params.ipc_name, params.ipc_name, beginTime, endTime);
                }, 1500);

            }, function(errorStatus) {
                if (errorStatus == 401)
                    me.transitionTo('login');
                else
                    me.transitionTo('errorpage');
            });




//
//            var params = this.get('param');
//            var beginTime = params.dataTime.toString().replace(/ /g, 'T');
//            var endTime = params.endTime.toString().replace(/ /g, 'T');
//                        alert('endTime=='+endTime+"ipc=="+params.ipc_name);
//            //请求历史视频
//            Ember.run.later(this, function() {
//                alert('222endTime=='+endTime+"ipc=="+params.ipc_name);
//                //            history_ocx.PlayVodVideo('44030300001320000402', '44030300001320000402','2014-06-26T16:56:00' , '2014-06-26T16:57:50');
//                history_ocx.PlayVodVideo(params.ipc_name, params.ipc_name, beginTime, endTime);
//            }, 100);



        },

        close: function() {
            //关闭弹窗时，清除掉控件
            this.$().parent().find('.history-video').find('.corn-modal-body').html('')
        }
    }
});

//控制页码 显示的样式

App.PageController = Ember.ObjectController.extend({
    currentPage: Ember.computed.alias('parentController.page'),

    active: (function() {
        //        alert('pageController number ='+this.get('number')+", page="+this.get('currentPage'));
        return this.get('number') === this.get('currentPage');
    }).property('number', 'currentPage')
});

//分页控件
//App.PageNumberComponent = Ember.Component.extend({
//    templateName:'template/components/page-number',
//    tagName:'div',
//
//    totalPages:null,
//
//    page: 1,
//    perPage: 10,
//
//    pages: (function() {
//        var collection = Ember.A();
//        for (var i = 0; i < this.get('totalPages'); i++) {
//            collection.pushObject(Ember.Object.create({
//                number: i + 1
//            }));
//        }
//
//        return collection;
//    }).property('totalPages'),
//
//    hasPages: (function() {
//        return this.get('totalPages') > 1;
//    }).property('totalPages'),
//
//    prevPage: (function() {
//         var page = this.get('page');
//         var totalPages = this.get('totalPages');
//         if (page > 1 && totalPages > 1) {
//
//              return page - 1;
//         } else {
//              return null;
//         }
//    }).property('page', 'totalPages'),
//
//    nextPage: (function() {
//        var page = this.get('page');
//        var totalPages = this.get('totalPages');
//
//         if (page < totalPages && totalPages > 1) {
//             return page + 1;
//         } else {
//              return null;
//         }
//    }).property('page', 'totalPages'),
//
//
//
//    actions: {
//
//         selectPage: function(number) {
//
//         this.set('page', number);
//         this.sendAction('selectPage',this.get('page'));
//        }}
//});


App.PageNumberComponent = Ember.Component.extend({
    templateName: 'template/components/page-number',
    tagName: 'div',

    totalPages: 0,
    page: 1, //当前页码
    perPage: 10, //每页记录数
    count: 0, //请求了第几次10页 从0开始计数
    currentTotalCounts: 0, //当前已加载记录数

    pages: (function() {
        var collection = Ember.A();
        var totalPages;
        if (this.get('totalPages') > 10) {
            if (this.get('count') == 0)
                totalPages = 10;
            else
                totalPages = this.get('totalPages') % 10;
        } else
            totalPages = this.get('totalPages');
        for (var i = 0; i < totalPages; i++) {
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
        if (this.get('currentTotalCounts') >= this.get('perPage') * 10)
            return true;
        else
            return false;

    }).property('currentTotalCounts', 'perPage'),


    actions: {

        selectPage: function(number) {

            //            this.set('page', number);
            this.sendAction('selectPage', number); //this.get('page'));
        },
        loadMore: function(direction) {
            //            alert('direction=='+direction);
            //            var nowCount = this.get('count');
            //            if (direction == "next") {
            //                this.set('count', nowCount + 1);
            //            } else if (direction == "prev") {
            //                this.set('count', nowCount - 1);
            //            } else {
            //                this.set('count', 0);
            //            }
            //            this.set('page', this.get('count') * 10 + 1);
            this.sendAction('loadMore', direction);
        }
    }
});
