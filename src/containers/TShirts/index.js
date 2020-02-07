import React, { useState } from "react";
import styled from "styled-components";
import TShirts from "./items";
import Filter from "./filter";
import { Grid, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";

const ShoppingItems = () => {
  const [filterStrings, setFilterStrings] = useState({
    XS: false,
    S: false,
    M: false,
    ML: false,
    L: false,
    XL: false,
    XXL: false
  });
  return (
    <Grid>
      <GridCell span="2">
        <Filter
          filterStrings={filterStrings}
          setFilterStrings={setFilterStrings}
        />
      </GridCell>
      <GridCell span="9">
        <TShirts filterStrings={filterStrings} />
      </GridCell>
    </Grid>
  );
};

export default ShoppingItems;
