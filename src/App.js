import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {
  About,
  Contact,
  Hero,
  Proficiency,
  Project,
} from './components/Sections';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Proficiency />
      <Project />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
