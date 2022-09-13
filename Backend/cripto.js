
/**
 * getCripto: devuelve un array con todas las cripto 
 *  
 * RETURN 
 * resultado [
 * idCripto,
 * Cripto
 * ]
 * 
 * 
 */
function getCripto() {
  let resultado = Bakendtr.getCripto();
 
 return resultado;
}

/** searchCripto: Busca Cripto por idCripto
 * 
 * REQUEST 
 * idCripto: Number
 * 
 * RETURN
 * TRUE
 * resultado = {
 * idCripto: Number,
 * cripto: string,
 * fila: Number,
 * status: boolean
 * }
 */
function searchCripto(idCripto) {
    let resultado = Bakendtr.searchCripto(idCripto);
   
   return resultado;
  }