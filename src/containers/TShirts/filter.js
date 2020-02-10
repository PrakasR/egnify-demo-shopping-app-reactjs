import React from "react";
import styled from "styled-components";

const Filter = ({ filterStrings, setFilterStrings }) => {
  const applyFilter = e => {
    const appliedFilter = e.target.value;
    if (filterStrings[appliedFilter]) {
      filterStrings[appliedFilter] = false;
      setFilterStrings({ ...filterStrings });
    } else {
      filterStrings[appliedFilter] = true;
      setFilterStrings({ ...filterStrings });
    }
  };

  return (
    <Wrapper>
      <h3 style={{ marginLeft: "3%" }}>Sizes:</h3>
      <FilterWrapper>
        <CheckBox>
          <input
            type="checkbox"
            value="XS"
            onChange={e => {
              applyFilter(e);
            }}
          />
          XS
        </CheckBox>
        <CheckBox>
          <input
            type="checkbox"
            value="S"
            onChange={e => {
              applyFilter(e);
            }}
          />
          S
        </CheckBox>
        <CheckBox>
          <input
            type="checkbox"
            value="M"
            onChange={e => {
              applyFilter(e);
            }}
          />
          M
        </CheckBox>
        <CheckBox>
          <input
            type="checkbox"
            value="ML"
            onChange={e => {
              applyFilter(e);
            }}
          />
          ML
        </CheckBox>
        <CheckBox>
          <input
            type="checkbox"
            value="L"
            onChange={e => {
              applyFilter(e);
            }}
          />
          L
        </CheckBox>
        <CheckBox>
          <input
            type="checkbox"
            value="XL"
            onChange={e => {
              applyFilter(e);
            }}
          />
          XL
        </CheckBox>
        <CheckBox>
          <input
            type="checkbox"
            value="XXL"
            onChange={e => {
              applyFilter(e);
            }}
          />
          XXL
        </CheckBox>
      </FilterWrapper>
    </Wrapper>
  );
};

const CheckBox = styled.div`
  width: 30px;
  height: 30px;
  background-color: lightgray;
  border-radius: 50%;
  margin: 2%;
  text-align: center;
  && > input:checked {
    background-color: #e6b800;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;
export default Filter;
