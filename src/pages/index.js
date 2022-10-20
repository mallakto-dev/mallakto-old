import React from "react"
import { Seo } from "../components/Seo"
import { About } from "../components/About"
import { ProductsGrid } from "../components/ProductsGrid"
import { LegalDisclaimer } from "../components/LegalDisclaimer"

export default function Home() {
  return (
    <>
      <Seo
        title="Главная | Mallakto"
        description="Mallakto (не молоко - в переводе с эсперанто) - Московский кооператив по производству тофу, соевого молока и других веганских продуктов. Мы располагаемся по адресу город Москва, улица Электродная 2, строение 23. "
      />
      <About showFull={false} />
      <ProductsGrid />
      <LegalDisclaimer />
    </>
  )
}
