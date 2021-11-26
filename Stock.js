let stockRegister = require ("./StockRegister"); 
module.exports =  class Stock
{

    constructor() {
        
            this.prices = [stockRegister]

      }
 
      price(fecha)
      {
        let fechaquery = new Date(fecha)
      
        const resultado =  this.prices.filter(item => {
             let date = new Date(item.date);

             return date.toLocaleDateString() === fechaquery.toLocaleDateString()
         })


         return resultado[0]

      }

    
}