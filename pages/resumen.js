import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/header';
import CardDelete from '../components/cards/card-delete';
import CardSummary from '../components/cards/card-summary';
import { connect } from 'react-redux';
import Link from 'next/link';
import Meta from '../components/seo/meta';

const Resumen = ({cart, currency}) => {
  return (
    <>
      <Meta title="RESUMEN | AUTOS CANCÚN"  description="DESGLOSE DE COMPRA" />
      <Header notShoppingCart />
      {cart.length === 0 ?
        <div className="flex flex-col justify-center items-center sm:p-64 p-10">
          <h1 className="font-bold text-2xl text-center py-10">Carrito vacío</h1>
          <Link href="/">
            <button type="button" className="font-bold text-xl text-center p-2 bg-cyan-500 rounded text-white">Regresar al inicio</button>
            </Link>
        </div>
        :
        <div className="flex flex-row sm:px-32 px-2 flex-wrap">
          <div className="sm:w-2/3 w-full flex flex-col p-3">
            <h1 className="p-2 border-b border-b-gray-400 w-full text-2xl font-bold">Resumen de compra</h1>
            <div className="flex flex-row overflow-x-auto justify-between p-10">
              {cart.map(item =>
                <CardDelete data={item} cardWith="w-1/3" currency={currency} />
              )}
            </div>
          </div>
          <div className="sm:w-1/3 w-full p-3">
            <CardSummary data={cart} cardWith="w-full" currency={currency} />
          </div>
        </div>
      }
    </>
  )
};

Resumen.propTypes = {
  cart: PropTypes.instanceOf(Array).isRequired,
  currency: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const { currency, cart } = state.data;
  return { currency, cart };
}

export default connect(mapStateToProps, null)(Resumen);