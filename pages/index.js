import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Headernav from './blocks/navbar'
import Footer from './blocks/footer'
import HeroFP from './blocks/hero-frontpage'
import Steps from './blocks/steps'
import Collection from './blocks/collection'
import Thestory from './blocks/thestory'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT ALIEN</title>
        <meta name="description" content="The Alien NFT Invasion is imenant. Yes, we are moving forward into a new era of technology." />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Headernav />
        <HeroFP />
        <Steps />
        <Collection />
        <Thestory />
        <Footer />
    </div>
  )
}
