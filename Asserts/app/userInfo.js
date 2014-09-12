App.UserinfoRoute = Ember.Route.extend({
   templateName: 'template/userInfo',
   model:function(){
       //model 返回一个对象的 2部曲

       var url = '/gcks.video/api/v1/user/users/'+$.cookie('username');
       var me = this;
       return getJSON(url).then(function(value){
           var user = App.User.create(); // ① 将变量初始化为对象
//                user= App.User.create({
//                   username: value.userName,
//                   password: value.password,
//                   name: value.name,
//                   tel: value.tel,
//                   e_mail: value.e_mail,
//                   level: value.level
//               });
           //② 同学set操作给对象赋值， 如果给对象再create是行不通的
           user.set('username',value.userName);
           user.set('password',value.password);
           user.set('name',value.name);
           user.set('tel',value.tel);
           user.set('e_mail',value.e_mail);
           user.set('level',value.level);
           return user;
       },function(errorStatus){
           if (errorStatus == 401)
               me.transitionTo('login');
           else
               me.transitionTo('errorpage');
       });



   }

});
App.UserinfoView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $('#userinfo').addClass('active');
    }
});
App.UserinfoController = Ember.ObjectController.extend({
//这些属性不定义的话，模板会去model中找，会造成界面模板数据更改 model中的对象也改变,不是我们所期望的，所以在一次定义， 模板寻值：--》控制器--》路由中的model

    username:(function() {
        return this.get('model.username');
    }).property('model.username'),

    name:(function() {
        return this.get('model.name');
    }).property('model.name'),
    tel:(function() {
        return this.get('model.tel');
    }).property('model.tel'),
    e_mail:(function() {
        return this.get('model.e_mail');
    }).property('model.e_mail'),
    newPassword:'',
    rePassword:'',
    actions:{
        beforeSave:function(){
            $('#pwdError').hide();
            $('#repwdError').hide();
            $('#emailError').hide();
            $('#telError').hide();
            var password = this.get('oldpassword');
            var newPassword = this.get('newPassword');
            var rePassword = this.get('rePassword');
            var pwdRight = (password == this.get('model.password'));
            var rePwdRight = (newPassword == rePassword);
//密码修改的验证
            if(!pwdRight)
                $('#pwdError').show();
            if(!rePwdRight)
            {
                $('#repwdError').html('两次密码输入不一致');

                $('#repwdError').show();
            }

            if(newPassword.length< 1 && rePassword.length<1 )
            {
                $('#repwdError').html('密码不能为空');
                $('#repwdError').show();
            }
//邮箱格式验证
            var e_mail = this.get('e_mail');
            var mailReg =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            var emailRight = mailReg.test(e_mail);
            if(!emailRight){
                $('#emailError').show();

            }
            //手机号验证
//国内的手机号码，第一位都是1，第二位是3到8的数字，一共有11位。按照这个规则，我们得到相应的正则表达式就是：1[3-8]+\d{9}
            var tel = this.get('tel');
            var telReg = /^1[3-8]+\d{9}$/;
            var telRight = telReg.test(tel);
            if(!telRight)
                $('#telError').show();

            if( pwdRight && rePwdRight && newPassword && emailRight)
                this.send('save');


        },
        save:function(){
            var url = "/gcks.video/api/v1/user/users";
            var name = this.get('name');
            var password = this.get('newpassword');
            var tel = this.get('tel');
            var e_mail = this.get('e_mail');
            var level = this.get('model.level');

            var data = JSON.stringify({
                "user": {
                    "userName": this.get('username'),
                    "password": password,
                    "name": name,
                    "tel": tel,
                    "e_mail": e_mail,
                    "level": level
                }
            });
            var me = this;
            putJSON(url,data).then(function(json){
                if(json){
                    var user = me.get('model');
                    user.set('password', password);
                    user.set('name', name);
                    user.set('tel', tel);
                    user.set('e_mail', e_mail);
                    user.set('level', level);
                    alert('更新成功');

                }
                else
                    alert('更新失败');

            },function(errorStatus){
                if (errorStatus == 401)
                    me.transitionToRoute('login');
                else
                    me.transitionToRoute('errorpage');
            });
            $('#pwdError').hide();
            $('#repwdError').hide();
        },
        cancel:function(){
            this.set('name',this.get('model.name'));
            this.set('oldpassword','');
            this.set('newPassword','');
            this.set('rePassword','');
            this.set('email',this.get('model.e_mail'));
            $('#pwdError').hide();
            $('#repwdError').hide();
            $('#emailError').hide();
            $('#telError').hide();

        }
    }
});