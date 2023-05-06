import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';

import yarncatImg from '@/public/images/YarnCatscreenshot.png';
import hangman from '@/public/images/Hangman.png';
import downtomatch from '@/public/images/downtomatch.png';
import happymask from '@/public/images/happymaskshop.png';

const FeaturedProject  = ({title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl bg-light shadow-2xl'>
            <div className='w-1/2 overflow-hidden rounded-lg p-12'>
                <Image src={img} alt={title} className='w-full h-auto border-none rounded-lg' />
            </div>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'
                    className='rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                    >Github Repo</Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, summary, img, link, github}) => {
    return (
        <article className='w-full rounded-3xl bg-light shadow-2xl p-6 mt-10'>
            <div className='w-full overflow-hidden rounded-lg '>
                <Image src={img} alt={title} className='w-full h-auto border-none rounded-lg' />
            </div>
            <div className='w-full flex flex-col items-start justify-between pl-6'>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'
                    className='rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                    >Github Repo</Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}


function Projects() {
    return (
        <>
        <Head>
            <title>Vanessa Foerster | Projects Page</title>
            <meta name="descriptin" content="Project Page for Vanessa Foerster" />
        </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className='pt-16'>
                <AnimatedText text="Check Out What I've Built!" className='mb-16' />
                <div className='grid grid-cols-12 gap24'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title='Yarn Cat'
                            summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                            img={yarncatImg}
                            link='https://yarncat.herokuapp.com/'
                            github='https://github.com/illnessink/yarn_cat'
                        />
                    </div>
                    <div className='col-span-6 mr-2'>
                        <Project 
                        title='HangMan'
                        summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                        img={hangman}
                        link='https://illnessink.github.io/proj1-hangman-game/'
                        github='https://github.com/illnessink/proj1-hangman-game'
                        />
                    </div>
                    <div className='col-span-6'>
                    <Project 
                        title='Down to Match'
                        summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                        img={downtomatch}
                        link='https://downtomatch.netlify.app/'
                        github='https://github.com/illnessink/dtm-frontend'
                        />
                    </div>
                    <div className='col-span-12 mt-10'>
                        <FeaturedProject 
                            title='Happy Mask Shop'
                            summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                            img={happymask}
                            link='https://happy-mask-shop.herokuapp.com/masks'
                            github='https://github.com/illnessink/Happy-Mask-Shop'
                        />
                    </div>
                </div>
            </Layout>
        </main>
        </>
    );
}

export default Projects;