module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        options: {
          compress: true,
         
        },
        files: {
          "./build/styles/main.css": "./src/styles/main.less",
        },
      },
    },
    watch: {
        styles: {
            files: ['./src/styles/*.less'], 
            tasks: ['less'], 
            options: {
                spawn: false
            }
        }
    },
    uglify:{
        my_target:{
            files:{'./build/main.min.js': './src/script/main.js'}
        }
    },
    concurrent: {
      target: ["less",'watch','uglify'],
    },

 
  });
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask("default", ["concurrent"]);
};
