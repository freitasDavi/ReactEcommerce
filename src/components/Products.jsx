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
                const response = await axios.get("http://localhost:5002/api/products?category=coat");

                console.log(response);
            } catch (err) {

            }
        };

        getProducts();
    }, [category]);

    return (
        <Container>
            {popularProducts.map(product => (
                <Product item={product} key={product.id} />
            ))}
        </Container>
    )
}

export default Products;