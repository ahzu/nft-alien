import styles from '../../styles/Home.module.css'
import Head from 'next/head';
import Image from 'react-bootstrap/Image'


export default function Collection () {
    return (
        <>
            <div className="container my-5">
                <div className="display-5 fs-1 mb-3 text-start ms-4">Collection</div>
                <div className="row py-2 px-3">
                    <div className="col-sm mb-4 m-1">
                    <div className={styles.item_list}>
                        <Image className="fluid" src="/nft-1.jpg" width="100%" height="auto"/>
                        <p>Connect Your Wallet</p>
                    </div>
                    </div>
                    <div className="col-sm mb-4 m-1">
                    <div className={styles.item_list}>
                        <img src="/nft-2.jpg" width="100%" height="auto"/>
                        <p>Select Your Quality</p>
                    </div>
                    </div>
                    <div className="col-sm mb-4 m-1">
                    <div className={styles.item_list}>
                        <img src="/nft-3.jpg" width="100%" height="auto"/>
                      
                        <p>Confirm the Transaction</p>
                    </div>
                    </div>
                    <div className="col-sm mb-4 m-1">
                    <div className={styles.item_list}>
                        <img src="/nft-4.jpg" width="100%" height="auto"/>
                       
                        <p>Receive Your NFTs</p>
                    </div>
                    </div>
                </div>

                <div className="row py-2 px-3">
                    <div className="col-sm mb-4 m-1">
                    <div className={styles.item_list}>
                        <img src="/nft-5.jpg" width="100%" height="auto"/>
                        <p>Connect Your Wallet</p>
                    </div>
                    </div>
                    <div className="col-sm mb-4 m-1">
                    <div className={styles.item_list}>
                        <img src="/nft-6.jpg" width="100%" height="auto"/>
                        <p>Select Your Quality</p>
                    </div>
                    </div>
                    <div className="col-sm mb-4 m-1">
                    <div className={styles.item_list}>
                        <img src="/nft-7.jpg" width="100%" height="auto"/>
                      
                        <p>Confirm the Transaction</p>
                    </div>
                    </div>
                    <div className="col-sm mb-4 m-1">
                    <div className={styles.item_list}>
                        <img src="/nft-8.jpg" width="100%" height="auto"/>
                       
                        <p>Receive Your NFTs</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}