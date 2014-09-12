/**
 * Created by wang on 14-4-24.
 */
/*
 视频管理
 */

var gisMenu = App.HeaderMenu.create({
    id: 'gis',
    name: '地图监控',
    hrefTo: 'gis'
});

headerMenus.pushObject(gisMenu);


/**
 * video management
 * @type {*|void|Object}
 */
App.GisRoute = Ember.Route.extend({
    templateName: 'template/gis/gis'
    //    beforeModel:function(transition){
    //        console.log('gis transition::'+transition);
    //        var loginController = this.controllerFor('login');
    //        loginController.set('previousTransition',this.transition);
    //        this.transitionTo('login');
    //    }
});

App.GisView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $('#gis').addClass('active');
     /*   var setting = {

            edit: {
                enable: false,
                editNameSelectAll: true
            },
            data: {
                simpleData: {
                    enable: true
                }
            }
        };
        //ztree test data
        var zNodes = [{
            id: 1,
            pId: 0,
            name: "北京市(3)",
            open: true,
            icon: "./Asserts/img/ico/fy.png"
        }, {
            id: 11,
            pId: 1,
            name: "海淀区(1)",
            stdno: "11",
            stdname: "HTML",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            open: true,
            icon: "./Asserts/img/treeicon/sjzxh.PNG"
        }, {
            id: 111,
            pId: 11,
            name: "北京大学(2)",
            stdno: "111",
            stdname: "HEAD",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            open: true,
            icon: "./Asserts/img/treeicon/sjfwjdh.PNG",
        }, {
            id: 1111,
            pId: 111,
            name: "百年讲堂",
            stdno: "1111",
            stdname: "META",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            icon: "./Asserts/img/treeicon/yhxth.PNG"
        }, {
            id: 1112,
            pId: 111,
            name: "英杰交流中心",
            stdno: "1112",
            stdname: "TITLE",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            icon: "./Asserts/img/treeicon/yhxt.PNG"
        }, {
            id: 12,
            pId: 1,
            name: "西城区(1)",
            stdno: "11",
            stdname: "HTML",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            open: true,
            icon: "./Asserts/img/treeicon/sjzx.PNG"
        }, {
            id: 121,
            pId: 12,
            name: "北京师范大学(2)",
            stdno: "121",
            stdname: "BODY",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            open: true,
            icon: "./Asserts/img/treeicon/sjfwjd.PNG"
        }, {
            id: 1221,
            pId: 121,
            name: "励耘楼",
            stdno: "1221",
            stdname: "DIV",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            icon: "./Asserts/img/treeicon/yhxt.PNG"
        }, {
            id: 1222,
            pId: 121,
            name: "京师大厦",
            stdno: "1222",
            stdname: "SPAN",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            icon: "./Asserts/img/treeicon/yhxt.PNG"
        }, {
            id: 13,
            pId: 1,
            name: "朝阳区(1)",
            stdno: "11",
            stdname: "HTML",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            open: true,
            icon: "./Asserts/img/treeicon/sjzx.PNG"
        }, {
            id: 131,
            pId: 13,
            name: "soho大厦(1)",
            stdno: "121",
            stdname: "BODY",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            open: true,
            icon: "./Asserts/img/treeicon/sjfwjd.PNG"
        }, {
            id: 1311,
            pId: 131,
            name: "码农地界",
            stdno: "1221",
            stdname: "DIV",
            bakstd: "",
            distdate: "",
            distcomp: "",
            fulltext: "",
            summary: "",
            scope: "",
            privacy: "",
            icon: "./Asserts/img/treeicon/yhxt.PNG"
        }];
*/
        //初始化ztree
//        $.fn.zTree.init($("#ztree"), setting, zNodes);

        var setting = {
            async: {
                enable: true,
                contentType:"application/json",
                url: getUrl

            },
            check: {
                enable: true
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            view: {
                expandSpeed: ""
            },
            callback: {
                beforeExpand: beforeExpand,
                onAsyncSuccess: onAsyncSuccess,
                onAsyncError: onAsyncError
            }
        };

        var zNodes =[];

//初始化ztree
        $.fn.zTree.init($("#ztree"), setting, zNodes);


    }

});


function getUrl(treeId, treeNode) {
   var url;
    if(treeNode == null || treeNode == undefined )
      url = "/gcks.video/api/v1/sysmanage/areas/ztree";
    else
      url ="/gcks.video/api/v1/resource/ipcs/tree?id="+treeNode.id;
    return url;

}
function beforeExpand(treeId, treeNode) {
//    if (!treeNode.isAjaxing) {
//        startTime = new Date();
//        treeNode.times = 1;
//        ajaxGetNodes(treeNode, "refresh");
//        return true;
//    } else {
//        alert("zTree 正在下载数据中，请稍后展开节点。。。");
//        return false;
//    }
}
var log, className = "dark",
    startTime = 0, endTime = 0, perCount = 100, perTime = 100;
function onAsyncSuccess(event, treeId, treeNode, msg) {
//    if (!msg || msg.length == 0) {
//        return;
//    }
//    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
////        totalCount = treeNode.count;
////    if (treeNode.children.length < totalCount) {
////        setTimeout(function() {ajaxGetNodes(treeNode);}, perTime);
////    } else {
//        treeNode.icon = "";
//        zTree.updateNode(treeNode);
//        zTree.selectNode(treeNode.children[0]);
//        endTime = new Date();
//        var usedTime = (endTime.getTime() - startTime.getTime())/1000;
//        className = (className === "dark" ? "":"dark");
//        showLog("[ "+getTime()+" ]&nbsp;&nbsp;treeNode:" + treeNode.name );
//        showLog("加载完毕，共进行 "+ (treeNode.times-1) +" 次异步加载, 耗时："+ usedTime + " 秒");
//    debugger
////    }
}
function onAsyncError(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
//    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
//    alert("异步获取数据出现异常。");
//    treeNode.icon = "";
//    debugger
//    zTree.updateNode(treeNode);
}
function ajaxGetNodes(treeNode, reloadType) {
//    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
//    if (reloadType == "refresh") {
//        treeNode.icon = "../../../css/zTreeStyle/img/loading.gif";
//        debugger
//        zTree.updateNode(treeNode);
//    }
//    zTree.reAsyncChildNodes(treeNode, reloadType, true);
}
function showLog(str) {
//    if (!log) log = $("#log");
//    log.append("<li class='"+className+"'>"+str+"</li>");
//    if(log.children("li").length > 4) {
//        log.get(0).removeChild(log.children("li")[0]);
//    }
}
function getTime() {
//    var now= new Date(),
//        h=now.getHours(),
//        m=now.getMinutes(),
//        s=now.getSeconds(),
//        ms=now.getMilliseconds();
//    return (h+":"+m+":"+s+ " " +ms);
}