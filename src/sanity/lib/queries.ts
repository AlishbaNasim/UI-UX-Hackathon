import { defineQuery } from "next-sanity";
import { client } from "./client";

export const allProductsQueries = defineQuery(
    `*[_type == "product"] | order(_createdAt){
  title,
    _id,
    description,
    price,
     isNew,
    dicountPercentage, 
   slug {
    current
  },
"imageUrl":productImage.asset->url
}`)

export const subProductQueries = defineQuery(
    `*[_type == "product"] | order(_createdAt){
  title,
    _id,
    description,
    price,
     isNew,
    dicountPercentage, 
   slug {
    current
  },
"imageUrl":productImage.asset->url
}[0..7]`);

interface Product {
  title: string
  id: string
  description: string
  price: number
  isNew: boolean
  discountPercentage: number
  tags: string[]
  imageUrl: string
}

export async function getProduct(slug: string): Promise<Product | null> {
  if (!slug) {
    console.error("No slug provided to getProduct");
    return null;
  }
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    _id,
    description,
    price,
    isNew,
    discountPercentage,
    tags,
    "imageUrl": productImage.asset->url
  }`;
  const product = await client.fetch(query, { slug });
  return product;
}
