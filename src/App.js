import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>
      <Header/>
      <div>
        <Home/>
      </div>
      <Footer/>
    </>
  );
};

export default App;