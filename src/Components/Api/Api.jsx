import axios from 'axios';

export const URL = 'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries';

export const FetchApi = async () => {
    try {
        let response = await axios.get(URL);
        console.log("API First Item:", response.data[0]); // <-- Helpful for debugging
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return [];
    }
};
