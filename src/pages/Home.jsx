import Banner from '../components/home/Banner'
import AboutMe from '../components/home/About'
import OurBrands from '../components/home/OurBrands'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductFeatured from '../components/home/ProductFeatured'
import { Link } from 'react-router-dom'
import { requestManyId } from '../api/scooters'

export default function Home() {
  const [data, setData] = useState()
  const [bestSelled, setBestSelled] = useState()

  const idArray = [
    '66e4906be4f50256a4d1f2c6',
    '66e4906be4f50256a4d1f2ba',
    '66e4906be4f50256a4d1f2c3',
    '66e4906be4f50256a4d1f2b6',
  ]

  const selledArr = [
    '66e4906be4f50256a4d1f2bb',
    '66e4906be4f50256a4d1f2b9',
    '66e4906be4f50256a4d1f2be',
    '66e4906be4f50256a4d1f2c1',
  ]

  async function requestMany() {
    const data = await requestManyId(idArray)
    setData(data)
    const bestSelled = await requestManyId(selledArr)
    setBestSelled(bestSelled)
  }

  useEffect(() => {
    requestMany()
  }, [])

  return (
    <>
      <Banner
        title="SOLO LO MEJOR"
        subtitle="No te conformes con menos cuando se trata de tu pasión"
      />
      <OurBrands />
      <main className="flex flex-col items-center justify-center gap-20 py-20">
        <ProductFeatured />

        <ProductsRederedBySection
          title="Las mejores ofertas"
          data={data}
        ></ProductsRederedBySection>

        <ProductsRederedBySection
          title="Más vendidos"
          data={bestSelled}
        ></ProductsRederedBySection>
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

export function ProductsRederedBySection({ title, data }) {
  return (
    <section className="flex flex-col justify-start gap-5">
      <h2 className="text-center text-4xl">{title}</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
        {data &&
          data.map(
            ({ title, coverImage, _id: id, price, description, discount }) => (
              <ProductCard
                key={title}
                image={coverImage}
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
  )
}
