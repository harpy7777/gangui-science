import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head><title>학원 소개 | 강의하는 아이들 서울염창캠퍼스</title></Head>
      <Navbar />
      <div className="page-wrap">

        <div className="page-hero" style={{ background: '#f8f9fa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#555555', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>About Us</span>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
          </div>
          <p style={{ fontSize: '2.4rem', color: '#444444', fontWeight: 600 }}>과학의 본질을 이해하는 수업</p><br /><div className="sec-label" style={{ color: '#9E9E9E' }}>Understanding the Essence of Science</div>
        </div>

        {/* 인사말 */}
        <section className="section" style={{
          position: 'relative',
          backgroundImage: 'url(/about-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.88)' }} />
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
           <p className="sec-desc" style={{ margin: '0 auto 2rem', fontSize: '1.2rem', lineHeight: 2 }}>
              결국 성적은, 얼마나 깊이 이해했는가에서 결정됩니다.<br /><br />
              강의하는 아이들은 과학을 '외우는 과목'이 아닌 '이해하는 과목'으로 바꾸는 공간입니다.<br /><br />
              체계적인 커리큘럼, 과목별 전문 강사진, 학생 개개인에 대한 밀도 높은 관리<br /><br />
              그 결과로 내신과 수능 모두에서 흔들리지 않는 실력을 완성합니다.<br /><br /><br />
            </p>
            <p style={{ fontSize: '2.4rem', fontWeight: 600, color: '#333333', lineHeight: 1.9, marginTop: '1rem' }}>
              내신부터 수능까지 결과로 증명하는 과학 교육<br /><br />
            </p>
          </div>
        </section>

        {/* 학습 관리 시스템 */}
        <section className="section gray">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="sec-title">학습 관리 시스템</h2>
            <div className="sec-label" style={{ color: '#9E9E9E' }}>Learning Management System<br /></div>
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

          {/* 6가지 방법 */}
         <div style={{ textAlign: 'center', marginTop: '8rem', marginBottom: '3rem' }}>
            <h2 className="sec-title">6가지 관리 시스템</h2>
            <div className="sec-label" style={{ color: '#9E9E9E' }}>6 Management Systems for Student Retention<br /></div>
          </div>
          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2a4.5 4.5 0 0 0-4.5 4.5c0 1.4.6 2.6 1.5 3.5.6.6 1 1.4 1 2.3V14h4v-1.7c0-.9.4-1.7 1-2.3.9-.9 1.5-2.1 1.5-3.5A4.5 4.5 0 0 0 9.5 2z"/><line x1="7.5" y1="18" x2="11.5" y2="18"/><line x1="8" y1="21" x2="11" y2="21"/>
                  </svg>
                ),
                sub: 'STEP 01',
                title: '개별 학습 데이터 관리',
                desc: '문제 풀이 및 학습 데이터를 기반으로\n학생별 취약 단원을\n정밀 분석·관리합니다.'
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-6.4 2.6"/><polyline points="3 4 3 8 7 8"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="12" x2="15" y2="14"/>
                  </svg>
                ),
                sub: 'STEP 02',
                title: '반복 학습',
                desc: '출결부터 취약 단원까지\n한눈에 보이는 자동화 리포트로\n제공합니다.'
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="12" x2="13" y2="12"/>
                  </svg>
                ),
                sub: 'STEP 03',
                title: '맞춤 문제 자동 구성',
                desc: '학교별 출제 경향과\n학생 맞춤형 난이도를 반영하여\n취약 유형과 오답을 집중 훈련합니다.'
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                ),
                sub: 'STEP 04',
                title: '수행·탐구 관리',
                desc: '학종 대비를 위해\n수행평가와 탐구 활동을\n과정 중심으로 체계적으로 관리합니다.'
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="9" y1="18" x2="13" y2="18"/><circle cx="11" cy="11.5" r="0.6" fill="#9E9E9E"/>
                  </svg>
                ),
                sub: 'STEP 05',
                title: '누적 성장 추적',
                desc: '성적 변화의 과정을\n그래프로 한눈에 확인할 수 있습니다.'
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                sub: 'STEP 06',
                title: '관리 자동화',
                desc: '과제 및 오답 자동 추적으로\n완벽한 관리 구조를 만듭니다.'
              },
            ].map(m => (
              <div key={m.title} className="card" style={{ display: 'block', textAlign: 'center', padding: '2.5rem 1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>{m.icon}</div>
                <div style={{ fontSize: '0.82rem', color: '#9E9E9E', fontWeight: 500, marginBottom: '0.3rem' }}>{m.sub}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.7rem', color: '#222222' }}>{m.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{m.desc}</p>
              </div>
            ))}
          </div>

          {/* 데이터 관리형 학원 소개 (세로 카드 3개) */}
          <div style={{ maxWidth: '900px', margin: '8rem auto 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* 01 */}
            <div className="card" style={{ padding: '2.4rem 2.6rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, height: '1px', background: '#e5e5e5' }} />
                <span style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #9E9E9E', color: '#9E9E9E', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>01</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9E9E9E', letterSpacing: '0.12em', marginLeft: '0.5rem' }}>WHAT WE DO</span>
                <div style={{ flex: 1, height: '1px', background: '#e5e5e5' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222222', lineHeight: 1.6, marginBottom: '0.9rem' }}>
                과학을 잘 가르치는 곳을 넘어, 데이터로 관리하는 학원입니다.
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, margin: 0 }}>
                학생의 학습 과정이 기록되고, 분석되며, 누적으로 관리됩니다.<br />
                점수 하나가 아니라 성장의 흐름 전체를 들여다봅니다.
              </p>
            </div>

            {/* 02 */}
            <div className="card" style={{ padding: '2.4rem 2.6rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, height: '1px', background: '#e5e5e5' }} />
                <span style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #9E9E9E', color: '#9E9E9E', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>02</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9E9E9E', letterSpacing: '0.12em', marginLeft: '0.5rem' }}>WHY IT MATTERS</span>
                <div style={{ flex: 1, height: '1px', background: '#e5e5e5' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222222', lineHeight: 1.6, marginBottom: '0.9rem' }}>
                자동화의 진짜 목적은 수업 집중입니다.
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, margin: 0 }}>
                반복되는 행정 업무를 시스템이 떠맡는 동안, 선생님은 학생 지도에 더 많은 시간을 씁니다.<br />
                그 결과는 개별 피드백의 밀도로 돌아옵니다.
              </p>
            </div>

            {/* 03 */}
            <div className="card" style={{ padding: '2.4rem 2.6rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, height: '1px', background: '#e5e5e5' }} />
                <span style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #9E9E9E', color: '#9E9E9E', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>03</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9E9E9E', letterSpacing: '0.12em', marginLeft: '0.5rem' }}>OUR POSITION</span>
                <div style={{ flex: 1, height: '1px', background: '#e5e5e5' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222222', lineHeight: 1.6, marginBottom: '0.9rem' }}>
                과학 + 데이터 관리 + 입시 전략 + 개별 추적
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, margin: 0 }}>
                단순히 잘 가르치는 학원에서 멈추지 않습니다.<br />
                학습의 시작부터 결과까지, 데이터로 이어지는 한 흐름으로 우리 아이를 책임집니다.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
