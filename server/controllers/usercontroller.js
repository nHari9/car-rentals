const express = require("express");
const router = express.Router();
const VehUser = require("../models/usermodel");
const Vehtype = require("../models/typemodel")
const Vehmodel =require("../models/model.model")



router.post("/user", async (req, res) => {
    const Udata = await VehUser.create(req.body);
    res.send(Udata);
})
router.post("/type",async(req,res)=>{
    const Vtype = await Vehtype.create(req.body);
    res.send(Vtype);
})
router.post("/model",async(req,res)=>{
    const Vmodel = await Vehmodel.create(req.body);
    res.send(Vmodel);
})


router.get("/data", async (req, res) => {
    const data = await VehUser.find().lean().exec();
    res.status(200).json({data})
})




module.exports = router;