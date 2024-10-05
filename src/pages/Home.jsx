import Banner from '../components/home/Banner'
import AboutMe from '../components/home/About'
import OurBrands from '../components/home/OurBrands'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductFeatured from '../components/home/ProductFeatured'
import { Link } from 'react-router-dom'
import { requestManyId } from '../api/scooters'
import ProductSkeleton from '../components/ProductSkeleton'
import FeaturedSkeleton from '../components/home/FeaturedSkeleton'
import { API_ROUTE } from '../api/API_ROUTE'

export default function Home() {
  const [data, setData] = useState([])
  const [featuredProduct, setFeaturedProduct] = useState({})
  const [loadingFeatured, setLoadingFeatured] = useState(true)
  const featuredProductId = '66e4906be4f50256a4d1f2b5'

  const idArray = [
    '66e4906be4f50256a4d1f2c6',
    '66e4906be4f50256a4d1f2ba',
    '66e4906be4f50256a4d1f2c3',
    '66e4906be4f50256a4d1f2b6',
    '66e4906be4f50256a4d1f2bb',
    '66e4906be4f50256a4d1f2b9',
    '66e4906be4f50256a4d1f2be',
    '66e4906be4f50256a4d1f2c1',
  ]

  async function requestMany() {
    try {
      const data = await requestManyId(idArray)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function requestOneById() {
    try {
      setLoadingFeatured(true)
      const res = await fetch(`${API_ROUTE}/scooters/${featuredProductId}`)
      const data = await res.json()
      setLoadingFeatured(false)
      setFeaturedProduct(data)
      return
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  useEffect(() => {
    requestOneById()
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
        {loadingFeatured ? (
          <FeaturedSkeleton></FeaturedSkeleton>
        ) : (
          <ProductFeatured data={featuredProduct} />
        )}

        <ProductsRederedBySection
          title="Las mejores ofertas"
          data={data && data.slice(0, 4)}
        ></ProductsRederedBySection>

        <ProductsRederedBySection
          title="Más vendidos"
          data={data && data.slice(4, 8)}
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
    <section className="flex min-h-96 flex-col justify-start gap-5">
      <h2 className="text-center text-4xl">{title}</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
        {data ? (
          data.map(
            (
              { title, coverImage, _id: id, price, description, discount },
              index,
            ) => (
              <ProductCard
                key={index}
                image={coverImage}
                title={title}
                id={id}
                price={price}
                discount={discount}
                description={description}
              />
            ),
          )
        ) : (
          <>
            <ProductSkeleton></ProductSkeleton>
            <ProductSkeleton></ProductSkeleton>
            <ProductSkeleton></ProductSkeleton>
            <ProductSkeleton></ProductSkeleton>
          </>
        )}
      </div>
    </section>
  )
}
