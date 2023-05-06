import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "public/images/profilephoto.jpg";
import Skills from "@/components/Skills";

export default function About() {
    return (
        <>
        <Head>
            <title>Vanessa Foerster | About Page</title>
            <meta name="descriptin" content="About Page for Vanessa Foerster" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className="pt-16">
                <AnimatedText text="Art Meets Tech" className="mb-10"/>
                <div className='grid w-full grid-cols-5 gap-10'>
                    <div className="col-span-2 relative h-max rounded-2xl bg-light p-8 max-w-md flex shadow-lg ml-16">
                        <Image src={profilePic} alt="Vanessa Foerster" className="w-full h-auto rounded-2xl" />
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 pt-6">About Me</h2>
                        <p className='font-medium pr-14'>
                        Hi there! I'm Vanessa, a software engineer with a passion for all things creative. With a background in visual arts, 
                        I bring a unique perspective to software engineering. Whether it's designing sleek user interfaces or developing 
                        cutting-edge software, I love using my creativity to solve complex problems and create innovative digital solutions.
                        </p>
                        <p className='my-4 font-medium pr-14'>
                        My journey as a software engineer started with my fascination for how technology could enhance art and design. 
                        It was through this exploration that I discovered my love for coding and building software.
                        </p>
                        <p className='mb-4 font-medium pr-14'>
                        When I'm not typing away at my keyboard, you'll often find me exploring the great outdoors with my dog Icarus, playing 
                        videogames, or making art! 
                        </p>
                        <p className='font-medium pr-14'>
                        My ultimate goal is to create products that not only function flawlessly but also delight users with their aesthetics. 
                        So let's work together and make some beautiful and functional digital magic!
                        </p>
                    </div>
                </div>

            <Skills />
            </Layout>
        </main>
        </>
    );
}