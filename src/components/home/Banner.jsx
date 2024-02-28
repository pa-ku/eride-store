import React from "react";
import styled from "styled-components";
import ImgBanner from "../../assets/img/banner-eride.webp";
import ImgBannerMobile from '../../assets/img/banner-eride-mobile.webp'

const WrapperBanner = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${ImgBanner});
  background-size: cover;
  background-position: 100%;
  @media (max-width: 800px) {
    background-size: cover;
    background-position: 50%;
    width: 100%;
    background-repeat: no-repeat;
    height: 300px;
    background-image: url(${ImgBannerMobile});
  }
`;


export default function Banner({ title, subtitle }) {
  return (
    <>
      <WrapperBanner>
      </WrapperBanner>
    </>
  );
}

