import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', grade: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // 실제 배포 시 이메일/DB 연동 필요
    setSent(true)
  }

  return (
    <>
      <Head><title>상담 문의 | 강의하는 아이들 서울염창캠퍼스</title></Head>
      <Navbar />
      <div className="page-wrap">

        <div className="page-hero" style={{ background: '#f8f9fa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#555555', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Contact Us</span>
            <div style={{ flex: 1, height: '1px', background: '#999999' }} />
          </div>
          <p style={{ fontSize: '2.4rem', color: '#444444', fontWeight: 600 }}>상담 문의</p><br /><div className="sec-label" style={{ color: '#9E9E9E' }}>Consultation Inquiry</div>
        </div>

        <section className="section">
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* 연락처 정보 */}
            <div>
              <div className="sec-label">Information</div>
              <h2 className="sec-title">오시는 길</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                {[
                  { icon: '📍', label: '주소', value: '서울특별시 강서구 양천로 684\n부성빌딩 4층' },
                  { icon: '📞', label: '전화', value: '02-3665-9999' },
                  { icon: '🕐', label: '상담 시간', value: '평일 14:00 ~ 21:00\n토요일 10:00 ~ 18:00\n(일요일 휴무)' },
                  { icon: '🚇', label: '대중교통', value: '지하철 9호선 염창역 도보 5분' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '44px', height: '44px', background: 'var(--primary)',
                      borderRadius: '10px', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0
                    }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>{c.label}</div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--text)', fontWeight: 500, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 지도 placeholder */}
              <div style={{
                marginTop: '2rem', background: '#f1f3f5',
                border: '2px dashed var(--border)', borderRadius: '12px',
                height: '200px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexDirection: 'column', gap: '0.6rem',
                color: 'var(--muted)', fontSize: '0.85rem'
              }}>
                <div style={{ fontSize: '2rem' }}>🗺️</div>
                <div>카카오맵 / 네이버맵 삽입 위치</div>
              </div>
            </div>

            {/* 상담 신청 폼 */}
            <div>
              <div className="sec-label">Inquiry</div>
              <h2 className="sec-title">상담 신청</h2>

              {sent ? (
                <div style={{
                  marginTop: '1.5rem', background: '#e8f5e9', border: '1px solid #a5d6a7',
                  borderRadius: '12px', padding: '2rem', textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#2e7d32' }}>상담 신청이 완료되었습니다!</h3>
                  <p style={{ fontSize: '0.88rem', color: '#388e3c', lineHeight: 1.7 }}>
                    빠른 시간 내에 연락드리겠습니다.<br />
                    급하신 경우 전화(02-3665-9999)로 연락해 주세요.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { key: 'name', label: '이름 *', type: 'text', placeholder: '학생 이름을 입력해 주세요' },
                    { key: 'phone', label: '연락처 *', type: 'tel', placeholder: '010-0000-0000' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text)' }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        required
                        style={{
                          width: '100%', padding: '0.7rem 1rem',
                          border: '1px solid var(--border)', borderRadius: '8px',
                          fontSize: '0.9rem', fontFamily: 'inherit',
                          outline: 'none', transition: 'border 0.2s', background: 'white'
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.4rem' }}>학년</label>
                    <select
                      value={form.grade}
                      onChange={e => setForm({ ...form, grade: e.target.value })}
                      style={{
                        width: '100%', padding: '0.7rem 1rem',
                        border: '1px solid var(--border)', borderRadius: '8px',
                        fontSize: '0.9rem', fontFamily: 'inherit',
                        background: 'white', outline: 'none'
                      }}
                    >
                      <option value="">학년 선택</option>
                      {['중1','중2','중3','고1','고2','고3','기타'].map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.4rem' }}>문의 내용</label>
                    <textarea
                      placeholder="궁금한 점이나 상담 원하는 내용을 자유롭게 적어주세요."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      style={{
                        width: '100%', padding: '0.7rem 1rem',
                        border: '1px solid var(--border)', borderRadius: '8px',
                        fontSize: '0.9rem', fontFamily: 'inherit',
                        resize: 'vertical', outline: 'none', background: 'white'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    상담 신청하기
                  </button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>
                    입력하신 정보는 상담 목적으로만 사용됩니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
