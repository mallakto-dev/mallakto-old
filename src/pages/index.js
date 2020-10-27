import React from "react"
import { SEO } from "../components/SEO"
import { About } from "../components/About"
import { ProductsGrid } from "../components/ProductsGrid/ProductsGrid"

export default function Home() {
  return (
    <>
      <SEO
        title="Главная | Mallakto"
        description="Mallakto (не молоко - в переводе с эсперанто) - Московский кооператив по производству тофу, соевого молока и других веганских продуктов. Мы располагаемся по адресу город Москва, улица Электродная 2, строение 23. "
      />
      <About showFull={false} />
      <ProductsGrid />
    </>
  )
}
