const utils = require('./utils');

//it is provided by Mocha
it('should add two numbers', ()=>{
    var res = utils.add(33,11);   
    
    if(res != 44){
        throw new Error(`Expected 44, but get ${res}`);
    };
});

it('should square the input number', ()=>{
    var square = utils.square(4);

    if(square !==16){
        throw new Error(`Expected 16, but get ${square}`);
    };
})