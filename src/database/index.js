

var mongoose = require('mongoose'),
    nconf = require('nconf'),
    winston = require('winston');

var db = {};

var dbPassword = encodeURIComponent(nconf.get('mongo:password'));

var CONNECTION_URI = 'mongodb://' + nconf.get('mongo:username') + ':' + dbPassword + '@' + nconf.get('mongo:host') + ':' + nconf.get('mongo:port') + '/' + nconf.get('mongo:database');

mongoose.connection.on('error', function(e) {
    winston.error('Oh no, something went wrong with DB! - ' + e.message);
});

mongoose.connection.on('connected', function() {
    if (!process.env.FORK)
        winston.info('Connected to MongoDB');
});

var options = { keepAlive: 1, connectTimeoutMS: 30000 };

module.exports.init = function(callback, connectionString, opts) {
    if (connectionString) CONNECTION_URI = connectionString;
    if (opts) options = opts;
    if (process.env.MONGOHQ_URL !== undefined) CONNECTION_URI = process.env.MONGOHQ_URL.trim();

    if (db.connection) {
        return callback(null, db);
    } else {
        mongoose.Promise = global.Promise;
        mongoose.connect(CONNECTION_URI, options, function(e) {
            if (e) return callback(e, null);
            db.connection = mongoose.connection;

            return callback(e, db);
        });
    }
};

module.exports.db = db;
