'use strict';

var extend  = require('util')._extend;
var debug   = require('debug')('routes');

function helloWorld(request, reply) { 
  debug('hello world'); 
  reply('Hello!');
}

var routes = module.exports;

var home = {};

home.get = {
  method: 'GET',
  path: '/',
  handler: helloWorld
};

extend(routes, {'/': home.get});
