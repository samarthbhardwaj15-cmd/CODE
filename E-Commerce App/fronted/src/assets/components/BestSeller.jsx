import React, { useEffect } from 'react'
import{ ShopContect } from '../context/ShopContect'
import Title from './Title'

const BestSeller = () => {
    const {products} = useContect(ShopContect);
    const [bestseller, setBestSeller] = useState([]);

    useEffect(()=> {
        const bestProduct = products.filter((items)=>(items.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    }, [])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}></Title>
            <p className='w-3//4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ipsam assumenda esse adipisci, iusto vel quidem quibusdam temporibus reprehenderit earum ex suscipit expedita in eaque ipsum facere, odio libero? Animi.
            </p>
        </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 gap-4 gap-y-6'>
        {
            bestseller.map((items, index)=>( 
                <ProductItem key={index} id={items.-id} name={items.name} image={items.image} price={items.price}></ProductItem>
            ))
        }
       </div>
    </div>
  )
}

export default BestSeller
