import React from 'react';
import { Grid } from '@mui/material';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Hrneček', description: 'Hrneček 300ml s potiskem', price: '500', image:''},
    {id: 2, name: 'Svíčka', description: 'Aromatická sojová svíčka', price: '350', image:''},
    {id: 3, name: 'Svatební kniha', description: 'Kniha vašich svatebních postelových hrátek', price: '666', image:''}
]
const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing = {4}>
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