import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { CostCalculator } from '@/components/CostCalculator';
import { FAQSection } from '@/components/FAQSection';
import { MIAO_ADVANTAGES, MIAO_FAQS } from '@/lib/content';

export const metadata: Metadata = {
  title: '생분해 플라스틱솔루션 (MIAO)',
  description: '플라스틱 제조사를 위한 혁신적인 생분해 첨가제 솔루션. 기존 설비 그대로, 최소한의 비용으로 친환경 기업으로 도약하세요.',
};

export default function MIAO() {
  const advantages = MIAO_ADVANTAGES;
  const faqs = MIAO_FAQS;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">
            생분해 플라스틱솔루션 Ecofade
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
            플라스틱 제조사를 위한<br />
            가장 현실적이고 경제적인 Ecofade 솔루션
          </p>
        </div>
      </section>

      {/* Introduction */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <th className="p-4 text-center bg-blue-600 text-white font-bold border-b-4 border-blue-800">Ecofade 솔루션 (MIAO)</th>
              단 1%의 첨가로<br />
              <span className="text-blue-600">친환경 기업으로 도약하세요</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ecofade 솔루션 MIAO는 플라스틱 원료(Resin)에 소량 첨가하여 일반 플라스틱을 생분해 플라스틱으로 전환시켜주는 마스터배치(Masterbatch) 형태의 첨가제입니다.
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
            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src="/images/miao-pellets.png"
                alt="MIAO Additive Pellets"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div className="relative z-10 text-white font-bold text-xl drop-shadow-md">Ecofade Masterbatch</div>
          </div>
        </div>
      </Section>

      {/* Advantages Grid */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ecofade의 10대 장점
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            기존 설비 그대로, 원가는 낮추고 품질은 그대로 유지합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
            Ecofade 솔루션 MIAO가 플라스틱을 분해하는 과정
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
            Ecofade 샘플 테스트를 신청하세요
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
