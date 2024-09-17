import styled from 'styled-components'
import { device } from '../responsive'
import ProductCard from './ProductCard'
import { fetchScooters } from '../utils/fetchScooters'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  min-height: 450px;
`

const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 3em;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0em;
    width: 100%;
  }
`

export default async function ProductsLayout() {
  const data = await fetchScooters()
  return (
    <>
      <Wrapper>
        <Container>
          {data.map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              images={item.images[0]}
              description={item.description}
              title={item.title}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Container>
      </Wrapper>
    </>
  )
}
