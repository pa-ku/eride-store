import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/ui/Title";
import FormInput from "../components/ui/FormInput";
import InputCheckBox from "../components/ui/InputCheckBox";
import FormSubmit from "../components/ui/FormSubmit";
export default function CreateProduct() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    brand: "venzo",
    bio: "",
    specs: "",
    description: "",
    img: "",
    categories: "",
    material: "",
    sizes: [],
    colors: [],
    specs: "",
    price: 1,
    inStock: true,
  });
  console.log(newProduct);

  const createProduct = async () => {
    try {
      await publicRequest.post("/products/create", {
        title: newProduct.title,
        brand: newProduct.brand,
        bio: newProduct.bio,
        description: newProduct.description,
        specs: newProduct.specs,
        img: newProduct.img,
        categories: newProduct.categories,
        material: newProduct.material,
        sizes: newProduct.sizes,
        colors: newProduct.colors,
        price: newProduct.price,
        inStock: true,
      });
    } catch (err) {
      console.log("Algo salio mal" + err);
    }
  };

  function handleChoice(e) {
    const value = e.target.value;
    const name = e.target.name;
    setNewProduct({ ...newProduct, [name]: value });
  }
  console.log(newProduct);

  function handleChoiceArray(event) {
    const { value, name, checked } = event.target;
    let updatedSizes = [...newProduct[name]]; // Copia el array actual

    if (checked) {
      // Si el checkbox se selecciona, agrega el valor al array
      updatedSizes.push(value);
    } else {
      // Si el checkbox se deselecciona, elimina el valor del array
      updatedSizes = updatedSizes.filter((size) => size !== value);
    }

    // Actualiza el estado con el nuevo array de tallas
    setNewProduct({ ...newProduct, [name]: updatedSizes });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("ENVIADO");
    await createProduct(); // Await the API request
  }

  return (
    <>
      <form action="" method="POST">
        <Wrapper>
          <Title text={"CREATE PRODUCT"} />

          <FormInputTextContainer>
            <FormInput
              name={"title"}
              required={true}
              type={"text"}
              placeholder={"Titulo"}
              onChange={handleChoice}
            />
            <FormInput
              onChange={handleChoice}
              name={"bio"}
              required={true}
              placeholder={"Bio"}
            />
            <FormInput
              onChange={handleChoice}
              name={"img"}
              required={true}
              placeholder={"Img"}
            />
            <FormInput
              onChange={handleChoice}
              name={"price"}
              type={"number"}
              placeholder={"Precio"}
            />
          </FormInputTextContainer>
          <SelectionContainer>
            <ImputText>Marca</ImputText>
            <SelectOption onChange={handleChoice} name="brand" id="brand">
              <Option defaultChecked name="brand" value="trek">
                Trek
              </Option>
              <Option name="brand" value="venzo">
                Venzo
              </Option>
              <Option name="brand" value="cube">
                Cube
              </Option>
              <Option name="brand" value="giant">
                Giant
              </Option>
              <Option name="brand" value="cannondale">
                Cannondale
              </Option>
              <Option name="brand" value="specialized">
                Specialized
              </Option>
              <Option name="brand" value="orbea">
                Orbea
              </Option>
              <Option name="brand" value="canyon">
                Canyon
              </Option>
              <Option name="brand" value="scott">
                Scott
              </Option>
              <Option name="brand" value="pinarello">
                Pinarello
              </Option>
            </SelectOption>
          </SelectionContainer>
          <TextArea
            onChange={handleChoice}
            name="description"
            id=""
            placeholder="DESCRIPCION..."
          ></TextArea>
          <TextArea
            onChange={handleChoice}
            name="specs"
            id=""
            placeholder="SPECS..."
          ></TextArea>

          <WheelSize onClick={handleChoice} name={"wheelSize"} />
          <Category onClick={handleChoice} name={"categories"} />
          <Material onClick={handleChoice} name={"material"} />
          <Size onClick={handleChoiceArray} name={"sizes"} />
          <Colors onClick={handleChoiceArray} name={"colors"} />
          <FormSubmit
            action={
              "https://xtreme-store-w4jj.onrender.com/api/payment/create_preference"
            }
            onClick={handleSubmit}
          />
        </Wrapper>
      </form>
    </>
  );
}

export function WheelSize({ onClick, name }) {
  return (
    <>
      <InputContainer>
        <ImputText>Rodado</ImputText>
        <CheckboxContainer>
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"29"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"700c"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"27.5"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"26"}
            onClick={onClick}
          />
        </CheckboxContainer>
      </InputContainer>
    </>
  );
}
export function Category({ onClick, name }) {
  return (
    <>
      <InputContainer>
        <ImputText>CATEGORIA</ImputText>
        <CheckboxContainer>
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"road"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"mtb"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"electric"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"gravel"}
            onClick={onClick}
          />
        </CheckboxContainer>
      </InputContainer>
    </>
  );
}
export function Size({ onClick, name }) {
  return (
    <>
      <InputContainer>
        <ImputText>Talles</ImputText>
        <CheckboxContainer>
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"XS"}
            onClick={onClick}
          />
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"S"}
            onClick={onClick}
          />
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"M"}
            onClick={onClick}
          />
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"L"}
            onClick={onClick}
          />
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"XL"}
            onClick={onClick}
          />
        </CheckboxContainer>
      </InputContainer>
    </>
  );
}
export function Colors({ onClick, name }) {
  return (
    <>
      <InputContainer>
        <ImputText>Colores</ImputText>
        <CheckboxContainer>
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"dark"}
            onClick={onClick}
            $isText={true}
            $color={"yellowgreen"}
          />
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"blue"}
            onClick={onClick}
            $isText={true}
            $color={"blue"}
          />
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"gray"}
            onClick={onClick}
            $isText={true}
          />
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"whiteblue"}
            onClick={onClick}
            $isText={true}
          />

          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"red"}
            onClick={onClick}
            $isText={true}
          />
          <InputCheckBox
            name={name}
            type={"checkbox"}
            text={"pink"}
            onClick={onClick}
            $isText={true}
          />
        </CheckboxContainer>
      </InputContainer>
    </>
  );
}
export function Material({ onClick, name }) {
  return (
    <>
      <InputContainer>
        <ImputText>Material</ImputText>
        <CheckboxContainer>
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"aluminum"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"carbon"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"steel"}
            onClick={onClick}
          />
          <InputCheckBox
            $isText={true}
            name={name}
            type={"radio"}
            text={"titanium"}
            onClick={onClick}
          />
        </CheckboxContainer>
      </InputContainer>
    </>
  );
}

const FormInputTextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  @media(max-width:700px){
    grid-template-columns: repeat(1, 1fr);
  } 
`;

const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;

`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
`;

const SelectOption = styled.select`
  width: max-content;
  padding: 10px 10px 10px 10px;
  border: 1px solid #777;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  &:after {
    color: red;
    background-color: red;
  }
`;

const Option = styled.option``;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  column-gap: 1.5em;
  flex-wrap: wrap;
  & * {
    text-transform: uppercase;
    font-weight: 400;
  }
`;
const ImputText = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  padding-inline: 10px;

  font-weight: 600;
  color: #555;
`;

const Wrapper = styled.div`
  height: 100%;
  padding-block: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  gap: 2em;
  text-align: center;
  padding-inline: 20px;
`;
