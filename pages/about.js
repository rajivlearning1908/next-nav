// pages/about.js
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from './main.module.css';

export default function About() {
    return (
        <div>
            <Navbar />
            <h1 className={styles.textCenter}>About Us</h1>
            <div className={styles.mainContainerCustom}>
                <h2>Welcome to RK Enterprise</h2>

                <p>At RK Enterprise, we are passionate about delivering service/product—e.g., innovative tech solutions, high-quality skincare products, exceptional customer experiences. Since our founding in [Year], we've been dedicated to solving a specific problem or offering unique value to your customers.</p>

                <p>Our mission is simple: to provide cutting edge technology services and product that empowers our customers to achieve desired outcome, e.g., live healthier, be more productive, enjoy life more, etc.. We take pride in our approach to customer service, unique product features, values, etc. and believe that reflects your company's values or vision.</p>

                <p>We are a diverse and driven team that works tirelessly to create products and experiences that not only meet the highest standards of quality but also bring value to every customer interaction. Whether you're seeking specific service/product, or looking for specific result, we are here to help you make your vision a reality.</p>

                <p>Thank you for choosing RK Enterprise. We're excited to be a part of your journey.</p>
                <p>
                    <Link href="/" className={styles.back}>
                        Back to Home
                    </Link>
                </p>
            </div>
        </div>
    )
}
