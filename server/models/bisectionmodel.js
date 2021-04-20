let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    xl : {type: Number ,required : true},
    xr : {type: Number ,required : true}
});

let bisectionmodel = mongoose.model('bisectionmodel',userSchema5);
module.exports = bisectionmodel;