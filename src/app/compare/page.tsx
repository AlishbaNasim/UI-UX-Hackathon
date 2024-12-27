import Features from "@/components/Features";
import ProductShow from "@/components/ProductShow";
import SofaComparison from "@/components/SofaComparsion";
import SubhHero from "@/components/SubhHero";
import React from "react";

const page = () => {
  return (
    <div>
      <SubhHero title="Product Comparsion" subtitle="Home > Comparsion"/>
      <ProductShow/>
      <SofaComparison/>
      <Features/>
    </div>
  );
};

export default page;