Ember.TEMPLATES["template/loadingView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<p>加载中……</p>\r\n<div class=\"progress progress-striped active\">\r\n    <div class=\"bar\" style=\"width: 40%;\"></div>\r\n</div>");
  
});

Ember.TEMPLATES["template/components/delete-confirm"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\r\n    <div class=\" delete-confirm modal hide \" style=\"top:20%;\" data-backdrop='static'>\r\n        <div class=\"modal-header\">\r\n            <a  class=\"close\" data-dismiss=\"modal\" >×</a>\r\n            <h4 style=\"text-align: left;\">删除");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n        </div>\r\n\r\n        <div class=\"modal-body\" >\r\n            <p>确定要删除么？</p>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n            <button class=\"btn-success\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">确定</button>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n        </div>\r\n    </div>\r\n\r\n    <a class=\"btn btn-danger\" data-toggle=\"tooltip\" title=\"删除\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showConfirmation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n        <i class=\"icon-trash icon-white\"></i>\r\n    </a>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/components/play-history"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"history-video modal hide \" style=\"top:5%;width:680px;height:700px;\" data-backdrop='static'>\r\n    <div class=\"modal-header\">\r\n        <a class=\"close\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">×</a>\r\n        <h4 style=\"text-align: left;\">播放历史视频</h4>\r\n    </div>\r\n    <div class=\"corn-modal-body\">\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<a class=\"btn btn-info\" href=\"#\" data-toggle=\"tooltip\" title=\"播放\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "playHistoryVideo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n    <i class=\" icon-play icon-white\"></i>\r\n</a>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/components/page-number"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <div class=\"pagination\">\r\n        <ul>\r\n            <!--前十页-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "prevTenPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n            <!--前一页-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "prevPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <!--页码-->\r\n            ");
  stack1 = helpers.each.call(depth0, "pages", {hash:{
    'itemController': ("page")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <!--后一页-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "nextPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n            <!--后十页-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "nextTenPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n    </div>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadMore", "prev", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"tooltip\"   title=\"前十页\"> &laquo;</a></li>\r\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n                <li class=\"disabled\" data-toggle=\"tooltip\"   title=\"前十页\" ><a>&laquo;</a></li>\r\n            ");
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPage", "prevPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" data-toggle=\"tooltip\"   title=\"前一页\"> &lt;<!--&larr;--></a></li>\r\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\r\n                <li class=\"disabled\" data-toggle=\"tooltip\"   title=\"前一页\" ><a>&lt;<!--&larr;--></a></li>\r\n            ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("active")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPage", "number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\r\n            ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectPage", "nextPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" data-toggle=\"tooltip\"   title=\"后一页\">&gt;<!--&rarr;--></a></li>\r\n            ");
  return buffer;
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\r\n                <li class=\"disabled\" data-toggle=\"tooltip\"   title=\"后一页\"><a>&gt;<!--&rarr;--></a></li>\r\n            ");
  }

function program16(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadMore", "next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" data-toggle=\"tooltip\"   title=\"后十页\"> &raquo;  </a></li>\r\n            ");
  return buffer;
  }

function program18(depth0,data) {
  
  
  data.buffer.push("\r\n                <li class=\"disabled\" data-toggle=\"tooltip\"   title=\"后十页\"><a>&raquo; </a></li>\r\n            ");
  }

  stack1 = helpers['if'].call(depth0, "hasPages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["template/userInfo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container-fluid\">\r\n<div class=\"row-fluid span10 offset1\" style=\"padding-top:20px;\" >\r\n<div class=\"box\">\r\n    <div class=\"box-content\" >\r\n        <form class=\"form-horizontal userinfo-form\"  >\r\n            <div class=\"control-group \">\r\n                <label class=\"control-label\" for=\"username\">用户名</label>\r\n                <div class=\"controls\" >\r\n\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("username"),
    'disabled': (true),
    'id': ("username")
  },hashTypes:{'type': "STRING",'value': "ID",'disabled': "BOOLEAN",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'disabled': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span class=\" help-inline\"></span>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label for=\"name\" class=\"control-label \" >真实姓名</label>\r\n                <div class=\"controls \" >\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("name")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span class=\" help-inline\"  ></span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"control-group \">\r\n                <label class=\"control-label \" >当前密码</label>\r\n                <div class=\"controls \">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("oldpassword")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span id=\"pwdError\" class=\" help-inline hide\" style=\"color: #b94a48;\">与原始密码不符</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label \" >新密码</label>\r\n                <div class=\"controls \">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("newPassword")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span class=\" help-inline\"  ></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label \" >重复新密码</label>\r\n                <div class=\"controls \">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("rePassword")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span id=\"repwdError\" class=\"help-inline hide\" style=\"color: #b94a48;\">两次输入的密码不一致</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label \" >电话</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("tel")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span class=\" help-inline hide\"  id=\"telError\" style=\"color: #b94a48;\">请输入正确的11位手机号</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label \" >邮箱</label>\r\n                <div class=\"controls \">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("e_mail")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <span class=\" help-inline hide\"  id=\"emailError\" style=\"color: #b94a48;\">请输入正确的邮箱</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n            <button class=\"btn-success\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeSave", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">保存</button>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button  class=\"btn-info\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n        </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n    </div>\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id = \"login\">\r\n<div id=\"top-nav\">\r\n        <div class=\"navbar navbar-static-top\">\r\n            <div class=\"navbar-inner\">\r\n                <div class=\"container\">\r\n                        <img src=\"Asserts/img/gcks/login_logo.png\">\r\n                        <!--<span style=\"font-weight: bold;font-size: 31px;color:#1184b5;vertical-align: middle;\">北京国创科视有限公司</span>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"modal\" id=\"login\" style=\"top:30%\">\r\n            <div class=\"modal-header\">\r\n                <h4>视频云共享管理平台</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"form-horizontal\" >\r\n                    <div id=\"hint\" class=\"control-group hide\">\r\n                        <div class=\"alert alert-error\">\r\n                            <div class=\"controls\">\r\n                                <p>invalid username or password</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"control-group\">\r\n                        <label class=\"control-label\">用户名</label>\r\n\r\n                        <div class=\"controls\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("username")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"control-group\">\r\n                        <label class=\"control-label\">密码</label>\r\n\r\n                        <div class=\"controls\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("password"),
    'enter': ("login")
  },hashTypes:{'type': "STRING",'value': "ID",'enter': "STRING"},hashContexts:{'type': depth0,'value': depth0,'enter': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-primary\"\r\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">登录</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["template/main"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("视频监控");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"main-link\" id=\"history\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "history", options) : helperMissing.call(depth0, "link-to", "history", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("历史视频");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                        <li class=\"main-link\" id=\"ipcs\">\r\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ipcs", options) : helperMissing.call(depth0, "link-to", "ipcs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </li>\r\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("摄像头管理");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"main-link\" id=\"ipcLink\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "linkOption", options) : helperMissing.call(depth0, "link-to", "linkOption", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                    ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("连接管理");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                        <li class=\"main-link\" id=\"record\">\r\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "plans", options) : helperMissing.call(depth0, "link-to", "plans", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </li>\r\n                    ");
  return buffer;
  }
function program13(depth0,data) {
  
  
  data.buffer.push("录制管理");
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"main-link\" id=\"operation\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "operationOption", options) : helperMissing.call(depth0, "link-to", "operationOption", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                    ");
  return buffer;
  }
function program16(depth0,data) {
  
  
  data.buffer.push("运维管理");
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"main-link\" id=\"system\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "sysOption", options) : helperMissing.call(depth0, "link-to", "sysOption", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                    ");
  return buffer;
  }
function program19(depth0,data) {
  
  
  data.buffer.push("系统管理");
  }

function program21(depth0,data) {
  
  
  data.buffer.push("个人信息");
  }

  data.buffer.push("<div class=\"container-fluid\">\r\n    <div class=\"row-fluid gcks-navbar\" style=\"background-color:#F8F8F8;\">\r\n        <!--<h1 class=\"page-header\" style=\"font-size:24px;color: #faa732;\">视频综合管理应用平台</h1>-->\r\n<div class=\"span2\" style=\"margin-top: 10px;margin-right: 10px;\">\r\n    <a class=\"brand\"><img src=\"Asserts/img/gcks/logo.png\"></a>\r\n</div>\r\n\r\n        <div class=\"span10 navbar navbar-static-top \" style=\"font-size:16px;margin-top: 25px;margin-left: 0px;\">\r\n            <div  class=\"navbar-inner\" style=\" /*border:1px solid #DDDDDD; */padding-left: 0;\">\r\n\r\n                <!--<a href=\"#\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">-->\r\n                    <!--<span class=\"icon-bar\"></span>-->\r\n                    <!--<span class=\"icon-bar\"></span>-->\r\n                    <!--<span class=\"icon-bar\"></span>-->\r\n                <!--</a>-->\r\n                <div class=\"nav-collapse\">\r\n                <ul class=\"nav nav-top\" >\r\n                    \r\n                    <li class=\"main-link\" id=\"realtime\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "realtime", options) : helperMissing.call(depth0, "link-to", "realtime", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                    \r\n\r\n                    ");
  stack1 = helpers['if'].call(depth0, "historyRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    ");
  stack1 = helpers['if'].call(depth0, "ipcRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    ");
  stack1 = helpers['if'].call(depth0, "linkRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    ");
  stack1 = helpers['if'].call(depth0, "taskRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    ");
  stack1 = helpers['if'].call(depth0, "operationRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    ");
  stack1 = helpers['if'].call(depth0, "sysRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    \r\n\r\n                </ul>\r\n\r\n                <ul class=\"nav pull-right nav-top\" >\r\n\r\n                    <!--<li ><a><small>欢迎您,");
  stack1 = helpers._triageMustache.call(depth0, "curUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small></a></li>-->\r\n                    <!--<li class=\"main-link\"><a href=\"#updatePasswd\" data-toggle=\"modal\" >修改密码</a></li>-->\r\n                    <!--<li class=\"main-link\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">退出</a></li>-->\r\n\r\n                    <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle\"\r\n                           data-toggle=\"dropdown\"><small>欢迎您,");
  stack1 = helpers._triageMustache.call(depth0, "curUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small><span class=\"caret\"></span></a>\r\n\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li class=\"main-link\">\r\n                                <!--<a href=\"#updatePasswd\" data-toggle=\"modal\" >-->\r\n                                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeUpdatePassword", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n                                    <small>修改密码</small></a>\r\n                            </li>\r\n                            <li class=\"main-link\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><small>退出</small></a></li>\r\n                            <!--<li class=\"main-link\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "userinfo", options) : helperMissing.call(depth0, "link-to", "userinfo", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>-->\r\n                        </ul>\r\n                    </li>\r\n\r\n                </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row-fluid\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n    <footer>\r\n        <div class=\"container\" style=\"text-align: center;\">\r\n            <a href=\"http://www.gcks.cn\" target=\"_blank\" >@copyright 北京国创科视有限公司</a>\r\n        </div>\r\n    </footer>\r\n</div>\r\n<!--      修改用户组信息-->\r\n<div class=\"modal hide\" id=\"updatePasswd\" style=\"top:20%;z-index:9999\" data-backdrop='static'>\r\n    <div class=\"modal-header\">\r\n        <a href=\"#\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeIframe_ActiveX", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">×</a>\r\n        <h4>修改用户密码</h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" style=\"position: relative;\" >\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >原密码<i style=\"color:red\">*</i></label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("oldPassword"),
    'valueBinding': ("oldPassword"),
    'type': ("password")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'type': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'type': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >新密码<i style=\"color:red\">*</i></label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("newPassword"),
    'valueBinding': ("newPassword"),
    'type': ("password")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'type': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'type': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >确认新密码<i style=\"color:red\">*</i></label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("rePassword"),
    'valueBinding': ("rePassword"),
    'type': ("password"),
    'enter': ("validateForPasswd")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'type': "STRING",'enter': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'type': depth0,'enter': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validateForPasswd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" >修改</button>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button  class=\"btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeIframe_ActiveX", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n\r\n    </div>\r\n</div>\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/errorpage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container-fluid\">\r\n    <div class=\"span2\">\r\n\r\n    </div>\r\n    <div class=\"span8\" style=\"padding-top:20%;\">\r\n        <div class=\"alert\">\r\n            <p style=\"text-align: center\"> <i class=\" icon-warning-sign\"></i>&nbsp;&nbsp;&nbsp;&nbsp;对不起，访问过程中出现异常错误，请稍后再试！</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"span2\">\r\n   \r\n    </div>\r\n</div>");
  
});

Ember.TEMPLATES["template/gis/gis"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container-fluid\">\r\n    <div class=\" row-fluid span2\">\r\n        <div id=\"ztree\" class=\"ztree\">\r\n        </div>\r\n   </div>\r\n    <div class=\"row-fluid span10\">\r\n        <div id=\"donutchart\" style=\"width: 900px; height: 500px;\"></div>\r\n    </div>\r\n</div>\r\n<!--<script type=\"text/javascript\">-->\r\n   <!---->\r\n<!--</script>-->\r\n");
  
});

