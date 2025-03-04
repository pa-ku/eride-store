import Shipping from './Shipping.jsx'
import ProductInfo from './HeaderInfo.jsx'
import ProductImages from './HeaderImages.jsx'
import { useState } from 'react'
export default function ProductHeader({ data }) {
  const { images, description, title, price, discount, _id, coverImage } = data
  const [shipping, setShipping] = useState(false)
  const imagesArr = [coverImage, ...images]
  return (
    <>
      <div className="flex min-h-96 w-full flex-col items-center justify-center gap-8 px-2 py-10 md:flex-row md:px-10">
        <ProductImages images={imagesArr} />
        <ProductInfo
          title={title}
          price={price}
          discount={discount}
          description={description}
          id={_id}
        />
      </div>
      {shipping && (
        <Shipping
          title={title}
          price={price}
          shipping={shipping}
          setShipping={setShipping}
        />
      )}
    </>
  )
}
