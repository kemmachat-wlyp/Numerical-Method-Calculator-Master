let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    xs : {type: Number ,required : true},
    xf : {type: Number ,required : true}
});

let Secant = mongoose.model('Secant',userSchema5);
module.exports = Secant;