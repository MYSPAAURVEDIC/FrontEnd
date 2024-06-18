import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SliderComponent from "./components/SliderComponent/SliderComponent";
import Aboutuspage from "./components/AboutUsPage/Aboutuspage";
import Ourservicespage from "./components/OurServicesPage/Ourservicespage";
import Enquiryform from "./components/EnquiryForm/Enquiryform";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from "./components/Footer/Footer";
import ContactPage from "./components/Contactuspage/ContactPage";


const HomePage = () => (
  <section className="overflow-x-hidden">
    <SliderComponent />
    <Ourservicespage />
    {/* <Aboutuspage /> */}
    <Enquiryform />
  </section>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="App pl-2 pr-2">
        <ScrollToTop />
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about-us" element={<Aboutuspage />} /> */}
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/our-services" element={<Ourservicespage />} />
            <Route path="/enquiry" element={<Enquiryform />} />
            {/* Add a contact us page component if you have one */}
            {/* <Route path="/contact-us" element={<ContactUsPage />} /> */}
          </Routes>
        </div>
        <a className="whats-app" href="https://api.whatsapp.com/send?phone=8137833588" target="_blank" rel="noopener noreferrer">
          <i>
            <WhatsAppIcon className="wtsup" />
          </i>
        </a>
      </div>
      

    </Router>
  );
}

export default App;
