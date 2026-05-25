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
<p style={{ fontSize: 'clamp(1rem,2vw,1.6rem)', fontWeight: 700, color: '#757575', marginBottom: '1.5rem', lineHeight: 1.8 }}>              정확한 개념, 철저한 분석, 확실한 성적 향상
            </p>
<p style={{ fontSize: 'clamp(1rem,2vw,1.3rem)', fontWeight: 700, color: '#9E9E9E', marginBottom: '1.2rem', lineHeight: 1.8 }}>              결과로 증명하는 과학 교육
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
            { n: '15+', l: '년간 교육 경험' },
            { n: '97%', l: '학생 재수강률' },
            { n: '1,200+', l: '누적 수강생' },
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
