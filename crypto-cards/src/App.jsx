import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AmazeNFT from "./components/AmazeNFT/AmazeNFT";
import OverAllCollection from "./components/OverAllCollection/OverAllCollection";
import NftCollection from "./components/NftCollection";
import CtaSignup from "./components/CtaSignup";
import DiscoverNFT from "./components/DiscoverNFT";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AmazeNFT />
      <OverAllCollection />
      <NftCollection />
      <CtaSignup />
      <DiscoverNFT />
      <Footer />
    </>
  )
}

export default App;
