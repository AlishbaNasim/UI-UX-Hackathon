import Header from "../components/Header";
import Hero from "../components/Hero";
import BrowseRange from "../components/BrowseRange"
import Product from "@/components/Product"
import Room from "@/components/Room"
// import RoomInspiration from "@/components/RoomInspiration";
// import Benefits from "@/components/Benefits"
import Footer from "@/components/Footer"
export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <BrowseRange/>
    <Product/>
    <Room/>
    {/* <RoomInspiration/> */}
    {/* <Benefits/> */}
    <Footer/>
   </div>
  );
}
