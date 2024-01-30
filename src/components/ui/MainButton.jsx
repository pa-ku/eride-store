import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductLink = styled(Link)`
  background-color: ${(props) =>
    props.$altButton ? "#888" : " var(--main-color-450)"};
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
    text-transform: uppercase;
  padding: 0.6em 3em;
  transition: 200ms;
  &:hover {
    filter: brightness(1.05);
    background-color: ${(props) =>
      props.$altButton && " var(--main-color-450)"};
  }
`;

const ProductButton = styled.button`
  background-color: var(--main-color-450);
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
  padding: 0.8em 3em;
  transition: 200ms;
  border: none;
  &:hover {
    filter: brightness(1.05);
  }
`;

export default function MainButton({
  to,
  $altButton,
  typeLink,
  onClick,
  children,
}) {
  return (
    <>
      {typeLink ? (
        <ProductLink $altButton={$altButton} to={to}>
          {children}
        </ProductLink>
      ) : (
        <ProductButton onClick={onClick}>{children}</ProductButton>
      )}
    </>
  );
}
