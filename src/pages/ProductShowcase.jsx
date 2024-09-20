import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from '../components/ui/Title.jsx'
import { useLocation } from 'react-router'
import FavButton from '../components/ui/FavButton.jsx'
import Shipping from '../components/Shipping.jsx'
import Carousel from '../components/Carousel.jsx'
import { formatPrice } from '../utils/formatPrice.js'
import { calcDiscount } from '../utils/calcDiscount.js'
import MainButton from '../components/ui/MainButton.jsx'
import { API_ROUTE } from '../api/auth.js'

export default function ProductShowcase() {
  const location = useLocation()
  const productId = location.pathname.split('/')[3]
  const [data, setData] = useState({})
  const [shipping, setShipping] = useState(false)

  console.log(data)

  useEffect(() => {
    fetchOneItem()
  }, [productId])

  async function fetchOneItem() {
    try {
      const res = await fetch(`${API_ROUTE}/scooters/${productId}`)
      const data = await res.json()
      setData(data)
      if (!res.ok) {
        throw new Error('Recurso no encontrado', res.status)
      }
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  function handleShipping() {
    setShipping(true)
  }

  // Agrega 6 días a la fecha actual
  var hoy = new Date()
  var seisDiasDespues = new Date()
  seisDiasDespues.setDate(hoy.getDate() + 6)
  var diaDeLaSemana =
    seisDiasDespues.toLocaleDateString('es-ES', {
      weekday: 'long',
    }) +
    ' ' +
    seisDiasDespues.toLocaleDateString()

  return (
    <>
      <Wrapper>
        {shipping === true && (
          <Shipping
            title={data.title}
            price={data.price}
            shipping={shipping}
            setShipping={setShipping}
          />
        )}
        <div className="flex flex-col items-center justify-center px-4 lg:flex-row lg:items-start">
          <div className="flex">
            {data.images && (
              <Carousel render={data.images.length} images={data.images} />
            )}
          </div>

          <div className="space-y-2">
            <div className="flex gap-1">
              <h1 className="text-4xl">{data.title} </h1>
              <FavButton id={data._id} />
            </div>
            <DescriptionTxt>{data.description}</DescriptionTxt>

            <FreeShippingCtn>
              <ReturnTitle>Llega gratis </ReturnTitle>
              <p>el {diaDeLaSemana}</p>
            </FreeShippingCtn>

            <ReturnContainer>
              <ReturnTitle>Devolución gratis</ReturnTitle>
              <ReturnSubtitle>
                Tenés 30 días desde que lo recibís.
              </ReturnSubtitle>
            </ReturnContainer>
            <div className="flex flex-col items-start">
              {data.discount && (
                <>
                  <p className="text-gray-500 line-through">
                    ${formatPrice(data.price)}
                  </p>
                  <span className="flex items-center gap-2">
                    <p className="text-3xl">
                      ${calcDiscount(data.price, data.discount)}
                    </p>
                    <p className="text-xl text-primary-600">
                      {data.discount}% OFF
                    </p>
                  </span>
                </>
              )}
              {data.price && !data.discount && (
                <p className="text-3xl">${formatPrice(data.price)}</p>
              )}
            </div>
            <MainButton onClick={handleShipping}>COMPRAR</MainButton>
          </div>
        </div>

        <SpecsWrapper>
          <Title $noBackground={true} text={'ESPECIFICACIÓNES'} />
          <SpecsContainer>
            {data.specs &&
              data.specs.map(({ category, name, info }) => (
                <div key={name}>
                  <SpecRow>
                    {category && <SpecsTitle>{category}</SpecsTitle>}
                    <SpecsName>{name}</SpecsName>
                    <SpecsInfo>{info}</SpecsInfo>
                  </SpecRow>
                </div>
              ))}
          </SpecsContainer>
        </SpecsWrapper>
      </Wrapper>
    </>
  )
}

const FreeShippingCtn = styled.div`
  display: flex;
  gap: 0.5em;
`
const ReturnContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`

const ReturnTitle = styled.p`
  color: var(--main-color-450);
  font-weight: 800;
`

const ReturnSubtitle = styled.p``

const Wrapper = styled.div`
  padding-top: 4em;
  display: flex;
  flex-direction: column;
  gap: 5em;
  justify-content: start;

  opacity: 0;
  animation: 400ms show forwards;
`

const ProductCtn = styled.div`
  text-align: center;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 4em;

  min-height: 400px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ImgCtn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  object-fit: contain;
  position: relative;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const InfoCtn = styled.div`
  width: 50%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  gap: 1em;
  margin-bottom: auto;
  @media (max-width: 700px) {
    width: 100%;
    padding-inline: 1em;
    text-align: start;
  }
`

const PriceTxt = styled.p`
  font-size: 30px;
  font-weight: 600;
`

const DescriptionTxt = styled.p`
  font-size: 15px;
  text-align: start;
  max-width: 80ch;
`

const ErrMsj = styled.p`
  height: 6px;
  color: #bd3333;
`
const FavCtn = styled.div`
  scale: 1.1;
  position: absolute;
  right: 20px;
  top: 10px;
  background-color: red;
`

const SpecsWrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  text-align: center;
  padding-block: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: auto;
`

const SpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  max-width: 1200px;
  gap: 5px;
  padding: 2em;
`
const SpecRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const SpecsName = styled.p`
  padding-left: 0.2em;
  margin-bottom: 5px;
  color: var(--main-color-600);
`

const SpecsTitle = styled.p`
  text-transform: uppercase;
  padding-bottom: 10px;
  font-weight: 800;

  color: var(--main-color-700);
`

const SpecsInfo = styled.p`
  padding-left: 0.8em;
`
