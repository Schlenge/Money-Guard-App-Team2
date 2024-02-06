import axios from 'axios';

const YOUR_APP_ID = '4108a1cd1b614adb88e3d413dc37dbec';

export async function getCurrentExchangeRate() {
    const apiUrl = `https://openexchangerates.org/api/latest.json`;
    
    try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Token ${YOUR_APP_ID}`
          }
        });
        const data = response.data;

        if (data && data.rates) {
            return data.rates;
        } else {
            throw new Error('Nu s-au putut obtine datele de la API-ul de curs valutar.');
        }
    } catch (error) {
        console.error('Eroare în obtinerea cursului valutar:', error.message);
        return null;
    }
}
