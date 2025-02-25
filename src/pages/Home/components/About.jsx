import styled from 'styled-components'
import Title from '#components/ui/Title'
import lockIcon from '#assets/icons/lock.webp'
import shippingIcon from '#assets/icons/shipping.webp'
import premiumIcon from '#assets/icons/premium.webp'
import MainButton from '#components/ui/MainButton'

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

const SectionContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 2em;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`

export default function About() {
  return (
    <Wrapper>
      <Container>
        <Title $noBackground text={'Sobre Eride'} />

        <SectionContainer>
          <Section
            src={premiumIcon}
            alt={'imagen de una estrella '}
            text={
              'Nuestros productos son de las marcas y modelos más reconocidos de la industria, lo que garantiza el máximo valor por tu inversión'
            }
          />
          <Section
            src={shippingIcon}
            alt={'icono de envio'}
            text={'Tus compras cuentan con envío gratuito a todo el país'}
          />
          <Section
            text={
              'Tu privacidad es nuestra principal preocupación. Por ello, no solicitamos ni almacenamos datos personales, ni requerimos registro'
            }
            src={lockIcon}
            alt={'imagen de un candado'}
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
      <div className="w-full">
        <div className="m-2 flex w-full items-center justify-center">
          <img
            width={120}
            height={100}
            className="pointer-events-none object-contain"
            src={src}
            alt={alt}
          />
        </div>
        <p className="text-center">{text}</p>
      </div>
    </>
  )
}
