import React from "react";
import { useState, useMemo } from "react";
import { bikes } from "../../data.js";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import LinkButton from "./ui/LinkButton.jsx";
import { Link } from "react-router-dom";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  function handleSearch() {
    setIsOpen(true);
  }

  function handleOnKeydown(e) {
    if (e.keyCode == 27) {
      setQuery("");
      console.log("esc");
    } else if (e.keyCode == 13) {
    }
  }

  const filteredItems = useMemo(() => {
    if (query === "") {
      return bikes;
    } else {
      return bikes.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });
    }
  }, [bikes, query]);

  return (
    <>
      <SearchBarContainer isOpen={isOpen}>
        {isOpen ? (
          <InputCtn>
            {/* {query === "" && <SearchIco></SearchIco>} */}
            <SearchBarInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca en Xtreme"
              onKeyDown={handleOnKeydown}
            />
            {query != "" && (
              <InputCloseButton onClick={() => setQuery("")}>
                ×
              </InputCloseButton>
            )}
          </InputCtn>
        ) : (
          <LinkButton
            onClick={handleSearch}
            logo={<SearchIcon></SearchIcon>}
            title={"Favoritos"}
          />
        )}

        {query != "" && (
          <ItemsWrapper>
            {filteredItems.slice(0, 5).map((item) => (
              <>
                <ItemLink
                  onClick={() => setQuery("")}
                  to={`/product/id/${item._id}`}
                >
                  <ItemImg src={item.img[0]} alt="" />
                  <ItemInfoCtn>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>
                      {item.price
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                    </ItemPrice>
                  </ItemInfoCtn>
                </ItemLink>
              </>
            ))}
          </ItemsWrapper>
        )}
      </SearchBarContainer>
    </>
  );
}

const SearchIco = styled(SearchIcon)`
  color: #999;
  position: absolute;
  z-index: 10;
  left: 10px;
  scale: 0.9;
`;

const InputCtn = styled.div`
  position: relative;
  width: 20em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const InputCloseButton = styled.button`
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin-right: 10px;
  background-color: rgba(250, 4, 4, 0);
  border: none;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
  font-size: 1.1rem;
  &:hover {
    color: var(--main-color-400);
  }
`;

const SearchBarContainer = styled.div`
  position: relative;

  height: 100%;
  @media (max-width: 1024px) {
    display: none;
    ${(props) =>
      props.isOpen
        ? "position: absolute; left: 0px;  right: 0px;   top: 0px; "
        : ""}
  }
`;
const SearchBarInput = styled.input`
  background-color: #454545;
  border: 0px;
  border-radius: 8px;
  width: 100%;
  outline: 0px;
  color: #eaeaea;
  font-weight: 700;
  position: relative;
  padding: 10px 10px;
  @media (max-width: 1000px) {
    z-index: 99;
    width: 100%;
    height: 4.8em;
    border-radius: 0px;
  }
`;

const ItemsWrapper = styled.div`
  height: max-content;
  display: flex;

  width: 20em;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  opacity: 0;

  z-index: 100;
  box-shadow: 0px 10px 20px 1px rgba(57, 57, 57, 0.225);
  animation: 300ms show forwards;
  @media (max-width: 700px) {
    width: 100%;
  }
  @keyframes show {
    100% {
      opacity: 1;
    }
  }
`;

const ItemTitle = styled.p`
  font-size: 1rem;
  text-align: start;
`;
const ItemPrice = styled.p`
  color: var(--main-color-550);
  font: 800;
  font-size: 1.2rem;
`;

const ItemImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const ItemLink = styled(Link)`
  background-color: #fff;
  border: 0px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 100ms;
  opacity: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid #fff;
  animation: 200ms show forwards;
  text-decoration: none;

  color: #111;
  &:hover {
    border: 1px solid var(--main-color-500);
  }
  @keyframes show {
    100% {
      opacity: 1;
    }
  }
`;

const ItemInfoCtn = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  flex-direction: column;
  padding-left: 10px;
`;
