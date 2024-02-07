import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrencyData } from '../../configAxios/currencyApi';

const currencyID = {
  usd: 'USD',
  eur: 'EUR',
};

export const fetchCurrency = createAsyncThunk(
  'fetchCurrency',
  async (_, { rejectWithValue }) => {
    try {
      const rates = await getCurrencyData();
      if (rates) {
        const currencyArray = [
          {
            currencyName: currencyID.usd,
            rateBuy: rates.RON,
            rateSell: rates.RON,
          },
          {
            currencyName: currencyID.eur,
            rateBuy: rates.RON / rates.EUR,
            rateSell: rates.RON / rates.EUR,
          },
        ];
        return currencyArray;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
