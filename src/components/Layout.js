import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import 'focus-visible';

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

        &:hover {
            color: #2c6855;
        }
    }

    button:focus {
            outline: 3px solid #1da1f2;
            outline-offset: 2px;
        }


    .js-focus-visible :focus:not(.focus-visible) {
        outline: none;
    }

`

const Container = styled.main`
  width: 100%;
  padding: 0;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
