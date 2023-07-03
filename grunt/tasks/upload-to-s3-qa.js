module.exports = function(grunt, options) {
  grunt.initConfig({
    s3: {
      options: {
        bucket: 'totaepe-contents'
      },
      build: {
        cwd: 'build/',
        src: '**',
        dest: 'totaepe-qa/',
        options: {
          gzip: false,
          headers: {
            CacheControl: 'max-age=3600, public, must-revalidate'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws');
  grunt.registerTask('upload-to-s3-qa', 'Uploads files to S3 QA', ['s3']);
};
