import React from "react"
import styled from "styled-components"

const StyledAddress = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 60%;
  text-align: center;
  line-height: 1.5;
  font-style: normal;

  & a {
    text-decoration: none;
    color: #004530;
    cursor: pointer;
  }

  & a:visited {
    color: #004530;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

export const ContactDetails = () => {
  return (
    <StyledAddress>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/maps/-/CCQt6Xt4gB"
      >
        <span>Электродная улица, 2с23, м. Шоссе Энтузиастов</span>
      </a>
      <a href="tel:+7 966 349 25 34">
        <span>+7 966 349 25 34</span>
      </a>
    </StyledAddress>
  )
}
