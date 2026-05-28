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

      <div className="page-hero" style={{
  backgroundImage: 'url(/about-hero.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
}}>
  <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)' }} />
  <div style={{ position: 'relative', zIndex: 1 }}>
 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
  <div style={{ flex: 1, height: '1px', background: '#999999' }} />
  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#555555', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>About Us</span>
  <div style={{ flex: 1, height: '1px', background: '#999999' }} />
</div>
    <h1>학원 소개</h1>
    <p>강의하는 아이들 서울염창캠퍼스를 소개합니다</p>
  </div>
</div>

        {/* 인사말 */}
        <section className="section">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="sec-label">원장 인사말</div>
            <h2 className="sec-title">과학의 즐거움을 성적 향상으로</h2>
            <p className="sec-desc" style={{ margin: '0 auto 2rem' }}>
              안녕하세요. 강의하는 아이들 서울염창캠퍼스 원장입니다.<br /><br />
              저희 학원은 단순한 문제 풀이가 아닌, 과학의 원리를 깊이 이해하고
              스스로 사고하는 힘을 키우는 것을 목표로 합니다.
              체계적인 커리큘럼과 과목별 전문 강사진으로 학생 개개인의 성적 향상을 이끌어냅니다.
            </p>
            <div style={{ background: 'var(--bg2)', borderRadius: '12px', padding: '2rem', borderLeft: '4px solid var(--accent)' }}>
              <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--primary)', lineHeight: 1.9 }}>
                "내신부터 수능까지, 과학의 모든 길을 함께 설계합니다."
              </p>
            </div>
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

        {/* 학원 정보 */}
        <section className="section">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="sec-label">Information</div>
            <h2 className="sec-title">학원 정보</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginTop: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
              {[
                { label: '학원명',     value: '강의하는 아이들 서울염창캠퍼스' },
                { label: '주소',      value: '서울특별시 강서구 양천로 684 부성빌딩 4층' },
                { label: '대표전화',   value: '02-3665-9999' },
                { label: '상담 시간',  value: '평일 14:00 ~ 21:00 / 토요일 10:00 ~ 18:00 (일요일 휴무)' },
                { label: '교통',      value: '지하철 9호선 염창역 도보 5분' },
              ].map((r, i) => (
                <div key={r.label} style={{
                  display: 'grid', gridTemplateColumns: '140px 1fr',
                  background: i % 2 === 0 ? 'var(--bg2)' : 'white',
                  padding: '1rem 1.5rem', gap: '1rem', alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--muted)' }}>{r.label}</span>
                  <span style={{ fontSize: '0.9rem' }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--accent)', padding: '3rem 6%', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>지금 바로 상담 신청하세요</h2>
          <Link href="/contact" style={{
            display: 'inline-block', background: 'white', color: 'var(--accent)',
            padding: '0.85rem 2.2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem'
          }}>무료 상담 신청 →</Link>
        </section>

        <Footer />
      </div>
    </>
  )
}
