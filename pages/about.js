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
          <p style={{ fontSize: '1.6rem', color: '#444444', fontWeight: 500 }}>과학의 본질을 이해하는 수업</p>
        </div>

        {/* 인사말 */}
        <section className="section">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            
            <p className="sec-desc" style={{ margin: '0 auto 2rem' }}>
              결국 성적은, 얼마나 깊이 이해했는가에서 결정됩니다.<br /><br /><br />
              강의하는 아이들은 과학을 '외우는 과목'이 아닌 '이해하는 과목'으로 바꾸는 공간입니다.<br /><br /><br />
              체계적인 커리큘럼, 과목별 전문 강사진, 학생 개개인에 대한 밀도 높은 관리<br /><br /><br />
              그 결과로 내신과 수능 모두에서 흔들리지 않는 실력을 완성합니다.<br /><br /><br />
            
            </p>
         <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333333', lineHeight: 1.9, marginTop: '1rem' }}>
  내신부터 수능까지 결과로 증명하는 과학 교육<br /><br />
</p>
          </div>
        </section>
{/* 학습 관리 시스템 */}
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
        {/* 특징 */}
        <section className="section gray">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="sec-label">Why Us</div>
            <h2 className="sec-title">왜 강의하는 아이들인가요?</h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { icon: '📚', title: '체계적인 커리큘럼', desc: '내신과 수능을 동시에 대비하는 과학 전문 커리큘럼. 단기간에 성적을 올릴 수 있는 검증된 학습 방법을 제공합니다.' },
              { icon: '👨‍🏫', title: '과목별 전문 강사진', desc: '물리·화학·생명과학·지구과학 각 과목의 최고 전문가들이 직접 강의합니다. 모든 강사진은 엄격한 기준으로 선발됩니다.' },
              { icon: '📊', title: '개별 성적 관리', desc: '학생 한 명 한 명의 약점을 파악하고 맞춤 피드백을 제공합니다. 정기적인 성적 분석으로 학습 방향을 제시합니다.' },
              { icon: '🧪', title: '실험·실습 중심', desc: '개념 이해를 돕는 다양한 실험과 실습 수업으로 과학적 사고력을 키웁니다.' },
              { icon: '📝', title: '자체 제작 교재', desc: '최신 출제 경향을 반영한 자체 제작 교재와 문제집으로 효율적인 학습이 가능합니다.' },
              { icon: '💬', title: '학부모 소통', desc: '정기적인 학부모 상담과 성적 리포트로 학생의 학습 상황을 투명하게 공유합니다.' },
            ].map(f => (
              <div key={f.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
