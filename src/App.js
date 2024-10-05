import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import ScrollToTop from "react-scroll-to-top";

const App = ()=> {
  return (
    <>
      <Navbar/>
      <Home/>
      <About />
      <Services/>

      <ScrollToTop smooth height='20' width='20' color='#FFFFFF' style={{borderRadius:"90px", backgroundColor:"#38004C"}} />
    </>
  );
};

export default App;