import React from "react";
import styled from "styled-components";
import { Grid, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";

const CartItemsContainer = ({ cartElements, deleteCartItem }) => {
  let totalAmount = 0;
  cartElements.length &&
    cartElements.map(element => {
      totalAmount += element.price;
    });

  const deleteFromCart = itemId => {
    deleteCartItem(itemId);
  };

  return (
    <Wrapper>
      <CartItems>
        {cartElements.length !== 0 &&
          cartElements.map(element => {
            return (
              <CartItem>
                <Grid style={{ margin: 0, padding: "2%" }}>
                  <GridCell span="3">
                    <img
                      src={require(`../../products/${element.src_1}`)}
                      alt="tshirt"
                      width="70"
                      height="80"
                    />
                  </GridCell>
                  <GridCell span="9">
                    <ItemDetails>
                      <p
                        style={{
                          color: "white",
                          display: "inline-block",
                          fontSize: ".9em",
                          margin: "0"
                        }}
                      >
                        {element.title}
                      </p>
                      <DeleteIcon
                        onClick={() => {
                          deleteFromCart(element.id);
                        }}
                        title="Delete item from cart"
                      >
                        X
                      </DeleteIcon>
                      <p style={{ fontSize: ".8em", color: "#989898" }}>
                        {element.availableSizes[0]}|{element.style}
                      </p>
                      <ItemPrice>
                        {element.currencyFormat}
                        {element.price}
                      </ItemPrice>
                      <p style={{ fontSize: ".8em", color: "#989898" }}>
                        Quantity:
                      </p>
                    </ItemDetails>
                  </GridCell>
                </Grid>
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
  width: 50vw;
  height: 70vh;
  background-color: #303030;
  z-index: 1;
  position: relative;
  overflow: hidden;
`;

const CartItems = styled.div`
  height: 70%;
  overflow-y: scroll;
`;
const CartItem = styled.div`
  border-bottom: 2px solid #101010;
`;

const CartAction = styled.div`
  height: 30%;
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
  margin-top: -2%;
`;
const ItemDetails = styled.div`
  margin-left: -18%;
  position: relative;
`;

const DeleteIcon = styled.span`
  position: absolute;
  font-weight: "bold";
  color: "#101010";
  top: -8%;
  left: 35%;
  padding: 2%;
  && {
    :hover {
      cursor: pointer;
    }
  }
`;

const ItemPrice = styled.p`
  position: absolute;
  top: 22%;
  left: 32%;
  color: #e6b800;
`;

export default CartItemsContainer;
