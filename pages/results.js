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

        <div className="page-hero" style={{ background: '#f8f9fa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#555555', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Admissions Results</span>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
          </div>
          <p style={{ fontSize: '2.4rem', color: '#444444', fontWeight: 600 }}>대학 입시 실적</p><br /><div className="sec-label" style={{ color: '#9E9E9E' }}>University Admissions Results</div>
        </div>

        {/* 강조 문구 */}
        <div style={{
          padding: '5rem 6%', background: 'white', textAlign: 'center',
          borderBottom: '1px solid var(--border)'
        }}>
          <h2 style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', fontWeight: 900, color: '#212121', lineHeight: 1.4 }}>
            결과로 증명된 입시 경쟁력
          </h2>
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

        <Footer />
      </div>
    </>
  )
}
