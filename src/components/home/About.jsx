import React from 'react'
import styled from 'styled-components'
import Title from '../ui/Title'
import lockIcon from '../../assets/icons/lock.webp'
import shippingIcon from '../../assets/icons/shipping.webp'
import premiumIcon from '../../assets/icons/premium.webp'
import MainButton from '../ui/MainButton'

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 3em;
  display: flex;

  justify-content: center;
`
const Container = styled.div`
  max-width: 100ch;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
`

const SectionText = styled.p`
  text-align: center;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 2em;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
const SectionIconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

const SectionIcon = styled.img`
  pointer-events: none;
  width: 120px;
  height: 100px;
  object-fit: contain;
`

const AboutSection = styled.div`
  width: 100%;
`
export default function About() {
  return (
    <Wrapper>
      <Container>
        <Title $noBackground text={'Sobre Eride'} />

        <SectionContainer>
          <Section
            src={premiumIcon}
            alt={''}
            text={
              'Nuestros productos son de las marcas y modelos más reconocidos de la industria, lo que garantiza el máximo valor por tu inversión'
            }
          />
          <Section
            src={shippingIcon}
            alt={''}
            text={'Tus compras cuentan con envío gratuito a todo el país'}
          />
          <Section
            text={
              'Tu privacidad es nuestra principal preocupación. Por ello, no solicitamos ni almacenamos datos personales, ni requerimos registro'
            }
            src={lockIcon}
            alt={''}
          />
        </SectionContainer>

        <MainButton typeLink $altButton to={'/about'}>
          Conocer más...
        </MainButton>
      </Container>
    </Wrapper>
  )
}

export function Section({ src, alt, text }) {
  return (
    <>
      <AboutSection>
        <SectionIconContainer>
          <SectionIcon src={src} alt={alt} />
        </SectionIconContainer>
        <SectionText>{text}</SectionText>
      </AboutSection>
    </>
  )
}
