import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "정맥주사 관리 시스템",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#7988B8] flex justify-center items-center h-[100px] text-white text-[26px] font-bold">
          <div className="w-[960px]"> 정맥주사 관리 시스템</div>
        </div>
        <div className="flex justify-center">
          <div className="w-[960px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
