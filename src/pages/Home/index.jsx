import AboutMe from '#pages/home/components/About'
import OurBrands from '#pages/home/components/OurBrands'
import Featured from '#pages/home/components/ProductFeatured'
import FeaturedSkeleton from '#pages/home/components/FeaturedSkeleton'
import Banner from '#pages/home/components/Banner'
import { Link } from 'react-router-dom'
import ProductCard from '#components/ProductCard'
import ProductSkeleton from '#components/ProductSkeleton'

import homeBanner from './images/scotter-banner.webp'
import useGetProducts from '#src/services/api/useGetProducts.jsx'

export default function Home() {
  const { data: featuredData, loading: loadingFeatured } =
    useGetProducts('filter/featured')

  const { data: bestOffers, loading: loadingBestOffers } =
    useGetProducts('filter/bestOffers')

  const { data: bestSellers, loading: loadingBestSellers } =
    useGetProducts('filter/bestSellers')

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
            <FeaturedSkeleton />
          ) : (
            <Featured data={featuredData} />
          )}
        </section>

        <section className="flex min-h-96 flex-col justify-start gap-5">
          <h2 className="text-center text-4xl">Las mejores ofertas</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
            {loadingBestOffers
              ? Array(5)
                  .fill()
                  .map((_, index) => <ProductSkeleton key={index} />)
              : Array.isArray(bestOffers) &&
                bestOffers.map((productData, index) => (
                  <ProductCard key={index} productData={productData} />
                ))}
          </div>
        </section>
        <section className="relative flex h-[calc(100vh-10em)] w-full snap-mandatory flex-col items-center justify-center gap-2 text-white">
          <div className="flex max-w-[45em] flex-col">
            <h2 className="text-6xl font-bold">
              Nunca pares de viajar elegi la mejor autonomia
            </h2>
            <p className="text-2xl">
              Hagas lo que hagas, vas a necesitar equipo resistente, cómodo y
              duradero.
            </p>
          </div>
          <Link
            to={'/product/scooters'}
            className="mt-5 rounded-full bg-white px-5 py-4 font-bold text-black hover:bg-primary-600 hover:text-white"
          >
            Explorar la colección
          </Link>

          <img
            className="absolute -z-10 h-full w-full object-cover object-center blur-[1px] brightness-90"
            loading="lazy"
            src={homeBanner}
            alt="Imagen del banner"
          />
        </section>
        <section className="flex min-h-96 flex-col justify-start gap-5">
          <h2 className="text-center text-4xl">Más vendidos</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
            {loadingBestSellers
              ? Array(5)
                  .fill()
                  .map((_, index) => <ProductSkeleton key={index} />)
              : Array.isArray(bestSellers) &&
                bestSellers.map((productData, index) => (
                  <ProductCard key={index} productData={productData} />
                ))}
          </div>
        </section>
      </main>
      <AboutMe />
    </>
  )
}
