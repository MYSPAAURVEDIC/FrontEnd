import React from 'react';
import './Ourservicespage.css';
import servicesimg1 from './../../components/images/Olive oil massage.jpeg';
import servicesimg2 from './../../components/images/service2.jpg';
import servicesimg3 from './../../components/images/service3.jpg';
import servicesimg4 from './../../components/images/Scrub massage.jpeg';
import servicesimg5 from './../../components/images/AROMA MASSAGE.jpeg';
import servicesimg6 from './../../components/images/service6.jpg';
import servicesimg7 from './../../components/images/service7.jpg';
import servicesimg8 from './../../components/images/Shirodhara.jpeg';

const services = [
  { imageSrc: servicesimg1, title: "Olive Oil Massage" },
  { imageSrc: servicesimg2, title: "Cream Massage" },
  { imageSrc: servicesimg3, title: "Butterfly Massage" },
  { imageSrc: servicesimg4, title: "Scrub Massage" },
  { imageSrc: servicesimg5, title: "Aroma Massage" },
  { imageSrc: servicesimg6, title: "Sweedish Massage" },
  { imageSrc: servicesimg7, title: "Deep Tissue Massage" },
  { imageSrc: servicesimg8, title: "Shirodhara" }
];

const ServiceCard = ({ imageSrc, title }) => {
  return (
    <div className="relative flex w-72 mb-10 flex-col rounded-xl bg-white text-gray-700 shadow-md ">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover  " />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-bold leading-snug text-blue-gray-900  ">
          {title}
        </h5>
        <p className="text-base font-light leading-relaxed">
          {/* Description can go here */}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          type="button"
          className="rounded-lg bg-blue-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:opacity-50"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

function Ourservicespage() {
  return (
    <div className="App w-full h-auto flex flex-col p-3">
      <div className="App-header mb-10">
        <h1 className="font-serif text-3xl">OUR SERVICES</h1>
        <p>THESE ARE THE SERVICES WE PROVIDE, THESE MAKE US STAND APART</p>
      </div>
      <section className="card-section flex flex-wrap gap-3 justify-evenly items-center ">
        {services.map((service, index) => (
          <ServiceCard key={index} imageSrc={service.imageSrc} title={service.title} />
        ))}
      </section>
    </div>
  );
}

export default Ourservicespage;
