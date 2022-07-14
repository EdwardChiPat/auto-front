import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/header';
import { connect } from 'react-redux';
import CardSummary from '../components/cards/card-summary';

const months = [
  {
    id: "01",
    name: "Enero"
  },
  {
    id: "02",
    name: "Febrero"
  },
  {
    id: "03",
    name: "Marzon"
  },
  {
    id: "04",
    name: "Abril"
  },
  {
    id: "05",
    name: "Mayo"
  },
  {
    id: "06",
    name: "Junio"
  },
  {
    id: "07",
    name: "Julio"
  },
  {
    id: "08",
    name: "Agosto"
  },
  {
    id: "09",
    name: "Septiembre"
  },
  {
    id: "10",
    name: "Octubre"
  },
  {
    id: "11",
    name: "Noviembre"
  },
  {
    id: "12",
    name: "Diciembre"
  }
]

const msi = [12, 24, 36, 60];

const Pago = ({cart, currency}) => {

  const payCars = (e) => {
    console.log("e", e)
  }

  return (
    <>
      <Header notShoppingCart />
      <div className="flex flex-col px-32">
        <h1 className="text-center font-bold text-2xl py-10">PAGO</h1>
        <div className="flex flex-row flex-wrap">
          <form onSubmit={payCars} className="sm:w-2/3 w-full">
            <div className="flex flex-row flex-wrap">
              <div className="flex flex-col sm:w-1/2 w-full p-6">
                <p className="px-2">Nombre(s):</p>
                <input className="border border-black rounded px-2" name="name" required />
              </div>
              <div className="flex flex-col sm:w-1/2 w-full p-6">
                <p className="px-2">Apellido(s):</p>
                <input className="border border-black rounded px-2" name="lastname" />
              </div>
              <div className="flex flex-col sm:w-1/2 w-full p-6">
                <p className="px-2">Número de tarjeta(s):</p>
                <input className="border border-black rounded px-2" name="card" required maxLength="16" />
              </div>
              <div className="flex flex-col sm:w-1/2 w-full p-6">
                <p className="px-2">CVV:</p>
                <input className="border border-black rounded px-2" name="cvv" required maxLength="4" />
              </div>
              <div className="flex flex-col sm:w-1/2 w-full p-6">
                <p className="px-2">Año:</p> 
                <input className="border border-black rounded px-2" name="anio" required maxLength="4" />
              </div>
              <div className="flex flex-col sm:w-1/2 w-full p-6">
                <p className="px-2">Mes:</p>
                <select className="border border-black rounded px-2" name="month">
                  {
                    months.map(item =>
                      <option value={item.id}>{item?.name}</option>  
                    )
                  }
                </select>
              </div>
              <div className="flex flex-row w-full items-center py-6 justify-center">
                <p className="px-2">Enganche:</p>
                <input className="border border-black rounded px-2" name="advanced" />
                <p className="px-2">Cuotas:</p>
                <select className="border border-black rounded px-2" name="msi">
                  {
                    msi.map(item =>
                      <option value={item}>{item}</option>  
                    )
                  }
                </select>
              </div>
            </div>
          </form>
          <CardSummary data={cart} currency={currency} cardWith="w-1/3" payment />
        </div>
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