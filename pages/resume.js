import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

export default function Resume() {
    return (
        <>
        <Head>
            <title>Vanessa Foerster | Resume Page</title>
            <meta name="description" content="About Page for Vanessa Foerster" />
        </Head>
        < TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className="pt-16">
                <AnimatedText text="Resume" className="mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
                <div className='flex items-center flex-col justify-center'>
                        <h1 className="text-xl font-bold uppercase text-dark/75 pt-6 sm:pt-0 dark:text-light">Vanessa Foerster</h1>
                        <h2 className="mb-4 text-md font-bold uppercase text-dark/75 mt-4 bg-gray-200 w-full text-center rounded-md">Software Engineer</h2>
                        <p className="w-[70vw] text-center sm:w-[80vw]">
                        Software engineer with a background in visual arts and a unique perspective on software development. 
                        Driven to solve complex coding challenges using creative thinking and problem-solving skills. 
                        Passionate about improving user experiences through the implementation of interactive features and 
                        services, while ensuring inclusivity and accessibility for all users. Projects are approached with 
                        design thinking principles, seamlessly integrating aesthetics and functionality to deliver effective 
                        and user-friendly solutions.
                        </p>
                        <h3 className="mb-4 text-md font-bold uppercase text-dark/75 mt-6 bg-gray-200 w-full text-center rounded-md">Skills and Expertise</h3>
                        <p className="w-[70vw] text-center sm:w-[80vw]">
                        HTML | CSS | JavaScript | Node.js | Express | Git | GitHub | MongoDB | React | Python | Django| Adobe PhotoShop
                        </p>
                        <h3 className="mb-4 text-md font-bold uppercase text-dark/75 mt-6 bg-gray-200 w-full text-center rounded-md ">Technical Project Experience</h3>
                        <div className="grid w-[65vw] grid-cols-5 gap-10 sm:w-[80vw]">
                            <div className="col-span-4 pl-8 sm:pl-0">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">
                                    Hangman Game - Lead Developer
                                </h4>
                                <ul>
                                    <li className="list-disc">
                                    Front-end web app built with HTML, CSS, JavaScript, jQuery, Google Fonts and the Wordnik API. 
                                    </li>
                                    <li className="list-disc">
                                    Random words are generated using the Wordnik API to allow users to play the game over and over. 
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 text-right">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">Dec 2022</h4>
                            </div>
                        </div>
                        <div className="grid w-[65vw] grid-cols-5 gap-10 sm:w-[80vw]">
                            <div className="col-span-4 pl-8 sm:pl-0">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">
                                    Happy Mask Shop - Lead Developer
                                </h4>
                                <ul>
                                    <li className="list-disc">
                                    Full-stack web app built with HTML, CSS, JavaScript, Google Fonts, Express, Node.js and MongoDB
                                    </li>
                                    <li className="list-disc">
                                    Enables users to “buy & sell”, upload their own, and delete or update masks using full CRUD operations.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 text-right">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">Jan 2023</h4>
                            </div>
                        </div>
                        <div className="grid w-[65vw] grid-cols-5 gap-10 sm:w-[80vw]">
                            <div className="col-span-4 pl-8 sm:pl-0">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">
                                    Down to Match - Lead Front End Developer
                                </h4>
                                <ul>
                                    <li className="list-disc">
                                    Full MERN stack web app built with React.js, Express, Node.js, MongoDB, CSS3, Bootstrap, Cloudinary, Socket.io, and Google Firebase.
                                    </li>
                                    <li className="list-disc">
                                    Allows users to make a profile, upload photos, get matched and chat with other users based on compatibility quiz.
                                    </li>
                                    <li className="list-disc">
                                    Users can chat in real time with their matches using Socket.io
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 text-right">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">March 2023</h4>
                            </div>
                        </div>
                        <div className="grid w-[65vw] grid-cols-5 gap-10 sm:w-[80vw]">
                            <div className="col-span-4 pl-8 sm:pl-0">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">
                                    Yarn Cat - Lead Developer
                                </h4>
                                <ul>
                                    <li className="list-disc">
                                    Full-stack web app built with HTML, CSS, JavaScript, PostgreSQL, YouTube API, Python, Django and Bootstrap
                                    </li>
                                    <li className="list-disc">
                                    Users can add projects, upload info and photos, track time spent on each project as well as delete or update the project info
                                    </li>
                                    <li className="list-disc">
                                    Users can search for tutorial videos using the Youtube API and favorite them to see them all on their favorites page
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 text-right">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">April 2023</h4>
                            </div>
                        </div>
                        <h3 className="mb-4 text-md font-bold uppercase text-dark/75 mt-6 bg-gray-200 w-full text-center rounded-md">Experience</h3>
                        <div className="grid w-[65vw] grid-cols-6 gap-10 sm:w-[80vw] sm:gap-6">
                            <div className="col-span-5 pl-8 sm:pl-0">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">
                                    Level 3 Hair Stylist | Vaza Salon - Ossining, NY 
                                </h4>
                                <ul>
                                    <li className="list-disc">
                                    Manage a client base of over 100 clients while condu%.cting consultations to determine service requests, emphasizing product
benefits throughout the selection process, resulting in a growth in customer retention by 40
                                    </li>
                                    <li className="list-disc">
                                    Collaborated with store manager to bring in new products and staff education to drive sales and customer satisfaction which
led to a 15% increase in revenue and growth.
                                    </li>
                                    <li className="list-disc">
                                    Developed a new method and process to streamline identification of product inventory utilized during client services, which
resulted in reduced time spent identifying products improving efficiency by over 30%.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 text-right">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pr-2 sm:text-sm sm:pt-2 dark:text-light">April 2021 – Present</h4>
                            </div>
                        </div>
                        <div className="grid w-[65vw] grid-cols-5 gap-10 sm:w-[80vw]">
                            <div className="col-span-4 pl-8 sm:pl-0">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:text-sm sm:pt-2 dark:text-light">
                                    Delivery Driver | Postmates - Los Angeles, CA  
                                </h4>
                                <ul>
                                    <li className="list-disc">
                                    Ensured accurate and timely delivery of over 20 Postmates orders per week by corresponding directly with the delivery team
                                    </li>
                                    <li className="list-disc">
                                    Interacted with external clients and businesses to provide status updates on deliveries, which resulted in a 
                                    customer rating of 4.9 stars.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 text-right">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">April 2017 – April 2020</h4>
                            </div>
                        </div>
                        <div className="grid w-[65vw] grid-cols-5 gap-10 sm:w-[80vw]">
                            <div className="col-span-4 pl-8 sm:pl-0">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">
                                Delivery Driver | Saucey - Los Angeles, CA 
                                </h4>
                                <ul>
                                    <li className="list-disc">
                                    Awarded the #1 driver in the Vernice California area for delivering excellent customer service and maintaining 
                                    a positive demeanor throughout all interactions with customers resulting in over 3,000 successful deliveries.
                                    </li>
                                    <li className="list-disc">
                                    Developed a streamlined process for picking up and delivering orders, while maintaining communications with 
                                    customers and the Saucey operations team to resolve any issues or challenges that arose during deliveries.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 text-right sm:h-auto">
                                <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:pt-2 sm:text-sm dark:text-light">May 2017 – Dec 2019</h4>
                            </div>
                        </div>
                        <h3 className="mb-4 text-md font-bold uppercase text-dark/75 mt-6 bg-gray-200 w-full text-center rounded-md">Education</h3>
                        <div className="grid w-[65vw] grid-cols-6 gap-10 sm:w-[80vw]">
                            <div className="col-span-4">
                                    <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:text-sm sm:pt-2 dark:text-light">
                                    Software Engineering Immersive | General Assembly | Remote
                                    </h4>
                            </div>
                            <div className="col-span-2 text-right">
                                    <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:text-sm sm:pt-2 dark:text-light">Nov 2022 – May 2023</h4>
                                </div>
                        </div>
                        <div className="grid w-[65vw] grid-cols-6 gap-10 sm:w-[80vw]">
                            <div className="col-span-4">
                                    <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:text-sm sm:pt-2 dark:text-light">
                                    Cosmetology Program | Santa Monica College | Santa Monica, CA 
                                    </h4>
                            </div>
                            <div className="col-span-2 text-right">
                                    <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:text-sm sm:pt-2 dark:text-light">June 2016 – Aug 2019</h4>
                                </div>
                        </div>
                        <div className="grid w-[65vw] grid-cols-6 gap-10 sm:w-[80vw]">
                            <div className="col-span-4">
                                    <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:text-sm sm:pt-2 dark:text-light">
                                    Graphic Design Program | Orange-Ulster BOCES | Goshen, NY 
                                    </h4>
                            </div>
                            <div className="col-span-2 text-right">
                                    <h4 className="mb-4 text-md font-bold uppercase text-dark/75 pt-4 sm:text-sm sm:pt-2 dark:text-light">Sep 2005 - June 2007</h4>
                                </div>
                        </div>
                </div>
            </Layout>
        </main>
        </>
    );
}