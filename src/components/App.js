import React from 'react';

import BreweryCard from './BreweryCard';
import Header from './Header';
import MainImage from './MainImage';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <MainImage />
      <BreweryCard />
      <Footer />
    </div>
  );
}

export default App;
