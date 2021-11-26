function rentabilidadSimple(rentaini,rentafin)
{
    //Rentabilidad simple = (Capital Final/Capital Inicial)-1 x100
    let rentabilidadSimple = ((rentafin/rentaini)-1)*100
    return rentabilidadSimple.toFixed(2);
}
function rentabilidadAnual(rentabilidades)
{
    const arr = rentabilidades;
    const reducer = (accumulator, curr) => accumulator + curr;
   let suma = arr.reduce(reducer);
   let cantidad = arr.length;


    let rentabilidadAnualizada = Math.pow(suma, 1 / cantidad);
    return rentabilidadAnualizada.toFixed(2);
   
}

function calcularAnos(anoIni,anoFin)
{
    let anos = []
    let dif = anoFin-anoIni;
    if(dif==0)
    {
        return [anoIni]
    }
    let n = 0;
    while (n <= dif) {
        
        let anoAux = anoIni+n
        anos.push(anoAux)         
        
        n ++;
      
      }
      
   return anos 
}

module.exports = {
    rentabilidadSimple,
    rentabilidadAnual,
    calcularAnos
}
