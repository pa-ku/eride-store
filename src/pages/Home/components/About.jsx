import Title from '#components/ui/Title'
import lockIcon from '#assets/icons/lock.webp'
import shippingIcon from '#assets/icons/shipping.webp'
import premiumIcon from '#assets/icons/premium.webp'
import MainButton from '#components/ui/MainButton'

export default function About() {
  return (
    <div className="flex justify-center bg-[#f5f5f5] p-3">
      <div className="flex w-[40em] items-center justify-center gap-2">
        <Title $noBackground text={'Sobre Eride'} />

        <div className="jut-center flex items-start gap-2">
          <Section
            src={premiumIcon}
            alt={'imagen de una estrella '}
            text={
              'Nuestros productos son de las marcas y modelos más reconocidos de la industria, lo que garantiza el máximo valor por tu inversión'
            }
          />
          <Section
            src={shippingIcon}
            alt={'icono de envio'}
            text={'Tus compras cuentan con envío gratuito a todo el país'}
          />
          <Section
            text={
              'Tu privacidad es nuestra principal preocupación. Por ello, no solicitamos ni almacenamos datos personales, ni requerimos registro'
            }
            src={lockIcon}
            alt={'imagen de un candado'}
          />
        </div>

        <MainButton typeLink $altButton to={'/about'}>
          Conocer más...
        </MainButton>
      </div>
    </div>
  )
}

export function Section({ src, alt, text }) {
  return (
    <>
      <div className="w-full">
        <div className="m-2 flex w-full items-center justify-center">
          <img
            width={120}
            height={100}
            className="pointer-events-none object-contain"
            src={src}
            alt={alt}
          />
        </div>
        <p className="text-center">{text}</p>
      </div>
    </>
  )
}
