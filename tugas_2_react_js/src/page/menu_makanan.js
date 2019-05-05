import React, { Component } from "react";
import List_makanan from "../list_data/list_makanan"

class Menu_makanan extends Component {
  render() {
    return (
      <div>
        <h3>List makanan yang disediakan :</h3>

        <td>
          <List_makanan listMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
        </td>
        <td>
          < List_makanan listMakanan = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
        </td>
        <td>
          < List_makanan listMakanan ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
        </td>
        <td>
          <List_makanan listMakanan ="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
        </td>
        <td>
          <List_makanan listMakanan ="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
        </td>

      </div>
    );
  }
}

export default Menu_makanan;