let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    x0 : {type: Number ,required : true}
});

let Newton_raphson = mongoose.model('Newton_raphson',userSchema5);
module.exports = Newton_raphson;