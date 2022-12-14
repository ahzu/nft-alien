import styles from '../../styles/Home.module.css';



export default function Thestory () {
    return (
        <> 
        <div className={styles.thestory_bg}>
            <div className="container my-5">
                <div className="row px-4">
                    <div className="col-sm-6 text-start pt-5 pe-5 align-items-center">
                        <h3 className="fw-bold mt-5">THE STORY</h3>
                        <p className="fw-light">Our collection's priority is to reward NFT holders by developing utilities they can use in their current everyday life. Not in a hypothetical future.</p>
                        <div className="row">
                            <div className="col align-center">
                                <h5 className="fw-light">Total Iteam</h5>
                                <h1 className="fw-light">2240+</h1>
                            </div>
                            <div className="col align-center">
                                <h5 className="fw-light">Profiles whitelisted</h5>
                                <h1 className="fw-light">1000+</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="#" class="btn btn-dark mt-3" role="button" data-bs-toggle="button">Start Building</a>
                            </div>
                        
                        </div>
                    </div>
                    {/**The split between the two columns */}
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6 py-4">
                                <div className={styles.item_list}>
                                    <div className="fs-5 fw-bold">Daily Tokens</div>
                                    <p className="fw-light">Earn interstellar tokens passively by staking your collectible NFT.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 py-4">
                                <div className={styles.item_list}>
                                    <div className="fs-5 fw-bold">Daily Tokens</div>
                                    <p className="fw-light">Earn interstellar tokens passively by staking your collectible NFT.</p>
                                </div>
                            </div>
                          
                            <div className="col-sm-6 py-4">
                                <div className={styles.item_list}>
                                    <div className="fs-5 fw-bold">Daily Tokens</div>
                                    <p className="fw-light">Earn interstellar tokens passively by staking your collectible NFT.</p>  
                                </div>                              
                            </div>
                            <div className="col-sm-6 py-4">
                                <div className={styles.item_list}>
                                    <div className="fs-5 fw-bold">Daily Tokens</div>
                                    <p className="fw-light">Earn interstellar tokens passively by staking your collectible NFT.</p> 
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}