'use client';

import { Link } from 'react-scroll';

export default function NavLinks() {
  return (
    <nav className="flex justify-start gap-5">
      <Link to="home" smooth={true} duration={500} className="hover:underline cursor-pointer">
        Trang chủ
      </Link>
      <Link to="wifi-socks" smooth={true} duration={500} className="hover:underline cursor-pointer">
        WifiSocks
      </Link>
      <Link to="prices" smooth={true} duration={500} className="hover:underline cursor-pointer">
        Bảng giá
      </Link>
      <Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">
        Liên hệ
      </Link>
      <Link to="faq" smooth={true} duration={500} className="hover:underline cursor-pointer">
        FAQ
      </Link>
    </nav>
  );
}
