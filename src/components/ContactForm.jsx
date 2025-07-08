import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendWhatsApp = () => {
    const { name, company, email, phone, message } = formData;
    const text = `Name: ${name}%0ACompany: ${company}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/923094946763?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  sm:text-2xl lg:text-3xl mt-10 gap-x-4 gap-y-8 px-4 sm:px-6 md:px-10 lg:px-20 w-full max-w-6xl mx-auto">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          className="border-none focus:outline-none w-full bg-transparent"
          onChange={handleChange}
        />
        <hr className="w-full mt-2" />
      </div>

      <div>
        <input
          type="text"
          name="company"
          placeholder="Company Name*"
          className="border-none focus:outline-none w-full bg-transparent"
          onChange={handleChange}
        />
        <hr className="w-full mt-2" />
      </div>

      <div>
        <input
          type="text"
          name="email"
          placeholder="Email Address*"
          className="border-none focus:outline-none w-full bg-transparent"
          onChange={handleChange}
        />
        <hr className="w-full mt-2" />
      </div>

      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number*"
          className="border-none focus:outline-none w-full bg-transparent"
          onChange={handleChange}
        />
        <hr className="w-full mt-2" />
      </div>

      <div className="col-span-1 sm:col-span-2">
        <input
          type="text"
          name="message"
          placeholder="A Few Words*"
          className="border-none focus:outline-none w-full bg-transparent"
          onChange={handleChange}
        />
        <hr className="w-full mt-2" />
      </div>

      <div className="col-span-1 sm:col-span-2 flex justify-center mt-5">
     <button className="group relative overflow-hidden border bg-gray-700 border-white w-full sm:w-80 h-14 rounded-4xl text-base sm:text-lg font-medium">
                 <div className="h-28 flex flex-col transition-transform duration-300 group-hover:-translate-y-14">
                   <span className="h-14 flex items-center justify-center gap-2">
                     Send Message <IoMdSend size={24}  />
                   </span>
                   <span className="h-14 flex items-center justify-center gap-2">
                     Send Message    <IoMdSend size={24}/>
                   </span>
                 </div>
               </button>
      </div>
     

    </div>
  );
};

export default ContactForm;
