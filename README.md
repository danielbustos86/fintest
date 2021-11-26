# fintest

Pasos para ejecutar: 
Clonar el repositorio 
ejecutar node index.js 

Explicación:

index.js script principal que ejecuta un test para las fechas
let fecha_ini =  "2018-04-30"
let fecha_fin =  "2019-06-30"

Se definieron las siguientes clases: 
stockRegister : esta tiene la estructura de una acción "precio" y "día"
stock   : contiene un array de stockRegister y el metodo price que devuelve el precio para el día consultado
Portfolio : clase tiene como atributos fecha inicial, fecha final y stock, el metodo profit tiene 2 opciones 
simple y anualizado dependendiendo del seleccionado se aplican distintas formulas


extras
HelperFormulas : funciones de ayuda para calcular las formulas de rentabilidad simple, anualizada y calcular años entre 2 fechas.
