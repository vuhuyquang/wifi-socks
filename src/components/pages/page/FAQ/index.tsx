export default function FAQ() {
  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <span className="font-bold tracking-wider uppercase">FAQ</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Câu hỏi thường gặp?
        </h2>
      </div>
      <div className="flex flex-col gap-5 px-4 md:px-0">
        <div className="p-4 border rounded-md shadow-sm">
          <strong>
            Tôi có hệ thống rất nhiều thiết bị thì nên sử dụng gói nào?
          </strong>
          <ul>
            <li>
              Nếu bạn có nhiều thiết bị hãy mua nhiều gói. Ví dụ bạn có 500
              thiết bị cần gán proxy hãy mua 10 gói 50 thiết bị và 10 chiếc
              router để phát wifi
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <strong>
            Tôi muốn tích hợp vào tool đang có sẵn, WifiSocks có API không?
          </strong>
          <ul>
            <li>
              WifiSocks có API để tích hợp vào tool. API theo chuẩn resfull và
              json nên rất dễ dàng để tích hợp
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <strong>
            Sau khi mua sản phẩm có được cập nhật công nghệ mới nhất không?
          </strong>
          <ul>
            <li>
              Chúng tôi hỗ trợ cập nhật công nghệ nhanh chóng, tiện lợi, chỉ cần
              reboot lại router là đã có thể cập nhật. Nếu bạn có nhu cầu về
              một tính năng, hoặc góp ý về sản phẩm chúng tôi sẵn sàng hỗ trợ
              cập nhật miễn phí. Chỉ cần tính năng hoặc góp ý của bạn có giá
              trị với cả những khách hàng khác.
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <strong>
          Tôi lo lắng về chính sách hậu mãi và support?
          </strong>
          <ul>
            <li>
            Chúng tôi luôn chú trọng vào việc hỗ trợ khách hàng. Mang lại trải nghiệm sử dụng sản phẩm tốt nhất có thể. Chính vì vậy mọi vấn đề và sự cố chúng tôi sẽ hỗ trợ một cách nhanh nhất có thể từ 8h - 22h từ thứ 2 - thứ 7.
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <strong>
            Tôi thấy giá của thiết bị khi mua hộ cao hơn giá thị trường?
          </strong>
          <ul>
            <li>
              Khi mua hộ sản phẩm chúng tôi sẽ chịu trách nhiệm cài đặt firmware
              và phần mềm lên thiết bị. Chính vì vậy nên chúng tôi sẽ thu thêm 1
              phần chi phí cài đặt và chi phí rủi ro hỏng hóc trong quá trình
              cài đặt firmware cho router và chi phí vận chuyển từ nhà cung cấp
              thiết bị router.
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <strong>Chính sách đổi trả và bảo hành như nào?</strong>
          <ul>
            <li>
              Đối với phần mềm khi có lỗi chúng tôi sẽ sửa và cập nhật cho bạn
              phiên bản mới. Đối với thiết bị router khi chúng tôi mua hộ, nếu
              có lỗi từ nhà sản xuất chúng tôi hỗ trợ đổi mới thiết bị trong
              thời gian 1 tháng.
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-md shadow-sm">
          <strong>Tôi thanh toán theo hình thức nào?</strong>
          <ul>
            <li>
              Thanh toán bằng hình thức chuyển khoản ngân hàng.
              <ul>
                <li>Ngân hàng: VIB</li>
                <li>Số: 005704060576780</li>
                <li>Chủ TK: Bùi Văn Quyền</li>
                <li>Nội dung CK: Thanh toán wifisocks + SĐT của bạn</li>
              </ul>
            </li>
            <li>
              Sau khi thanh toán xong vui lòng chụp hóa đơn và liên hệ zalo:
              0374161784
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
