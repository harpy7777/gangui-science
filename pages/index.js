import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head><title>강의하는 아이들 과학전문학원</title></Head>
      <Navbar />
      <div className="page-wrap">

        {/* Hero */}
        <section style={{
          minHeight: '67vh',
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 6%',
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(1px)', background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 900, color: '#222222', lineHeight: 1.2, marginBottom: '1.7rem' }}>
              Think Science Achieve More
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.6rem)', fontWeight: 700, color: '#757575', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              정확한 개념, 철저한 분석, 확실한 성적 향상
            </p>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.3rem)', fontWeight: 700, color: '#9E9E9E', marginBottom: '1.2rem', lineHeight: 1.8 }}>
              결과로 증명하는 과학 교육
            </p>
          </div>
        </section>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          padding: '2.5rem 6%', borderBottom: '1px solid var(--border)',
          gap: '1rem', background: 'white'
        }}>
          {[
            { n: '19+', l: '년간 교육 경험' },
            { n: '97%', l: '학생 재수강률' },
            { n: '2,000+', l: '누적 수강생' },
            { n: '4.9점', l: '평균 만족도' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#111111', lineHeight: 1, marginBottom: '0.4rem' }}>{s.n}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <section className="section gray">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="sec-title">학습 관리 시스템</h2>
            <div className="sec-label" style={{ color: '#9E9E9E' }}>Learning Management System</div>
          </div>
          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                href: '/about',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                    <circle cx="9" cy="9" r="1.5"/><line x1="13" y1="8" x2="18" y2="8"/><line x1="13" y1="11" x2="16" y2="11"/>
                  </svg>
                ),
                sub: '소수정예',
                title: '맞춤 수업',
                desc: '학생 개개인의 수준에 맞춘 소수정예\n맞춤형 수업을 진행합니다.'
              },
              {
                href: '/courses',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                    <line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>
                    <path d="M12 13l1.5 2 2.5-3" stroke="#9E9E9E" strokeWidth="1.2"/>
                  </svg>
                ),
                sub: '체계적인',
                title: '학습 관리',
                desc: '단계별 커리큘럼과 철저한 복습 관리로\n빠짐없이 학습합니다.'
              },
              {
                href: '/results',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="17" x2="7" y2="13"/><line x1="12" y1="17" x2="12" y2="9"/><line x1="17" y1="17" x2="17" y2="5"/>
                    <circle cx="17" cy="5" r="1.5" fill="#9E9E9E"/><polyline points="7 13 12 9 17 5"/>
                  </svg>
                ),
                sub: '성적 관리',
                title: '분석 시스템',
                desc: '정기적인 성적 분석과 피드백으로\n취약점을 정확히 파악합니다.'
              },
            ].map(m => (
              <Link key={m.href} href={m.href} className="card" style={{ display: 'block', textAlign: 'center', padding: '2.5rem 1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>{m.icon}</div>
                <div style={{ fontSize: '0.82rem', color: '#9E9E9E', fontWeight: 500, marginBottom: '0.3rem' }}>{m.sub}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.7rem', color: '#222222' }}>{m.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{m.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{
          background: '#FFFFFF',
          padding: '4rem 6%', textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 'clamp(1.3rem,3vw,1.9rem)', fontWeight: 900, color: '#212121', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            내신 만점에서 수능 1등급까지<br />
            결과로 증명하는 과학 전문 커리큘럼
          </h2>
          <p style={{ fontSize: 'clamp(0.8rem,1.5vw,0.95rem)', color: '#666666', lineHeight: 2, fontWeight: 700 }}>
            중등내신 / 특목고 대비 / 고등내신 / 진로선택과목 / 수능 / 최상위 입시 / 수행평가 / 탐구활동 보고서
          </p>
        </section>

        <Footer />
      </div>
    </>
  )
}
