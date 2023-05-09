import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/router";

const Contact = () => {
  const ContactForm = (
    <form
      className="flex flex-col"
      method="POST"
      name="contact-form"
      data-netlify="true"
      action='/success'
      data-netlify-honeypot="bot-field"
      netlify
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label
            className="uppercase text-sm py-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="number" className="uppercase text-sm py-2">Phone Number</label>
          <input
            type="text"
            id="number"
            name="number"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="email" className="uppercase text-sm py-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-2 rounded-lg p-3 flex border-gray-300"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="subject" className="uppercase text-sm py-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="border-2 rounded-lg p-3 flex border-gray-300"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="message" className="uppercase text-sm py-2">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          required
          rows={10}
          className="border-2 rounded-lg p-3 flex border-gray-300"
        />
      </div>
      <button
        type="submit"
        className="w-full p-4 text-gray-100 mt-4 font-semibold bg-[#AFD6DF] rounded-lg hover:bg-[#8FC9CB] ease-in duration-300]"
      >
        Send Message
      </button>
    </form>
  );
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto p-2  w-full">
        <p className="text-xl tracking-widest uppercase text-[#AFD6DF]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="hands typing on laptop"
                />
              </div>
              <div>
                <h2 className="py-2">Vanessa Foerster</h2>
                <p>Software Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time postions. Let's
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-6">
                    <FaLinkedin size={25} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {ContactForm}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;