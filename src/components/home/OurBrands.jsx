import React from "react";
import styled from "styled-components";
import brand2 from "../../assets/img/brand2.webp"
import brand_zero from "../../assets/img/brand_zero.webp"
import brand_inmotion from "../../assets/img/brand_inmotion.webp"
import brand_maxyou from "../../assets/img/brand_maxyou.webp"
import brand4 from "../../assets/img/brand4.webp"
import brand5 from "../../assets/img/brand5.webp"

const Wrapper = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  padding-block: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
    object-fit: cover;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 3em;
  height: 100%;
filter: grayscale(1);
  @media (max-width: 700px) {
    overflow: auto;
    flex-wrap: nowrap;
    padding-inline: 2em;
    gap: 3em;
    justify-content: start;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Img = styled.img`

  height: 60px;
  opacity: 0.5;
  pointer-events: none;
  transition: 200ms;
  /*   &:hover {
    opacity: 1;
  } */
  @media (max-width: 700px) {
    width: 150px;
  }
`;

export default function OurBrands() {
  const brandArr = [,brand2,brand_zero,brand_inmotion,brand_maxyou,brand4,brand5

  ];
  return (
    <Wrapper>
      <ImgContainer>
        {brandArr.map((image) => (
          <Img src={image} alt="Imagen Marca" />
        ))}
      </ImgContainer>
    </Wrapper>
  );
}
