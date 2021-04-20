let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    LBL : {type: Number ,required : true},
    LBH : {type: Number ,required : true},
    N : {type: Number ,required : true}
});

let Composite_Trapezoidal = mongoose.model('Composite_Trapezoidal',userSchema5);
module.exports = Composite_Trapezoidal;