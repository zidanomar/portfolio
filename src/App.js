import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { About, Hero, Proficiency } from './components/Sections';
import Project from './components/Sections/Project/Project';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Proficiency />
      <Project />
      <Footer />
    </React.Fragment>
  );
}

export default App;
