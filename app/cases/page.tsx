import Link from 'next/link';
import { Section } from '@/components/ui/Section';

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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">적용사례</h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            글로벌 기업들이 선택한<br />
            <span className="font-semibold text-white">EcoBio 솔루션</span>
          </p>
        </div>
      </section>

      {/* Overview */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">검증된 성과</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            국내외 유수 기업들이 EcoBio 솔루션으로 ESG 목표를 달성하고 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {[
            { value: '50+', label: '도입 기업', color: 'text-green-600', bg: 'bg-green-50' },
            { value: '20,000+', label: '연간 플라스틱 절감 (톤)', color: 'text-blue-600', bg: 'bg-blue-50' },
            { value: '15+', label: '국가', color: 'text-purple-600', bg: 'bg-purple-50' },
            { value: '95%', label: '고객 만족도', color: 'text-orange-600', bg: 'bg-orange-50' },
          ].map((stat, i) => (
            <div key={i} className={`text-center p-8 rounded-2xl ${stat.bg} border border-transparent hover:border-current transition-colors`}>
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-3`}>{stat.value}</div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BADP Cases */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            생분해 생활솔루션 ‘싱싱프레’ 도입 사례
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            다양한 산업 현장에서 검증된 싱싱프레의 우수성
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {badpCases.map((caseStudy, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-3">{caseStudy.company}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {caseStudy.country}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{caseStudy.year}</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">{caseStudy.solution}</span>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-800 mb-8 leading-relaxed">{caseStudy.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                    주요 성과
                  </h4>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl flex flex-col justify-center">
                  <strong className="text-green-800 text-sm uppercase tracking-wide mb-2">Impact</strong>
                  <p className="text-gray-800 text-lg font-medium">
                    "{caseStudy.impact}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* MIAO Cases */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MIAO 첨가제 도입 사례</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            글로벌 제조사들의 혁신 여정
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {miaoCases.map((caseStudy, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 pl-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-3">{caseStudy.company}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {caseStudy.country}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{caseStudy.year}</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{caseStudy.solution}</span>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-800 mb-8 leading-relaxed pl-4">{caseStudy.description}</p>

              <div className="grid md:grid-cols-2 gap-8 pl-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                    주요 성과
                  </h4>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl flex flex-col justify-center">
                  <strong className="text-blue-800 text-sm uppercase tracking-wide mb-2">Impact</strong>
                  <p className="text-gray-800 text-lg font-medium">
                    "{caseStudy.impact}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">고객 평가</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              text: "기존 설비 변경 없이 생분해 플라스틱을 생산할 수 있어서 비용 절감과 ESG 목표를 동시에 달성했습니다. MIAO는 우리 회사의 게임 체인저였습니다.",
              author: "글로벌 포장재 제조사 R&D 담당자"
            },
            {
              text: "PLA로 전환하려다 물성과 비용 때문에 고민이 많았는데, BADP는 일반 비닐과 동일한 품질에 진짜 생분해까지 되어 완벽한 솔루션이었습니다.",
              author: "대형마트 구매팀장"
            },
            {
              text: "EL 724 인증으로 그린워싱 논란 없이 정말 친환경 제품임을 증명할 수 있었습니다. 고객 만족도도 크게 상승했습니다.",
              author: "친환경 브랜드 대표"
            },
            {
              text: "글로벌 파트너들의 검증을 받은 기술이라 신뢰할 수 있었고, 실제 적용 후 탄소 배출량이 크게 감소했습니다.",
              author: "대기업 ESG 담당 임원"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-[var(--border)] relative">
              <div className="text-yellow-400 text-2xl mb-6">★★★★★</div>
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-gray-900 font-bold border-t border-gray-100 pt-4 inline-block">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </Section>

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
