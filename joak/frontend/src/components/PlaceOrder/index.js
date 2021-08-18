import axios from 'axios';
import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/index';
import useStyles from './PlaceOrderElements';


const products = [
    {id: 1, name: 'Quesabirria Taco', description: 'Birria Taco w/Cheese', price: '$3.50', image: 'https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/6834078/747c5984-caa8-40c7-851c-5f9f236fe616.png'},
    {id: 2, name: 'Birria Taco', description: 'Birria Taco', price: '$2.50', image: 'https://assets.bonappetit.com/photos/5e39ed565400bb0008d95ff5/5:4/w_1265,h_1012,c_limit/0320-Goat-Birria.jpg'},
];

// const getProducts = async () => {
//     const response = await axios.get('http://127.0.0.1:8000/api/products/')
//     setReviews(response.data)
// }

// useEffect(() =>{
//     getProducts();
// }, [])

const Products = () => {
    const classes = useStyles();

        return (
            <main className={classes.content}>
                <div className={classes.toolbar} /> 
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))}
                </Grid>
            </main>
        )
}

export default Products;
