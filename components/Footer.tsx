import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">K-BIOPLASTIC</h3>
            <p className="text-gray-300 mb-4">
              진짜 생분해 기술로 미세 플라스틱 없는 순환 경제를 만들어갑니다.
            </p>
            <p className="text-gray-400 text-sm">
              4세대 생분해 기술 전문 기업<br />
              국내 최초 EL 724 토양 생분해 인증
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/solution/badp" className="text-gray-300 hover:text-green-400 transition-colors">
                  BADP 완제품
                </Link>
              </li>
              <li>
                <Link href="/solution/miao" className="text-gray-300 hover:text-green-400 transition-colors">
                  MIAO 첨가제
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-300 hover:text-green-400 transition-colors">
                  기술 & 인증
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-300 hover:text-green-400 transition-colors">
                  적용사례
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">문의하기</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@k-bioplastic.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                02-1234-5678
              </li>
              <li>
                <Link href="/contact" className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  견적/샘플 문의
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 K-BIOPLASTIC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
