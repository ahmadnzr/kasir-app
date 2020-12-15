import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavbarComponent } from "./components";
import {API_URL} from './utils/contants';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus: [],
       categoriYangDiPilih: "Makanan"
    }
  }

  componentDidMount(){
    axios
      .get(API_URL+"products?category.nama="+this.state.categoriYangDiPilih)
      .then(res => {
        const menus = res.data;
        this.setState({menus})
      })
      .catch(error => {
        console.log(error);
      })
  }

  changeCategory = (value) =>{
    this.setState({
      categoriYangDiPilih: value,
      menus: []
    })

    axios
      .get(API_URL+"products?category.nama="+value)
      .then(res => {
        const menus = res.data;
        this.setState({menus})
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  render() {
    const {menus, categoriYangDiPilih} = this.state
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-2">
          <Container fluid>
            <Row>
              <ListCategories changeCategory={this.changeCategory} categoriYangDiPilih={categoriYangDiPilih}/>
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus && menus.map((menu) =>(
                    <Menus 
                      key={menu.id}
                      menu = {menu}/>
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

