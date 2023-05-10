import Head from 'next/head'
import styles from '@/styles/Home.module.css'
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
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Vanessa Foerster" ClassName="w-full h-auto" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="A fusion of code and creativity, bringing your design visions to life" 
              className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>Creative software engineer, driving better user experiences with aesthetics and functionality.
                Explore my latest projects, showcasing my skills in web development, design, and more.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Resume 2023.pdf" target={'_blank'} 
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                '
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
