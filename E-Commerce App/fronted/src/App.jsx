import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Collection from './Collection'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Cart from './Cart'
import Contact from './Contact'
import Login from './Login'
import PlaceOrder from './PlaceOrder'
import Orders from './Orders'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<collection/>} />\
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} /> 
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} /> 
      </Routes>
      
    </div>
  )
}

export default App

