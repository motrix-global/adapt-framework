module.exports = function(grunt) {
  const path = require('path');
  const helpers = require('./grunt/helpers')(grunt);

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    data: helpers.generateConfigData(),
    configPath: path.join(__dirname, 'grunt', 'config'),
    jitGrunt: {
      customTasksDir: path.join(__dirname, 'grunt', 'tasks'),
      staticMappings: {
        bower: 'grunt-bower-requirejs',
        cachebreaker: 'grunt-cache-breaker'
      }
    }
  });

  grunt.config('helpers', helpers);
  grunt.registerTask('default', ['help']);
};
