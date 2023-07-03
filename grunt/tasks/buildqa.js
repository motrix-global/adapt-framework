/**
 * For production
 */
module.exports = function(grunt) {
  grunt.registerTask('buildqa', 'Creates a production-ready build to QA of the course', [
    '_log-vars',
    'check-json',
    'clean:output',
    'build-config',
    'tracking-insert',
    'copy',
    'schema-defaults',
    'language-data-manifests',
    'handlebars',
    'javascript:compile',
    'clean:dist',
    'less:compile',
    'replace',
    'cachebreaker',
    'scripts:adaptpostbuild',
    'clean:temp',
    'minify',
    'upload-to-s3-qa'
  ]);
};
