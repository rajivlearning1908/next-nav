// components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul className='navbar'>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/login">
            Login
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          background-color: lightblue;
          padding: 10px;
        }

        ul {
          list-style-type: none;
          display: flex;
          justify-content: space-around;
        }

        li a {
          color: white !important;
          text-decoration: none;
          font-size: 18px;
        }
        
        ul.navbar li a {
        color: white;
        }

        li a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  )
}
