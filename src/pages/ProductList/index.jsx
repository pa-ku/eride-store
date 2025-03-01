import ProductCard from '#components/ProductCard'
import useGetProducts from '#services/api/useGetProducts'
import { useSearchParams } from 'react-router-dom'

export default function AllProducts() {
  const { data, isLoading } = useGetProducts('scooters')

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Filters />
        <main className="w-full px-5 py-10 md:py-20">
          <h1 className="pb-10 text-center text-4xl">Monopatines</h1>
          <section className="flex w-full flex-wrap justify-center gap-5">
            {isLoading
              ? <p>Cargando...</p>
              :
              data.map((productData, index) => (
                <ProductCard key={index} productData={productData} />
              ))}
          </section>
        </main>
      </div>
    </>
  )
}


export function Filters() {
  const brands = ['MaxYou', 'Segway', 'VSett', 'Zero', 'InMotion', 'Dualtron']
  const orderBy = ['Menor Precio', 'Mayor Precio', 'Ofertas']


  return (
    <aside className="sticky top-0 flex h-screen w-48 flex-col items-start gap-5 bg-gray-100 px-4 py-10">
      <FilterColumn
        title="Marca"
        array={brands}
      />
      <FilterColumn
        title="Precio"
        array={orderBy}
      />
    </aside>
  )
}

function FilterColumn({ array, title, active, onClick }) {
  return (
    <div className="flex flex-wrap space-y-1 md:block">
      <h3 className="text-xl font-bold">{title}</h3>
      <span className="flex flex-col items-start gap-2 pl-2">
        {array.map((filterItem) => (
          <button
            onClick={onClick}
            key={filterItem}
          >
            {filterItem}
          </button>
        ))}
      </span>
    </div>
  )
}




