module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      dist: {
        files: {
          'public/style.css' : 'src/sass/**/*.scss'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          'public/index.html' : 'src/jade/*.jade'
        }
      }
    },

    coffee: {
      compile: {
        files: {
          'public/app.js' : 'src/coffee/*.coffee'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      coffee: {
        files: 'src/coffee/*.coffee',
        tasks: ['coffee', 'reload']
      },
      sass: {
        files: 'src/sass/**/*.scss',
        tasks: ['sass', 'reload']
      },
      jade: {
        files: 'src/jade/*.jade',
        tasks: ['jade', 'reload']
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          base: 'public',
          livereload: true,
          keepalive: true,
          open: {
            target: 'http://localhost:9001'
          }
        }
      }
    },

    reload: {
      port: 9002,
      proxy: {
          host: 'localhost',
          port: 9001 // should match server.port config
      }
    },

    uglify: {
      my_target: {
        files: {
          'src/public/app.min.js': 'src/public/app.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', 'connect', 'watch');

};
