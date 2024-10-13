import Banner from '../components/home/Banner'
import AboutMe from '../components/home/About'
import OurBrands from '../components/home/OurBrands'
import ProductFeatured from '../components/home/ProductFeatured'
import { Link } from 'react-router-dom'
import FeaturedSkeleton from '../components/home/FeaturedSkeleton'
import ProductSkeleton from '../components/ProductSkeleton'

import ProductCard from '../components/ProductCard'
import useReqOne from '../hooks/useReqOne'
import useReqMany from '../hooks/useReqMany'

export default function Home() {
  const featuredId = '66e4906be4f50256a4d1f2b5'
  const bestOffersIds = [
    '66e4906be4f50256a4d1f2c6',
    '66e4906be4f50256a4d1f2ba',
    '66e4906be4f50256a4d1f2c3',
    '66e4906be4f50256a4d1f2b6',
  ]
  const bestSellersIds = [
    '66e4906be4f50256a4d1f2bb',
    '66e4906be4f50256a4d1f2b9',
    '66e4906be4f50256a4d1f2be',
    '66e4906be4f50256a4d1f2c1',
  ]

  const { data: featuredData, loading: loadingFeatured } = useReqOne(featuredId)

  const { data: bestOffers, loading: loadingBestOffers } =
    useReqMany(bestOffersIds)

  const { data: bestSellers, loading: loadingBestSellers } =
    useReqMany(bestSellersIds)

  return (
    <>
      <Banner
        title="SOLO LO MEJOR"
        subtitle="No te conformes con menos cuando se trata de tu pasión"
      />
      <OurBrands />
      <main className="flex flex-col items-center justify-center gap-20 py-20">
        <section className="flex flex-col items-center justify-start gap-10">
          <h2 className="text-4xl">Destacado</h2>
          {loadingFeatured ? (
            <FeaturedSkeleton></FeaturedSkeleton>
          ) : (
            <ProductFeatured data={featuredData} />
          )}
        </section>

        <section className="flex min-h-96 flex-col justify-start gap-5">
          <h2 className="text-center text-4xl">Las mejores ofertas</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
            {loadingBestOffers ? (
              <>
                <ProductSkeleton></ProductSkeleton>
                <ProductSkeleton></ProductSkeleton>
                <ProductSkeleton></ProductSkeleton>
                <ProductSkeleton></ProductSkeleton>
              </>
            ) : (
              bestOffers.map((productData, index) => (
                <ProductCard key={index} productData={productData} />
              ))
            )}
          </div>
        </section>

        <section className="flex min-h-96 flex-col justify-start gap-5">
          <h2 className="text-center text-4xl">Más vendidos</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
            {loadingBestSellers ? (
              <>
                <ProductSkeleton></ProductSkeleton>
                <ProductSkeleton></ProductSkeleton>
                <ProductSkeleton></ProductSkeleton>
                <ProductSkeleton></ProductSkeleton>
              </>
            ) : (
              bestSellers.map((productData, index) => (
                <ProductCard key={index} productData={productData} />
              ))
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
