const {userModel} = require("../model/usersModel");

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',  (req, res) =>{
  try{
    userModel.find({}).then((result)=>{
      res.status(200).json({
        status: "success",
        data:result
      });
    }).catch(reason => {
      res.status(404).json({
        status: "error",
        data: reason
      })
    });
  }catch (e) {
    res.status(404).json({
      status: "error",
      message: e.message.toString()
    })
  }
});

router.post("/",function (req,res,next) {
  try {
    const data = req.body;
    const userModels = new userModel(data);
    userModels.save().then(()=>{
      res.status(200).json({
        status: "success",
        messages: "success add users"
      });
    });
  }catch (e) {
    res.status(400).json({
      status: "error",
      messages: e.toString()
    });
  }
});


module.exports = router;
