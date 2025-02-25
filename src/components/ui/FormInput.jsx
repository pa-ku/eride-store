import styled from 'styled-components'

const Input = styled.input`
  padding: 8px 15px 4px 4px;
  width: 100%;

  font-size: 16px;
  border: 0px;

  border-bottom: 2px solid #ebebeb;
  &:focus-visible {
    outline: 0px;
    border-bottom: 2px solid var(--main-color-500);
  }
`

export default function FormInput({
  value,
  title,
  name,
  type,
  placeholder,
  onChange,

  onSubmit,
}) {
  return (
    <Input
      value={value}
      title={title}
      name={name}
      onSubmit={onSubmit}
      required
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
}
