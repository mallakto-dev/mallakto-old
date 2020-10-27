import React from "react"
import { SEO } from "../components/SEO"
import { About } from "../components/About"

const AboutPage = () => {
  return (
    <>
      <SEO
        title="О нас | Mallakto"
        description="Московский веган-кооператив Mallakto"
      />
      <About showFull={true} />
    </>
  )
}
export default AboutPage
