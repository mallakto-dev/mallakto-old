import React from "react"
import { Seo } from "../components/Seo"
import { About } from "../components/About"

const AboutPage = () => {
  return (
    <>
      <Seo
        title="О нас | Mallakto"
        description="Московский веган-кооператив Mallakto"
      />
      <About showFull={true} />
    </>
  )
}
export default AboutPage
