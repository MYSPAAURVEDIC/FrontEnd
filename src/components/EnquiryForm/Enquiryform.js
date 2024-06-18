// src/EnquiryForm.js
import React, { useState } from 'react';
import "./Enquiryform.css";
import icon1 from "../images/CallIcon.png";
import icon2 from "../images/EmailIcon.png";
import icon3 from "../images/LocationIcon.png";

const EnquiryForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const enquiry = {
            user_name:name,
            message:message,
            contact_number:phone,
        };

        try {
            const res = await fetch('http://localhost:5000/api/enquiries/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(enquiry),
            });

            if (res.ok) {
                alert('Enquiry submitted successfully');
            } else {
                alert('Failed to submit enquiry');
            }
        } catch (err) {
            console.error(err);
            alert('Error submitting enquiry');
        }
    };

    return (
        <section className="w-full flex flex-col items-center justify-center">
            <section className="w-[80%] max-md:w-[95%] max-md:rounded-lg bg-white p-4 m-10 grid grid-cols-2 max-md:grid-cols-1 place-items-start shadow-lg">
                <div className="p-10 max-md:p-4 grid grid-cols-1 gap-4">
                    <div className="flex items-center text-blue-500 gap-2 mb-4">
                        <div className="w-10 h-1 rounded-md bg-gradient-to-r from-blue-500 to-white"></div>
                        <div className="font-semibold">Enquiry</div>
                    </div>
                    <div className="font-semibold text-4xl">
                        Need your any help send message
                    </div>
                    <div className="text-xs">
                        Have questions or need assistance? Don't hesitate to reach out by sending us a message. Our dedicated team is here to provide you with the support you need.
                    </div>
                </div>
                <form className="grid grid-cols-2 max-md:w-full" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" className="bg-gray-100 max-md:col-span-2 m-2 p-4" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" className="bg-gray-100 max-md:col-span-2 m-2 p-4" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="tel" placeholder="Phone" className="bg-gray-100 max-md:col-span-2 m-2 p-4" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" placeholder="Subject" className="bg-gray-100 max-md:col-span-2 m-2 p-4" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <textarea placeholder="Message" className="col-span-2 bg-gray-100 p-8 m-2" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit" className="p-4 m-2 bg-blue-500 text-white max-md:col-span-2">Send Message</button>
                </form>
            </section>
        </section>
    );
};

export default EnquiryForm;
