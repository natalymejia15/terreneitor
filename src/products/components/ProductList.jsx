import React, { useEffect, useState } from "react";
import { Typography, Box, List, Divider } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductList = () => {

const [products, setProducts] = useState([]);

// Fetch the list of products and see the data
useEffect(() => {
  fetch(`https://product-hunt-18dcc2.can.canonic.dev/api/products`)
    .then((res) => res.json())
    .then((json) => json?.data)
    .then((products) =>
      Array.isArray(products) ? setProducts(products) : null
    );
}, []);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          marginTop: 3,
          marginBottom: 2,
          color: "#4b587c",
          "&:hover": {
            color: "#da552f",
          },
        }}
      >
        Products
      </Typography>

      <List>
        {products.map((product) => {
          return (
            <Box>
                <List>
                    {products.map((product) => {
                        return (
                        <Box>
                            <ProductItem {...product}></ProductItem>
                            <Divider />
                        </Box>
                        );
                    })}
                </List>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default ProductList;