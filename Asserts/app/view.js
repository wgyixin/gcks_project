//输入框验证

App.ValidataionTextField=Ember.TextField.extend({
    tooltipDiv:null,
    addTooltip: function(message) {
        var pos = this.$().position();//.offset();//
        var tooltipDiv = $('<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+
                          message+'</div></div>');
        tooltipDiv.addClass("fade top in");
        tooltipDiv.css({
            top: pos.top-40,
            left: pos.left})
            .insertAfter(this.$())
            .show();
        this.set('tooltipDiv',tooltipDiv);
        this.$().focus();
    },
    removeTooltip:function(){
        this.get('tooltipDiv').remove();
    },
    //失去焦点
    focusOut:function(evt){
//      alert('qqq');
//        this.get('controller').send('test');  传递不了
//        this.get("targetObject").send('validateForfocusOutOrkeyDown',evt.currentTarget.id);
    },
    //按键
    keyDown:function(evt){
//        alert('down')
//        this.get("targetObject").send('validateForfocusOutOrkeyDown',evt.currentTarget.id);
    }
});


//搜索 获得ipc资源的  自动补全  输入框

App.SearchIpcTextField = Ember.TextField.extend({
    dataArray:[],
    didInsertElement:function(){

        var url = "/gcks.video/api/v1/search/areas";
        var me = this;
        var element = this.$();

        getJSON(url).then(function(data){
            me.get('dataArray').clear();
            element.bigAutocomplete(data);
            $(data.data).each(function(index,value){
               me.get('dataArray').pushObject(value.title);
            });
        },function(errorStatus){
            if (errorStatus == 401)
                me.transitionTo('login');
            else
                me.transitionTo('errorpage');
        });
//        this.set('data',{data:[{title:"book"},{title:"blue"},{title:"fool"},{title:"bus"}]});
//        this.$().bigAutocomplete(this.get('data'));
    },
    //失去焦点
    focusOut:function(evt){
        //若输入的城市 不在 系统记录内，则 设置为空
        if( !this.get('dataArray').contains(evt.currentTarget.value) ){
            evt.currentTarget.value = '';

            this.get('targetObject').set('search_area',evt.currentTarget.value);
        }


    },
    willDestroyElement:function(){
        this.get('dataArray').clear();
    }

});