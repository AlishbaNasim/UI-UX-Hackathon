import Hero from "../components/Hero";
import BrowseRange from "../components/BrowseRange"
import Product from "@/components/Product"
import Room from "@/components/Room"
import Furniture from "@/components/Furniture";
import CartSlider from "@/components/CartSlider";
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
