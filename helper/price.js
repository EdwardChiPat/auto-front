/**
  * Función para cambiar el formato de un numero a formato moneda
  * @param {Object | Number} data - Objeto con dos tipos de numero en peso o dolar
  * o un simple numero
  * @param {String} currency - Tipo de moneda que se quiere cambiar
*/
export const changePrice = (data, currency) => {
  let price = data;
  if (typeof data === 'object'){
    if (currency === "USD"){
      price = data?.price_usd;
    } else {
      price = data?.price_mxn;
    }
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });
  return formatter.format(price);
}

/**
  * Función para sumar y cambiar a formato de moneda
  * @param {data} data - Objeto con los números a sumar con la propiedad price_mxn y price_usd
  * @param {String} currency - Tipo de moneda a la que se quiere cambiar
  * @param { Boolean } clean - True si se quiere dejar el número limpio sin formato
*/
export const addPrices = (data, currency, clean = false) => {
  let total = 0;
  data.map(item =>
    currency === "MXN" ?
      total+=parseInt(item?.price_mxn)
    :
      total+=parseInt(item?.price_usd)
  )
  if (clean){
    return total;
  } else {
    return changePrice(total, currency);
  }
}

export default {
  changePrice,
  addPrices
};