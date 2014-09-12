
function elementAction(){
    $('a[href="#"][data-top!=true]').click(function(e){
        e.preventDefault();
    });
    $('.btn-minimize').click(function(e){
        e.preventDefault();
        var $target = $(this).parent().parent().next('.box-content');
        if($target.is(':visible')) $('i',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
        else 					   $('i',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
        $target.slideToggle();
    });
    $('.btn-close').click(function(e){
        e.preventDefault();
        $(this).parent().parent().parent().fadeOut();
    });


    //左侧菜单   怎么这样的click事件对ipc选择无效呢
    $('li.ajax-link').click(function(e){
        if( $(this).hasClass('active')) return;
        e.preventDefault();
        var $clink=$(this);
        $('ul.main-menu li.active').removeClass('active');
        $clink.addClass('active');
    });


    // 导航条
    $('li.main-link').click(function(e){
        if( $(this).hasClass('active')) return;
        e.preventDefault();
        var $clink=$(this);
        $('ul.nav-top li.active').removeClass('active');
        $clink.addClass('active');
    });


    //realtime  search show or fade

    $('#showSearch').click(function(e){
        e.preventDefault();
        console.log("click");
        $('#showSearch').hide();
        //slideToggle();
        $('#searchField').show();
    });
    $('#fadeSearch').click(function(e){
        e.preventDefault();
//        $(this).parent().parent().animate( { width: 0,height:0}, 1000 );
        $('#showSearch').show();
       $('#searchField').hide();
    });

}


//easyui   录制计划

/**
 * 每周期
 */
function everyTime(dom) {
    var item = $("input[name=v_" + dom.name + "]");
    item.val("");
    item.change();
}

/**
 * 不指定
 */
function unAppoint(dom) {
    var name = dom.name;
    var val = "?";
    if (name == "year")
        val = "";
    var item = $("input[name=v_" + name + "]");
    item.val(val);
    item.change();
}

function appoint(dom) {

}

/**
 * 周期
 */
function cycle(dom) {
    var name = dom.name;
    var ns = $(dom).parent().find(".numberspinner");
    var start = ns.eq(0).numberspinner("getValue");
    var end = ns.eq(1).numberspinner("getValue");
    var item = $("input[name=v_" + name + "]");
    item.val(start + "-" + end);
    item.change();
}

/**
 * 从开始
 */
function startOn(dom) {
    var name = dom.name;
    var ns = $(dom).parent().find(".numberspinner");
    var start = ns.eq(0).numberspinner("getValue");
    var end = ns.eq(1).numberspinner("getValue");
    var item = $("input[name=v_" + name + "]");
    item.val(start + "/" + end);
    item.change();
}

function lastDay(dom){
    var item = $("input[name=v_" + dom.name + "]");
    item.val("L");
    item.change();
}

function weekOfDay(dom){
    var name = dom.name;
    var ns = $(dom).parent().find(".numberspinner");
    var start = ns.eq(0).numberspinner("getValue");
    var end = ns.eq(1).numberspinner("getValue");
    var item = $("input[name=v_" + name + "]");
    item.val(start + "#" + end);
    item.change();
}

function lastWeek(dom){
    var item = $("input[name=v_" + dom.name + "]");
    var ns = $(dom).parent().find(".numberspinner");
    var start = ns.eq(0).numberspinner("getValue");
    item.val(start+"L");
    item.change();
}

function workDay(dom) {
    var name = dom.name;
    var ns = $(dom).parent().find(".numberspinner");
    var start = ns.eq(0).numberspinner("getValue");
    var item = $("input[name=v_" + name + "]");
    item.val(start + "W");
    item.change();
}



//针对 cron
function initCornUi() {
//   + - 数字的功能
  $(".numberspinner").numberspinner({
        onChange:function(){
            $(this).closest("div.line").children().eq(0).click();
        }
    });
    var vals = $("input[name^='v_']");
    var cron = $("#cron");
    vals.change(function() {
        var item = [];
        vals.each(function() {
            item.push(this.value);
        });
        cron.val(item.join(" "));
    });
//代码中没有使用秒
//    var secondList = $(".secondList").children();
//    $("#sencond_appoint").click(function(){
//        if(this.checked){
//            secondList.eq(0).change();
//        }
//    });
//
//    secondList.change(function() {
//        var sencond_appoint = $("#sencond_appoint").prop("checked");
//        if (sencond_appoint) {
//            var vals = [];
//            secondList.each(function() {
//                if (this.checked) {
//                    vals.push(this.value);
//                }
//            });
//            var val = "?";
//            if (vals.length > 0 && vals.length < 59) {
//                val = vals.join(",");
//            }else if(vals.length == 59){
//                val = "*";
//            }
//            var item = $("input[name=v_second]");
//            item.val(val);
//            item.change();
//        }
//    });

    var minList = $(".minList").children();
    $("#min_appoint").click(function(){
        if(this.checked){
            minList.eq(0).change();
        }
    });

    minList.change(function() {
        var min_appoint = $("#min_appoint").prop("checked");
        if (min_appoint) {
            var vals = [];
            minList.each(function() {
                if (this.checked) {
                    vals.push(this.value);
                }
            });
            var val = "?";
            if (vals.length > 0 && vals.length < 59) {
                val = vals.join(",");
            }else if(vals.length == 59){
                val = "*";
            }
            var item = $("input[name=v_min]");
            item.val(val);
            item.change();
        }
    });

    var hourList = $(".hourList").children();
    $("#hour_appoint").click(function(){
        if(this.checked){
            hourList.eq(0).change();
        }
    });

    hourList.change(function() {
        var hour_appoint = $("#hour_appoint").prop("checked");
        if (hour_appoint) {
            var vals = [];
            hourList.each(function() {
                if (this.checked) {
                    vals.push(this.value);
                }
            });
            var val = "?";
            if (vals.length > 0 && vals.length < 24) {
                val = vals.join(",");
            }else if(vals.length == 24){
                val = "*";
            }
            var item = $("input[name=v_hour]");
            item.val(val);
            item.change();
        }
    });

    var dayList = $(".dayList").children();
    $("#day_appoint").click(function(){
        if(this.checked){
            dayList.eq(0).change();
        }
    });

    dayList.change(function() {
        var day_appoint = $("#day_appoint").prop("checked");
        if (day_appoint) {
            var vals = [];
            dayList.each(function() {
                if (this.checked) {
                    vals.push(this.value);
                }
            });
            var val = "?";
            if (vals.length > 0 && vals.length < 31) {
                val = vals.join(",");
            }else if(vals.length == 31){
                val = "*";
            }
            var item = $("input[name=v_day]");
            item.val(val);
            item.change();
        }
    });

    var mouthList = $(".mouthList").children();
    $("#mouth_appoint").click(function(){
        if(this.checked){
            mouthList.eq(0).change();
        }
    });

    mouthList.change(function() {
        var mouth_appoint = $("#mouth_appoint").prop("checked");
        if (mouth_appoint) {
            var vals = [];
            mouthList.each(function() {
                if (this.checked) {
                    vals.push(this.value);
                }
            });
            var val = "?";
            if (vals.length > 0 && vals.length < 12) {
                val = vals.join(",");
            }else if(vals.length == 12){
                val = "*";
            }
            var item = $("input[name=v_mouth]");
            item.val(val);
            item.change();
        }
    });

    var weekList = $(".weekList").children();
    $("#week_appoint").click(function(){
        if(this.checked){
            weekList.eq(0).change();
        }
    });

    weekList.change(function() {
        var week_appoint = $("#week_appoint").prop("checked");
        if (week_appoint) {
            var vals = [];
            weekList.each(function() {
                if (this.checked) {
                    vals.push(this.value);
                }
            });
            var val = "?";
            if (vals.length > 0 && vals.length < 7) {
                val = vals.join(",");
            }else if(vals.length == 7){
                val = "*";
            }
            var item = $("input[name=v_week]");
            item.val(val);
            item.change();
        }
    });
}

//反解析
function readCron() {
    //获取参数中表达式的值
    var txt = $("#cron").val();
    if (txt) {
        var regs = txt.split(' ');
//因为我们没有使用秒和年
        $("input[name=v_min]").val(regs[0]);
        $("input[name=v_hour]").val(regs[1]);
        $("input[name=v_day]").val(regs[2]);
        $("input[name=v_mouth]").val(regs[3]);
        $("input[name=v_week]").val(regs[4]);

        initObj(regs[0], "min");
        initObj(regs[1], "hour");
        initDay(regs[2]);
        initMonth(regs[3]);
        initWeek(regs[4]);
//
//        if (regs.length > 5) {
//            $("input[name=v_year]").val(regs[5]);
//            initYear(regs[5]);
//        }


//        $("input[name=v_second]").val(regs[0]);
//        $("input[name=v_min]").val(regs[1]);
//        $("input[name=v_hour]").val(regs[2]);
//        $("input[name=v_day]").val(regs[3]);
//        $("input[name=v_mouth]").val(regs[4]);
//        $("input[name=v_week]").val(regs[5]);
//
//        initObj(regs[0], "second");
//        initObj(regs[1], "min");
//        initObj(regs[2], "hour");
//        initDay(regs[3]);
//        initMonth(regs[4]);
//        initWeek(regs[5]);
//
//        if (regs.length > 6) {
//            $("input[name=v_year]").val(regs[6]);
//            initYear(regs[6]);
//        }

    }
}


function initObj(strVal, strid) {
    var ary = null;
    var objRadio = $("input[name='" + strid + "']");
    if (strVal == "*") {
        objRadio.eq(0).attr("checked", "checked");
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(1).attr("checked", "checked");
        $("#" + strid + "Start_0").numberspinner('setValue', ary[0]);
        $("#" + strid + "End_0").numberspinner('setValue', ary[1]);
    } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(2).attr("checked", "checked");
        $("#" + strid + "Start_1").numberspinner('setValue', ary[0]);
        $("#" + strid + "End_1").numberspinner('setValue', ary[1]);
    } else {
        objRadio.eq(3).attr("checked", "checked");
        if (strVal != "?") {
            ary = strVal.split(",");
            for (var i = 0; i < ary.length; i++) {
                $("." + strid + "List input[value='" + ary[i] + "']").attr("checked", "checked");
            }
        }
    }
}

function initDay(strVal) {
    var ary = null;
    var objRadio = $("input[name='day']");
    if (strVal == "*") {
        objRadio.eq(0).attr("checked", "checked");
    } else if (strVal == "?") {
        objRadio.eq(1).attr("checked", "checked");
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr("checked", "checked");
        $("#dayStart_0").numberspinner('setValue', ary[0]);
        $("#dayEnd_0").numberspinner('setValue', ary[1]);
    } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(3).attr("checked", "checked");
        $("#dayStart_1").numberspinner('setValue', ary[0]);
        $("#dayEnd_1").numberspinner('setValue', ary[1]);
    } else if (strVal.split('W').length > 1) {
        ary = strVal.split('W');
        objRadio.eq(4).attr("checked", "checked");
        $("#dayStart_2").numberspinner('setValue', ary[0]);
    } else if (strVal == "L") {
        objRadio.eq(5).attr("checked", "checked");
    } else {
        objRadio.eq(6).attr("checked", "checked");
        ary = strVal.split(",");
        for (var i = 0; i < ary.length; i++) {
            $(".dayList input[value='" + ary[i] + "']").attr("checked", "checked");
        }
    }
}

