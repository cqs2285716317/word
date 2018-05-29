// 包装函数
module.exports = function (grunt) {

//  任务配置，所有插件的配置信息
  grunt.initConfig({

  //  获取package.json的信息
    pkg: grunt.file.readJSON('package.json'),
    manifest: {
      generate: {
        options: {
          basePath: './',
          cache: ['js/*.js', 'css/*.css'],
          network: ['http://*', 'https://*'],
          fallback: ['/ /offline.html'],
          exclude: ['js/jquery.min.js'],
          preferOnline: true,
          headcomment: " <%= pkg.name %> v<%= pkg.version %>",
          verbose: true,
          timestamp: true,
          hash: true,
          master: ['index.html'],
          process: function(path) {
            return path.substring('build/'.length);
          }
        },
        src: [
          'build/*.html',
          'build/*.min.js',
          'build/*.css'
        ],
        dest: 'manifest.appcache'
      }
    },

    meta: {
      basePath: './pc/',
      srcPath: './sass',
      deployPath: './css'
    },

    sass: {
      dist: {
        files: {
          '<%= meta.deployPath %>index.css': '<%= meta.srcPath %>index.scss'
        },
        options: {
          style: 'compressed'
        }
      }
    },

    uglify: {
      options: {
        stripBanners: true,
        banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-MM-dd")%> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
      }
    },
    cssmin: {
      options: {
        stripBanners: true,
        banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-MM-dd")%> */\n'
      },
      build: {
        src: 'css/*.css',
        dest: 'build/<%=pkg.name%>-<%=pkg.version%>.css.min.css'
      }
    },
    watch: {
      build: {
        files: ['src/*.js', 'css/*.css'],
        tasks: ['uglify', 'cssmin'],
        options: { spawn: false }
      }
    },
    jshint: {
      build: ['Gruntfile.js', 'src/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    csslint: {
      build: ['Gruntfile.js', 'css/*.css'],
      options: {
        csslintrc: '.csslintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-manifest');

  //告诉grunt当我们在终端输入grunt时需要做什么
  // grunt.registerTask('default', ['uglify','cssmin','watch','jshint','csslint','manifest']);
  grunt.registerTask('default', ['sass']);
};