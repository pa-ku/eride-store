import { React, useState, useEffect } from "react";
import Banner from "../components/home/Banner";
import Product from "../components/Product";
import styled from "styled-components";
import Title from "../components/ui/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../components/home/About";
import OurBrands from "../components/home/OurBrands";
import Featured from "../components/home/Featured";
import MainButton from "../components/ui/MainButton";

const ProductSection = styled.main`
  gap: 2em;
  flex-direction: column;
  padding-block: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  @media(max-width:700px){
  gap: 6em;
  }
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Home() {
  return (
    <>
      <Header $Home />
      <Banner
        title="SOLO LO MEJOR"
        subtitle="No te conformes con menos cuando se trata de tu pasión"
      />
      <OurBrands />
      <ProductSection>
        <Featured />

        <ProductContainer>
          <Title text={"Las mejores "} accent={"Ofertas"} />
          <Product filters={{ filter: "oferta" }} />
        </ProductContainer>

        <ProductContainer>
          <Title text={"Más Vendido"} />
          <Product filters={{ filter: "popular" }} />
        </ProductContainer>
<MainButton typeLink={true} to={"/product"}> Ver todos los productos</MainButton>
      </ProductSection>
      <AboutMe />
      <Footer />
    </>
  );
}
