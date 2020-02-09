import React, { useState, useRef } from "react";
import styled from "styled-components";

const CartItemsContainer = ({ cartElements }) => {
  // const [itemQuantity, setItemQuantity] = useState(0);
  // const [itemsMap, setItemsMap] = useState({});
  // const [totalAmount, setTotalAmount] = useState(0);
  let totalAmount = 0;
  console.log(cartElements);
  cartElements.map(element => {
    // setTotalAmount(totalAmount + element.price);
    totalAmount += element.price;
  });

  // const [itemIDs, setItemIds] = useState([]);
  return (
    <Wrapper>
      <CartItems>
        {/* { uniqueCartElements=} */}
        {cartElements.map(element => {
          const id = element.id;
          // setItemsMap({ ...itemsMap, id: ++counter.current });
          // console.log(itemsMap);
          // !itemIDs.includes(element.id) && setItemIds([...itemIDs, element.id]);
          return (
            <CartItem>
              <img
                src={require(`../../products/${element.src_1}`)}
                alt="tshirt"
                width="70"
                height="80"
              />
              {/* <ItemInfo> */}
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
              {/* </ItemInfo> */}
              {/* <p style={{ display: "inline-block" }}>sdf</p> */}
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
  /* overflow-y: scroll; */
`;

const CartItems = styled.div`
  height: 60%;
  overflow-y: scroll;
`;
const CartItem = styled.div`
  /* height: */
  /* display: inline-block; */
  padding: 3%;
  border-bottom: 2px solid #101010;
`;
const ItemInfo = styled.div`
  display: inline-block;
`;

const CartAction = styled.div`
  height: 40%;
  background-color: #383838;
  /* margin-top: 10%; */
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
  /* && {
    :hover {
      background: #e6b800;
    }
  } */
`;

export default CartItemsContainer;
