import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import profileDB from '../../db/profileDB';
import supplyDB from '../../db/supplyDB';

export const cryptocurrencySlice = createSlice({
  name: 'cryptocurrency',
  initialState: {
    id: null,
    profile: null,
    chart: null,
    range: null,
    tickers: null,
    loading: true,
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
      state.tickers = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetDetails: (state) => {
      state.profile = null;
      state.chart = null;
      state.tickers = null;
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
  resetDetails,
} = cryptocurrencySlice.actions;

export const fetchCryptoProfile = (id) => async (dispatch) => {
  dispatch(setID(id));
  let profile;
  let tickers = [];
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&community_data=false&developer_data=false&include_exchange_logo=true`
    );
    profile = {
      id: res.data.id,
      symbol: res.data.symbol,
      name: res.data.name,
      description: res.data.description.en,
      website: res.data.links.homepage[0],
      explorer: res.data.links.blockchain_site[0],
      forum: res.data.links.official_forum_url[0],
      chat: res.data.links.chat_url[0],
      announcement: res.data.links.announcement_url[0],
      twitter: res.data.links.twitter_screen_name,
      facebook: res.data.links.facebook_username,
      telegram: res.data.links.telegram_channel_identifier,
      reddit: res.data.links.subreddit_url,
      github: res.data.links.repos_url.github[0],
      image: res.data.image.large,
      market_cap_rank: res.data.market_cap_rank,
      current_price: res.data.market_data.current_price.usd,
      ath: res.data.market_data.ath.usd,
      ath_change_percentage: res.data.market_data.ath_change_percentage.usd,
      ath_date: res.data.market_data.ath_date.usd,
      atl: res.data.market_data.atl.usd,
      atl_change_percentage: res.data.market_data.atl_change_percentage.usd,
      atl_date: res.data.market_data.atl_date.usd,
      market_cap: res.data.market_data.market_cap.usd,
      total_volume: res.data.market_data.total_volume.usd,
      high_24h: res.data.market_data.high_24h.usd,
      low_24h: res.data.market_data.low_24h.usd,
      price_change_percentage_24h:
        res.data.market_data.price_change_percentage_24h,
      price_change_percentage_7d:
        res.data.market_data.price_change_percentage_7d,
      circulating_supply:
        res.data.market_data.circulating_supply || supplyDB[id],
    };
    tickers = res.data.tickers.map((ticker) => ({
      base: ticker.base,
      target: ticker.target,
      exchange: ticker.market.name,
      exchange_id: ticker.market.identifier,
      exchange_logo: ticker.market.logo,
      price: ticker.converted_last.usd,
      volume: ticker.converted_volume.usd,
      spread: ticker.bid_ask_spread_percentage,
      last_traded_at: ticker.last_traded_at,
      trade_url: ticker.trade_url,
    }));
  } catch (err) {
    console.log(err.message);

    const dbProfile = profileDB['assets'][id];
    if (!dbProfile) return;
    profile = dbProfile.profile;

    const exchanges = dbProfile.exchanges;
    if (exchanges.length === 0) return;

    // Fecth Profile & Tickers
    try {
      if (exchanges.find((e) => e === 'ampmcx')) {
        const res1 = await axios.get(
          `https://api.ampmcx.com/api/v1/summary/${profile.symbol}_USDT`
        );
        const {
          tradingPair,
          baseAsset,
          quoteAsset,
          lastPrice,
          quoteVol,
          highPrice,
          lowPrice,
          highestBid,
          lowestAsk,
          priceChangePercent,
          lastTraded,
        } = res1.data.data.summary;
        profile = {
          ...profile,
          current_price: lastPrice,
          total_volume: quoteVol,
          high_24h: highPrice,
          low_24h: lowPrice,
          price_change_percentage_24h: priceChangePercent,
        };
        tickers.push({
          base: baseAsset,
          target: quoteAsset,
          exchange: 'AmPmCx',
          exchange_id: 'ampmcx',
          exchange_logo: 'https://www.ampmcx.com/images/logo.png',
          price: lastPrice,
          volume: quoteVol,
          spread: ((lowestAsk - highestBid) / lowestAsk) * 100,
          last_traded_at: lastTraded,
          trade_url: `https://www.ampmcx.com/trade/${tradingPair}`,
        });
      } else {
        const res2 = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
        );
        const { usd, usd_market_cap, usd_24h_vol, usd_24h_change } = res2.data[
          id
        ];
        profile = {
          ...profile,
          current_price: usd,
          market_cap: usd_market_cap,
          total_volume: usd_24h_vol,
          price_change_percentage_24h: usd_24h_change,
        };
      }
    } catch (err) {
      console.log(err.message);
    }

    // Fecth WorldTradesHub data
    try {
      if (exchanges.find((e) => e === 'worldtradeshub')) {
        const res = await axios.get(
          `https://api.woth.io/api/v1/summary/${profile.symbol}_USDT`
        );
        const {
          tradingPair,
          baseAsset,
          quoteAsset,
          lastPrice,
          quoteVol,
          highPrice,
          lowPrice,
          highestBid,
          lowestAsk,
          lastTraded,
        } = res.data.data.summary;
        profile = {
          ...profile,
          total_volume: profile.total_volume + quoteVol,
          high_24h: Math.max(profile.high_24h || 0, highPrice),
          low_24h: Math.min(profile.low_24h || Infinity, lowPrice),
        };
        tickers.push({
          base: baseAsset,
          target: quoteAsset,
          exchange: 'WorldTradesHub',
          exchange_id: 'worldtradeshub',
          exchange_logo: 'https://www.woth.io/images/logo.png',
          price: lastPrice,
          volume: quoteVol,
          spread: ((lowestAsk - highestBid) / lowestAsk) * 100,
          last_traded_at: lastTraded,
          trade_url: `https://www.woth.io/trade/${tradingPair}`,
        });
      }
    } catch (err) {
      console.log(err.message);
    }

    // Fetch Additional Tickers
    try {
      const otherExchanges = exchanges.filter(
        (e) => e !== 'ampmcx' && e !== 'worldtradeshub'
      );
      if (otherExchanges.length === 0) return;

      const promises = otherExchanges.map((ex) =>
        axios.get(
          `https://api.coingecko.com/api/v3/exchanges/${ex}/tickers?coin_ids=${id}&include_exchange_logo=true&page=1&order=volume_desc`
        )
      );
      const resArr = await Promise.all(promises);
      resArr.forEach((r) => {
        r.data.tickers.forEach((t) =>
          tickers.push({
            base: t.base,
            target: t.target,
            exchange: t.market.name,
            exchange_id: t.market.identifier,
            exchange_logo: t.market.logo,
            price: t.converted_last.usd,
            volume: t.converted_volume.usd,
            spread: t.bid_ask_spread_percentage,
            last_traded_at: t.last_traded_at,
            trade_url: t.trade_url,
          })
        );
      });
    } catch (err) {
      console.log(err.message);
    }
  } finally {
    dispatch(fetchProfile(profile));
    dispatch(fetchTickers(tickers));
    dispatch(setLoading(false));
  }
};

