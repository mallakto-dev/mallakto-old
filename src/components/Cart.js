import React, { useContext } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { SEO } from "../components/SEO"
import { GlobalContext } from "../components/context/GlobalContextProvider"
import { priceToRubles } from "../utils/priceToRubles"
import { QuantityPicker } from "../components/QuantityPicker"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"


const StyledSection = styled.section`
  margin: 6rem 1rem;
`

const StyledDivItems = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledDivItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.8rem;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;

  & > * {
    /* weird hack for gatsby-image, without flex-grow image disappears on a big screens */
    flex-grow: 1;
  }
`

const StyledGatsbyImage = styled(Image)`
  min-width: 6rem;
`

const StyledDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem;

  @media (min-width: 546px) {
    flex-direction: row;
    width: 60%;
    justify-content: space-around;
  }
`

const StyledDivTextWrap = styled.div`
  width: 50%;
`

const StyledParagraph = styled.p`
  font-size: 1rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const StyledSpan = styled.span`
  @media (min-width: 768px) {
    margin: 1em 0;
  }
`

const StyledDivTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledBtnDelete = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  flex-grow: 0;
  width: 1.2rem;
  height: 1.4rem;
  text-align: center;
`

export const Cart = ({ setIsProceedOrder }) => {
  const { cartItems, total, removeFromCart, setItemQuantity } = useContext(
    GlobalContext
  )

  const increase = item => {
    item.quantity = item.quantity + 1
    setItemQuantity(item)
  }

  const decrease = item => {
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1
      setItemQuantity(item)
    }
  }

  const cartContent = cartItems.map(item => {
    return (
      <StyledDivItem key={item.id}>
        <StyledGatsbyImage fluid={item.image} alt={item.altText} />
        <StyledDivWrapper>
          <StyledDivTextWrap>
            <Link to={item.linkToProduct}>
              <StyledParagraph>{item.title}</StyledParagraph>
            </Link>
          </StyledDivTextWrap>
          <StyledSpan>{item.weight}</StyledSpan>
          <QuantityPicker
            isInline={true}
            increase={() => increase(item)}
            decrease={() => decrease(item)}
            numberOfItems={item.quantity}
          />
          <span>{priceToRubles(item.price)}</span>
        </StyledDivWrapper>

        <StyledBtnDelete
          aria-label="Удалить"
          onClick={() => removeFromCart(item)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </StyledBtnDelete>
      </StyledDivItem>
    )
  })

  return (
    <>
      <SEO title="Корзина | Mallakto" />
      <StyledSection>
        <h1>Корзина</h1>
        {cartItems.length === 0 && <p>Корзина пуста</p>}
        <StyledDivItems>{cartContent}</StyledDivItems>
        <StyledDivTotal>
          <p>Всего: {priceToRubles(total)}</p>
          {cartItems.length > 0 && (
            <Link to="/cart/checkout" onClick={() => setIsProceedOrder(true)}>
              Оформить заказ
            </Link>
          )}
        </StyledDivTotal>
      </StyledSection>
    </>
  )
}