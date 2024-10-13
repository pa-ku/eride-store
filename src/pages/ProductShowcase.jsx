import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import FavButton from '../components/ui/FavButton.jsx'
import Shipping from '../components/Shipping.jsx'
import Carousel from '../components/Carousel.jsx'
import { formatPrice } from '../utils/formatPrice.js'
import { calcDiscount } from '../utils/calcDiscount.js'
import MainButton from '../components/ui/MainButton.jsx'
import ShowcaseSkeleton from '../components/ShowcaseSkeleton.jsx'
import { API_ROUTE } from '../api/API_ROUTE.js'

export default function ProductShowcase() {
  const location = useLocation()
  const productId = location.pathname.split('/')[3]
  const [data, setData] = useState({})
  const [shipping, setShipping] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    requestOneById()
  }, [productId])

  async function requestOneById() {
    try {
      setLoading(true)
      const res = await fetch(`${API_ROUTE}/scooters/${productId}`)
      const data = await res.json()
      data.images.unshift(data.coverImage)
      setLoading(false)
      setData(data)
      return
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  function handleShipping() {
    setShipping(true)
  }

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
      <Wrapper className="">
        {shipping === true && (
          <Shipping
            title={data.title}
            price={data.price}
            shipping={shipping}
            setShipping={setShipping}
          />
        )}

        {loading ? (
          <ShowcaseSkeleton></ShowcaseSkeleton>
        ) : (
          <>
            <section className="flex min-h-[30em] flex-col items-center justify-center px-4 lg:flex-row lg:items-start">
              <div className="flex">
                <Carousel
                  coverImage={data.coverImage}
                  render={data.images.length}
                  images={data.images}
                />
              </div>

              <div className="space-y-2">
                <div className="flex gap-1">
                  <h1 className="text-4xl">{data.title} </h1>
                  <FavButton productId={data._id} />
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
            </section>

            <section className="flex min-h-[30em] flex-col items-center bg-gray-100 py-10">
              <h2 className="text-3xl">ESPECIFICACIONES</h2>

              <SpecsContainer className="">
                {data.specs.map(({ category, name, info }) => (
                  <div key={name}>
                    <SpecRow>
                      {category && <SpecsTitle>{category}</SpecsTitle>}
                      <SpecsName>{name}</SpecsName>
                      <SpecsInfo>{info}</SpecsInfo>
                    </SpecRow>
                  </div>
                ))}
              </SpecsContainer>
            </section>
          </>
        )}
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

const DescriptionTxt = styled.p`
  font-size: 15px;
  text-align: start;
  max-width: 80ch;
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
