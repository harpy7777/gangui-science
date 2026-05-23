import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const results = [
  { univ: '서울대학교', dept: '자연과학대학', name: '합격자 이름', year: '2025' },
  { univ: '연세대학교', dept: '의과대학', name: '합격자 이름', year: '2025' },
  { univ: '고려대학교', dept: '이과대학', name: '합격자 이름', year: '2025' },
  { univ: '성균관대학교', dept: '약학대학', name: '합격자 이름', year: '2025' },
  { univ: '한양대학교', dept: '의과대학', name: '합격자 이름', year: '2025' },
  { univ: '중앙대학교', dept: '의과대학', name: '합격자 이름', year: '2025' },
  { univ: '이화여자대학교', dept: '약학대학', name: '합격자 이름', year: '2024' },
  { univ: '경희대학교', dept: '한의과대학', name: '합격자 이름', year: '2024' },
  { univ: '부산대학교', dept: '의과대학', name: '합격자 이름', year: '2024' },
]

export default function Results() {
  const years = [...new Set(results.map(r => r.year))].sort((a, b) => b - a)

  return (
    <>
      <Head><title>합격 실적 | 강의하는 아이들 서울염창캠퍼스</title></Head>
      <Navbar />
      <div className="page-wrap">

        <div className="page-hero">
          <div className="tag">Results</div>
          <h1>합격 실적</h1>
          <p>체계적인 교육으로 이뤄낸 우수한 대입 성과</p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          padding: '2.5rem 6%', background: 'white',
          borderBottom: '1px solid var(--border)', gap: '1rem'
        }}>
          {[
            { n: '97%', l: '재수강률' },
            { n: '4.9점', l: '평균 만족도 (5점 만점)' },
            { n: '15년+', l: '교육 경험' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#e63946', lineHeight: 1, marginBottom: '0.4rem' }}>{s.n}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* 연도별 합격 */}
        {years.map(year => (
          <section key={year} className={year === years[0] ? 'section' : 'section gray'}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="sec-label">Admission Results</div>
              <h2 className="sec-title">{year}학년도 합격 현황</h2>
              <div className="grid-3" style={{ marginTop: '2rem' }}>
                {results.filter(r => r.year === year).map((r, i) => (
                  <div key={i} style={{
                    background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
                    borderRadius: '12px', padding: '1.8rem', color: 'white'
                  }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900, marginBottom: '0.4rem' }}>{r.univ}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', marginBottom: '1rem' }}>{r.dept}</div>
                    <div style={{ fontSize: '0.82rem', color: '#e63946', fontWeight: 600 }}>{r.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--muted)', padding: '1rem 0 2rem' }}>
          * 합격자 동의 하에 게시됩니다. 실제 합격자 정보로 교체해 주세요.
        </p>

        {/* CTA */}
        <section style={{ background: 'var(--accent)', padding: '3rem 6%', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>다음 합격자는 우리 학생입니다</h2>
          <Link href="/contact" style={{
            display: 'inline-block', background: 'white', color: 'var(--accent)',
            padding: '0.85rem 2.2rem', borderRadius: '6px', fontWeight: 700
          }}>무료 상담 신청 →</Link>
        </section>

        <Footer />
      </div>
    </>
  )
}
