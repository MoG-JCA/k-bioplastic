'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { CostCalculator } from '@/components/CostCalculator';
import { FAQSection } from '@/components/FAQSection';
import { MIAO_ADVANTAGES, MIAO_FAQS } from '@/lib/content';

export default function MIAO() {
  const advantages = MIAO_ADVANTAGES;
  const faqs = MIAO_FAQS;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 tracking-tighter"
          >
            Ecofade Solution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-blue-50 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            플라스틱 제조사를 위한<br />
            가장 현실적이고 경제적인 차세대 생분해 첨가제 솔루션
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
            <div className="inline-block p-2 px-6 mb-6 text-center bg-blue-600 text-white font-bold rounded-2xl text-lg shadow-lg shadow-blue-500/20">
              MIAO (Ecofade Additive)
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              단 1%의 첨가로<br />
              <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-12">친환경 기업으로 도약하세요</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              Ecofade 솔루션 MIAO는 플라스틱 원료(Resin)에 소량 첨가하여 일반 플라스틱을 생분해 플라스틱으로 전환시켜주는 마스터배치(Masterbatch) 형태의 첨가제입니다.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              제조 설비를 바꾸거나 원료를 전면 교체할 필요 없이, 기존 공정에 MIAO를 첨가하는 것만으로 ESG 경영과 글로벌 규제 대응을 실현할 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              {['#설비투자Zero', '#간편한적용', '#비용절감', '#범용수지적용'].map((tag, i) => (
                <span key={i} className="bg-blue-50 text-blue-700 px-6 py-3 rounded-2xl font-bold text-sm border border-blue-100 shadow-sm">
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
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8 rounded-[3rem] border border-blue-100/50 shadow-2xl relative group overflow-hidden"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/miao-pellets.png"
                alt="MIAO Additive Pellets"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white z-10">
                <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Revolutionary Additive</p>
                <h4 className="text-2xl md:text-3xl font-bold">Ecofade MIAO MB</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Advantages Grid */}
      <Section background="default" className="bg-gray-50/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Ecofade의 10대 장점
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            기존 설비 그대로, 원가는 낮추고 품질은 완벽하게 유지합니다.<br className="hidden md:block" />
            현실적인 생분해 솔루션의 기준을 제시합니다.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-200 transition-all duration-300"
            >
              <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-2xl flex items-center justify-center font-extrabold mr-5 flex-shrink-0 text-lg shadow-sm">
                {idx + 1}
              </div>
              <p className="text-lg text-gray-800 font-bold leading-snug">{adv}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works (Mechanism) */}
      <Section background="default">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">작동 메커니즘</h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)]">
            Ecofade 솔루션 MIAO가 플라스틱을 분해하는 과학적 과정
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 text-center">
          {[
            { icon: '🦠', title: '1. 미생물 유인', desc: 'MIAO 성분이 토양 속 미생물을 플라스틱 표면으로 유인하여 바이오필름을 형성합니다.' },
            { icon: '✂️', title: '2. 분자 사슬 절단', desc: '미생물이 분비하는 효소가 플라스틱의 긴 탄소 사슬(Polymer)을 미세 조각으로 끊어냅니다.' },
            { icon: '💧', title: '3. 완전 분해', desc: '잘게 쪼개진 조각들은 미생물의 먹이가 되어 최종적으로 물(H2O)과 이산화탄소(CO2)로 환원됩니다.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-12 rounded-[3rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="text-7xl mb-10 transition-transform duration-500 hover:scale-110 cursor-default">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-gray-900">{item.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Applicable Resins */}
      <Section background="muted">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">적용 가능 수지</h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)]">
            대부분의 범용 플라스틱에 추가 설비 없이 바로 적용 가능합니다.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-6">
          {['PE (LDPE, HDPE, LLDPE)', 'PP (Polypropylene)', 'PS (Polystyrene)', 'PET', 'PVC', 'EVA', 'ABS', 'Rubber'].map((resin, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, backgroundColor: '#EFF6FF', borderColor: '#BFDBFE', color: '#2563EB' }}
              className="bg-white border border-gray-100 text-gray-800 px-10 py-6 rounded-[2rem] text-xl font-bold shadow-xl shadow-gray-200/50 transition-all cursor-default"
            >
              {resin}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* Cost Calculator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <CostCalculator />
      </motion.div>

      {/* FAQ Section */}
      <FAQSection items={faqs} background="default" />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-blue-700 to-indigo-900 text-white relative overflow-hidden">
        <div className="container-width relative z-10 text-center px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight"
          >
            Ecofade 샘플 테스트로<br className="md:hidden" /> 직접 확인하세요.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-800 px-16 py-8 rounded-[2.5rem] text-2xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              샘플 신청 & 기술 상담
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
