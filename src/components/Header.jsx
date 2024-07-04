import React from "react";
import styled from "styled-components";
import imgLogo from "../assets/icons/logo.webp";
import FavIcon from "@mui/icons-material/FavoriteBorder";
import { device } from "../responsive";
import LinkButton from "./ui/LinkButton";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Head = styled.header`
  width: 100%;
  height: 4em;
  background-color: #111;
  background-color: ${(props) => props.$Home && "rgb(0, 0, 0)"};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--paddinginline);
  @media ${device.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(10px, 10px));
    padding-inline: 1em;
  }
`;

const Logo = styled.img`
  width: 150px;

  @media ${device.mobile} {
    width: 130px;
  }
`;

const CtnRightBar = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  height: 100%;
  justify-content: end;
  z-index: 9;
  @media(max-width:700px){
    .hide-mobile{
  display: none;
    }
  }
`;

const Linked = styled(Link)`
  width: max-content;


`;

export default function Header({ $Home }) {
  return (
    <>
      <Head $Home={$Home}>
        <Linked title="Home" to={"/"}>
          <Logo src={imgLogo} alt="" />
        </Linked>
        <CtnRightBar>
          <SearchBar />
          <LinkButton className={'hide-mobile'} to={"/product/monopatines"} text={"Monopatines"} />
          <LinkButton
            id={'fav-btn'}
            to={"/favorites"}
            logo={<FavIcon></FavIcon>}
            title={"Favoritos"}
          />


        </CtnRightBar>
      </Head>
    </>
  );
}
