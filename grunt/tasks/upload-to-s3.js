module.exports = function(grunt, options) {
  grunt.initConfig({
    s3: {
      options: {
        bucket: 'totaepe-contents'
      },
      build: {
        cwd: 'build/',
        src: '**',
        dest: 'nodes/',
        options: {
          gzip: false,
          headers: {
            CacheControl: 'max-age=3600, public, must-revalidate'
          }
        }
      }
    },
    cloudfront: {
      options: {
        distributionId: 'E3G7UPJMR7RCN8'
      },
      html: {
        options: {
          invalidations: [
            '/*'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws');
  grunt.registerTask('upload-to-s3', 'Uploads files to S3', ['s3', 'cloudfront']);
};
