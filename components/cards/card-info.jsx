import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import imageCard from '../../public/img/mazda.jpeg';
import Price from '../price/price';
import { connect, useDispatch } from 'react-redux'
import { setCart } from '../../store/shopping/reducer';
import { nanoid } from '@reduxjs/toolkit';

const CardInfo = ({data, cardWith, currency}) => {
  const refModal = useRef(null)
  const dispatch = useDispatch();
  const [dataEdit, setDataEdit] = useState(data);
  const [color, setColor] = useState("");

  /**
    * Función para agregar el producto al store
  */
  const addShoppingCart = () => {
    if (color !== "" || data?.models.length === 0){
      dispatch(setCart(dataEdit));
    } else {
      alert("Por favor, selecciona un color para continuar")
    }
  }

  /**
    * Función para cambiar el color del producto
    * @param {Event} e - Evento del onClick
  */
  const changeColor = (e) => {
    setColor(e.target.value)
    if (e.target.value !== ""){
      setDataEdit({selectedColor: e.target.value, ...data})
    }
  }

  return (
    <>
      <div className={`${cardWith} lg:w-1/3 p-4`}>
        <div className="flex flex-col shadow-2xl shadow-gray-400 bg-grisaceo-100 rounded-b-2xl">
          <Image src={imageCard} alt={data?.name} />
          <div className="flex flex-col p-6">
            <h1 className="text-lg font-bold py-2">{data?.name}</h1>
            <h2 className="text-base py-3">{data?.maker}</h2>
            {data?.models.length > 0 && (
              <select className="bg-neutral-700 text-white rounded-xl p-1" onChange={changeColor} value={color}>
                <option value="">Selecciona un color</option>
                {data?.models.map(item =>
                  <option key={nanoid()} value={item}>{item}</option>
                )}
              </select>
            )}
            <Price
              price={data}
              currency={currency}
              className="text-right font-bold text-base py-2"
            />
            <div className="py-2">
              <button type="button" className="p-2 my-1 bg-grisaceo-400 text-white rounded-2xl uppercase w-full" onClick={addShoppingCart} >agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

CardInfo.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  cardWith: PropTypes.string
}

CardInfo.defaultProps = {
  cardWith: 'w-1/3'
};

function mapStateToProps(state) {
  const { currency } = state.data;
  return { currency };
}

export default connect(mapStateToProps, null)(CardInfo);