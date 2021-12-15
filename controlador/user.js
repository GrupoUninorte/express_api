const modelo = require('../model/m_user')
const mongoose = require('mongoose')

//obtener datos
exports.getData = (req, res)=>{
    // res.send({data: 'hola estoy en controlador'})
    modelo.find((err, docs)=>{
        if(err){
            res.send({error: err})
        }else{
            res.send({ data: docs })
        }
        
    })
}

//insertar datos
exports.insertData = (req, res)=>{
    const data = req.body
    // modelo.collection.insertOne(data, (err, docs)=>{ 
     modelo.create(data, (err, docs)=>{
        if(err){
            res.send({ error: err },402)
        }else{
            res.send({ item: docs })
        }
    })
}

//funcion que parsea el dato a objectid
const parserId= (x)=>{
    return mongoose.Types.ObjectId(x)
}
//update data
exports.updateData = (req, res)=>{
    const {id} = req.params
    const body = req.body

    modelo.updateOne(
        { _id: parserId(id) },
        body,
        (err, docs)=>{
            if(err){
                res.send({error: err})
            }else{
                res.send({data: docs})
            }
        }
    )
}

//deelete data

exports.deleteData = (req, res)=>{
    const {id} = req.params

    modelo.deleteOne(
        { _id: parserId(id) },
        (err, docs)=>{
            if(err){
                res.send({error: err})
            }else{
                res.send({data: docs})
            }
        }
    )
}