
import { model, Schema } from "mongoose";


const SchemaProduct = new Schema ({
    nombre:{
        type:String
    },

    precio:{
        type:Number
    },

    descrpcion:{
        type:String
    }

})

export const ProductModel = new model ("Productos", SchemaProduct )