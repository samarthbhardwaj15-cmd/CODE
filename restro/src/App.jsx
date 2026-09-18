import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './section/HeroSection'
import About from './section/about'
import Stats from './section/stats'
import Dishes from './section/dishes'
import Features from './section/features'
import Bookingprocess from './section/bookingprocess'
import Timeing from './section/Timeing'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <Bookingprocess />
      <Timeing />
    </>
  )
}

export default App

