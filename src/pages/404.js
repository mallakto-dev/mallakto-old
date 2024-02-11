import React from "react";
import { Link } from "gatsby";
import { Seo } from "../components/Seo";
import styled from "styled-components";

const StyledSection = styled.section`
  margin: 6rem 2rem;
`;

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const NotFound = () => {
  return (
    <StyledSection>
      <Seo title="404 | Mallakto" />
      <StyledParagraph>
        Увы, такой страницы нет... Попробуйте верунуться на главную.
      </StyledParagraph>
      <Link to="/"> На главную </Link>
    </StyledSection>
  );
};

export default NotFound;
