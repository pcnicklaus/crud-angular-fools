process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../server/app');
var Fool = require('../server/models/fools');
var should = chai.should();
chai.use(chaiHTTP);

describe("Fools", function () {

    Fool.collection.drop();
    var id;

    beforeEach(function (done) {
            var newFool = new Fool({
                name: 'Me',
                age: '36'
            });
            id = newFool._id;
            newFool.save(function (err) {
                done();
            });

        }) // beforeEach
    afterEach(function (done) {
        Fool.collection.drop();
        done();
    });

    it('should get ONE fool with GET', function (done) {
        chai.request(server)
            .get('/fool/' + id)
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.name.should.be.a('string');
                res.body.name.should.be.equal('Me');
                res.body.age.should.be.a('number');
                res.body.age.should.be.equal(36);
                done();
            });
    });
    it('should get ALL fools with GET', function (done) {
        chai.request(server)
            .get('/fools')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
                res.body[0].name.should.be.a('string');
                res.body[0].name.should.be.equal('Fool');
                res.body[0].age.should.be.a('number');
                res.body[0].age.should.be.equal(36);
                done();
            })
    })

    it('should post ONE new fool', function (done) {
        chai.request(server)
            .post('/fool/Wackoo/10')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.name.should.be.a('string');
                res.body.name.should.be.equal('Wackoo');
                res.body.age.should.be.a('number');
                res.body.age.should.be.equal(10);
                done();
            })
    })
});