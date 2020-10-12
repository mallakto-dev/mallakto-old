import React, { useState } from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
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
`;

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

export const Counter = () => {
  const [counter, setCounter] = useState(1)

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <StyledDiv>
      <StyledParagraph>Количество</StyledParagraph>
      <StyledBtn onClick={increase}>+</StyledBtn>
      <StyledSpan>{counter}</StyledSpan>
      <StyledBtn onClick={decrease}>-</StyledBtn>
    </StyledDiv>
  )
}
