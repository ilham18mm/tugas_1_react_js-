import React from 'react';
import Menu_utama from './page/menu_utama'
import Menu_produk from './page/menu_produk'
import Menu_kontak from './page/menu_kontak'
import Menu_tentang_kami from './page/menu_tentang_kami'

// import './App.css';

export const Header = () => {
  return(
    <div>
      <h3>Ini Bagian halaman Header</h3>
    </div>
  )
}
export const Footer = () => {
  return(
    <div>
      <footer className="App-footer">
        <h3>ini Bagian halaman footer</h3>
      </footer>
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <Header />
    <Menu_utama />
    <Menu_produk />
    <Menu_kontak />
    <Menu_tentang_kami />
    <Footer />
    </div>
  );
}

export default App;
