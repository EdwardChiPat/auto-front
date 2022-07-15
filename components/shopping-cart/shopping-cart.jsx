import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faExclamationTriangle, faClose } from '@fortawesome/free-solid-svg-icons'
import Table from '../table/table';
import { connect, useDispatch } from 'react-redux';
import { resetCart } from '../../store/shopping/reducer';
import Link from 'next/link';

const titles = [
  "Imagen",
  "Nombre",
  "Precio"
]

const ShoppingCart = ({ cart, currency }) => {
  const dispatch = useDispatch();
  const [viewCart, setViewCart] = useState(false);

  useEffect(() => {
    if (cart.length > 0){
      setViewCart(true);
    }
  }, [cart])

  const showCart = () => {
    setTimeout(() => {
      setViewCart(true);
    }, 200);
  }

  const hiddenCart = () => {
    setViewCart(false);
  }

  return (
    <div className="flex flex-row items-center">
      <FontAwesomeIcon icon={faCartShopping} size="lg" className="p-4" onMouseEnter={showCart} onClick={showCart}/>
      {viewCart && (
        <div className="absolute sm:top-14 top-20 right-0 sm:left-auto left-0 z-50 sm:mx-0 mx-2" onMouseLeave={hiddenCart}>
          <div className="flex flex-col p-6 bg-grisaceo-300 shadow-2xl rounded-lg">
          {cart.length < 1 ?
            <>
              <div className="sm:hidden block text-right"><FontAwesomeIcon icon={faClose} size="1x" onClick={hiddenCart} /></div>
              <FontAwesomeIcon icon={faExclamationTriangle} size="2x" className="text-red-600"/> No tienes productos en tu carrito
            </>
            :
            <>
              <div className="sm:hidden block text-right"><FontAwesomeIcon icon={faClose} size="1x" onClick={hiddenCart} /></div>
              <Table titles={titles} data={cart} currency={currency} />
              <div className="flex flex-col p-2">
                <button type="button" className="p-2 my-1 bg-red-500 border border-gray-500 rounded" onClick={() => dispatch(resetCart([]))} >Vaciar carrito</button>
                <Link href="/resumen"><button type="button" className="p-2 my-1 border border-gray-500 text-black text-center rounded bg-grisaceo-100">Pagar</button></Link>
              </div>
            </>
          }
          </div>
        </div>
      )}
    </div>
  );
}

ShoppingCart.propTypes = {
  cart: PropTypes.instanceOf(Array).isRequired,
  currency: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const { currency, cart } = state.data;
  return { currency, cart };
}

export default connect(mapStateToProps, null)(ShoppingCart);