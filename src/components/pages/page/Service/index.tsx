import Image from 'next/image';

export function Service() {
  return (
    <>
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
            src="https://s3-alpha-sig.figma.com/img/98f0/052d/cd44b3b07333fe2f4e35ba6f698a2a86?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=khQmvcGAtkC~mslVKBgYefMpU0IMs28mIZ~j1RtPGtZLh-mcEpDYewr5Cd-sC8yqFgTfGSAV2g-uMiD80nyfLOvTqJ7NP3MHebXwwLo1MDH~~oHfNMsSTzAsTk2MGxFEJ-icWcY~AnGmkFjL7GHv-z11DPkxc-uMMQaIV6GcAIivsjBzzLYfjmDQ6nIsqqENu4HaQgqDFDfNMuJ2GXz-VV2bJL04S1wCkUGzC0-YzQgLakRxt91FbrPtx1t0GDkxVAgM0Qr3G1LGnZKsGVroYqddomD9FJS8~-p7~s6y711YqjmdURhqAJOM9RtkqS3JexiAY7MBjD1e~TrbRgSAJw__"
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
            src="https://s3-alpha-sig.figma.com/img/baf7/3c93/7c4caf09e150acf0d818af45d1fb530c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FL0puyAhZ69FZRtiBNmHQsCOE5WklCt3Hs66Vun8qgZayhOkCon7rlFwqu-MLu9pLmA-~WKiYwFApZijbekoPdCfXpdjq-kWAl~hBnHSsyfpsMB0gTNh53D4BsJVbROKqhYlNCDx8sf4C37wk-ruJKvf5Rg1T9KDdXkFIF9gSaeMCAIhZfzmEL0VkKhERW47zqxXJsJUbe9aM~o7H-Z~XdZMDi8v-j6NsgTUeZabCxJak6gemZ3rDQ4DyGokWRq9LzjSWXqfxn3Tc3dyWu4076v4LPS6yp-7V~uYO2ysDMswR5Ys5y91aPUNRa0dIvKIR7BhGr9Spv0zAoyBrbAAFA__"
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
            src="https://s3-alpha-sig.figma.com/img/9261/f930/3399348152eaebdb795fecd87c03cb1f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a0Y8CjZY5ZrGw5fFLZVkoGfaSL9XrZQg1bm9KGqSInfYJL8p5-eTdyfp7OHmNM6OSGSmW2mN4Wirm7vxDA9oKmZx8rsIBrBY9GOBF5~3-nOv4yVmvX-c3sQDbPYo~dBAUX9-mtgzMW8SWTnbPPgADh-qvKcfJUVAX0LON0jLUSIBOnoDWy-FZBnYBfsPPF8UZ3TVvm4MkBQpTm5-6-IW3CuFtEFvrPbVlA9JUpJWNJx6lFO1iAYkqf2gHmQ0uBqdTYE99J~PHnQHGOHfrWvIBaXqdzw4fOiyCGyVbvaxA44u8Vq2DfKs4jX5ijjHNw4aiAlzItMhNMyS622XOqnKAA__"
            alt="WiFi Socks Image"
            width={1038}
            height={473}
            className="object-cover rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>
    </>
  )
}