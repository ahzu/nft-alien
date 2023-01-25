import Image from 'next/image'
import styles from '../../styles/Home.module.css';

export default function Footer() {
    return (
        <footer className={styles.nav_footer_bg}>
          <div className="container px-3 m-auto">
            <div className="row my-1 py-5 justify-content-between g-2 px-3 ">
              <div className="col-xl-2 col-6 text-start mb-3">
                <div className="fs-5 fw-bolder border-bottom py-2">Company</div>
                  <a className="nav-link fw-light py-1" href="#">About</a>
                  <a className="nav-link fw-light py-1" href="#">Contact</a>
                  <a className="nav-link fw-light py-1" href="#">Policy</a>
                  <a className="nav-link fw-light py-1" href="#">Social Media</a>
              </div>
              <div className="col-xl-2 col-5 text-start mb-3">
              <div className="fs-5 fw-bolder border-bottom py-2">Resources</div>
                  <a className="nav-link fw-light py-1" href="#">Documentation</a>
                  <a className="nav-link fw-light py-1" href="#">GitHub</a>
                  <a className="nav-link fw-light py-1" href="#">Facebook Group</a>
                  <a className="nav-link fw-light py-1" href="#">W3C</a>
                  <a className="nav-link fw-light py-1" href="#">Polygon Scan</a>
                  <a className="nav-link fw-light py-1" href="#">Bootstrap 5</a>
                  <a className="nav-link fw-light py-1" href="#">React</a>
              </div>
              <div className="col-xl-2 col-5 text-start mb-3">
              <div className="fs-5 fw-bolder border-bottom py-2">Products</div>
                  <a className="nav-link fw-light py-1" href="#">Templates</a>
                  <a className="nav-link fw-light py-1" href="#">Clothing</a>
                  <a className="nav-link fw-light py-1" href="#">Electronics</a>
              </div>
              <div className="col-xl-2 col-5 text-start mb-3">
              <div className="fs-5 fw-bolder border-bottom py-2">Solutions</div>
                  <a className="nav-link fw-light py-1" href="#">Web Hosting</a>
                  <a className="nav-link fw-light py-1" href="#">Cloud Compute</a>
                  <a className="nav-link fw-light py-1" href="#">Data Science</a>
              </div>
            </div>
          </div>
          
          <div className="container px-4 py-4">
            <div className="row">
              <div className="col-sm px-3 pt-2 text-start ">
                <a className="nav-link fw-light"
                  href="https://www.ahzudirecttech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                > &copy; 2023 Ahzu Direct Tech, LLC | Design By
                  
                  <span className={styles.logo}>
                    <Image src="/logo.svg" alt="Vercel Logo" width={82} height={20} />
                  </span>
                  </a>
              </div>
            </div>
          </div>
       
      </footer>
    );
}