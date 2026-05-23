import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const courses = [
  {
    level: '중학교 과정',
    title: '중등 내신 완성반',
    target: '중학교 1~3학년',
    schedule: '주 1회 (3시간)',
    desc: '중학교 과학 개념을 완벽히 다지고 고등 과정을 선행합니다. 시험 출제 패턴 분석으로 내신 최고점을 목표합니다.',
    items: ['중등과정 핵심 개념 정리', '학교별 내신 대비', '고등 과학 선행 입문', '실험·실습 중심 수업'],
    color: '#457b9d',
  },
  {
    level: '고등학교 과정',
    title: '고등 내신 집중반',
    target: '고등학교 1~3학년',
    schedule: '주 1회 (3시간)',
    desc: '통합과학·물리·화학·생명과학·지구과학 내신 완벽 대비. 학교별 맞춤 수업으로 1등급을 목표합니다.',
    items: ['학교별 내신 완벽 대비', '단원별 핵심 개념 정리', '신화 문제 해결 전략', '실험 실습 수업'],
    color: '#e63946',
  },
  {
    level: '수능 대비',
    title: '수능 과학탐구반',
    target: '고등학교 2~3학년',
    schedule: '주 2회',
    desc: '수능 과학탐구 1등급을 위한 심화 학습. 기출 분석과 실전 모의고사로 수능 완벽 대비합니다.',
    items: ['최근 5개년 기출 완전 분석', '실전 모의고사 정기 실시', '취약 단원 집중 공략', '수능 전략 수립'],
    color: '#1a1a2e',
  },
  {
    level: '선행 과정',
    title: '고등 과학 선행반',
    target: '중학교 2~3학년',
    schedule: '주 1회 (3시간)',
    desc: '중학생을 위한 고등 과학 선행 과정. 일찍 시작할수록 유리한 고등 과학을 미리 준비합니다.',
    items: ['고등 통합과학 선행', '물리/화학 기초 다지기', '개념 중심 이해 학습', '고등 진학 준비'],
    color: '#457b9d',
  },
  {
    level: '특별 과정',
    title: '의치한약수 집중반',
    target: '고등학교 1~3학년',
    schedule: '주 2~3회 (소수 정예)',
    desc: '의예·치의예·한의예·약학·수의예 계열 진학을 목표로 하는 최상위권 집중 심화 과정입니다.',
    items: ['최상위권 심화 문제 풀이', '의치한약수 기출 분석', '소수 정예 집중 관리', '논술·면접 대비'],
    color: '#e63946',
  },
  {
    level: '1:1 과외',
    title: '개인 맞춤 수업',
    target: '전 학년',
    schedule: '시간 협의',
    desc: '학생의 수준과 목표에 완벽히 맞춘 1대1 개인 과외. 가장 빠른 성적 향상을 원하는 학생에게 추천합니다.',
    items: ['완전 맞춤형 커리큘럼', '원하는 시간 자유 조율', '약점 집중 보완', '빠른 성적 향상'],
    color: '#1a1a2e',
  },
]

export default function Courses() {
  return (
    <>
      <Head><title>수업 과정 | 강의하는 아이들 서울염창캠퍼스</title></Head>
      <Navbar />
      <div className="page-wrap">

        <div className="page-hero">
          <div className="tag">Courses</div>
          <h1>수업 과정 안내</h1>
          <p>학년과 목표에 맞는 최적의 과정을 선택하세요</p>
        </div>

        <section className="section">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="grid-3">
              {courses.map(c => (
                <div key={c.title} className="card">
                  <div style={{
                    display: 'inline-block',
                    background: c.color, color: 'white',
                    fontSize: '0.72rem', fontWeight: 700,
                    padding: '0.22rem 0.7rem', borderRadius: '4px',
                    marginBottom: '1rem', letterSpacing: '0.05em'
                  }}>{c.level}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '0.4rem' }}>{c.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.8rem' }}>
                    {c.target} &nbsp;|&nbsp; {c.schedule}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.2rem' }}>{c.desc}</p>
                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {c.items.map(item => (
                      <li key={item} style={{ fontSize: '0.83rem', color: 'var(--text)', lineHeight: 1.6 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 수강료 안내 */}
        <section className="section gray">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div className="sec-label">Tuition</div>
            <h2 className="sec-title">수강료 안내</h2>
            <p className="sec-desc" style={{ margin: '0 auto 2rem' }}>
              수강료는 과정별, 학년별로 상이합니다.<br />
              정확한 금액은 상담 후 안내드립니다.
            </p>
            <Link href="/contact" className="btn-primary">수강료 문의하기</Link>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--accent)', padding: '3rem 6%', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>어떤 과정이 맞는지 모르겠다면?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>전문 강사가 학생 수준에 맞는 과정을 추천해드립니다.</p>
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
