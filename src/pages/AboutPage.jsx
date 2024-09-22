import React from 'react'
import styled from 'styled-components'
import Title from '../components/ui/Title'
import imageStore2 from '../assets/img/aboutussanjuan.webp'
import imageStore3 from '../assets/img/aboutusshipping.webp'

export default function AboutPage() {
  return (
    <>
      <Wrapper>
        <Title $noBackground text={'Conocé E-Ride'} />

        <SectionContainer>
          <SubTitle>Descubri el Poder de la Aventura</SubTitle>
          <TextImageCtn>
            <Text>
              En el corazón de la pintoresca provincia de San Juan, Argentina,
              se encuentra E-ride, tu destino definitivo para explorar el
              emocionante mundo de la movilidad electrica. Si sos un amante de
              la aventura, E-ride tiene todo lo que necesitas para comenzar tu
              viaje.
            </Text>
            <Image src={imageStore2} alt="" />
          </TextImageCtn>
        </SectionContainer>

        <SectionContainer>
          <SubTitle>Calidad Inigualable</SubTitle>
          <TextImageCtn>
            <Text>
              Nos enorgullece ofrecer una amplia gama de scooters de la más alta
              calidad. Cada monopatin que vendemos está cuidadosamente
              seleccionada por su durabilidad, rendimiento, lo que garantiza que
              obtengas el máximo valor por tu inversión.
            </Text>
          </TextImageCtn>
        </SectionContainer>

        <SectionContainer>
          <SubTitle>Comodidad en Línea</SubTitle>
          <Text>
            Sabemos que tu tiempo es valioso. Es por eso que hemos creado una
            plataforma de compras en línea intuitiva y segura que te permite
            explorar nuestra selección, hacer pedidos y realizar pagos sin
            problemas desde la comodidad de tu hogar.
          </Text>
          <Image src={imageStore3} alt="" />
        </SectionContainer>
      </Wrapper>
    </>
  )
}

const Image = styled.img`
  width: 350px;
  border-radius: 10px;
  object-fit: contain;
`

const TextImageCtn = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 30px;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  padding-block: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
  flex-direction: column;
  background-color: #f5f5f5;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  flex-direction: column;
  gap: 3em;
  padding-inline: 1em;
  max-width: 60ch;
`
const SubTitle = styled.h2`
  font-weight: 800;
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  width: 100%;
`

const Text = styled.p`
  width: 100%;
`
