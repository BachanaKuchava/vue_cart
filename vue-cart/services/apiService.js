import axios from 'axios';

const API_URL = 'http://localhost:5038/api/vue-cart/GetNotes';

export default {
    async getItems() {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching items:', error);
            throw error;
        }
    }
};
