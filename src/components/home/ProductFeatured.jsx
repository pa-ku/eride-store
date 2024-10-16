import styled from 'styled-components'
import FavButton from '../FavButton.jsx'
import { calcDiscount } from '../../utils/calcDiscount.js'
import { formatPrice } from '../../utils/formatPrice.js'
import { Link } from 'react-router-dom'

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

export default function ProductFeatured({ data }) {
  return (
    <>
      <div className="flex flex-col-reverse px-4 md:flex-row">
        <div className="flex flex-col md:size-96">
          <h2 className="text-3xl">{data.title}</h2>
          <div>
            {data.discount && (
              <p className="text-gray-500 line-through">
                $ {calcDiscount(data.price, data.discount)}
              </p>
            )}
            <span className="flex items-center gap-2">
              <p className="text-3xl text-primary-600">
                {data.price && formatPrice(data.price)}
              </p>
            </span>
          </div>

          <p className="">{data.description}</p>

          <Link
            className="w-full bg-primary-500 py-3 text-center font-bold text-white hover:bg-primary-400 md:w-40"
            to={'/product/id/' + data._id}
          >
            Saber Más
          </Link>
        </div>
        <ProductImageContainer className="px-2">
          <p className="absolute text-2xl font-bold text-primary-400">
            {data.discount}% OFF
          </p>
          <img
            className="m-auto size-80 object-contain md:size-96"
            src={data.coverImage}
            alt="imagen de producto destacado"
          />
        </ProductImageContainer>
      </div>
    </>
  )
}
