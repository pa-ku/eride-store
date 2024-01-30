import React from "react";
import styled from "styled-components";

const Button = styled.input`
  border: 0px;
  padding: 14px 18px;
  background-color: var(--main-color-500);
  cursor: pointer;

  font-size: 17px;
  &:hover {
    background-color: var(--main-color-400);
  }
`;

export default function FormButton({
  value,
  onClick,
  title,
  method,
  action,
  onSubmit,
}) {
  return (
    <Button
      onSubmit={onSubmit}
      formAction={action}
      formMethod={method}
      title={title}
      onClick={onClick}
      type="submit"
      value={value}
    />
  );
}
