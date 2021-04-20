var express = require('express');
var router = express.Router();

let Trap = require('../models/Trap');
//////////////// Root_of_Equation ////////////////////////////
let bisectionmodel = require('../models/bisectionmodel');
let False_position = require('../models/False_position');
let Newton_raphson = require('../models/Newton_raphson');
let Onepoint = require('../models/Onepoint');
let Secant  = require('../models/Secant');

//////////////// Integration ////////////////////////////
let Composite_Simpson = require('../models/Composite_Simpson');
let Composite_Trapezoidal = require('../models/Composite_Trapezoidal');
let Simpson = require('../models/Simpson');
let Trapzoidal = require('../models/Trapzoidal');
/* GET users listing. */

//////////////// Differentiation ////////////////////////////
let Backward_Divided2 = require('../models/Backward_Divided2');
/////////////////////////////////////////////////////////////

router.get('/showtrap', function(req, res, next) {
 
  Trap.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/addtrap',(req,res)=>{
  console.log(req.body);
  let doc = new Trap(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
//////////////// Root_of_Equation ////////////////////////////
//////// Bisectionmodel ///////////
router.get('/showbisectionmodel', function(req, res, next) {
 
  bisectionmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/bisectionmodel',(req,res)=>{
  console.log(req.body);
  let doc = new bisectionmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
//////// False_position ///////////

router.get('/showFalse_position', function(req, res, next) {
 
  False_position.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/False_position',(req,res)=>{
  console.log(req.body);
  let doc = new False_position(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
//////// Newton_raphson ///////////

router.get('/showNewton_raphson', function(req, res, next) {
 
  Newton_raphson.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/Newton_raphson',(req,res)=>{
  console.log(req.body);
  let doc = new Newton_raphson(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//////// Onepoint ///////////

router.get('/showOnepoint', function(req, res, next) {
 
  Onepoint.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/Onepoint',(req,res)=>{
  console.log(req.body);
  let doc = new Onepoint(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//////// Secant ///////////

router.get('/showSecant', function(req, res, next) {
 
  Secant.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/Secant',(req,res)=>{
  console.log(req.body);
  let doc = new Secant(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//////////////// Integration ////////////////////////////

//////// Composite_Simpson ///////////

router.get('/showComposite_Simpson', function(req, res, next) {
 
  Composite_Simpson.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/Composite_Simpson',(req,res)=>{
  console.log(req.body);
  let doc = new Composite_Simpson(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//////// Composite_Trapezoidal ///////////

router.get('/showComposite_Trapezoidal', function(req, res, next) {
 
  Composite_Simpson.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/Composite_Trapezoidal',(req,res)=>{
  console.log(req.body);
  let doc = new Composite_Trapezoidal(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
//////// Simpson ///////////

router.get('/showSimpson', function(req, res, next) {
 
  Simpson.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/Simpson',(req,res)=>{
  console.log(req.body);
  let doc = new Simpson(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//////// Trapzoidal ///////////

router.get('/showTrapzoidal', function(req, res, next) {
 
  Trapzoidal.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/Trapzoidal',(req,res)=>{
  console.log(req.body);
  let doc = new Trapzoidal(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//////// Backward_Divided2 ///////////
router.get('/showBackward_Divided2', function(req, res, next) {
 
  Backward_Divided2.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});
router.post('/Backward_Divided2',(req,res)=>{
  console.log(req.body);
  let doc = new Backward_Divided2(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

module.exports = router;
