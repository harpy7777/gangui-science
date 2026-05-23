import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/',          label: 'Home' },
    { href: '/about',     label: 'About Us' },
    { href: '/teachers',  label: 'Instructors' },
    { href: '/courses',   label: 'Programs' },
    { href: '/results',   label: 'Admission Results' },
    { href: '/notice',    label: 'Notice' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          <Image
           src="/icon2-1.png"
            alt="강의하는 아이들 과학전문학원"
           width={220}
height={55}
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={router.pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">Contact Us</Link>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="메뉴">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
      </div>
    </>
  )
}
