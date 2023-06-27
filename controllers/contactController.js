
const create = (req,res)=>{
  res.status(201).json({message:'post'}),
  console.log(req.body);
}

const geT = (req,res)=>{
    res.status(200).json({message:'get'})
}
const getwithId = (req,res)=>{
    res.status(200).json({message:'get with id'})
}

const replace = (req,res)=>{
    res.status(200).json({message:'replace'})
}
const update = (req,res)=>{
    res.json({message:'update'})
}
const del = (req,res)=>{
    res.json({message:'del'})
}
module.exports = {create,geT,replace,update,del,getwithId};