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
          padding: '4rem 6%', borderBottom: '1px solid var(--border)',
          gap: '1rem', background: 'white'
        }}>
          {[
            { n: '19+', l: '년간 교육 경험' },
            { n: '97%', l: '학생 재수강률' },
            { n: '2,000+', l: '누적 수강생' },
            { n: '4.9점', l: '평균 만족도' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '3rem', fontWeight: 900, color: '#111111', lineHeight: 1, marginBottom: '0.6rem' }}>{s.n}</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{s.l}</div>
            </div>
          ))}
        </div>

       {/* CTA Banner */}
<section style={{
  background: '#f8f9fa',
  padding: '7.5rem 6%', textAlign: 'center',
}}>
  <h2 style={{ fontSize: 'clamp(1.7rem,3.6vw,2.5rem)', fontWeight: 900, color: '#212121', lineHeight: 1.6, marginBottom: '5rem' }}>
    내신 만점에서 수능 1등급까지<br />
    결과로 증명하는 과학 전문 커리큘럼
  </h2>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
    {['중등내신', '특목고 대비', '고등내신', '진로선택과목', '수능', '최상위 입시', '수행평가', '탐구활동 보고서'].map(item => (
      <span key={item} className="cta-chip">{item}</span>
    ))}
  </div>

  <style jsx>{`
    .cta-chip {
      border: 1px solid #999999;
      border-radius: 4px;
      padding: 0.5rem 1.2rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: #555555;
      background: transparent;
      min-width: 120px;
      text-align: center;
      cursor: default;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .cta-chip:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 14px rgba(0,0,0,0.12);
      border-color: #555555;
    }
  `}</style>
</section>

        <Footer />
      </div>
    </>
  )
}
