module.exports.add = (a,b)=> a+b;

module.exports.square = (a)=> a*a;

module.exports.name = (user, fullname)=>{
    var name = fullname.split(' ');
    user.firstname = name[0];
    user.lastname = name[1];
    return user;
};

module.exports.asynAdd=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);
    },1000); 
};

module.exports.asynSquare=(a,b)=>{
    
    setTimeout(()=>{
        b(a*a);
    },1000);
};