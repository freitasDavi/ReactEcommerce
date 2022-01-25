import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({category, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get( 
                    category 
                        ? `http://localhost:5002/api/products?category=${category}` 
                        : "http://localhost:5002/api/products");

                setProducts(response.data);
            } catch (err) {

            }
        };

        getProducts();
    }, [category]);

    useEffect(() => {
        category && setFilteredProducts(
            products.filter(product => 
                Object.entries(filters).every(([key, value]) => 
                    product[key].includes(value)
            ))
        )
    }, [products, category, filters]);

    useEffect(() => {
        if(sort === "newest") {
            setFilteredProducts(prev => 
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price + b.price)    
            )
        } else {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price)    
            )
        }
    }, [sort])

    return (
        <Container>
            {category 
                ? 
                    filteredProducts.map(product => (
                        <Product item={product} key={product.id} />
                    ))
                :
                    products.slice(0,6).map(product => (
                        <Product item={product} key={product.id} />
                    ))    
            }
        </Container>

    )
}

export default Products;