import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import BuyingOptions from "@/components/BuyingOptions"
import star from "@/public/stars.png"
import line from "@/public/Line 5.png"
import ProductDescription from "@/components/ProductDescription"
import SubProduct from "@/components/SubProduct"
import { getProduct } from "@/sanity/lib/queries"


// export async function getProduct(slug: string): Promise<Product | null> {
//   if (!slug) {
//     console.error("No slug provided to getProduct");
//     return null;
//   }
//   const query = `*[_type == "product" && slug.current == $slug][0]{
//     title,
//     _id,
//     description,
//     price,
//     isNew,
//     discountPercentage,
//     tags,
//     "imageUrl": productImage.asset->url
//   }`;
//   const product = await client.fetch(query, { slug });
//   return product;
// }

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product =params?.slug ? await getProduct(params.slug):null;
  // console.log(product)
  if (!product) {
    return <div>Product not found</div>;
  }
    // const { addToWishlist } = useCart();
  
  return (
    <div className="min-h-screen" key={product.id}>
      {/* Navigation */}
      <nav className="text-sm bg-[#F9F1E7] text-gray-500 gap-2 flex items-center px-4 lg:px-12 py-2 lg:py-4 w-full">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>&gt;</span>
        <Link href="/shop" className="hover:underline ml-1">
          Shop
        </Link>
        <span>&gt;</span>
        <span className="ml-1 text-gray-700">{product.title}</span>
      </nav>

      {/* Product Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-12 my-8">
        {/* Left: Images */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Small Images */}
          <div className="flex md:flex-col gap-5 mb-4 md:mb-0">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-16 h-16 bg-[#F9F1E7] rounded-md cursor-pointer overflow-hidden">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          {/* Big Image */}
          <div className="bg-[#F9F1E7] rounded-md ml-5 mr-0 w-full max-w-[450px] h-auto">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              width={450}
              height={450}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="pl-3">
          <h1 className="text-2xl mt-7 font-bold">{product.title}</h1>
          <p className="text-lg text-[#9F9F9F] mt-2">Rs {product.price}</p>

          {/* Rating */}
          <div className="flex items-center mt-2 gap-2">
          <Image src={star} alt="stars" />
          <Image src={line} alt="line" />
            <p className="text-gray-500 text-sm">5 Customer Review</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4 max-w-[400px] text-[14px] font-medium leading-6">{product.description}</p>

          {/* Size Options */}
          <div className="mt-4">
            <p className="font-medium">Size</p>
            <div className="flex gap-2 mt-2 text-sm">
              <button className="px-4 py-2 border rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F] ">L</button>
              <button className="px-4 py-2 border rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F]">XL</button>
              <button className="px-4 py-2 border rounded-md bg-[#F9F1E7] hover:bg-[#B88E2F]">XS</button>
            </div>
          </div>

          {/* Color Options */}
          <div className="mt-4">
            <p className="font-medium">Color</p>
            <div className="flex gap-2 mt-2">
              <button className="w-8 h-8 rounded-full bg-[#816DFA] border"></button>
              <button className="w-8 h-8 rounded-full bg-black border"></button>
              <button className="w-8 h-8 rounded-full bg-[#B88E2F] border"></button>
            </div>
          </div>

          {/* Quantity and Buttons */}
        <div className="mt-5">
            <div className="my-2 flex flex-col md:flex-row gap-4">
              <BuyingOptions product={product} tags={product.tags} />
           </div> 
           {/* <Wishlist product={product}/>  */}
            </div>

          {/* Additional Details */}
          <hr className="my-6" />
          <div className="text-sm text-gray-500 space-y-2">
            <p>
              <span className="font-medium">SKU:</span> 59001
            </p>
            <p>
              <span className="font-medium">Category:</span> Sofas
            </p>
            <p>
              <span className="font-medium">Tags:</span> {product.tags.join(", ")}
            </p>
            <div className="flex items-center gap-2">
              <p className="font-medium">Share:</p>
              <span className="flex gap-2 text-black">
                <FaFacebook className="cursor-pointer hover:text-[#B88E2F]" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#B88E2F]" />
                <FaTwitter className="cursor-pointer hover:text-[#B88E2F]" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <ProductDescription />
      <h1 className='text-4xl font-bold text-center pb-7'>Related Products</h1>
      <SubProduct />
      <div className="flex flex-col items-center sm:items-start md:items-center lg:items-center mx-auto m-6">
        <Link href="/shop">
          <button
            className=" text-[#B88E2F] font-semibold text-base outline w-[234px] p-6">
            Show More
          </button>
        </Link>
     </div>
  </div>
  )
}

