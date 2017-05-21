const Routes = require('../../routes/messages');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');
const should = chai.should();

chai.use(chaiHttp);

    describe('/POST /messages/:message', () => {
        it('should POST a message', (done) => {
            const message = 'THIS IS A TEST MESSAGE';
            chai.request(server)
                .post(`/messages/${message}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('response').eql('Success');
                    res.body.should.have.property('message').eql('Resource found');
                    res.body.data.should.be.a('object');
                    done();
                });
        });
    });


    describe('/GET messages/', () => {
        it ('should GET all messages', (done) => {
            chai.request(server)
                .get('/messages/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('response').eql('Success');
                    res.body.should.have.property('message').eql('Resource found');
                    res.body.data.should.be.a('array');
                    done();
                });
        });
    });

    describe('/GET messages/:id', () => {
        it ('should GET a message by id', (done) => {
            const id = 1;
            chai.request(server)
                .get(`/messages/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('response').eql('Success');
                    res.body.should.have.property('message').eql('Resource found');
                    res.body.data.should.be.a('object');
                    done();
                });
        });
    });

    describe('/GET messages/:id', () => {
        it ('should NOT GET a message if id does not exist', (done) => {
            const id = 10000000;
            chai.request(server)
                .get(`/messages/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('response').eql('Error');
                    res.body.should.have.property('message').eql('Resource not found');
                    res.body.data.should.be.a('object');
                    res.body.data.should.have.property('name').eql('QueryResultError');
                    res.body.data.should.have.property('message').eql('No data returned from the query.');
                    done();
                });
        });
    });