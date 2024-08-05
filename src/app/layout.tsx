import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "@/styles/app.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wifi Socks",
  description: "WifiSocks biến chiếc router wifi thành một nơi cấp phát proxy mạnh mẽ, mang lại khả năng ẩn danh tuyệt đối cho các thiết bị sử dụng mạng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main className="w-screen max-w-full">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
