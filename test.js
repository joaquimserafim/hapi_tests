'use strict';

var test    = require('tape');
var request = require('supertest');

var server = require('./.');

test('testing get "/"', function(assert) {
  request(server.info.uri)
    .get('/')
    .expect(200)
    .end(function(err, res){
      assert.equal(err, null);
      assert.ok(res, 'should bring some result'); 
      assert.end();
  });
});

test('teardown server', function(assert) {
  server.close(assert.end);
});
