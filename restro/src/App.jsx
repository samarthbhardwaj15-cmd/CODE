import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './section/HeroSection'
import About from './section/about'
import Stats from './section/stats'
import Dishes from './section/dishes'
import Features from './section/features'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
    </>
  )
}

export default App

