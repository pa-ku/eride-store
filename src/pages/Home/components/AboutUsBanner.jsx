import lockIcon from '#assets/icons/lock.webp'
import shippingIcon from '#assets/icons/shipping.webp'
import premiumIcon from '#assets/icons/premium.webp'
import { Link } from 'react-router-dom'

export default function AboutUsBanner () {
  return (
    <div className='flex h-96 justify-center items-center bg-[#f5f5f5] p-3'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <h2 className='subtitle'>Sobre Eride</h2>

        <div className='justify-center flex-row flex-wrap w-full flex  gap-2'>
          <Section
            src={premiumIcon}
            alt='imagen de una estrella '
            text='Garantizamos el máximo valor por tu inversión'
          />
          <Section
            src={shippingIcon}
            alt='icono de envio'
            text='Tus compras cuentan con envío gratuito a todo el país'
          />
          <Section
            text='Tu privacidad es nuestra principal preocupación.'
            src={lockIcon}
            alt='imagen de un candado'
          />
        </div>

        <Link className='button' typeLink $altButton to='/about'>
          Conocer más...
        </Link>
      </div>
    </div>
  )
}

export function Section ({ src, alt, text }) {
  return (
    <>
      <div className='w-80 flex flex-col items-center justify-center'>
        <img
          width={120}
          height={100}
          className='pointer-events-none object-contain'
          src={src}
          alt={alt}
        />
        <p className='text-center'>{text}</p>
      </div>
    </>
  )
}
