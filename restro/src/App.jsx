import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './section/HeroSection'
import About from './section/about'
import stats from './section/stats'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <stats />
    </>
  )
}

export default App

