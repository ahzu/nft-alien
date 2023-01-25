import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from './blocks/navbar'
import Footer from './blocks/footer'



export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT ALIEN - About Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  )
}
