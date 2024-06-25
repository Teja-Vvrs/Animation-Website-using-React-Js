import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marque from './components/Marque'
import About from './components/About'
import Eyex from './components/Eyex'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Featured from './components/Featured'

function App() {
    const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar/>
      <Landingpage/>
      <Marque/>
      <About/>
      <Eyex/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
