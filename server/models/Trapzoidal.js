let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    LBL : {type: Number ,required : true},
    LBH : {type: Number ,required : true}
});

let Simpson = mongoose.model('Simpson',userSchema5);
module.exports = Simpson;