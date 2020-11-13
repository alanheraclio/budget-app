const balanceCtrls = {};

balanceCtrls.getBalance = (req,res)=>{
    res.send("get balance")
};

balanceCtrls.postBalance = (req,res)=>{
    res.send("post balance")
};

balanceCtrls.putBalance = (req,res)=>{
    res.send("testing")
};

balanceCtrls.deleteBalance = (req,res)=>{
    res.send("testing")
};


module.exports = balanceCtrls;