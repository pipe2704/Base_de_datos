const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const esquema = mongoose.Schema


const eschemausuario = new esquema({
    nombre: String,
    identificacion: String,
    perfil: String,
    ciudad: String,
    correo: String,
    tel: String,
    fechaIngreso: String,
    fechaSalida: String,
    descripcion: String,
    visible: Boolean,
    tecnologias: [
        {
            nombre: String,
            nivel: String
        }
    ],
    idusuario: String,
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

//Agregar usuario
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        identificacion: req.body.identificacion,
        perfil: req.body.perfil,
        ciudad: req.body.ciudad,
        correo: req.body.correo,
        tel: req.body.tel,
        fechaIngreso: req.body.fechaIngreso,
        fechaSalida: req.body.fechaSalida,
        descripcion: req.body.descripcion,
        visible: req.body.visible,
        tecnologias: req.body.tecnologias,
        idusuario: req.body.idusuario
    })
    nuevousuario.save()
        .then(() => {
            res.json('Empleado agregado correctamente')
        })
        .catch(err => {
            res.json(err)
        })
})


//Obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({})
        .then(docs => {
            res.send(docs)
        })
        .catch(err => {
            res.send(err)
        })
})


//Obtener data de usuario
router.post('/obtenerdatausuario', (req, res) =>{
    ModeloUsuario.find({idusuario:req.body.idusuario})
        .then(docs => {
            res.send(docs)
        })
        .catch(err => {
            res.send(err)
        })
})


//actualizar usuario
router.post('/actualizausuario', (req, res) => {
    
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        identificacion: req.body.identificacion,
        perfil: req.body.perfil,
        ciudad: req.body.ciudad,
        correo: req.body.correo,
        tel: req.body.tel,
        fechaIngreso: req.body.fechaIngreso,
        fechaSalida: req.body.fechaSalida,
        descripcion: req.body.descripcion,
        visible: req.body.visible,
        tecnologias: req.body.tecnologias
        
    }).then(() => {
        res.send('Empleado actualizado correctamente')
    }).catch(err => {
        res.send(err)
    })
})

router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario})
      .then(() => {
        
      })
      .catch((err) => {
        res.send(err);
      });
  });
  

