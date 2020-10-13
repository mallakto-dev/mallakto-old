import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { SEO } from '../components/SEO';
import { priceToRubles } from "../utils/priceToRubles";

const StyledMain = styled.main`
    margin-bottom: 2rem;
`

const StyledDivTotal = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-end;
`

const Cart = () => {
    return (
        <>
          <SEO />
          <StyledMain>
            <h1>Корзина</h1>
            <p>Корзина пуста</p>
            <StyledDivTotal>
                 <p>
                     Всего:  {priceToRubles(0)}
                 </p>
            </StyledDivTotal>
          <Link to="/" > На главную </Link>
          </StyledMain>
        </>
      )
}

export default Cart;