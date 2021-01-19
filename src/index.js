const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/peliculas.routes'));

// mongoose.connect('mongodb://localhost:27017/peliculas',{
mongoose.connect('mongodb+srv://Admin_coffee:D7Vehv7ahP3LUGH6@cluster0.g3jco.mongodb.net/peliculas?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.catch(err => console.error(err))

mongoose.connection.once('open', _=>{
    console.log('Base de datos conectada');
})

mongoose.connection.on('error', err=>{
    console.log(err);
})

app.listen(port,()=>{
    console.log("servidor corriendo");
})