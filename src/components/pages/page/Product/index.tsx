import Image from 'next/image';

export default function Product() {
  const products = [
    {
      name: "Xiaomi R3G (Cũ)",
      price: "500,000 VND",
      image: "https://s3-alpha-sig.figma.com/img/bd13/2c27/85414c470c97b1e899b2fc484ecf49fe?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNrFMSz5EPso5eLjzZ7DTrl2A1lRhadW6-hr5snXzpbgowFRP~hiC0A8nVPqCD0CWQgeC6RiXZyoV4XYmv1peagqWs0FADSRkzy0Kex3eLNsFDz3lYX~n~pfMvHabSjnipkXVSlTOKFi4nJAqtS~6Da5ljOsHZp6Zd3OpFpGWwDL5JBN8tWTODruzX5J6aWQ5-ctOYcLpeFNofFMZ1FoznpN8ofh3g4ivW734tjUhidbUpyL3BbzE0Ag0epP1NykN2ciWsdbwmkFK3XWuT0UAhb5Mbme~uNTL1E8Ve3AubpWaa9BMOVsV~3lGPRenzgkamA1DmC5N8n8JSG4fqmnbQ__",
    },
    {
      name: "Xiaomi redmi AX6000 - Wifi 6 băng tần kép",
      price: "2,000,000 VND",
      image: "https://s3-alpha-sig.figma.com/img/403a/a47f/13db8f7119c82d81c6bff63e16882889?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oU6CSDsqWMm1bdrD5UYUQjLPHUbNep6JIQp6N7~U~rwQ-t8VH2QcQQT0TKoL01Q9C2G4wypo7BM35fRmP0shAmIOxP66IDNBJ1IuMoTVby3uYKcOGn97jYbnIxIwxCuW3Sv~PsaYoZExQIaV7jziveYo6jwUbN9jHmtTd3fFZjIo9kTXtugp4JleG3HkxqZA6EP70dPRF23O-jvmPV6D2xtpF9HXYieoVoM6SXaMiQWQ3PHZmU9t2CY5YxJGqWckBDLBbiQn0Yo7W~AXHfQEhJmgAZF7ijr7W263agG-t8YjfWWzGhhApNop1L9xfZaEs0G9DN~zeRAjEBRSgbpf0Q__",
    },
  ];

  return (
    <>
      <section className="py-20 m:py-12 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase">
              Sản phẩm
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl">Cài đặt và mua hộ thiết bị</h2>
          </div>
          <div className="max-w-5xl mx-auto mb-8">
            <p className="text-sm sm:text-base mb-2">
              Chúng tôi hỗ trợ bạn cài đặt và mua hộ thiết bị nếu bạn có nhu cầu. Bạn vui lòng trả phí
              ship và thanh toán trước toàn bộ chi phí router.
            </p>
            <p className="text-sm sm:text-base">
              Các thiết bị chúng tôi hỗ trợ mua hộ và cài đặt firmware và phần mềm WifiSocks.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-center">{product.name}</h3>
                <p className="text-center text-gray-700">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
