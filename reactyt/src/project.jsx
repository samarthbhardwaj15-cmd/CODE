import React from 'react'
import  "./project.css"
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Agence from './pages/Agence'
// import Projects from './pages/Projects'


const project = () => {
    return (
        <>
        <div className='text-white'>
            <Link className='text-blue-500 mr-5 text-sm to='/'>Home</Link>
            <Link className='text-blue-500 mr-5 text-sm to='/>Agence</Link>
            <Link className='text-blue-500 mr-5 text-sm to='/'>Project</Link>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/agence' element={<Agence />} />
                <Route path='/projects' element={<project />} />
            </Routes>
            </div>  
        </>
    )
    
}
export default project