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