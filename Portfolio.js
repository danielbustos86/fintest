
var formulas = require("./HelperFormulas")
module.exports = class Portfolio {

  constructor(fechainicio, fechafin, stock) {
    this.fechainicio = fechainicio;
    this.fechafin = fechafin;
    this.stock = stock
  }
  profit(tipo) {
 
    let rentabilidadFinal
    switch (tipo) {
      case "SIMPLE":
        {
          let rentabilidadini = this.stock.price(this.fechainicio)
          let rentabilidadfin = this.stock.price(this.fechafin)
          let rentabilidadSimple = formulas.rentabilidadSimple(rentabilidadini.price, rentabilidadfin.price)
          rentabilidadFinal= rentabilidadSimple;
        }
        break;
      case "ANUALIZADA":
        {
     
          let anoIni = new Date(this.fechainicio).getFullYear()
          let anoFin = new Date(this.fechafin).getFullYear()

          let anos = formulas.calcularAnos(anoIni,anoFin)
      
          let resultados =[]
          anos.forEach(item=>{
            let iniAux = `${item}-01-01`
            let finAux = `${item}-12-31`
            let rentabilidadini = this.stock.price(iniAux)
            let rentabilidadfin = this.stock.price(finAux)    
            let rentabilidadSimple = formulas.rentabilidadSimple(rentabilidadini.price, rentabilidadfin.price)  
            resultados.push(parseFloat(rentabilidadSimple))
          })

             
          rentabilidadFinal= formulas.rentabilidadAnual(resultados)


        }
        break;
      }

        return rentabilidadFinal

  }



}

