'use client';

import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut' as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } },
  viewport: { once: true, amount: 0.1 }
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const historyData = [
  { date: '2024.01', title: '(주)에코바이오 설립', desc: '미세 플라스틱 없는 순환 경제 실현을 위한 첫걸음' },
  { date: '2024.02', title: '연구개발전담부서 인정', desc: '선도유지 및 생분해 기술 고도화를 위한 R&D 기반 확보' },
  { date: '2024.04', title: '싱싱프레 브랜드 런칭', desc: '가정용 선도유지 지퍼백, 롤백 등 B2C 라인업 출시' },
  { date: '2024.06', title: 'BADP 생분해 상온 분해 인증', desc: '국내 최초 EL 724 산업퇴비화 조건 상온 생분해 통과' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight"
          >
            회사소개
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed"
          >
            미세 플라스틱 없는 순환 경제,<br />
            <span className="font-semibold text-white">신선함을 지키는 기술</span>로 지속 가능한 미래를 만듭니다.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <Section background="default">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-12 text-[var(--primary)]">CEO 인사말</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">"우리는 포장 혁신을 넘어 내일의 시간을 팔고 있습니다"</h3>
            <p className="text-lg leading-relaxed mb-6">
              안녕하십니까, (주)에코바이오입니다.
            </p>
            <p className="leading-relaxed mb-6 text-gray-600">
              농산물과 식품의 선도유지는 생산자, 유통업자, 소비자 모두에게 가장 중요한 과제입니다.
              신선식품의 부패로 인한 손실은 매년 수조 원에 달하며, 이는 단순한 경제적 손실을 넘어
              음식물 쓰레기와 환경오염의 문제로 이어집니다.
            </p>
            <p className="leading-relaxed mb-6 text-gray-600">
              EcoBio는 이 문제에 대한 실질적인 해답을 제시합니다.
              <strong className="text-[var(--primary)]"> 선도유지 기능성 필름 기술</strong>을 통해 농산물과 식품의 신선도를 획기적으로 연장하고,
              동시에 <strong className="text-blue-600">생분해 소재</strong>를 적용하여 환경까지 보호하고 있습니다.
            </p>
            <p className="leading-relaxed mb-8 text-gray-600">
              싱싱프레 브랜드를 통해 가정에서, 선도유지 포장재를 통해 유통가에서,
              생분해 첨가제 기술을 통해 산업 현장에서,
              EcoBio는 신선함을 지키는 기술로 더 나은 미래를 만들어가겠습니다.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* History Section (NEW) */}
      <Section background="muted">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary)]">연혁 및 히스토리</h2>
          <p className="text-lg text-[var(--muted-foreground)]">에코바이오가 걸어온 짧지만 강한 혁신의 발자취</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative px-4">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {historyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Desktop Content Side */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-[var(--primary)] font-bold text-lg mb-2 block">{item.date}</span>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-white shadow -translate-x-1/2 z-10 hidden md:block"></div>

                {/* Empty Side (Desktop) */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline adaptation */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-green-100 -translate-x-1/2"></div>
        </div>
      </Section>

      {/* Company Profile Section */}
      <Section background="default">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--primary)]">Company Profile</h2>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden">
            {[
              { label: '회사명', value: '(주)에코바이오' },
              { label: '설립일', value: '2024년 01월 10일' },
              { label: '사업부문', value: '생분해 필름제조 및 생분해 플라스틱 압축 필름' },
              {
                label: '주요상품',
                value: (
                  <div className="space-y-2">
                    <p>• 생분해 선도유지 필름/포장재/용기</p>
                    <p>• 생분해 선도유지 지퍼백, 생분해 비닐백, 롤백, 위생장갑</p>
                    <p>• 지자체 생분해 종량제봉투, 쇼핑백</p>
                    <p>• 농업용 생분해 멀칭필름</p>
                    <p>• 생분해 첨가제</p>
                  </div>
                )
              }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-gray-100 last:border-0">
                <div className="bg-gray-50 p-6 font-bold text-gray-700 border-r border-gray-100 flex items-center">{row.label}</div>
                <div className="p-6 text-gray-800 col-span-2">{row.value}</div>
              </div>
            ))}
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {[
              { label: '회사명', value: '(주)에코바이오' },
              { label: '설립일', value: '2024년 01월 10일' },
              { label: '사업부문', value: '생분해 필름제조 및 생분해 플라스틱 압축 필름' },
              {
                label: '주요상품',
                value: '생분해 선도유지 필름, 지퍼백, 롤백, 종량제봉투, 농업용 필름, 생분해 첨가제 등'
              }
            ].map((row, i) => (
              <div key={i} className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-xs font-bold text-[var(--primary)] mb-1 uppercase tracking-wider">{row.label}</div>
                <div className="text-gray-900 font-medium leading-relaxed">{row.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Major Brands Section */}
      <Section background="muted">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">주요 브랜드</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            소비자와 산업 현장 모두를 위한 에코바이오의 브랜드 포트폴리오
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Brand 1: SingSingFresh */}
          <motion.div variants={staggerChild} className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--border)] flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-full h-48 bg-white rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative border border-gray-50">
              <Image
                src="/images/about/singsingfre_bi.png"
                alt="SingSingFresh Logo"
                fill
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">SingSingFresh (싱싱프레)</h3>
            <p className="text-green-600 font-medium mb-4">가정용 선도유지 전문 브랜드</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              "신선하고 생기 있게 오래오래"
              <br />
              냉장고 속 채소와 과일의 신선도를 지키는 스마트한 주방 생활의 시작입니다.
            </p>
            <ul className="text-left bg-gray-50 w-full p-4 rounded-xl space-y-2 text-sm text-gray-700">
              <li className="flex items-center"><span className="text-green-500 mr-2">●</span>선도유지 지퍼백/롤백</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">●</span>항균 위생장갑/수세미</li>
            </ul>
          </motion.div>

          {/* Brand 2: Ecofade */}
          <motion.div variants={staggerChild} className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--border)] flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-full h-48 bg-white rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative border border-gray-50">
              <Image
                src="/images/about/ecofade_bi_01.png"
                alt="Ecofade Logo"
                fill
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ecofade Solution</h3>
            <p className="text-blue-600 font-medium mb-4">산업/농업용 생분해 솔루션</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              "자연에서 와서 자연으로 돌아가는"
              <br />
              미세 플라스틱 없는 친환경 산업 생태계를 구축하는 독보적인 기술 브랜드입니다.
            </p>
            <ul className="text-left bg-gray-50 w-full p-4 rounded-xl space-y-2 text-sm text-gray-700">
              <li className="flex items-center"><span className="text-blue-500 mr-2">●</span>산업용 스트레치 필름/포장재</li>
              <li className="flex items-center"><span className="text-blue-500 mr-2">●</span>농업용 멀칭 필름/배양토</li>
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      {/* Certifications Status Section */}
      <Section background="default">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">인증 현황</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            국내외 공인 기관이 검증한 안전성과 기술력
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/images/about/cert_el724.jpg", alt: "환경표지 인증서", title: "환경표지 인증서 (EL724)" },
              { src: "/images/about/cert_patent.jpg", alt: "특허증", title: "특허증 (생분해성 필름 제조)" },
              { src: "/images/about/cert_rnd.jpg", alt: "연구개발전담부서 인정서", title: "연구개발전담부서 인정서" },
            ].map((cert, i) => (
              <motion.div key={i} variants={staggerChild} className="flex flex-col items-center">
                <div className="relative w-full aspect-[335/460] shadow-lg rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image src={cert.src} alt={cert.alt} fill className="object-contain" />
                </div>
                <p className="mt-4 font-medium text-gray-700">{cert.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Why Us Section */}
      <Section background="muted">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            왜 (주)에코바이오인가?
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            기존 생분해의 한계를 넘어선 4세대 솔루션
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {/* Card 1 */}
          <motion.div variants={staggerChild} className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:border-red-200 transition-colors group">
            <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1세대: 전분 기반</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 물에 녹을 뿐, 진짜 분해 아님</li>
              <li>• 미세 플라스틱 유발</li>
              <li>• 내구성 부족</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={staggerChild} className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:border-orange-200 transition-colors group">
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🚫</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2세대: 산화분해</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 빛과 열로 쪼개질 뿐</li>
              <li>• 미세 플라스틱 대량 발생</li>
              <li>• EU 사용 금지</li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={staggerChild} className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:border-yellow-200 transition-colors group">
            <div className="bg-yellow-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3세대: PLA/PBAT</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 58℃ 특수 시설 필요</li>
              <li>• 높은 원가 (2-3배)</li>
              <li>• 설비 교체 필요</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Our Solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-[var(--primary)] rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          <Image
            src="/images/about-hero.png"
            alt="Circular Economy"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
                className="inline-flex items-center justify-center p-3 bg-white/20 rounded-xl mb-6 backdrop-blur-sm"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">4세대: EcoBio 솔루션</h3>
              <p className="text-green-100 text-lg">자연에서 와서 자연으로 돌아가는 완벽한 순환</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                '상온 토양에서 100% 생분해 (EL 724 인증)',
                '미세 플라스틱 Zero',
                '기존 플라스틱과 동일한 물성',
                '기존 설비 그대로 사용',
                '원가 부담 최소화',
                '100% 재활용 가능'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10"
                >
                  <span className="text-green-300 mr-3 text-xl">✓</span>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Vision & Mission */}
      <Section background="default">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">비전 & 미션</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <motion.div variants={staggerChild} className="bg-white p-10 rounded-3xl shadow-lg border border-[var(--border)] text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MISSION</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              모든 식품이 가장 신선하고 안전하게<br />
              소비될 수 있도록 포장 기술을 혁신
            </p>
          </motion.div>

          <motion.div variants={staggerChild} className="bg-[var(--primary)] p-10 rounded-3xl shadow-lg text-center text-white hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">VISION</h3>
            <p className="text-lg text-green-50 leading-relaxed font-medium">
              Fresh-keeping + Sustainability를 결합한<br />
              글로벌 패키징 솔루션 리더로 성장
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}
