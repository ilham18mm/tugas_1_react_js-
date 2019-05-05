import React, { Component } from "react";

class Halaman_kontak extends Component {
  constructor(props){
    super(props);
    this.state = {
      alamat:'Jl swadaya II swarigading VI, kota Palu Sulawesi tenggah 19288',
      kontak: '082315315828'
    }
  }
  render() {
    return (
      <div>
      <center>
        <h3>alamat: {this.state.alamat}</h3>
        <h4>kontak: {this.state.kontak}</h4>
        
      </center>
      </div>
    );
  }
}

export default Halaman_kontak;