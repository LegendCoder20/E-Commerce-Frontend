import React from "react";
import ProductCard from "../product/ProductCard";
import ProductCardsContainer from "../product/ProductCardsContainer";

function HomePage() {
  return (
    <React.Fragment>
      <ProductCardsContainer></ProductCardsContainer>
      {/* <ProductCard /> */}
    </React.Fragment>
  );
}

export default HomePage;
