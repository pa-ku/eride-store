import styled from 'styled-components'
import Title from '../ui/Title'
import { bikes } from '../../../data.js'
import MainButton from '../ui/MainButton'
import FavButton from '../ui/FavButton'

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

const ProductImage = styled.img`
  display: flex;
  align-items: start;
  object-fit: contain;
  justify-content: start;
  width: 100%;
  height: 100%;
  pointer-events: none;
  @media (max-width: 700px) {
    padding-inline: 10px;
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

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #000000;
`
const ProductOldPrice = styled.p`
  font-size: 1.2rem;
  text-decoration: line-through;
  color: var(--main-color-550);
  height: 15px;
`

const ProductDescription = styled.p`
  text-align: start;
  margin-bottom: 10px;
`

export default function Featured(data) {
  const [images, discount, title, price, description] = data
  return (
    <>
      <Wrapper>
        <Title accent={'Destacado'} />
        <ProductWrapper>
          <ProductInfoContainer>
            <ProductTitle>{bike.title}</ProductTitle>
            <ProductOldPrice>
              {'$' +
                bike.oldPrice
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
            </ProductOldPrice>
            <ProductPrice>
              {'$' +
                bike.price
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
            </ProductPrice>

            <ProductDescription>{bike.description}</ProductDescription>

            <MainButton typeLink to={'/product/id/' + bike._id}>
              Ver más
            </MainButton>
          </ProductInfoContainer>
          <ProductImageContainer>
            <FavCtn>
              <FavButton id={bike._id} />
            </FavCtn>
            <DiscountLabel>{discount}</DiscountLabel>
            <ProductImage src={bike.img[0]} alt='' />
          </ProductImageContainer>
        </ProductWrapper>
      </Wrapper>
    </>
  )
}

const DiscountLabel = styled.p`
  background-color: var(--main-color-500);
  width: max-content;
  height: 35px;
  padding: 0.2em 0.5em;
  font-size: 22px;
  font-weight: 800;
  color: white;
  position: relative;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: start;
  &:after {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    left: 100%;
    top: 0;
    border-top: 35px solid transparent;
    border-left: 20px solid var(--main-color-500);
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`
