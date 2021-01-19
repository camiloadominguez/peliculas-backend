const express = require("express");
const app = express();
const fileUpload = require('express-fileupload');
const Pelicula = require('../models/pelicula')

app.use(fileUpload())

app.get("/informacion/pelicula/:id",(req,res)=>{
    Pelicula.findById(req.params.id,(err,peliculaDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }
        if(!peliculaDB){
            return res.status(400).json({
                ok:false,
                err:{
                    mensaje:'No hay películas para mostrar'
                }
            })
        }
        res.status(200).json(peliculaDB)
    })
})
app.put("/informacion/pelicula/:id",(req,res)=>{
    Pelicula.findByIdAndUpdate(req.params.id,{calificacion:req.body.calificacion, vista:req.body.vista},{new:true},(err,peliculaDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }
        if(!peliculaDB){
            return res.status(400).json({
                ok:false,
                err:{
                    mensaje:'No hay películas para mostrar'
                }
            })
        }
        res.status(200).json(peliculaDB)
    })
})
app.get("/peliculas",(req,res)=>{
    Pelicula.find({},(err,peliculasDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }
        if(!peliculasDB){
            return res.status(400).json({
                ok:false,
                err:{
                    mensaje:'No hay películas para mostrar'
                }
            })
        }
        res.status(200).json(peliculasDB)
    })
})
app.get("/peliculas/buscar/:text",(req,res)=>{
    Pelicula.find({ $text: { $search: req.params.text } },(err,peliculasDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }
        if(!peliculasDB){
            return res.status(400).json({
                ok:false,
                err:{
                    mensaje:'No hay películas para mostrar'
                }
            })
        }
        res.status(200).json(peliculasDB)
    })
})

app.post('/crear_pelicula',(req,res)=>{
    console.log(req.body);
    let { titulo, descripcion, duracion, categorias, link_yt, fecha_de_estreno } = req.body
    let pelicula = new Pelicula({
        titulo,
        descripcion,
        duracion,
        categorias,
        link_yt,
        fecha_de_estreno,
        vista:false,
        calificacion:0,
    })
    pelicula.save((err,pelicula)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                error:err
            })
        }
        res.json(pelicula)
    })
})
app.post('/update_img/:id',(req,res)=>{
    if(!req.files){
        return res.status(400).json({
            mensaje:"No se ha cargado ningun archivo"
        })
    }
    let img = req.files.img;
    console.log(img.name.split);
    Pelicula.findById(req.params.id,(err,peliculaDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }
        if(!peliculaDB){
            return res.status(400).json({
                ok:false,
                err:{
                    mensaje:'La pelicula no existe'
                }
            })
        }
        let path_img = peliculaDB._id +"."+ img.name.split('.')[img.name.split('.').length-1]

        img.mv(`./src/uploads/${path_img}`,(err)=>{
            if(err){
                return res.status(500).json({
                    err
                })
            }
            peliculaDB.path_img=path_img;
            peliculaDB.save();
            res.json({
                ok:true,
                mensaje:"Archivo subido correctamente"
            })
        })
    })
    
})
app.get("/pelicula/:path",(req,res)=>{
    console.log("pide la img");
    res.sendfile(`./src/uploads/${req.params.path}`);
})
    
module.exports = app;