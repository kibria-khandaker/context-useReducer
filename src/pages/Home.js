import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Home = () => {

    const {
        state: { products },
    } = useProducts();
    // console.log(data);

    return (
        <div className='HOME-PAGE-DIV grid grid-cols-3 gap-6 py-10'>
            {
                products.map((product) => (
                    <ProductCard product={product} />
                ))
            }
        </div>
    );
};

export default Home;