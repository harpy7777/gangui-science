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
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 6%', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(230,57,70,0.2)', border: '1px solid rgba(230,57,70,0.4)',
              color: '#ff8080', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.14em', padding: '0.35rem 1rem',
              borderRadius: '50px', marginBottom: '1.5rem', textTransform: 'uppercase'
            }}>서울 강서구 과학 전문학원</div>

            <h1 style={{ fontSize: 'clamp(2rem,5vw,3.6rem)', fontWeight: 900, color: 'white', lineHeight: 1.2, marginBottom: '1.2rem' }}>
              내신부터 수능까지<br />
              <span style={{ color: '#e63946' }}>과학, 제대로</span> 잡아드립니다
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem,2vw,1.1rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.9 }}>
              강의하는 아이들 서울염창캠퍼스에서<br />
              체계적인 커리큘럼과 전문 강사진으로 성적을 올려드립니다.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">무료 상담 신청</Link>
              <Link href="/courses" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.35)' }}>수업 과정 보기</Link>
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
          background: '#ffffff',
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
