import React from "react";
import styled from "styled-components";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkButton from "./ui/LinkButton";
import svg from "../assets/low.svg";
import mercado from "../assets/icons/mercado.svg";

const FooterCtn = styled.footer`
  padding-top: 2em;
  padding-bottom: 1em;
  width: 100%;
  min-height: 230px;
  background-color: #222222f8;
  color: #fff;
  display: flex;

  flex-direction: column;
  position: relative;
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const MpLogo = styled.img`
  width: 130px;
  height: 50px;
`;
const TxtCopyright = styled.p`
  font-size: 14px;
  color: #cacaca;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-row-gap: 2em;
  justify-content: center;
  padding-bottom: 2em;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  transition: 0.2s;
`;

const TxtSection = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  color: #cacaca;
`;

const CtnRights = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

const CtnLogos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;
const TitleText = styled.h2`
  font-size: 18px;
  position: relative;
  color: var(--main-color-300);
  margin-bottom: 10px;
  &::before {
    content: "";
    position: absolute;

    width: 70px;
    bottom: 0px;

    height: 2px;
    background-color: var(--main-color-500);
  }
`;

const BtnLogo = styled.a`
  color: white;
  scale: 1.5;
  transition: 0.3s;

  &:hover {
    color: var(--color-gold);
  }
`;

const ButtonCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5em;
`;

export default function Footer() {
  return (
    <FooterCtn>
      <Wrapper>
      
        <Section>
          <TitleText>CONTACTO</TitleText>

          <TxtSection>consultas.eride@gmail.com</TxtSection>

          <CtnLogos>
            <BtnLogo href="">
              <WhatsAppIcon />
            </BtnLogo>
            <BtnLogo href="">
              <FacebookIcon />
            </BtnLogo>
            <BtnLogo href="">
              <InstagramIcon />
            </BtnLogo>
          </CtnLogos>
        </Section>
        <Section>
          <TitleText>PAGO SEGURO</TitleText>
          <TxtSection>
            Podés pagar con tarjeta, débito y efectivo. Tus datos y las compras
            están protegidas con
          </TxtSection>
          <CtnLogos>
            <a
              href="https://www.mercadopago.com.ar/c/pagar-online-con-mercadopago"
              target="_blank"
            >
              <MpLogo src={mercado} alt="" />
            </a>
          </CtnLogos>
        </Section>
      </Wrapper>

      <CtnRights>
        <TxtCopyright>Copyright © 2021 - 2023 Eride </TxtCopyright>
      </CtnRights>
      <BackgroundImage src={svg} alt="" />
    </FooterCtn>
  );
}
