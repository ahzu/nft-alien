import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './blocks/navbar'
import Footer from './blocks/footer'
import Collection from './blocks/collection'
import HeroFP from './blocks/hero-frontpage'
import Steps from './blocks/steps'
import Spacer from './blocks/spacer'

export default function RoadMap() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NFTALIEN Collections are a set of digital collectibles that can be minted on the Polygon Blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <HeroFP />
        <Collection />
        <Steps />
        <Spacer />
      <Footer />
    </div>
  )
}
