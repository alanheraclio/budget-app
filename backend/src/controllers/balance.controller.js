const Balance = require("../models/balance.model");

const balanceCtrls = {};

balanceCtrls.getBalance = async (req,res)=>{
    const balance = await Balance.find();
    res.json(balance);
};

balanceCtrls.postBalance = async (req,res)=>{
    const newBalance = new Balance(req.body);
    await newBalance.save();
    console.log(newBalance, "saved in db");
    res.send(newBalance, "saved in db");
};

balanceCtrls.putBalance = (req,res)=>{
    res.send("testing")
};

balanceCtrls.deleteBalance = (req,res)=>{
    res.send("testing")
};


module.exports = balanceCtrls;