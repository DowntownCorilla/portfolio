import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corilla's portfolio",
  description: "안녕하세요. 1년차 프론트엔드 개발자 이윤재 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
