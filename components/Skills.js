import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark absolute dark:text-dark dark:bg-light'
        whileHover={{ scale: 1.1 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5  }}
        viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-40 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark dark:text-dark dark:bg-light'
        whileHover={{ scale: 1.1 }}
        >
            Web
        </motion.div>

        <Skill name='CSS' x='-5vw' y='-10vw' />
        <Skill name='HTML' x='-25vw' y='2vw' />
        <Skill name='JavaScript' x='18vw' y='5vw' />
        <Skill name='ReactJS' x='0vw' y='13vw' />
        <Skill name='NextJS' x='-20vw' y='-15vw' />
        <Skill name='NodeJS' x='15vw' y='-12vw' />
        <Skill name='MongoDB' x='32vw' y='-5vw' />
        <Skill name='Python' x='0vw' y='-19vw' />
        <Skill name='GitHub' x='-35vw' y='-5vw' />
        <Skill name='Tailwind CSS' x='30vw' y='15vw' />
        <Skill name='Django' x='-30vw' y='10vw' />

    </div>
    </>
  )
}

export default Skills