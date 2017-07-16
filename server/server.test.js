const request = require('supertest');
const expect = require('expect');

var {app} = require('./server');

it('should return hello world',(done)=>{
    request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
            expect(res.body).toInclude({
                error: "Page not found"
            });
        })
        .end(done);
});

it('should return user object',(done)=>{
    request(app)
        .get('/user')
        .expect(200)
        .expect((res)=>{
            expect(res.body).toInclude({
                name: 'Mark Qian'
            });
        })
        .end(done);
});