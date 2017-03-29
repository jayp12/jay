module.exports = function(grunt) {
	

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		grunt.initConfig({
  			uglify: {
    			my_target: {
      				files: {
        				'dest/output.min.js': ['src/second.js', 'src/thrid.js',src/home.js',src/config.js',src/service.js']
      }
    }
  }


	});


	grunt.loadNpmTasks('grunt-contrib-uglify');