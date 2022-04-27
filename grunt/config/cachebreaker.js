module.exports = function(grunt, options) {
  console.log('<%= outputdir %>index.html');
  return {
    dev: {
      options: {
        match: ['adapt.min.js', 'adapt.css', 'adapt/js/scriptLoader.js']
      },
      files: {
        src: [
          '<%= outputdir %>index.html',
          '<%= outputdir %>adapt/js/scriptLoader.js']
      }
    }
  };
};
