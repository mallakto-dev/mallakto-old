import React from "react"
import styled from "styled-components"
import { SEO } from "../components/SEO"
import { SocialLinks } from "../components/SocialLinks"

const StyledSection = styled.section`
  width: 100%;
  font-size: 1rem;

  @media (min-width: 520px) {
    width: 60%;
    margin: 2rem auto;
    font-size: 1.2rem;
  }
`

const StyledDiv = styled.div`
  margin: 2rem;

  @media (min-width: 520px) {
    margin: 0;
  }
`

const StyledSpan = styled.span`
  font-weight: 600;
  margin-right: 0.6rem;
`

const ContactsPage = () => {
  return (
    <>
      <SEO
        title="Контакты | Mallakto"
        description="Московский веган-кооператив Mallakto"
      />
      <StyledSection>
        <StyledDiv>
          <p>
            <StyledSpan>Самовывоз:</StyledSpan> Мы находимся в 9 минутах ходьбы
            от{" "}
            <a
              title="Ссылка на Яндекс карту, откроется в новой вкладке"
              target="_blank"
              rel="noopener noreferrer"
              href="https://yandex.ru/maps/-/CCQt6Xt4gB"
            >
              <span>м. Шоссе Энтузиастов, Электродная улица, 2с23</span>
            </a>
            . Работаем каждый день с 11:00 до 17:00. Самовывоз производится по
            предварительному согласованию, номер для связи{" "}
            <a href="tel:+7 916 423 03 77">
              <span>+7 916 423 03 77</span>
            </a>
            .
          </p>
          <p>
            <StyledSpan>Доставка:</StyledSpan> На сайте вы можете оформить
            доставку по Москве, или в любое другое место планеты. Доставка по
            Москве осуществляется нашими курьерами, стоимость доставки от 400р.
            Доставка в другие регионы производится транспортной компанией,
            стоимость рассчитывается индивидуально.
          </p>
          <div>
            <StyledSpan>По вопросам сотрудничества пишите:</StyledSpan>
            <p>
              <a href="mailto:chefirkin@gmail.com">chefirkin@gmail.com</a>
            </p>
          </div>
          <SocialLinks width="5.2rem" />
        </StyledDiv>
      </StyledSection>
    </>
  )
}
export default ContactsPage
