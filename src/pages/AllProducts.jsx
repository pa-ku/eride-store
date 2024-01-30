import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/ui/Title";
import Product from "../components/Product";
import { useLocation } from "react-router";

export default function AllProducts() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const [brandText, setBrandText] = useState("Marca");
  const [priceText, setPriceText] = useState("Precio");
  const [brandSection, setBrandSection] = useState(false);
  const [priceSection, setPriceSection] = useState(false);

  const brands = [
    "todas",
    "segway",
    "dualtron",
    "vsett",
    "maxyou",
    "inmotion",
    "zero",
  ];

  function HandleBrand() {
    setBrandSection(true);
    setPriceSection(false);
  }
  function HandlePrice() {
    setPriceSection(true);
    setBrandSection(false);
  }

  function handleChoiceBrand(e) {
    const value = e.target.value;
    const name = e.target.name;
    setBrandSection(false);
    setBrandText(name);
    setFilters({ ...filters, ["brand"]: value });
  }

  function handleChoicePrice(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPriceSection(false);
    setPriceText(name);
    setSort(value);
  }

  return (
    <>
      <Wrapper>
        <OptionCtn>
          <SelectContainer>
            <OptionButton onClick={HandleBrand}>{brandText}</OptionButton>
            {brandSection === true && (
              <FilterSection>
                {brands.map((brand) => (
                  <FilterButton
                    onClick={handleChoiceBrand}
                    value={brand}
                    name={brand}
                  >
                    {brand}
                  </FilterButton>
                ))}
              </FilterSection>
            )}
          </SelectContainer>

          <SelectContainer>
            <OptionButton >Categoria </OptionButton>
       
              <FilterSection>
                <FilterButton
                  value="todas"
                  name="Destacado"
                >
                  Todas
                </FilterButton>
                <FilterButton
                  value="monopatin"
                  name="Mas bajo"
  
                >
                  Monopatines
                </FilterButton>
                <FilterButton
                  value="monociclo"
                  name="Más alto"

                >
                  Monociclos
                </FilterButton>
              </FilterSection>

          </SelectContainer>
          <SelectContainer>
            <OptionButton onClick={HandlePrice}>{priceText} </OptionButton>
            {priceSection === true && (
              <FilterSection>
                <FilterButton
                  value="new"
                  name="Destacado"
                  onClick={handleChoicePrice}
                >
                  Destacado
                </FilterButton>
                <FilterButton
                  value="asc"
                  name="Mas bajo"
                  onClick={handleChoicePrice}
                >
                  Mas bajo
                </FilterButton>
                <FilterButton
                  value="dec"
                  name="Más alto"
                  onClick={handleChoicePrice}
                >
                  Más alto
                </FilterButton>
              </FilterSection>
            )}
          </SelectContainer>
        </OptionCtn>
        <ProductContainer>
          <Title accent={category} />

          <Product
            filters={{
              price: sort,
              brand: filters.brand,
            }}
            sort={sort}
          />
        </ProductContainer>
      </Wrapper>
    </>
  );
}

const ProductContainer = styled.div`
  & h2 {
    text-transform: uppercase;
  }
`;

const Wrapper = styled.div`
  text-align: center;

  min-height: 900px;
  display: flex;
  gap: 2em;
  padding-bottom: 4em;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const OptionCtn = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  flex-wrap: wrap;
  width: 100%;
  gap: 2em;
  background-color: #fafafa;
  padding-block: 2em;
`;

const FilterSection = styled.div`
  width: 100%;
  background-color: #fff;
  position: absolute;
  height: max-content;
  z-index: 10;
  top: 50px;
  outline: 2px solid var(--main-color-350);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
`;

const FilterButton = styled.button`
  background-color: #fff;
  border: 0px;
  text-transform: uppercase;
  width: 100%;
  height: 40px;

  transition: 200ms;
  &:hover {
    background-color: var(--main-color-350);
    cursor: pointer;
  }
`;

const OptionButton = styled.button`
  width: 200px;
  height: 40px;
  color: var(--main-color-600);
  background-color: var(--main-color-250);
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 200ms;
  border-radius: 12px;
  border: 2px solid var(--main-color-500);

  &:hover {
    background-color: var(--main-color-450);
    color: #fff;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  & * {
    text-transform: uppercase;
  }
`;
