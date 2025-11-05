import Link from 'next/link';

export default function MIAOSolution() {
  const advantages = [
    {
      title: '기존 설비 사용',
      description: '생산 라인, 금형, 압출기 등 기존 설비 변경 불필요',
      icon: '🏭',
    },
    {
      title: '1% 이하 첨가',
      description: '극소량 첨가만으로 생분해 효과 구현',
      icon: '💧',
    },
    {
      title: '100% 재활용',
      description: '분해 전까지 일반 플라스틱처럼 재활용 가능',
      icon: '♻️',
    },
    {
      title: '원가 부담 최소',
      description: 'PLA/PBAT 대비 70% 이상 원가 절감',
      icon: '💰',
    },
    {
      title: '물성 유지',
      description: '기존 플라스틱의 강도, 유연성, 투명도 100% 유지',
      icon: '💪',
    },
    {
      title: '다양한 수지 적용',
      description: 'PE, PP, PET, PS 등 모든 범용 플라스틱에 적용',
      icon: '🔬',
    },
    {
      title: '상온 토양 분해',
      description: '특수 시설 없이 일반 토양에서 6-12개월 내 분해',
      icon: '🌱',
    },
    {
      title: '미세 플라스틱 Zero',
      description: '미생물에 의한 완전 분해, 미세 플라스틱 유발 없음',
      icon: '✨',
    },
    {
      title: '국제 인증',
      description: 'ASTM D5511, OECD 207/208, SGS 인증 완료',
      icon: '🏆',
    },
    {
      title: '글로벌 검증',
      description: 'Walmart, P&G, Disney 등 글로벌 기업 검증 완료',
      icon: '🌍',
    },
  ];

  const applications = [
    { resin: 'PE (폴리에틸렌)', products: '쇼핑백, 쓰레기봉투, 포장재' },
    { resin: 'PP (폴리프로필렌)', products: '식품 용기, 빨대, 섬유' },
    { resin: 'PET (폴리에틸렌 테레프탈레이트)', products: '음료수병, 식품 용기' },
    { resin: 'PS (폴리스티렌)', products: '일회용 컵, 포장 완충재' },
    { resin: 'PVC (폴리염화비닐)', products: '건축 자재, 파이프' },
    { resin: 'ABS', products: '전자제품 케이스, 장난감' },
  ];

  const productLine = [
    {
      name: 'MIAO K-1000',
      description: 'PE/PP용 생분해 첨가제',
      dosage: '0.5-1.0%',
      applications: '쇼핑백, 쓰레기봉투, 포장재',
    },
    {
      name: 'MIAO K-2500',
      description: 'PET용 생분해 첨가제',
      dosage: '0.8-1.5%',
      applications: '음료수병, 식품 용기',
    },
    {
      name: 'MIAO K-3000',
      description: 'PS용 생분해 첨가제',
      dosage: '0.5-1.2%',
      applications: '일회용 컵, 포장재',
    },
    {
      name: 'MIAO K-4000',
      description: '범용 생분해 첨가제',
      dosage: '1.0-2.0%',
      applications: '모든 범용 플라스틱',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">생분해 첨가제 MIAO</h1>
            <p className="text-2xl mb-4">플라스틱 제조사를 위한 혁신 솔루션</p>
            <p className="text-xl text-blue-100">
              기존 설비 그대로, 1% 첨가만으로 생분해 플라스틱 생산
            </p>
          </div>
        </div>
      </section>

      {/* 10 Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">MIAO 10대 장점</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            기존 플라스틱 제조 공정에 완벽하게 통합되는 솔루션
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">{advantage.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{advantage.title}</h3>
                <p className="text-sm text-gray-700 text-center">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">작동 원리</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">첨가 (Blending)</h3>
              <p className="text-gray-700">
                기존 플라스틱 원료에 MIAO를 0.5-2% 첨가하여 혼합합니다.
                별도의 설비 변경이나 공정 수정이 필요 없습니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">사용 (Usage)</h3>
              <p className="text-gray-700">
                생산된 제품은 일반 플라스틱과 동일하게 사용됩니다.
                물성, 강도, 투명도 등 모든 특성이 유지됩니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">분해 (Degradation)</h3>
              <p className="text-gray-700">
                토양에 버려진 후 미생물이 MIAO를 매개로 플라스틱 분자를 분해합니다.
                6-12개월 내 CO₂와 H₂O로 완전 분해됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">적용 가능 수지</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            거의 모든 범용 플라스틱에 적용 가능합니다
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{app.resin}</h3>
                <p className="text-gray-700">
                  <strong>적용 제품:</strong> {app.products}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Line */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">MIAO 제품 라인업</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            각 수지에 최적화된 MIAO 제품을 선택하세요
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {productLine.map((product, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">{product.name}</h3>
                <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>권장 투입량:</strong> {product.dosage}</p>
                  <p><strong>적용 제품:</strong> {product.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">원가 비교</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                기존 PE 봉투 1kg 생산 시 원가 비교 (예시)
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">일반 PE</span>
                  <span className="text-xl font-bold">₩2,000</span>
                </div>
                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">PE + MIAO (1% 첨가)</span>
                  <span className="text-xl font-bold text-blue-700">₩2,200</span>
                  <span className="text-sm text-gray-600">(+10%)</span>
                </div>
                <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">PLA</span>
                  <span className="text-xl font-bold text-red-600">₩5,000</span>
                  <span className="text-sm text-red-600">(+150%)</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg">
                <p className="text-center text-lg text-gray-700">
                  <strong className="text-blue-700">MIAO 사용 시</strong> PLA/PBAT 대비{' '}
                  <strong className="text-2xl text-blue-700">70% 이상 원가 절감</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">누구를 위한 제품인가요?</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            MIAO는 이런 고객사에 최적화되어 있습니다
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">플라스틱 제조업체</h3>
              <p className="text-gray-700">
                기존 설비를 유지하면서 생분해 플라스틱을 생산하고 싶은 제조사
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">R&D 부서</h3>
              <p className="text-gray-700">
                친환경 제품 개발을 고민하는 연구개발 팀
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">포장재 업체</h3>
              <p className="text-gray-700">
                고객사 요구에 맞춰 친환경 포장재를 공급하고 싶은 업체
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            MIAO 첨가제 샘플 및 기술 문의
          </h2>
          <p className="text-xl mb-8">
            무료 샘플 제공 및 적용 테스트 지원<br />
            기술 담당자가 직접 방문하여 컨설팅해드립니다
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            샘플 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
