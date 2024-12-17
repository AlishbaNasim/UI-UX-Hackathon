import Hero from "../components/Hero";
import BrowseRange from "../components/BrowseRange"
import Product from "@/components/Product"
import Room from "@/components/Room"
import Furniture from "@/components/Furniture";
export default function Home() {
  return (
   <div>
    <Hero/>
    <BrowseRange/>
    <Product/>
    <Room/>
    <Furniture/>
   </div>
  );
}
