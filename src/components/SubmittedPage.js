import React from "react"
import { Link } from "gatsby"
import { SEO } from "./SEO"
import styled from "styled-components"

const StyledSection = styled.section`
  margin: 2rem;
  color: #004530;
`

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`

export const SubmittedPage = () => {
  return (
    <StyledSection>
      <SEO title="Спасибо за заказ!| Mallakto" />
      <h1>Ваш заказ был успешно отправлен!</h1>
      <StyledParagraph>
        Мы свяжемся с вами в ближайшее время. 
      </StyledParagraph>
      <Link to="/"> На главную </Link>
    </StyledSection>
  )
}
