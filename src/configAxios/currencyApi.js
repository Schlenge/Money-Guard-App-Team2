import axios from 'axios';

const YOUR_APP_ID = '8af089e06abd4dd699dbb2c43fb15320';

export async function getCurrentExchangeRate() {
    const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${YOUR_APP_ID}`;
    
    try {
        const response = await axios.get(apiUrl);
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
