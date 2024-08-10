import Image from 'next/image';

export default function Service() {
  return (
    <>
    <div className='container px-4 mx-auto'>
      <section className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#333] mb-4 sm:mb-6">
            Công nghệ độc quyền
          </h2>
          <p className="text-sm sm:text-base text-[#555] leading-relaxed">
            WifiSocks biến chiếc router wifi thành một nơi cấp phát proxy mạnh mẽ, mang lại khả năng ẩn danh tuyệt đối cho các thiết bị sử dụng mạng. Không cần cài đặt thêm bất kỳ phần mềm proxy nào trên điện thoại, máy tính hoặc máy ảo (LDPlayer, NoxPlayer, VMWare...). WifiSocks trực tiếp cấp phát proxy cho từng thiết bị ngay trên router, đơn giản và tiện lợi. Với công nghệ độc quyền. Hỗ trợ đa luồng, không bị rò rỉ DNS và WebRTC, IP gốc, WifiSocks đảm bảo kết nối ổn định và bảo mật cao, cho phép bạn truy cập Internet một cách an toàn và riêng tư. Với tính năng cập nhật tự động, WifiSocks luôn đảm bảo bạn được trải nghiệm những tính năng mới nhất, công nghệ mới nhất và bảo mật nhất.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/image1.png"
            alt="WiFi Socks Image"
            width={1038}
            height={366}
            className="object-cover rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse">
        <div className="md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#333] mb-4 sm:mb-6">
            Hiệu năng tối ưu ẩn danh tuyệt đối
          </h2>
          <p className="text-sm sm:text-base text-[#555] leading-relaxed">
            Chỉ thiết bị nào được cấp phép mới được phép truy cập mạng trực tiếp không thông qua proxy. Điều này đảm bảo thiết bị không thể lộ IP gốc ngay cả khi chưa gán proxy. Hiệu năng được tối ưu tuyệt đối, không làm ảnh hưởng đến tốc độ mạng. Hỗ trợ đổi địa chỉ Mac của router dễ dàng chỉ bằng 1 cú click chuột.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/image2.png"
            alt="WiFi Socks Image"
            width={1038}
            height={455}
            className="object-cover rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#333] mb-4 sm:mb-6">
            Cài đặt routing theo domain và ip
          </h2>
          <p className="text-sm sm:text-base text-[#555] leading-relaxed">
            Dễ dàng cài đặt để chặn tên miền, ip hoặc chỉ định tên miền và ip sẽ không sử dụng proxy. Điều này giúp giảm tải cho proxy và tiết kiệm băng thông mạng cho proxy.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/image3.png"
            alt="WiFi Socks Image"
            width={1038}
            height={473}
            className="object-cover rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>
    </div>
    </>
  )
}