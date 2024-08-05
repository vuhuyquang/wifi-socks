import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <span className="font-bold tracking-wider uppercase">Liên hệ</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Hình thức mua hàng và Hoàn tiền
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center">
        <div className="w-full lg:w-1/3 flex flex-col gap-5 items-center text-center">
          <Image
            src="https://s3-alpha-sig.figma.com/img/00d4/cd0d/ad7ab56063d884c99c7997d842edbd9e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TQgXrTW5uTnAfkF9spxNPQFmKjTgOo7JVvh7tMrbTREXToS3V6caRnfb2ingvyJhzzRGnqKcRdRmFdXxGfKoXy-FdQk1wdPU2adF-KKVo~ZKf3OIHsZ3f5IviK8RfCptaCmLF~pR-KZel7sWzgK3pPfcduxprWnXu8bi5a5dYyDE7cv0Y0Gv-VjNEFD4ZLaqWC4zTsZIJRucomyG4WbUoEmszdNtqeFV8pxXkVs8djjCtjCOpYOHFy4th2Dr7HkpSlUTUzKjYybHcRD~vfD~W1QZgmcNynminA3k0nVbV-DsDOZQqHp4ik4nQhSZMsn7ysAdxZ4tV5NS6jBkExN3tg__"
            alt="Tìm hiểu về sản phẩm và chọn gói phù hợp"
            width={197}
            height={197}
          />
          <span>Tìm hiểu về sản phẩm và chọn gói phù hợp</span>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-5 items-center text-center">
          <Image
            src="https://s3-alpha-sig.figma.com/img/b7e1/9a51/ed01e567cd89e0ce8a727d28f5a7662e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p8cJsPJacmzFKPg90DoeYHoHZgc7UyLJbWe-jQp6UrrfPidyZ8L-1yCCCnhxULf3CozBQJNM4iWlo4wc5gos~R~M4kOUNcP0rf0CAeqw7D~75fpqIy0T1cs7Nt56WuKMe6T2~vE00HuzCdSHREMztLQc7Kz8R0-9jEUJzLWW~rFGQ0ylUwM1FUSaK4XWnKCyWVuUf37n5BsocZ9jFEOzWHXl0K9~kwrfymx02wDf3LIituoYI4ZjoIBOOqcssI-y1Frw7qKmDtqHsym-2hMNodDhAq9AdHVqMfADA5NqR3Pk2B2STNcUE3qFYydI88TFnUJpfa-UKbANrcmzKjHhbQ__"
            alt="Liên hệ bộ phậm chăm sóc khác hàng để được tư vấn nếu bạn cần thêm thong tin"
            width={197}
            height={197}
          />
          <span>
            Liên hệ bộ phậm chăm sóc khác hàng để được tư vấn nếu bạn cần thêm
            thông tin
          </span>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-5 items-center text-center">
          <Image
            src="https://s3-alpha-sig.figma.com/img/7bb5/7541/bb8c8eacec96243df05a186fca7df1a9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZFKzyGzyrSoOYAAg8SCgv6pjyXvndy9iakEH69oTHGR9iP4xkk~6cTmuUm~9f1ziTB9iY3~LYhLPKN2NFQJ8qp2nZJEFe1Mq~DLrraqBjeb~pydUiB~5-zeEOTPzXXJ6ly-AJ3u~3Yt9bg4ka6hlAOOktbDSWfBZZgkSEn8BJoDBNJUuxb04g61mwY1NfArpBVEuwKoX7S-KGXYlv-qEv0zhtONQoEYQMrpTYqF8DmeZp19o5K4nxRjige6wzfJ~-7-VOiDUMuVcdJO6O8a3q7w3kF6Rl9STmLoINmJAT6oUuOiShEREr8Svb35lNjVK3uJx6U7dRdUGpZYXZwjEQ__"
            alt="Thanh toán và trải nghiệm sản phẩm"
            width={197}
            height={197}
          />
          <span>Thanh toán và trải nghiệm sản phẩm</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center mt-10">
        <div className="w-full lg:w-1/2">
          <strong>Thông tin thanh toán</strong>
          <ul className="list-disc list-inside">
            <li>Ngân hàng: VIB</li>
            <li>Số: 00570406057678</li>
            <li>Chủ TK: Bùi Văn Quyền</li>
            <li>Nội dung Ck: Thanh toán wifisocks + SĐT của bạn</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <strong>Liên hệ hỗ trợ và mua hàng</strong>
          <div className="flex flex-col sm:flex-row gap-5">
            <ul className="list-disc list-inside">
              <li>Tel 1: +84374161784</li>
              <li>Tel 2: +84332060326</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Zalo 1: 0374161784</li>
              <li>Zalo 2: +84332060326</li>
            </ul>
          </div>
          <div className="mt-5">Telegram: @bvquyen</div>
        </div>
      </div>
    </div>
  );
}
