import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../responsive";
import Card from "./Card";
import { bikes } from "../../data.js";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  min-height: 450px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 3em;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0em;
    width: 100%;
  }
`;

export default function Product({ filters }) {
  const applyFilters = (bike) => {
    if (filters) {
      // Comprobar cada filtro y aplicarlos si están definidos

      if (filters.title && !bike.title.includes(filters.title)) {
        return false;
      }
      if (filters.price) {
        if (
          filters.price === "asc" &&
          parseFloat(bike.price) > parseFloat(filters.price)
        ) {
          return false;
        }
        if (
          filters.price === "desc" &&
          parseFloat(bike.price) < parseFloat(filters.price)
        ) {
          return false;
        }
      }
      if (filters.filter && bike.filter !== filters.filter) {
        return false;
      }
      if (
        filters.brand &&
        filters.brand !== "todas" &&
        bike.brand !== filters.brand
      ) {
        return false;
      }
    }
    return true; // Si no se proporcionan filtros, mostrar todos los productos
  };

  const sortedBikes = bikes.filter(applyFilters).sort((a, b) => {
    if (filters.price === "asc") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (filters.price === "dec") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (filters.price === "new") {
      return parseFloat(b.price) - parseFloat(a.oldPrice);
    }

    return 0;
  });

  return (
    <>
      <Wrapper>
        <Container>
          {sortedBikes.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              img={item.img[0]}
              bio={item.bio}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          ))}
        </Container>
      </Wrapper>
    </>
  );
}
