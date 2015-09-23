process.end.NODE_ENV = 'test'

var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../server/app');
var Duck = require('../server/models/ducks');
var should = chai.should();
chai.use(chaiHTTP);