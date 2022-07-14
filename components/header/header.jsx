import React from 'react';
import ShoppingCart from '../shopping-cart/shopping-cart';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { setCurrency } from '../../store/shopping/reducer';
import Link from 'next/link';

const currencys = ["MXN", "USD"];

const Header = ({ notShoppingCart, currency }) => {
  const dispatch = useDispatch();
  const changeCurrency = (e) => {
    dispatch(setCurrency(e.target.value));
  }

  return (
    <nav className="px-32 relative container">
      <ul className="flex flex-row justify-between flex-wrap items-center">
        <li><Link href="/"><img src="/img/logo-header.png" width="100" height="100" /></Link></li>
        <li className="flex flex-row">
          {!notShoppingCart && <ShoppingCart />}
          <select onChange={changeCurrency}>
            {currencys.map(item => 
              <option value={item} selected={currency === item}>{item}</option>  
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