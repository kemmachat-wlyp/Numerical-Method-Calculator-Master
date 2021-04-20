let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    a : {type: Number ,required : true},
    b : {type: Number ,required : true}
});

let Trapezoidal = mongoose.model('traps',userSchema5);
module.exports = Trapezoidal;
