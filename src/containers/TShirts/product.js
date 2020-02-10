import React from "react";
import styled from "styled-components";

const Product = ({ product, addCartItem }) => {
  const addToCart = () => {
    addCartItem(product);
  };

  const integralPrice = ("" + product.price).split(".")[0];
  const floatingPrice = ("" + product.price).split(".")[1]
    ? ("" + product.price).split(".")[1]
    : "00";
  return (
    <>
      <ProductWrapper>
        <img
          src={require(`../../products/${product.src_1}`)}
          width="200"
          height="200"
          alt="tshirt"
        />
        <ProductTitle>{product.title}</ProductTitle>
        <Seperator></Seperator>
        <Price>
          $
          <span
            style={{ fontWeight: "bold", fontSize: "1.5em", marginLeft: "1%" }}
          >
            {integralPrice}
          </span>
          .{floatingPrice}
        </Price>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </ProductWrapper>
      <ProductWrapper>
        <img
          src={require(`../../products/${product.src_2}`)}
          width="200"
          height="200"
          alt="tshirt"
        />
        <ProductTitle>{product.title}</ProductTitle>
        <Seperator></Seperator>
        <Price>
          $
          <span
            style={{ fontWeight: "bold", fontSize: "1.5em", marginLeft: "1%" }}
          >
            {integralPrice}
          </span>
          .{floatingPrice}
        </Price>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </ProductWrapper>
    </>
  );
};

const ProductWrapper = styled.div``;
const ProductTitle = styled.p`
  font-size: 0.9em;
  text-align: center;
`;
const Button = styled.button`
  width: 186px;
  height: 40px;
  border-radius: 5%;
  background-color: #303030;
  color: white;
  && {
    :hover {
      background: #e6b800;
    }
  }
`;

const Price = styled.p`
  text-align: center;
`;

const Seperator = styled.div`
  background-color: #e6b800;
  height: 1%;
  width: 10%;
  margin: auto;
`;
export default Product;
