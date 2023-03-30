import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import profileDB from '../../db/profileDB';
import cryptoDB from '../../db/cryptoDB.json';

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState: {
    id: null,
    profile: null,
    chart: null,
    range: null,
    tickers: [],
    loading: true,
    hasMoreTickers: false,
  },
  reducers: {
    setID: (state, action) => {
      state.id = action.payload;
    },
    fetchProfile: (state, action) => {
      state.profile = action.payload;
    },
    fetchChart: (state, action) => {
      state.chart = action.payload;
    },
    setRange: (state, action) => {
      state.range = action.payload;
    },
    fetchTickers: (state, action) => {
      state.tickers = [...state.tickers, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHasMoreTickers: (state, action) => {
      state.hasMoreTickers = action.payload;
    },
    resetDetails: (state) => {
      state.profile = null;
      state.chart = null;
      state.tickers = [];
    },
  },
});

export const {
  setID,
  fetchProfile,
  fetchChart,
  setRange,
  fetchTickers,
  setLoading,
  setHasMoreTickers,
  resetDetails,
} = exchangeSlice.actions;

export const fetchExchangeProfile = (id) => async (dispatch) => {
  dispatch(setID(id));
  let profile;
  try {
    const dbProfile = profileDB['exchanges'][id];
    if (dbProfile) throw new Error('Not Found');

    const res = await axios.get(
      `https://api.coingecko.com/api/v3/exchanges/${id}`
    );
    profile = {
      image: res.data.image,
      name: res.data.name,
      description: res.data.description,
      trust_score_rank: res.data.trust_score_rank,
      centralized: res.data.centralized,
      website: res.data.url,
      country: res.data.country,
      year: res.data.year_established,
      twitter: res.data.twitter_handle,
      facebook: res.data.facebook_url,
      telegram: res.data.telegram_url,
      reddit: res.data.reddit_url,
      slack: res.data.slack_url,
      other_url_1: res.data.other_url_1,
      other_url_2: res.data.other_url_2,
      trade_volume_24h_btc: res.data.trade_volume_24h_btc,
    };
  } catch (err) {
    console.log(err.message);
    const dbProfile = profileDB['exchanges'][id];
    if (!dbProfile) return;
    profile = dbProfile.profile;
    const api =
      id === 'worldtradeshub'
        ? 'https://api.woth.io'
        : 'https://api.ampmcx.com';
    try {
      const res1 = await axios.get(`${api}/api/v1/ticker`);
      const { lastPrice: BTCPrice } = res1.data.data.ticker.find(
        (t) => t.tradingPair === 'BTC_USDT'
      );
      const tradeVolume = res1.data.data.ticker.reduce(
        (a, b) => a + b.quoteVol,
        0
      );
      profile = { ...profile, trade_volume_24h_btc: tradeVolume / BTCPrice };
    } catch (err) {
      console.log(err.message);
    }
  } finally {
    dispatch(fetchProfile(profile));
    dispatch(setLoading(false));
  }
};

export const fetchExchangeChart = (id, range) => async (dispatch) => {
  dispatch(setRange(range));
  let chart;
  try {
    const dbProfile = profileDB['exchanges'][id];
    if (dbProfile) throw new Error('Not Found');

    const res = await axios.get(
      `https://api.coingecko.com/api/v3/exchanges/${id}/volume_chart?days=${range}`
    );
    chart = res.data.map((volume) => ({
      x: volume[0],
      y: parseFloat(volume[1]),
    }));
  } catch (err) {
    console.log(err.message);
    const dbProfile = profileDB['exchanges'][id];
    if (!dbProfile) return;
    const { interval, start, end } = deriveChartParams(range);
    const api =
      id === 'worldtradeshub'
        ? 'https://api.woth.io'
        : 'https://api.ampmcx.com';
    const multiplier = 4.5;
    try {
      const res1 = await axios.get(
        `${api}/api/v1/candle/BTC_USDT?interval=${interval}&start=${start}&end=${end}`
      );
      chart = res1.data.data.candle.map((c) => ({
        x: new Date(c[5]).getTime(),
        y: c[6] * multiplier,
      }));
    } catch (err) {
      console.log(err.message);
    }
  } finally {
    dispatch(fetchChart(chart));
  }
};

