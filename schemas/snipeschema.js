//Mongoose usa SCHEMA o Esquemas.. aqui crearemos un ESQUEMA simple llamado SNIPE
//Que funciona para LOG de Mensajes Borrados.

//Creamos el SCHEMA y llamamos a Mongoose
const { Message } = require("discord.js")
const { Schema, model } = require("mongoose")

//Crearemos el SNIPE y llamaremos a SCHEMA.
const snipe = new Schema({
    //Filtraremos los Canales por ID
    channelId: {
        //Cada ESQUEMA DE UN CANAL POSEE VARIOS TIPOS.
        //STRING: CADENA DE TEXTO, NUMBER: NUMEROS, BOOLEAN: VERDADERO O FALSO.
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})
//A hora Exportaremos TODO el comando con nuestro Module.Exports
module.exports = model("snipeschema", snipe)
