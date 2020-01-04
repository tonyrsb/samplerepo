var supertest =require('supertest');
var chai = require('chai');
var should = require('should');
//let chai = require('chai');
//let chaiHttp = require('chai-http');
var server = supertest.agent('omdbapi.com');
var util = require("util");

chai.should();
//chai.use(chaiHttp);

describe('Test Case', function() {
    this.timeout(10000);
    describe('TEST CASE 1 : IT SHOULD GET ALL JSON WITHOUT CONDITION', function(){
    it('TEST CASE 1 : IT SHOULD GET ALL JSON WITHOUT CONDITION', function(done){
        server
            .get("/?apikey=3557db7&t=lord")
            .expect(200)
            .end(function (err, response, body){
                //expect(response.body).to.be.an('array');
                //response.body.should.be.an('array');
                //chai.expect(response.body.Year).to.equal('2001');
               //var bodyObj = JSON.parse(body);
               //expect(bodyObj.res).to.equal("True");

                if (!err) {
                    //chai.expect(res.body).to.have.property('Search',"lord");
                    console.log(response.body);
                    done();
                }
                else
                    console.log('NOT FOUND');
                    
            })
        })    
    })

    describe('TEST CASE 2 : IT SHOULD GET ALL JSON with condition', function(){
        it('TEST CASE 2 : IT SHOULD GET ALL JSON wtih condition', function(done){
            server
                .get("/?apikey=3557db7&t=lord")
                .expect(200)
                .end(function (err, response, body){
                    //expect(response.body).to.be.an('array');
                    //response.body.should.be.an('array');
                    //chai.expect(response.body.Year).to.equal('2001');
                   //var bodyObj = JSON.parse(body);
                   //expect(bodyObj.res).to.equal("True");
    
                    if (!err && chai.expect(response.body.Year).to.equal('2001')) {
                        //chai.expect(res.body).to.have.property('Search',"lord");
                        console.log(response.body);
                        done();
                    }
                    else
                        console.log('NOT FOUND');
                        
                })
            })    
        })
    describe('TEST CASE 3 : IT SHOULD NOT GET ALL JSON BECAUSE YEAR IS NOT FOUND', function(){
    it('TEST CASE 3 : IT SHOULD NOT GET ALL JSON BECAUSE YEAR IS NOT FOUND', function(done){
        server
            .get("/?apikey=3557db7&t=lord")
            .expect(200)
            .end(function (err, response, body){
                //expect(response.body).to.be.an('array');
                //response.body.should.be.an('array');
                
               //var bodyObj = JSON.parse(body);
               //expect(bodyObj.res).to.equal("True");

                if (!err && chai.expect(response.body.Year).to.equal(2001)) {
                    //chai.expect(res.body).to.have.property('Search',"lord");
                    console.log(response.body);
                    done();
                }
                else
                    console.log('JSON NOT FOUND');
                              
               })
        
        })           
    })
    describe('TEST CASE 4 : IT SHOULD NOT GET ALL JSON BECAUSE Status Code is Different', function(){
    it('TEST CASE 4 : IT SHOULD NOT GET ALL JSON BECAUSE Status Code is Different', function(done){
        server
            .get("/?apikey=3557db7&t=lord")
            .expect(1200)
            .end(function (err, response, body){
                //expect(response.body).to.be.an('array');
                //response.body.should.be.an('array');
               //var bodyObj = JSON.parse(body);
               //expect(bodyObj.res).to.equal("True");

                if (!err && chai.expect(response.body.Year).to.equal('2001'))  {
                    //chai.expect(res.body).to.have.property('Search',"lord");
                    
                    consolez.log(err);
                    done();
                }
                else
                    console.log('JSON NOT FOUND BECAUSE STATUS CODE IS NOT FOUND OR DIFFERENT');
                    done();
                
            })
        
    })
})
});
