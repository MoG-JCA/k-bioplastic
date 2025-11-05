import Link from 'next/link';

export default function BADPSolution() {
  const products = [
    {
      name: '롤백 (Roll Bag)',
      description: '대형마트, 편의점용 비닐봉투',
      features: ['일반 롤백과 동일한 강도', '다양한 사이즈 제작 가능', 'EL 724 인증'],
    },
    {
      name: '위생백 (Garbage Bag)',
      description: '가정용, 업소용 쓰레기봉투',
      features: ['찢어짐 방지 강화', '악취 차단 기능', '대용량 제작 가능'],
    },
    {
      name: '위생장갑 (Disposable Gloves)',
      description: '식품 조리, 의료용 일회용 장갑',
      features: ['안전성 인증', '우수한 착용감', '다양한 두께 옵션'],
    },
    {
      name: '지퍼백 (Zipper Bag)',
      description: '식품 보관용 밀폐 지퍼백',
      features: ['완벽한 밀폐력', '냉동/냉장 사용 가능', '다양한 사이즈'],
    },
    {
      name: '선도유지 기능성 지퍼백',
      description: '신선도 연장 특수 코팅 지퍼백',
      features: ['채소/과일 신선도 2배 연장', '에틸렌 가스 제거', '프리미엄 품질'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">생분해 완제품 BADP</h1>
            <p className="text-2xl mb-4">유통/리테일 파트너를 위한 솔루션</p>
            <p className="text-xl text-green-100">
              일반 비닐과 동일한 물성, 상온 토양에서 100% 생분해
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">BADP의 핵심 장점</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">동일한 물성/강도</h3>
              <p className="text-gray-700">
                기존 플라스틱 비닐과 100% 동일한 내구성과 강도. 찢어짐 걱정 없음
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">상온 토양 생분해</h3>
              <p className="text-gray-700">
                특수 시설 불필요. 일반 토양에서 6-12개월 내 100% 생분해 (EL 724 인증)
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% 재활용 가능</h3>
              <p className="text-gray-700">
                분해되기 전까지는 일반 플라스틱처럼 100% 재활용 가능. 순환 경제 실현
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">합리적인 가격</h3>
              <p className="text-gray-700">
                PLA/PBAT 대비 30-50% 저렴. 기존 플라스틱과 경쟁력 있는 가격
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">국내외 인증</h3>
              <p className="text-gray-700">
                환경부 EL 724 (국내 최초), ASTM, OECD, SGS 등 국제 인증 완료
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">미세 플라스틱 Zero</h3>
              <p className="text-gray-700">
                미생물에 의한 완전 분해. 미세 플라스틱 유발 없음
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">제품 라인업</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            다양한 용도에 맞는 BADP 완제품을 제공합니다
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-green-700 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-green-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">타사 제품과 비교</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left">항목</th>
                  <th className="border border-gray-300 p-4 text-center bg-green-100">
                    <strong className="text-green-700">BADP (당사)</strong>
                  </th>
                  <th className="border border-gray-300 p-4 text-center">PLA/PBAT</th>
                  <th className="border border-gray-300 p-4 text-center">산화분해</th>
                  <th className="border border-gray-300 p-4 text-center">일반 플라스틱</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">생분해 조건</td>
                  <td className="border border-gray-300 p-4 text-center bg-green-50">
                    <span className="text-green-700 font-semibold">상온 토양</span>
                  </td>
                  <td className="border border-gray-300 p-4 text-center">58℃ 특수 시설</td>
                  <td className="border border-gray-300 p-4 text-center">해당 없음</td>
                  <td className="border border-gray-300 p-4 text-center">해당 없음</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">생분해 기간</td>
                  <td className="border border-gray-300 p-4 text-center bg-green-50">
                    <span className="text-green-700 font-semibold">6-12개월</span>
                  </td>
                  <td className="border border-gray-300 p-4 text-center">6개월 (특수 시설)</td>
                  <td className="border border-gray-300 p-4 text-center">분해 안 됨</td>
                  <td className="border border-gray-300 p-4 text-center">500년+</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">미세 플라스틱</td>
                  <td className="border border-gray-300 p-4 text-center bg-green-50">
                    <span className="text-green-700 font-semibold">Zero</span>
                  </td>
                  <td className="border border-gray-300 p-4 text-center">최소</td>
                  <td className="border border-gray-300 p-4 text-center text-red-600">대량 발생</td>
                  <td className="border border-gray-300 p-4 text-center text-red-600">대량 발생</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">물성/강도</td>
                  <td className="border border-gray-300 p-4 text-center bg-green-50">
                    <span className="text-green-700 font-semibold">우수</span>
                  </td>
                  <td className="border border-gray-300 p-4 text-center">약함</td>
                  <td className="border border-gray-300 p-4 text-center">보통</td>
                  <td className="border border-gray-300 p-4 text-center">우수</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">가격 경쟁력</td>
                  <td className="border border-gray-300 p-4 text-center bg-green-50">
                    <span className="text-green-700 font-semibold">합리적</span>
                  </td>
                  <td className="border border-gray-300 p-4 text-center">비쌈 (2-3배)</td>
                  <td className="border border-gray-300 p-4 text-center">저렴</td>
                  <td className="border border-gray-300 p-4 text-center">가장 저렴</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">재활용 가능</td>
                  <td className="border border-gray-300 p-4 text-center bg-green-50">
                    <span className="text-green-700 font-semibold">100%</span>
                  </td>
                  <td className="border border-gray-300 p-4 text-center">불가</td>
                  <td className="border border-gray-300 p-4 text-center">가능</td>
                  <td className="border border-gray-300 p-4 text-center">100%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">인증</td>
                  <td className="border border-gray-300 p-4 text-center bg-green-50">
                    <span className="text-green-700 font-semibold">EL 724, ASTM</span>
                  </td>
                  <td className="border border-gray-300 p-4 text-center">ASTM D6400</td>
                  <td className="border border-gray-300 p-4 text-center">없음</td>
                  <td className="border border-gray-300 p-4 text-center">없음</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">누구를 위한 제품인가요?</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            BADP는 이런 고객사에 최적화되어 있습니다
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">대형마트/편의점</h3>
              <p className="text-gray-700">
                고객에게 제공하는 비닐봉투를 친환경으로 전환하고 싶은 유통업체
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ESG 담당 기업</h3>
              <p className="text-gray-700">
                ESG 경영 목표를 달성하고, 탄소 배출을 줄이고 싶은 기업
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">친환경 브랜드</h3>
              <p className="text-gray-700">
                그린워싱 없이 진짜 친환경 제품을 제공하고 싶은 브랜드
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            BADP 완제품 구매 문의
          </h2>
          <p className="text-xl mb-8">
            제품 샘플, 견적, 납품 일정 등 궁금하신 사항을 문의해주세요
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            견적 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
