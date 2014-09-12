//获得
function getJSON(url){
    return new Ember.RSVP.Promise(function(resolve,reject){
        Ember.$.ajax({
            type: 'GET',
            url: url,
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            context: this,
            cache: false,
            async: true,
            success: function(data, textStatus) {
                console.log("Data::: " + JSON.stringify(data));
                //请求成功  均是  只能有一个参数
                resolve(data);

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('error status:' + XMLHttpRequest.status + ' readyState:' + XMLHttpRequest.readyState + ' textStatus:' + textStatus);
               //请求失败 均是  只能有一个参数

//                reject(new Error("getJSON: `" + url + "` failed with status: [" + XMLHttpRequest.status  + "]"),XMLHttpRequest.status);
                reject(XMLHttpRequest.status)
            }
        });
    });
}
//创建
function postJSON(url,data){
    return new Ember.RSVP.Promise(function(resolve,reject){
        Ember.$.ajax({
            type: 'POST',
            url: url,
            data: data,
            context: this,
            cache: false,
            async: true,
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function(data, textStatus) {
                console.log("Data::: " + JSON.stringify(data));
                resolve(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('error status:' + XMLHttpRequest.status + ' readyState:' + XMLHttpRequest.readyState + ' textStatus:' + textStatus);
                reject(XMLHttpRequest.status);
            }
        });
    });
}
//删除
function deleteJSON(url){
    return new Ember.RSVP.Promise(function(resolve,reject){
        Ember.$.ajax({
            type: 'DELETE',
            url: url,
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            context: this,
            cache: false,
            async: true,
            success: function(data, textStatus) {
                console.log("Data::: " + JSON.stringify(data));
               resolve(data);

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('error status:' + XMLHttpRequest.status + ' readyState:' + XMLHttpRequest.readyState + ' textStatus:' + textStatus);
                reject(XMLHttpRequest.status);
            }
        });

    });
}
//修改
function putJSON(url,data){
    return new Ember.RSVP.Promise(function(resolve,reject){
        Ember.$.ajax({
            type: 'PUT',
            url: url,
            data: data,

            context: this,
            cache: false,
            async: true,
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function(data, textStatus) {
                console.log("Data::: " + JSON.stringify(data));
                resolve(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('error status:' + XMLHttpRequest.status + ' readyState:' + XMLHttpRequest.readyState + ' textStatus:' + textStatus);
                reject(XMLHttpRequest.status);
            }
        });
    });
}