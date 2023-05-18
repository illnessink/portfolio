import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';

import yarncatImg from '@/public/images/YarnCatscreenshot.png';
import hangman from '@/public/images/Hangman.png';
import downtomatch from '@/public/images/downtomatch.png';
import happymask from '@/public/images/happymaskshop.png';
import TransitionEffect from '@/components/TransitionEffect';

const FeaturedProject  = ({title, technology,  summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between p-6 rounded-3xl bg-light shadow-2xl 
        dark:bg-gray-600 lg:flex-col lg:p-8 xs:rounded-2xl xs:p-2'>
            <div className='w-1/2 overflow-hidden rounded-lg lg:w-full lg:p-4 sm:p-0'>
                <Image src={img} alt={title} className='w-full h-auto border-none rounded-lg' />
            </div>
            <div className='w-1/2 flex flex-col items-start justify-between px-6 lg:w-full'>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-3xl'>{title}</h2>
                </Link>
                <div className="py-2">
			        <details className="group">
				        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					        <span className='text-dark dark:text-light'> About {title}</span>
					        <span className="transition group-open:rotate-180">
                                <svg className="dark:stroke-white" fill="none" height="24" shapeRendering="geometricPrecision" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
				        </summary>
				        <p className="my-2 font-medium text-dark dark:text-light mt-3 group-open:animate-fadeIn">{summary}</p>
			        </details>
		        </div>
                <p className='my-2 font-medium text-dark dark:text-light'>{technology}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'
                    className='rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                    xs:text-sm'
                    >Github Repo</Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                    xs:text-sm'
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, technology, summary, img, link, github}) => {
    return (
        <article className='w-full rounded-3xl bg-light shadow-2xl p-6 mt-10 dark:bg-gray-600 xs:p-2'>
            <div className='w-full overflow-hidden rounded-lg '>
                <Image src={img} alt={title} className='w-full h-auto border-none rounded-lg' />
            </div>
            <div className='w-full flex flex-col items-start justify-between px-6'>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-3xl'>{title}</h2>
                </Link>
                <div className="py-2">
			        <details className="group">
				        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					        <span className='text-dark dark:text-light'> About {title}</span>
					        <span className="transition group-open:rotate-180">
                                <svg className="dark:stroke-white" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
				        </summary>
				        <p className="my-2 font-medium text-dark dark:text-light mt-3 group-open:animate-fadeIn">{summary}</p>
			        </details>
		        </div>
                <p className='my-2 font-medium text-dark dark:text-light'>{technology}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'
                    className='rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                    xs:text-sm'
                    >Github Repo</Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px=6 text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                    xs:text-sm'
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
            <meta name="description" content="Project Page for Vanessa Foerster" />
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className='pt-16'>
                <AnimatedText text="Check Out What I've Built!" className='mb-16 lg:!text-7xl md:!text-5xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <div className='grid grid-cols-12 gap24'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title='Yarn Cat'
                            technology="HTML | CSS | JavaScript | Python | Django | PostgreSQL | YouTube API | Bootstrap"
                            summary="Yarn Cat is a web app I created using the full-stack Django framework. It allows users to 
                            easily upload and manage their crafting projects. With Yarn Cat, users can add project descriptions, 
                            upload photos, and track time spent on each project.

                            Authentication is handled through Django's built-in system, while authorization is implemented to 
                            restrict access to specific resources. The app is powered by PostgreSQL, ensuring that data is safely 
                            and reliably stored.
                            
                            Users can search and favorite tutorial videos using the YouTube API to help them learn new techniques 
                            and enhance their crafting skills. Yarn Cat is deployed online using Heroku and features professional 
                            styling with CSS and Bootstrap.
                            
                            As the sole creator of Yarn Cat, I'm proud to offer a user-friendly and visually appealing app that 
                            helps crafters stay organized and productive."
                            img={yarncatImg}
                            link='https://yarncat.herokuapp.com/'
                            github='https://github.com/illnessink/yarn_cat'
                        />
                    </div>
                    <div className='col-span-6 mr-2 sm:col-span-12'>
                        <Project 
                        title='HangMan'
                        technology="HTML | CSS | JavaScript | JQuery | Google Fonts | Wordnik API"
                        summary="I created a  simple Hangman website that uses HTML, CSS, JavaScript, 
                        AJAX and the Wordnik API to bring the classic game to life. Players of all ages 
                        can enjoy it because it is designed to be immersive and challenging. The Wordnik 
                        API provides a random word for each game, and players can guess letters to discover 
                        the hidden word. AJAX is used to seamlessly communicate with the API to make sure 
                        that words are always new. The website offers an enjoyable Hangman experience that 
                        challenges players' wordplay abilities, expands their vocabulary, and provides hours 
                        of entertainment."
                        img={hangman}
                        link='https://illnessink.github.io/hangman-game/'
                        github='https://github.com/illnessink/hangman-game'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title='Down to Match'
                        technology="React | Node.js | Express | MongoDB | Socket.IO | Firebase | Socket.IO | JavaScript | Bootstrap"
                        summary="Down to Match (DTM) is a dating application designed to help users find compatible matches 
                        based on their interests and preferences. Users can create a profile with essential personal 
                        details such as name, last name, location, interests, and hobbies. Once their profile is complete, 
                        they can take a 10-question compatibility quiz to determine their compatibility percentage with 
                        other users on the platform. Upon receiving compatibility results, users can view their matches, 
                        and explore their profiles before engaging in real-time chats utilizing Socket.IO. The 
                        MERN-stack technology used in the application ensures seamless interaction between all components 
                        while maintaining privacy and data security. With its interactive and well-styled frontend, users 
                        can enjoy seamless communication with the backend for an engaging and user-friendly experience."
                        img={downtomatch}
                        link='https://downtomatch.netlify.app/'
                        github='https://github.com/illnessink/dtm-frontend'
                        />
                    </div>
                    <div className='col-span-12 mt-10'>
                        <FeaturedProject 
                            title='Happy Mask Shop'
                            technology="HTML | CSS | JavaScript | Express | Google Fonts | MongoDB | Node.js"
                            summary="The Happy Mask Shop is a fully-featured web app built with Node, Express, 
                            and MongoDB, and it's inspired by the memorable Ocarina of Time and Majora's Mask 
                            from the much-loved Zelda game series. This tribute to the in-game shop and mask-collecting 
                            adventure has a &quot;masks&quot; model that comes with complete CRUD operations, 
                            letting users easily interact with the data entity. On the site, you can &quot;buy&quot; 
                            and &quot;sell&quot; masks, add new masks to your collection, delete them, and see 
                            all the masks you own. Immerse yourself in the nostalgic world of Zelda while showcasing 
                            the power of a full-stack application."
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