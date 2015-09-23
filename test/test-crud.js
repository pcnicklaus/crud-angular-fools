process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../server/app');
var Duck = require('../server/models/ducks');
var should = chai.should();
chai.use(chaiHTTP);

describe("Ducks", function(){

    Duck.collection.drop();
    var id;

    beforeEach(function(done) {
        var newDuck = new Duck( {
            name: 'Daffy',
            age: '53'
        });
        id = newDuck._id;
        newDuck.save(function(err){
            done();
    });

        })  // beforeEach
    afterEach(function(done){
        Duck.collection.drop();
        done();
    });

    it('should get ONE duck with GET', function(done){
        chai.request(server)
            .get('/duck/'+id)
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.name.should.be.a('string');
                res.body.name.should.be.equal('Daffy');
                res.body.age.should.be.a('number');
                res.body.age.should.be.equal(53);
                done();
            });
    });
    it('should get ALL ducks with GET', function(done){
        chai.request(server)
            .get('/ducks')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
                res.body[0].name.should.be.a('string');
                res.body[0].name.should.be.equal('Daffy');
                res.body[0].age.should.be.a('number');
                res.body[0].age.should.be.equal(53);
                done();
            })
    })

    it('should post ONE new duck', function(done){
        chai.request(server)
            .post('/duck/Quack/25')
            .end(function(err,res){
               res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.name.should.be.a('string');
                res.body.name.should.be.equal('Quack');
                res.body.age.should.be.a('number');
                res.body.age.should.be.equal(25);
                done();
            })
    })
});

