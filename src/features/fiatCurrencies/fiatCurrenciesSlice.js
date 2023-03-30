import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import fiatDB from '../../db/fiatDB';

export const fiatCurrenciesSlice = createSlice({
  name: 'fiatCurrencies',
  initialState: {
    fiatList: [],
    rates: null,
    loading: true,
  },
  reducers: {
    fetchFiatList: (state, action) => {
      state.fiatList = [...state.fiatList, ...action.payload];
    },
    fetchRates: (state, action) => {
      state.rates = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  fetchFiatList,
  fetchRates,
  setLoading,
} = fiatCurrenciesSlice.actions;

export const fetchFiatCurrencies = (baseCurrency) => async (dispatch) => {
  try {
    dispatch(fetchFiatList(fiatDB));
  } catch (err) {
    console.log(err.message);
  }
  try {
    const res = await axios.get(
      `https://api.exchangerate.host/latest?base=${baseCurrency}`
    );
    dispatch(fetchRates(res.data.rates));
  } catch (err) {
    console.log(err.message);
  }
  dispatch(setLoading(false));
};

export const selectFiatCurrencies = (state) => state.fiatCurrencies.fiatList;
export const selectRates = (state) => state.fiatCurrencies.rates;
export const selectLoading = (state) => state.fiatCurrencies.loading;

export default fiatCurrenciesSlice.reducer;
