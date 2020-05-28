import * as React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
      <nav className={'navbar'}>
        <Link href={'/'}>
          <img src={'/logo.svg'} alt='Anish Neupane Logo' />
        </Link>

        <ul>
          <li>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={'/work'}>
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
