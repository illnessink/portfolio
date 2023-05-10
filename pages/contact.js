import { FaLinkedin, FaGithub } from "react-icons/fa";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";


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
        className='rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
        hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
      >
        Send Message
      </button>
    </form>
  );

  return (
    <>
    <Head>
            <title>Vanessa Foerster | Contact Page</title>
            <meta name="descriptin" content="Contact Page for Vanessa Foerster" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className="pt-16">
                <AnimatedText text="Let's Connect" className="mb-10"/>
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto p-2  w-full">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow shadow-gray-400 rounded-xl p-4 dark:bg-gray-600">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="hands typing on laptop"
                />
              </div>
              <div>
                <h2 className="py-2 font-bold text-xl">Vanessa Foerster</h2>
                <p>Software Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time postions. Let's
                  talk!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-6">
                    <a href="https://www.linkedin.com/in/vanessafoerster/"  target="_blank">
                        <FaLinkedin size={25}  />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://github.com/illnessink" target="_blank">
                        <FaGithub size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow shadow-gray-400 rounded-xl lg:p-4 dark:bg-gray-600">
            <div className="p-4">
              {ContactForm}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    </main>
    </>
  );
};
export default Contact;