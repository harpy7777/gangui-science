import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const notices = [
  { id: 1, type: '공지', title: '2025년 2학기 수강생 모집 안내', date: '2025.08.01', content: '2025년 2학기 수강생을 모집합니다. 중등·고등·수능반 모두 모집 중이며, 선착순 마감됩니다. 빠른 상담을 권장드립니다.' },
  { id: 2, type: '공지', title: '여름방학 특강 일정 안내', date: '2025.07.15', content: '여름방학 특강이 7월 28일부터 8월 22일까지 진행됩니다. 집중 내신 대비반과 수능 선행반으로 운영됩니다.' },
  { id: 3, type: '일반', title: '2025학년도 수능 과학탐구 분석 설명회 개최', date: '2025.06.20', content: '6월 22일(일) 오후 2시, 강의실에서 수능 과학탐구 출제 경향 분석 설명회를 개최합니다. 학부모님과 학생 모두 참석 가능합니다.' },
  { id: 4, type: '일반', title: '6월 모의고사 성적 분석 및 피드백 일정', date: '2025.06.10', content: '6월 모의고사 성적 분석 및 개인별 피드백은 6월 12일~14일 사이에 진행됩니다. 수업 전후로 담당 강사에게 문의해 주세요.' },
  { id: 5, type: '일반', title: '원장 상담 가능 시간 안내 (예약 필수)', date: '2025.05.01', content: '원장 상담은 매주 화·목 오후 4시~6시에 가능합니다. 사전 예약 후 방문해 주세요. 전화(02-3665-9999) 또는 문자로 예약하실 수 있습니다.' },
]

export default function Notice() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Head><title>공지사항 | 강의하는 아이들 서울염창캠퍼스</title></Head>
      <Navbar />
      <div className="page-wrap">

        <div className="page-hero" style={{ background: '#f8f9fa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#555555', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Notice</span>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
          </div>
          <p style={{ fontSize: '2.4rem', color: '#444444', fontWeight: 600 }}>공지사항</p><br /><div className="sec-label" style={{ color: '#9E9E9E' }}>Notices &amp; Information</div>
        </div>

        <section className="section">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            {selected ? (
              /* 상세 보기 */
              <div>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '2rem',
                    fontFamily: 'inherit', padding: 0
                  }}
                >
                  ← 목록으로
                </button>
                <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--bg2)', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.8rem' }}>
                      <span style={{
                        background: selected.type === '공지' ? 'var(--accent)' : 'var(--bg2)',
                        color: selected.type === '공지' ? 'white' : 'var(--muted)',
                        border: selected.type !== '공지' ? '1px solid var(--border)' : 'none',
                        fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px'
                      }}>{selected.type}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{selected.date}</span>
                    </div>
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{selected.title}</h2>
                  </div>
                  <div style={{ padding: '2rem', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text)' }}>
                    {selected.content}
                  </div>
                </div>
              </div>
            ) : (
              /* 목록 */
              <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: 'var(--bg2)', padding: '0.9rem 1.5rem', borderBottom: '2px solid var(--primary)', display: 'grid', gridTemplateColumns: '60px 1fr 90px', gap: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)' }}>구분</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)' }}>제목</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textAlign: 'right' }}>날짜</span>
                </div>
                {notices.map((n, i) => (
                  <div
                    key={n.id}
                    onClick={() => setSelected(n)}
                    style={{
                      display: 'grid', gridTemplateColumns: '60px 1fr 90px', gap: '1rem',
                      padding: '1rem 1.5rem', alignItems: 'center',
                      borderBottom: i < notices.length - 1 ? '1px solid var(--border)' : 'none',
                      cursor: 'pointer', transition: 'background 0.15s',
                      background: 'white'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}
                  >
                    <span style={{
                      display: 'inline-block',
                      background: n.type === '공지' ? 'var(--accent)' : 'var(--bg2)',
                      color: n.type === '공지' ? 'white' : 'var(--muted)',
                      border: n.type !== '공지' ? '1px solid var(--border)' : 'none',
                      fontSize: '0.7rem', fontWeight: 700,
                      padding: '0.18rem 0.55rem', borderRadius: '3px', textAlign: 'center'
                    }}>{n.type}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{n.title}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'right' }}>{n.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
