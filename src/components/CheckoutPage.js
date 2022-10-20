import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import { useForm } from "react-hook-form"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import { nanoid } from "nanoid"
import { Seo } from "./Seo"
import styled from "styled-components"
import { GlobalContext } from "./context/GlobalContextProvider"
import { Input } from "./Input"

const StyledSection = styled.section`
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 2rem;
  }
`

const StyledH1 = styled.h1`
  text-align: center;
  color: #004530;
  font-size: 2rem;
`

const StyledForm = styled.form`
  background-color: #fbe6de;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 60%;
  }
`

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
  margin: 1rem auto;
  padding-bottom: 1rem;
  border-bottom: 1px solid #808080b3;

  @media (min-width: 500px) {
    width: 60%;
  }
`

const StyledLegend = styled.legend`
  font-size: 1.4rem;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledBtn = styled.button`
  display: block;
  text-align: center;
  width: 60%;
  height: 3rem;
  border: none;
  background-color: #004530;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  padding: 2px;
  margin: 1rem auto;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  &:hover {
    opacity: 0.8;
  }
`

const StyledParagraph = styled.p`
  font-size: 0.9rem;
`

export const CheckoutPage = () => {
  const { cartItems, total, clearCart } = useContext(GlobalContext)

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
  })

  // filters the data which is needed to proccess the order
  const orderEssentials = cartItems.map(item => {
    const { title, weight, price, quantity } = item
    return {
      title,
      weight,
      price,
      quantity,
    }
  })

  const watchDelivery = watch("delivery", false)

  const normalizePhoneNumber = value => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if (!phoneNumber) {
      return value
    }

    return phoneNumber.formatInternational()
  }

  const handleChange = e => {
    e.target.value = normalizePhoneNumber(e.target.value)
  }

  const sendOrder = async data => {
    let dataToSend = JSON.stringify({
      ...data,
      order: orderEssentials,
      total,
      orderId: nanoid(4),
    })
    const requestOptions = {
      method: "POST",
      Seoers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: dataToSend,
    }
    try {
      const response = await fetch(
        "https://mallakto.ru/mailer/checkout",
        requestOptions
      )
      if (response.ok) {
        clearCart()
        navigate("/cart/checkout/submitted")
      } else {
        alert(response.statusText)
      }
    } catch (error) {
      alert(error)
    }
  }

  const onSubmit = async data => {
    let answerFromServer = await sendOrder(data)

    if (answerFromServer) {
      navigate("/success")
    }
  }

  return (
    <StyledSection>
      <Seo title="Оформить заказ | Mallakto" />
      <StyledH1 id="form-title">Оформить заказ</StyledH1>
      <StyledForm
        aria-labelledby="form-title"
        onSubmit={handleSubmit(onSubmit)}
      >
        <StyledFieldset>
          <StyledLegend>Контактные данные</StyledLegend>
          <StyledDiv>
            <Input
              type="text"
              label="Имя"
              id="input-name"
              name="nameInput"
              invalid={errors.nameInput ? "true" : "false"}
              reg={register({
                required: "Введите Ваше имя",
                pattern: {
                  value: /^([^0-9]*)$/,
                  message: 'Поле "Имя" может содержать только буквы',
                },
              })}
            />
            {errors.nameInput && <p role="alert">{errors.nameInput.message}</p>}
            <Input
              type="tel"
              id="input-phone"
              label="Телефон"
              name="phone"
              invalid={errors.phone ? "true" : "false"}
              reg={register({
                required: "Введите номер, по которому можно с Вами связаться",
              })}
              handleChange={handleChange}
            />
            {errors.phone && <p role="alert">{errors.phone.message}</p>}
            <Input
              type="email"
              id="input-email"
              label="Email"
              name="email"
              reg={register}
            />
          </StyledDiv>
        </StyledFieldset>

        <StyledFieldset aria-labelledby="delivery">
          <StyledLegend id="delivery">Способ доставки</StyledLegend>
          <StyledDiv>
            <Input
              type="radio"
              label="Доставка"
              name="delivery"
              invalid={errors.delivery ? "true" : "false"}
              id="input-delivery-true"
              reg={register({ required: true })}
            />

            <Input
              type="radio"
              label="Самовывоз"
              name="delivery"
              invalid={errors.delivery ? "true" : "false"}
              id="input-delivery-false"
              reg={register({ required: true })}
            />

            {errors.delivery && (
              <p role="alert">
                Выберите каким образом Вам удобнее всего получить Ваш заказ
              </p>
            )}
          </StyledDiv>

          {watchDelivery === "Доставка" && (
            <StyledDiv>
              <Input
                type="text"
                label="Адрес"
                id="input-address"
                name="address"
                reg={register({ required: "Введите адрес доставки" })}
              />
              {errors.address && <p role="alert">{errors.address.message}</p>}
              <StyledParagraph role="alert">
                Доставка в пределах МКАД - 400 &#8381;. Доставка за пределами
                МКАД рассчитывается отдельно. Стоимость доставки не входит в
                сумму заказа.
              </StyledParagraph>
            </StyledDiv>
          )}
        </StyledFieldset>

        <StyledFieldset aria-labelledby="payment">
          <StyledLegend id="payment">Способ оплаты</StyledLegend>
          <StyledDiv>
            <Input
              type="radio"
              label="Перевод на счет"
              id="input-payment-transfer"
              name="payment"
              invalid={errors.payment ? "true" : "false"}
              reg={register({ required: true })}
            />

            <Input
              type="radio"
              label="Наличные"
              id="input-payment-cash"
              name="payment"
              invalid={errors.payment ? "true" : "false"}
              reg={register({ required: true })}
            />
            {errors.payment && (
              <p role="alert">"Выберите удобный Вам способ оплаты"</p>
            )}
          </StyledDiv>
        </StyledFieldset>

        <StyledBtn>Сделать заказ</StyledBtn>
      </StyledForm>

      <Link to="/cart"> Вернуться назад </Link>
    </StyledSection>
  )
}
