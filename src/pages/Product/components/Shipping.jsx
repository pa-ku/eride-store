import { useState } from 'react'
import styled from 'styled-components'
import FormInput from '../../../components/ui/FormInput'
import Title from '../../../components/ui/Title'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

export default function Shipping({ title, price, setShipping, shipping }) {
  const [preferenceId, setPreferenceIdId] = useState(null)
  const [pay, setPay] = useState(false)
  initMercadoPago('APP_USR-400ac6bd-a71b-4e78-9dfe-7f390acd7f68', {
    locale: 'es-AR',
  })
  const [hasNumber, setHasNumber] = useState(false)
  const [fillMsj, setFillMsj] = useState('')
  const [shippingData, setShippingData] = useState({})

  const HandleInput = (event) => {
    const value = event.target.value
    setShippingData({ ...shippingData, [event.target.name]: value })
  }

  const createPreference = async () => {
    try {
      const res = await fetch(
        'https://eride-api.vercel.app/api/payment/create_preference',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description: title,
            price: price,
            quantity: 1,
          }),
        },
      )
      const data = await res.json()
      return data.id
    } catch (err) {
      console.log(err)
    }
  }

  const errorList = [{ name: true }]

  const handleBuy = async (e) => {
    e.preventDefault()
    if (errorList.every((item) => item !== undefined && item !== '')) {
      setPay(true)
      const id = await createPreference()
      if (id) {
        setPreferenceIdId(id)
      }
    } else {
      setFillMsj('Rellena el formulario de envio')
    }
  }

  const formImputs = [
    { label: 'Nombre', name: 'name', type: 'text' },
    { label: 'Apellido', name: 'lastName', type: 'text' },
    { label: 'Telefono', name: 'phone', type: 'number' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Direccion', name: 'address', type: 'text' },
    { label: 'Ciudad', name: 'city', type: 'text' },
    { label: 'Provincia', name: 'province', type: 'text' },
    { label: 'Pais', name: 'country', type: 'text' },
    { label: 'Codigo Postal', name: 'postalCode', type: 'number' },
  ]

  return (
    <Wrapper>
      <div className="rounded-lg bg-white p-7 shadow-xl">
        {shipping === true && pay === false && (
          <>
            <div className="flex w-full justify-between">
              <h1 className="text-3xl">Datos de Envío</h1>
              <button
                className="flex size-9 items-center justify-center rounded-full p-2 text-3xl text-primary-600 hover:bg-gray-100"
                onClick={() => {
                  setShipping(false)
                  setShippingData({})
                }}
                title="Cerrar modal"
              >
                🞪
              </button>
            </div>
            <p className="w-full text-wrap bg-red-200 text-center text-red-700">
              Los pagos online estaran desabilitados en producción <br /> para
              evitar compras no intencionadas
            </p>
            <FreeShippingTxt>
              Todos nuestros productos cuentan con <b>ENVIO GRATIS</b>
            </FreeShippingTxt>
            <form>
              <InputCtn>
                {formImputs.map(({ type, name, label, value }, index) => (
                  <FormInput
                    key={index}
                    type={type}
                    name={name}
                    placeholder={label}
                    onChange={HandleInput}
                    value={value}
                  />
                ))}
                <div className="flex h-10 w-full items-center justify-center gap-5">
                  {hasNumber === false ? (
                    <FormInput
                      onChange={HandleInput}
                      type={'text'}
                      name={'NCalle'}
                      placeholder={'Numero de Calle'}
                    />
                  ) : (
                    <div className="w-full"></div>
                  )}
                  <button
                    type="button"
                    className={`${hasNumber && 'border-primary-700 text-primary-700'} w-full rounded-xl border-2 border-black`}
                    onClick={() => setHasNumber(!hasNumber)}
                    name="NCalle"
                  >
                    {hasNumber ? 'Con numeración' : 'Sin Numeración'}
                  </button>
                </div>
              </InputCtn>
              <p className="text-red-500">{fillMsj}</p>
              <button
                className="w-full rounded-lg bg-primary-500 py-3 text-xl text-white"
                onClick={(e) => handleBuy(e)}
              >
                Confirmar
              </button>
            </form>
          </>
        )}
        {pay === true && (
          <>
            <PayCtn>
              <Title text={'PAGO'} />
              <BuyInfoCtn>
                <p>
                  <b>♦ Producto:</b> {title}
                </p>
                <p>
                  <b>♦ Direccion:</b> {shippingData.calle}{' '}
                  {shippingData.NCalle}, {shippingData.provincia},{' '}
                  {shippingData.localidad}
                </p>
                <p>
                  <b>♦ Total:</b> $
                  {price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
                </p>
              </BuyInfoCtn>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </PayCtn>
          </>
        )}
      </div>
    </Wrapper>
  )
}

const FreeShippingTxt = styled.p`
  color: var(--main-color-550);
  text-transform: uppercase;
  font-size: 14px;
  text-align: start;
`

const BuyInfoCtn = styled.div`
  text-align: start;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-top: 1em;
`

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: start;
  height: max-content;
  justify-content: center;
  padding-block: 8em;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 100;
  text-align: center;
`

const InputCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 1em;
  width: 100%;
`

const PayCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  flex-direction: column;
  gap: 5px;
  opacity: 0;
  animation: 1s show forwards 0.4s;
  padding: 1em;
`
