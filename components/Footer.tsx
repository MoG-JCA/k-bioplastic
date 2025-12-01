import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/ecobio_ci.png"
                alt="(주)에코바이오"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              진짜 생분해 기술로 미세 플라스틱 없는 순환 경제를 만들어갑니다.
              자연에서 와서 자연으로 돌아가는 지속 가능한 미래를 약속합니다.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>(주)에코바이오</p>
              <p>경기도 남양주시 다산지금로202 현대테라타워 B동 9층 69호</p>
              <p className="mt-2 pt-2 border-t border-gray-800 inline-block">
                4세대 생분해 기술 전문 기업 | 국내 최초 EL 724 토양 생분해 인증
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">빠른 링크</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/solution/badp" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  생분해 생활솔루션
                </Link>
              </li>
              <li>
                <Link href="/solution/miao" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  생분해 플라스틱솔루션
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  기술 & 인증
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  적용사례
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">문의하기</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="mt-1.5">info@ecobio.co.kr</span>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="mt-1">
                  <div>031-557-9153</div>
                </div>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-[var(--foreground)] bg-white hover:bg-gray-100 transition-colors w-full">
                  견적/샘플 문의
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 (주)에코바이오. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
