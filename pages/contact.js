// pages/about.js
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the Contact page.</p>
      <p>
        <Link href="/">
          Back to Home
        </Link>
      </p>
    </div>
  )
}
