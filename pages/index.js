import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head><title>강의하는 아이들 서울염창캠퍼스</title></Head>
      <Navbar />
      <div className="page-wrap">

        {/* Hero */}
        <section style={{
          minHeight: '67vh',
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 6%', overflow: 'hidden'
        }}>
          {/* 칠판 배경 */}
         <div style={{ position: 'absolute', inset: 0, background: '#F8F9FA', zIndex: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 39px,rgba(255,255,255,0.03) 40px)`,
            }} />
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }} xmlns="http://www.w3.org/2000/svg">
              <text x="5%" y="20%" fill="white" fontSize="22" fontFamily="serif" transform="rotate(-3, 100, 100)">E = mc²</text>
              <text x="75%" y="15%" fill="white" fontSize="18" fontFamily="serif" transform="rotate(2, 800, 80)">F = ma</text>
              <text x="15%" y="75%" fill="white" fontSize="20" fontFamily="serif" transform="rotate(-2, 200, 400)">PV = nRT</text>
              <text x="60%" y="80%" fill="white" fontSize="18" fontFamily="serif" transform="rotate(3, 700, 450)">ΔE = hf</text>
              <text x="40%" y="12%" fill="white" fontSize="16" fontFamily="serif">v = λf</text>
              <text x="82%" y="55%" fill="white" fontSize="19" fontFamily="serif" transform="rotate(-2, 900, 300)">∑F = 0</text>
              <text x="8%" y="45%" fill="white" fontSize="17" fontFamily="serif" transform="rotate(2, 100, 250)">pH = -log[H⁺]</text>
              <text x="50%" y="65%" fill="white" fontSize="15" fontFamily="serif">6CO₂ + 6H₂O → C₆H₁₂O₆</text>
              <circle cx="88%" cy="30%" r="8" fill="none" stroke="white" strokeWidth="1.5"/>
              <circle cx="91%" cy="25%" r="6" fill="none" stroke="white" strokeWidth="1.5"/>
              <line x1="88%" y1="30%" x2="91%" y2="25%" stroke="white" strokeWidth="1.5"/>
              <circle cx="85%" cy="25%" r="6" fill="none" stroke="white" strokeWidth="1.5"/>
              <line x1="88%" y1="30%" x2="85%" y2="25%" stroke="white" strokeWidth="1.5"/>
              <ellipse cx="20%" cy="88%" rx="40" ry="15" fill="none" stroke="white" strokeWidth="1" transform="rotate(30, 300, 500)"/>
              <ellipse cx="20%" cy="88%" rx="40" ry="15" fill="none" stroke="white" strokeWidth="1" transform="rotate(90, 300, 500)"/>
              <ellipse cx="20%" cy="88%" rx="40" ry="15" fill="none" stroke="white" strokeWidth="1" transform="rotate(150, 300, 500)"/>
              <circle cx="20%" cy="88%" r="5" fill="white" opacity="0.5"/>
            </svg>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.3) 100%)' }} />
          </div>

          {/* 오버레이 */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)', zIndex: 1 }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(230,57,70,0.2)', border: '1px solid rgba(230,57,70,0.5)',
              color: '#ff8080', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.14em', padding: '0.35rem 1rem',
              borderRadius: '50px', marginBottom: '1.5rem', textTransform: 'uppercase'
            }}>서울 강서구 과학 전문학원</div>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '1.2rem' }}>
              내신부터 수능까지<br />
              <span style={{ color: '#e63946' }}>과학, 제대로</span> 잡아드립니다
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem,2vw,1.1rem)', color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', lineHeight: 1.9 }}>
              강의하는 아이들 서울염창캠퍼스에서<br />
              체계적인 커리큘럼과 전문 강사진으로 성적을 올려드립니다.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">무료 상담 신청</Link>
              <Link href="/courses" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>수업 과정 보기</Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          padding: '2.5rem 6%', borderBottom: '1px solid var(--border)',
          gap: '1rem', background: 'white'
        }}>
          {[
            { n: '15+', l: '년간 교육 경험' },
            { n: '97%', l: '학생 재수강률' },
            { n: '1,200+', l: '누적 수강생' },
            { n: '4.9점', l: '평균 만족도' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#e63946', lineHeight: 1, marginBottom: '0.4rem' }}>{s.n}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <section className="section gray">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="sec-label">Quick Menu</div>
            <h2 className="sec-title">무엇을 알고 싶으신가요?</h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { href: '/about',    icon: '🏫', title: '학원 소개',   desc: '강의하는 아이들의 교육 철학과 시설을 소개합니다.' },
              { href: '/courses',  icon: '📚', title: '수업 과정',   desc: '중등·고등·수능 등 다양한 과정을 확인하세요.' },
              { href: '/teachers', icon: '👨‍🏫', title: '강사진',     desc: '과목별 전문 강사진을 소개합니다.' },
              { href: '/results',  icon: '🏆', title: '합격 실적',   desc: '우리 학생들의 빛나는 대입 성과를 확인하세요.' },
              { href: '/notice',   icon: '📋', title: '공지사항',   desc: '학원 소식과 특강 일정을 확인하세요.' },
              { href: '/contact',  icon: '📞', title: '상담 문의',   desc: '입학 상담 및 수업 문의를 받아드립니다.' },
            ].map(m => (
              <Link key={m.href} href={m.href} className="card" style={{ display: 'block' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{m.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{m.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{m.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{
          background: 'linear-gradient(135deg, #111111, #222222)',
          padding: '4rem 6%', textAlign: 'center', color: 'white'
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 900, marginBottom: '1rem' }}>지금 바로 무료 상담 신청하세요</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            전문 강사진이 학생에게 맞는 최적의 과정을 안내해드립니다.
          </p>
          <Link href="/contact" className="btn-primary">상담 신청하기 →</Link>
        </section>

        <Footer />
      </div>
    </>
  )
}
