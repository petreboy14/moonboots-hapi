var Hapi = require('hapi');
var moonboots_options = {
    appPath: '/app',
    jsFileName: 'moonboots-hapi-js',
    cssFileName: 'moonboots-hapi-css',
    main: __dirname + '/sample/app/app.js',
    developmentMode: true,
    stylesheets: [
        __dirname + '/sample/stylesheets/style.css'
    ]
};

var server = new Hapi.Server('localhost', 3000);

server.route({
    method: 'get',
    path: '/',
    handler: function () {
        this.reply.redirect('/app').message('Redirecting to clientside app...');
    }
});

server.pack.require({ '.': moonboots_options }, function (err) {
    if (err) throw err;

    server.start(function () {
        console.log('Sample app running at: http://localhost:3000');
    });
});

