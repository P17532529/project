
const create = (req,res)=>{
  res.status(201).json({message:'post'})
}

const get = (req,res)=>{
    res.status(200).json({message:'post'})
}

const replace = (req,res)=>{
    res.status(200).json({message:'post'})
}
const update = (req,res)=>{
    res.json({message:'post'})
}
const del = (req,res)=>{
    res.json({message:'post'})
}
module.exports = {create,get,replace,update,del};