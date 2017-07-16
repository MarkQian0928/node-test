const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', ()=>{

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call teh spy correctly', ()=>{
        //.createSpy() will return the function that is the function going to swap out for the real one
        var spy = expect.createSpy();
        spy('MARK', 25);
        expect(spy).toHaveBeenCalledWith('MARK', 25);

    });

    it('should call saveUser with user object', ()=>{
        var email = 'test@test.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});