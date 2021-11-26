let portafolio = require ("./Portfolio"); 
let stock = require ("./Stock"); 
var datos = require('./Mockup.js')
let stockRegister = require ("./StockRegister"); 


let data = datos.stockBD;



//Poblar un array de stockRegister
let stockRegisterList=[]
data.map(item=>{
    let stockregisternew = new stockRegister(item.date,item.price)
    stockRegisterList.push(stockregisternew)
})

let stocknew = new stock()
stocknew.prices = stockRegisterList

let fecha_ini =  "2018-04-30"
let fecha_fin =  "2019-06-30"
let porfalolionew = new portafolio(fecha_ini,fecha_fin,stocknew)

console.log("RENTABILIDAD SIMPLE")
console.log(porfalolionew.profit("SIMPLE"))

console.log("RENTABILIDAD ANUALIZADA")
console.log(porfalolionew.profit("ANUALIZADA"))

