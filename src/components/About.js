import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import cows from "../data/images/robert-bye-dOElUitX2Do-unsplash-small.jpg"

const StyledSection = styled.section`
  margin: 2rem;
`

const StyledH2 = styled.h2`
  text-align: center;
  color: #004530;
  font-size: 2rem;
`

const StyledDiv__wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledImage = styled.img`
  width: 16rem;
  align-self: center;

  @media (min-width: 768px) {
    width: 25rem;
    clip-path: circle(39%);
  }
`

const StyledDiv__text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 100%;
  color: #004530;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const StyledParagraph = styled.p`
  font-size: 1.1rem;
`


export const About = ({ showFull }) => {
  const textContent = showFull ? (
    <StyledDiv__text>
      <StyledParagraph>
        Вас приветствует московский веган-кооператив Mallakto!
      </StyledParagraph>
      <StyledParagraph>
        Начиная с 2016 года мы занимаемся производством этичных продуктов
        питания, потребность в которых неуклонно растет, и что выгодно отличает
        нас от многих других производителей, наш приоритет — это доступные цены.
      </StyledParagraph>
      <StyledParagraph>
        Наше производство удостоилось двух наград “лучший производитель
        веганских продуктов” за 2017 и 2018 гг, а также награды “Лучшая марка
        растительных продуктов 2019”.
      </StyledParagraph>
      <StyledParagraph>
        С нами сотрудничают десятки кафе и магазинов в Москве и регионах России,
        также мы доставляем продукцию до дверей наших частных клиентов и
        осуществляем выдачу заказов на нашем производстве.
      </StyledParagraph>
      <StyledParagraph>
        Приглашаем к сотрудничеству физ. и юр. лиц.
      </StyledParagraph>
      <StyledParagraph>Go Vegan!</StyledParagraph>
    </StyledDiv__text>
  ) : (
    <StyledDiv__text>
      <StyledParagraph>
        Вас приветствует московский веган-кооператив Mallakto!
      </StyledParagraph>
      <StyledParagraph>
        Начиная с 2016 года мы занимаемся производством этичных продуктов
        питания, потребность в которых неуклонно растет, и что выгодно отличает
        нас от многих других производителей, наш приоритет — это доступные цены.
      </StyledParagraph>
      <StyledParagraph>Go Vegan!</StyledParagraph>
      <Link to={"/about"}>Читать далее...</Link>
    </StyledDiv__text>
  )

  return (
    <StyledSection>
      {!showFull && <StyledH2>О нас</StyledH2>}
      <StyledDiv__wrapper>
        <StyledImage src={cows} alt={"cows"} />
        {textContent}
      </StyledDiv__wrapper>
    </StyledSection>
  )
}
