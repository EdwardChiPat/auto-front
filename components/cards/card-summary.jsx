import React from 'react';
import PropTypes from 'prop-types';
import Price from '../price/price';
import { addPrices } from '../../helper/price';
import Link from 'next/link';

const CardSummary = ({ data, cardWith, currency, payment }) => {
  return (
    <div className={`flex flex-col p-4 sm:${cardWith} w-full rounded-2xl border border-gray-700`}>
      <div className="flex flex-col p-6">
        <h1 className="text-lg font-bold py-2">Resumen de compra: {data?.length} producto(s)</h1>
        {data.map(item =>
          <div className="flex flex-row border-b border-b-zinc-400 justify-between py-2">
            <p>1 {item?.name}</p>
            {item?.selectedColor && <p>{item?.selectedColor}</p>}
            <Price price={item} currency={currency} />
          </div>
        )}
        <div className="py-2 text-center border-b border-b-zinc-400">
          <p className="font-semibold" >{addPrices(data, currency)}</p>
        </div>
        {payment ?
            <div className="py-2">
              <button type="submit" className="p-2 my-1 bg-cyan-500 text-white rounded-2xl uppercase w-full">Pagar</button>
            </div>
          :
            <div className="py-2">
              <Link href="/pago"><button type="button" className="p-2 my-1 bg-cyan-500 text-white rounded-2xl uppercase w-full">Comprar</button></Link>
            </div>
        }
      </div>
    </div>
  )
};

CardSummary.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  cardWith: PropTypes.string,
  currency: PropTypes.string,
  payment: PropTypes.bool
}

CardSummary.defaultProps = {
  cardWith: 'w-1/3',
  currency: 'MXN',
  payment: false
}

export default CardSummary;