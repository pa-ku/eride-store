import styled from 'styled-components'
import dualtron from '../images/brands/brand_dualtron.webp'
import inmotion from '../images/brands/brand_inmotion.webp'
import maxyou from '../images/brands/brand_maxyou.webp'
import segway from '../images/brands/brand_segway.webp'
import vsett from '../images/brands/brand_vsett.webp'
import zero from '../images/brands/brand_zero.webp'

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 3em;
  filter: grayscale(1);
  @media (max-width: 700px) {
    overflow: auto;
    flex-wrap: nowrap;
    padding-inline: 2em;
    gap: 3em;
    justify-content: start;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export default function OurBrands() {
  const brads = [dualtron, inmotion, maxyou, segway, vsett, zero]
  return (
    <div className="objec-fit flex flex-col items-center justify-center gap-1 bg-[#f5f5f5] text-center">
      <ImgContainer>
        {brads.map((image, index) => (
          <img
            className="h-20 w-36 object-contain duration-300"
            key={index}
            src={image}
            loading="lazy"
            alt="Imagen Marca"
          />
        ))}
      </ImgContainer>
    </div>
  )
}
