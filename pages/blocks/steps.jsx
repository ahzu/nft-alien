import Head from 'next/head';
import styles from '../../styles/Home.module.css'

export default function Steps () {
    return ( 
    <>
      <div className="container mt-5">
        <div className="display-5 fs-1 mb-5">HOW DOES <span className={styles.span_text}>NFT ALIEN</span> WORK</div>
            <div className="row py-2 px-3">
                <div className="col-sm mb-4 m-1">
                <div className={styles.steps}>
                    <img src="/step-1.svg" width="82px" height="62px"/>
                    <h3 className="fs-4 mt-4">Step 1</h3>
                    Connect Your Wallet
                </div>
                </div>
                <div className="col-sm mb-4 m-1">
                <div className={styles.steps}>
                    <img src="/step-2.svg" width="82px" height="62px"/>
                    <h3 className="fs-4 mt-4">Step 2</h3>
                    Select Your Quality
                </div>
                </div>
                <div className="col-sm mb-4 m-1">
                <div className={styles.steps}>
                    <img src="/step-3.svg" width="82px" height="62px"/>
                    <h3 className="fs-4 mt-4">Step 3</h3>
                    Confirm the Transaction
                </div>
                </div>
                <div className="col-sm mb-4 m-1">
                <div className={styles.steps}>
                    <img src="/step-4.svg" width="82px" height="62px"/>
                    <h3 className="fs-4 mt-4">Step 4</h3>
                    Receive Your NFTs
                </div>
                </div>
            </div>
        </div>
    </>

    )
}
