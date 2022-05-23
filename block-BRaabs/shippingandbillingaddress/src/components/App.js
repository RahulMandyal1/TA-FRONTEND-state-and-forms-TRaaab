import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shipping: {
        address: "",
        postalcode: "",
        city: "",
        country: "",
      },
      addDatatoBilling: false,
    };

    this.billingdata = {
      address: "",
      postalcode: "",
      city: "",
      country: "",
    };
  }

  handleEvent = ({ target }) => {
    const { name, value } = target;
    const { shipping } = { ...this.state };
    const currentShipping = shipping;
    currentShipping[name] = value;
    this.setState({ shipping: currentShipping });
  };
  handleCheckbox = (event) => {
    event.preventDefault();
    this.setState({
      addDatatoBilling: true,
    });
  };
  render() {
    const billingData = this.state.addDatatoBilling
      ? this.state.shipping
      : this.billingdata;
    console.log("this is the billingData", billingData);
    return (
      <>
        <header>
          <h1>📑 Learning About Forms</h1>
        </header>
        <section className="form-container">
          <h2>Controlled Component</h2>
          <div className="container">
            <form>
            <legend> shipping address</legend>
              <div className="form-group">
                <label htmlFor="username">username : </label>
                <input
                  type="text"
                  name="address"
                  id="username"
                  onChange={this.handleEvent}
                  placeholder="e.g: New Delhi Vasant vihar"
                />
              </div>
              <div className="form-group">
                <label htmlFor="postalcode">postalcode / zipcode : </label>
                <input
                  type="text"
                  name="postalcode"
                  id="postalcode"
                  onChange={this.handleEvent}
                  placeholder="e.g  175036"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City: </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={this.handleEvent}
                  placeholder="e.g shimla"
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country: </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  onChange={this.handleEvent}
                  placeholder=" e.g india"
                />
              </div>
            </form>

            {/* billing address  */}
            <form>
            <legend> Billing address</legend>
              <div className="flex-row" id="datachange">
                <label htmlFor="billingdata">copy as same as shipping </label>
                <input
                  type="checkbox"
                  onChange={this.handleCheckbox}
                  id="billingdata"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">address : </label>
                <input
                  type="text"
                  name="address"
                  id="username"
                  onChange={this.handleEvent}
                  placeholder="e.g: New Delhi Vasant vihar"
                  value={billingData.address}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postalcode">postalcode / zipcode : </label>
                <input
                  type="text"
                  name="postalcode"
                  id="postalcode"
                  onChange={this.handleEvent}
                  placeholder="e.g  175036"
                  value={billingData.postalcode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City: </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={this.handleEvent}
                  placeholder="e.g shimla"
                  value={billingData.city}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country: </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  onChange={this.handleEvent}
                  placeholder=" e.g india"
                  value={billingData.country}
                />
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default App;
