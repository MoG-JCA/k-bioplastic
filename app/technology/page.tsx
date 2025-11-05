import Link from 'next/link';

export default function Technology() {
  const certifications = [
    {
      name: 'EL 724',
      organization: '한국환경산업기술원',
      description: '토양 생분해 인증',
      significance: '국내 최초 상온 토양 생분해 인증 획득',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">기술 & 인증</h1>
          <p className="text-2xl">데이터로 증명하는 진짜 생분해 기술</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">생분해 원리</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            미생물 효소가 플라스틱을 완전히 분해합니다
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">토양 접촉</h3>
                    <p className="text-gray-700 text-lg">
                      BADP/MIAO가 첨가된 플라스틱이 토양에 버려지면, 토양 속 미생물이 플라스틱 표면에 집락을 형성합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">효소 작용</h3>
                    <p className="text-gray-700 text-lg">
                      미생물이 분비하는 효소(리파아제, 에스테라아제 등)가 플라스틱의 분자 결합을 끊어 작은 조각으로 분해합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">미생물 대사</h3>
                    <p className="text-gray-700 text-lg">
                      미생물이 작은 조각들을 영양분으로 섭취하여 대사 작용을 통해 CO₂(이산화탄소)와 H₂O(물)로 변환합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">완전 분해</h3>
                    <p className="text-gray-700 text-lg">
                      6-12개월 후, 플라스틱은 완전히 사라지고 CO₂와 물만 남습니다.
                      미세 플라스틱이나 독성 물질은 전혀 남지 않습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">국내외 인증</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            그린워싱이 아닌, 공인 기관의 검증된 기술
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 rounded-xl shadow-lg border-l-4 border-${cert.color}-500`}
              >
                <h3 className={`text-3xl font-bold text-${cert.color}-700 mb-2`}>{cert.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{cert.organization}</p>
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-900">인증 내용:</strong>
                    <p className="text-gray-700">{cert.description}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">의미:</strong>
                    <p className={`text-${cert.color}-700 font-semibold`}>{cert.significance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">국내 최초 상온 토양 생분해 인증 (EL 724)</h3>
            <p className="text-lg">
              K-BIOPLASTIC의 BADP는 58℃ 퇴비화 시설이 아닌,
              <strong className="underline">일반 토양 환경(15-35℃)</strong>에서 생분해되는
              국내 최초 인증 제품입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">타사 기술 비교</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            BADP vs PLA/PBAT vs 산화분해
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 p-4 text-left">비교 항목</th>
                  <th className="border border-gray-300 p-4 text-center bg-green-700">
                    <strong>BADP/MIAO<br />(당사)</strong>
                  </th>
                  <th className="border border-gray-300 p-4 text-center">PLA/PBAT</th>
                  <th className="border border-gray-300 p-4 text-center">산화분해</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">
                      {row.category}
                    </td>
                    <td className="border border-gray-300 p-4 text-center bg-green-50">
                      <span className="text-green-700 font-semibold">{row.badp}</span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-gray-700">
                      {row.pla}
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      {row.oxo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-green-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-green-800 mb-2">✓ BADP/MIAO</h4>
              <p className="text-gray-700">
                상온 토양에서 완전 분해, 미세 플라스틱 Zero, 재활용 가능
              </p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-yellow-800 mb-2">△ PLA/PBAT</h4>
              <p className="text-gray-700">
                생분해는 되지만 특수 시설 필요, 높은 원가, 약한 물성
              </p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-red-800 mb-2">✗ 산화분해</h4>
              <p className="text-gray-700">
                진짜 분해 아님, 미세 플라스틱 대량 발생, EU 사용 금지
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Environment */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">안전성 검증</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">인체 안전성</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>식품 접촉 허가 (FDA 승인)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>피부 자극 테스트 통과</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>중금속 불검출 (SGS 인증)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>유해 화학 물질 Zero</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">환경 안전성</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>토양 생물 독성 없음 (OECD 207/208)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>수생 생물 독성 없음</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>지하수 오염 없음</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>최종 산물: CO₂ + H₂O (무해)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            더 자세한 기술 자료가 필요하신가요?
          </h2>
          <p className="text-xl mb-8">
            인증서, 테스트 리포트, 기술 백서 등을 제공해드립니다
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-700 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            기술 자료 요청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
