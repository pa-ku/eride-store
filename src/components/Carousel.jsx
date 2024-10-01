import { useState } from 'react'
export default function Carousel({ images }) {
  const [actualImg, setActualImg] = useState(0)

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2 md:flex-col">
          {images.map((image, index) => (
            <button
              className="size-16 rounded-xl shadow-md duration-300 hover:shadow-xl"
              key={index}
              onMouseEnter={() => setActualImg(index)}
            >
              <img
                className="size-16 rounded-xl object-contain"
                src={image}
                alt="Imagen pequeña del producto"
              />
            </button>
          ))}
        </div>

        <div className="">
          <img
            className="size-80 object-contain md:size-96"
            src={images[actualImg]}
          />
        </div>
      </section>
    </>
  )
}
