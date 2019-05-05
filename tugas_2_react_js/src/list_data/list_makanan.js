import React, { Component } from "react";

class List_makanan extends Component {
  constructor(props){
    super(props);
    this.state = {
      datalist: this.props.listMakanan
    }
  }
  render() {
    return (
      <div>
        <img src={this.state.datalist} alt="Produk Makanan" width="150" />
      </div>
    );
  }
}

export default List_makanan;