import React from "react";
import styled from "styled-components";

const CartItemsContainer = ({ cartElements }) => {
  let totalAmount = 0;
  cartElements.map(element => {
    totalAmount += element.price;
  });

  return (
    <Wrapper>
      <CartItems>
        {cartElements.map(element => {
          return (
            <CartItem>
              <img
                src={require(`../../products/${element.src_1}`)}
                alt="tshirt"
                width="70"
                height="80"
              />
              <p
                style={{
                  color: "white",
                  display: "inline-block"
                }}
              >
                {element.title}
              </p>
              <p>
                {element.availableSizes[0]}|{element.availableSizes[1]}
              </p>
              <p>Quantity:</p>
            </CartItem>
          );
        })}
      </CartItems>
      <CartAction>
        <TotalAmount>
          <span style={{ color: "#585858" }}>SUBTOTAL</span>
          <span
            style={{ color: "#e6b800", fontSize: "1.5em", marginLeft: "25%" }}
          >
            $ {totalAmount}
          </span>
        </TotalAmount>
        <Button>CHECKOUT</Button>
      </CartAction>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40vw;
  height: 60vh;
  background-color: #303030;
  z-index: 1;
  position: relative;
  overflow: hidden;
`;

const CartItems = styled.div`
  height: 60%;
  overflow-y: scroll;
`;
const CartItem = styled.div`
  padding: 3%;
  border-bottom: 2px solid #101010;
`;

const CartAction = styled.div`
  height: 40%;
  background-color: #383838;
  position: static;
  width: 100%;
  box-shadow: 0px -10px 20px;
`;
const TotalAmount = styled.div`
  padding: 5%;
`;

const Button = styled.button`
  width: 22vw;
  height: 40px;
  border-radius: 5%;
  background-color: #101010;
  color: white;
  margin-left: 3%;
  border: none;
`;

export default CartItemsContainer;
