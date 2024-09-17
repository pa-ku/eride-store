import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function AllProducts() {
  const [itemsData, setItemsData] = useState([])
  const [productBrands, setProductBrands] = useState([])
  async function fetchAllScooters() {
    try {
      const res = await fetch(`http://localhost:5000/api/scooters`)
      const data = await res.json()
      const getUniqueBrands = [...new Set(data.map((item) => item.brand))]
      setProductBrands(getUniqueBrands)
      setItemsData(data)
      if (!res.ok) {
        throw new Error('Recurso no encontrado', res.status)
      }
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  console.log(productBrands)

  useEffect(() => {
    fetchAllScooters()
  }, [])

  return (
    <>
      <div className='flex'>
        <aside className='pl-3 py-3 flex flex-col gap-5 w-96 h-screen '>
          <div className='space-y-1'>
            <h3 className='font-bold text-xl'>Marcas</h3>
            <FilterButton defaultChecked name={'brands'}>
              Todas
            </FilterButton>
            {productBrands.map((brand) => (
              <FilterButton name={'brands'}>{brand}</FilterButton>
            ))}
          </div>

          <div className='space-y-1'>
            <h3 className='font-bold text-xl'>Precio</h3>
            <FilterButton name={'price'}>Destacado</FilterButton>

            <FilterButton name={'price'}>Más bajo</FilterButton>
            <FilterButton name={'price'}>Más Alto</FilterButton>
          </div>
        </aside>
        <div className='py-20'>
          <h1 className='text-4xl pb-10 text-center'>Monopatines</h1>

          <section className='flex flex-wrap items-center justify-center'>
            {itemsData.map(({ title, price, discount, _id: id, images }) => (
              <ProductCard
                title={title}
                price={price}
                discount={discount}
                id={id}
                images={images[0]}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  )
}

function FilterButton({ children, name, defaultChecked }) {
  return (
    <div
      className='relative flex w-fit items-center
  justify-center'
    >
      <input
        type='radio'
        name={name}
        defaultChecked={defaultChecked}
        className='peer absolute h-full w-full 
  cursor-pointer appearance-none'
      />
      <p
        className='pointer-events-none rounded-xl
   px-2 
  peer-checked:bg-primary-200
  peer-checked:shadow-center 
  peer-checked:shadow-primary-500'
      >
        {children}
      </p>
    </div>
  )
}
