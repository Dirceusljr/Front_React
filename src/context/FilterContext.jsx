import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/products";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([]);
    const [ allProducts, setAllProducts ] = useState([]);

    const getAllProductsList = async () => {
        const response = await getProducts();
        setProducts(response.content);
        setAllProducts(response.content);
    }

    useEffect(() => {
        getAllProductsList();
    }, []);

    useEffect(() => {
        if (filteredProducts.length > 0) {
          setProducts(filteredProducts);
        } else {
          setProducts(allProducts);
        }
      }, [filteredProducts]);

    return (
        <FilterContext.Provider value={{ products, setProducts, setFilteredProducts, filteredProducts, allProducts }}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterProvider, FilterContext };