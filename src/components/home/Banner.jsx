import React from "react";
import styled from "styled-components";
import ImagenBanner from "../../assets/img/bannerg.webp";

const WrapperBanner = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${ImagenBanner});
  background-size: cover;
  background-position: 100%;
  @media (max-width: 700px) {
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    height: 200px;
  }
`;
const CtnBanner = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.605);
  justify-content: center;
  height: 100%;
  flex-direction: column;
  width: 100%;
  padding-inline: var(--paddinginline);
  @media (max-width: 700px) {
    height: 100%;
    display: none;
    margin: 0px;
    align-items: start;
    justify-content: center;
  }
`;

const TitleBanner = styled.h1`
  z-index: 1;
  font-size: 4rem;
  font-weight: 800;
  text-align: start;
  opacity: 0;
  animation: show 1s forwards;
  word-spacing: -7px;
  @media (max-width: 700px) {
    font-size: 2rem;
    width: 7ch;
  }
`;

const TextBanner = styled.h2`
  font-size: 1.5rem;
  max-width: 30ch;
  display: flex;
  text-align: center;
  opacity: 0;
  font-weight: 300;
  animation: show 3s forwards 600ms;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export default function Banner({ title, subtitle }) {
  return (
    <>
      <WrapperBanner>
        <HalfBanner></HalfBanner>
        {/*         <CtnBanner>
          <TitleBanner>{title}</TitleBanner>
          <TextBanner>{subtitle}</TextBanner>
        </CtnBanner> */}
      </WrapperBanner>
    </>
  );
}
const HalfBanner = styled.div``;
