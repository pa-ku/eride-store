import styled from 'styled-components'
import FavButton from '../ui/FavButton.jsx'
import { calcDiscount } from '../../utils/calcDiscount.js'
import { formatPrice } from '../../utils/formatPrice.js'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { requestOneById } from '../../api/scooters.js'
import { useState } from 'react'
import FeaturedSkeleton from './FeaturedSkeleton.jsx'

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

const FavCtn = styled.div`
  position: absolute;
  right: 0px;
  scale: 1.2;
  @media (max-width: 700px) {
    margin-right: 20px;
  }
`

export default function ProductFeatured() {
  const [product, setProduct] = useState([])

  async function getOneProduct() {
    const data = await requestOneById('66e4906be4f50256a4d1f2b5')
    setProduct(data)
  }

  useEffect(() => {
    getOneProduct()
  }, [])

  return (
    <>
      <section className="flex flex-col items-center justify-start gap-10">
        <h2 className="text-4xl">Destacado</h2>
        {product.length !== 0 ? (
          <div className="flex flex-col-reverse px-4 md:flex-row">
            <div className="flex flex-col md:size-96">
              <h2 className="text-3xl">{product.title}</h2>
              <div>
                {product.discount && (
                  <p className="text-gray-500 line-through">
                    $ {calcDiscount(product.price, product.discount)}
                  </p>
                )}
                <span className="flex items-center gap-2">
                  <p className="text-3xl text-primary-600">
                    {product.price && formatPrice(product.price)}
                  </p>
                </span>
              </div>

              <p className="">{product.description}</p>

              <Link
                className="w-full bg-primary-500 py-3 text-center font-bold text-white hover:bg-primary-400 md:w-40"
                to={'/product/id/' + product._id}
              >
                Saber Más
              </Link>
            </div>
            <ProductImageContainer className="px-2">
              <FavCtn>
                <FavButton id={product.id} />
              </FavCtn>
              <p className="absolute text-2xl font-bold text-primary-400">
                {product.discount}% OFF
              </p>

              <img
                className="size-80 m-auto object-contain md:size-96"
                fetchPriority="high"
                src={product.coverImage}
                alt="imagen de producto destacado"
              />
            </ProductImageContainer>
          </div>
        ) : (
          <FeaturedSkeleton></FeaturedSkeleton>
        )}
      </section>
    </>
  )
}
