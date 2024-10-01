import { useState } from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  width: 600px;
  height: 400px;
  padding: 10px;

  background-color: #fff;
  @media (max-width: 700px) {
    height: 250px;
    width: 100%;
  }
`

export default function Carousel({ render, images, coverImage }) {
  const [actualImg, setActualImg] = useState(0)

  return (
    <>
      <section className="flex flex-col-reverse  md:flex-row">
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

        <ImageContainer>
          <img
            className="size-96 h-full w-full object-contain"
            src={images[actualImg]}
          />
        </ImageContainer>
      </section>
    </>
  )
}
