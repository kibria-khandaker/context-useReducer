import React from 'react';
import { useProducts } from '../context/ProductProvider';

const Home = () => {

    const {data} = useProducts();
    console.log(data);

    return (
        <div>
            <h1> Home-Page </h1>
        </div>
    );
};

export default Home;