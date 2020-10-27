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

const StyledSpan = styled.span`
  width: 2.6rem;
  height: 2.6rem;
  font-size: 1.1rem;
  text-align: center;
  line-height: 2;
  margin: 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
`

export const QuantityPicker = ({
  increase,
  decrease,
  numberOfItems,
  isLabelDisplayed,
  isInline,
}) => {
  return (
    <StyledDiv isInline={isInline}>
      {isLabelDisplayed && <StyledParagraph>Количество</StyledParagraph>}
      <StyledBtn onClick={increase}>+</StyledBtn>
      <StyledSpan>{numberOfItems}</StyledSpan>
      <StyledBtn onClick={decrease}>-</StyledBtn>
    </StyledDiv>
  )
}
