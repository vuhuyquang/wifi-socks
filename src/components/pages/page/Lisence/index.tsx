"use client";

import React from "react";
import CheckIcon from "@/components/common/icons/CheckIcon";
import { Link } from "react-scroll";

const packages = [
  {
    name: "5 thiết bị",
    price: "1.800.000đ",
    duration: "6 tháng",
    features: [true, true, true, true, true, true, true, false, true, true, true],
  },
  {
    name: "10 thiết bị",
    price: "3.500.000đ",
    duration: "6 tháng",
    features: [true, true, true, true, true, true, true, false, true, true, true],
  },
  {
    name: "50 thiết bị",
    price: "5.000.000đ",
    duration: "6 tháng",
    features: [true, true, true, true, true, true, true, false, true, true, true],
  },
  {
    name: "200 thiết bị",
    price: "10.000.000đ",
    duration: "6 tháng",
    features: [true, true, true, true, true, true, true, false, true, true, true],
  },
];

const featuresList = [
  "Số thiết bị được gán proxy",
  "Hỗ trợ kỹ thuật",
  "Hỗ trợ cài đặt từ xa",
  "Hỗ trợ cập nhật tính năng mới",
  "Công nghệ chống DNS leak",
  "Công nghệ chống WebRTC leak",
  "Công nghệ chặn scan thiết bị trong lan",
  "Công nghệ tạo nhiều dải ip lan",
  "Công nghệ chống trace gói tin",
  "Công nghệ đổi nhà sản xuất router",
  "Công nghệ thay đổi Wifi Mac và Lan Mac",
];

export default function License() {
  return (
    <section className="bg-[#93B5B1] py-10">
      <div className="max-w-2xl container px-4 mx-auto mb-16 text-center">
        <span className="font-bold tracking-wider uppercase">Bảng giá</span>
        <h2 className="text-4xl font-bold lg:text-5xl">Bảng giá WifiSocks</h2>
      </div>
      <div className="container mx-auto max-w-[1038px]">
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Tính năng</th>
                {packages.map((pkg, index) => (
                  <th key={index} className="text-center px-4 py-2">
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featuresList.map((feature, featureIndex) => (
                <tr key={featureIndex} className="border-t">
                  <td className="py-2 px-4">{feature}</td>
                  {packages.map((pkg, pkgIndex) => (
                    <td key={pkgIndex} className="text-center py-2 px-4">
                      {pkg.features[featureIndex] ? (
                        <div className="flex justify-center items-center h-full">
                          <CheckIcon />
                        </div>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {packages.map((pkg, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <h4 className="text-xl font-bold">{pkg.name}</h4>
                <span className="text-xl font-bold">{pkg.price}</span>
                <span className="block text-lg tracking-wider">
                  {pkg.duration}
                </span>
              </div>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-black text-white"
              >
                Mua ngay
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
