import styled from 'styled-components'
import svg from '../../assets/low.svg'
import mercado from '../../assets/icons/mercado.webp'

const FooterCtn = styled.footer`
  padding-top: 2em;
  padding-bottom: 1em;
  width: 100%;
  min-height: 230px;

  color: #fff;
  display: flex;

  flex-direction: column;
  position: relative;
`

const BackgroundImage = styled.img`
  object-fit: cover;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const TxtCopyright = styled.p`
  font-size: 14px;
  color: #cacaca;
`

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-row-gap: 2em;
  justify-content: center;
  padding-bottom: 2em;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  transition: 0.2s;
`

const TxtSection = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  color: #cacaca;
`

const CtnRights = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`

const TitleText = styled.h2`
  font-size: 18px;
  position: relative;
  color: var(--main-color-300);
  margin-bottom: 10px;
  &::before {
    content: '';
    position: absolute;

    width: 70px;
    bottom: 0px;

    height: 2px;
    background-color: var(--main-color-500);
  }
`

export default function Footer() {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <FooterCtn className="bg-slate-800/95">
      <Wrapper>
        <Section>
          <TitleText>CONTACTO</TitleText>

          <TxtSection>consultas.eride@gmail.com</TxtSection>

          <div className="flex items-center justify-center gap-3 py-2">
            <a
              className="stroke-white object-contain hover:stroke-primary-400"
              href=""
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>
            <a
              className="stroke-white object-contain hover:stroke-primary-400"
              href=""
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a
              className="stroke-white object-contain hover:stroke-primary-400"
              href=""
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>
          </div>
        </Section>
        <Section>
          <TitleText>PAGO SEGURO</TitleText>
          <TxtSection>
            Podés pagar con tarjeta, débito y efectivo. Tus datos y las compras
            están protegidas con
          </TxtSection>
          <div className="flex items-center justify-center">
            <a
              rel="noreferrer"
              href="https://www.mercadopago.com.ar/c/pagar-online-con-mercadopago"
              target="_blank"
              className="size-max duration-300 hover:scale-105"
            >
              <img className="h-12 w-36 object-cover" src={mercado} alt="" />
            </a>
          </div>
        </Section>
      </Wrapper>

      <CtnRights>
        <TxtCopyright>Copyright © 2021 - {year} Eride </TxtCopyright>
      </CtnRights>
      <BackgroundImage src={svg} alt="" />
    </FooterCtn>
  )
}
