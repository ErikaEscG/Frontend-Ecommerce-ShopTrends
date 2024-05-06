import axios from "axios";

const API_URL = 'https://ecommerce-json-jwt.onrender.com/'

export const getProducts = () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
    return response.data;
} catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }

}