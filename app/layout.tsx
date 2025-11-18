import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EcoBio - 4세대 생분해 기술 전문 기업",
  description: "진짜 생분해 기술로 미세 플라스틱 없는 순환 경제를 만들어갑니다. 국내 최초 EL 724 토양 생분해 인증",
  keywords: "생분해, 바이오플라스틱, BADP, MIAO, 친환경, EL 724, 미세플라스틱, 순환경제, 에코바이오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
