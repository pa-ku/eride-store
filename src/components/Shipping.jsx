import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./ui/FormInput";
import Title from "./ui/Title";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import InputCheckBox from "../components/ui/InputCheckBox";
import MainButton from "./ui/MainButton";
import axios from "axios";

export default function Shipping({ title, price, setShipping, shipping }) {
  const [preferenceId, setPreferenceIdId] = useState(null);
  const [pay, setPay] = useState(false);
  initMercadoPago("APP_USR-400ac6bd-a71b-4e78-9dfe-7f390acd7f68", {
    locale: "es-AR",
  });
  const [hasNumber, setHasNumber] = useState(false);
  const [fillMsj, setFillMsj] = useState("");
  const [shippingData, setShippingData] = useState({});

  const HandleInput = (event) => {
    const value = event.target.value;
    setShippingData({ ...shippingData, [event.target.name]: value });
  };

  const handleStreet = (event) => {
    setHasNumber((prevHasNumber) => !prevHasNumber);
    setShippingData((prevShippingData) => {
      // Crear una copia del objeto prevShippingData
      const updatedShippingData = { ...prevShippingData };

      // Establecer el valor en "Con Numeracion" o undefined según el valor de hasNumber
      updatedShippingData[event.target.name] = hasNumber && undefined;

      return updatedShippingData;
    });
  };

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://eride-api.vercel.app/api/payment/create_preference",
        {
          description: title,
          price: price,
          quantity: 1,
        }
      );

      const { id } = response.data;
      return id; //retorna el id
    } catch (err) {
      console.log(err);
    }
  };

  const errorList = [
    /*     shippingData.nombre,
    shippingData.cp,
    shippingData.calle,
    shippingData.provincia,
    shippingData.calle,
    shippingData.NCalle,
    shippingData.email, */
  ];

  const handleBuy = async () => {
    console.log(shippingData);
    if (errorList.every((item) => item !== undefined && item !== "")) {
      setPay(true);
      const id = await createPreference();
      if (id) {
        setPreferenceIdId(id);
      }
    } else {
      setFillMsj("Rellena el formulario de envio");
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <CloseButton
          onClick={() => {
            setShipping(false);
            setShippingData({});
          }}
          title="Cerrar modal"
        >
          🞪
        </CloseButton>

        {shipping === true && pay === false && (
          <>
            <Title text={"Datos de Envío"} />
            <FreeShippingTxt>
              Todos nuestros productos cuentan con <b>ENVIO GRATIS</b>
            </FreeShippingTxt>
            <InputCtn>
              <FormInput
                required={"required"}
                type={"text"}
                name={"nombre"}
                placeholder={"Nombre y Apellido"}
                onChange={HandleInput}
                value={shippingData.nombre}
              />
              <FormInput
                onChange={HandleInput}
                type={"text"}
                name={"cp"}
                placeholder={"Codigo Postal"}
                value={shippingData.cp}
              />
              <FormInput
                onChange={HandleInput}
                name={"provincia"}
                type={"text"}
                placeholder={"Provincia"}
              />
              <FormInput
                onChange={HandleInput}
                name={"localidad"}
                type={"text"}
                placeholder={"Localidad"}
              />
              <FormInput
                onChange={HandleInput}
                type={"text"}
                name={"calle"}
                placeholder={"Calle"}
              />
              <FormInputContainer>
                <InputCheckBox
                  type={"checkbox"}
                  $isText
                  name={"NCalle"}
                  onClick={handleStreet}
                  text={"Sin Numeracion"}
                />
                {hasNumber === false && (
                  <FormInput
                    onChange={HandleInput}
                    type={"text"}
                    name={"NCalle"}
                    placeholder={"Numero de Calle"}
                  />
                )}
              </FormInputContainer>
              <FormInput
                onChange={HandleInput}
                type={"email"}
                name={"email"}
                placeholder={"Email"}
              />
            </InputCtn>
            <FillMsj>{fillMsj}</FillMsj>
            <MainButton onClick={handleBuy}>Confirmar</MainButton>
          </>
        )}
        {pay === true && (
          <>
            <PayCtn>
              <Title text={"PAGO"} />
              <BuyInfoCtn>
                <p>
                  <b>♦ Producto:</b> {title}
                </p>
                <p>
                  <b>♦ Direccion:</b> {shippingData.calle} {shippingData.NCalle}
                  , {shippingData.provincia}, {shippingData.localidad}
                </p>
                <p>
                  <b>♦ Total:</b> $
                  {price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                </p>
              </BuyInfoCtn>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </PayCtn>
          </>
        )}
      </FormWrapper>
    </Wrapper>
  );
}

const FillMsj = styled.p`
  color: red;
`;
const FormInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  gap: 1em;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  font-weight: 800;
  font-size: 35px;
  transition: 300ms;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const FreeShippingTxt = styled.p`
  color: var(--main-color-550);
  text-transform: uppercase;
  font-size: 14px;
  text-align: start;
  width: 40ch;
`;

const BuyInfoCtn = styled.div`
  text-align: start;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-top: 1em;
`;

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
`;
const FormWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: start;
  box-shadow: 0px 0px 10px 1px var(--main-color-400);
  gap: 1em;
  opacity: 0;
  width: 550px;

  animation: 500ms show forwards;
  background-color: #fff;
  padding: 2em;
  border-radius: 8px;
`;

const InputCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 1em;
  width: 100%;
`;

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
`;
