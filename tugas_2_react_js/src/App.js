import React from 'react';
import './App.css';
import Header from './page/Header'
import Footer from './page/Footer'
import MenuUtama from './page/menu_utama'
import MenuMakanan from './page/menu_makanan'
import Menu_tentangKami from './page/menu_tentangKami'
import Halaman_kontak from './page/menu_kontak'
function App() {
  return (
    <div className="App">
      <Header />
        <MenuUtama />
        <MenuMakanan />
        <Menu_tentangKami />
        <Halaman_kontak />
        <br />
      <Footer />
    </div>
  );
}

export default App;
