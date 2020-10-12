import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout";
import { SEO } from '../components/SEO';

const UnknownPage = () => {
    return (
        <Layout>
          <SEO />
          <p>
              Увы, такой страницы нет... Попробуйте верунуться на главную
          </p>
          <Link to="/" > На главную </Link>
        </Layout>
      )
}

export default UnknownPage