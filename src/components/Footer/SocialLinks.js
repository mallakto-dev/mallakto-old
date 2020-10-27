import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVk, faInstagram } from "@fortawesome/free-brands-svg-icons"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 4.5rem;
`

export const SocialLinks = () => {
  return (
    <StyledDiv>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/mal_lakto"
      >
        <FontAwesomeIcon icon={faInstagram} size={"2x"} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://vk.com/mallakto"
      >
        <FontAwesomeIcon icon={faVk} size={"2x"} />
      </a>
    </StyledDiv>
  )
}
