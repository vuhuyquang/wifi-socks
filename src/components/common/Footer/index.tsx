export default function Footer() {
  return (
    <footer className="bg-[#B37422] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Thông tin liên hệ</h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 mb-8">
          <a href="https://t.me/+E24lsyitCaQ5MGI9" className="hover:underline text-lg sm:text-base">Telegram</a>
          <a href="https://www.facebook.com/profile.php?id=61563410258063" className="hover:underline text-lg sm:text-base">Facebook</a>
          <a href="https://www.youtube.com/@wifisocks" className="hover:underline text-lg sm:text-base">Youtube</a>
          <span className="text-lg sm:text-base">Zalo: 0374161784</span>
          <span className="text-lg sm:text-base">Tel: +84374161784</span>
        </div>
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg">
            Keyword: Phần mềm tạo proxy, router phát wifi gán proxy, proxy wifi, gán proxy trên router phát wifi, Chặn tracert
          </p>
        </div>
        <div className="text-center">
          <p className="text-base sm:text-lg">© 2024 All rights reserved wifisocks.com</p>
        </div>
      </div>
    </footer>
  );
}
