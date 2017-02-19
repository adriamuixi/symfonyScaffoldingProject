module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            clean_web_folder: ['web/js/*', 'web/css/*', 'web/fonts/*', 'web/images/*']
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components',
                destPrefix: 'web'
            },
            scripts: {
                files: {
                    'js/jquery.js': 'jquery/dist/jquery.min.js',
                    'js/bootstrap.js': 'bootstrap/dist/js/bootstrap.min.js',
                    'js/fancybox.js': 'fancybox/source/jquery.fancybox.pack.js',
                    'js/fancybox-media.js': 'fancybox/source/helpers/jquery.fancybox-media.js',
                    'js/js-cookie.js': 'js-cookie/src/js.cookie.js',
                    'js/jquery-simply-countable.js': 'jquery-simply-countable/jquery.simplyCountable.js',
                    'js/flexslider.js': 'flexslider/jquery.flexslider.js',
                    'js/countdown.js': 'jquery.countdown/dist/jquery.countdown.min.js',
                    'js/waypoints.js': 'waypoints/lib/jquery.waypoints.min.js',
                    'js/classie.js': 'classie/classie.js',
                    'js/jquery-ui.js': 'jquery-ui/jquery-ui.js',
                    'js/jasny.js': 'jasny-bootstrap/dist/js/jasny-bootstrap.min.js',
                    'js/swiper.js': 'swiper/dist/js/swiper.jquery.min.js',
                    'js/validator.js': 'bootstrap-validator/dist/validator.min.js',
                    'js/tinymce/tinymce.js': 'tinymce/tinymce.js',
                    'js/tinymce/plugins': 'tinymce/plugins/*',
                    'js/tinymce/skins': 'tinymce/skins/*',
                    'js/tinymce/themes': 'tinymce/themes/*'
                }
            },
            stylesheets: {
                files: {
                    'css/bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css',
                    'css/font-awesome.css': 'font-awesome/css/font-awesome.min.css',
                    'css/fancybox.css': 'fancybox/source/jquery.fancybox.css',
                    'css/flexslider.css': 'flexslider/flexslider.css',
                    'css/animate.css': 'animate.css/animate.min.css',
                    'css/yamm.css': 'yamm3/yamm/yamm.css',
                    'css/jquery-ui.css': 'jquery-ui/themes/ui-lightness/jquery-ui.css',
                    'css/jasny.css' : 'jasny-bootstrap/dist/css/jasny-bootstrap.min.css',
                    'css/swiper.css': 'swiper/dist/css/swiper.min.css'
                }
            },
            fonts: {
                files: {
                    'fonts': [
                        'font-awesome/fonts',
                        'bootstrap/fonts'
                    ]
                }
            }
        },
        less: {
            development: {
                files: {
                    "web/css/app.min.css": "src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/less/app.less"
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/fonts/**/*'],
                        dest: 'web/fonts/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/pdf/*'],
                        dest: 'web/pdf/',
                        filter: 'isFile'
                    },

                    {
                        expand: true, flatten: true, src: [
                        'src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/images/*.png',
                        'src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/images/**/*.png',
                        'src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/images/*.jpg',
                        'src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/images/**/*.jpg',
                        'src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/images/*.ico'
                    ], dest: 'web/images/template/', filter: 'isFile'
                    },

                    {
                        expand: true, flatten: true, src: [
                        'src/Adriamuixi/BotigaBundle/Resources/public/images/*.png',
                        'src/Adriamuixi/BotigaBundle/Resources/public/images/**/*.png',
                        'src/Adriamuixi/BotigaBundle/Resources/public/images/*.jpg',
                        'src/Adriamuixi/BotigaBundle/Resources/public/images/**/*.jpg'
                    ], dest: 'web/images/botiga/', filter: 'isFile'
                    }
                ]
            }
        },
        sprite: {
            all: {
                src: 'src/Atresmediahf/MascoterosTemplatesBundle/Resources/public/images/sprite/*.png',
                dest: 'web/images/cfseixample-sprite.png',
                destCss: 'web/css/cfseixample-sprites.css'
            }
        },
        uglify: {
            target: {
                files: {
                    'web/js/main.min.js': [
                        'web/js/jquery.js',
                        'web/js/bootstrap.js',
                        'web/js/fancybox.js',
                        'web/js/countdown.js',
                        'web/js/fancybox-media.js',
                        'web/js/js-cookie.js',
                        'src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/js/*.js',
                        'src/Adriamuixi/CfseixampleTemplateBundle/Resources/public/js/events/*.js'
                    ],
                    'web/js/botiga.min.js': ['src/Adriamuixi/BotigaBundle/Resources/public/js/*.js']
                }
            }
        },
        watch: {
            css: {
                files: [
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/**/*.css',
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/css/responsive/**/*.css',
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/**/*.less',
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/less/responsive/**/*.less',
                    'src/Adriamuixi/BotigaBundle/Resources/**/*.css'
                ],
                tasks: ['less', 'cssmin'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },
            js: {
                files: [
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/**/*.js',
                    'src/Adriamuixi/BotigaBundle/Resources/**/*.js'
                ],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },
            images: {
                files: [
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/**/*.jpg',
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/**/*.png',
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/**/*.gif',
                    'src/Adriamuixi/CfseixampleTemplateBundle/Resources/**/*.ico',

                    'src/Adriamuixi/BotigaBundle/Resources/public/images/*.png',
                    'src/Adriamuixi/BotigaBundle/Resources/public/images/**/*.png',
                    'src/Adriamuixi/BotigaBundle/Resources/public/images/*.jpg',
                    'src/Adriamuixi/BotigaBundle/Resources/public/images/**/*.jpg'
                ],
                tasks: ['copy', 'sprite'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-assets-versioning');
    grunt.loadNpmTasks('grunt-string-replace');

    //grunt.registerTask('custom', function(target) {
    //    grunt.config.set('imageVersions', grunt.file.readJSON('imagesVersionArray.json'));
    //    grunt.task.run('string-replace');
    //});

    grunt.registerTask('default', ['clean', 'bowercopy', 'copy', 'less', 'sprite', 'uglify']);

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.config(['default'], filepath);
    });
};