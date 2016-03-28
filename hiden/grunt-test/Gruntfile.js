module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					$: true,
					console: true
				}
			},
			'<%= pkg.name %>': {
				src: [ 'src/js/**/*.js' ]
			}
		},

		concat: {
			dist: {
				src: ['src/js/file1.js', 'src/js/file2.js'],
				dest: 'dest/build.js'
			}
		},

			uglify: {

			options: {
				stripBanner: true,
				banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
				build: {
				src: ['src/js/file1.js', 'src/js/file2.js'],
				dest: 'dest/build.min.js'
				}
			},

			cssmin: {
				with_banner: {
					options: {
						banner: '/* My minified CSS */'
					},

					files: {
						'dest/style.min.css' : ['src/css/style1.css', 'src/css/style2.css']
					}
				}
			},

		     watch: {
		     	scripts: {
				  	files: ['src/js/*.js'],
			     	tasks: ['jshint', 'concat', 'uglify', 'removelogging']
		     	},
		     	css: {
		     		files: ['src/css/*.css'],
			     	tasks: ['cssmin']
		     	}
		     },

		     removelogging: {
		     	dist: {
		     	src: 'dest/build.min.js',
				dest: 'dest/build.clean.js'
		     	}
		     }
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-remove-logging');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'removelogging', 'watch']);
	grunt.registerTask('test', ['']);

};