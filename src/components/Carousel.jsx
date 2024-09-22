import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: start;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`

const SideBarCtn = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1200px) {
    flex-direction: row;
    height: 100px;
    width: 100%;
  }
`

const SideBarBtn = styled.button`
  width: 60px;
  height: 60px;
  border: 0;
  margin: 0;
  padding: 0;
  padding: 4px;
  border-radius: 8px;
  background-color: #fff;
  border: 2px solid #999;
  cursor: pointer;
  &:hover {
    border-color: var(--main-color-500);
  }
`

const SideBarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

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

export default function Carousel({ render, images,coverImage }) {
  const [actualImg, setActualImg] = useState(0)




  return (
    <>
      <Wrapper>
        <SideBarCtn>
          <SlideBar
            render={render}
            setActualImg={setActualImg}
            images={images}
          />
        </SideBarCtn>

        <ImageContainer>
          <img
            className="size-96 h-full w-full object-contain"
            src={images[actualImg]}
          />
        </ImageContainer>
      </Wrapper>
    </>
  )
}
export function SlideBar({ render, setActualImg, images }) {
  const sideBarButtons = []

  for (let index = 0; index < render; index++) {
    sideBarButtons.push(
      <SideBarBtn key={index} onMouseEnter={() => setActualImg(index)}>
        <SideBarImg src={images[index]}></SideBarImg>
      </SideBarBtn>,
    )
  }

  return sideBarButtons
}