function initMonth(strVal) {
    var ary = null;
    var objRadio = $("input[name='mouth']");
    if (strVal == "*") {
        objRadio.eq(0).attr("checked", "checked");
    } else if (strVal == "?") {
        objRadio.eq(1).attr("checked", "checked");
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr("checked", "checked");
        $("#mouthStart_0").numberspinner('setValue', ary[0]);
        $("#mouthEnd_0").numberspinner('setValue', ary[1]);
    } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(3).attr("checked", "checked");
        $("#mouthStart_1").numberspinner('setValue', ary[0]);
        $("#mouthEnd_1").numberspinner('setValue', ary[1]);

    } else {
        objRadio.eq(4).attr("checked", "checked");

        ary = strVal.split(",");
        for (var i = 0; i < ary.length; i++) {
            $(".mouthList input[value='" + ary[i] + "']").attr("checked", "checked");
        }
    }
}

function initWeek(strVal) {
    var ary = null;
    var objRadio = $("input[name='week']");
    if (strVal == "*") {
        objRadio.eq(0).attr("checked", "checked");
    } else if (strVal == "?") {
        objRadio.eq(1).attr("checked", "checked");
    } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(2).attr("checked", "checked");
        $("#weekStart_0").numberspinner('setValue', ary[0]);
        $("#weekEnd_0").numberspinner('setValue', ary[1]);
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(3).attr("checked", "checked");
        $("#weekStart_1").numberspinner('setValue', ary[0]);
        $("#weekEnd_1").numberspinner('setValue', ary[1]);
    } else if (strVal.split('L').length > 1) {
        ary = strVal.split('L');
        objRadio.eq(4).attr("checked", "checked");
        $("#weekStart_2").numberspinner('setValue', ary[0]);
    } else {
        objRadio.eq(5).attr("checked", "checked");
        ary = strVal.split(",");
        for (var i = 0; i < ary.length; i++) {
            $(".weekList input[value='" + ary[i] + "']").attr("checked", "checked");
        }
    }
}

