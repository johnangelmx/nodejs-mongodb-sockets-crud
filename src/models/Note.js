// Propiedades que se estaran guardando en mongodb
import { Schema, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true, // Guarda la fecha de creacion y actualizacion de la nota 2 propiedades mas que se guardan en la base de datos
})

export default model('Note', schema)