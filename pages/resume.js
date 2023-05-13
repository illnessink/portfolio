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
                        As a software engineer with a background in visual arts, a unique perspective is brought to each project. 
                        Complex software challenges are tackled using creative thinking, problem-solving skills and a passion for 
                        improving user experiences which drives the implementation of interactive features and services that drive 
                        customer engagement, while ensuring inclusivity and accessibility for all users. Projects are approached 
                        with design thinking principles, seamlessly integrating aesthetics and functionality to deliver effective 
                        and user-friendly solutions
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
                                    Designed and implemented a front-end Hangman web application using HTML, CSS and JavaScript
                                    </li>
                                    <li className="list-disc">
                                    Enables users to play a game of hangman using a random word generated from a third party API
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
                                    Designed and built a full-stack application over the course of two weeks
                                    </li>
                                    <li className="list-disc">
                                    Enables users to “purchase & sell” masks from web app inspired by The Happy Mask Shop from the Zelda 
                                    game series
                                    </li>
                                    <li className="list-disc">
                                    Technologies used: HTML, CSS, JavaScript, Node.js, Express and MongoDB
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
                                    Designed and built a full-stack application using Python, Django and the Youtube API
                                    </li>
                                    <li className="list-disc">
                                    Yarn Cat enables users to add projects, upload info and photos, keep track of the time spent on each 
                                    and search and favorite tutorial videos from youtube
                                    </li>
                                    <li className="list-disc">
                                    Technologies used: HTML, CSS, JavaScript, PostgreSQL, YouTube API, Python, Django and Bootstrap
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
                                    Collaborated and designed a full MERN stack application with a team of four
                                    </li>
                                    <li className="list-disc">
                                    Dating app that allows users to make a profile, upload photos and get matched and chat with other users
                                    </li>
                                    <li className="list-disc">
                                    Technologies used: HTML, CSS, JavaScript, Ajax, Express and MongoDB
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