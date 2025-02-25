import styled from 'styled-components'

const CheckboxContainer = styled.div`
  width: ${(props) => (props.$isText ? '100%' : '35px')};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`
const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: #999;
  width: 200px;
  height: 100%;
  border-radius: 8px;
  transition: 300ms;
  border: 0px;
  scale: 1.1;
  cursor: pointer;
  border: ${(props) => (props.$colorChoice ? '3px solid' : '')};
  border-color: ${(props) => props.$color};
  &:checked {
    background-color: var(--main-color-450);
  }
`

export default function CheckBox({
  text,
  onClick,
  value,
  name,
  type,
  $isText,
  $color,
  $colorChoice,
}) {
  return (
    <>
      <CheckboxContainer $isText={$isText}>
        <Checkbox
          $colorChoice={$colorChoice}
          $color={$color}
          value={value || text}
          name={name}
          onClick={onClick}
          type={type}
        ></Checkbox>
        <p className="pointer-events-none absolute scale-110 text-white">
          {text}
        </p>
      </CheckboxContainer>
    </>
  )
}
