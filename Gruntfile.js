module.exports = function(grunt) {
    grunt.initConfig({
        stylus: {
            dist: {
                options: {
                    compress: false
                },
                files: {
                    "css/skeleton.css": "styl/skeleton.styl"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['styl/**/*.styl'], // which files to watch
                tasks: ['stylus'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['stylus', 'watch']);
};
