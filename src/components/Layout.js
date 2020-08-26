import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';



const GlobalStyles = createGlobalStyle`
    
    *, *::before, *::after {
        box-sizing: border-box;
    }


    body {
        margin: 0;
        background-color: #fffdfa;
        font-family: 'Manrope', sans-serif;
    }

    a {
        text-decoration: none;
        color: #004530;
        cursor: pointer;

        &:visited {
            color: #004530;
        }
    }

`;

const Container = styled.main`
    margin: 0 auto;
    padding: 0;
`;

export const Layout = ({ children }) => {
  return (
    <>  
        <GlobalStyles />
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </>
  )
}