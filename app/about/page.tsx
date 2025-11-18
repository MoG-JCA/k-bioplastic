import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">회사소개</h1>
          <p className="text-2xl">미세 플라스틱 없는 순환 경제를 만들어갑니다</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">인사말</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              안녕하십니까. (주)에코바이오 대표이사입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              우리는 <strong className="text-green-700">진짜 생분해 기술</strong>로 지구를 보호하고,
              기업의 지속 가능한 성장을 함께 만들어가는 4세대 생분해 기술 전문 기업입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              기존의 PLA나 산화분해 플라스틱은 실제 자연 환경에서 분해되지 않거나,
              미세 플라스틱을 유발하여 더 큰 환경 문제를 야기해왔습니다.
              우리는 이러한 문제를 근본적으로 해결하기 위해,
              <strong className="text-blue-700">상온 토양에서 100% 생분해</strong>되는
              혁신적인 기술을 개발했습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              우리의 미션은 단순합니다. <strong>미세 플라스틱 Zero, 진짜 순환 경제</strong>를 실현하는 것입니다.
              귀사와 함께 지속 가능한 미래를 만들어가겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            왜 우리인가?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            기존 생분해의 한계와 우리의 대안
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1세대: 전분 기반</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 물에 녹을 뿐, 진짜 분해 아님</li>
                <li>• 미세 플라스틱 유발</li>
                <li>• 내구성 부족</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2세대: 산화분해</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 빛과 열로 쪼개질 뿐</li>
                <li>• 미세 플라스틱 대량 발생</li>
                <li>• EU 사용 금지</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3세대: PLA/PBAT</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 58℃ 특수 시설 필요</li>
                <li>• 높은 원가 (2-3배)</li>
                <li>• 설비 교체 필요</li>
              </ul>
            </div>
          </div>

          {/* Our Solution */}
          <div className="mt-12 bg-gradient-to-br from-green-600 to-blue-600 p-10 rounded-2xl shadow-2xl text-white">
            <div className="text-center">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">4세대: EcoBio 솔루션</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mt-8">
                <div className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>상온 토양에서 100% 생분해 (EL 724 인증)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>미세 플라스틱 Zero</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>기존 플라스틱과 동일한 물성</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>기존 설비 그대로 사용</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>원가 부담 최소화</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>100% 재활용 가능</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">우리의 핵심 가치</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">진정성</h3>
              <p className="text-gray-600">
                그린워싱이 아닌, 데이터와 인증으로 증명하는 진짜 기술
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">혁신</h3>
              <p className="text-gray-600">
                기존 생분해의 한계를 뛰어넘는 4세대 기술
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">파트너십</h3>
              <p className="text-gray-600">
                고객의 성공과 지구의 미래를 함께 만들어갑니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            함께 만드는 지속 가능한 미래
          </h2>
          <p className="text-xl mb-8">
            귀사의 ESG 목표 달성을 위한 최적의 파트너가 되겠습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solution/badp"
              className="bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              솔루션 알아보기
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-700 transition-colors font-semibold"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
