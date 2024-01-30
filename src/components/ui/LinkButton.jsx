import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BtnNav = styled(Link)`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: ${(props) => (props.$weightLight ? "400" : "800")};
  border-bottom: 1px solid rgba(34, 34, 34, 0);
  font-size: 1.1rem;
  transition: 0.2s;
  width: max-content;
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontsize};
  &:hover {
    border-bottom: 1px solid var(--color-gold);
  }
`;

export default function LinkButton({
  to,
  text,
  $color,
  $weightLight,
  $fontsize,
  logo,
  title,
  onClick

}) {
  return (
    <BtnNav
      to={to}
      $fontsize={$fontsize}
      $color={$color}
      $weightLight={$weightLight}
      title={title}
      onClick={onClick}
    >
      {logo}
      {text}
    </BtnNav>
  );
}
