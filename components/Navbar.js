import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
    { href: '/',         label: 'Home' },
    { href: '/about',    label: 'About Us' },
    { href: '/teachers', label: 'Instructors' },
    { href: '/courses',  label: 'Programs' },
    { href: '/results',  label: 'Admission Results' },
    { href: '/notice',   label: 'Notice' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ padding: '0 24px' }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, textDecoration: 'none', marginRight: '2rem', gap: '0.35rem' }}>
          <span style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            color: 'white',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap'
          }}>
            강의하는 아이들 과학전문학원
          </span>
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 200,
            fontSize: '0.42rem',
            color: 'rgba(255,255,255,0.65)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
          }}>
            Inspired Learning Science Academy
          </span>
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
        <div style={{ width: '2%' }} />
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
