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

//done let mocha know this is asyn, and it not stop processing until done() is called
it('should asyn add two numbers',(done)=>{
    utils.asynAdd(3,4,(sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
    
});

it('should asyn square two nubmers',(done)=>{
    utils.asynSquare(3,(sum)=>{
        expect(sum).toBe(9).toBeA('number');
        done();
    });
});