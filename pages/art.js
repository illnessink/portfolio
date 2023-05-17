import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Image from 'next/image';
import PhotoAlbum from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css";

// import fifthElement from "@/public/images/fifthelement.png";
// import witch from "@/public/images/witchyseason.png";


export default function Art() {
    const [index, setIndex] = React.useState(-1);
    const photos = [
        {src:"/images/fifthelement.png", width: 1000, height: 786},
        {src:"/images/witchyseason.png", width: 1200, height: 1200},
        {src:"/images/straydog.png", width: 900, height: 1059},
        {src:"/images/joker.png", width: 900, height: 1201},
        {src:"/images/alien.png", width: 720, height: 1008},
        {src:"/images/obariyon.png", width: 850, height: 1100},
    ]
    return (
        <>
        <Head>
            <title>Vanessa Foerster | Art Page</title>
            <meta name="description" content="About Page for Vanessa Foerster" />
        </Head>
        < TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className="pt-16">
                <AnimatedText text="Check Out Some Of My Art!" className="mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
                <div className="w-[80vw] xl:w-[75vw] mx-auto 2xl:w-[65vw]">
                    <PhotoAlbum 
                        layout="rows" 
                        photos={photos}
                        spacing={10} 
                        targetRowHeight={400} 
                        onClick={({ index }) => setIndex(index)}
                    />
                    <Lightbox
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        slides={photos}
                    />
                </div>
                
            </Layout>
        </main>
        </>
    );
}