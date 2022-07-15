import React from 'react';
import PropTypes from 'prop-types';
import Price from '../price/price';
import { useDispatch } from 'react-redux'
import { deleteCartById } from '../../store/shopping/reducer';

const CardDelete = ({data, cardWith, currency}) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteCartById(data?._id))
  }

  return (
    <div className={`flex flex-col p-4 sm:${cardWith} w-full shadow-xl shadow-grisaceo-200 mx-2`}>
      <div className="flex flex-col p-6">
        <h1 className="text-lg font-bold py-2">{data?.name}</h1>
        <div className="flex flex-row justify-between">
          <h2 className="text-base py-2 text-left">{data?.maker}</h2>
          {data?.selectedColor && <h2 className="text-base py-2">{data?.selectedColor}</h2>}
        </div>
        <Price price={data} currency={currency} className="font-bold text-right"/>
        <div className="py-2">
          <button type="button" className="p-2 my-1 bg-cyan-500 text-white rounded-2xl uppercase w-full" onClick={deleteItem}>Eliminar</button>
        </div>
      </div>
    </div>
  )
};

CardDelete.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  cardWith: PropTypes.string,
  currency: PropTypes.string
}

CardDelete.defaultProps = {
  cardWith: 'w-1/3',
  currency: 'MXN'
}

export default CardDelete;