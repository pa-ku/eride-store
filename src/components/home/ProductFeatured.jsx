import styled from 'styled-components'
import FavButton from '../ui/FavButton.jsx'
import { calcDiscount } from '../../utils/calcDiscount.js'
import { formatPrice } from '../../utils/formatPrice.js'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
`

const ProductWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 1em;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`

const ProductInfoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  max-width: 40ch;
  @media (max-width: 700px) {
    padding-inline: 10px;
  }
`
const ProductImageContainer = styled.div`
  height: 420px;
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  @media (max-width: 700px) {
    height: 340px;
    width: 100%;
  }
`

const FavCtn = styled.div`
  position: absolute;
  right: 0px;
  scale: 1.2;
  @media (max-width: 700px) {
    margin-right: 20px;
  }
`
const ProductTitle = styled.p`
  color: #111;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
  z-index: 1;
`

const ProductDescription = styled.p`
  text-align: start;
  margin-bottom: 10px;
`

export default function ProductFeatured({ data }) {
  const { title, price, discount, description, images, _id: id } = data
  return (
    <>
      <Wrapper>
        <h2 className="text-4xl">Destacado</h2>
        <ProductWrapper>
          <ProductInfoContainer>
            <ProductTitle>{title}</ProductTitle>
            <div>
              {discount && (
                <p className="text-gray-500 line-through">
                  $ {calcDiscount(price, discount)}
                </p>
              )}
              <span className="flex items-center gap-2">
                <p className="text-3xl text-primary-600">
                  {formatPrice(price)}
                </p>
              </span>
            </div>

            <ProductDescription>{description}</ProductDescription>

            <Link
              className="w-full bg-primary-500 py-3 text-center font-bold text-white hover:bg-primary-400 md:w-40"
              to={'/product/id/' + id}
            >
              Saber Más
            </Link>
          </ProductInfoContainer>
          <ProductImageContainer className="px-2">
            <FavCtn>
              <FavButton id={id} />
            </FavCtn>
            <p className="absolute text-2xl font-bold text-primary-400">
              {discount}% OFF
            </p>
            {images && (
              <img
                className="size-80 object-contain md:size-96"
                src={images[0]}
                alt=""
              />
            )}
          </ProductImageContainer>
        </ProductWrapper>
      </Wrapper>
    </>
  )
}
