import api from "../utils/api";

export const getProducts = async () => {
    const response = await api.get("/products");
    return response.data;
}

export const registerProduct = async (product) => {
    const response = await api.post("/products", product);
    return response.data;
}