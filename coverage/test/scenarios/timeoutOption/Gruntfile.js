if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'] === 'undefined'){_$jscoverage['test/scenarios/timeoutOption/Gruntfile.js']=[];
_$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'].source=['module.exports = function(grunt) {',
'  // Add our custom tasks.',
'  grunt.loadTasks(\'../../../tasks\');',
'',
'  // Project configuration.',
'  grunt.initConfig({',
'    mochaTest: {',
'      options: {',
'        reporter: \'spec\',',
'        timeout: 500',
'      },',
'      all: {',
'        src: [\'*.js\']',
'      }',
'    }',
'  });',
'',
'  // Default task.',
'  grunt.registerTask(\'default\', [\'mochaTest\']);',
'};',
''];
_$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'][1]=0;
_$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'][3]=0;
_$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'][6]=0;
_$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'][19]=0;
}_$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'][1]++;
module.exports = function(grunt) {
  // Add our custom tasks.
  _$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'][3]++;
grunt.loadTasks('../../../tasks');

  // Project configuration.
  _$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'][6]++;
grunt.initConfig({
    mochaTest: {
      options: {
        reporter: 'spec',
        timeout: 500
      },
      all: {
        src: ['*.js']
      }
    }
  });

  // Default task.
  _$jscoverage['test/scenarios/timeoutOption/Gruntfile.js'][19]++;
grunt.registerTask('default', ['mochaTest']);
};