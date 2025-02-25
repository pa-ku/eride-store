import styled from 'styled-components'

const H2 = styled.h2`
  color: #111;
  font-size: 2rem;
  padding-inline: 0.2em;
  font-size: ${(props) => props.$size};
  position: relative;
  overflow: hidden;
  font-style: italic;
  color: ${(props) => props.$color};
  background-color: ${(props) =>
    props.$background ? 'var(--main-color-300);' : ''};
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`
const AccentText = styled.b`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 50%;
    height: 2px;
    background-color: var(--main-color-500);
  }
`

export default function Title({ $color, text, $size, $background, accent }) {
  return (
    <H2 $color={$color} $background={$background} $size={$size}>
      {text}
      <AccentText>{accent}</AccentText>
    </H2>
  )
}
