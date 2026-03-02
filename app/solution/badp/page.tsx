'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { FAQSection } from '@/components/FAQSection';
import { BADP_FEATURES, BADP_PRODUCTS, BADP_FAQS } from '@/lib/content';

export default function BADP() {
  const features = BADP_FEATURES;
  const products = BADP_PRODUCTS;
  const faqs = BADP_FAQS;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-600 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 tracking-tighter"
          >
            SingSingFresh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-green-50 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            생분해 생활솔루션 ‘싱싱프레’<br />
            자연에서 와서 자연으로 돌아가는 진정한 친환경 라이프스타일
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <Section background="default">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              플라스틱의 편리함은 그대로,<br />
              <span className="text-green-600 underline decoration-green-200 decoration-8 underline-offset-12">환경 부담은 Zero</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              EcoBio의 생분해 솔루션은 일반 플라스틱(PE, PP, PS 등)에 생분해 첨가제를 배합하여 만든 생분해 플라스틱 제품군입니다.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              기존 생분해 플라스틱(PLA, PBAT)의 단점인 약한 물성, 높은 가격, 까다로운 분해 조건을 모두 해결한 혁신적인 솔루션입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              {['#상온생분해', '#가격경쟁력', '#고물성', '#환경부EL724'].map((tag, i) => (
                <span key={i} className="bg-green-50 text-green-700 px-6 py-3 rounded-2xl font-bold text-sm border border-green-100 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8 rounded-[3rem] border border-green-100/50 shadow-2xl relative group overflow-hidden"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/badp-bag.png"
                alt="BADP Eco Shopping Bag"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white z-10">
                <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Ecological Solution</p>
                <h4 className="text-2xl md:text-3xl font-bold">Bio-based Product</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Key Features */}
      <Section background="muted">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            싱싱프레의 특별함
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            환경부 친환경 인증(EL724)을 획득한 검증된 기술로<br /> 지속 가능한 미래를 선도합니다.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {[
            { title: '멀칭필름 생분해성 인증', desc: 'EL724 인증 획득으로 토양 오염 방지 및 자원 순환', icon: '🌱' },
            { title: '기능성 필름 및 용기', desc: '기존 공정 그대로 생산 가능한 혁신적 배합 기술', icon: '🍱' },
            { title: '농산물 저장·유통', desc: '신선도를 극대화하는 통기성 및 수분 조절 시스템', icon: '🥦' },
            { title: '선도유지 지퍼백', desc: '미생물 억제 및 가스 조절을 통한 장기 보관 기술', icon: '🍅' },
            { title: '완벽한 생분해', desc: '미세 플라스틱 없이 자연 미생물에 의해 100% 분해', icon: '♻️' },
            { title: 'ESG 경영 파트너', desc: '생산 및 폐기 과정 전반의 탄소 배출 저감 효과', icon: '🌍' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-xl shadow-gray-100/50 hover:shadow-green-500/10 transition-all duration-300"
            >
              <div className="bg-green-100 w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section background="default">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">왜 싱싱프레인가?</h2>
          <p className="text-xl text-gray-500">기존 소재와의 완벽한 기술적 격차를 확인하세요.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto overflow-hidden rounded-[3rem] border border-gray-100 shadow-2xl bg-white px-2 py-2"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-950 text-white">
                  <th className="p-8 text-left font-bold text-lg rounded-tl-[2.5rem]">핵심 지표</th>
                  <th className="p-8 text-center bg-green-600 font-extrabold text-xl shadow-lg relative z-10">EcoBio (싱싱프레)</th>
                  <th className="p-8 text-center font-bold text-lg opacity-60">일반 기능성 포장</th>
                  <th className="p-8 text-center font-bold text-lg opacity-60">PLA (바이오 플라스틱)</th>
                  <th className="p-8 text-center font-bold text-lg opacity-60 rounded-tr-[2.5rem]">일반 비닐 (PE)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { label: '상온 토양 생분해', value: '완전 분해 (EL724)', others: ['불가능', '고온 전용 시설 필요', '불가능'] },
                  { label: '선도유지 효과', value: '압도적 우수', others: ['보통', '미비', '없음'] },
                  { label: '원가 부담', value: '매우 합리적', others: ['높음', '매우 높음', '가장 낮음'] },
                  { label: '생산 설비', value: '기존 설비 100% 활용', others: ['변경 필요', '전면 교체', '기존 설비'] },
                  { label: '미세 플라스틱', value: 'Zero (완전 분해)', others: ['발생', '잔류 가능', '반영구 잔류'] },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 last:border-none ${i % 2 === 0 ? 'bg-gray-50/30' : ''}`}>
                    <td className="p-6 md:p-8 font-bold text-gray-900 text-lg">{row.label}</td>
                    <td className="p-6 md:p-8 text-center bg-green-50/80 font-extrabold text-green-700 text-lg border-x-2 border-green-100/50">
                      {row.value}
                    </td>
                    {row.others.map((other, idx) => (
                      <td key={idx} className="p-6 md:p-8 text-center font-semibold text-gray-500">{other}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <FAQSection items={faqs} background="muted" />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-green-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="container-width relative z-10 text-center px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight"
          >
            지속 가능한 비즈니스의 시작,<br /> 싱싱프레가 함께합니다.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-green-800 px-16 py-8 rounded-[2rem] text-2xl font-bold hover:bg-green-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              제품 문의 & 샘플 신청
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
