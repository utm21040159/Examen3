import { ProductModel } from "../model/productoModel"

ProductModel.create({
    name:"Play",
    precio:2000,
    descripcion:"Un play"
},

{
    name:"Xbox",
    precio:10000,
    descripcion:"Juega todo lo que quieras"
}
)



export const test=()=>{
    console.log("Si funciona el controlador")
}