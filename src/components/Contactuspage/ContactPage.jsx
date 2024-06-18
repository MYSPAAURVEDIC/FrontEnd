import React from 'react'
import { Link } from "react-router-dom"
import icon1 from "../../components/images/CallIcon.png"
import icon2 from "../../components/images/EmailIcon.png"
import icon3 from "../../components/images/LocationIcon.png"
import "./ContactPage.css"

function ContactPage() {
  return (
  
<>
 
            <section className="contactBg w-full h-64 flex flex-col items-center justify-center text-white gap-6">
                <div className="text-5xl font-semibold">Contact Us</div>
                <div className="font-semibold">
                    <span><Link to="/">Home </Link></span>/
                    <span className="text-blue-400"> Contact Us</span>
                </div>
            </section>
            <section className="w-[96%] mt-10 flex max-md:flex-col justify-center p-4">
                <div className="w-full max-md:mb-4">
                    <div className="flex items-center text-blue-500 gap-2 mb-4">
                        <div className="w-10 h-1 rounded-md bg-gradient-to-r from-blue-500 to-white"></div><div className="font-semibold">Contact Us</div>
                    </div>
                    <div className="font-semibold max-md:text-3xl text-4xl">
                        We're here and eager <br className="max-md:hidden" /> to assist you
                    </div>
                </div>
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 ">

                    <a href="tel:9540020546"><div className="bg-gradientContact group relative p-4 rounded-md flex flex-col items-start justify-start shadow-md gap-2">

                        <div className=" absolute inset-0 flex items-start max-md:justify-center justify-start p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <img src={icon1} alt="" />
                        </div>
                        <div className=" absolute inset-0 flex items-start max-md:justify-center justify-start p-4 opacity-100 transition-opacity group-hover:opacity-0">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="flex flex-col max-md:items-center max-md:w-full mt-[94px] gap-2">
                            <div className="max-md:text-center text-start  w-full font-semibold">Phone Number</div>
                            <p className="text-xs pr-4">
                            8137833588 | 8921043599
                            </p></div>
                        <br />
                        <br />
                    </div>
                    </a>
                    <a href="mailto:contact@techrajendra.com"><div className="bg-gradientContact group relative p-4 rounded-md flex flex-col items-start justify-start shadow-md gap-2">

                        <div className=" absolute inset-0 flex items-start max-md:justify-center justify-start p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <img src={icon2} alt="" />
                        </div>
                        <div className=" absolute inset-0 flex items-start max-md:justify-center justify-start p-4 opacity-100 transition-opacity group-hover:opacity-0">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="flex flex-col max-md:items-center max-md:w-full mt-[94px] gap-2">
                            <div className="max-md:text-center text-start w-full font-semibold">Email address</div>
                            <p className="text-xs pr-4">
                            myspagr8@gmail.com
                            </p></div>
                        <br />
                        <br />
                    </div></a>
                    <div className="bg-gradientContact group relative p-4 pb-3 rounded-md flex flex-col items-start justify-start shadow-md gap-2">

                        <div className=" absolute inset-0 flex items-start max-md:justify-center justify-start p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <img src={icon3} alt="" /> 
                        </div>
                        <div className=" absolute inset-0 flex items-start max-md:justify-center justify-start p-4 opacity-100 transition-opacity group-hover:opacity-0">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="flex flex-col max-md:items-center max-md:w-full mt-[94px] gap-2">
                            <div className="max-md:text-center text-start w-full font-semibold">Office Location</div>
                            <p className="text-xs pr-4">
                            1st Floor, Sky Tower, Mavoor Road Junction, CALICUT 673001

                            </p></div>
                    </div>
                    {/* <a href="https://outlook.office365.com/owa/calendar/TechRajendra1@spacepeindia.onmicrosoft.com/bookings/"><div className="bg-gradientContact group relative p-4 rounded-md flex flex-col items-start justify-start shadow-md gap-2">

                        <div className=" absolute inset-0 flex items-start max-md:justify-center justify-start p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <img src={icon1} alt="" />
                        </div>
                        <div className=" absolute inset-0 flex items-start max-md:justify-center justify-start p-4 opacity-100 transition-opacity group-hover:opacity-0">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="flex flex-col max-md:items-center max-md:w-full mt-[94px] gap-2">
                            <div className="max-md:text-center text-start w-full font-semibold">Book A Consultation</div>
                            <br />
                            <div className="bg-blue-400 text-white p-2 font-normal text-center rounded-md cursor-pointer">BOOK A CALL</div>
                            </div>
                    </div></a> */}

                </div>
            </section>

</>

  )
}

export default ContactPage
