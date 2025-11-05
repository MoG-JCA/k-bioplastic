import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              진짜가 나타났습니다
            </h1>
            <p className="text-2xl md:text-3xl text-green-700 font-semibold mb-4">
              토양에서 100% 생분해되는 4세대 솔루션
            </p>
            <p className="text-xl text-gray-600 mb-12">
              기존 설비 그대로, 미세 플라스틱 Zero. 국내 최초 EL 724 인증
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/solution/badp"
                className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition-all transform hover:scale-105 shadow-lg"
              >
                생분해 완제품 구매 (유통/리테일)
              </Link>
              <Link
                href="/solution/miao"
                className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                생분해 첨가제 문의 (플라스틱 제조사)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            아직도 PLA나 산화분해 플라스틱을 쓰시나요?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            기존 생분해의 한계를 확인하세요
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-4">PLA/PBAT의 한계</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>58℃ 특정 퇴비화 시설에서만 분해</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>높은 원가 부담 (기존 플라스틱 대비 2-3배)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>약한 물성 (찢어짐, 내구성 문제)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>생산 설비 전면 교체 필요</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">산화분해의 문제</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✗</span>
                  <span>빛과 열로 쪼개질 뿐, 진짜 분해 아님</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✗</span>
                  <span>미세 플라스틱 유발 (환경 오염 가중)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✗</span>
                  <span>EU에서 사용 금지</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✗</span>
                  <span>그린워싱 논란 지속</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            우리의 2가지 솔루션
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            B2B 고객별 맞춤 솔루션을 제공합니다
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* BADP Solution */}
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-4">생분해 완제품 BADP</h3>
              <p className="text-lg text-gray-600 mb-6">유통/리테일 파트너를 위한 솔루션</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">일반 비닐과 동일한 물성/강도</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">국내 최초 상온 토양 생분해 인증 (EL 724)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">분해 전 100% 재활용 가능</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">롤백, 지퍼백, 위생장갑 등 다양한 제품군</span>
                </div>
              </div>

              <Link
                href="/solution/badp"
                className="block text-center bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
              >
                자세히 보기 →
              </Link>
            </div>

            {/* MIAO Solution */}
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-700 mb-4">생분해 첨가제 MIAO</h3>
              <p className="text-lg text-gray-600 mb-6">플라스틱 제조사를 위한 솔루션</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">기존 플라스틱(PE/PP/PET 등)에 1% 이하 첨가</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">기존 생산 설비/금형 변경 불필요</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">원가 부담 최소화 (1% 첨가로 효과)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">ASTM, OECD, SGS 국제 인증 완료</span>
                </div>
              </div>

              <Link
                href="/solution/miao"
                className="block text-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            말로만 친환경이 아닙니다
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            데이터로 증명합니다
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-700 mb-2">EL 724</div>
              <p className="text-gray-600">환경부 토양 생분해 인증<br />(국내 최초)</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">ASTM</div>
              <p className="text-gray-600">D5511 국제 표준<br />생분해 인증</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-700 mb-2">OECD</div>
              <p className="text-gray-600">207/208 독성 테스트<br />통과</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-700 mb-2">SGS</div>
              <p className="text-gray-600">중금속 안전성<br />인증</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/technology"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              기술 & 인증 자세히 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Global Partners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            글로벌 파트너들이 선택했습니다
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            농협 하나로마트부터 월마트, 디즈니까지
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['농협 하나로마트', 'Walmart', 'P&G', 'Disney', 'Costco', '대형마트', '글로벌 리테일', '제조업체'].map((partner, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
                <span className="text-xl font-semibold text-gray-700">{partner}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cases"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
            >
              적용사례 자세히 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            귀사의 ESG 경영과 규제 대응, 지금 바로 상담하세요
          </h2>
          <p className="text-xl mb-8">
            완제품 구매부터 첨가제 기술 문의까지, 전문가가 답변드립니다
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            견적/샘플 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
