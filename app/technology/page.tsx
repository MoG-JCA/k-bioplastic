import { Section } from '@/components/ui/Section';

export default function Technology() {
  const certifications = [
    {
      name: 'EL 724',
      organization: '한국환경산업기술원',
      description: '토양 생분해 인증',
      significance: '생분해성 멀칭필름, 생분해성 농업용 필름',
      color: 'green',
    },
    {
      name: 'ASTM D5511',
      organization: '미국 재료 시험 협회',
      description: '혐기성 생분해 인증',
      significance: '국제 표준 생분해 성능 인증',
      color: 'blue',
    },
    {
      name: 'OECD 207/208',
      organization: '경제협력개발기구',
      description: '토양 독성 테스트',
      significance: '생물에 대한 안전성 검증',
      color: 'purple',
    },
    {
      name: 'SGS',
      organization: 'SGS 그룹',
      description: '중금속 검사',
      significance: '유해 물질 불검출 확인',
      color: 'orange',
    },
  ];

  const comparisonData = [
    {
      category: '분해 원리',
      badp: '미생물 효소에 의한 완전 분해',
      pla: '미생물 분해 (고온 필요)',
      oxo: '산화로 인한 조각화 (분해 아님)',
    },
    {
      category: '분해 조건',
      badp: '상온 토양 (15-35℃)',
      pla: '58℃ 이상 산업용 퇴비화 시설',
      oxo: '빛, 열 (UV, 고온)',
    },
    {
      category: '분해 기간',
      badp: '6-12개월',
      pla: '6개월 (특수 시설)',
      oxo: '수년 (조각화될 뿐)',
    },
    {
      category: '최종 산물',
      badp: 'CO₂ + H₂O (완전 분해)',
      pla: 'CO₂ + H₂O (고온 조건)',
      oxo: '미세 플라스틱',
    },
    {
      category: '미세 플라스틱',
      badp: 'Zero',
      pla: '최소',
      oxo: '대량 발생',
    },
    {
      category: '재활용 가능성',
      badp: '100% 가능 (분해 전)',
      pla: '불가',
      oxo: '가능',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">기술 & 인증</h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            데이터로 증명하는<br />
            <span className="font-semibold text-white">진짜 생분해 기술</span>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">생분해 원리</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            미생물 효소가 플라스틱을 완전히 분해합니다
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12 rounded-3xl border border-[var(--border)]">
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: '토양 접촉',
                  desc: 'Ecofade 솔루션 첨가제가 첨가된 플라스틱이 토양에 버려지면, 토양 속 미생물이 플라스틱 표면에 집락을 형성합니다.',
                  color: 'bg-green-600'
                },
                {
                  step: 2,
                  title: '효소 작용',
                  desc: '미생물이 분비하는 효소(리파아제, 에스테라아제 등)가 플라스틱의 분자 결합을 끊어 작은 조각으로 분해합니다.',
                  color: 'bg-blue-600'
                },
                {
                  step: 3,
                  title: '미생물 대사',
                  desc: '미생물이 작은 조각들을 영양분으로 섭취하여 대사 작용을 통해 CO₂(이산화탄소)와 H₂O(물)로 변환합니다.',
                  color: 'bg-purple-600'
                },
                {
                  step: 4,
                  title: '완전 분해',
                  desc: '1~3년 후, 플라스틱은 완전히 사라지고 CO₂와 물만 남습니다. 미세 플라스틱이나 독성 물질은 전혀 남지 않습니다.',
                  color: 'bg-orange-600'
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`${item.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg`}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Freshness Technology Section */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">숨쉬는 필름 기술</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            양자역학(Quantum Mechanics) 원리를 적용한 선도유지 솔루션
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)]">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">양자역학(Quantum Mechanics)</h3>
              <p className="text-gray-600 leading-relaxed">
                전자와 무기 광물질에서 발생하는 파동에너지를 활용하여 세포를 활성화합니다.
                식품 보관의 골든타임을 연장하는 핵심 기술입니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)]">
              <h3 className="text-xl font-bold text-blue-600 mb-3">숨쉬는 필름(Breathable Film)</h3>
              <p className="text-gray-600 leading-relaxed">
                분자 구조상 미세한 기공을 통해 필름 내부의 습기를 조절하고 산소를 공급합니다.
                과도한 수분 흡수를 방지하여 곰팡이와 시들음을 억제합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)]">
              <h3 className="text-xl font-bold text-green-600 mb-3">에틸렌 가스 제어</h3>
              <p className="text-gray-600 leading-relaxed">
                식물의 노화 호르몬인 에틸렌 가스를 효과적으로 흡착 및 분해하여 과숙을 방지하고 부패를 지연시킵니다.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl overflow-hidden border border-[var(--border)] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-6">🧬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Fresh-keeping Technology</h3>
              <p className="text-gray-500">산소/이산화탄소 농도 조절 + 항균 99.9%</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">국내외 인증</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            그린워싱이 아닌, 공인 기관의 검증된 기술
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow"
            >
              <h3 className={`text-2xl font-bold mb-2 text-${cert.color}-600`}>{cert.name}</h3>
              <p className="text-lg text-gray-500 mb-6 font-medium">{cert.organization}</p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <strong className="block text-gray-900 mb-1 text-sm uppercase tracking-wide">인증 내용</strong>
                  <p className="text-gray-700">{cert.description}</p>
                </div>
                <div className={`bg-${cert.color}-50 p-4 rounded-xl`}>
                  <strong className="block text-gray-900 mb-1 text-sm uppercase tracking-wide">의미</strong>
                  <p className={`text-${cert.color}-700 font-semibold`}>{cert.significance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*
        <div className="max-w-4xl mx-auto bg-[var(--primary)] p-8 md:p-12 rounded-3xl text-white text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">국내 최초 상온 토양 생분해 인증 (EL 724)</h3>
            <p className="text-lg md:text-xl text-green-50 leading-relaxed">
              EcoBio의 BADP는 58℃ 퇴비화 시설이 아닌,<br className="hidden md:block" />
              <strong className="text-white border-b-2 border-white/30">일반 토양 환경(15-35℃)</strong>에서 생분해되는
              국내 최초 인증 제품입니다.
            </p>
          </div>
        </div>
        */}
      </Section>

      {/* Technology Comparison */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">타사 기술 비교</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Ecofade 솔루션 vs PLA/PBAT vs 산화분해
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-6 text-left text-lg font-semibold">비교 항목</th>
                  <th className="p-6 text-center bg-[var(--primary)] text-lg font-bold border-b-4 border-green-800">
                    Ecofade 솔루션<br /><span className="text-sm font-normal opacity-90">(당사)</span>
                  </th>
                  <th className="p-6 text-center text-lg font-semibold">PLA/PBAT</th>
                  <th className="p-6 text-center text-lg font-semibold">산화분해</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-6 font-semibold text-gray-900 border-b border-gray-100">
                      {row.category}
                    </td>
                    <td className="p-6 text-center bg-green-50/50 border-b border-green-100">
                      <span className="text-green-700 font-bold">{row.badp}</span>
                    </td>
                    <td className="p-6 text-center text-gray-600 border-b border-gray-100">
                      {row.pla}
                    </td>
                    <td className="p-6 text-center text-gray-500 border-b border-gray-100">
                      {row.oxo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h4 className="text-xl font-bold text-green-800 mb-3">✓ Ecofade 솔루션</h4>
            <p className="text-green-700 leading-relaxed">
              상온 토양에서 완전 분해, 미세 플라스틱 Zero, 재활용 가능
            </p>
          </div>
          <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
            <h4 className="text-xl font-bold text-yellow-800 mb-3">△ PLA/PBAT</h4>
            <p className="text-yellow-800 leading-relaxed">
              생분해는 되지만 특수 시설 필요, 높은 원가, 약한 물성
            </p>
          </div>
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h4 className="text-xl font-bold text-red-800 mb-3">✗ 산화분해</h4>
            <p className="text-red-800 leading-relaxed">
              진짜 분해 아님, 미세 플라스틱 대량 발생, EU 사용 금지
            </p>
          </div>
        </div>
      </Section>

      {/* Safety & Environment */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">안전성 검증</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-[var(--border)]">
            <div className="flex items-center mb-8">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">인체 안전성</h3>
            </div>
            <ul className="space-y-4">
              {[
                '식품 접촉 허가 (FDA 승인)',
                '피부 자극 테스트 통과',
                '중금속 불검출 (SGS 인증)',
                '유해 화학 물질 Zero'
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-gray-50 p-4 rounded-xl">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* MIAO Mechanism */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--border)]">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                🧪
              </div>
              <h3 className="text-2xl font-bold mb-4">Ecofade (에코페이드) 솔루션</h3>
              <p className="text-gray-600">
                미생물 유도 인공 산화 분해 메커니즘
              </p>
            </div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">환경 안전성</h3>
            </div>
            <ul className="space-y-4">
              {[
                '토양 생물 독성 없음 (OECD 207/208)',
                '수생 생물 독성 없음',
                '지하수 오염 없음',
                '최종 산물: CO₂ + H₂O (무해)'
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-gray-50 p-4 rounded-xl">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
