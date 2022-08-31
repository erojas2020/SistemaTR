
/** calcularTasaPublico 
 * REQUEST
 * idTasas: Number (idPaisOrigen + idPaisDestino)
 * orden: string / "origen" or "destino"
 * monto: float
 * colombia: boolean / true or false
 * 
 * Return 
 * 
 * true
 * 
 * Array{
 * calculo_tasa1: float,
 * calculo_tasa2: float,
 * tasa1: float, 
 * tasa2: float}
 * 
 * false
 * error{status: false, mensaje: string}
*/
function calcularTasaPublico(datos) {
    let resultado = Bakendtr.calcularTasaPublico(datos);
   
   return resultado;
  }