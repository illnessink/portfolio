import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FaFileDownload } from 'react-icons/fa'

import profilePic from 'public/images/developer1.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Vanessa Foerster's Porfolio</title>
        <meta name="description" content="Personal Portfolio Page for Vanessa Foerster" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full h-screen dark:text-light sm:min-h-0 xs:min-h-0'>
        <Layout className='pt-0 md:pt-16 sm:pt-6'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Vanessa Foerster" className="lg:inline-block lg:w-full" 
              priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="A fusion of code and creativity, bringing your design visions to life" 
              className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl sm:mt-4'/>
              <p className='my-4 text-base font-medium md:text-sm'
              >Creative software engineer, driving better user experiences with aesthetics and functionality.
                Explore my latest projects, showcasing my skills in web development, design, and more.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Resume 2023.pdf" target={'_blank'} 
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'
                download={true}
                >Resume <FaFileDownload className='ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
