import React, { useContext, useEffect, useState } from 'react'
import { ShopContect } from '../context/ShopContect'

const LatestCollection = () => {
    const { products } = useContext(ShopContect);
    const [latestProducts,setLatestProducts] = useState([]);
    
    useEffect(()=>{ 
        setLatestProducts(products.slice(0,10));
    }, [])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione ab laboriosam tenetur, impedit velit illo dignissimos rem nam earum sapiente amet maiores dicta, perspiciatis magnam a et nobis saepe?
            </p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
                latestProducts.map((items, index)=>(
                    <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}></ProductItem>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
