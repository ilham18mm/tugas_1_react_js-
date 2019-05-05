import React, { Component } from "react";
import List_menu_utama from "../list_data/list_menu_utama"

class Menu_utama extends Component {
  render() {
    return (
      <div>
        <List_menu_utama gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
        
      </div>
    );
  }
}

export default Menu_utama;