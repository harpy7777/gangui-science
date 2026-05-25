import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="f-logo">강의하는 아이들 과학전문학원</div>
      <div className="f-campus" style={{ color: '#9E9E9E', fontSize: '0.72rem', fontWeight: 400 }}>염창캠퍼스</div>
      <div className="f-info">
        서울특별시 강서구 양천로 684 부성빌딩 4층 &nbsp;|&nbsp; 대표전화: 02-3665-9999
      </div>
      <div className="f-copy">© 2026 강의하는 아이들 과수원 염창캠퍼스. All rights reserved.</div>
    </footer>
  )
}
