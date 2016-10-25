({
    appDir: './',
    baseUrl: './js',
    dir: 'min',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^(r|built)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths : {

        'jquery': 'lib/jquery-3.1.0.min',
        'underscore': 'lib/underscore/underscore1.8.3',
        'backbone': 'lib/backbone/backbone1.2.3',
        'doT': 'lib/doT1.0.0/doT.min',
        'bootstrap': 'lib/bootstrap.min',
        'text': 'js/lib/text/text',
        'jquery.price_format': 'lib/jquery-price-format/jquery.price_format.min',
        'jquery.validate': 'lib/jquery-validation1.12.0/dist/jquery.validate.min',
        'modernizr': 'lib/modernizr2.6.2/modernizr-2.6.2.min',
        'templatesFolder': 'templates',
        'pnotify': 'lib/pnotify/pnotify.custom.min',
        'pnotify.buttons': 'lib/pnotify/pnotify.custom.min'
    },

    // Sets the configuration for your third party scripts that are not AMD
    // compatible
    shim : {

        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jquery.price_format': {
            deps: ['jquery']
        },
        'jquery.validate': {
            deps: ['jquery']
        }

    }
})