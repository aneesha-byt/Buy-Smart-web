import axios from "axios";

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts =async()=>{

const response = await axios.get(`${BASE_URL}/Products`)

return response.data;

}

export const getProductCategories =async()=>{

    const response = await axios.get(`${BASE_URL}/Products/categories`)
    
     return response.data;
    
    
    }
