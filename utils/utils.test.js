const expect = require('expect');

const utils = require('./utils');

//it is provided by Mocha
it('should add two numbers', ()=>{
    var res = utils.add(33,11);   
    
    //use expect to do the test.
    //.toBe(); .toBeA();
    expect(res).toBe(44).toBeA('number');
});

it('should square the input number', ()=>{
    var square = utils.square(4);

    expect(square).toBeA('number').toBe(16);
})

it('should set first and last name', ()=>{
    var user = {
        location : 'Toronto',
        age: 23
    };
    var res = utils.name(user, 'Mark Qian');
    expect(res).toInclude({
        firstname: 'Mark',
        lastname:'Qian'
    });
    //expect(user).toEqual(res);

});