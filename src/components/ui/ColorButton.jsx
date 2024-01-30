import React from "react";
import styled from "styled-components";
import PaintIcon from "@mui/icons-material/WaterDrop";

const ColorBtn = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: ${(props) => props.$color};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transition: 300ms;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:checked {
    scale: 1.1;
    z-index: 0;
    width: 28px;
    height: 28px;
  }
`;

const ColorIcon = styled(PaintIcon)`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: -4px;
  bottom: 0;
  color: ${(props) => props.$color};
  background-color: #fff;
  border-radius: 50%;
  scale: 1;
  padding: 2px;
  pointer-events: none;
`;

const RadioButtonCtn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function ColorButton({ onClick, name, type, color }) {
  return (
    <>
      <RadioButtonCtn>
        <ColorBtn
          onClick={onClick}
          $color={color}
          value={color}
          type={type}
          name={name}
        ></ColorBtn>
        <ColorIcon $color={color}></ColorIcon>
      </RadioButtonCtn>
    </>
  );
}
