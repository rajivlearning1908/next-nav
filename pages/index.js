// pages/index.js
import Navbar from '../components/Navbar'
import styles from './main.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h2 className={styles.textCenter}>Welcome to the Homepage!</h2>
      <div className={styles.mainContainer}>
        
        <p>We are dedicated to providing top-notch products and services to meet your needs. Whether you're looking for the latest in tech innovations, home essentials, or expert advice, we have it all under one roof.</p>

        <div>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Quality Products: We offer only the highest quality products sourced from trusted manufacturers.</li>
            <li>Customer-Centric Approach: Your satisfaction is our top priority. We provide 24/7 support and personalized recommendations.</li>
            <li>Fast & Reliable Shipping: Get your order delivered in no time with our fast, reliable shipping options.</li>
          </ul>
        </div>
        <div>
          <h3> Our Services</h3>
          <ol>
            <li>Product Recommendations Let us help you find the best products suited to your needs. Our team of experts carefully curates and reviews everything we sell.</li>
            <li>Consulting & Support Need advice or support? Our experienced team is ready to help you with any questions or issues.</li>
            <li>Exclusive Deals & Offers Stay updated with our latest promotions and special offers. Sign up for our newsletter to never miss out.</li>
          </ol>
        </div>
        <div>
          <h3>Featured Products</h3>
          <ul>
            <li><b>Product Name 1:</b> Description of the product with a brief introduction and price.</li>
            <li><b>Product Name 2: </b>Description of the product with a brief introduction and price.</li>
            <li><b>Product Name 3:</b> Description of the product with a brief introduction and price.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
