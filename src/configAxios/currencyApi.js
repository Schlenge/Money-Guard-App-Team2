import axios from 'axios';

const APP_ID = '4108a1cd1b614adb88e3d413dc37dbec';

export const currencyAPI = axios.create({
  baseURL: `https://openexchangerates.org/api`,
});

export const getCurrencyData = async () => {
  try {
    const { data } = await currencyAPI.get(`/latest.json?app_id=${APP_ID}`);
    if (data && data.rates) {
      return data.rates;
    } else {
      throw new Error(
        'Nu s-au putut obtine datele de la API-ul de curs valutar.'
      );
    }
  } catch (error) {
    console.error('Eroare în obtinerea cursului valutar:', error.message);
    return null;
  }
};
