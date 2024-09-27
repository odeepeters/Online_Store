import { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../component/ProductCard';

const Home = () => {

const [product, setProduct] = useState ([]);

useEffect(() => {
    axios
    .get('https://localhost:5000/product')
     .then(response => {
       setProduct(response.data.data);
     })
     .catch(error => {
       console.log(error);
     });
  }, []); // Empty array ensures this effect only runs once on mount)


  return (
    <div className='p-4 max-w-[1300px] mx-auto mt-16'>
        <div className='hero-content text-center'>
            <div className='max-w-md'>
                <h1 className='text-5xl font-bold'>
                    Welcome to <span className='text-teal-700'>codeteria</span>
                </h1>
                <p className='py-6'>Discover the latest products</p>
                <a href="/shop" className='btn btn-primary mt-4'>
                Shop
                </a>
            </div>

        </div>

      <ProductCard product={product} />

    </div>
  )
}

export default Home
