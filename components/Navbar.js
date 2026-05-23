import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const links = [
    { href: '/',          label: '홈' },
    { href: '/about',     label: '학원 소개' },
    { href: '/courses',   label: '수업 과정' },
    { href: '/teachers',  label: '강사진' },
    { href: '/results',   label: '합격 실적' },
    { href: '/notice',    label: '공지사항' },
  ]

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="nav-logo">
          <span className="main">강의하는 아이들</span>
          <span className="sub">서울 염창캠퍼스</span>
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
            <Link href="/contact" className="nav-cta">상담 문의</Link>
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
        <Link href="/contact" onClick={() => setOpen(false)}>상담 문의</Link>
      </div>
    </>
  )
}
