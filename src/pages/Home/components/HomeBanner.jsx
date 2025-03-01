import styled from 'styled-components'
import ImgBanner from '../images/main-banner.webp'
import ImgBannerMobile from '../images/banner-mobile.webp'

const WrapperBanner = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${ImgBanner});
  background-size: cover;
  background-position: center;
  @media (max-width: 1150px) {
    background-size: cover;
    background-position: 50%;
    width: 100%;
    background-repeat: no-repeat;
    height: 300px;
    background-image: url(${ImgBannerMobile});
  }
`

export default function HomeBanner() {
  return (
    <>
      <WrapperBanner />
    </>
  )
}
