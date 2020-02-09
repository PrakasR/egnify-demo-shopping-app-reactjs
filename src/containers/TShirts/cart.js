import React, { useState } from "react";
import styled from "styled-components";
import CartItemsContainer from "./cartItemsContainer";

const CartItems = ({ cartElements }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    // return <h1>fasd</h1>;
    // <CartContainer>Hello</CartContainer>;
  };

  return (
    <Wrapper>
      <img
        src={require("../../assets/shopping-cart.png")}
        alt="cartIcon"
        width="40"
        height="40"
        onClick={() => {
          toggleCart();
        }}
        style={{ marginLeft: "75%" }}
      />
      <ItemsCount>{cartElements.length}</ItemsCount>
      {/* {console.log(isCartOpen)} */}
      {isCartOpen && <CartItemsContainer cartElements={cartElements} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* margin-left: 75%; */
  /* background-color: black; */
`;
const ItemsCount = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: #e6b800;
  text-align: center;
  line-height: 2em;
  margin-left: 85%;
  margin-top: -5%;
`;
// const CartContainer = styled.div`
//   width: "200px";
//   height: "400px";
//   z-index: 1;
//   background-color: gray;
// `;

export default CartItems;
