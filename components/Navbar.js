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
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginLeft: '-1rem' }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            border: '1.5px solid rgba(255,255,255,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V12"/>
              <path d="M12 12C12 12 7 10 7 6a5 5 0 0 1 10 0c0 4-5 6-5 6z"/>
              <path d="M12 16C12 16 8 14.5 8 11"/>
              <path d="M12 16C12 16 16 14.5 16 11"/>
            </svg>
          </div>
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
