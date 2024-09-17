import Banner from '../components/home/Banner'
import styled from 'styled-components'
import Title from '../components/ui/Title'
import AboutMe from '../components/home/About'
import OurBrands from '../components/home/OurBrands'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductFeatured from '../components/home/ProductFeatured'

export default function Home() {
  const [itemsData, setItemsData] = useState([])

  async function fetchAllScooters() {
    try {
      const res = await fetch(`http://localhost:5000/api/scooters`)
      const data = await res.json()
      setItemsData(data)
      if (!res.ok) {
        throw new Error('Recurso no encontrado', res.status)
      }

      console.log(data)
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  useEffect(() => {
    fetchAllScooters()
  }, [])
  return (
    <>
      <Banner
        title='SOLO LO MEJOR'
        subtitle='No te conformes con menos cuando se trata de tu pasión'
      />
      <OurBrands />
      {/*   <ProductFeatured
        data={itemsData.filter((item) =>
          item._id.includes('66e48c2575b6b2509c12de9a')
        )}
      /> */}
      <section>
        <Title text={'Las mejores '} accent={'Ofertas'} />
        <div className='flex gap-4 items-center justify-center'>
          {itemsData
            .slice(0, 5)
            .map(({ title, images, _id: id, price, description, discount }) => (
              <ProductCard
                key={id}
                images={images[0]}
                title={title}
                id={id}
                price={price}
                discount={discount}
                description={description}
              />
            ))}
        </div>
      </section>
      <section>
        <Title text={'Más Vendido'} />
      </section>
      <AboutMe />
    </>
  )
}
