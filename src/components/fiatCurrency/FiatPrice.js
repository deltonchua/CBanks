import React from 'react';
import { useSelector } from 'react-redux';
import { selectFiatChart } from '../../features/fiatCurrency/fiatCurrencySlice';

const FiatPrice = () => {
  const { data, base } = useSelector(selectFiatChart);
  return (
    <div className='current-price'>
      <span>
        1 {base} ={' '}
        {data
          ? data[data.length - 2].y.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 6,
            })
          : '?'}{' '}
        USD
      </span>
    </div>
  );
};

export default FiatPrice;
