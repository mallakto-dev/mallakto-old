import React from "react";
import { SEO } from '../components/SEO';
import { About } from '../components/About';
import { ProductsGrid } from "../components/ProductsGrid/ProductsGrid";

export default function Home() {
  return (
    <>
      <SEO />
      <About showFull={ false } />
      <ProductsGrid />
    </>
  )
}
