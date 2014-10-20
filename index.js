'use strict';

var Hapi    = require('hapi');
var debug   = require('debug')('server');

var server  = new Hapi.Server(3000);
var routes  = require('./routes');

server.route(Object.keys(routes).map(function(route) {
  debug('route: ' + route); 
  return routes[route];
}));

server.start(function () {
  debug('Server running at:' + server.info.uri);
});

if (module.parent) {
  server.close = function(cb) {
    cb();
    process.exit(0);
  };
  module.exports = server;  
}
