import styled from 'styled-components'
import { device } from '../responsive'

import { Link } from 'react-router-dom'
import FavButton from './ui/FavButton'

const DiscountTxt = styled.p`
  background-color: var(--main-color-500);
  width: 55px;
  height: 28px;
  position: absolute;
  font-size: 15px;
  color: white;
  border-radius: 0px 0px 4px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
`

export default function ProductCard({ id, images, price, title, discount }) {
  return (
    <>
      <WrapperCard href=''>
        {discount && <DiscountTxt>{discount}%</DiscountTxt>}

        <FavCtn>
          <FavButton id={id} />
        </FavCtn>

        <CardLink to={`/product/id/${id}`}>
          <ImageContainer>
            <Image loading='lazy' src={images} />
          </ImageContainer>
          <PrinceCtn>
            <TxtPrice>
              ${price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
            </TxtPrice>
            <Txtdiscount>
              {discount &&
                `${discount
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`}
            </Txtdiscount>
            <Shipping>Envío gratis</Shipping>
          </PrinceCtn>
          <Title className='Title'>{title}</Title>
        </CardLink>
      </WrapperCard>
    </>
  )
}

const PrinceCtn = styled.div``

const Txtdiscount = styled.p`
  text-decoration: line-through;
  color: #888;
  font-size: 14px;

  color: var(--main-color-550);

  font-weight: 600;
`

const FavCtn = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin-top: 0.5em;
  margin-right: 1em;
`

const WrapperCard = styled.div`
  width: 16em;
  height: 100%;
  border-radius: 9px;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  box-shadow: 0px 0px 10px 5px #cccccc29;
  transition: 0.5s;
  text-decoration: none;
  color: black;
  text-align: left;
  padding: 0em 0.5em;
  position: relative;
  opacity: 0;
  animation: 100ms show forwards;
  &:hover {
    box-shadow: 0px 0px 10px 5px #cccccc65;
  }

  @media ${device.mobile} {
    width: 100%;
    border-radius: 0;

    box-shadow: 0px 0px 0px 0px #333;
    outline: 1px solid #ececec;
    &:hover {
      box-shadow: 0px 0px 0px 0px #333;
    }
  }
`

const Title = styled.p`
  padding-bottom: 20px;
  font-weight: 600;
  color: #444;
  @media ${device.mobile} {
    font-size: 1rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 15.5em;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  padding: 20px;
  @media ${device.mobile} {
    height: 10em;
  }
`

const Image = styled.img`
  object-fit: contain;
  pointer-events: none;

  max-height: 230px;
  max-width: 230px;
  @media ${device.mobile} {
    width: 100%;
  }
`

const TxtPrice = styled.p`
  font-size: 25px;
  text-align: left;
`

const Shipping = styled.p`
  color: #16ad5f;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #111;
`
