import React from "react"
import { Helmet } from "react-helmet"

export const SEO = ({ title, description }) => {
  return (
    <Helmet htmlAttributes={{ lang: "ru" }}>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&display=swap"
        rel="preload"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <meta name="yandex-verification" content="7aaefa27f978021f" />
      <meta
        name="google-site-verification"
        content="YdMTqezg-boP1w_yS7atKkdPKQCt2iKeiynijTpf4Bg"
      />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="веганство веган продукты кооператив маллакто Москва"
      />
    </Helmet>
  )
}
