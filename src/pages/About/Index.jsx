import styled from 'styled-components'
import imageStore2 from './images/aboutussanjuan.webp'
import imageStore3 from './images/aboutusshipping.webp'

export default function About() {
  return (
    <>
      <Wrapper>
        <h1 className="text-4xl">Conocé E-Ride</h1>
        <div className="flex max-w-[45em] flex-col items-center space-y-2 text-start md:flex-row">
          <p>
            En el corazón de la pintoresca provincia de San Juan, Argentina, se
            encuentra E-ride, tu destino definitivo para explorar el emocionante
            mundo de la movilidad electrica. Si sos un amante de la aventura,
            E-ride tiene todo lo que necesitas para comenzar tu viaje.
          </p>
          <img
            width={350}
            className="rounded-lg object-contain"
            src={imageStore2}
            alt="Imagen de san juan"
          />
        </div>

        <div className="max-w-[45em] space-y-2 text-start">
          <SubTitle>Calidad Inigualable</SubTitle>
          <TextImageCtn>
            <p>
              Nos enorgullece ofrecer una amplia gama de scooters de la más alta
              calidad. Cada monopatin que vendemos está cuidadosamente
              seleccionada por su durabilidad, rendimiento, lo que garantiza que
              obtengas el máximo valor por tu inversión.
            </p>
          </TextImageCtn>
        </div>

        <div className="flex max-w-[45em] flex-col items-center space-y-2 text-start">
          <SubTitle>Comodidad en Línea</SubTitle>
          <p>
            Sabemos que tu tiempo es valioso. Es por eso que hemos creado una
            plataforma de compras en línea intuitiva y segura que te permite
            explorar nuestra selección, hacer pedidos y realizar pagos sin
            problemas desde la comodidad de tu hogar.
          </p>
          <img
            width={350}
            className="rounded-lg object-contain"
            src={imageStore3}
            alt=""
          />
        </div>
      </Wrapper>
    </>
  )
}

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

const SubTitle = styled.h2`
  font-weight: 800;
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  width: 100%;
`
