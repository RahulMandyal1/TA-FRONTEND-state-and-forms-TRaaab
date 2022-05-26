import React from "react";
export default function Productcard(props) {
  let { productsData, addproductToCart } = props;
  if (productsData.length === 0) {
    return (
      <div className="nomoreproducts">
        <h2> No Products </h2>
        <figure>
          <img src="/static/nomoreproducts.jpg" />
        </figure>
      </div>
    );
  }
  return (
    <>
      {productsData.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <figure className="product-image">
              <img src={"/static/products/" + product.sku + "_1.jpg"} />
              <span className="shipping-container">
                {product.isFreeShipping ? "free shipping" : "no free shipping"}{" "}
              </span>
            </figure>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">
              {product.price + product.currencyFormat}
            </p>
            <button
              className="cart-button"
              id={product.id}
              onClick={addproductToCart}
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </>
  );
}
