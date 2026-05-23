import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="f-logo">강의하는 아이들</div>
      <div className="f-campus">서울 염창캠퍼스</div>
      <div className="f-info">
        서울특별시 강서구 양천로 684 부성빌딩 4층 &nbsp;|&nbsp; 대표전화: 02-3665-9999<br />
        사업자등록번호: 000-00-00000
      </div>
      <div className="f-links">
        <Link href="/about">학원 소개</Link>
        <Link href="/courses">수업 과정</Link>
        <Link href="/teachers">강사진</Link>
        <Link href="/results">합격 실적</Link>
        <Link href="/notice">공지사항</Link>
        <Link href="/contact">상담 문의</Link>
      </div>
      <div className="f-copy">© 2025 강의하는 아이들 서울염창캠퍼스. All rights reserved.</div>
    </footer>
  )
}
