import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { About, Hero, Proficiency } from './components/Sections';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Proficiency />
      <Footer />
    </React.Fragment>
  );
}

export default App;
