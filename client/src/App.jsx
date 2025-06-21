import React from 'react'
import Homepage from './pages/Homepage'
import Navbar from './sections/Navbar'
import './index.css';
import Footer from './sections/Footer';
import LenisProvider from './components/LenisProvider';
import Preloader from './components/Preloader';

const App = () => {
  return (
    <>
    <Preloader />
    <LenisProvider />
    <Navbar />
    <Homepage />
    <Footer />
    </>
  )
}

export default App