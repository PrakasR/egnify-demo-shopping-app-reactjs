import React, { useState } from "react";
import styled from "styled-components";
import CartItemsContainer from "./cartItemsContainer";

const CartItems = ({ cartElements, deleteCartItem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
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
      {isCartOpen && (
        <CartItemsContainer
          cartElements={cartElements}
          deleteCartItem={deleteCartItem}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
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

export default CartItems;
