import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVk, faInstagram } from "@fortawesome/free-brands-svg-icons"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${props => props.width || "4.5rem"};
`

export const SocialLinks = ({ width }) => {
  return (
    <StyledDiv width={width}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/mal_lakto"
        aria-label="Ссылка на инстаграм Маллакто"
      >
        <FontAwesomeIcon icon={faInstagram} size={"2x"} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://vk.com/mallakto"
        aria-label="Ссылка на страницу ВКонтакте Маллакто"
      >
        <FontAwesomeIcon icon={faVk} size={"2x"} />
      </a>
    </StyledDiv>
  )
}
