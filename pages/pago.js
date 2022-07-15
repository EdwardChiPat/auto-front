import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/header';
import Meta from '../components/seo/meta';
import { connect } from 'react-redux';
import CardSummary from '../components/cards/card-summary';
import { inputs } from '../helper/static';
import { postApi } from '../services/api';
import { addPrices } from '../helper/price';
import { resetCart, setProducts, setTicket } from '../store/shopping/reducer';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Pago = ({cart, currency}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const postPayment = async (data) => {
    const payment = await postApi('api/pago', data);
    return payment;
  }

  const payCars = async (e) => {
    e.preventDefault();
    let object = {};
    inputs.map(item => {
      object[item?.name] = e.target[item?.name].value 
    })
    object.product = cart;
    object.total = addPrices(cart, currency, true);
    try {
      const response = await postPayment(object);
      if (!response.error){
        dispatch(setTicket(response.data))
        dispatch(resetCart([]));
        dispatch(setProducts([]));
        router.push('/gracias');
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log("error ", e)
    }
  }

  return (
    <>
      <Meta title="PAGO | AUTOS CANCÚN"  description="LISTO PARA COMPRAR" />
      <Header notShoppingCart />
      <div className="flex flex-col sm:px-32 px-2 pb-10">
        <h1 className="text-center font-bold text-2xl sm:py-10 py-3">PAGO</h1>
          <form onSubmit={payCars}>
            <div className="flex flex-row flex-wrap">
              <div className="sm:w-2/3 w-full py-4">
                <div className="flex flex-row flex-wrap">
                  {inputs.map(item =>
                    item?.type === 'select' ?
                      <div className="flex flex-col sm:w-1/2 w-full sm:p-6 p-2">
                        <p className="px-2">{item?.title}</p>
                        <select className="border border-black rounded px-2" name={item?.name}>
                          {
                            item?.content.map(row =>
                              <option value={row.id}>{row?.name}</option>  
                            )
                          }
                        </select>
                      </div>
                    :
                      <div className="flex flex-col sm:w-1/2 w-full sm:p-6 p-2">
                        <p className="px-2">{item?.title}</p>
                        {console.log("required", item?.required)}
                        <input className="border border-black rounded px-2" name={item?.name} maxLength={item?.maxLength} required={item?.required === undefined ? true : false} />
                      </div>
                  )}
                </div>
              </div>
              <CardSummary data={cart} currency={currency} cardWith="w-1/3" payment />
            </div>
          </form>
      </div>
    </>
  )
};

Pago.propTypes = {
  cart: PropTypes.instanceOf(Array).isRequired,
  currency: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const { currency, cart } = state.data;
  return { currency, cart };
}

export default connect(mapStateToProps, null)(Pago);