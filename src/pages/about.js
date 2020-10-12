import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from '../components/SEO';
import { About } from '../components/About';


const AboutPage = () => {
  return (
    <Layout>
      <SEO />
      <About showFull={ true } />
    </Layout>
  )
}
export default AboutPage