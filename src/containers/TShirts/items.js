import React, { useEffect, useState, useRef } from "react";
import { productsdata } from "./mock-data";
import styled from "styled-components";
import Product from "./product";

const TShirts = ({ filterStrings }) => {
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
      console.log(filteredProducts);
    } else {
      setProductsData(productsdata);
    }
    // isInitialMount.current = false;
  }, [filterStrings]);

  return (
    <Wrapper>
      <p>{productsData.length} product(s) found</p>
      <ItemsWrapper>
        {productsData.map(product => {
          return (
            <>
              <Product
                imgUrl={product.src_1}
                title={product.title}
                price={product.price}
              />
              <Product
                imgUrl={product.src_2}
                title={product.title}
                price={product.price}
              />
            </>
          );
        })}
      </ItemsWrapper>
    </Wrapper>
  );
};

const ItemsWrapper = styled.div`
  /* margin-left: 10%;
  margin-top: 10%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  & > div {
    margin: 3%;
  }
`;
const Wrapper = styled.div`
  /* margin-left: 10%; */
  /* margin-top: 10%; */
`;

export default TShirts;
