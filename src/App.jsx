import { useState } from 'react';
// import './App.css';
import './css/navbar.css'
import Navbar from './component/Navbar';

import './css/section1.css'
import Section1 from './component/Section1';

import './css/section2.css'
import Section2 from './component/Section2';

import './css/section3.css'
import Section3 from './component/Section3';

import './css/footer.css'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

export default App;
