import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { changePrice } from '../../helper/price';

const Price = ({ price, currency, className }) => {
  const [total, setTotal] = useState(0);

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
  price: PropTypes.number,
  currency: PropTypes.string,
  className: PropTypes.string
}

Price.defaultProps = {
  price: 0,
  currency: 'MXN',
  className: ''
}

export default Price;