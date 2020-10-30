import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${props => (props.isInline ? ".8rem" : "0")};
`

const StyledBtn = styled.button`
  width: 2.6rem;
  height: 2.6rem;
  font-size: 1.1rem;
  text-align: center;
`

const StyledParagraph = styled.p`
  line-height: 1;
  margin-right: 1rem;
`

const StyledInput = styled.input`
  width: 2.6rem;
  height: 2.6rem;
  font-size: 1.1rem;
  text-align: center;
  line-height: 2;
  margin: 0;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
`

export const QuantityPicker = ({
  increase,
  decrease,
  numberOfItems,
  isLabelDisplayed,
  isInline,
}) => {
  const handleChange = e => {
    e.target.value = numberOfItems
  }

  return (
    <StyledDiv isInline={isInline}>
      {isLabelDisplayed && <StyledParagraph>Количество</StyledParagraph>}
      <StyledBtn
        onClick={increase}
        aria-label="Увеличить количество товара в корзине на один"
      >
        +
      </StyledBtn>
      <StyledInput
        type="number"
        value={numberOfItems}
        onChange={handleChange}
        aria-label="Количество товара которое будет добавленно в корзину"
      />
      <StyledBtn
        onClick={decrease}
        aria-label="Уменьшить количество товара в корзине на один"
      >
        −
      </StyledBtn>
    </StyledDiv>
  )
}
