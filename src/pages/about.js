import React from "react"
import { SEO } from "../components/SEO"
import { About } from "../components/About"

const AboutPage = () => {
  return (
    <>
      <SEO />
      <About showFull={true} />
    </>
  )
}
export default AboutPage
