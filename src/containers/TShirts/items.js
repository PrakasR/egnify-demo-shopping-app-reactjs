import React, { useEffect, useState, useRef } from "react";
import { productsdata } from "./mock-data";
import styled from "styled-components";
import Product from "./product";

const TShirts = ({ filterStrings, addCartItem }) => {
  const [productsData, setProductsData] = useState(productsdata);
  const isFilterApplied = useRef(false);

  useEffect(() => {
    for (let key in filterStrings) {
      if (filterStrings[key] === true) {
        isFilterApplied.current = true;
      }
    }
    if (isFilterApplied.current) {
      const filteredProducts = productsdata.filter(product => {
        for (let key in filterStrings) {
          if (filterStrings[key] && product.availableSizes.includes(key)) {
            return true;
          }
        }
        return false;
      });
      setProductsData(filteredProducts);
      isFilterApplied.current = false;
    } else {
      setProductsData(productsdata);
    }
  }, [filterStrings]);

  return (
    <Wrapper>
      <p style={{ marginLeft: "5%" }}>{productsData.length} product(s) found</p>
      <ItemsWrapper>
        {productsData.map(product => {
          return (
            <>
              <Product product={product} addCartItem={addCartItem} />
            </>
          );
        })}
      </ItemsWrapper>
    </Wrapper>
  );
};

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  & > div {
    margin: 3%;
  }
`;
const Wrapper = styled.div``;

export default TShirts;
