import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const teachers = [
  { emoji: '👨‍🏫', name: '강사 이름', subject: '물리', career: ['경력 및 학력을', '여기에 입력해 주세요'] },
  { emoji: '👨‍🔬', name: '강사 이름', subject: '화학', career: ['경력 및 학력을', '여기에 입력해 주세요'] },
  { emoji: '👩‍🏫', name: '강사 이름', subject: '생명과학', career: ['경력 및 학력을', '여기에 입력해 주세요'] },
  { emoji: '🧑‍🔬', name: '강사 이름', subject: '지구과학', career: ['경력 및 학력을', '여기에 입력해 주세요'] },
]

const subjectColors = {
  '물리': '#1a1a2e',
  '화학': '#e63946',
  '생명과학': '#457b9d',
  '지구과학': '#2d6a4f',
}

export default function Teachers() {
  return (
    <>
      <Head><title>강사진 | 강의하는 아이들 서울염창캠퍼스</title></Head>
      <Navbar />
      <div className="page-wrap">

        <div className="page-hero" style={{ background: '#f8f9fa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#555555', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Instructors</span>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
          </div>
          <p style={{ fontSize: '2.4rem', color: '#444444', fontWeight: 600 }}>과학 전문 강사진</p><br /><div className="sec-label" style={{ color: '#9E9E9E' }}>Science Admissions</div>
        </div>

        <section className="section">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid-4">
              {teachers.map(t => (
                <div key={t.name + t.subject} className="card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px', height: '80px',
                    background: `linear-gradient(135deg, #1a1a2e, ${subjectColors[t.subject] || '#457b9d'})`,
                    borderRadius: '50%', margin: '0 auto 1.2rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem'
                  }}>{t.emoji}</div>
                  <div style={{
                    display: 'inline-block',
                    background: subjectColors[t.subject] || '#457b9d',
                    color: 'white', fontSize: '0.72rem', fontWeight: 700,
                    padding: '0.2rem 0.7rem', borderRadius: '50px', marginBottom: '0.6rem'
                  }}>{t.subject}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem' }}>{t.name}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {t.career.map(c => (
                      <p key={c} style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{c}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 강사 채용 */}
        <section className="section gray">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div className="sec-label">Recruit</div>
            <h2 className="sec-title">강사 채용</h2>
            <p className="sec-desc" style={{ margin: '0 auto 2rem' }}>
              열정 있는 과학 강사를 모집합니다.<br />
              관심 있으신 분은 아래 연락처로 문의해 주세요.
            </p>
            <Link href="/contact" className="btn-primary">채용 문의하기</Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
