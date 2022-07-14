import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import imageCard from '../../public/img/mazda.jpeg';
import Price from '../price/price';
import { connect, useDispatch } from 'react-redux'
import { setCart } from '../../store/shopping/reducer';

const CardInfo = ({data, cardWith, currency}) => {
  const dispatch = useDispatch();
  const [dataEdit, setDataEdit] = useState(data);
  const [color, setColor] = useState("");
  const addShoppingCart = () => {
    if (color !== "" || data?.models.length === 0){
      dispatch(setCart(dataEdit));
    } else {
      alert("Por favor, selecciona un color para continuar")
    }
  }

  const changeColor = (e) => {
    if (e.target.value !== ""){
      setColor(e.target.value)
      setDataEdit({selectedColor: e.target.value, ...data})
    }
  }

  return (
    <div className={`sm:${cardWith} w-full p-4`}>
      <div className="flex flex-col shadow-2xl border border-black">
        <Image src={imageCard} />
        <div className="flex flex-col p-6">
          <h1 className="text-lg font-bold py-2">{data?.name}</h1>
          <h2 className="text-base py-3">{data?.maker}</h2>
          {data?.models.length > 0 && (
            <select className="bg-neutral-700 text-white rounded-xl p-1" onChange={changeColor}>
              <option value="">Selecciona un color</option>
              {data?.models.map(item =>
                <option value={item}>{item}</option>
              )}
            </select>
          )}
          <Price
            price={data}
            currency={currency}
            className="text-right font-bold text-base py-2"
          />
          <div className="py-2">
            <button type="button" className="p-2 my-1 bg-cyan-500 text-white rounded-2xl uppercase w-full" onClick={addShoppingCart} >agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
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