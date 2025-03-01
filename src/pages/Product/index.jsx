import { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import FavButton from '../../components/FavButton.jsx'
import Shipping from './components/Shipping.jsx'
import Carousel from '../../components/Carousel.jsx'
import { formatPrice } from '../../utils/formatPrice.js'
import { calcDiscount } from '../../utils/calcDiscount.js'

import ShowcaseSkeleton from './components/Skeleton.jsx'
import useGetProductById from '#src/services/api/useGetProductById.jsx'

export default function ProductShowcase () {
  const location = useLocation()
  const productId = location.pathname.split('/')[3]
  const [shipping, setShipping] = useState(false)

  const { data, loading } = useGetProductById(productId)

  const hoy = new Date()
  const seisDiasDespues = new Date()
  seisDiasDespues.setDate(hoy.getDate() + 6)
  const diaDeLaSemana =
    seisDiasDespues.toLocaleDateString('es-ES', {
      weekday: 'long'
    }) +
    ' ' +
    seisDiasDespues.toLocaleDateString()

  return (
    <>
      <Wrapper className='min-h-screen'>
        {shipping === true && (
          <Shipping
            title={data.title}
            price={data.price}
            shipping={shipping}
            setShipping={setShipping}
          />
        )}

        {loading
          ? (
            <ShowcaseSkeleton />
            )
          : (
            <>
              <section className='flex min-h-[30em] flex-col items-center justify-center px-4 lg:flex-row lg:items-start'>
                <div className='flex'>
                  <Carousel
                    coverImage={data.coverImage}
                    render={data.images.length}
                    images={data.images}
                  />
                </div>

                <div className='space-y-2'>
                  <div className='flex gap-1'>
                    <h1 className='text-4xl'>{data.title} </h1>
                    <FavButton productId={data._id} />
                  </div>
                  <DescriptionTxt>{data.description}</DescriptionTxt>

                  <p className='text-green-600'>
                    Llega gratis el {diaDeLaSemana}
                  </p>

                  <div className='flex flex-col text-start'>
                    <p className='font-bold text-[var(--main-color-450)]'>
                      Devolución gratis
                    </p>
                    <p>Tenés 30 días desde que lo recibís.</p>
                  </div>
                  <div className='flex flex-col items-start'>
                    {data.discount && (
                      <>
                        <p className='text-gray-500 line-through'>
                          ${formatPrice(data.price)}
                        </p>
                        <span className='flex items-center gap-2'>
                          <p className='text-3xl'>
                            ${calcDiscount(data.price, data.discount)}
                          </p>
                          <p className='text-xl text-primary-600'>
                            {data.discount}% OFF
                          </p>
                        </span>
                      </>
                    )}
                    {data.price && !data.discount && (
                      <p className='text-3xl'>${formatPrice(data.price)}</p>
                    )}
                  </div>
                  <button className='button' onClick={() => setShipping(true)}>
                    COMPRAR
                  </button>
                </div>
              </section>

              <section className='flex min-h-[30em] flex-col items-center bg-gray-100 py-10'>
                <h2 className='text-3xl'>ESPECIFICACIONES</h2>

                <SpecsContainer>
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
