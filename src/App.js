import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';

const App = ()=> {
  return (
    <>
      <Navbar/>
      <Home/>
      <About />
      <Services/>
    </>
  );
};

export default App;