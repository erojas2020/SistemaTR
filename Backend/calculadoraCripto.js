/** constructorCalcularCripto: Calcula Fiat a Cripto y Cripto a Fiat
 * 
 * REQUEST 
 * tipoOperacion: "compra" || "venta" (string),
 * idPais: Number,
 * idCripto: Number,
 * monto: Float,
 * orden: "fiat" || "cripto"
 * 
 * RETURN
 * 
 * TRUE:
 * resul = { 
    * status: true,
    * calculo: Float,
    * tasa: Float
 * }
 * 
 * FALSE:
 * resul = {
 * status: false,
 * mensaje: "string"
 * }
  */

 function constructorCalcularCripto(datos) {
    let resultado = Bakendtr.constructorCalcularCripto(datos);
   
   return resultado;
  }