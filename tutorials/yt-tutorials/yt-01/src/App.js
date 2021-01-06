import React from 'react';
import './App.css';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import TopMenu from './Component/TopMenu/TopMenu';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Header />

      <Content 
        tieude="Content 1" 
        vt1="order-lg-2" 
        img="img/01.jpg" 
        quote="monday"
      />

      <Content 
        tieude="Content 2" 
        img="img/02.jpg" 
        quote="tuesday"
      />

      <Content 
        tieude="Content 3" 
        vt1="order-lg-2" 
        img="img/03.jpg" 
        quote="wednesday"
      />
      
      <Footer />

    </div>
  );
}

export default App;
