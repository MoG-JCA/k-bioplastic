import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { FAQSection } from '@/components/FAQSection';
import { BADP_FEATURES, BADP_PRODUCTS, BADP_FAQS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'SingSingFresh (싱싱프레) - 생분해 생활솔루션',
  description: '상온 토양에서 100% 분해되는 혁신적인 생분해 생활솔루션. 멀칭필름, 쇼핑백, 식품 포장재 등 다양한 친환경 제품을 만나보세요.',
};

export default function BADP() {
  const features = BADP_FEATURES;
  const products = BADP_PRODUCTS;
  const faqs = BADP_FAQS;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">
            SingSingFresh (싱싱프레)
          </h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            생분해 생활솔루션 ‘싱싱프레’<br />
            자연에서 와서 자연으로 돌아가는 진정한 친환경 라이프스타일
          </p>
        </div>
      </section>

      {/* Introduction */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              플라스틱의 편리함은 그대로,<br />
              <span className="text-green-600">환경 부담은 Zero</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              EcoBio의 생분해 솔루션은 일반 플라스틱(PE, PP, PS 등)에 생분해 첨가제를 배합하여 만든 생분해 플라스틱 제품군입니다.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              기존 생분해 플라스틱(PLA, PBAT)의 단점인 약한 물성, 높은 가격, 까다로운 분해 조건을 모두 해결한 혁신적인 솔루션입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">#상온생분해</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">#가격경쟁력</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">#고물성</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl border border-[var(--border)] flex items-center justify-center min-h-[300px] overflow-hidden relative">
            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src="/images/badp-bag.png"
                alt="BADP Eco Shopping Bag"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
            <div className="relative z-10 text-white font-bold text-xl drop-shadow-md">Eco-Friendly Shopping Bag</div>
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            싱싱프레의 특별함
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            환경부 친환경 인증(EL724)을 획득한 믿을 수 있는 제품입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: '멀칭필름 생분해성 인증', desc: 'EL724 인증 획득으로 토양 오염 방지', icon: '🌱' },
            { title: '기능성 필름 및 용기', desc: '다양한 용도로 활용 가능한 친환경 소재', icon: '🍱' },
            { title: '농산물 저장·유통', desc: '신선도를 오래 유지하는 숨쉬는 포장', icon: '🥦' },
            { title: '선도유지 지퍼백', desc: '야채와 과일의 신선함을 더 오래오래', icon: '🍅' },
            { title: '완벽한 생분해', desc: '사용 후 퇴비화되어 자연으로 환원', icon: '♻️' },
            { title: '탄소 저감', desc: '생산 및 폐기 과정에서 탄소 배출 최소화', icon: '🌍' },
          ].map((feature, i) => (
            <div key={i} className="flex items-start p-6 rounded-2xl border border-[var(--border)] bg-white hover:bg-green-50/30 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mr-6 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Lineup */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">제품 라인업</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            다양한 산업 분야에 적용 가능한 싱싱프레 제품
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <div key={idx} className="flex items-start p-6 rounded-2xl border border-[var(--border)] bg-white hover:bg-green-50/30 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mr-6 flex-shrink-0">
                {product.image}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">비교 분석</h2>
        </div>
        <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left font-semibold">구분</th>
                  <th className="p-4 text-center bg-[var(--primary)] font-bold border-b-4 border-green-800">EcoBio (선도유지 포장재)</th>
                  <th className="p-4 text-center font-semibold">경쟁사 H (기능성)</th>
                  <th className="p-4 text-center font-semibold">경쟁사 T (기능성)</th>
                  <th className="p-4 text-center font-semibold">PLA (바이오 플라스틱)</th>
                  <th className="p-4 text-center font-semibold">일반 비닐 (PE/PP)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">선도유지</td>
                  <td className="p-4 text-center bg-green-50/50 font-bold text-green-700">상 (Excellent)</td>
                  <td className="p-4 text-center">상</td>
                  <td className="p-4 text-center">상</td>
                  <td className="p-4 text-center">하</td>
                  <td className="p-4 text-center">하</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">생분해</td>
                  <td className="p-4 text-center bg-green-50/50 font-bold text-green-700">가능 (상온 토양)</td>
                  <td className="p-4 text-center">불가</td>
                  <td className="p-4 text-center">가능</td>
                  <td className="p-4 text-center">가능 (고온)</td>
                  <td className="p-4 text-center">불가</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">항균/항곰팡이</td>
                  <td className="p-4 text-center bg-green-50/50 font-bold text-green-700">99.9%</td>
                  <td className="p-4 text-center">99.9%</td>
                  <td className="p-4 text-center">99.9%</td>
                  <td className="p-4 text-center">없음</td>
                  <td className="p-4 text-center">없음</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">미세 플라스틱</td>
                  <td className="p-4 text-center bg-green-50/50 font-bold text-green-700">미발생 (Zero)</td>
                  <td className="p-4 text-center">발생 가능</td>
                  <td className="p-4 text-center">발생 가능</td>
                  <td className="p-4 text-center">발생 가능</td>
                  <td className="p-4 text-center">발생</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">비용</td>
                  <td className="p-4 text-center bg-green-50/50 font-bold text-green-700">합리적</td>
                  <td className="p-4 text-center">높음</td>
                  <td className="p-4 text-center">높음</td>
                  <td className="p-4 text-center">높음</td>
                  <td className="p-4 text-center">낮음</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <FAQSection items={faqs} background="default" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            당신의 선택이 지구환경을 살릴 수 있습니다.
          </h2>
          <p className="text-xl mb-8">
            샘플 신청 및 견적 문의를 통해 직접 확인해보세요.
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
