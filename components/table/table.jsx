import React from 'react';
import PropTypes from 'prop-types';
import Price from '../price/price';
import Image from 'next/image'
import imageCard from '../../public/img/mazda.jpeg';
import { nanoid } from 'nanoid';

const Table = ({data, titles, currency}) => {
  return (
    <table className="border-b border-b-gray-600 my-2 text-center">
      <thead>
        <tr>
          {titles.map(item =>
              <th key={nanoid()}>{item}</th>
            )}
        </tr>
      </thead>
      <tbody>
        {data.map(item =>
          <tr key={nanoid()}>
            <td className="p-2"><Image src={imageCard} width="50" height="50" alt={item?.name} /></td>
            <td className="p-2">{item?.name}</td>
            <td className="p-2"><Price className="font-medium text-base" price={item} currency={currency} /></td>
          </tr>  
        )}
      </tbody>
    </table>
  )
};

Table.propTypes = {
  titles: PropTypes.instanceOf(Array).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  currency: PropTypes.string
}

Table.defaultProps = {
  currency: "MXN"
}

export default Table;