import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function AllProducts() {
  const [itemsData, setItemsData] = useState([])
  const [productBrands, setProductBrands] = useState([])
  const [dataFiltered, setDataFiltered] = useState(itemsData)

  async function fetchAllScooters() {
    try {
      const res = await fetch(`http://localhost:5000/api/scooters`)
      const data = await res.json()
      const getUniqueBrands = [...new Set(data.map((item) => item.brand))]
      setProductBrands(getUniqueBrands)
      setItemsData(data)
      setDataFiltered(data)
      if (!res.ok) {
        throw new Error('Recurso no encontrado', res.status)
      }
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  useEffect(() => {
    fetchAllScooters()
  }, [])

  function filterByBrad(brandSelected) {
    if (brandSelected === 'todas') {
      setDataFiltered(itemsData)
    } else {
      const filteredBrands = itemsData.filter(
        (item) => item.brand === brandSelected
      )
      setDataFiltered(filteredBrands)
    }
  }

  function handlePrice(value) {
    if (value === 'sortMinPrice') {
      const sortMinPrice = itemsData.sort((a, b) => a.price - b.price)
      console.log(sortMinPrice)

      setItemsData(sortMinPrice)
    }
    if (value === 'sortMaxPrice') {
      const sortMaxPrice = itemsData.sort((a, b) => a.price - b.price)
      setItemsData(sortMaxPrice)
    }
  }

  return (
    <>
      <div className='flex'>
        <aside className='pl-3 py-3 flex flex-col gap-5 w-96 h-screen '>
          <div className='space-y-1'>
            <h3 className='font-bold text-xl'>Marcas</h3>
            <FilterButton
              defaultChecked
              onChange={(e) => filterByBrad(e.target.value)}
              name={'brands'}
              value={'todas'}
            >
              Todas
            </FilterButton>
            {productBrands.map((brand) => (
              <FilterButton
                onChange={(e) => filterByBrad(e.target.value)}
                name={'brands'}
                value={brand}
              >
                {brand}
              </FilterButton>
            ))}
          </div>

          <div className='space-y-1'>
            <h3 className='font-bold text-xl'>Precio</h3>
            <FilterButton
              onChange={(e) => handlePrice(e.target.value)}
              name={'price'}
            >
              Destacado
            </FilterButton>
            <FilterButton
              onChange={(e) => handlePrice(e.target.value)}
              name={'price'}
              value={'sortMinPrice'}
            >
              Más bajo
            </FilterButton>
            <FilterButton
              onChange={(e) => handlePrice(e.target.value)}
              name={'price'}
              value={'sortMaxPrice'}
            >
              Más Alto
            </FilterButton>
          </div>
        </aside>
        <div className='py-20'>
          <h1 className='text-4xl pb-10 text-center'>Monopatines</h1>

          <section className='w-full gap-4 flex flex-wrap items-center justify-center'>
            {itemsData &&
              dataFiltered.map(
                ({ title, price, discount, _id: id, images }) => (
                  <ProductCard
                    title={title}
                    price={price}
                    discount={discount}
                    id={id}
                    images={images[0]}
                  />
                )
              )}
          </section>
        </div>
      </div>
    </>
  )
}

function FilterButton({ children, name, defaultChecked, onChange, value }) {
  return (
    <div
      className='relative flex w-fit items-center
  justify-center'
    >
      <input
        type='radio'
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className='peer absolute h-full w-full 
  cursor-pointer appearance-none'
        onChange={onChange}
      />
      <p
        className='pointer-events-none rounded-md
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
