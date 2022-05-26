import React, { Component } from "react";
import Productcard from "./Productcard";
import Aside from "./aside";
import data from "../data";
import Cart from "./Cart";
let productsData = [];
let cartcontainer = document.querySelector(".hideit");
class App extends Component {
  constructor() {
    super();
    this.state = {
      sizeFilters: {
        S: false,
        XS: false,
        M: false,
        L: false,
        X: false,
        XL: false,
        XXl: false,
      },
      userCart: {
        productsId: [],
      },
      displayallProducts: true,
    };
  }

  handleSizeFilter = (event) => {
    event.preventDefault();

    // change displayallProdcts  to false to show the filtered products
    this.setState({
      displayallProducts: false,
    });

    let products = [];
    let value = event.target.innerText;
    let allFilters = { ...this.state.sizeFilters };
    allFilters[value] = !this.state.sizeFilters[value];
    this.setState({
      sizeFilters: allFilters,
    });

    //filtering all the products from the data
    for (let key in this.state.sizeFilters) {
      if (this.state.sizeFilters[key] === true) {
        data.products.forEach((product) => {
          if (product.availableSizes.includes(key)) {
            products.push(product);
          }
        });
      }
    }
    productsData = products;
    productsData = [...new Set(productsData)];
  };

  //  to  add a background color to a button once a user clicks on  a button
  activeButton = (buttonvalue) => {
    if (this.state.sizeFilters[buttonvalue] === true) {
      return "active";
    }
    return "";
  };

  //  to  add a product to user cart
  addproductToCart = ({ target }) => {
    let { id } = target;
    let productsIdArr = this.state.userCart.productsId;
    productsIdArr.push(Number(id));
    this.setState({
      userCart: {
        productsId: productsIdArr,
      },
    });
  };

  // remove a product from the user cart
  removeProductFromCart = ({ target }) => {
    let { id } = target;
    let productsIdArr = this.state.userCart.productsId;
    productsIdArr = productsIdArr.filter((ele) => ele != id);
    this.setState({
      userCart: {
        productsId: productsIdArr,
      },
    });
  };

  // method to get all the user cart product

  getCartProduct = () => {
    let allproductsId = this.state.userCart.productsId;
    let allCartProducts = data.products.filter((product) => {
      if (allproductsId.includes(product.id)) {
        return product;
      }
    });
    return allCartProducts;
  };

  userCart = (event) => {
    console.log(" this is the user cart to show");
    console.log(cartcontainer);
  };
  render() {
    let userCart = this.getCartProduct();
    let totalAmount = 0;
    return (
      <>
        <section className="mainsection">
          {/* all the filters  */}
          <Aside
            activeButton={this.activeButton}
            handleSizeFilter={this.handleSizeFilter}
          />

          {/* // all the products container  */}

          <div className="products-container">
            <Productcard
              productData={
                this.state.displayallProducts === true
                  ? data.products
                  : productsData
              }
              addproductToCart={this.addproductToCart}
            />

            {/* // user cart  */}
            <Cart
              userCart={userCart}
              totalAmount={totalAmount}
              removeProductFromCart={this.removeProductFromCart}
            />
          </div>
        </section>
      </>
    );
  }
}

export default App;
