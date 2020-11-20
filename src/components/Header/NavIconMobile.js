import React from "react"
import styled from "styled-components"

const StyledBtn = styled.button`
  display: block;
  position: ${props => (props.showClose ? "fixed" : "absolute")};
  z-index: 1;
  top: 15px;
  right: 10px;
  background: none;
  border: none;
  width: 3rem;
  height: 2.8rem;
  margin: 0;

  @media (min-width: 768px) {
    display: none;
  }
`

const Sandwich = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 0.4rem;
  background-color: #004530;
  transition: all ease-out 0.3s;
  transform: ${props =>
    props.showClose ? " rotate(45deg) translate(-.1rem,-.4rem)" : "none"};

  &::before,
  &::after {
    content: "";
    width: 2rem;
    height: 0.4rem;
    background-color: #004530;
    transition: all ease-out 0.3s;
  }

  &::before {
    display: block;
    transform: ${props =>
      props.showClose ? "rotate(-90deg)" : "translate(0,-.7rem)"};
  }

  &::after {
    transform: translate(0, 0.3rem);
    display: ${props => (props.showClose ? "none" : "block")};
  }
`

export const NavIconMobile = ({ handleClick, showClose }) => {
  return (
    <StyledBtn
      onClick={handleClick}
      showClose={showClose}
      aria-label="Menu"
      aria-controls="navigation"
      aria-expanded={showClose ? "true" : "false"}
    >
      <Sandwich showClose={showClose} />
    </StyledBtn>
  )
}