const deriveChartParams = (range) => {
  let interval, start;
  const end = Date.now();
  const MIN = 60 * 1000;
  const HOUR = 60 * MIN;
  const DAY = 24 * HOUR;

  switch (range) {
    case '1':
      start = end - DAY;
      interval = '3m';
      break;
    case '7':
      start = end - DAY * 7;
      interval = '15m';
      break;
    case '14':
      start = end - DAY * 14;
      interval = '30m';
      break;
    case '30':
      start = end - DAY * 30;
      interval = '2h';
      break;
    case '90':
      start = end - DAY * 90;
      interval = '4h';
      break;
    case '180':
      start = end - DAY * 180;
      interval = '8h';
      break;
    case '365':
      start = end - DAY * 365;
      interval = '1d';
      break;
    default:
      break;
  }

  return { interval, start, end };
};

export const fetchExchangeTickers = (id, page = 1) => async (dispatch) => {
  try {
    const dbProfile = profileDB['exchanges'][id];
    if (dbProfile) throw new Error('Not Found');

    const res = await axios.get(
      `https://api.coingecko.com/api/v3/exchanges/${id}/tickers?page=${page}&order=volume_desc`
    );
    if (res.data.tickers && res.data.tickers.length > 1) {
      const data = res.data.tickers.map((ticker) => {
        const crypto = cryptoDB.find((c) => c.id === ticker.coin_id) || {
          id: null,
          name: null,
          image: null,
        };
        return {
          id: crypto.id,
          name: crypto.name,
          image: crypto.image,
          crypto_id: ticker.coin_id,
          base: ticker.base,
          target: ticker.target,
          price: ticker.converted_last.usd,
          volume: ticker.converted_volume.usd,
          spread: ticker.bid_ask_spread_percentage,
          last_traded_at: ticker.last_traded_at,
          trade_url: ticker.trade_url,
        };
      });
      dispatch(fetchTickers(data));
      dispatch(setHasMoreTickers(true));
    } else {
      dispatch(setHasMoreTickers(false));
    }
  } catch (err) {
    console.log(err.message);
    const dbProfile = profileDB['exchanges'][id];
    if (!dbProfile) return;
    const api =
      id === 'worldtradeshub'
        ? 'https://api.woth.io'
        : 'https://api.ampmcx.com';
    const tradeUrl =
      id === 'worldtradeshub'
        ? 'https://www.woth.io/trade'
        : 'https://www.ampmcx.com/trade';
    try {
      const res1 = await axios.get(`${api}/api/v1/summary`);
      const tickers = res1.data.data.summary.map((ticker) => {
        const crypto = cryptoDB.find(
          (c) => c.id === deriveCryptoID(ticker.baseAssetName)
        ) || {
          id: null,
          name: null,
          image: null,
        };
        return {
          id: crypto.id,
          name: crypto.name,
          image: crypto.image,
          crypto_id: crypto.id,
          base: ticker.baseAsset,
          target: ticker.quoteAsset,
          price: ticker.lastPrice,
          volume: ticker.quoteVol,
          spread:
            ((ticker.lowestAsk - ticker.highestBid) / ticker.lowestAsk) * 100,
          last_traded_at: ticker.lastTraded,
          trade_url: `${tradeUrl}/${ticker.baseAsset}_${ticker.quoteAsset}`,
        };
      });
      dispatch(fetchTickers(tickers));
    } catch (err) {
      console.log(err.message);
    }
  }
};

const deriveCryptoID = (asset) => {
  let id = asset.replace(' ', '-').toLowerCase();
  switch (id) {
    case 'xrp':
      id = 'ripple';
      break;
    case 'bnb':
      id = 'binancecoin';
      break;
    case 'swarm':
      id = 'swarm-bzz';
      break;
    default:
      break;
  }
  return id;
};

export const selectExchangeID = (state) => state.exchange.id;
export const selectExchangeProfile = (state) => state.exchange.profile;
export const selectExchangeChart = (state) => state.exchange.chart;
export const selectExchangeChartRange = (state) => state.exchange.range;
export const selectExchangeTickers = (state) => state.exchange.tickers;
export const selectLoading = (state) => state.exchange.loading;
export const selecthasMoreTickers = (state) => state.exchange.hasMoreTickers;

export default exchangeSlice.reducer;
