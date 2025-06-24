import React from 'react';
import Homepage from './pages/Homepage';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import LenisProvider from './components/LenisProvider';
import Preloader from './components/Preloader';
import './index.css';
import { useModelLoading } from './hooks/useModelLoading';

const App = () => {
  const { isLoading } = useModelLoading();

  return (
    <>
      <Preloader isLoading={isLoading} />
      <LenisProvider />
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
};

export default App;