function initYear(strVal) {
    var ary = null;
    var objRadio = $("input[name='year']");
    if (strVal == "*") {
        objRadio.eq(1).attr("checked", "checked");
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr("checked", "checked");
        $("#yearStart_0").numberspinner('setValue', ary[0]);
        $("#yearEnd_0").numberspinner('setValue', ary[1]);
    }
}


/*
function pagePartition(){
//    var table =
        $('.datatable').dataTable({
//        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span12'i><p>>",
            "sDom": "<'row-fluid'r>t<'row-fluid'<'span12'i><p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {   //汉化
//            "sLengthMenu": '显示 <select>'+
//                '<option value="10">10</option>'+
//                '<option value="20">20</option>'+
//                '<option value="30">30</option>'+
//                '<option value="40">40</option>'+
//                '<option value="50">50</option>'+
//                '<option value="-1">All</option>'+
//                '</select> 条记录'
//            sLengthMenu:''
                "sProcessing":"正在加载数据……",
                "sInfo":"从_START_到_END_条记录——总记录为_TOTAL_条",
                "oPaginate":{
                    "sFirst":"第一页",
                    "sPrevious":"上一页",
                    "sNext":"下一页",
                    "sLast":"最后一页"
                },
                "sInfoEmpty":"记录数为0",
                "sZeroRecords":"无记录",
            "ajax":"/gcks.video/api/v1/resource/ipcs"



        },
//        bInfo:false,
        bLengthChange:false,  //开启一页显示多少条数据的下拉菜单，允许用户从下拉框(10、25、50和100)，
        bFilter:false//不显示 filter框

//        "oTableTools": {
//            "aButtons": [
//                "copy",
//                "print",
//                {
//                    "sExtends":    "collection",
//                    "sButtonText": "Save",
//                    "aButtons":    [ "csv", "xls", "pdf" ]
//                }
//            ]
//        }


    } );
//    var tt = new $.fn.dataTable.TableTools(table);
//    $(tt.fnContainer()).insertBefore('div.dataTables_wrapper');

}
$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
{
    return {
        "iStart":         oSettings._iDisplayStart,
        "iEnd":           oSettings.fnDisplayEnd(),
        "iLength":        oSettings._iDisplayLength,
        "iTotal":         oSettings.fnRecordsTotal(),
        "iFilteredTotal": oSettings.fnRecordsDisplay(),
        "iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
        "iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
    };
};
$.extend( $.fn.dataTableExt.oPagination, {
    "bootstrap": {
        "fnInit": function( oSettings, nPaging, fnDraw ) {
            var oLang = oSettings.oLanguage.oPaginate;
            var fnClickHandler = function ( e ) {
                e.preventDefault();
                if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
                    fnDraw( oSettings );
                }
            };

            $(nPaging).addClass('pagination').append(

                '<ul>'+

                    '<li class="prev disabled"><a href="#">&larr; '+oLang.sPrevious+'</a></li>'+
                    '<li class="next disabled"><a href="#">'+oLang.sNext+' &rarr; </a></li>'+
                    '</ul>'

            );
            var els = $('a', nPaging);

            $(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
            $(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
        },

        "fnUpdate": function ( oSettings, fnDraw ) {
            var iListLength = 5;
            var oPaging = oSettings.oInstance.fnPagingInfo();
            var an = oSettings.aanFeatures.p;
            var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

            if ( oPaging.iTotalPages < iListLength) {
                iStart = 1;
                iEnd = oPaging.iTotalPages;
            }
            else if ( oPaging.iPage <= iHalf ) {
                iStart = 1;
                iEnd = iListLength;
            } else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
                iStart = oPaging.iTotalPages - iListLength + 1;
                iEnd = oPaging.iTotalPages;
            } else {
                iStart = oPaging.iPage - iHalf + 1;
                iEnd = iStart + iListLength - 1;
            }

            for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
                // remove the middle elements
                $('li:gt(0)', an[i]).filter(':not(:last)').remove();

                // add the new list items and their event handlers
                for ( j=iStart ; j<=iEnd ; j++ ) {
                    sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
                    $('<li '+sClass+'><a href="#">'+j+'</a></li>')
                        .insertBefore( $('li:last', an[i])[0] )
                        .bind('click', function (e) {
                            e.preventDefault();
                            oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
                            fnDraw( oSettings );
                        } );
                }

                // add / remove disabled classes from the static elements
                if ( oPaging.iPage === 0 ) {
                    $('li:first', an[i]).addClass('disabled');
                } else {
                    $('li:first', an[i]).removeClass('disabled');
                }

                if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
                    $('li:last', an[i]).addClass('disabled');
                } else {
                    $('li:last', an[i]).removeClass('disabled');
                }
            }
        }
    }
});
*/
//时间控件
function datePicker(){
    var starttime=0;
    var endtime=0;
    $('.starttime').datetimepicker({/*datepicker({*/
        format: 'yyyy-mm-dd hh:ii',
        autoclose:true,
        todayBtn: 'linked',
        language:'zh-CN'

    }).on('changeDate',function(ev){
//        starttime = ev.date.valueOf();
//            if(starttime>endtime && endtime>0){
//                alert("开始时间必须小于结束时间");
////                $('.starttime').val() ;
////                $('.starttime').focus();
//            }
            starttime = ev.date.valueOf();
    });
    $('.endtime').datetimepicker({
        format: 'yyyy-mm-dd hh:ii',
        autoclose:true,
        todayBtn: 'linked',
        language:'zh-CN'
    }).on('changeDate',function(ev){
//        endtime = ev.date.valueOf();
//            if(endtime< starttime){
//                alert("结束时间必须大于开始时间");
//
////                $('.endtime').focus();
//            }
    });


    var real_starttime=0;
    var real_endtime=0;
    $('.real_starttime').datetimepicker({/*datepicker({*/
        format: 'yyyy-mm-dd hh:ii',
        autoclose:true,
        todayBtn: 'linked',
        language:'zh-CN'
    }).on('changeDate',function(ev){
            real_starttime = ev.date.valueOf();
            if(real_starttime>real_endtime && real_endtime>0){
                alert("开始时间必须小于结束时间");
//                $('.starttime').val() ;
//                $('.starttime').focus();
            }
        });
    $('.real_endtime').datetimepicker({
        format: 'yyyy-mm-dd hh:ii',
        autoclose:true,
        todayBtn: 'linked',
        language:'zh-CN'
    }).on('changeDate',function(ev){
            real_endtime = ev.date.valueOf();
            if(real_endtime< real_starttime){
                alert("结束时间必须大于开始时间");

//                $('.endtime').focus();
            }
        });


}