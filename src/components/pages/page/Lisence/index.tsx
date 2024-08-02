import React from 'react';

interface Product {
  name: string;
  price: string;
  details: string;
}

const products: Product[] = [
  {
    name: 'Gói dùng thử 2 thiết bị',
    price: '1,000,000 VNĐ',
    details: 'Chi tiết dịch vụ của sản phẩm 1',
  },
  {
    name: 'Gói tối đa 5 thiết bị',
    price: '2,000,000 VNĐ',
    details: 'Chi tiết dịch vụ của sản phẩm 2',
  },
  {
    name: 'Gói tối đa 50 thiết bị',
    price: '3,000,000 VNĐ',
    details: 'Chi tiết dịch vụ của sản phẩm 3',
  },
];

export default function License() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-[#333] mb-6 text-center">Bảng giá license phần mềm WifiSocks</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <p className="text-base text-[#555]">{product.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
