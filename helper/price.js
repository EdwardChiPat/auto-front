export const changePrice = (price,currency) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });

  return formatter.format(price);
}

export const addPrices = (data, currency) => {
  let total = 0;
  data.map(item =>
    currency === "MXN" ?
      total+=parseInt(item?.price_mxn)
    :
      total+=parseInt(item?.price_usd)
  )
  return changePrice(total, currency);
}

export default {
  changePrice,
  addPrices
};