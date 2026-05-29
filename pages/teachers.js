import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const teachers = [
  { photo: '/teacher1.jpg', name: '강사 이름', subject: '물리', career: ['경력 및 학력을 여기에 입력해 주세요'] },
  { photo: '/teacher2.jpg', name: '김인후 선생님', subject: '통합과학, 화학 전문', career: ['경력 및 학력을 여기에 입력해 주세요'] },
  { photo: '/teacher3.jpg', name: '강사 이름', subject: '생명과학', career: ['경력 및 학력을 여기에 입력해 주세요'] },
  { photo: '/teacher4.jpg', name: '강사 이름', subject: '지구과학', career: ['경력 및 학력을 여기에 입력해 주세요'] },
]

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
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {teachers.map(t => (
              <div key={t.name + t.subject} className="teacher-row">
                <div className="teacher-photo">
                  <img src={t.photo} alt={t.name} />
                </div>
                <div className="teacher-info">
                  <span className="teacher-subject">{t.subject}</span>
                  <h3 className="teacher-name">{t.name}</h3>
                  <div className="teacher-career">
                    {t.career.map(c => (
                      <p key={c}>{c}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .teacher-row {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          padding: 2rem 2.5rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .teacher-row:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.10);
          border-color: #bdbdbd;
        }
        .teacher-photo {
          flex-shrink: 0;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          overflow: hidden;
          background: #e5e5e5;
        }
        .teacher-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .teacher-info {
          flex: 1;
          text-align: left;
        }
        .teacher-subject {
          display: inline-block;
          background: #757575;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.8rem;
          border-radius: 50px;
          margin-bottom: 0.7rem;
          letter-spacing: 0.05em;
        }
        .teacher-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #222222;
          margin: 0 0 0.7rem;
        }
        .teacher-career p {
          font-size: 0.92rem;
          color: #666666;
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 600px) {
          .teacher-row {
            flex-direction: column;
            text-align: center;
            gap: 1.2rem;
          }
          .teacher-info { text-align: center; }
        }
      `}</style>
    </>
  )
}
