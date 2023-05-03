import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function Contact() {
    return (
        <main className={`${styles.main} ${inter.className}`}>
            <h1>Contact Page</h1>
        </main>
    );
}

export default Contact;