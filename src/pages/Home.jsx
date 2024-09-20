import Banner from '../components/home/Banner'
import styled from 'styled-components'
import Title from '../components/ui/Title'
import AboutMe from '../components/home/About'
import OurBrands from '../components/home/OurBrands'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductFeatured from '../components/home/ProductFeatured'
import { Link } from 'react-router-dom'
import { API_ROUTE } from '../api/auth'

export default function Home() {
  const [itemsHasDiscount, setItemsHasDiscount] = useState([])
  const [itemsNoDiscount, setItemsNoDiscount] = useState([])

  async function fetchAllScooters() {
    try {
      const res = await fetch(`${API_ROUTE}/scooters`)
      const data = await res.json()

      if (!res.ok) {
        throw new Error('Recurso no encontrado', res.status)
      }

      const hasDiscount = data.filter((item) => item.discount != null)
      const noDiscount = data.filter((item) => item.discount == null)
      setItemsHasDiscount(hasDiscount)
      setItemsNoDiscount(noDiscount)
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  const featuredProduct = itemsHasDiscount.find(
    (item) => item._id === '66e4906be4f50256a4d1f2b5',
  )

  useEffect(() => {
    fetchAllScooters()
  }, [])

  return (
    <>
      <Banner
        title="SOLO LO MEJOR"
        subtitle="No te conformes con menos cuando se trata de tu pasión"
      />
      <OurBrands />
      <main className="flex flex-col items-center justify-center gap-20 py-20">
        {featuredProduct && <ProductFeatured data={featuredProduct} />}
        <section>
          <Title text={'Las mejores '} accent={'Ofertas'} />
          <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
            {itemsHasDiscount
              .slice(0, 5)
              .map(
                ({ title, images, _id: id, price, description, discount }) => (
                  <ProductCard
                    key={id}
                    images={images[0]}
                    title={title}
                    id={id}
                    price={price}
                    discount={discount}
                    description={description}
                  />
                ),
              )}
          </div>
        </section>
        <section>
          <Title text={'Más Vendido'} />
          <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
            {itemsNoDiscount
              .slice(0, 5)
              .map(
                ({ title, images, _id: id, price, description, discount }) => (
                  <ProductCard
                    key={title}
                    images={images[0]}
                    title={title}
                    id={id}
                    price={price}
                    discount={discount}
                    description={description}
                  />
                ),
              )}
          </div>
        </section>
        <Link
          to={'/product/scooters'}
          className="rounded-lg bg-primary-400 px-4 py-2 text-lg text-white"
        >
          Ver todos los productos
        </Link>
      </main>
      |
      <AboutMe />
    </>
  )
}
