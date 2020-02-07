import React from "react";
import styled from "styled-components";

const Product = ({ imgUrl, title, price }) => {
  const integralPrice = ("" + price).split(".")[0];
  const floatingPrice = ("" + price).split(".")[1];
  //   const floatingPrice = (price - Math.floor(price)).toFixed(2);
  console.log("imf", imgUrl);
  const prodImg = require(`../../products/${imgUrl}`);
  return (
    <ProductWrapper>
      <img src={prodImg} width="200" height="200" alt="tshirt" />
      <ProductTitle>{title}</ProductTitle>
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
      <Button>Add to Cart</Button>
    </ProductWrapper>
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
