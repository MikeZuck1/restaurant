import Header from "./header/page";
import Banner from "./banner/page"; 
import History from "./history/page"; 
import Map from "./map/page"; 
// import Informations from "./informations/page"; 
// import Contact from "./contact/page"; 
// import Footer from "./footer/page"; 

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <History />
      <Map />
      {/* <Informations />  */}
      {/* <Contact />  */}
      {/* <Footer />  */}
    </>
  );
}