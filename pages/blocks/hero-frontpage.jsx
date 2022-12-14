import styles from '../../styles/Home.module.css';


export default function HeroFP () {
    return (
        <>
            <div className={styles.hero}>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-sm-8 mb-5 text-light m-auto">
                            <h1 className="display-4 light text-center ">EXPLORE NFT COLLECTION</h1>
                            <p className="fs-5">A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, 
metaverse-ready, and designed to benefit their holders.</p>
                        <div className="container-4">
                        <button type="button" class="btn btn-primary btn-lg m-2">Connect Wallet</button>
<button type="button" class="btn btn-secondary btn-lg m-2">Claim NFT</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}