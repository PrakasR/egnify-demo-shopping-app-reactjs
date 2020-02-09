import React, { useState, useRef } from "react";
import styled from "styled-components";

const CartItemsContainer = ({ cartElements }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemsMap, setItemsMap] = useState({});
  const counter = useRef(0);

  // const [itemIDs, setItemIds] = useState([]);
  return (
    <Wrapper>
      <CartItems>
        {cartElements.map(element => {
          const id = element.id;
          // setItemsMap({ ...itemsMap, id: ++counter.current });
          console.log(itemsMap);
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

const Button = styled.button`
  width: 22vw;
  height: 40px;
  border-radius: 5%;
  background-color: #101010;
  color: white;
  margin-top: 18%;
  margin-left: 3%;
  border: none;
  /* && {
    :hover {
      background: #e6b800;
    }
  } */
`;

export default CartItemsContainer;
