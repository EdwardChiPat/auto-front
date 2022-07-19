import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { changePrice } from '../../helper/price';

const Price = ({ price, currency, className }) => {
  const [total, setTotal] = useState(changePrice(price, currency));

  /**
    * Ciclo de vida que se renderiza cuando se cambia de moneda
    * @param {Event} e - Evento del onClick
  */
  useEffect(() => {
    setTotal(changePrice(price, currency));
  }, [currency]);
  
  return (
    <>
      {total === 0 ?
        <p>NaN</p>
        :
        <p className={className} >{total}</p>
      }
    </>
  )
}

Price.propTypes = {
  price: PropTypes.instanceOf(Object).isRequired,
  currency: PropTypes.string,
  className: PropTypes.string
}

Price.defaultProps = {
  currency: 'MXN',
  className: ''
}

export default Price;