Ember.TEMPLATES["template/history/history"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n                    <li class=\"ajax-link\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("sid")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                        <a href=\"javascript:void(0)\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadIpcVideo", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </a>\r\n                    </li>\r\n                    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                        <tr>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                <a href=\"#\" data-toggle=\"tooltip\" title=\"点击下载\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            </td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "ipc_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "dataTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "endTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "codec", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers['play-history'] || (depth0 && depth0['play-history']),options={hash:{
    'param': ("")
  },hashTypes:{'param': "ID"},hashContexts:{'param': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "play-history", options))));
  data.buffer.push("\r\n\r\n                            </td>\r\n                        </tr>\r\n                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\" >\r\n\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span10 \">\r\n\r\n            <div class=\"search-div\">\r\n                <div class=\"span9\">\r\n                    <!--<label class=\"help-inline width30\">地区</label>-->\r\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchIpcTextField", {hash:{
    'valueBinding': ("search_area"),
    'placeholder': ("输入地区名"),
    'class': ("ipc-resource-search")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                    <!--<label class=\"help-inline width30\">摄像头</label>-->\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("输入摄像头名"),
    'class': ("ipc-resource-search"),
    'value': ("search_ipc")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"span3\">\r\n                    <br>\r\n                    <br>\r\n                    <button class=\"btn btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchIpc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"icon-search\"></i>\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <!--<div style=\"width:120%;height: 500px;overflow: auto; border:1px solid #DEDEDE;\">-->\r\n            <div class=\"ipc-resource-div\">\r\n                <ul class=\"history-ul nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n                    <li class=\"ajax-link active\" id=\"all_video\">\r\n                        <a href=\"javascript:void(0)\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadIpcVideo", "null", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">全部视频</a>\r\n                    </li>\r\n                    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    <!--onclick=\"PlayRealVideo('44030300001320000402', '44030300001320000402', '测试摄像头402')\"-->\r\n\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\">\r\n        <div class=\"box\">\r\n\r\n            <div class=\"input-inline\" style=\"padding-top:18px;\" data-original-title>\r\n\r\n\r\n                <label class=\"help-inline\">&nbsp;&nbsp;开始时间:</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("starttime"),
    'type': ("text"),
    'data-date-format': (" yyyy-mm-dd hh:ii"),
    'data-date-viewMode': ("1"),
    'data-date-minViewMode': ("0"),
    'data-date-weekStart': ("1"),
    'value': ("search_startTime")
  },hashTypes:{'class': "STRING",'type': "STRING",'data-date-format': "STRING",'data-date-viewMode': "STRING",'data-date-minViewMode': "STRING",'data-date-weekStart': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'data-date-format': depth0,'data-date-viewMode': depth0,'data-date-minViewMode': depth0,'data-date-weekStart': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <!--");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("search_startTime"),
    'valueBinding': ("search_startTime"),
    'class': ("starttime ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("-->\r\n\r\n                <label class=\"help-inline\">结束时间:</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("endtime"),
    'type': ("text"),
    'data-date-format': ("yyyy-mm-dd hh:ii"),
    'data-date-viewMode': ("1"),
    'data-date-minViewMode': ("0"),
    'data-date-weekStart': ("1"),
    'value': ("search_endTime")
  },hashTypes:{'class': "STRING",'type': "STRING",'data-date-format': "STRING",'data-date-viewMode': "STRING",'data-date-minViewMode': "STRING",'data-date-weekStart': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'data-date-format': depth0,'data-date-viewMode': depth0,'data-date-minViewMode': depth0,'data-date-weekStart': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" &nbsp;&nbsp;&nbsp;&nbsp;\r\n                <!--");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("search_endTime"),
    'valueBinding': ("search_endTime"),
    'class': ("endtime ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("-->\r\n                <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"vertical-align: top;\"><i class=\"icon-search icon-white\"></i> 查询</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n            </div>\r\n            <div class=\"box-content\">\r\n\r\n                <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-condensed table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"text-align: center\">名字\r\n                            </th>\r\n                            <th style=\"text-align: center\">摄像头\r\n                            </th>\r\n                            <th style=\"text-align: center\">开始时间\r\n                            </th>\r\n                            <th style=\"text-align: center\">结束时间\r\n                            </th>\r\n                            <th style=\"text-align: center\">媒体编码\r\n                            </th>\r\n                            <th style=\"text-align: center\">大小\r\n                            </th>\r\n                            <th style=\"text-align: center\">操作\r\n                            </th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </tbody>\r\n                </table>\r\n                <!--分页控件-->\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <!--/span-->\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/ipc/ipcList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <div class=\"input-inline\" style=\"padding-top:18px;\" data-original-title>\r\n                &nbsp;&nbsp;&nbsp;<a href=\"#add\" data-toggle=\"modal\" class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"icon-plus icon-white\"></i> 新增</a>\r\n                <div class=\"modal hide ipc-modal\" id=\"add\"  data-backdrop='static'>\r\n                    <div class=\"modal-header\">\r\n                        <a href=\"#\" class=\"close\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">×</a>\r\n                        <h4>新增Ipc</h4>\r\n                    </div>\r\n\r\n                    <div class=\"ipc-modal-body\" >\r\n                        <form style=\"position: relative;\">\r\n                        <div class=\"control-group \">\r\n                            <label class=\"control-label help-inline ipcLabel\">编号<i style=\"color:red\">*</i></label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_sip"),
    'valueBinding': ("newIpc.sid"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n\r\n                            <label class=\"control-label help-inline ipcLabel\">名称<i style=\"color:red\">*</i></label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_name"),
    'valueBinding': ("newIpc.name"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label help-inline ipcLabel\">IP</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_ip_addr"),
    'valueBinding': ("newIpc.ip_addr"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                            <label for=\"area_name\" class=\"control-label help-inline ipcLabel\">地区</label>\r\n                            <div class=\"controls help-inline\" style=\"width:180px;\">\r\n                                <select id=\"area_name\" class=\"ipcInput\">\r\n                                    ");
  stack1 = helpers.each.call(depth0, "area", "in", "areaList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </select>\r\n\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label help-inline ipcLabel\">X坐标</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newIpc.position_x"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n\r\n                            <label class=\"control-label help-inline ipcLabel\">Y坐标</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newIpc.position_y"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label help-inline ipcLabel\">厂家</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newIpc.factory"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n\r\n                            <label class=\"control-label help-inline ipcLabel\">型号</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newIpc.ipcModel"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label help-inline ipcLabel\">注册时间</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_installTime"),
    'valueBinding': ("newIpc.installTime"),
    'class': ("starttime ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n\r\n\r\n                            <label class=\"control-label help-inline ipcLabel\">启用时间</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_startTime"),
    'valueBinding': ("newIpc.startTime"),
    'class': ("endtime ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label help-inline ipcLabel\">访问用户名</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newIpc.reg_name"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n                            <label class=\"control-label help-inline ipcLabel\">访问密码</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newIpc.passwd"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n                         <div class=\"control-group\">\r\n                                <label for=\"add_protocol\" class=\"control-label help-inline ipcLabel\">协议</label>\r\n                                <div class=\"controls help-inline\" style=\"width:180px;\">\r\n                                    <select id=\"add_protocol\" class=\"ipcInput\">\r\n                                       <option>RTP_BOSCH</option>\r\n                                        <option>RTP_RFC3984</option>\r\n                                    </select>\r\n                                </div>\r\n                         </div>\r\n\r\n                         <div class=\"control-group\">\r\n                             <label class=\"control-label help-inline ipcLabel\">描述</label>\r\n                             <div class=\"controls help-inline\">\r\n\r\n                                 ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("newIpc.descp"),
    'class': ("ipcTextArea")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n                             </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        </form>\r\n                    </div>\r\n\r\n                    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n                        <button  class=\"btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validateForAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >新增</button>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <button class=\"btn-info\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n                    </div>\r\n                </div>\r\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <!--<a href=\"#addBatch\" data-toggle=\"modal\" class=\"btn btn-success\"><i class=\"icon-plus icon-white\"></i> 批量新增</a>-->\r\n                <div class=\"modal hide\" id=\"addBatch\" style=\"top:20%;\" data-backdrop='static'>\r\n                    <div class=\"modal-header\">\r\n                        <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n                        <h4>批量新增</h4>\r\n                    </div>\r\n\r\n                    <div class=\"modal-body\">\r\n                        <form class=\"form-horizontal\">\r\n                            <div class=\"control-group\">\r\n                                <input type=\"file\">\r\n                                <label class=\"control-label\" >XXXX</label>\r\n                                <div class=\"controls\">\r\n\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"control-group\">\r\n                            <label class=\"control-label\" >XXXX</label>\r\n                            <div class=\"controls\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n\r\n                    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n                        <button class=\"btn-success\" data-dismiss=\"modal\">新增</button>\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <button class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n           ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                        <option>");
  stack1 = helpers._triageMustache.call(depth0, "area.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n                            <th style=\"text-align: center\">操作\r\n                                <br>&nbsp;\r\n                                <br>&nbsp;\r\n                            </th>\r\n                            ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <tr>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                ");
  stack1 = helpers['if'].call(depth0, "alarmLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                <a data-toggle=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("detail")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "sid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            </td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "area_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "startTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        ");
  stack1 = helpers['if'].call(depth0, "controller.operateRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </tr>\r\n                        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n                                     <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAlarmMessage", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><p style=\"color: red;\">\r\n                                         ");
  stack1 = helpers._triageMustache.call(depth0, "alarmLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                     </p></a>\r\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\r\n                                        <i class=\"ipc-online\"></i>\r\n                                ");
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                <a class=\"btn btn-info\" href=\"#\" data-toggle=\"tooltip\" title=\"编辑\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeEdit", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                                    <i class=\"icon-edit icon-white\"></i>\r\n                                </a>\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers['delete-confirm'] || (depth0 && depth0['delete-confirm']),options={hash:{
    'title': ("sid"),
    'action': ("deleteIpc"),
    'param': ("")
  },hashTypes:{'title': "ID",'action': "STRING",'param': "ID"},hashContexts:{'title': depth0,'action': depth0,'param': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "delete-confirm", options))));
  data.buffer.push("\r\n\r\n                            </td>\r\n                            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <tr>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.cmdType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.deviceID", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.info", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.latitude", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.longitude", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.SN", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.alarmDescription", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.alarmMethod", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.alarmPriority", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "alarm.alarmTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n\r\n                    </tr>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span12\" style=\"padding-top:20px;\">\r\n        <div class=\"box\">\r\n");
  stack1 = helpers['if'].call(depth0, "operateRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n            <div class=\"box-content\">\r\n                <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"text-align: center\">状态\r\n                                <br>&nbsp;\r\n                                <br>&nbsp;\r\n                            </th>\r\n                            <th style=\"text-align: center\">编号\r\n                                <br>\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filter_sid"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </th>\r\n                            <th style=\"text-align: center\">名称\r\n                                <br>\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filter_name"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </th>\r\n                            <th style=\"text-align: center\">地区\r\n                                <br>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filter_area_name"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </th>\r\n\r\n                            <th style=\"text-align: center\">注册时间\r\n                                <br>&nbsp;\r\n                                <br>&nbsp;\r\n                            </th>\r\n                            ");
  stack1 = helpers['if'].call(depth0, "operateRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n                        ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </tbody>\r\n                </table>\r\n                <!--分页控件 -->\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"modal hide ipc-modal\" id=\"edit\"  data-backdrop='static'>\r\n                <div class=\"modal-header\">\r\n                    <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n                    <h4>修改IPC</h4>\r\n                </div>\r\n\r\n\r\n                <div class=\"ipc-modal-body\" >\r\n                    <form style=\"position: relative;\">\r\n                        <div class=\"control-group \">\r\n                            <label class=\"control-label help-inline ipcLabel\">编号<i style=\"color:red\">*</i></label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_sip"),
    'valueBinding': ("edit_sid"),
    'class': ("ipcInput"),
    'disabled': ("true")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING",'disabled': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0,'disabled': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n\r\n                            <label class=\"control-label help-inline ipcLabel\">名称<i style=\"color:red\">*</i></label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_name"),
    'valueBinding': ("edit_name"),
    'class': ("ipcInput"),
    'disabled': ("true")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING",'disabled': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0,'disabled': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label help-inline ipcLabel\">IP</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_ip_addr"),
    'valueBinding': ("edit_ip_addr"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n\r\n                        <label class=\"control-label help-inline ipcLabel\">地区</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_area_name"),
    'disabled': ("true"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'disabled': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'disabled': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"control-group\">\r\n                        <label class=\"control-label help-inline ipcLabel\">X坐标</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_position_x"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n\r\n                        <label class=\"control-label help-inline ipcLabel\">Y坐标</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_position_y"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"control-group\">\r\n                        <label class=\"control-label help-inline ipcLabel\">厂家</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_factory"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n\r\n                        <label class=\"control-label help-inline ipcLabel\">型号</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_ipcModel"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"control-group\">\r\n                        <label class=\"control-label help-inline ipcLabel\">注册时间</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_installTime"),
    'valueBinding': ("edit_installTime"),
    'class': ("starttime ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        </div>\r\n\r\n                        <label class=\"control-label help-inline ipcLabel\">启用时间</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_startTime"),
    'valueBinding': ("edit_startTime"),
    'class': ("endtime ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"control-group\">\r\n                        <label class=\"control-label help-inline ipcLabel\">访问用户名</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_reg_name"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n                        <label class=\"control-label help-inline ipcLabel\">访问密钥</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_passwd"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n                        <div class=\"control-group\">\r\n                            <label for=\"edit_protocol\" class=\"control-label help-inline ipcLabel\">协议</label>\r\n                            <div class=\"controls help-inline\" style=\"width:180px;\">\r\n                                <select id=\"edit_protocol\" class=\"ipcInput\">\r\n                                    <option >RTP_BOSCH</option>\r\n                                    <option >RTP_RFC3984</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    <div class=\"control-group\">\r\n                        <label class=\"control-label help-inline ipcLabel\">描述</label>\r\n                        <div class=\"controls help-inline\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("edit_descp"),
    'class': ("ipcTextArea")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n                    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validateForEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" >修改</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/span-->\r\n\r\n    </div>\r\n\r\n    <div class=\"modal hide \" id=\"alarmMessage\" style=\"width: 1200px;left: 25%;\" data-backdrop='static'>\r\n        <div class=\"modal-header\">\r\n            <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n            <h4>告警信息——");
  stack1 = helpers._triageMustache.call(depth0, "curIpc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n        </div>\r\n\r\n\r\n        <div class=\"modal-body\" >\r\n            <table class=\"table table-striped table-bordered bootstrap-datatable datatable\">\r\n                <thead>\r\n                <tr>\r\n                    <th>命令类型</th>\r\n                    <th>源设备编码</th>\r\n                    <th>扩展信息</th>\r\n                    <th>纬度信息</th>\r\n                    <th>经度信息</th>\r\n                    <th>命令序列号</th>\r\n                    <th>工作状态</th>\r\n                    <th>报警内容</th>\r\n                    <th>报警方式</th>\r\n                    <th>报警级别</th>\r\n                    <th>报警时间</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                ");
  stack1 = helpers.each.call(depth0, "alarm", "in", "alarmList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/ipc/major"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("IPC列表");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("区域管理");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("专业管理");
  }

  data.buffer.push("<div class=\"container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span11 offset1\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n                <li class=\"ajax-link  \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ipcs", options) : helperMissing.call(depth0, "link-to", "ipcs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "area", options) : helperMissing.call(depth0, "link-to", "area", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link active\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "major", options) : helperMissing.call(depth0, "link-to", "major", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\">\r\n    <div class=\"box\">\r\n    <div class=\"box-header well\" data-original-title>\r\n        <h2><i class=\"icon-user\"></i> Members</h2>\r\n        <div class=\"box-icon\">\r\n            <a href=\"#\" class=\"btn btn-setting btn-round\"><i class=\"icon-cog\"></i></a>\r\n            <a href=\"#\" class=\"btn btn-minimize btn-round\"><i class=\"icon-chevron-up\"></i></a>\r\n            <a href=\"#\" class=\"btn btn-close btn-round\"><i class=\"icon-remove\"></i></a>\r\n        </div>\r\n    </div>\r\n    <div class=\"box-content\">\r\n    <table class=\"table table-striped table-bordered bootstrap-datatable datatable\">\r\n    <thead>\r\n    <tr>\r\n        <th>Username</th>\r\n        <th>Date registered</th>\r\n        <th>Role</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td>David R</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Chris Jack</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Jack Chris</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Muhammad Usman</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sheikh Heera</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Helen Garner</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Saruar Ahmed</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Ahemd Saruar</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Habib Rizwan</td>\r\n        <td class=\"center\">2012/01/21</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Rizwan Habib</td>\r\n        <td class=\"center\">2012/01/21</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Amrin Sana</td>\r\n        <td class=\"center\">2012/08/23</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sana Amrin</td>\r\n        <td class=\"center\">2012/08/23</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Ifrah Jannat</td>\r\n        <td class=\"center\">2012/06/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Jannat Ifrah</td>\r\n        <td class=\"center\">2012/06/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Robert</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Dave Robert</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Brown Robert</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Usman Muhammad</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Abdullah</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Dow John</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>John R</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Paul Wilson</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Wilson Paul</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Heera Sheikh</td>\r\n        <td class=\"center\">2012/01/21</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sheikh Heera</td>\r\n        <td class=\"center\">2012/01/21</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Christopher</td>\r\n        <td class=\"center\">2012/08/23</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Andro Christopher</td>\r\n        <td class=\"center\">2012/08/23</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Jhon Doe</td>\r\n        <td class=\"center\">2012/06/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Lorem Ipsum</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Abraham</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Brown Blue</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Worth Name</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n    </table>\r\n    </div>\r\n    </div><!--/span-->\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/ipc/ipc"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("IPC列表");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("区域管理");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("专业管理");
  }

  data.buffer.push("<div class=\"container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span11 offset1\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n                <li class=\"ajax-link active \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ipcs", options) : helperMissing.call(depth0, "link-to", "ipcs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "area", options) : helperMissing.call(depth0, "link-to", "area", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "major", options) : helperMissing.call(depth0, "link-to", "major", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n\r\n        <div class=\"box\" >\r\n            <div class=\"box-header well\" data-original-title>\r\n                    <h2>摄像头详细信息</h2>\r\n            </div>\r\n            <div class=\"box-content\">\r\n\r\n\r\n              <span >");
  stack1 = helpers._triageMustache.call(depth0, "sn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><br>\r\n              <span>");
  stack1 = helpers._triageMustache.call(depth0, "area", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><br>\r\n              <span>");
  stack1 = helpers._triageMustache.call(depth0, "position", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><br>\r\n\r\n                <span>");
  stack1 = helpers._triageMustache.call(depth0, "factory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><br>\r\n                 <span>");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><br>\r\n                <span>");
  stack1 = helpers._triageMustache.call(depth0, "starttime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><br>\r\n                 <span>");
  stack1 = helpers._triageMustache.call(depth0, "industry", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><br>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["template/link/ipcLink"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link active \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ipcLink", options) : helperMissing.call(depth0, "link-to", "ipcLink", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                 ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("接入IPC");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "clientLink", options) : helperMissing.call(depth0, "link-to", "clientLink", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                    ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("接入客户端");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <tr>\r\n                            <td class=\"center\">\r\n                                <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("ip")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "ip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            </td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "mediaPort", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "port", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "regTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "sid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n\r\n                        </tr>\r\n                    ");
  return buffer;
  }

  data.buffer.push("\r\n<div class=\" padding-zero container-fluid\">\r\n\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n                ");
  stack1 = helpers['if'].call(depth0, "ipcLinkRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "clientLinkRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n        <div class=\"box\">\r\n            <div class=\"input-inline\" style=\"padding-top:18px;display: none;\" data-original-title>\r\n\r\n                <label class=\"help-inline\">&nbsp;&nbsp;开始时间:  </label>\r\n                <input class=\"starttime\" type=\"text\"     data-date-format=\" yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n                <label class=\"help-inline\">结束时间:  </label>\r\n                <input class=\"endtime\" type=\"text\"     data-date-format=\"yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n                &nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-success\" style=\"vertical-align: top;\"><i class=\"icon-search icon-white\"></i> 查询</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n            </div>\r\n            <div class=\"box-content\">\r\n                <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>ip</th>\r\n                        <th>mediaPort</th>\r\n                        <th>name</th>\r\n                        <th>port</th>\r\n                        <th>regTime</th>\r\n                        <th>sid</th>\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </tbody>\r\n                </table>\r\n                <!--分页控件-->\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n            </div>\r\n\r\n        </div><!--/span-->\r\n\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/link/clientLink"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link \">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ipcLink", options) : helperMissing.call(depth0, "link-to", "ipcLink", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("接入IPC");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link  active\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "clientLink", options) : helperMissing.call(depth0, "link-to", "clientLink", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("接入客户端");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <tr>\r\n                            <td class=\"center\">\r\n                                <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("ip")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "ip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            </td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "mediaPort", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "port", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "regTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "sid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n\r\n                        </tr>\r\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n                ");
  stack1 = helpers['if'].call(depth0, "ipcLinkRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "clientLinkRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n        <div class=\"box\">\r\n            <div class=\"input-inline\" style=\"padding-top:18px;display: none;\" data-original-title>\r\n\r\n                <label class=\"help-inline\">&nbsp;&nbsp;开始时间:  </label>\r\n                <input class=\"starttime\" type=\"text\"     data-date-format=\" yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n                <label class=\"help-inline\">结束时间:  </label>\r\n                <input class=\"endtime\" type=\"text\"     data-date-format=\"yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n                &nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-success\" style=\"vertical-align: top;\"><i class=\"icon-search icon-white\"></i> 查询</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n            </div>\r\n            <div class=\"box-content\">\r\n                <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>ip</th>\r\n                        <th>mediaPort</th>\r\n                        <th>name</th>\r\n                        <th>port</th>\r\n                        <th>regTime</th>\r\n                        <th>sid</th>\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </tbody>\r\n                </table>\r\n                <!--分页控件-->\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n            </div>\r\n\r\n        </div><!--/span-->\r\n\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/cn"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n              ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link active\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("控制服务器");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("媒体服务器");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n                ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n                ");
  return buffer;
  }
function program18(depth0,data) {
  
  
  data.buffer.push("日志");
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <tr>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("descp")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "sid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            </td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "cn_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "host", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "port", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "sip_port", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "install_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "isLeader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "requestCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                ");
  stack1 = helpers['if'].call(depth0, "is_alive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n\r\n                        </tr>\r\n                    ");
  return buffer;
  }
function program21(depth0,data) {
  
  
  data.buffer.push("\r\n                                    <i class=\"ipc-online\"></i>\r\n                                ");
  }

function program23(depth0,data) {
  
  
  data.buffer.push("\r\n                                    <i class=\"ipc-offline\"></i>\r\n                                ");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12 \">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n            ");
  stack1 = helpers['if'].call(depth0, "serviceRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "cnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "rnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <!--<li class=\"ajax-link\">-->\r\n                <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            <!--<li class=\"ajax-link\">-->\r\n                <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "hostsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "logRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n            </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n        <div class=\"box\">\r\n            <div class=\"input-inline\" style=\"padding-top:18px;display: none;\" data-original-title>\r\n\r\n                <label class=\"help-inline\">&nbsp;&nbsp;开始时间:  </label>\r\n                <input class=\"starttime\" type=\"text\"     data-date-format=\" yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n                <label class=\"help-inline\">结束时间:  </label>\r\n                <input class=\"endtime\" type=\"text\"     data-date-format=\"yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n                &nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-success\"><i class=\"icon-search icon-white\"></i> 查询</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n            </div>\r\n            <div class=\"box-content\">\r\n                <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th style=\"text-align: center;\">服务编号</th>\r\n                        <th style=\"text-align: center;\">服务名称</th>\r\n                        <th style=\"text-align: center;\">服务地址</th>\r\n                        <th style=\"text-align: center;\">服务端口</th>\r\n                        <th style=\"text-align: center;\">通信端口</th>\r\n                        <th style=\"text-align: center;\">启动时间</th>\r\n                        <th style=\"text-align: center;\">主从控制节点</th>\r\n                        <th style=\"text-align: center;\">被请求总次数</th>\r\n                        <th style=\"text-align: center;\">生存状态</th>\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </tbody>\r\n                </table>\r\n                <!--分页控件-->\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n\r\n            </div>\r\n\r\n        </div><!--/span-->\r\n\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/rn"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("控制服务器");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link active\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("媒体服务器");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program18(depth0,data) {
  
  
  data.buffer.push("日志");
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <tr>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("descp")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "sid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            </td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "rn_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "host", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "port", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "install_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "workStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                ");
  stack1 = helpers['if'].call(depth0, "is_alive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </td>\r\n\r\n                        </tr>\r\n                    ");
  return buffer;
  }
function program21(depth0,data) {
  
  
  data.buffer.push("\r\n                                    <i class=\"ipc-online\"></i>\r\n                                ");
  }

function program23(depth0,data) {
  
  
  data.buffer.push("\r\n                                    <i class=\"ipc-offline\"></i>\r\n                                ");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12 \">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "serviceRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "cnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "rnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <!--<li class=\"ajax-link\">-->\r\n            <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            <!--<li class=\"ajax-link\">-->\r\n            <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "hostsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "logRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n            </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n        <div class=\"box\">\r\n            <div class=\"input-inline\" style=\"padding-top:18px; display: none;\" data-original-title>\r\n\r\n                <label class=\"help-inline\">&nbsp;&nbsp;开始时间:  </label>\r\n                <input class=\"starttime\" type=\"text\"     data-date-format=\" yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n                <label class=\"help-inline\">结束时间:  </label>\r\n                <input class=\"endtime\" type=\"text\"     data-date-format=\"yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n                &nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-success\"><i class=\"icon-search icon-white\"></i> 查询</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n            </div>\r\n            <div class=\"box-content\">\r\n                <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th style=\"text-align: center;\">服务编号</th>\r\n                        <th style=\"text-align: center;\">服务名称</th>\r\n                        <th style=\"text-align: center;\">服务地址</th>\r\n                        <th style=\"text-align: center;\">服务端口</th>\r\n                        <th style=\"text-align: center;\">启动时间</th>\r\n                        <th style=\"text-align: center;\">当前 / 已处理任务</th>\r\n                        <th style=\"text-align: center;\">生存状态</th>\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </tbody>\r\n                </table>\r\n                <!--分页控件-->\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n            </div>\r\n\r\n        </div><!--/span-->\r\n\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/database"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("CN");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("RN");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("日志");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12\">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link active\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n        </ul>\r\n            </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\">\r\n        <div class=\"box span4\">\r\n            <div class=\"box-header well\">\r\n                <h2><i class=\"icon-th\"></i> Pie</h2>\r\n                <div class=\"box-icon\">\r\n                    <a href=\"#\" class=\"btn btn-setting btn-round\"><i class=\"icon-cog \"></i></a>\r\n                    <a href=\"#\" class=\"btn btn-minimize btn-round\"><i class=\"icon-chevron-up\"></i></a>\r\n                    <a href=\"#\" class=\"btn btn-close btn-round\">  <i class=\"icon-remove\"> </i> </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-content\">\r\n        <canvas id=\"canvas\" style=\"height:100%; width:100%\"></canvas>\r\n        </div>\r\n    </div>\r\n        </div>\r\n</div>\r\n        <script>\r\n\r\n            var pieData = [\r\n                {\r\n                    value: 30,\r\n                    color:\"#F38630\"\r\n                },\r\n                {\r\n                    value : 50,\r\n                    color : \"#E0E4CC\"\r\n                },\r\n                {\r\n                    value : 100,\r\n                    color : \"#69D2E7\"\r\n                }\r\n\r\n            ];\r\n\r\n            var myPie = new Chart(document.getElementById(\"canvas\").getContext(\"2d\")).Pie(pieData);\r\n\r\n        </script>\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/hdfs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("CN");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("RN");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("HDFS");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("应用");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("日志");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12\">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <!--<a class=\"ajax-link\" href=\"gis\" >首页</a>-->\r\n            </li>\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link active\">\r\n                <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "hdfs", options) : helperMissing.call(depth0, "link-to", "hdfs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n                <a href=\"http://10.7.100.31:8080/#/login\" target=\"_blank\">HDFS</a>\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "monitoringApp", options) : helperMissing.call(depth0, "link-to", "monitoringApp", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n        </ul>\r\n            </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\">\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/mainframe"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("控制服务器");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("媒体服务器");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link active\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program18(depth0,data) {
  
  
  data.buffer.push("日志");
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <tr>\r\n                    <td style=\" vertical-align: middle;\">\r\n                        <div style=\"width: 30px;margin-left: 10px;margin-right: 5px;\" class=\"help-inline\">\r\n                            ");
  stack1 = helpers['if'].call(depth0, "host_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                        </div>\r\n\r\n                       ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </td>\r\n                    <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "ip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "cpu", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "ram", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td style=\"text-align: center;vertical-align: middle;\">\r\n                        <div class=\"progress\" data-toggle=\"tooltip\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("disk_usage_detail")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                            <div class=\"bar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("disk_usage")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\r\n                        </div>\r\n                    </td>\r\n                    <td style=\"text-align: center;vertical-align: middle;\">\r\n                        <a href='#' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showComponents", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"help-inline\">\r\n                               <span class=\"caret right\"></span>");
  stack1 = helpers._triageMustache.call(depth0, "componentsNum", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Components\r\n                        </a>\r\n                        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("id")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" style=\"display: none;font-size: 12px;\">\r\n                            ");
  stack1 = helpers.each.call(depth0, "rn", "in", "rnList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                            ");
  stack1 = helpers.each.call(depth0, "cn", "in", "cnList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </div>\r\n\r\n\r\n                    </td>\r\n                </tr>\r\n\r\n            ");
  return buffer;
  }
function program21(depth0,data) {
  
  
  data.buffer.push("\r\n                                <i class=\"ipc-online\"></i>\r\n                            ");
  }

function program23(depth0,data) {
  
  
  data.buffer.push("\r\n                                <i class=\"ipc-offline\"></i>\r\n                            ");
  }

function program25(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "rn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                            ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "cn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                            ");
  return buffer;
  }

  data.buffer.push("<div class=\" padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12\">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "serviceRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "cnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "rnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <!--<li class=\"ajax-link\">-->\r\n            <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            <!--<li class=\"ajax-link\">-->\r\n            <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "hostsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "logRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n            </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n    <div class=\"box\">\r\n\r\n\r\n    <div class=\"box-content\">\r\n        <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n            <thead>\r\n            <tr>\r\n                <!--<th>id</th>-->\r\n                <th class=\"width8\" style=\"text-align: center\" >主机名\r\n                </th >\r\n\r\n                <th class=\"width8\" style=\"text-align: center\">IP地址\r\n                </th>\r\n                <th class=\"width8\" style=\"text-align: center\">CPU\r\n                </th>\r\n                <th class=\"width8\" style=\"text-align: center\">内存\r\n                </th>\r\n                <th class=\"width8\" style=\"text-align: center\">硬盘使用率\r\n                </th>\r\n                <th class=\"width8\" style=\"text-align: center\">组件</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n            ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n            </tbody>\r\n        </table>\r\n        <!--分页控件-->\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n\r\n    </div>\r\n\r\n    </div>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/service"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link active\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("控制服务器");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("媒体服务器");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program18(depth0,data) {
  
  
  data.buffer.push("日志");
  }

function program20(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                          rnList : ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                          host : ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                          cn : ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                          ");
  stack1 = helpers.each.call(depth0, "video.details", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                      ");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "video.rnList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "video.host", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "video.cn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                              <hr>\r\n                              host:");
  stack1 = helpers._triageMustache.call(depth0, "host", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                              RTP_RECIEVER:");
  stack1 = helpers._triageMustache.call(depth0, "RTP_RECIEVER", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                              RTP_SENDER:");
  stack1 = helpers._triageMustache.call(depth0, "RTP_SENDER", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                              completeTask:");
  stack1 = helpers._triageMustache.call(depth0, "completeTask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                              currentTask:");
  stack1 = helpers._triageMustache.call(depth0, "currentTask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                              record_Read:");
  stack1 = helpers._triageMustache.call(depth0, "record_Read", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                              record_Write:");
  stack1 = helpers._triageMustache.call(depth0, "record_Write", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                          ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                        rnList : ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                        host : ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(32, program32, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                        cn : ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(34, program34, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n\r\n                        ");
  stack1 = helpers.each.call(depth0, "record.details", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(36, program36, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  return buffer;
  }
function program30(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "record.rnList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "record.host", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "record.cn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                            <hr>\r\n                            host:");
  stack1 = helpers._triageMustache.call(depth0, "host", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                            RTP_RECIEVER:");
  stack1 = helpers._triageMustache.call(depth0, "RTP_RECIEVER", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                            RTP_SENDER:");
  stack1 = helpers._triageMustache.call(depth0, "RTP_SENDER", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                            completeTask:");
  stack1 = helpers._triageMustache.call(depth0, "completeTask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                            currentTask:");
  stack1 = helpers._triageMustache.call(depth0, "currentTask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                            record_Read:");
  stack1 = helpers._triageMustache.call(depth0, "record_Read", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                            record_Write:");
  stack1 = helpers._triageMustache.call(depth0, "record_Write", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br>\r\n                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12 \">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "serviceRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "cnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "rnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <!--<li class=\"ajax-link\">-->\r\n            <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            <!--<li class=\"ajax-link\">-->\r\n            <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "hostsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "logRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\">\r\n\r\n        <div class=\"box span4\">\r\n            <div class=\"box-header well\">\r\n                <h2><i class=\"icon-th\"></i>视频播放服务</h2>\r\n                <div class=\"box-icon\">\r\n                    <a href=\"#\" class=\"btn btn-setting btn-round\"><i class=\"icon-cog \"></i></a>\r\n                    <a href=\"#\" class=\"btn btn-minimize btn-round\"><i class=\"icon-chevron-up\"></i></a>\r\n                    <a href=\"#\" class=\"btn btn-close btn-round\">  <i class=\"icon-remove\"> </i> </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-content\">\r\n\r\n                    <ul>\r\n                      ");
  stack1 = helpers.each.call(depth0, "video", "in", "videoPlayService", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                     </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"box span4\">\r\n            <div class=\"box-header well\">\r\n                <h2><i class=\"icon-th\"></i> 视频录像服务</h2>\r\n                <div class=\"box-icon\">\r\n                    <a href=\"#\" class=\"btn btn-setting btn-round\"><i class=\"icon-cog \"></i></a>\r\n                    <a href=\"#\" class=\"btn btn-minimize btn-round\"><i class=\"icon-chevron-up\"></i></a>\r\n                    <a href=\"#\" class=\"btn btn-close btn-round\">  <i class=\"icon-remove\"> </i> </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-content\">\r\n                <ul>\r\n                    ");
  stack1 = helpers.each.call(depth0, "record", "in", "recordService", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </ul>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"box span4\">\r\n            <div class=\"box-header well\">\r\n                <h2><i class=\"icon-th\"></i> HDFS</h2>\r\n                <div class=\"box-icon\">\r\n                    <a href=\"#\" class=\"btn btn-setting btn-round\"><i class=\"icon-cog \"></i></a>\r\n                    <a href=\"#\" class=\"btn btn-minimize btn-round\"><i class=\"icon-chevron-up\"></i></a>\r\n                    <a href=\"#\" class=\"btn btn-close btn-round\">  <i class=\"icon-remove\"> </i> </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-content\">\r\n               <p>\r\n                   key : value<br>\r\n                   <a href=\"http://10.7.100.31:8080/#/login\" target=\"_blank\">konw more about HDFS</a>\r\n\r\n               </p>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/webServer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("CN");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("RN");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program18(depth0,data) {
  
  
  data.buffer.push("日志");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12 \">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "serviceRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "cnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "rnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <!--<li class=\"ajax-link\">-->\r\n            <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            <!--<li class=\"ajax-link\">-->\r\n            <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n            <!--</li>-->\r\n            ");
  stack1 = helpers['if'].call(depth0, "hostsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "logRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\">\r\n        <h1 class=\"page-header\">this is  service page</h1>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/monitoringApp"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("CN");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("RN");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("HDFS");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("应用");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("日志");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12 \">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <!--<a class=\"ajax-link\" href=\"gis\" >首页</a>-->\r\n            </li>\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link \">\r\n                <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "hdfs", options) : helperMissing.call(depth0, "link-to", "hdfs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n                <a href=\"http://10.7.100.31:8080/#/login\" target=\"_blank\">HDFS</a>\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link active\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "monitoringApp", options) : helperMissing.call(depth0, "link-to", "monitoringApp", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n        </ul>\r\n            </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\">\r\n        <h1 class=\"page-header\">this is  service page</h1>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/operation/log"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link \">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "service", options) : helperMissing.call(depth0, "link-to", "service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("服务");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cn", options) : helperMissing.call(depth0, "link-to", "cn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("控制服务器");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "rn", options) : helperMissing.call(depth0, "link-to", "rn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("媒体服务器");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("数据库");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Web Server");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mainframe", options) : helperMissing.call(depth0, "link-to", "mainframe", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("主机");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link active\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logs", options) : helperMissing.call(depth0, "link-to", "logs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program18(depth0,data) {
  
  
  data.buffer.push("日志");
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <tr>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "level_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "src", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "goal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "op_user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "operationTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "duration", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("content")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "less_content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            </td>\r\n\r\n                        </tr>\r\n\r\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n                ");
  stack1 = helpers['if'].call(depth0, "serviceRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "cnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "rnRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <!--<li class=\"ajax-link\">-->\r\n                <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "database", options) : helperMissing.call(depth0, "link-to", "database", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n                <!--</li>-->\r\n                <!--<li class=\"ajax-link\">-->\r\n                <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "webServer", options) : helperMissing.call(depth0, "link-to", "webServer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n                <!--</li>-->\r\n                ");
  stack1 = helpers['if'].call(depth0, "hostsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "logRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n        <div class=\"box\">\r\n            <div class=\"input-inline\" style=\"padding-top:18px;\" data-original-title>\r\n\r\n                <label class=\"help-inline\">&nbsp;&nbsp;开始时间:</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("starttime"),
    'type': ("text"),
    'data-date-format': (" yyyy-mm-dd hh:ii"),
    'data-date-viewMode': ("1"),
    'data-date-minViewMode': ("0"),
    'data-date-weekStart': ("1"),
    'value': ("search_startTime")
  },hashTypes:{'class': "STRING",'type': "STRING",'data-date-format': "STRING",'data-date-viewMode': "STRING",'data-date-minViewMode': "STRING",'data-date-weekStart': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'data-date-format': depth0,'data-date-viewMode': depth0,'data-date-minViewMode': depth0,'data-date-weekStart': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n\r\n                <label class=\"help-inline\">结束时间:</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("endtime"),
    'type': ("text"),
    'data-date-format': ("yyyy-mm-dd hh:ii"),
    'data-date-viewMode': ("1"),
    'data-date-minViewMode': ("0"),
    'data-date-weekStart': ("1"),
    'value': ("search_endTime")
  },hashTypes:{'class': "STRING",'type': "STRING",'data-date-format': "STRING",'data-date-viewMode': "STRING",'data-date-minViewMode': "STRING",'data-date-weekStart': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'data-date-format': depth0,'data-date-viewMode': depth0,'data-date-minViewMode': depth0,'data-date-weekStart': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" &nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n                <label class=\"help-inline\">操作类型:</label>\r\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'viewName': ("select"),
    'contentBinding': ("typeList"),
    'selectionBinding': ("selectedType")
  },hashTypes:{'viewName': "STRING",'contentBinding': "STRING",'selectionBinding': "STRING"},hashContexts:{'viewName': depth0,'contentBinding': depth0,'selectionBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                <label class=\"help-inline\">操作用户</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("search_user")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n\r\n                &nbsp;&nbsp;\r\n                <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"vertical-align: top;\"><i class=\"icon-search icon-white\"></i> 查询</button>\r\n\r\n            </div>\r\n            <div class=\"box-content\">\r\n                <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th style=\"text-align: center\">级别\r\n                        </th>\r\n                        <th style=\"text-align: center\">操作类型\r\n                        </th>\r\n                        <th style=\"text-align: center\">操作源\r\n                        </th>\r\n                        <th style=\"text-align: center\">操作目标\r\n                        </th>\r\n                        <th style=\"text-align: center\">操作用户\r\n                        </th>\r\n                        <th style=\"text-align: center\">操作时间\r\n                        </th>\r\n                        <th style=\"text-align: center\">操作时长(秒)\r\n                        </th>\r\n\r\n                        <th style=\"text-align: center\">日志内容\r\n                        </th>\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </tbody>\r\n                </table>\r\n                <!--分页控件-->\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n            </div>\r\n\r\n        </div><!--/span-->\r\n\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/record/videoRecord"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("计划执行");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("计划列表");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <tr>\r\n                <!--<td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "sid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>-->\r\n                <td class=\"center\">\r\n                   ");
  stack1 = helpers._triageMustache.call(depth0, "task_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </td>\r\n                <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "task_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td class=\"center\">\r\n                    <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("ipc_detail")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "ipc_sid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                </td>\r\n                <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "creator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "plan_begin_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "plan_end_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "real_begin_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td class=\"center\">");
  stack1 = helpers._triageMustache.call(depth0, "real_end_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                <td class=\"center\">\r\n                    <!--<a class=\"btn btn-success\" href=\"#\" data-toggle=\"tooltip\" title=\"查看\">-->\r\n                    <!--<i class=\"icon-zoom-in icon-white\"></i>-->\r\n                    <!--View-->\r\n                    <!--</a>-->\r\n                    <a class=\"btn btn-info\" href=\"#\" data-toggle=\"tooltip\" title=\"编辑\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeEdit", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                        <i class=\"icon-edit icon-white\"></i>\r\n                        <!--Edit-->\r\n                    </a>\r\n\r\n                    <!--<a class=\"btn btn-danger\" data-toggle=\"tooltip\" title=\"删除\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteTask", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-->\r\n                        <!--<i class=\"icon-trash icon-white\"></i>-->\r\n                        <!--&lt;!&ndash;Delete&ndash;&gt;-->\r\n                    <!--</a>-->\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['delete-confirm'] || (depth0 && depth0['delete-confirm']),options={hash:{
    'title': ("task_name"),
    'action': ("deleteTask"),
    'param': ("")
  },hashTypes:{'title': "ID",'action': "STRING",'param': "ID"},hashContexts:{'title': depth0,'action': depth0,'param': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "delete-confirm", options))));
  data.buffer.push("\r\n\r\n                </td>\r\n            </tr>\r\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n<div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n    <div class=\"row-fluid span11 offset1\">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            <li class=\"ajax-link active\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "record", options) : helperMissing.call(depth0, "link-to", "record", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "plans", options) : helperMissing.call(depth0, "link-to", "plans", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n<div class=\"box\">\r\n<!--<div class=\"box-header well\" data-original-title>-->\r\n<!--<h2>摄像头列表</h2>-->\r\n<!--</div>-->\r\n<div class=\"input-inline\" style=\"padding-top:18px;\" data-original-title>\r\n    <!--<h2><i class=\"icon-user\"></i> Members</h2>-->\r\n    <label class=\"help-inline\">数据源:  </label>\r\n    <input  type=\"text\" >\r\n    <label class=\"help-inline\">开始时间:  </label>\r\n    <input class=\"starttime\" type=\"text\"     data-date-format=\" yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n    <label class=\"help-inline\">结束时间:  </label>\r\n    <input class=\"endtime\" type=\"text\"     data-date-format=\"yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n    &nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-success\"><i class=\"icon-search icon-white\"></i> 查询</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <!--<button class=\"btn btn-info\">新增</button>-->\r\n\r\n    <a href=\"#add\" data-toggle=\"modal\" class=\"btn btn-success\" ><i class=\"icon-plus icon-white\"></i> 新增</a>\r\n    <div class=\"modal hide\" id=\"add\" style=\"top:20%;\" data-backdrop=\"static\">\r\n        <div class=\"modal-header\">\r\n            <a href=\"#\" class=\"close\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">×</a>\r\n            <h4>新增</h4>\r\n        </div>\r\n\r\n        <div class=\"modal-body\">\r\n            <form class=\"form-horizontal\" >\r\n                <!--<div class=\"control-group\">-->\r\n                    <!--<label class=\"control-label\" >计划编号</label>-->\r\n                    <!--<div class=\"controls\">-->\r\n\r\n                        <!--");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newTaskIpc.task_id")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <div class=\"control-group\">\r\n                    <label class=\"control-label\" >计划名</label>\r\n                    <div class=\"controls\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newTaskIpc.task_name")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n                <div class=\"control-group\">\r\n                    <label class=\"control-label\" >计划IPC</label>\r\n                    <div class=\"controls\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newTaskIpc.ipc_sid")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n                <!--<div class=\"control-group\">-->\r\n                    <!--<label class=\"control-label\" >创建者</label>-->\r\n                    <!--<div class=\"controls\">-->\r\n                        <!--");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newTaskIpc.creator")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <div class=\"control-group\">\r\n                    <label class=\"control-label\" >计划开始时间</label>\r\n                    <div class=\"controls\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("starttime"),
    'value': ("newTaskIpc.plan_begin_time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n                <div class=\"control-group\">\r\n                    <label class=\"control-label\" >计划结束时间</label>\r\n                    <div class=\"controls\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("endtime"),
    'value': ("newTaskIpc.plan_end_time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n                <div class=\"control-group\">\r\n                    <label class=\"control-label\" >实际开始时间</label>\r\n                    <div class=\"controls\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("real_starttime"),
    'value': ("newTaskIpc.real_begin_time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n                <div class=\"control-group\">\r\n                    <label class=\"control-label\" >实际结束时间</label>\r\n                    <div class=\"controls\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("real_endtime"),
    'value': ("newTaskIpc.real_end_time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n            <button class=\"btn-success\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTaskIpc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">新增</button>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button  class=\"btn-info\" data-dismiss=\"modal\" >取消</button>\r\n        </div>\r\n    </div>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n</div>\r\n\r\n<div class=\"box-content\">\r\n    <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n        <thead>\r\n        <tr>\r\n            <!--<th>id</th>-->\r\n            <th>计划编号\r\n                <!--<br>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("task_id"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n            </th>\r\n            <th>计划名\r\n                <!--<br>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("task_name"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n            </th>\r\n            <th>计划IPC\r\n                <!--<br>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("ipc_sid"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n            </th>\r\n            <th>创建者\r\n                <!--<br> ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("creator"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n            </th>\r\n            <th>计划开始时间\r\n                <!--<br>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("plan_begin_time"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n            </th>\r\n            <th>计划结束时间\r\n                <!--<br>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("plan_end_time"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n            </th>\r\n            <th>实际开始时间\r\n                <!--<br>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("real_begin_time"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n            </th>\r\n            <th>实际结束时间\r\n                <!--<br>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("real_end_time"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n            </th>\r\n            <th style=\"width:10%;text-align:center;\">操作<label> </label></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n        ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        </tbody>\r\n    </table>\r\n    <!--分页控件-->\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n</div>\r\n\r\n<div class=\"modal hide\" id=\"edit\" style=\"top:20%;\" data-backdrop=\"static\">\r\n    <div class=\"modal-header\">\r\n        <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n        <h4>修改</h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" >\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >计划编号</label>\r\n                <div class=\"controls\">\r\n\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_task_id"),
    'disabled': ("true")
  },hashTypes:{'type': "STRING",'value': "ID",'disabled': "STRING"},hashContexts:{'type': depth0,'value': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >计划名</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_task_name")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >计划IPC</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_ipc_sid")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >创建者</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_creator"),
    'disabled': ("true")
  },hashTypes:{'type': "STRING",'value': "ID",'disabled': "STRING"},hashContexts:{'type': depth0,'value': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >计划开始时间</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("starttime"),
    'value': ("edit_plan_begin_time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >计划结束时间</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("endtime"),
    'value': ("edit_plan_end_time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >实际开始时间</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("starttime"),
    'value': ("edit_real_begin_time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >实际结束时间</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("endtime"),
    'value': ("edit_real_end_time")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editTaskIpc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" data-dismiss=\"modal\">修改</button>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n    </div>\r\n</div>\r\n</div><!--/span-->\r\n\r\n</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["template/record/planList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n&nbsp;&nbsp;\r\n<a  class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAddOrEdit", "add", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ><i class=\"icon-plus icon-white\"></i> 新增</a>\r\n\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n            <th style=\"width:15%;text-align:center;\">操作\r\n            </th>\r\n                ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <tr>\r\n                <td style=\"text-align: center;vertical-align: middle;\">\r\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </td>\r\n                <!--<td style=\"text-align: center\">");
  stack1 = helpers._triageMustache.call(depth0, "ipc_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>-->\r\n                <td style=\"text-align: center;vertical-align: middle;\">\r\n                    <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("timeCron")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "timeCron", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                </td>\r\n                <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "timeLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                ");
  stack1 = helpers['if'].call(depth0, "controller.planOperateRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </tr>\r\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                <td style=\"text-align: center;vertical-align: middle;\">\r\n                    <!--<a class=\"btn btn-success\" href=\"#\" data-toggle=\"tooltip\" title=\"查看\">-->\r\n                    <!--<i class=\"icon-zoom-in icon-white\"></i>-->\r\n                    <!--View-->\r\n                    <!--</a>-->\r\n                    <a class=\"btn btn-info\" href=\"#\" data-toggle=\"tooltip\" title=\"编辑\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAddOrEdit", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                        <i class=\"icon-edit icon-white\"></i>\r\n                        <!--Edit-->\r\n                    </a>\r\n                    <a class=\"btn btn-success\" href=\"#\" data-toggle=\"tooltip\" title=\"指定摄像头\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforePointIpc", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                        <i class=\"icon-plus icon-white\"></i>\r\n                        <!--Edit-->\r\n                    </a>\r\n\r\n                    <!--<a class=\"btn btn-danger\" data-toggle=\"tooltip\" title=\"删除\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deletePlanTask", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-->\r\n                    <!--<i class=\"icon-trash icon-white\"></i>-->\r\n                    <!--&lt;!&ndash;Delete&ndash;&gt;-->\r\n                    <!--</a>-->\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['delete-confirm'] || (depth0 && depth0['delete-confirm']),options={hash:{
    'title': ("name"),
    'action': ("deletePlanTask"),
    'param': ("")
  },hashTypes:{'title': "ID",'action': "STRING",'param': "ID"},hashContexts:{'title': depth0,'action': depth0,'param': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "delete-confirm", options))));
  data.buffer.push("\r\n\r\n                </td>\r\n                 ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <option>");
  stack1 = helpers._triageMustache.call(depth0, "ipc.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n<div class=\"row-fluid span12 \" style=\"padding-top:20px;\">\r\n<div class=\"box\">\r\n\r\n<div class=\"input-inline\" style=\"padding-top:18px;\" data-original-title>\r\n");
  stack1 = helpers['if'].call(depth0, "planOperateRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<div class=\"modal hide corn-modal\" id=\"add_edit\"  data-backdrop=\"static\">\r\n<div class=\"modal-header\">\r\n    <a href=\"#\" class=\"close\" data-dismiss=\"modal\" >×</a>\r\n    <h4>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("录制策略</h4>\r\n</div>\r\n\r\n<div class=\"corn-modal-body\" >\r\n<form style=\"position: relative;\">\r\n<div class=\"control-group\">\r\n    <label class=\"control-label help-inline ipcLabel\" >计划名<i style=\"color:red\">*</i></label>\r\n    <div class=\"controls help-inline\" >\r\n        <!--");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("plan_name"),
    'id': ("plan_name")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("plan_name_view"),
    'valueBinding': ("plan_name")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </div>\r\n\r\n    <label class=\"control-label help-inline ipcLabel\" >时长(/分钟)<i style=\"color:red\">*</i></label>\r\n    <div class=\"controls help-inline\" >\r\n        <!--");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("plan_timeLength")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("-->\r\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("plan_timeLength_view"),
    'valueBinding': ("plan_timeLength"),
    'placeholder': ("空或-1为循环录制")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'placeholder': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"control-group\">\r\n\r\n<div class=\"tabbable \" style=\"height:200px; border: 1px rgb(202, 196, 196) solid; border-radius: 5px;\">\r\n<label class=\"control-label help-inline\" >制定计划规则<i style=\"color:red\">*</i></label>\r\n<div style=\"padding-left: 10px;\">\r\n<ul class=\"nav nav-tabs\">\r\n    <li class=\"active\"><a href=\"#minute_tab\" data-toggle=\"tab\">分钟</a></li>\r\n    <li><a href=\"#hour_tab\" data-toggle=\"tab\">小时</a> </li>\r\n    <li><a href=\"#day_tab\" data-toggle=\"tab\">日</a> </li>\r\n    <li><a href=\"#month_tab\" data-toggle=\"tab\">月</a> </li>\r\n    <li><a href=\"#week_tab\" data-toggle=\"tab\">周</a> </li>\r\n    <!--<li style=\"display: none;\"><a href=\"#year_tab\" data-toggle=\"tab\">年</a> </li>-->\r\n</ul>\r\n<div class=\"tab-content plan\">\r\n<div class=\"tab-pane active\" id=\"minute_tab\">\r\n    <div title=\"分钟\">\r\n        <!--<div class=\"line\" style=\"display: none;\">-->\r\n        <!--<input type=\"radio\"  name=\"min\" onclick=\"everyTime(this)\">-->\r\n        <!--分钟 允许的通配符[, - * /]</div>-->\r\n        <!--<div class=\"line\" style=\"display: none;\">-->\r\n        <!--<input type=\"radio\" name=\"min\" onclick=\"cycle(this)\">-->\r\n        <!--周期从-->\r\n        <!--<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:58\" value=\"1\"-->\r\n        <!--id=\"minStart_0\">-->\r\n        <!----->\r\n        <!--<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:2,max:59\" value=\"2\"-->\r\n        <!--id=\"minEnd_0\">-->\r\n        <!--分钟</div>-->\r\n        <!--<div class=\"line\" style=\"display: none;\">-->\r\n        <!--<input type=\"radio\" name=\"min\" onclick=\"startOn(this)\">-->\r\n        <!--从-->\r\n        <!--<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:0,max:59\" value=\"0\"-->\r\n        <!--id=\"minStart_1\">-->\r\n        <!--分钟开始,每-->\r\n        <!--<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:59\" value=\"1\"-->\r\n        <!--id=\"minEnd_1\">-->\r\n        <!--分钟执行一次</div>-->\r\n        <div class=\"line\">\r\n            <input type=\"radio\" name=\"min\" id=\"min_appoint\" checked=\"checked\">\r\n            指定</div>\r\n        <div class=\"imp minList\">\r\n            <input type=\"checkbox\" value=\"15\">15\r\n            <input type=\"checkbox\" value=\"30\">30\r\n            <input type=\"checkbox\" value=\"45\">45\r\n        </div>\r\n        <!--<div class=\"imp minList\" style=\"display: none;\">-->\r\n        <!--<input type=\"checkbox\" value=\"1\">01-->\r\n        <!--<input type=\"checkbox\" value=\"2\">02-->\r\n        <!--<input type=\"checkbox\" value=\"3\">03-->\r\n        <!--<input type=\"checkbox\" value=\"4\">04-->\r\n        <!--<input type=\"checkbox\" value=\"5\">05-->\r\n        <!--<input type=\"checkbox\" value=\"6\">06-->\r\n        <!--<input type=\"checkbox\" value=\"7\">07-->\r\n        <!--<input type=\"checkbox\" value=\"8\">08-->\r\n        <!--<input type=\"checkbox\" value=\"9\">09-->\r\n        <!--<input type=\"checkbox\" value=\"10\">10</div>-->\r\n        <!--<div class=\"imp minList\">-->\r\n        <!--<div style=\"display: none;\">-->\r\n        <!--<input type=\"checkbox\" value=\"11\">11-->\r\n        <!--<input type=\"checkbox\" value=\"12\">12-->\r\n        <!--<input type=\"checkbox\" value=\"13\">13-->\r\n        <!--<input type=\"checkbox\" value=\"14\">14-->\r\n        <!--</div>-->\r\n        <!--<input type=\"checkbox\" value=\"15\">15-->\r\n        <!--<div style=\"display: none;\">-->\r\n        <!--<input type=\"checkbox\" value=\"16\">16-->\r\n        <!--<input type=\"checkbox\" value=\"17\">17-->\r\n        <!--<input type=\"checkbox\" value=\"18\">18-->\r\n        <!--<input type=\"checkbox\" value=\"19\">19-->\r\n        <!--<input type=\"checkbox\" value=\"20\">20-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"imp minList\">-->\r\n        <!--<div style=\"display: none;\">-->\r\n        <!--<input type=\"checkbox\" value=\"21\">21-->\r\n        <!--<input type=\"checkbox\" value=\"22\">22-->\r\n        <!--<input type=\"checkbox\" value=\"23\">23-->\r\n        <!--<input type=\"checkbox\" value=\"24\">24-->\r\n        <!--<input type=\"checkbox\" value=\"25\">25-->\r\n        <!--<input type=\"checkbox\" value=\"26\">26-->\r\n        <!--<input type=\"checkbox\" value=\"27\">27-->\r\n        <!--<input type=\"checkbox\" value=\"28\">28-->\r\n        <!--<input type=\"checkbox\" value=\"29\">29-->\r\n        <!--</div>-->\r\n        <!--<input type=\"checkbox\" value=\"30\">30</div>-->\r\n        <!--<div class=\"imp minList\">-->\r\n        <!--<div style=\"display: none;\">-->\r\n        <!--<input type=\"checkbox\" value=\"31\">31-->\r\n        <!--<input type=\"checkbox\" value=\"32\">32-->\r\n        <!--<input type=\"checkbox\" value=\"33\">33-->\r\n        <!--<input type=\"checkbox\" value=\"34\">34-->\r\n        <!--<input type=\"checkbox\" value=\"35\">35-->\r\n        <!--<input type=\"checkbox\" value=\"36\">36-->\r\n        <!--<input type=\"checkbox\" value=\"37\">37-->\r\n        <!--<input type=\"checkbox\" value=\"38\">38-->\r\n        <!--<input type=\"checkbox\" value=\"39\">39-->\r\n        <!--<input type=\"checkbox\" value=\"40\">40</div>-->\r\n        <!--<div class=\"imp minList\">-->\r\n        <!--<input type=\"checkbox\" value=\"41\">41-->\r\n        <!--<input type=\"checkbox\" value=\"42\">42-->\r\n        <!--<input type=\"checkbox\" value=\"43\">43-->\r\n        <!--<input type=\"checkbox\" value=\"44\">44-->\r\n        <!--<input type=\"checkbox\" value=\"45\">45-->\r\n        <!--<input type=\"checkbox\" value=\"46\">46-->\r\n        <!--<input type=\"checkbox\" value=\"47\">47-->\r\n        <!--<input type=\"checkbox\" value=\"48\">48-->\r\n        <!--<input type=\"checkbox\" value=\"49\">49-->\r\n        <!--<input type=\"checkbox\" value=\"50\">50</div>-->\r\n        <!--<div class=\"imp minList\">-->\r\n        <!--<input type=\"checkbox\" value=\"51\">51-->\r\n        <!--<input type=\"checkbox\" value=\"52\">52-->\r\n        <!--<input type=\"checkbox\" value=\"53\">53-->\r\n        <!--<input type=\"checkbox\" value=\"54\">54-->\r\n        <!--<input type=\"checkbox\" value=\"55\">55-->\r\n        <!--<input type=\"checkbox\" value=\"56\">56-->\r\n        <!--<input type=\"checkbox\" value=\"57\">57-->\r\n        <!--<input type=\"checkbox\" value=\"58\">58-->\r\n        <!--<input type=\"checkbox\" value=\"59\">59-->\r\n        <!--</div>-->\r\n    </div>\r\n</div>\r\n<div class=\"tab-pane\" id=\"hour_tab\">\r\n    <div title=\"小时\">\r\n        <!--<div class=\"line\" style=\"display: none;\">-->\r\n        <!--<input type=\"radio\" checked=\"checked\" name=\"hour\" onclick=\"everyTime(this)\">-->\r\n        <!--小时 允许的通配符[, - * /]</div>-->\r\n        <!--<div class=\"line\" style=\"display: none;\">-->\r\n        <!--<input type=\"radio\" name=\"hour\" onclick=\"cycle(this)\">-->\r\n        <!--周期从-->\r\n        <!--<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:0,max:23\" value=\"0\"-->\r\n        <!--id=\"hourStart_0\">-->\r\n        <!----->\r\n        <!--<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:2,max:23\" value=\"2\"-->\r\n        <!--id=\"hourEnd_1\">-->\r\n        <!--小时</div>-->\r\n        <!--<div class=\"line\" style=\"display: none;\">-->\r\n        <!--<input type=\"radio\" name=\"hour\" onclick=\"startOn(this)\">-->\r\n        <!--从-->\r\n        <!--<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:0,max:23\" value=\"0\"-->\r\n        <!--id=\"hourStart_1\">-->\r\n        <!--小时开始,每-->\r\n        <!--<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:23\" value=\"1\"-->\r\n        <!--id=\"hourEnd_1\">-->\r\n        <!--小时执行一次</div>-->\r\n        <div class=\"line\">\r\n            <input type=\"radio\" name=\"hour\" id=\"hour_appoint\" checked=\"checked\">\r\n            指定</div>\r\n        <div class=\"imp hourList\">\r\n            AM:\r\n            <input type=\"checkbox\" value=\"0\">00\r\n            <input type=\"checkbox\" value=\"1\">01\r\n            <input type=\"checkbox\" value=\"2\">02\r\n            <input type=\"checkbox\" value=\"3\">03\r\n            <input type=\"checkbox\" value=\"4\">04\r\n            <input type=\"checkbox\" value=\"5\">05\r\n            <input type=\"checkbox\" value=\"6\">06\r\n            <input type=\"checkbox\" value=\"7\">07\r\n            <input type=\"checkbox\" value=\"8\">08\r\n            <input type=\"checkbox\" value=\"9\">09\r\n            <input type=\"checkbox\" value=\"10\">10\r\n            <input type=\"checkbox\" value=\"11\">11\r\n        </div>\r\n        <div class=\"imp hourList\">\r\n            PM:\r\n            <input type=\"checkbox\" value=\"12\">12\r\n            <input type=\"checkbox\" value=\"13\">13\r\n            <input type=\"checkbox\" value=\"14\">14\r\n            <input type=\"checkbox\" value=\"15\">15\r\n            <input type=\"checkbox\" value=\"16\">16\r\n            <input type=\"checkbox\" value=\"17\">17\r\n            <input type=\"checkbox\" value=\"18\">18\r\n            <input type=\"checkbox\" value=\"19\">19\r\n            <input type=\"checkbox\" value=\"20\">20\r\n            <input type=\"checkbox\" value=\"21\">21\r\n            <input type=\"checkbox\" value=\"22\">22\r\n            <input type=\"checkbox\" value=\"23\">23\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"tab-pane\" id=\"day_tab\">\r\n    <div title=\"日\">\r\n        <div class=\"line\">\r\n            <input type=\"radio\" checked=\"checked\" name=\"day\" onclick=\"everyTime(this)\">\r\n            日 允许的通配符[, - * / L W]</div>\r\n\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"day\" onclick=\"unAppoint(this)\">\r\n            不指定</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"day\" onclick=\"cycle(this)\">\r\n            周期从\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:31\" value=\"1\"\r\n                   id=\"dayStart_0\">\r\n            -\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:2,max:31\" value=\"2\"\r\n                   id=\"dayEnd_0\">\r\n            日</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"day\" onclick=\"startOn(this)\">\r\n            从\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:31\" value=\"1\"\r\n                   id=\"dayStart_1\">\r\n            日开始,每\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:31\" value=\"1\"\r\n                   id=\"dayEnd_1\">\r\n            天执行一次</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"day\" onclick=\"workDay(this)\">\r\n            每月\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:31\" value=\"1\"\r\n                   id=\"dayStart_2\">\r\n            号最近的那个工作日</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"day\" onclick=\"lastDay(this)\">\r\n            本月最后一天</div>\r\n\r\n\r\n        <div class=\"line\">\r\n            <input type=\"radio\" name=\"day\" id=\"day_appoint\">\r\n            指定</div>\r\n        <div class=\"imp dayList\">\r\n            <input type=\"checkbox\" value=\"1\">1\r\n            <input type=\"checkbox\" value=\"2\">2\r\n            <input type=\"checkbox\" value=\"3\">3\r\n            <input type=\"checkbox\" value=\"4\">4\r\n            <input type=\"checkbox\" value=\"5\">5\r\n            <input type=\"checkbox\" value=\"6\">6\r\n            <input type=\"checkbox\" value=\"7\">7\r\n            <input type=\"checkbox\" value=\"8\">8\r\n            <input type=\"checkbox\" value=\"9\">9\r\n            <input type=\"checkbox\" value=\"10\">10\r\n            <input type=\"checkbox\" value=\"11\">11\r\n            <input type=\"checkbox\" value=\"12\">12\r\n            <input type=\"checkbox\" value=\"13\">13\r\n            <input type=\"checkbox\" value=\"14\">14\r\n            <input type=\"checkbox\" value=\"15\">15\r\n            <input type=\"checkbox\" value=\"16\">16\r\n        </div>\r\n        <div class=\"imp dayList\">\r\n            <input type=\"checkbox\" value=\"17\">17\r\n            <input type=\"checkbox\" value=\"18\">18\r\n            <input type=\"checkbox\" value=\"19\">19\r\n            <input type=\"checkbox\" value=\"20\">20\r\n            <input type=\"checkbox\" value=\"21\">21\r\n            <input type=\"checkbox\" value=\"22\">22\r\n            <input type=\"checkbox\" value=\"23\">23\r\n            <input type=\"checkbox\" value=\"24\">24\r\n            <input type=\"checkbox\" value=\"25\">25\r\n            <input type=\"checkbox\" value=\"26\">26\r\n            <input type=\"checkbox\" value=\"27\">27\r\n            <input type=\"checkbox\" value=\"28\">28\r\n            <input type=\"checkbox\" value=\"29\">29\r\n            <input type=\"checkbox\" value=\"30\">30\r\n            <input type=\"checkbox\" value=\"31\">31\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"tab-pane\" id=\"month_tab\">\r\n    <div title=\"月\">\r\n        <div class=\"line\">\r\n            <input type=\"radio\" checked=\"checked\" name=\"mouth\" onclick=\"everyTime(this)\">\r\n            月 允许的通配符[, - * /]</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"mouth\" onclick=\"unAppoint(this)\">\r\n            不指定</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"mouth\" onclick=\"cycle(this)\">\r\n            周期从\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:12\" value=\"1\"\r\n                   id=\"mouthStart_0\">\r\n            -\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:2,max:12\" value=\"2\"\r\n                   id=\"mouthEnd_0\">\r\n            月</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"mouth\" onclick=\"startOn(this)\">\r\n            从\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:12\" value=\"1\"\r\n                   id=\"mouthStart_1\">\r\n            日开始,每\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:12\" value=\"1\"\r\n                   id=\"mouthEnd_1\">\r\n            月执行一次</div>\r\n        <div class=\"line\">\r\n            <input type=\"radio\" name=\"mouth\" id=\"mouth_appoint\">\r\n            指定</div>\r\n        <div class=\"imp mouthList\">\r\n            <input type=\"checkbox\" value=\"1\">1\r\n            <input type=\"checkbox\" value=\"2\">2\r\n            <input type=\"checkbox\" value=\"3\">3\r\n            <input type=\"checkbox\" value=\"4\">4\r\n            <input type=\"checkbox\" value=\"5\">5\r\n            <input type=\"checkbox\" value=\"6\">6\r\n            <input type=\"checkbox\" value=\"7\">7\r\n            <input type=\"checkbox\" value=\"8\">8\r\n            <input type=\"checkbox\" value=\"9\">9\r\n            <input type=\"checkbox\" value=\"10\">10\r\n            <input type=\"checkbox\" value=\"11\">11\r\n            <input type=\"checkbox\" value=\"12\">12\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"tab-pane\" id=\"week_tab\">\r\n    <div title=\"周\">\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\"   name=\"week\" onclick=\"everyTime(this)\">\r\n            周 允许的通配符[, - * / L #]\r\n        </div>\r\n        <div class=\"line\" >\r\n            <input type=\"radio\" checked=\"checked\" name=\"week\" onclick=\"unAppoint(this)\">\r\n            不指定</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"week\" onclick=\"startOn(this)\">\r\n            周期 从星期<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:7\"\r\n                         id=\"weekStart_0\" value=\"1\">\r\n            -\r\n            <input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:2,max:7\" value=\"2\"\r\n                   id=\"weekEnd_0\"></div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"week\" onclick=\"weekOfDay(this)\">\r\n            第<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:4\" value=\"1\"\r\n                    id=\"weekStart_1\">\r\n            周 的星期<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:7\"\r\n                        id=\"weekEnd_1\" value=\"1\"></div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"week\" onclick=\"lastWeek(this)\">\r\n            本月最后一个星期<input class=\"numberspinner\" style=\"width: 60px;\" data-options=\"min:1,max:7\"\r\n                           id=\"weekStart_2\" value=\"1\"></div>\r\n        <div class=\"line\">\r\n            <input type=\"radio\" name=\"week\" id=\"week_appoint\" >\r\n            指定\r\n        </div>\r\n        <div class=\"imp weekList\">\r\n            <input type=\"checkbox\" value=\"1\">1\r\n            <input type=\"checkbox\" value=\"2\">2\r\n            <input type=\"checkbox\" value=\"3\">3\r\n            <input type=\"checkbox\" value=\"4\">4\r\n            <input type=\"checkbox\" value=\"5\">5\r\n            <input type=\"checkbox\" value=\"6\">6\r\n            <input type=\"checkbox\" value=\"7\">7\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"tab-pane\" id=\"year_tab\" style=\"display: none;\">\r\n    <div title=\"年\">\r\n        <div class=\"line\">\r\n            <input type=\"radio\" checked=\"checked\" name=\"year\" onclick=\"unAppoint(this)\">\r\n            不指定 允许的通配符[, - * /] 非必填</div>\r\n        <div class=\"line\">\r\n            <input type=\"radio\" name=\"year\" onclick=\"everyTime(this)\">\r\n            每年</div>\r\n        <div class=\"line\" style=\"display: none;\">\r\n            <input type=\"radio\" name=\"year\" onclick=\"cycle(this)\">周期 从\r\n            <input class=\"numberspinner\" style=\"width: 90px;\" data-options=\"min:2013,max:3000\"\r\n                   id=\"yearStart_0\" value=\"2013\">\r\n            -\r\n            <input class=\"numberspinner\" style=\"width: 90px;\" data-options=\"min:2014,max:3000\"\r\n                   id=\"yearEnd_0\" value=\"2014\"></div>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div  style=\"height:100px; border: 1px rgb(202, 196, 196) solid; border-radius: 5px;\" class=\"control-group\">\r\n    <label class=\"control-label help-inline\" >规则结果表达式</label>\r\n    <table >\r\n        <tbody>\r\n        <tr>\r\n            <td>\r\n            </td>\r\n            <!--<td align=\"center\">-->\r\n            <!--秒-->\r\n            <!--</td>-->\r\n            <td align=\"center\">\r\n                分钟\r\n            </td>\r\n            <td align=\"center\">\r\n                小时\r\n            </td>\r\n            <td align=\"center\">\r\n                日\r\n            </td>\r\n            <td align=\"center\">\r\n                月<br />\r\n            </td>\r\n            <td align=\"center\">\r\n                星期\r\n            </td>\r\n            <td align=\"center\" style=\"display: none;\">\r\n                年\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"help-inline\" style=\"font-size: 14px;\">\r\n                表达式字段:\r\n            </td>\r\n            <!--<td>-->\r\n            <!--<input type=\"text\" name=\"v_second\" class=\"col\" value=\"*\" readonly=\"readonly\" />-->\r\n            <!--</td>-->\r\n            <td>\r\n                <input type=\"text\" name=\"v_min\" class=\"col\" value=\"*\" readonly=\"readonly\" />\r\n            </td>\r\n            <td>\r\n                <input type=\"text\" name=\"v_hour\" class=\"col\" value=\"*\" readonly=\"readonly\" />\r\n            </td>\r\n            <td>\r\n                <input type=\"text\" name=\"v_day\" class=\"col\" value=\"*\" readonly=\"readonly\" />\r\n            </td>\r\n            <td>\r\n                <input type=\"text\" name=\"v_mouth\" class=\"col\" value=\"*\" readonly=\"readonly\" />\r\n            </td>\r\n            <td>\r\n                <input type=\"text\" name=\"v_week\" class=\"col\" value=\"?\" readonly=\"readonly\" />\r\n            </td>\r\n            <td style=\"display: none;\">\r\n                <input type=\"text\" name=\"v_year\" class=\"col\" readonly=\"readonly\" />\r\n            </td>\r\n        </tr>\r\n        <tr style=\"display: none;\">\r\n            <!--不显示 单必须保留 方便解析表达式 -->\r\n            <td class=\"help-inline\" style=\"font-size: 14px;\" >Cron 表达式:</td>\r\n            <td colspan=\"6\"><input type=\"text\" name=\"cron\" style=\"width: 100%;\" value=\"* * * * * ?\" id=\"cron\"\r\n                    /></td>\r\n            <!--<td><input type=\"button\" value=\"反解析到UI \" id=\"btnFan\" onclick=\"btnFan()\"/></td>-->\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n</form>\r\n</div>\r\n\r\n\r\n<div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n    <button class=\"btn-success\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">确定</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button  class=\"btn-info\" data-dismiss=\"modal\" >取消</button>\r\n</div>\r\n</div>\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n</div>\r\n\r\n<div class=\"box-content\">\r\n    <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n        <thead>\r\n        <tr>\r\n            <th style=\"text-align: center\">计划名\r\n            </th>\r\n            <th style=\"text-align: center\">规则\r\n            </th>\r\n            <th style=\"text-align: center\">时长\r\n            </th>\r\n            ");
  stack1 = helpers['if'].call(depth0, "planOperateRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n        ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        </tbody>\r\n    </table>\r\n    <!--分页控件-->\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n\r\n</div>\r\n\r\n\r\n<!--    指定IPC     -->\r\n\r\n\r\n<div class=\"modal hide\" id=\"addOrRemove\" style=\"top:20%;width:600px;\" data-backdrop='static'>\r\n    <div class=\"modal-header\">\r\n        <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n        <h4>为策略指定IPC——");
  stack1 = helpers._triageMustache.call(depth0, "assignPlan", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\">\r\n\r\n        <div class=\"span5\">\r\n            <label for=\"notAdd\">可添加IPC：</label>\r\n            <select id=\"notAdd\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                ");
  stack1 = helpers.each.call(depth0, "ipc", "in", "outPlanList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </select>\r\n        </div>\r\n        <div class=\"span2\" style=\"margin-left: 0px;\">\r\n            <br><br>\r\n            <br><br>\r\n            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" id=\"addeach\" disabled=\"true\">\r\n                <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                Add >\r\n            </a>\r\n            <br>\r\n            <br>\r\n            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" id=\"removeeach\" disabled=\"true\">\r\n                <!--disabled=\"true\"-->\r\n                <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                Remove <\r\n            </a>\r\n            <br><br>\r\n            <br>\r\n            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" id=\"addall\" disabled=\"true\">\r\n                <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                Add All >>\r\n            </a>\r\n            <br>\r\n            <br>\r\n            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" id=\"removeall\" disabled=\"true\">\r\n                <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                Remove All <<\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"span5\">\r\n            <label for=\"added\">已添加IPC：</label>\r\n            <select id=\"added\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                ");
  stack1 = helpers.each.call(depth0, "ipc", "in", "inPlanList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </select>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n        <button  class=\"btn-success\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pointIpc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">确定</button>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["template/video/realtime"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n                    <li class=\"ajax-link\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("sid")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                        <a href=\"javascript:void(0)\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "playRealVideo", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                            ");
  stack1 = helpers['if'].call(depth0, "is_live", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                        </a>\r\n                    </li>\r\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\r\n                                <i class=\"ipc-online\"></i>\r\n                            ");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n                                <i class=\"ipc-offline\"></i>\r\n                            ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <label class=\"help-inline\" style=\"color: red\">当前预案：</label>");
  stack1 = helpers._triageMustache.call(depth0, "curTour.tour_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\r\n            <label class=\"help-inline\" style=\"color: red\">未选中预案</label>\r\n        ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <option>");
  stack1 = helpers._triageMustache.call(depth0, "ipc.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                    ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <option>");
  stack1 = helpers._triageMustache.call(depth0, "tour.tour_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                    ");
  return buffer;
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\r\n        <hr/>\r\n        <div id=\"yuntai\">\r\n            <p>云台控制</p>\r\n            <label class=\"help-inline\">控制速度：</label>\r\n            <select id=\"sel\" style=\"width: 40%;\">\r\n                <option value=\"10,1\">慢</option>\r\n                <option value=\"65,4\">较慢</option>\r\n                <option value=\"125,7\" selected>中</option>\r\n                <option value=\"185,12\">较快</option>\r\n                <option value=\"245,15\">快</option>\r\n            </select>\r\n            <div style=\"width:232px;padding-left: 5px;\">\r\n                <div style=\"padding-bottom: 5px;\">\r\n                <a href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(66)\" title=\"远焦\">\r\n                    <img src=\"Asserts/img/yuntai/icon_guangquanbig.png\" style=\"width: 30px;height: 30px;\">\r\n                </a>\r\n                <a style=\"padding-left: 3px;padding-right: 3px;\" href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(65)\" title=\"近焦\">\r\n                    <img src=\"Asserts/img/yuntai/icon_guangquansmall.png\" style=\"width: 30px;height: 30px;\">\r\n                </a>\r\n                <a href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(32)\" title=\"缩小\">\r\n                    <img src=\"Asserts/img/yuntai/icon_zoomin.png\" style=\"width: 30px;height: 30px;\">\r\n                </a>\r\n                <a style=\"padding-left: 3px;\" href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(16)\" title=\"放大\">\r\n                    <img src=\"Asserts/img/yuntai/icon_zoomout.png\" style=\"width: 30px;height: 30px;\">\r\n                </a>\r\n                </div>\r\n                <div style=\"padding-bottom: 5px;\">\r\n                    <a href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(10)\" title=\"左上\">\r\n                        <img src=\"Asserts/img/yuntai/icon_leftup.png\" style=\"width: 38px;height: 38px;\">\r\n                    </a>\r\n\r\n                    <a style=\"padding-left: 8px;padding-right: 8px;\" href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(8)\" title=\"上\">\r\n                        <img src=\"Asserts/img/yuntai/icon_up.png\" style=\"width: 38px;height: 38px;\">\r\n                    </a>\r\n\r\n                    <a href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(9)\" title=\"右上\">\r\n                        <img src=\"Asserts/img/yuntai/icon_rightup.png\" style=\"width: 38px;height: 38px;\">\r\n                    </a>\r\n                </div>\r\n\r\n                <!--第二组-->\r\n                <div style=\"padding-bottom: 5px;\">\r\n                    <a href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(2)\" title=\"左\">\r\n                        <img src=\"Asserts/img/yuntai/icon_left.png\" style=\"width: 38px;height: 38px;\">\r\n                    </a>\r\n\r\n\r\n\r\n                        <!--在4张图片中间显示 使用 position  style=\"position: relative; top:-50px; left: 12px;\" -->\r\n                        <a style=\"padding-left: 8px;padding-right: 8px;\"  href=\"javascript:void(0)\"  >\r\n                            <img src=\"Asserts/img/yuntai/icon_yaogan.png\" style=\"width: 38px;height: 38px;\">\r\n                        </a>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                    <a href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(1)\" title=\"右\">\r\n                        <img src=\"Asserts/img/yuntai/icon_right.png\" style=\"width: 38px;height: 38px;\">\r\n                    </a>\r\n                </div>\r\n                <!--下一组-->\r\n                <div style=\"padding-bottom: 5px;\">\r\n                    <a href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(6)\" title=\"左下\">\r\n                        <img src=\"Asserts/img/yuntai/icon_leftdown.png\" style=\"width: 38px;height: 38px;\">\r\n                    </a>\r\n\r\n                    <a style=\"padding-left: 8px;padding-right: 8px;\" href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(4)\" title=\"下\">\r\n                        <img src=\"Asserts/img/yuntai/icon_down.png\" style=\"width: 38px;height: 38px;\">\r\n                    </a>\r\n\r\n                    <a href=\"javascript:void(0)\" onmouseup=\"PTZControl(0)\" onmousedown=\"PTZControl(5)\" title=\"右下\">\r\n                        <img src=\"Asserts/img/yuntai/icon_rightdown.png\" style=\"width: 38px;height: 38px;\">\r\n                    </a>\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n    ");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n<!--左侧资源列表-->\r\n<div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n    <div class=\"row-fluid span10 \">\r\n\r\n        <div class=\"search-div\">\r\n            <div class=\"span9\">\r\n                <!--<label class=\"help-inline width30\">地区</label>-->\r\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchIpcTextField", {hash:{
    'valueBinding': ("search_area"),
    'placeholder': ("输入地区名"),
    'class': ("ipc-resource-search")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                <!--<label class=\"help-inline width30\">摄像头</label>-->\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("输入摄像头名"),
    'class': ("ipc-resource-search"),
    'value': ("search_ipc")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n            <div class=\"span3\">\r\n                <br>\r\n                <br>\r\n                <button class=\"btn btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchIpc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"icon-search\"></i>\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <!--<div style=\"width:120%;height: 500px;overflow: auto; border:1px solid #DEDEDE;\">-->\r\n        <div class=\"ipc-resource-div\">\r\n            <ul class=\"history-ul nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n                ");
  stack1 = helpers.each.call(depth0, "ipcList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <!--onclick=\"PlayRealVideo('44030300001320000402', '44030300001320000402', '测试摄像头402')\"-->\r\n\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--视频框-->\r\n<div id=\"play\" class=\"row-fluid span8\" style=\"padding-top:30px;z-index: -1\">\r\n    <div class=\"nav pull-right\">\r\n        <button class=\"btn\"  onclick=\"SetPlayWndNum(1)\">1分屏</button>\r\n        <button class=\"btn\"  onclick=\"SetPlayWndNum(4)\" >4分屏</button>\r\n        <button class=\"btn\"  onclick=\"SetPlayWndNum(6)\" >6分屏</button>\r\n        <button class=\"btn\"  onclick=\"SetPlayWndNum(7)\" >6分屏</button>\r\n        <button class=\"btn\"  onclick=\"SetPlayWndNum(8)\" >8分屏</button>\r\n        <button class=\"btn\"  onclick=\"SetPlayWndNum(9)\" >9分屏</button>\r\n        <button class=\"btn\"  onclick=\"SetPlayWndNum(0)\" >全屏</button>\r\n    </div>\r\n    <!--cab包打包下载-->\r\n    <object classid=\"clsid:9bd174ee-0794-4c5b-b9e3-7845d6de41fb\" id=\"Ocx\" codebase=\"Client_ocx.cab#version=1,0,0,9\"  >\r\n    </object>\r\n\r\n\r\n\r\n\r\n</div>\r\n<!--控制框-->\r\n<div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n\r\n    <!--<table>-->\r\n    <!--<tr>-->\r\n    <!--分屏：-->\r\n    <!--<br>-->\r\n    <!--</tr>-->\r\n\r\n    <!--<tr>-->\r\n\r\n\r\n    <!--<input type=\"button\" value=\"1分屏\" onclick=\"SetPlayWndNum(1)\" />-->\r\n    <!--<input type=\"button\" value=\"4分屏\" onclick=\"SetPlayWndNum(4)\" />-->\r\n    <!--<input type=\"button\" value=\"6分屏\" onclick=\"SetPlayWndNum(6)\" />-->\r\n    <!--<input type=\"button\" value=\"6分屏\" onclick=\"SetPlayWndNum(7)\" />-->\r\n    <!--<input type=\"button\" value=\"8分屏\" onclick=\"SetPlayWndNum(8)\" />-->\r\n    <!--<input type=\"button\" value=\"9分屏\" onclick=\"SetPlayWndNum(9)\" />-->\r\n    <!--<input type=\"button\" value=\"全屏\" onclick=\"SetPlayWndNum(0)\" />-->\r\n    <!--</tr>-->\r\n    <!--<tr>-->\r\n    <!--<hr/>-->\r\n    <!--</tr>-->\r\n\r\n    <!--</table>-->\r\n    <div class=\"tabbable\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "isSelected_Tour", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        <ul class=\"nav nav-pills\" style=\"margin-bottom: 0px;\">\r\n            <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\" style=\"font-size: 13px;\">轮巡</a></li>\r\n            <li><a href=\"#tab2\" data-toggle=\"tab\" style=\"font-size: 13px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getTourList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">预案</a></li>\r\n        </ul>\r\n\r\n        <div class=\"tab-content\">\r\n            <div class=\"tab-pane active\" id=\"tab1\" style=\"height: 200px;\">\r\n                <input type=\"checkbox\" name=\"is_lunxun\"> <small>是否配置轮巡</small>\r\n                <select id=\"lunxun_selector\" multiple=\"multiple\" style=\"height: 100px;width:80%;\" >\r\n                    ");
  stack1 = helpers.each.call(depth0, "ipc", "in", "ipcTourList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </select>\r\n                <label for=\"interval-time\" class=\"help-inline\">轮巡间隔：</label>\r\n                <select id=\"interval-time\" style=\"width: 40%;\">\r\n                    <option>10</option>\r\n                    <option>30</option>\r\n                    <option>60</option>\r\n                    <option>90</option>\r\n                    <option>120</option>\r\n                </select>\r\n\r\n                <label class=\"help-inline\">秒</label>\r\n                <br>\r\n                <button class=\"btn btn-small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "startTour", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">开始</button>\r\n                <button class=\"btn  btn-small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "endTour", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">结束</button>\r\n                <button class=\"btn  btn-small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveAsTour", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">存为预案</button>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"tab2\" style=\"height: 200px;\">\r\n                <button class=\"btn  btn-small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deSelectTour", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"margin-bottom: 4px;\">取消选中</button>\r\n                <select id=\"yuan_selector\" multiple=\"multiple\" style=\"height: 130px;width:80%;\">\r\n\r\n                    ");
  stack1 = helpers.each.call(depth0, "tour", "in", "tourList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </select>\r\n                <br>\r\n                <button class=\"btn  btn-small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAddTour", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">新建</button>\r\n                <button class=\"btn  btn-small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteTour", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">删除</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    ");
  stack1 = helpers['if'].call(depth0, "ptzRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n<!--      新建预案-->\r\n<div class=\"modal hide\" id=\"addTour\" style=\"top:20%;z-index:9999\" data-backdrop='static'>\r\n    <div class=\"modal-header\">\r\n        <a href=\"#\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeIframe_ActiveX", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">×</a>\r\n        <h4>新建预案</h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" style=\"position: relative;\" >\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >预案名称<i style=\"color:red\">*</i></label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("tour_name"),
    'valueBinding': ("tour_name"),
    'type': ("text")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'type': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'type': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >预案描述</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("tour_descp"),
    'type': ("text")
  },hashTypes:{'value': "ID",'type': "STRING"},hashContexts:{'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validateAddTour", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" >确定</button>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button  class=\"btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeIframe_ActiveX", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["template/system/user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link active\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user", options) : helperMissing.call(depth0, "link-to", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("用户管理");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "usergroup", options) : helperMissing.call(depth0, "link-to", "usergroup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("用户组管理");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "videoLife", options) : helperMissing.call(depth0, "link-to", "videoLife", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("视频生命周期管理");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                <li class=\"ajax-link  \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "area", options) : helperMissing.call(depth0, "link-to", "area", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("区域管理");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                        <option>");
  stack1 = helpers._triageMustache.call(depth0, "group.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                                    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <tr>\r\n                        <td style=\"text-align: center;vertical-align: middle;\">\r\n                            <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("username")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                        </td>\r\n                        <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "tel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "e_mail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "level", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td style=\"text-align: center;vertical-align: middle;\">\r\n                            <a class=\"btn btn-info\" href=\"#\" data-toggle=\"tooltip\" title=\"编辑\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeEdit", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                                <i class=\"icon-edit icon-white\"></i>\r\n                            </a>\r\n                            <a class=\"btn btn-success\" data-toggle=\"tooltip\" title=\"分配权限\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAssign", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                                <i class=\"icon-user icon-white\"></i>\r\n                            </a>\r\n                            <a class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"分配IPC\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAssignIPC", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                                <i class=\"icon-bookmark icon-white\"></i>\r\n                            </a>\r\n\r\n                            <!--<a class=\"btn btn-danger\" data-toggle=\"tooltip\" title=\"删除\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteUser", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-->\r\n                            <!--<i class=\"icon-trash icon-white\"></i>-->\r\n                            <!--</a>-->\r\n                            <!--删除控件-->\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers['delete-confirm'] || (depth0 && depth0['delete-confirm']),options={hash:{
    'title': ("username"),
    'action': ("deleteUser"),
    'param': ("")
  },hashTypes:{'title': "ID",'action': "STRING",'param': "ID"},hashContexts:{'title': depth0,'action': depth0,'param': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "delete-confirm", options))));
  data.buffer.push("\r\n                        </td>\r\n                    </tr>\r\n                ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                    <option>");
  stack1 = helpers._triageMustache.call(depth0, "group.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                                ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <tr>\r\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "auth.descp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    <td>\r\n                        <input type=\"checkbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'checked': ("auth.rule")
  },hashTypes:{'checked': "ID"},hashContexts:{'checked': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("auth.auth_res_id")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"checkbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'checked': ("auth.group_rule")
  },hashTypes:{'checked': "ID"},hashContexts:{'checked': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" disabled>\r\n                    </td>\r\n                </tr>\r\n            ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <option>");
  stack1 = helpers._triageMustache.call(depth0, "ipc.ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n<div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n    <div class=\"row-fluid span12\">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "usersRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "userGroupsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "videoLifeCycleRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "areasRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n    <div class=\"box\">\r\n        <div class=\"input-inline\" style=\"padding-top:18px;\" data-original-title>\r\n            <!--<h2><i class=\"icon-user\"></i> Members</h2>-->\r\n\r\n            <!--<label class=\"help-inline\" for=\"searchUsername\">用户名:  </label>-->\r\n            <!--<input  type=\"text\" id=\"searchUsername\">-->\r\n            <!--<label class=\"help-inline\" for=\"searchName\">姓名:  </label>-->\r\n            <!--<input  type=\"text\" id=\"searchName\">-->\r\n            <!--&nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-success\"><i class=\"icon-search icon-white\"></i> 查询</button>-->\r\n            &nbsp;&nbsp;\r\n            <!--<button class=\"btn btn-info\">新增</button>-->\r\n\r\n            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success\" ><i class=\"icon-plus icon-white\"></i> 新增</a>\r\n            <div class=\"modal hide\" id=\"add\" style=\"top:10%;width: 700px;height: 510px;\"  data-backdrop='static' >\r\n                <div class=\"modal-header\">\r\n                    <a href=\"#\" class=\"close\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">×</a>\r\n                    <h4>新增用户</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\" style=\"width: 650px;height: 365px;margin-left: 50px;\">\r\n                    <div class=\"span3\" style=\"display: none;\">\r\n                        <!--Sidebar content-->\r\n                        <div class=\"well\">\r\n                            <ul class=\"nav nav-pills nav-stacked\">\r\n                                <li class=\"active\" id=\"addInfo_label\" ><a href=\"javascript:void(0);\" ><span >填写基本信息</span></a></li>\r\n                                <li class=\"disabled\"  id=\"addappoint_label\"><a href=\"javascript:void(0);\"><span>指定用户组</span></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <!--box-shadow: 0 0 10px #BDBDBD;-->\r\n                    <div class=\"span11\" style=\"border-radius: 1px;border-style: solid;border-color:transparent;\">\r\n                        <form  id=\"addInfo\" style=\"position: relative;margin: 0 0 40px 0;\">\r\n                            <div class=\"control-group \">\r\n                                <label class=\"control-label help-inline ipcLabel\">用户名<i style=\"color:red\">*</i></label>\r\n                                <div class=\"controls help-inline\">\r\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_username"),
    'placeholder': ("数字,汉字,字母,下划线"),
    'valueBinding': ("newUser.username"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'placeholder': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                                </div>\r\n\r\n                                <label class=\"control-label help-inline ipcLabel\">密码<i style=\"color:red\">*</i></label>\r\n                                <div class=\"controls help-inline\">\r\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'type': ("password"),
    'id': ("add_password"),
    'valueBinding': ("newUser.password"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"control-group \">\r\n                                <label class=\"control-label help-inline ipcLabel\">真实姓名</label>\r\n                                <div class=\"controls help-inline\">\r\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_name"),
    'placeholder': ("数字,汉字,字母,下划线"),
    'valueBinding': ("newUser.name"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'placeholder': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                                </div>\r\n\r\n                                <label class=\"control-label help-inline ipcLabel\">等级</label>\r\n                                <div class=\"controls help-inline\">\r\n                                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newUser.level"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"control-group \">\r\n                                <label class=\"control-label help-inline ipcLabel\">电话</label>\r\n                                <div class=\"controls help-inline\">\r\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_tel"),
    'valueBinding': ("newUser.tel"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                                </div>\r\n\r\n                                <label class=\"control-label help-inline ipcLabel\">邮箱</label>\r\n                                <div class=\"controls help-inline\">\r\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_e_mail"),
    'valueBinding': ("newUser.e_mail"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"control-group \">\r\n                                <label class=\"control-label help-inline ipcLabel\">客户端注册ID</label>\r\n                                <div class=\"controls help-inline\">\r\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_client_id"),
    'valueBinding': ("newUser.client_id"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                                </div>\r\n\r\n                                <label class=\"control-label help-inline ipcLabel\">访问密钥</label>\r\n                                <div class=\"controls help-inline\">\r\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_client_password"),
    'valueBinding': ("newUser.client_password"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"control-group\">\r\n                                <label for=\"add_protocol\" class=\"control-label help-inline ipcLabel\">访问协议</label>\r\n                                <div class=\"controls help-inline\" style=\"width:180px;\">\r\n                                    <select id=\"add_protocol\" class=\"ipcInput\">\r\n                                        <option>RTP_BOSCH</option>\r\n                                        <option>RTP_RFC3984</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"pull-left\" style=\"margin-bottom: 40px; display: none;\">\r\n                                <button  class=\"btn-info\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n\r\n                            </div>\r\n                            <div class=\"pull-right\" style=\"margin-bottom: 40px; display: none;\">\r\n\r\n                                <button class=\"btn-success\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add_next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">下一步</button>\r\n                            </div>\r\n\r\n                        </form>\r\n\r\n\r\n                        <div id=\"addappointUsergroup\" style=\"display:none\">\r\n                            <div class=\"span5\">\r\n                                <label for=\"notAdd_name\">未选中组：</label>\r\n                                <select id=\"notAdd_name\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                                    ");
  stack1 = helpers.each.call(depth0, "group", "in", "notInGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"span2\" style=\"margin-left: 0px;\">\r\n                                <br><br>\r\n                                <br><br>\r\n                                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addeach_name\" disabled=\"true\">\r\n                                    <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                                    Add >\r\n                                </a>\r\n                                <br>\r\n                                <br>\r\n                                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeeach_name\" disabled=\"true\">\r\n                                    <!--disabled=\"true\"-->\r\n                                    <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                                    Remove <\r\n                                </a>\r\n                                <br><br>\r\n                                <br>\r\n                                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAll", "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addall_name\" disabled=\"true\">\r\n                                    <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                                    Add All >>\r\n                                </a>\r\n                                <br>\r\n                                <br>\r\n                                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAll", "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeall_name\" disabled=\"true\">\r\n                                    <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                                    Remove All <<\r\n                                </a>\r\n                            </div>\r\n\r\n                            <div class=\"span5\">\r\n                                <label for=\"added_name\">已选中组：</label>\r\n                                <select id=\"added_name\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                                    ");
  stack1 = helpers.each.call(depth0, "group", "in", "inGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"pull-left\" style=\"margin-bottom: 40px;\">\r\n                                <button  class=\"btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previous", "add", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">后退</button>\r\n\r\n                            </div>\r\n                            <div class=\"pull-right\" style=\"margin-bottom: 40px;\">\r\n\r\n                                <button class=\"btn-success\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">添加</button>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n                    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add_next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" >添加</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button class=\"btn-info\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"box-content\">\r\n            <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n                <thead>\r\n                <tr>\r\n                    <!--<th>id</th>-->\r\n                    <th class=\"width8\" style=\"text-align: center\" >用户名\r\n                        <br>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filter_username"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </th >\r\n\r\n                    <th class=\"width8\" style=\"text-align: center\">真实姓名\r\n                        <br>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filter_name"),
    'class': ("width70")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </th>\r\n                    <th class=\"width8\" style=\"text-align: center\">电话\r\n                        <br>&nbsp;<br>&nbsp;\r\n                    </th>\r\n                    <th class=\"width8\" style=\"text-align: center\">邮箱<br>&nbsp;<br>&nbsp;\r\n                    </th>\r\n                    <th class=\"width3\" style=\"text-align: center\">等级<br>&nbsp;<br>&nbsp;\r\n                    </th>\r\n                    <th class=\"width10\" style=\"text-align: center\">操作<br>&nbsp;<br>&nbsp;</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </tbody>\r\n            </table>\r\n            <!--分页控件-->\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n        </div>\r\n\r\n        <!--      修改用户信息-->\r\n        <div class=\"modal hide\" id=\"edit\" style=\"top:10%;width: 700px;height: 450px;\" data-backdrop='static' >\r\n            <div class=\"modal-header\">\r\n                <a href=\"#\" class=\"close\" data-dismiss=\"modal\" >×</a>\r\n                <h4>修改用户信息</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\" style=\"width: 650px;height: 300px;margin-left: 50px;\">\r\n                <!--<div class=\"span3\"  >-->\r\n                    <!--&lt;!&ndash;Sidebar content&ndash;&gt;-->\r\n                    <!--<div class=\"well\">-->\r\n                        <!--<ul class=\"nav nav-pills nav-stacked\">-->\r\n                            <!--<li class=\"active\" id=\"editInfo_label\" ><a href=\"javascript:void(0);\" ><span >修改基本信息</span></a></li>-->\r\n                            <!--<li class=\"disabled\"  id=\"editappoint_label\"><a href=\"javascript:void(0);\"><span>修改所属用户组</span></a></li>-->\r\n                        <!--</ul>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <!--box-shadow: 0 0 10px #BDBDBD; span9-->\r\n                <div class=\"span12\" style=\"border-radius: 1px;border-style: solid;border-color:transparent;\">\r\n                    <form  id=\"editInfo\" style=\"position: relative;margin: 0 0 40px 0;\">\r\n                        <div class=\"control-group \">\r\n                            <label class=\"control-label help-inline ipcLabel\">用户名<i style=\"color:red\">*</i></label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_username"),
    'valueBinding': ("edit_username"),
    'class': ("ipcInput"),
    'disabled': ("true")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING",'disabled': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0,'disabled': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n\r\n                            <label class=\"control-label help-inline ipcLabel\">真实姓名</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_name"),
    'valueBinding': ("edit_name"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"control-group \">\r\n                            <label class=\"control-label help-inline ipcLabel\">电话</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_tel"),
    'valueBinding': ("edit_tel"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n\r\n                            <label class=\"control-label help-inline ipcLabel\">邮箱</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_e_mail"),
    'valueBinding': ("edit_e_mail"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"control-group \">\r\n                            <label class=\"control-label help-inline ipcLabel\">客户端注册ID</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_client_id"),
    'valueBinding': ("edit_client_id"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n\r\n                            <label class=\"control-label help-inline ipcLabel\">访问密钥</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_client_password"),
    'valueBinding': ("edit_client_password"),
    'class': ("ipcInput")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label help-inline ipcLabel\">等级</label>\r\n                            <div class=\"controls help-inline\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_level"),
    'class': ("ipcInput")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n                            <label for=\"add_protocol\" class=\"control-label help-inline ipcLabel\">访问协议</label>\r\n                            <div class=\"controls help-inline\" style=\"width:180px;\">\r\n                                <select id=\"edit_protocol\" class=\"ipcInput\">\r\n                                    <option>RTP_BOSCH</option>\r\n                                    <option>RTP_RFC3984</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"pull-left\" style=\"margin-bottom: 40px; display: none\">\r\n                            <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n                        </div>\r\n                        <div class=\"pull-right\" style=\"margin-bottom: 40px;display: none\">\r\n\r\n                            <button class=\"btn-success\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit_next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">确定</button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n\r\n                    <div id=\"editappointUsergroup\" style=\"display:none\">\r\n                        <div class=\"span5\">\r\n                            <label for=\"notAdd\">未选中组：</label>\r\n                            <select id=\"notAdd\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                                ");
  stack1 = helpers.each.call(depth0, "group", "in", "notInGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"span2\" style=\"margin-left: 0;\">\r\n                            <br><br>\r\n                            <br><br>\r\n                            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addeach\" disabled=\"true\">\r\n                                <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                                Add >\r\n                            </a>\r\n                            <br>\r\n                            <br>\r\n                            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeeach\" disabled=\"true\">\r\n                                <!--disabled=\"true\"-->\r\n                                <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                                Remove <\r\n                            </a>\r\n                            <br><br>\r\n                            <br>\r\n                            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" id=\"addall\" disabled=\"true\">\r\n                                <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                                Add All >>\r\n                            </a>\r\n                            <br>\r\n                            <br>\r\n                            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" id=\"removeall\" disabled=\"true\">\r\n                                <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                                Remove All <<\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"span5\">\r\n                            <label for=\"added\">已选中组：</label>\r\n                            <select id=\"added\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                                ");
  stack1 = helpers.each.call(depth0, "group", "in", "inGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"pull-left\" style=\"margin-bottom: 40px;\">\r\n                            <button  class=\"btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previous", "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">后退</button>\r\n\r\n                        </div>\r\n                        <div class=\"pull-right\" style=\"margin-bottom: 40px;\">\r\n\r\n                            <button class=\"btn-success\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "EditUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">添加</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n                <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit_next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" >修改</button>\r\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <button class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--    分配权限     -->\r\n\r\n\r\n<div class=\"modal hide\" id=\"assign\" style=\"top:10%;\" data-backdrop='static'>\r\n    <div class=\"modal-header\">\r\n        <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n        <h4>分配权限——");
  stack1 = helpers._triageMustache.call(depth0, "assignUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\">\r\n        <table class=\"table table-striped table-bordered bootstrap-datatable datatable\">\r\n            <thead>\r\n            <tr>\r\n                <th>权限名</th>\r\n                <th>用户权限分配</th>\r\n                <th>用户所属组权限</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            ");
  stack1 = helpers.each.call(depth0, "auth", "in", "authForUserList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </tbody>\r\n        </table>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "assignAuth", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" data-dismiss=\"modal\">修改</button>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!--分配IPC-->\r\n<div class=\"modal hide\" id=\"forIPC\" style=\"top:10%;width:900px;left:40%;\" data-backdrop='static'>\r\n    <div class=\"modal-header\">\r\n        <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n        <h4>分配IPC——");
  stack1 = helpers._triageMustache.call(depth0, "assignUsergroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\" >\r\n\r\n        <div class=\"span3\">\r\n            <label for=\"notAdd_ipcname\">可添加IPC：</label>\r\n            <select id=\"notAdd_ipcname\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                ");
  stack1 = helpers.each.call(depth0, "ipc", "in", "notInGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </select>\r\n        </div>\r\n        <div class=\"span2\" style=\"margin-left: 45px;\">\r\n            <br><br>\r\n            <br><br>\r\n            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", "ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addeach_ipcname\" disabled=\"true\">\r\n                <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                Add >\r\n            </a>\r\n            <br>\r\n            <br>\r\n            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeeach_ipcname\" disabled=\"true\">\r\n                <!--disabled=\"true\"-->\r\n                <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                Remove <\r\n            </a>\r\n            <br><br>\r\n            <br>\r\n            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAll", "ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addall_ipcname\" disabled=\"true\">\r\n                <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                Add All >>\r\n            </a>\r\n            <br>\r\n            <br>\r\n            <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAll", "ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeall_ipcname\" disabled=\"true\">\r\n                <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                Remove All <<\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"span3\" style=\"margin-left: 0;\">\r\n            <label for=\"added_ipcname\">已添加IPC：</label>\r\n            <select id=\"added_ipcname\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                ");
  stack1 = helpers.each.call(depth0, "ipc", "in", "inGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"span3\" style=\"margin-left: 45px;\">\r\n            <label for=\"group_sid\">所属组IPC：</label>\r\n            <!--<textarea style=\"height: 300px;\"></textarea>-->\r\n            <select id=\"group_sid\" multiple=\"multiple\" style=\"height: 300px;\" disabled>\r\n                ");
  stack1 = helpers.each.call(depth0, "ipc", "in", "groupIpcList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </select>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n        <button  class=\"btn-success\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "assignIPC", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">确定</button>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/system/usergroup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user", options) : helperMissing.call(depth0, "link-to", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("用户管理");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link active\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "usergroup", options) : helperMissing.call(depth0, "link-to", "usergroup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("用户组管理");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link \">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "videoLife", options) : helperMissing.call(depth0, "link-to", "videoLife", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("视频生命周期管理");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link  \">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "area", options) : helperMissing.call(depth0, "link-to", "area", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("区域管理");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                        <tr>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            </td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "descp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                            <td style=\"text-align: center;vertical-align: middle;\">\r\n                                <a class=\"btn btn-info\" href=\"#\" data-toggle=\"tooltip\" title=\"编辑\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeEdit", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                                    <i class=\"icon-edit icon-white\"></i>\r\n                                    <!--Edit-->\r\n                                </a>\r\n                                <a class=\"btn btn-success\" data-toggle=\"tooltip\" title=\"分配权限\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAssign", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                                    <i class=\"icon-user icon-white\"></i>\r\n                                    <!--Delete-->\r\n                                </a>\r\n                                <a class=\"btn btn-warning\" data-toggle=\"tooltip\" title=\"添加用户\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAddOrRemove", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                                    <i class=\"icon-plus icon-white\"></i>\r\n                                    <!--Delete-->\r\n                                </a>\r\n                                <a class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"分配IPC\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAssignIPC", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                                    <i class=\"icon-bookmark icon-white\"></i>\r\n                                </a>\r\n\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers['delete-confirm'] || (depth0 && depth0['delete-confirm']),options={hash:{
    'title': ("name"),
    'action': ("deleteUsergroup"),
    'param': ("")
  },hashTypes:{'title': "ID",'action': "STRING",'param': "ID"},hashContexts:{'title': depth0,'action': depth0,'param': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "delete-confirm", options))));
  data.buffer.push("\r\n\r\n\r\n\r\n                            </td>\r\n\r\n                        </tr>\r\n\r\n                    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <tr>\r\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "auth.auth_decp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>\r\n                            <input type=\"checkbox\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'checked': ("auth.rule")
  },hashTypes:{'checked': "ID"},hashContexts:{'checked': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("auth.auth_id")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                        </td>\r\n                    </tr>\r\n                ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                       <option>");
  stack1 = helpers._triageMustache.call(depth0, "groupUser.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                   ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <option>");
  stack1 = helpers._triageMustache.call(depth0, "groupUser.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                    ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <option>");
  stack1 = helpers._triageMustache.call(depth0, "ipc.ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n                ");
  stack1 = helpers['if'].call(depth0, "usersRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "userGroupsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "videoLifeCycleRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "areasRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n        <div class=\"box\">\r\n            <div class=\"input-inline\" style=\"padding-top:18px;\" data-original-title>\r\n                &nbsp;&nbsp;\r\n            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAddUsergroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success\" ><i class=\"icon-plus icon-white\"></i>新增</a>\r\n            <div class=\"modal hide\" id=\"add\" style=\"top:20%;\" data-backdrop='static' >\r\n                <div class=\"modal-header\">\r\n                    <a href=\"#\" class=\"close\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">×</a>\r\n                    <h4>新增用户组</h4>\r\n                </div>\r\n\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-horizontal\" style=\"position: relative;\">\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label\" >用户组名<i style=\"color:red\">*</i></label>\r\n                            <div class=\"controls\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_name"),
    'placeholder': ("数字,汉字,字母,下划线"),
    'valueBinding': ("newUsergroup.name")
  },hashTypes:{'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label\" >描述</label>\r\n                            <div class=\"controls\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newUsergroup.descp")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label\" >父组</label>\r\n                            <div class=\"controls\">\r\n\r\n                                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'viewName': ("select"),
    'contentBinding': ("childgroups"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content.id"),
    'selectionBinding': ("selectedGroup")
  },hashTypes:{'viewName': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionBinding': "STRING"},hashContexts:{'viewName': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n\r\n                <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n                    <button class=\"btn-success\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validateForAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">新增</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button  class=\"btn-info\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"box-content\">\r\n                <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n                    <thead>\r\n                    <tr>\r\n\r\n                        <th class=\"width8\" style=\"text-align: center\" >名称\r\n                            <br>\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filter_groupName"),
    'class': ("width30")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        </th >\r\n\r\n                        <th class=\"width8\" style=\"text-align: center\">描述\r\n                            <br>&nbsp;<br>&nbsp;\r\n                        </th>\r\n                        <th class=\"width8\" style=\"text-align: center\">操作\r\n                            <br>&nbsp;<br>&nbsp;\r\n                        </th>\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n                    </tbody>\r\n                </table>\r\n            <!--分页控件-->\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n        </div>\r\n\r\n\r\n            <!--      修改用户组信息-->\r\n            <div class=\"modal hide\" id=\"edit\" style=\"top:20%;\" data-backdrop='static'>\r\n                <div class=\"modal-header\">\r\n                    <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n                    <h4>修改用户组</h4>\r\n                </div>\r\n\r\n\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-horizontal\" >\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label\" >用户组名</label>\r\n                            <div class=\"controls\">\r\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("edit_name"),
    'valueBinding': ("edit_name")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"control-group\">\r\n                            <label class=\"control-label\" >描述</label>\r\n                            <div class=\"controls\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_descp")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </form>\r\n                </div>\r\n\r\n                <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n                    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validateForEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" >修改</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--    分配权限     -->\r\n\r\n\r\n    <div class=\"modal hide\" id=\"assign\" style=\"top:10%;\" data-backdrop='static'>\r\n        <div class=\"modal-header\">\r\n            <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n            <h4>分配权限——");
  stack1 = helpers._triageMustache.call(depth0, "assignUsergroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n        </div>\r\n\r\n\r\n        <div class=\"modal-body\">\r\n            <table class=\"table table-striped table-bordered bootstrap-datatable datatable\">\r\n                <thead>\r\n                <tr>\r\n                    <th>权限名</th>\r\n                    <th>是否分配</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                ");
  stack1 = helpers.each.call(depth0, "auth", "in", "authForGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </tbody>\r\n            </table>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "assignAuth", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" data-dismiss=\"modal\">修改</button>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!--    添加组内用户     -->\r\n\r\n\r\n    <div class=\"modal hide\" id=\"addOrRemove\" style=\"top:10%;width:600px;\" data-backdrop='static'>\r\n        <div class=\"modal-header\">\r\n            <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n            <h4>添加或删除组内用户——");
  stack1 = helpers._triageMustache.call(depth0, "assignUsergroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n        </div>\r\n\r\n\r\n        <div class=\"modal-body\">\r\n\r\n            <div class=\"span5\">\r\n                <label for=\"notAdd_username\">可添加用户：</label>\r\n                <select id=\"notAdd_username\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                   ");
  stack1 = helpers.each.call(depth0, "groupUser", "in", "notInGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </select>\r\n            </div>\r\n            <div class=\"span2\" style=\"margin-left: 0px;\">\r\n                <br><br>\r\n                <br><br>\r\n                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addeach_username\" disabled=\"true\">\r\n                    <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                     Add >\r\n                </a>\r\n                <br>\r\n                <br>\r\n                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeeach_username\" disabled=\"true\">\r\n                    <!--disabled=\"true\"-->\r\n                    <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                    Remove <\r\n                </a>\r\n                <br><br>\r\n                <br>\r\n                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAll", "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addall_username\" disabled=\"true\">\r\n                    <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                    Add All >>\r\n                </a>\r\n                <br>\r\n                <br>\r\n                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAll", "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeall_username\" disabled=\"true\">\r\n                    <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                    Remove All <<\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"span5\">\r\n                <label for=\"added_username\">已添加用户：</label>\r\n                <select id=\"added_username\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                    ");
  stack1 = helpers.each.call(depth0, "groupUser", "in", "inGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </select>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n            <button  class=\"btn-success\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateGroupUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">确定</button>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!--    添加组内IPC     -->\r\n\r\n\r\n    <div class=\"modal hide\" id=\"forIPC\" style=\"top:10%;width:600px;\" data-backdrop='static'>\r\n        <div class=\"modal-header\">\r\n            <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n            <h4>添加或删除组内IPC——");
  stack1 = helpers._triageMustache.call(depth0, "assignUsergroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n        </div>\r\n\r\n\r\n        <div class=\"modal-body\">\r\n\r\n            <div class=\"span5\">\r\n                <label for=\"notAdd_ipcname\">可添加IPC：</label>\r\n                <select id=\"notAdd_ipcname\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                    ");
  stack1 = helpers.each.call(depth0, "ipc", "in", "notInGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </select>\r\n            </div>\r\n            <div class=\"span2\" style=\"margin-left: 0px;\">\r\n                <br><br>\r\n                <br><br>\r\n                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", "ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addeach_ipcname\" disabled=\"true\">\r\n                    <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                    Add >\r\n                </a>\r\n                <br>\r\n                <br>\r\n                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeeach_ipcname\" disabled=\"true\">\r\n                    <!--disabled=\"true\"-->\r\n                    <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                    Remove <\r\n                </a>\r\n                <br><br>\r\n                <br>\r\n                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addAll", "ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"addall_ipcname\" disabled=\"true\">\r\n                    <!--<i class=\"icon-plus icon-white\"></i>-->\r\n                    Add All >>\r\n                </a>\r\n                <br>\r\n                <br>\r\n                <a class=\"btn  btn-mini\" href=\"#\" style=\"width: 80px;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeAll", "ipcname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" id=\"removeall_ipcname\" disabled=\"true\">\r\n                    <!--<i class=\"icon-remove icon-white\"></i>-->\r\n                    Remove All <<\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"span5\">\r\n                <label for=\"added_ipcname\">已添加IPC：</label>\r\n                <select id=\"added_ipcname\" multiple=\"multiple\" style=\"height: 300px;\">\r\n                    ");
  stack1 = helpers.each.call(depth0, "ipc", "in", "inGroupList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </select>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n            <button  class=\"btn-success\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "assignIPC", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">确定</button>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/system/videoLifeCycle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user", options) : helperMissing.call(depth0, "link-to", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("用户管理");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "usergroup", options) : helperMissing.call(depth0, "link-to", "usergroup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("用户组管理");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link  active\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "videoLife", options) : helperMissing.call(depth0, "link-to", "videoLife", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("视频生命周期管理");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <li class=\"ajax-link  \">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "area", options) : helperMissing.call(depth0, "link-to", "area", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    </li>\r\n                ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("区域管理");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <div class=\"control-group \">\r\n                        <label class=\"control-label help-inline ipcLabel\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\r\n                        <div class=\"controls help-inline input-append\">\r\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("id"),
    'valueBinding': ("configvalue")
  },hashTypes:{'id': "ID",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                            <span class=\"add-on\">天</span>\r\n                        </div>\r\n                    </div>\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span12\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n                ");
  stack1 = helpers['if'].call(depth0, "usersRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "userGroupsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "videoLifeCycleRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "areasRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\">\r\n        <div class=\"box\">\r\n            <form style=\"position: relative;text-align:center;margin-top: 40px;\">\r\n                ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <div >\r\n                    <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n                    <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">保存</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/system/area"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user", options) : helperMissing.call(depth0, "link-to", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n             ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("用户管理");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "usergroup", options) : helperMissing.call(depth0, "link-to", "usergroup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("用户组管理");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "videoLife", options) : helperMissing.call(depth0, "link-to", "videoLife", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("视频生命周期管理");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"ajax-link active \">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "area", options) : helperMissing.call(depth0, "link-to", "area", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n            ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("区域管理");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <tr>\r\n                <td style=\"text-align: center;vertical-align: middle;\">\r\n                    <a href=\"#\" data-toggle=\"tooltip\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                </td>\r\n                <td style=\"text-align: center;vertical-align: middle;\">");
  stack1 = helpers._triageMustache.call(depth0, "descp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n\r\n                <td style=\"text-align: center;vertical-align: middle;\">\r\n                    <!--<a class=\"btn btn-success\" href=\"#\" data-toggle=\"tooltip\" title=\"查看\">-->\r\n                    <!--<i class=\"icon-zoom-in icon-white\"></i>-->\r\n                    <!--View-->\r\n                    <!--</a>-->\r\n                    <a class=\"btn btn-info\" href=\"#\" data-toggle=\"tooltip\" title=\"编辑\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeEdit", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n                        <i class=\"icon-edit icon-white\"></i>\r\n                        <!--Edit-->\r\n                    </a>\r\n\r\n\r\n                    <!--<a class=\"btn btn-danger\" data-toggle=\"tooltip\" title=\"删除\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteArea", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-->\r\n                        <!--<i class=\"icon-trash icon-white\"></i>-->\r\n                        <!--&lt;!&ndash;Delete&ndash;&gt;-->\r\n                    <!--</a>-->\r\n\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['delete-confirm'] || (depth0 && depth0['delete-confirm']),options={hash:{
    'title': ("name"),
    'action': ("deleteArea"),
    'param': ("")
  },hashTypes:{'title': "ID",'action': "STRING",'param': "ID"},hashContexts:{'title': depth0,'action': depth0,'param': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "delete-confirm", options))));
  data.buffer.push("\r\n\r\n\r\n\r\n                </td>\r\n            </tr>\r\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n<div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n    <div class=\"row-fluid\">\r\n        <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n            ");
  stack1 = helpers['if'].call(depth0, "usersRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "userGroupsRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "videoLifeCycleRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "areasRule", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row-fluid span10\" style=\"padding-top:20px;\" >\r\n<div class=\"box\">\r\n<div class=\"input-inline\" style=\"padding-top:18px;\" data-original-title>\r\n    <!--<h2><i class=\"icon-user\"></i> Members</h2>-->\r\n\r\n    &nbsp;&nbsp;\r\n    <a href=\"#add\" data-toggle=\"modal\" class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "beforeAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"icon-plus icon-white\"></i> 新增</a>\r\n    <div class=\"modal hide\" id=\"add\" style=\"top:20%;\" data-backdrop='static' >\r\n        <div class=\"modal-header\">\r\n            <a href=\"#\" class=\"close\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">×</a>\r\n            <h4>新增</h4>\r\n        </div>\r\n\r\n        <div class=\"modal-body\">\r\n            <form class=\"form-horizontal\" style=\"position: relative;\">\r\n                <div class=\"control-group\">\r\n                    <label class=\"control-label\" >区域名<i style=\"color:red\">*</i></label>\r\n                    <div class=\"controls\">\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ValidataionTextField", {hash:{
    'id': ("add_name_view"),
    'valueBinding': ("newArea.name")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n                <div class=\"control-group\">\r\n                    <label for=\"add_p_name\" class=\"control-label\">父级区域</label>\r\n                    <div class=\"controls\">\r\n\r\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'viewName': ("select"),
    'contentBinding': ("areaList"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content.id"),
    'selectionBinding': ("selectedArea")
  },hashTypes:{'viewName': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionBinding': "STRING"},hashContexts:{'viewName': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"control-group\">\r\n                    <label class=\"control-label\" >描述</label>\r\n                    <div class=\"controls\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newArea.descp")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n            <button class=\"btn-success\"  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">新增</button>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button  class=\"btn-info\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAdd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">取消</button>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"box-content\">\r\n    <table class=\"table table-striped table-bordered bootstrap-datatable datatable table-hover table-condensed\">\r\n        <thead>\r\n        <tr>\r\n            <th style=\"text-align: center;\" class='width30'>区域名\r\n                <br>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("filter_name"),
    'class': ("width30")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </th>\r\n\r\n            <th style=\"text-align: center;\" class='width30'>描述\r\n                <br>&nbsp;<br>&nbsp;\r\n            </th>\r\n\r\n            <th style=\"text-align: center;\" class='width30'>操作\r\n                <br>&nbsp;<br>&nbsp;\r\n            </th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n\r\n        ");
  stack1 = helpers.each.call(depth0, "paginatedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        </tbody>\r\n    </table>\r\n    <!--分页控件-->\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['page-number'] || (depth0 && depth0['page-number']),options={hash:{
    'totalPages': ("totalPages"),
    'count': ("count"),
    'page': ("page"),
    'currentTotalCounts': ("currentTotalCounts"),
    'perPage': ("perPage"),
    'selectPage': ("selectPage"),
    'loadMore': ("loadMore")
  },hashTypes:{'totalPages': "ID",'count': "ID",'page': "ID",'currentTotalCounts': "ID",'perPage': "ID",'selectPage': "STRING",'loadMore': "STRING"},hashContexts:{'totalPages': depth0,'count': depth0,'page': depth0,'currentTotalCounts': depth0,'perPage': depth0,'selectPage': depth0,'loadMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "page-number", options))));
  data.buffer.push("\r\n\r\n</div>\r\n\r\n<!--      修改用户信息-->\r\n<div class=\"modal hide\" id=\"edit\" style=\"top:20%;\" data-backdrop='static'>\r\n    <div class=\"modal-header\">\r\n        <a href=\"#\" class=\"close\" data-dismiss=\"modal\">×</a>\r\n        <h4>修改</h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" >\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >区域名</label>\r\n                <div class=\"controls\">\r\n\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_name"),
    'disabled': ("true")
  },hashTypes:{'type': "STRING",'value': "ID",'disabled': "STRING"},hashContexts:{'type': depth0,'value': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"control-group\">\r\n                <label for=\"edit_p_name\" class=\"control-label\">父级区域</label>\r\n                <div class=\"controls\">\r\n\r\n\r\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'viewName': ("select"),
    'contentBinding': ("areaList"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content.id"),
    'selectionBinding': ("selectedArea")
  },hashTypes:{'viewName': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionBinding': "STRING"},hashContexts:{'viewName': depth0,'contentBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'selectionBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"control-group\">\r\n                <label class=\"control-label\" >描述</label>\r\n                <div class=\"controls\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("edit_descp")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"form-actions modal-footer\" style=\"text-align: center;\">\r\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editArea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn-success\" data-dismiss=\"modal\">修改</button>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button  class=\"btn-info\" data-dismiss=\"modal\">取消</button>\r\n\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/statistics/imgStatistics"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("维度1");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("维度2");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("维度3");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span11 offset1\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n                <li class=\"ajax-link active \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "imgStatistics", options) : helperMissing.call(depth0, "link-to", "imgStatistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "statistics", options) : helperMissing.call(depth0, "link-to", "statistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "serviceStatistics", options) : helperMissing.call(depth0, "link-to", "serviceStatistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n<div class=\"row-fluid span10\" style=\"padding-top:20px;\">\r\n\r\n    <div class=\"box span12\">\r\n        <div class=\"box-header well\" data-original-title>\r\n            <div class=\"box-icon\">\r\n                <a href=\"#\" class=\"btn btn-setting btn-round\"><i class=\"icon-cog\"></i></a>\r\n                <a href=\"#\" class=\"btn btn-minimize btn-round\"><i class=\"icon-chevron-up\"></i></a>\r\n                <a href=\"#\" class=\"btn btn-close btn-round\"><i class=\"icon-remove\"></i></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"box-content\">\r\n\r\n            <div id=\"line\" style=\"height: 250px;width: 340px;\" class=\"span4\"></div>\r\n            <div id=\"bar\" style=\"height: 250px;width: 340px;\" class=\"span4\"></div>\r\n            <div id=\"pie\" style=\"height: 250px;width: 340px;\" class=\"span4\"></div>\r\n\r\n        </div>\r\n     </div>\r\n\r\n</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["template/statistics/onlineStatus"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("维度1");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("维度2");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("维度3");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span11 offset1\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n                <li class=\"ajax-link  \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "imgStatistics", options) : helperMissing.call(depth0, "link-to", "imgStatistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link active\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "statistics", options) : helperMissing.call(depth0, "link-to", "statistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "serviceStatistics", options) : helperMissing.call(depth0, "link-to", "serviceStatistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\">\r\n    <div class=\"box\">\r\n    <!--<div class=\"box-header well\" data-original-title>-->\r\n        <!--<h2><i class=\"icon-user\"></i> Members</h2>-->\r\n        <!--<div class=\"box-icon\">-->\r\n            <!--<a href=\"#\" class=\"btn btn-setting btn-round\"><i class=\"icon-cog\"></i></a>-->\r\n            <!--<a href=\"#\" class=\"btn btn-minimize btn-round\"><i class=\"icon-chevron-up\"></i></a>-->\r\n            <!--<a href=\"#\" class=\"btn btn-close btn-round\"><i class=\"icon-remove\"></i></a>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n    <div class=\"input-inline\" style=\"padding-top:20px;\" data-original-title>\r\n        <!--<h2><i class=\"icon-user\"></i> Members</h2>-->\r\n\r\n        <label class=\"help-inline\">开始时间:  </label>\r\n        <input class=\"starttime\" type=\"text\"     data-date-format=\" yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n        <label class=\"help-inline\">结束时间:  </label>\r\n        <input class=\"endtime\" type=\"text\"     data-date-format=\"yyyy-mm-dd hh:ii\"  data-date-viewMode=\"1\" data-date-minViewMode=\"0\"  data-date-weekStart=\"1\">\r\n        &nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-success\"><i class=\"icon-search icon-white\"></i> 查询</button>\r\n\r\n\r\n        <!--<div class=\"box-icon\">-->\r\n        <!--<a href=\"#\" class=\"btn btn-setting btn-round\"><i class=\"icon-cog\"></i></a>-->\r\n        <!--<a href=\"#\" class=\"btn btn-minimize btn-round\"><i class=\"icon-chevron-up\"></i></a>-->\r\n        <!--<a href=\"#\" class=\"btn btn-close btn-round\"><i class=\"icon-remove\"></i></a>-->\r\n        <!--</div>-->\r\n    </div>\r\n    <div class=\"box-content\">\r\n    <table class=\"table table-striped table-bordered bootstrap-datatable datatable\">\r\n    <thead>\r\n    <tr>\r\n        <th>Username</th>\r\n        <th>Date registered</th>\r\n        <th>Role</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td>David R</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Chris Jack</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Jack Chris</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Muhammad Usman</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sheikh Heera</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Helen Garner</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Saruar Ahmed</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Ahemd Saruar</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Habib Rizwan</td>\r\n        <td class=\"center\">2012/01/21</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Rizwan Habib</td>\r\n        <td class=\"center\">2012/01/21</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Amrin Sana</td>\r\n        <td class=\"center\">2012/08/23</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sana Amrin</td>\r\n        <td class=\"center\">2012/08/23</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Ifrah Jannat</td>\r\n        <td class=\"center\">2012/06/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Jannat Ifrah</td>\r\n        <td class=\"center\">2012/06/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Robert</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Dave Robert</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Brown Robert</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Usman Muhammad</td>\r\n        <td class=\"center\">2012/01/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Abdullah</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Dow John</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>John R</td>\r\n        <td class=\"center\">2012/02/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Paul Wilson</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Wilson Paul</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Heera Sheikh</td>\r\n        <td class=\"center\">2012/01/21</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sheikh Heera</td>\r\n        <td class=\"center\">2012/01/21</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-success\">Active</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Christopher</td>\r\n        <td class=\"center\">2012/08/23</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Andro Christopher</td>\r\n        <td class=\"center\">2012/08/23</td>\r\n        <td class=\"center\">Staff</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-important\">Banned</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Jhon Doe</td>\r\n        <td class=\"center\">2012/06/01</td>\r\n        <td class=\"center\">Admin</td>\r\n        <td class=\"center\">\r\n            <span class=\"label\">Inactive</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Lorem Ipsum</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Abraham</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Brown Blue</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Worth Name</td>\r\n        <td class=\"center\">2012/03/01</td>\r\n        <td class=\"center\">Member</td>\r\n        <td class=\"center\">\r\n            <span class=\"label label-warning\">Pending</span>\r\n        </td>\r\n        <td class=\"center\">\r\n            <a class=\"btn btn-success\" href=\"#\">\r\n                <i class=\"icon-zoom-in icon-white\"></i>\r\n                View\r\n            </a>\r\n            <a class=\"btn btn-info\" href=\"#\">\r\n                <i class=\"icon-edit icon-white\"></i>\r\n                Edit\r\n            </a>\r\n            <a class=\"btn btn-danger\" href=\"#\">\r\n                <i class=\"icon-trash icon-white\"></i>\r\n                Delete\r\n            </a>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n    </table>\r\n    </div>\r\n    </div><!--/span-->\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["template/statistics/serviceStatistics"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("维度1");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("维度2");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("维度3");
  }

  data.buffer.push("<div class=\"padding-zero container-fluid\">\r\n    <div class=\"row-fluid span2 \" style=\"padding-top:30px;\">\r\n        <div class=\"row-fluid span11 offset1\">\r\n            <ul class=\"nav nav-tabs nav-stacked sidebar-nav main-menu\">\r\n\r\n                <li class=\"ajax-link  \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "imgStatistics", options) : helperMissing.call(depth0, "link-to", "imgStatistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link \">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "statistics", options) : helperMissing.call(depth0, "link-to", "statistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"ajax-link active\">\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "serviceStatistics", options) : helperMissing.call(depth0, "link-to", "serviceStatistics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row-fluid span10\" style=\"padding-top:20px;\">\r\n    </div>\r\n</div>");
  return buffer;
  
});