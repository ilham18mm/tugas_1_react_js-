import React, { Component } from "react";


class List_menu_utama extends Component {
  render() {
    return (
      <div>
        <h1><center> SELAMAT DATANG DI WARUNG NUSANTARA </center></h1>
        <center>
          <img src={this.props.gambar} alt="Masakan Nusantara" width="600" />
        </center>
      </div>
    )
  }
}
export default List_menu_utama;