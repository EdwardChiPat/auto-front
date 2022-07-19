import React, { useEffect, useState } from 'react';
import ShoppingCart from '../shopping-cart/shopping-cart';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { setCurrency } from '../../store/shopping/reducer';
import Link from 'next/link';
import { nanoid } from '@reduxjs/toolkit';

const currencys = ["MXN", "USD"];

const Header = ({ notShoppingCart, currency }) => {

  const [selectedCurrency, setSelectedCurrency] = useState(currency)
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedCurrency(currency);
  }, [currency])

  /**
    * Función para cambiar la moneda del sitio
    * @param {Event} e - Evento del onClick
  */
  const changeCurrency = (e) => {
    dispatch(setCurrency(e.target.value));
  }

  return (
    <nav className="sm:px-32 px-0 sticky top-0 z-50 bg-grisaceo-500 bg-opacity-80">
      <ul className="flex flex-row items-center sm:justify-between justify-around text-white relative">
        <li className="cursor-pointer" ><Link href="/"><img src="/img/logo-header.png" width="100" height="100" /></Link></li>
        <li className="flex flex-row">
          {!notShoppingCart && <ShoppingCart />}
          <select onChange={changeCurrency} className="bg-indigo-400 bg-opacity-0" value={selectedCurrency}>
            {currencys.map(item => 
              <option key={nanoid()} value={item}>{item}</option>  
            )}
          </select>
        </li>
      </ul>
    </nav>
  );
}

Header.propTypes = {
  notShoppingCart: PropTypes.bool,
  currency: PropTypes.string.isRequired
}

Header.defaultProps = {
  notShoppingCart: false
}

function mapStateToProps(state) {
  const { currency } = state.data;
  return { currency };
}

export default connect(mapStateToProps, null)(Header);