var sys = require('sys'),
    Db = require('../lib/mongodb').Db,
    Connection = require('../lib/mongodb').Connection,
    Server = require('../lib/mongodb').Server,
    BSON = require('../lib/mongodb').BSONNative;


var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : Connection.DEFAULT_PORT;

var db = new Db('dynamic-node-server-mongo', new Server(host, port, {}), {native_parser:false});

exports.db = db;
