import './App.css';
import Portfolio from './components/sections/Portfolio';
import CompaniesWeWork from './components/sections/CompaniesWeWork';
import ContactUs from './components/sections/ContactUs';
import Faq from './components/sections/Faq';
import OurClients from './components/sections/OurClients';
import HowWeWork from './components/sections/HowWeWork';
import Header from './components/sections/Header/Header';
import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import Service from './components/sections/Service';
import Advantages from './components/sections/Advantages/Advantages';

function App() {

  useEffect(() => {
    console.log(window);
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Service />
      <Advantages />
      <HowWeWork />
      <OurClients />
      <Portfolio />
      <CompaniesWeWork />
      <Faq />
      <ContactUs />
    </>
  );
}

export default App;
