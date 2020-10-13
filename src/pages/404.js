import React from "react";
import { Link } from "gatsby";
import { SEO } from '../components/SEO';

const UnknownPage = () => {
    return (
        <>
          <SEO />
          <p>
              Увы, такой страницы нет... Попробуйте верунуться на главную
          </p>
          <Link to="/" > На главную </Link>
        </>
      )
}

export default UnknownPage