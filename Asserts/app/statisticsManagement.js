/**
 * Created by wang on 14-4-24.
 */
/*
 视频管理
 */

var statisticsMenu = App.HeaderMenu.create({
    id: 'statistics',
    name: '统计报表',
    hrefTo: 'imgStatistics'
});

headerMenus.pushObject(statisticsMenu);


/**
 * video management
 * @type {*|void|Object}
 */
App.StatisticsRoute = Ember.Route.extend({
    templateName: 'template/statistics/onlineStatus'
});

App.StatisticsView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#statistics").addClass('active');
    }
});
App.ImgStatisticsRoute = Ember.Route.extend({
    templateName: 'template/statistics/imgStatistics'
});

App.ImgStatisticsView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#statistics").addClass('active');
        drawLine();
        drawBar();
        drawPie();
    }
});

App.ServiceStatisticsRoute = Ember.Route.extend({
    templateName: 'template/statistics/serviceStatistics'
});

App.ServiceStatisticsView = Ember.View.extend({
    didInsertElement: function() {
        elementAction();
        //后退 2个菜单都选中的bug
        $('ul.nav-top li.active').removeClass('active');
        //解决刷新 菜单没有选中样式的bug
        $("#statistics").addClass('active');
    }
});


function drawLine() {
    var
    d1 = [
        [0, 3],
        [4, 8],
        [8, 5],
        [9, 13]
    ], // First data series
        d2 = [], // Second data series
        d3 = [
            [3, 3],
            [5, 8],
            [9, 6],
            [7, 3]
        ], // third data series
        i, graph;

    // Generate first data set
    for (i = 0; i < 14; i += 0.5) {
        d2.push([i, Math.sin(i)]);
    }

    // Draw Graph
    Flotr.draw(document.getElementById("line"), [d1, d2, d3], {
        xaxis: {
            minorTickFreq: 4
        },
        mouse: {
            track: true,
            relative: true,
            trackFormatter: function(obj) {
                return 'x = ' + obj.x + ', y = ' + obj.y;
            }

        },

        //        lines : {
        //            show : true
        //        },
        //        points : {
        //            show : true
        //        },
        grid: {
            minorVerticalLines: true
        }
    });

}

function drawBar(horizontal) {
    var
    horizontal = (horizontal ? true : false), // Show horizontal bars
        d1 = [], // First data series
        d2 = [], // Second data series
        point, // Data point variable declaration
        i;

    for (i = 0; i < 4; i++) {

        if (horizontal) {
            point = [Math.ceil(Math.random() * 10), i];
        } else {
            point = [i, Math.ceil(Math.random() * 10)];
        }

        d1.push(point);

        if (horizontal) {
            point = [Math.ceil(Math.random() * 10), i + 0.5];
        } else {
            point = [i + 0.5, Math.ceil(Math.random() * 10)];
        }

        d2.push(point);
    }

    // Draw the graph
    Flotr.draw(
        document.getElementById("bar"), [d1, d2], {
            bars: {
                show: true,
                horizontal: horizontal,
                shadowSize: 0,
                barWidth: 0.5
            },
            mouse: {
                track: true,
                relative: true
            },
            yaxis: {
                min: 0,
                autoscaleMargin: 1
            }
        }
    );

}

function drawPie() {
    var
    d1 = [
        [0, 4]
    ],
        d2 = [
            [0, 3]
        ],
        d3 = [
            [0, 1.03]
        ],
        d4 = [
            [0, 3.5]
        ];



    Flotr.draw(document.getElementById("pie"), [{
        data: d1,
        label: 'Comedy'
    }, {
        data: d2,
        label: 'Action'
    }, {
        data: d3,
        label: 'Romance',
        pie: {
            explode: 50
        }
    }, {
        data: d4,
        label: 'Drama'
    }], {
        HtmlText: false,
        grid: {
            verticalLines: false,
            horizontalLines: false
        },
        xaxis: {
            showLabels: false
        },
        yaxis: {
            showLabels: false
        },
        pie: {
            show: true,
            explode: 6
        },
        mouse: {
            track: true
        },
        legend: {
            position: 'se',
            backgroundColor: '#D2E8FF'
        }
    });

}