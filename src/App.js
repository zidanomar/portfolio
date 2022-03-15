import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Hero } from './components/Sections';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxW='container.xl'>
        <Hero />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
