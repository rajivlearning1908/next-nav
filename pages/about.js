// pages/about.js
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div>
      <Navbar />
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <p>
        <Link href="/">
          Back to Home
        </Link>
      </p>
    </div>
  )
}
