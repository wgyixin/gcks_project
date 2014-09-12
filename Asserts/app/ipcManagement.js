/**
 * Created by wang on 14-4-24.
 */
/*
 视频管理
 */

var ipcMenu = App.HeaderMenu.create({
  id: 'ipcs',
  name: '摄像头管理',
  hrefTo: 'ipcs'
});

headerMenus.pushObject(ipcMenu);

App.IpcsRoute = Ember.Route.extend({
  templateName: 'template/ipc/ipcList',

//  model: function() {
  model: function(params) {
    var url = '/gcks.video/api/v1/resource/ipcs/'+"0/10";//+encodeURI($.cookie('username'))+"/0/10";
    var me = this;
    return getJSON(url).then(function(data){
        var list = [];
        $(data).each(function(index, value) {
            var ipc = App.Ipc.create({
                sid: ''+value.sid,
                name:''+value.name,
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
                passwd: value.passwd,
                protocol:value.protocol,
                alarmlist:[]
            });
            $(value.alarmlist).each(function(index, value) {
                var alarm = App.Alarm.create({
                    alarmDescription: value.alarmDescription != "null"? value.alarmDescription :'',
                    alarmMethod: value.alarmMethod,
                    alarmPriority: value.alarmPriority,
                    alarmTime: value.alarmTime !=null ?value.alarmTime.toString().substring(0, 16).replace(/T/g, ' ') : ' ',
                    cmdType: value.cmdType,
                    deviceID: value.deviceID,
                    info: value.info != "null" ? value.info :'',
                    latitude: value.latitude,
                    longitude: value.longitude,
                    SN: value.SN,
                    status: value.status != "null" ? value.status:''
                });
                ipc.alarmlist.pushObject(alarm);
            });

            list.pushObject(ipc);
        });

        if (params.queryParams.position)
            return list.filterBy('position', params.queryParams.position);
        else{
            return list;
        }


//        return list;

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


App.IpcsView = Ember.View.extend({
  didInsertElement: function() {
      //点击后退 backspace 直接的  弹出层的背景色还在的问题
      if( $('#iframe_ActiveX').attr('id') == undefined)
          $('div[class*=modal-backdrop]').remove();


    elementAction();
    datePicker();
    //        var citySelect = new Vcity.CitySelector({input:'citySelect'});
      //后退 2个菜单都选中
      $('ul.nav-top li.active').removeClass('active');
      //解决刷新 菜单没有选中样式的bug
    $("#ipcs").addClass('active');

  }
});
App.Alarm = Ember.Object.extend({
    alarmDescription: Ember.string,
    alarmMethod: Ember.number,
    alarmPriority: Ember.number,
    alarmTime: Ember.date,
    cmdType: Ember.string,
    deviceID: Ember.string,
    info: Ember.string,
    latitude: Ember.number,
    longitude: Ember.number,
    SN: Ember.number,
    status: Ember.string
});
App.Ipc = Ember.Object.extend({
  sid: '',
  name:'',
  ip_addr:'',
  area_id: '',
  area_name: '',
  position_x: '',
  position_y: '',
  factory: '',
  ipcModel: Ember.string,
  startTime: Ember.date,
  installTime: Ember.date,
  reg_name:'',
  passwd: '',
  protocol:Ember.string,
  descp: '',
  is_live:false,
  alarmlist:[],
  alarmLength:function(){
    if(this.get('alarmlist').length>0)
        return this.get('alarmlist').length;
    else
        return '';
  }.property('alarmlist'),
  detail: function() {
        return "x坐标:" + this.get('position_x') + "\ny坐标:" + this.get('position_y') + "\n描述:" + this.get('descp');
    }.property('position_x', 'position_y', 'descp')

});

App.IpcsController = Ember.ArrayController.extend({
  content: [],
  newIpc: App.Ipc.create(),


  areaList: [],
  alarmList:[],
  curIpc:'',
//每页10条记录  一次展示10页
  page: 1,
  perPage: 10,
  count: 0,
  currentTotalCounts:(function(){
      return this.get('model').length;
  }).property('model.length'),//当前加载的总数目

  totalPages: (function() {
    return Math.ceil(this.get('model').length / this.get('perPage'));
  }).property("model.length", 'perPage'),//因为要针对 factory 变化，所以要加上这个属性



  paginatedContent: (function() {

    var start;
    if (this.get('page') <= 10)
      start = (this.get('page') - 1) * this.get('perPage');
    else
      start = (this.get('page') - this.get('count') * 10 - 1) * this.get('perPage');
    var end = start + this.get('perPage');

    var filter_sid = this.get('filter_sid');
    var filter_area_name = this.get('filter_area_name');
    var filter_name = this.get('filter_name');
    //过滤
    if (filter_sid || filter_area_name || filter_name) {
      var filterarray = this.get('model').filter(function(item) {
        var sidReg = new RegExp(filter_sid);
        //                return sidReg.test(item.sid) && (item.area_name.indexOf(filter_area_name)> -1);
        if (filter_sid && filter_area_name && filter_name)
          return sidReg.test(item.sid) && (item.area_name.indexOf(filter_area_name) > -1) && (item.name.indexOf(filter_name) >-1);
        else if (filter_sid)
          return sidReg.test(item.sid);
        else if(filter_name)
          return item.name.indexOf(filter_name) > -1;
        else
          return item.area_name.indexOf(filter_area_name) > -1;

      });

      //重新设置页码
      this.set('totalPages', Math.ceil(filterarray.length / this.get('perPage')));
      return filterarray.slice(start, end);
    } else {
      this.set('totalPages', Math.ceil(this.get('model').length / this.get('perPage')));
      return this.get('model').slice(start, end);
    }

  }).property('page', 'perPage', 'count', 'totalPages', 'model.[]', 'filter_sid', 'filter_area_name','filter_name'),

    operateRule:Ember.computed(function(){

        return $.cookie('/ipcOperate') == 'true';
    }),


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
      var beginRCount = this.get('count')*this.get('perPage') * 10;
      var me = this;
      var url = '/gcks.video/api/v1/resource/ipcs/'+ beginRCount + "/10";//+encodeURI($.cookie('username'))+"/" + beginRCount + "/10";
      getJSON(url).then(function(data){
          me.get('model').clear();
          $(data).each(function(index, value) {
              console.log(value);
              var ipc = App.Ipc.create({
                  sid: ''+value.sid,
                  name:''+value.name,
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
                  passwd: value.passwd,
                  protocol:value.protocol,
                  alarmlist:[]
              });
              $(value.alarmlist).each(function(index, value) {
                  var alarm = App.Alarm.create({
                      alarmDescription: value.alarmDescription != "null"? value.alarmDescription :'',
                      alarmMethod: value.alarmMethod,
                      alarmPriority: value.alarmPriority,
                      alarmTime: value.alarmTime !=null ?value.alarmTime.toString().substring(0, 16).replace(/T/g, ' ') : ' ',
                      cmdType: value.cmdType,
                      deviceID: value.deviceID,
                      info: value.info != "null" ? value.info :'',
                      latitude: value.latitude,
                      longitude: value.longitude,
                      SN: value.SN,
                      status: value.status != "null" ? value.status:''
                  });
                  ipc.alarmlist.pushObject(alarm);
              });
              me.get('model').pushObject(ipc);

          });
      },function(errorStatus){
          if (errorStatus == 401)
              me.transitionToRoute('login');
          else
              me.transitionToRoute('errorpage');
       }
      );
    },



    toIpc: function(ipc) {

      this.transitionToRoute('ipc', ipc.id);
    },


    deleteIpc: function(ipc) {
      var url = '/gcks.video/api/v1/resource/ipcs/' + ipc.sid;
      var me = this;
      deleteJSON(url).then(function(data){
          if (data == true)
              me.send('loadMore', "delete");
      },function(errorStatus){
          if (errorStatus == 401)
              me.transitionToRoute('login');
          else
              me.transitionToRoute('errorpage');

      });
    },

    beforeEdit: function(ipc) {
        if(Ember.View.views["edit_sip"].get('tooltipDiv'))
            Ember.View.views["edit_sip"].removeTooltip();
        if(Ember.View.views["edit_name"].get('tooltipDiv'))
            Ember.View.views["edit_name"].removeTooltip();
        if(Ember.View.views["edit_ip_addr"].get('tooltipDiv'))
            Ember.View.views["edit_ip_addr"].removeTooltip();
        if(Ember.View.views["edit_installTime"].get('tooltipDiv'))
            Ember.View.views["edit_installTime"].removeTooltip();
      $('#edit').modal('show');
      this.set('edit_sid', ipc.sid);
      this.set('edit_name',ipc.name);
      this.set('edit_area_id', ipc.area_id);
      this.set('edit_area_name', ipc.area_name);
      this.set('edit_position_x', ipc.position_x);
      this.set('edit_position_y', ipc.position_y);
      this.set('edit_factory', ipc.factory);
      this.set('edit_ipcModel', ipc.ipcModel);
      this.set('edit_startTime', ipc.startTime);
      this.set('edit_installTime', ipc.installTime);
      this.set('edit_passwd', ipc.passwd);
      this.set('edit_descp', ipc.descp);
      this.set('edit_ip_addr',ipc.ip_addr);
      this.set('edit_reg_name',ipc.reg_name);
      this.set('edit_protocol',ipc.protocol);

      $('#edit_protocol').val(ipc.protocol);

    },
      validateForEdit:function(){
          if(Ember.View.views["edit_sip"].get('tooltipDiv'))
              Ember.View.views["edit_sip"].removeTooltip();
          if(Ember.View.views["edit_name"].get('tooltipDiv'))
              Ember.View.views["edit_name"].removeTooltip();
          if(Ember.View.views["edit_ip_addr"].get('tooltipDiv'))
              Ember.View.views["edit_ip_addr"].removeTooltip();
          if(Ember.View.views["edit_installTime"].get('tooltipDiv'))
              Ember.View.views["edit_installTime"].removeTooltip();

          var sid = this.get("edit_sid");
          var name = this.get("edit_name");
          var ip_addr = this.get("edit_ip_addr");
          var installTime = this.get('edit_installTime');
          var startTime = this.get('edit_startTime');

          this.send("validate",sid,"edit_sip",name,"edit_name",ip_addr,"edit_ip_addr",installTime,"edit_installTime",startTime);
          if(this.get("validation"))
            this.send('editIpc');
      },
      validateForfocusOutOrkeyDown:function(elementId){
//        alert('失去焦点')

      },
      editIpc: function() {
          var sid = this.get('edit_sid');
          var name = this.get('edit_name');
          var area_id = this.get('edit_area_id');
          var area_name = this.get('edit_area_name');
          var position_x = this.get('edit_position_x');
          var position_y = this.get('edit_position_y');
          var factory = this.get('edit_factory');
          var ipcModel = this.get('edit_ipcModel');
          var installTime = this.get('edit_installTime');
          var startTime =this.get('edit_startTime');
          var passwd = this.get('edit_passwd');
          var descp = this.get('edit_descp');
          var ip_addr = this.get('edit_ip_addr');
          var reg_name = this.get('edit_reg_name');
          var protocol = $('#edit_protocol').val();

          var oDate1 = null;
          if(installTime != null && installTime != '' && installTime !=undefined )
              oDate1 = createDate(installTime);
          var oDate2 = null;
          if(startTime != null && startTime != '' && startTime !=undefined )
              oDate2 = createDate(startTime);
          var url = '/gcks.video/api/v1/resource/ipcs';
          var data = JSON.stringify({
              "ipc": {
                  "sid": sid,
                  "name":name,
                  "area_id": area_id,
                  "area_name": area_name,
                  "position_x": position_x,

                  "position_y": position_y,
                  "factory": factory,
                  "model": ipcModel,
                  "installTime": oDate1,
                  "startTime": oDate2,
                  "passwd": passwd,
                  "descp": descp,
                  "ip_addr":ip_addr,
                  "reg_name":reg_name,
                  "protocol":protocol
              }
          });
          var me = this;
          putJSON(url,data).then(function(json){
              if(json ){
                  var ipc = me.get('model').findBy('sid', sid);
                  ipc.set('name',name);
                  ipc.set('position_x', position_x);
                  ipc.set('position_y', position_y);
                  ipc.set('factory', factory);
                  ipc.set('ipcModel', ipcModel);
                  ipc.set('startTime', startTime);
                  ipc.set('installTime', installTime);
                  ipc.set('passwd', passwd);
                  ipc.set('descp', descp);
                  ipc.set('ip_addr',ip_addr);
                  ipc.set('reg_name',reg_name);
                  ipc.set('protocol',protocol);
              }

          },function(errorStatus){
          if (errorStatus == 401)
              me.transitionToRoute('login');
          else
              me.transitionToRoute('errorpage');
      });

        $('#edit').modal('hide');
    },
    beforeAdd: function() {
      this.areaList.clear();
      var me = this;
      var url = '/gcks.video/api/v1/sysmanage/areas';
      getJSON(url).then(function(data){
          $(data).each(function(index, value) {
              var area = App.Area.create({
                  id: value.id,
                  name: value.name,
                  descp: value.descp,
                  p_id: value.p_id
              });
              me.get('areaList').pushObject(area);

          });
      },function(errorStatus){
          if (errorStatus == 401)
              me.transitionToRoute('login');
          else
              me.transitionToRoute('errorpage');
      });
    },
    validateForAdd:function(){
        if(Ember.View.views["add_sip"].get('tooltipDiv'))
             Ember.View.views["add_sip"].removeTooltip();
        if(Ember.View.views["add_name"].get('tooltipDiv'))
             Ember.View.views["add_name"].removeTooltip();
        if(Ember.View.views["add_ip_addr"].get('tooltipDiv'))
             Ember.View.views["add_ip_addr"].removeTooltip();
        if(Ember.View.views["add_installTime"].get('tooltipDiv'))
            Ember.View.views["add_installTime"].removeTooltip();

        var sid = this.newIpc.sid;
        var name = this.newIpc.name;
        var ip_addr = this.newIpc.ip_addr;
        var installTime = this.newIpc.installTime;
        var startTime = this.newIpc.startTime;

        this.send("validate",sid,"add_sip",name,"add_name",ip_addr,"add_ip_addr",installTime,"add_installTime",startTime);

        if(this.get("validation"))
            this.send('addIpc');
    },

    validate:function(sid,sid_view_id,name,name_view_id,ip_addr,ip_addr_view_id,installTime,installTime_view_id,startTime){

        var validateion = true;
        //编号
        if(sid == null || sid =='' || sid==undefined){
            validateion = false;

            Ember.View.views[sid_view_id].addTooltip('编号不能为空');
        }
        else if(sid.trim().length!=20){
            validateion = false;
            Ember.View.views[sid_view_id].addTooltip('编号长度必须为20位');
        }
        else if(!$.isNumeric(sid)){
            validateion = false;
            Ember.View.views[sid_view_id].addTooltip('编号必须为数字');
        }
        else{
            if(Ember.View.views[sid_view_id].get('tooltipDiv'))
                Ember.View.views[sid_view_id].removeTooltip();
        }



        //摄像头名称
        if(name == null || name =='' || name == undefined){
            validateion = false;
            Ember.View.views[name_view_id].addTooltip('摄像头的名称不能为空');
        }
        else{
            if(Ember.View.views[name_view_id].get('tooltipDiv'))
                Ember.View.views[name_view_id].removeTooltip();
        }
        //ip地址
        if(ip_addr == null || ip_addr =='' || ip_addr == undefined){
            if(Ember.View.views[ip_addr_view_id].get('tooltipDiv'))
                Ember.View.views[ip_addr_view_id].removeTooltip();
        }else{
            var exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
            var reg = ip_addr.match(exp);
            if(reg){
                if(Ember.View.views[ip_addr_view_id].get('tooltipDiv'))
                     Ember.View.views[ip_addr_view_id].removeTooltip();
            }
            else{
                validateion = false;
                Ember.View.views[ip_addr_view_id].addTooltip('IP地址格式不对');
            }
        }
        //时间
        if(
//            (installTime  && startTime == null )||
            (installTime && startTime && strToLong(installTime) > strToLong(startTime))){
            validateion = false;
            Ember.View.views[installTime_view_id].addTooltip('安装时间不能大于启用时间');

        }else{
            if(Ember.View.views[installTime_view_id].get('tooltipDiv'))
                Ember.View.views[installTime_view_id].removeTooltip();
        }


        this.set('validation',validateion);

    },
    addIpc: function() {
        var sid = this.newIpc.sid;
        var name = this.newIpc.name;
        var area_name = $('#area_name').val();
        var area_id = this.areaList.findBy('name', area_name).get('id');
        var position_x = this.newIpc.position_x;
        var position_y = this.newIpc.position_y;
        var factory = this.newIpc.factory;
        var ipcModel = this.newIpc.ipcModel;
        var installTime = this.newIpc.installTime;
        var startTime = this.newIpc.startTime;
        var passwd = this.newIpc.passwd;
        var descp = this.newIpc.descp;
        var ip_addr = this.newIpc.ip_addr;
        var reg_name = this.newIpc.reg_name;
        var protocol = $('#add_protocol').val();

        var oDate1 = null;
        if(installTime != null && installTime != '' && installTime !=undefined )
            oDate1 = createDate(installTime);
        var oDate2 = null;
        if(startTime != null && startTime != '' && startTime !=undefined )
            oDate2 =createDate(startTime);

        var url = '/gcks.video/api/v1/resource/ipcs';///'+encodeURI($.cookie('username'));
        var data = JSON.stringify({
            "ipc": {
                "sid": sid,
                "name":name,
                "area_id": area_id,
                "position_x": position_x,
                "area_name":area_name,
                "position_y": position_y,
                "factory": factory,
                "model": ipcModel,
                "installTime": oDate1,
                "startTime": oDate2,
                "passwd": passwd,
                "descp": descp,
                "ip_addr":ip_addr,
                "reg_name":reg_name,
                "protocol":protocol
            }
        });
        var me = this;
        postJSON(url,data).then(function(json){
            if(json.result == "success" ){
                me.send('loadMore', "add");
                $('#add').modal('hide');
                me.set("newIpc", App.Ipc.create());
            }

            else if(json.result== "wrong sid")
                Ember.View.views["add_sip"].addTooltip('编号已存在');
            else
            {
                $('#add').modal('hide');
                alert('添加失败');
                me.set("newIpc", App.Ipc.create());
            }
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionToRoute('login');
            else
                me.transitionToRoute('errorpage');
            me.set("newIpc", App.Ipc.create());
        });
    },
    cancelAdd: function() {
        if(Ember.View.views["add_sip"].get('tooltipDiv'))
            Ember.View.views["add_sip"].removeTooltip();
        if(Ember.View.views["add_name"].get('tooltipDiv'))
            Ember.View.views["add_name"].removeTooltip();
        if(Ember.View.views["add_ip_addr"].get('tooltipDiv'))
            Ember.View.views["add_ip_addr"].removeTooltip();
        if(Ember.View.views["add_installTime"].get('tooltipDiv'))
            Ember.View.views["add_installTime"].removeTooltip();

         this.set("this.newIpc", App.Ipc.create());
    },
    showAlarmMessage:function(ipc){
        this.set('curIpc',ipc.name);
        this.set('alarmList',ipc.alarmlist);
        $('#alarmMessage').modal('show');
    }

  }
});



App.IpcRoute = Ember.Route.extend({
  templateName: 'template/ipc/ipc',
  model: function(params) {
    console.log('1 ipc==========' + params.ipc_id);
    // 在app.js 中定义了path  所以不用params.queryParams.id，使用params.ipc_id
    //        return ipcs.findBy('id',params.ipc_id);
    return ipcs.findBy('id', params.ipc_id);
  }

});
App.IpcView = Ember.View.extend({
  didInsertElement: function() {
    elementAction();
    $("#ipcs").addClass('active');
  }
});

