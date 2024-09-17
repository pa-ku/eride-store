import styled from 'styled-components'
import Title from '../components/ui/Title'
import ProductCard from '../components/ProductCard.jsx'

export default function Favorites() {
  return (
    <>
      <Wrapper>
        <Title text={'FAVORITOS'} />
        <Msj>Agrega tus productos favoritos y velos en esta sección!</Msj>
        <Container>
          {/*   {filteredProducts.map((item) => (
            <ProductCard
              key={item.title}
              id={item._id}
              img={item.img[0]}
              bio={item.bio}
              title={item.title}
              price={item.price}
              size={item.size}
            />
          ))} */}
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  text-align: center;
  padding-block: 2em;
  display: flex;
  gap: 4em;

  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: start;

  min-height: 800px;
`

const Msj = styled.p`
  padding-inline: 20px;
`

const Container = styled.div`
  width: 80em;
  height: 100%;
  display: flex;
  gap: 3em;

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0em;
    width: 100%;
  }
`
