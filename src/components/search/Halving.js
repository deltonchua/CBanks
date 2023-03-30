import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

const Halving = () => {
  const halvingBlock = 840_000;
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchHeight = async () => {
      try {
        const res = await axios.get(
          'https://api.bitcore.io/api/BTC/mainnet/block/tip'
        );
        setTime(Date.now() + (halvingBlock - res.data.height) * 10 * 60 * 1000);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchHeight();
  }, []);

  return (
    <Fragment>
      <div className='search-title'>
        <i className='material-icons-outlined'>label</i>
        <span>Bitcoin Halving Countdown</span>
      </div>
      <div className='card-grid'>
        <div>
          <FlipClockCountdown to={time} className='flipclock' />
          {time ? (
            <p className='end-date'>{new Date(time).toDateString()}</p>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default Halving;
