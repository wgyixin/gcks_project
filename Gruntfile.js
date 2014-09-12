module.exports = function(grunt) {  
  
  // Project configuration.  
  grunt.initConfig({  
 
    emberTemplates: { 
      compile: {
        files: {
          'js/default.js': [
                            'template/loadingView.hbs',
                            'template/components/delete-confirm.hbs','template/components/play-history.hbs','template/components/page-number.hbs',
                            'template/userInfo.hbs',
                            'template/login.hbs','template/main.hbs', 'template/errorpage.hbs',
                            'template/gis/gis.hbs','template/history/history.hbs',
                            'template/ipc/ipcList.hbs','template/ipc/major.hbs','template/ipc/ipc.hbs',
                            'template/link/ipcLink.hbs','template/link/clientLink.hbs',

                            'template/operation/cn.hbs','template/operation/rn.hbs','template/operation/database.hbs',
                            'template/operation/hdfs.hbs','template/operation/mainframe.hbs','template/operation/service.hbs',
                            'template/operation/webServer.hbs','template/operation/monitoringApp.hbs','template/operation/log.hbs',
                            'template/record/videoRecord.hbs', 'template/record/planList.hbs',
                            'template/video/realtime.hbs',
                            'template/system/user.hbs','template/system/usergroup.hbs','template/system/videoLifeCycle.hbs',
                             'template/system/area.hbs',
                           'template/statistics/imgStatistics.hbs',
                            'template/statistics/onlineStatus.hbs','template/statistics/serviceStatistics.hbs'

          ]
        }
      }
    }
  });  
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-ember-templates');
  // Default task(s).  
  grunt.registerTask('default', ['emberTemplates']);  
  
};  