export const fetchCryptoChart = (id, range) => async (dispatch) => {
  dispatch(setRange(range));
  let chart;
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${range}`
    );
    chart = {
      prices: res.data.prices.map((price) => ({ x: price[0], y: price[1] })),
      market_caps: res.data.market_caps.map((mrket_cap) => ({
        x: mrket_cap[0],
        y: mrket_cap[1],
      })),
      total_volumes: res.data.total_volumes.map((total_volume) => ({
        x: total_volume[0],
        y: total_volume[1],
      })),
    };
  } catch (err) {
    console.log(err.message);

    const dbProfile = profileDB['assets'][id];
    if (!dbProfile) return;
    if (!dbProfile.exchanges.find((e) => e === 'ampmcx')) return;

    const { interval, start, end } = deriveChartParams(range);
    try {
      const res1 = await axios.get(
        `https://api.ampmcx.com/api/v1/candle/${dbProfile.profile.symbol}_USDT?interval=${interval}&start=${start}&end=${end}`
      );
      const candle = res1.data.data.candle;
      chart = {
        prices: candle.map((c) => ({
          x: new Date(c[5]).getTime(),
          y: c[4],
        })),
        total_volumes: candle.map((c) => ({
          x: new Date(c[5]).getTime(),
          y: c[7],
        })),
      };
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
    case 'max':
      start = 0;
      interval = '1d';
      break;
    default:
      break;
  }

  return { interval, start, end };
};

export const fetchCryptoTickers = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/tickers?include_exchange_logo=true`
    );
    const data = res.data.tickers.map((ticker) => ({
      base: ticker.base,
      target: ticker.target,
      exchange: ticker.market.name,
      exchange_id: ticker.market.identifier,
      exchange_logo: ticker.market.logo,
      price: ticker.converted_last.usd,
      volume: ticker.converted_volume.usd,
      spread: ticker.bid_ask_spread_percentage,
      last_traded_at: ticker.last_traded_at,
      trade_url: ticker.trade_url,
    }));
    dispatch(fetchTickers(data));
  } catch (err) {
    console.log(err.message);
  }
};

export const selectCryptoID = (state) => state.cryptocurrency.id;
export const selectCryptoProfile = (state) => state.cryptocurrency.profile;
export const selectCryptoChart = (state) => state.cryptocurrency.chart;
export const selectCryptoChartRange = (state) => state.cryptocurrency.range;
export const selectCryptoTickers = (state) => state.cryptocurrency.tickers;
export const selectLoading = (state) => state.cryptocurrency.loading;

export default cryptocurrencySlice.reducer;
