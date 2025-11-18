import Link from 'next/link';

export default function Cases() {
  const badpCases = [
    {
      company: '농협 하나로마트',
      country: '대한민국',
      solution: 'BADP 롤백',
      year: '2023',
      description: '전국 1,000여개 매장에 BADP 생분해 비닐봉투 도입',
      results: [
        '연간 500톤 플라스틱 절감',
        '소비자 만족도 95% 이상',
        'ESG 경영 목표 조기 달성',
      ],
      impact: '국내 대형 유통사 최초 생분해 비닐 전면 도입',
    },
    {
      company: '친환경 식품 브랜드 A사',
      country: '대한민국',
      solution: 'BADP 지퍼백',
      year: '2023',
      description: '유기농 채소 포장용 생분해 지퍼백 사용',
      results: [
        '브랜드 가치 상승 (35% 매출 증가)',
        '고객 충성도 향상',
        '그린워싱 논란 제로',
      ],
      impact: '친환경 브랜드 이미지 강화 성공',
    },
    {
      company: '대형 외식 프랜차이즈',
      country: '대한민국',
      solution: 'BADP 위생장갑',
      year: '2024',
      description: '전국 체인점 위생장갑을 BADP로 전환',
      results: [
        '연간 200톤 플라스틱 절감',
        '직원 만족도 향상',
        'ESG 등급 상승',
      ],
      impact: '외식업계 친환경 전환 선도',
    },
  ];

  const miaoCases = [
    {
      company: 'Walmart',
      country: '미국',
      solution: 'MIAO 첨가제',
      year: '2022',
      description: '자체 브랜드 쇼핑백에 MIAO 첨가제 적용',
      results: [
        '연간 10,000톤 플라스틱을 생분해로 전환',
        '기존 생산 라인 유지로 비용 절감',
        '고객 친환경 인식 향상',
      ],
      impact: '글로벌 리테일 업계 벤치마크',
    },
    {
      company: 'P&G',
      country: '미국',
      solution: 'MIAO 첨가제',
      year: '2023',
      description: '포장재에 MIAO 첨가제 적용',
      results: [
        '연간 5,000톤 플라스틱 절감',
        '2030 탄소 중립 목표 가속화',
        '소비자 브랜드 선호도 증가',
      ],
      impact: '글로벌 FMCG 업계 친환경 전환 선도',
    },
    {
      company: 'Disney',
      country: '미국',
      solution: 'MIAO 첨가제',
      year: '2023',
      description: '테마파크 내 일회용 제품에 MIAO 적용',
      results: [
        '연간 2,000톤 플라스틱 절감',
        '방문객 만족도 향상',
        '환경 보호 이미지 강화',
      ],
      impact: '엔터테인먼트 업계 친환경 사례 창출',
    },
    {
      company: 'Costco',
      country: '미국',
      solution: 'MIAO 첨가제',
      year: '2024',
      description: '자체 포장재에 MIAO 첨가제 도입',
      results: [
        '대량 구매 포장재 친환경 전환',
        '회원 만족도 증가',
        'ESG 등급 향상',
      ],
      impact: '대형 창고형 매장 친환경 전환 사례',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">적용사례</h1>
          <p className="text-2xl">글로벌 기업들이 선택한 EcoBio</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">검증된 성과</h2>
            <p className="text-xl text-gray-600">
              국내외 유수 기업들이 EcoBio 솔루션으로 ESG 목표를 달성하고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-5xl font-bold text-green-700 mb-2">50+</div>
              <p className="text-gray-700 text-lg">도입 기업</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-700 mb-2">20,000+</div>
              <p className="text-gray-700 text-lg">연간 플라스틱 절감 (톤)</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-5xl font-bold text-purple-700 mb-2">15+</div>
              <p className="text-gray-700 text-lg">국가</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-5xl font-bold text-orange-700 mb-2">95%</div>
              <p className="text-gray-700 text-lg">고객 만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* BADP Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">BADP 완제품 도입 사례</h2>
            <p className="text-xl text-gray-600">
              유통/리테일 파트너들의 성공 스토리
            </p>
          </div>

          <div className="space-y-8">
            {badpCases.map((caseStudy, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-green-700 mb-2">{caseStudy.company}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {caseStudy.country}
                      </span>
                      <span>|</span>
                      <span>{caseStudy.year}</span>
                      <span>|</span>
                      <span className="font-semibold text-green-700">{caseStudy.solution}</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">{caseStudy.description}</p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">주요 성과</h4>
                  <ul className="grid md:grid-cols-3 gap-4">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start bg-green-50 p-4 rounded-lg">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                  <p className="text-gray-800">
                    <strong className="text-green-700">Impact:</strong> {caseStudy.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIAO Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MIAO 첨가제 도입 사례</h2>
            <p className="text-xl text-gray-600">
              글로벌 제조사들의 혁신 여정
            </p>
          </div>

          <div className="space-y-8">
            {miaoCases.map((caseStudy, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-700 mb-2">{caseStudy.company}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {caseStudy.country}
                      </span>
                      <span>|</span>
                      <span>{caseStudy.year}</span>
                      <span>|</span>
                      <span className="font-semibold text-blue-700">{caseStudy.solution}</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">{caseStudy.description}</p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">주요 성과</h4>
                  <ul className="grid md:grid-cols-3 gap-4">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start bg-blue-50 p-4 rounded-lg">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                  <p className="text-gray-800">
                    <strong className="text-blue-700">Impact:</strong> {caseStudy.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">고객 평가</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">
                "기존 설비 변경 없이 생분해 플라스틱을 생산할 수 있어서 비용 절감과 ESG 목표를 동시에 달성했습니다.
                MIAO는 우리 회사의 게임 체인저였습니다."
              </p>
              <p className="text-gray-900 font-semibold">- 글로벌 포장재 제조사 R&D 담당자</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">
                "PLA로 전환하려다 물성과 비용 때문에 고민이 많았는데, BADP는 일반 비닐과 동일한 품질에
                진짜 생분해까지 되어 완벽한 솔루션이었습니다."
              </p>
              <p className="text-gray-900 font-semibold">- 대형마트 구매팀장</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">
                "EL 724 인증으로 그린워싱 논란 없이 정말 친환경 제품임을 증명할 수 있었습니다.
                고객 만족도도 크게 상승했습니다."
              </p>
              <p className="text-gray-900 font-semibold">- 친환경 브랜드 대표</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">
                "글로벌 파트너들의 검증을 받은 기술이라 신뢰할 수 있었고,
                실제 적용 후 탄소 배출량이 크게 감소했습니다."
              </p>
              <p className="text-gray-900 font-semibold">- 대기업 ESG 담당 임원</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            귀사도 성공 사례의 주인공이 되세요
          </h2>
          <p className="text-xl mb-8">
            EcoBio 솔루션으로 ESG 경영과 비용 절감을 동시에 실현하세요
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            지금 바로 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
