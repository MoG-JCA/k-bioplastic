import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { CostCalculator } from '@/components/CostCalculator';
import { FAQSection } from '@/components/FAQSection';

export default function MIAO() {
  const advantages = [
    '기존 생산 설비 그대로 사용 가능 (별도 투자 불필요)',
    '1~2% 소량 첨가만으로 생분해 성능 발현',
    '생산 공정 및 사이클 타임에 영향 없음',
    '모든 범용 플라스틱(PE, PP, PS, PET 등)에 적용 가능',
    '가격 경쟁력 우수 (타 첨가제 대비)',
    'FDA, RoHS 등 국제 안전 기준 충족',
    '제품의 투명도 및 물성 저하 없음',
    '유통 기한 조절 가능 (첨가량 조절)',
    '재활용 공정에 영향 없음',
    '브랜드 맞춤형 솔루션 제공',
  ];

  const faqs = [
    {
      question: '기존 생산 설비를 변경해야 하나요?',
      answer: '아니요, 전혀 필요하지 않습니다. MIAO는 마스터배치(Masterbatch) 형태로 제공되므로, 기존 원료와 함께 호퍼에 투입하기만 하면 됩니다. 금형이나 스크류 변경 없이 즉시 생산 가능합니다.'
    },
    {
      question: '제품의 물성(강도, 투명도)이 변하나요?',
      answer: 'MIAO는 1~2%의 소량만 첨가되므로 기존 플라스틱의 물성을 99% 이상 유지합니다. 인장 강도, 충격 강도, 투명도 등에서 일반 플라스틱과 차이가 없습니다.'
    },
    {
      question: '분해 기간은 얼마나 걸리나요?',
      answer: '제품의 두께와 환경 조건(토양 온도, 습도, 미생물 분포)에 따라 다르지만, 일반적으로 폐기 후 6개월에서 2년 사이에 완전 분해됩니다. 유통 기한 중에는 분해되지 않으므로 안심하고 사용할 수 있습니다.'
    },
    {
      question: '재활용이 가능한가요?',
      answer: '네, 가능합니다. MIAO가 첨가된 플라스틱은 분해가 시작되기 전까지는 일반 플라스틱과 동일하게 재활용(Recycle)할 수 있습니다. 폐기 시에만 생분해 메커니즘이 작동합니다.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">MIAO 솔루션</h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            Microorganism Induced Artificial Oxidation<br />
            <span className="font-semibold text-white">플라스틱 제조사를 위한 혁신적 첨가제</span>
          </p>
        </div>
      </section>

      {/* Introduction */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              단 1%의 첨가로<br />
              <span className="text-blue-600">친환경 기업으로 도약하세요</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              MIAO는 플라스틱 원료(Resin)에 소량 첨가하여 일반 플라스틱을 생분해 플라스틱으로 전환시켜주는 마스터배치(Masterbatch) 형태의 첨가제입니다.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              제조 설비를 바꾸거나 원료를 전면 교체할 필요 없이, 기존 공정에 MIAO를 첨가하는 것만으로 ESG 경영을 실현할 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">#설비투자Zero</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">#간편한적용</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">#비용절감</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-[var(--border)] flex items-center justify-center min-h-[300px] overflow-hidden relative">
            <img
              src="/images/miao-pellets.png"
              alt="MIAO Additive Pellets"
              className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div className="relative z-10 text-white font-bold text-xl drop-shadow-md">MIAO Masterbatch</div>
          </div>
        </div>
      </Section>

      {/* 10 Advantages */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MIAO의 10대 장점</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            제조사를 위한 최적의 솔루션
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {advantages.map((adv, idx) => (
            <div key={idx} className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)] hover:shadow-md transition-all">
              <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                {idx + 1}
              </div>
              <p className="text-lg text-gray-800 font-medium">{adv}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works (Mechanism) */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">작동 메커니즘</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            MIAO가 플라스틱을 분해하는 과정
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-8 rounded-3xl bg-gray-50 border border-[var(--border)]">
            <div className="text-6xl mb-6">🦠</div>
            <h3 className="text-xl font-bold mb-4">1. 미생물 유인</h3>
            <p className="text-gray-600">
              MIAO 성분이 토양 속 미생물을 플라스틱 표면으로 유인하여 바이오필름을 형성합니다.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gray-50 border border-[var(--border)]">
            <div className="text-6xl mb-6">✂️</div>
            <h3 className="text-xl font-bold mb-4">2. 분자 사슬 절단</h3>
            <p className="text-gray-600">
              미생물이 분비하는 효소가 플라스틱의 긴 탄소 사슬(Polymer)을 끊어냅니다.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gray-50 border border-[var(--border)]">
            <div className="text-6xl mb-6">💧</div>
            <h3 className="text-xl font-bold mb-4">3. 완전 분해</h3>
            <p className="text-gray-600">
              잘게 쪼개진 조각들은 미생물의 먹이가 되어 최종적으로 물과 이산화탄소로 분해됩니다.
            </p>
          </div>
        </div>
      </Section>

      {/* Applicable Resins */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">적용 가능 수지</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            대부분의 범용 플라스틱에 적용 가능합니다
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {['PE (LDPE, HDPE, LLDPE)', 'PP (Polypropylene)', 'PS (Polystyrene)', 'PET (Polyethylene Terephthalate)', 'PVC (Polyvinyl Chloride)', 'EVA', 'ABS', 'Rubber'].map((resin, i) => (
            <span key={i} className="bg-white border border-gray-200 text-gray-800 px-8 py-4 rounded-2xl text-lg font-bold shadow-sm hover:shadow-md transition-all hover:scale-105 hover:border-blue-300 hover:text-blue-600 cursor-default">
              {resin}
            </span>
          ))}
        </div>
      </Section>

      {/* Cost Calculator */}
      <CostCalculator />

      {/* FAQ Section */}
      <FAQSection items={faqs} background="default" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            MIAO 샘플 테스트를 신청하세요
          </h2>
          <p className="text-xl mb-8">
            귀사의 제품에 바로 적용하여 테스트해볼 수 있습니다.
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
