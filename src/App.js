import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';

function App() {

  let fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header 
        titulo = 'Tienda Virtual'
      />

      <Productos />
      
      <Footer
        fecha = { fecha }
      />
    </Fragment>
  );
}

export default App;
