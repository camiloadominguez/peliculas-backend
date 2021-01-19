const {model,Schema} = require('mongoose');

const peliculaEsquema = new Schema({
    titulo:String,
    descripcion:String, 
    duracion:String, 
    categorias:[
        String
    ],
    link_yt:String, 
    fecha_de_estreno:Date,
    // lista_de_películas:String,
    path_img:String,
    vista:Boolean,
    calificacion:Number
})

module.exports = model('Pelicula', peliculaEsquema);
