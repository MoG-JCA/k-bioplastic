"use client";

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Technology() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    } as any
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    },
    viewport: { once: false, amount: 0.3 }
  };

  const stepVariants = {
    initial: { opacity: 0, x: -20 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      } as any
    }
  };

  const certifications = [
    {
      name: 'EL 724',
      organization: '한국환경산업기술원',
      description: '토양 생분해 인증',
      significance: '생분해성 멀칭필름, 생분해성 농업용 필름',
      color: 'green',
      image: '/images/about/cert_el724.jpg'
    },
    {
      name: 'ASTM D5511',
      organization: '미국 재료 시험 협회',
      description: '혐기성 생분해 인증',
      significance: '국제 표준 생분해 성능 인증',
      color: 'blue',
      image: '/images/about/cert_rnd.jpg'
    },
    {
      name: 'OECD 207/208',
      organization: '경제협력개발기구',
      description: '토양 독성 테스트',
      significance: '생물에 대한 안전성 검증',
      color: 'purple',
      image: '/images/about/cert_patent.jpg'
    },
    {
      name: 'SGS',
      organization: 'SGS 그룹',
      description: '중금속 검사',
      significance: '유해 물질 불검출 확인',
      color: 'orange',
      image: '/images/about/cert_rnd.jpg'
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
        <motion.div
          className="container-width relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">기술 & 인증</h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            데이터로 증명하는<br />
            <span className="font-semibold text-white">진짜 생분해 기술</span>
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <Section background="default">
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">생분해 원리</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            미생물 효소가 플라스틱을 완전히 분해합니다
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
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
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row md:items-start gap-6 group"
                  variants={stepVariants}
                >
                  <div className={`${item.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>
      </Section>

      {/* Freshness Technology Section */}
      <Section background="default">
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">숨쉬는 필름 기술</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            양자역학(Quantum Mechanics) 원리를 적용한 선도유지 솔루션
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              {
                title: '양자역학(Quantum Mechanics)',
                desc: '전자와 무기 광물질에서 발생하는 파동에너지를 활용하여 세포를 활성화합니다. 식품 보관의 골든타임을 연장하는 핵심 기술입니다.',
                color: 'text-[var(--primary)]'
              },
              {
                title: '숨쉬는 필름(Breathable Film)',
                desc: '분자 구조상 미세한 기공을 통해 필름 내부의 습기를 조절하고 산소를 공급합니다. 과도한 수분 흡수를 방지하여 곰팡이와 시들음을 억제합니다.',
                color: 'text-blue-600'
              },
              {
                title: '에틸렌 가스 제어',
                desc: '식물의 노화 호르몬인 에틸렌 가스를 효과적으로 흡착 및 분해하여 과숙을 방지하고 부패를 지연시킵니다.',
                color: 'text-green-600'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)]"
                variants={fadeIn}
              >
                <h3 className={`text-xl font-bold ${feature.color} mb-3`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="relative h-[400px] bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl overflow-hidden border border-[var(--border)] flex items-center justify-center"
            {...fadeIn}
          >
            <div className="text-center p-8">
              <div className="text-6xl mb-6">🧬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Fresh-keeping Technology</h3>
              <p className="text-gray-500">산소/이산화탄소 농도 조절 + 항균 99.9%</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="muted">
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">국내외 인증</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            그린워싱이 아닌, 공인 기관의 검증된 기술
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start relative group overflow-hidden"
              variants={fadeIn}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-green-50 transition-colors duration-500"></div>

              {cert.image && (
                <div className="w-32 h-32 relative flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-inner border border-gray-100 p-3 z-10 flex items-center justify-center">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              )}
              <div className="flex-grow z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-3 h-3 rounded-full bg-${cert.color}-500 shadow-[0_0_10px_rgba(34,197,94,0.3)] animate-pulse`}></span>
                  <h3 className={`text-2xl md:text-3xl font-bold text-gray-900`}>{cert.name}</h3>
                </div>
                <p className="text-lg text-gray-500 mb-6 font-medium tracking-tight">{cert.organization}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 group-hover:border-gray-200 transition-colors">
                    <strong className="block text-gray-900 mb-1.5 text-xs uppercase tracking-widest font-bold opacity-60">인증 내용</strong>
                    <p className="text-gray-700 font-medium leading-relaxed">{cert.description}</p>
                  </div>
                  <div className={`bg-${cert.color}-50 p-5 rounded-2xl border border-${cert.color}-100 group-hover:border-${cert.color}-200 transition-colors`}>
                    <strong className="block text-gray-900 mb-1.5 text-xs uppercase tracking-widest font-bold opacity-60">의미</strong>
                    <p className={`text-${cert.color}-700 font-bold leading-relaxed`}>{cert.significance}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Technology Comparison */}
      <Section background="default">
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">타사 기술 비교</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Ecofade 솔루션 vs PLA/PBAT vs 산화분해
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto overflow-hidden rounded-3xl border border-[var(--border)] shadow-xl relative"
          {...fadeIn}
        >
          {/* Mobile Scroll Hint */}
          <div className="md:hidden absolute right-4 top-20 z-20 pointer-events-none animate-pulse">
            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-200">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[700px]">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-8 text-left text-lg font-semibold sticky left-0 bg-gray-900 z-30 shadow-[4px_0_10px_rgba(0,0,0,0.1)]">비교 항목</th>
                    <th className="p-8 text-center bg-green-700 text-white text-xl font-bold border-b-4 border-green-900 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-green-400"></div>
                      Ecofade 솔루션<br />
                      <span className="text-sm font-medium text-green-200">(당사)</span>
                    </th>
                    <th className="p-8 text-center text-lg font-semibold bg-gray-800">PLA/PBAT</th>
                    <th className="p-8 text-center text-lg font-semibold bg-gray-800">산화분해</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="group hover:bg-gray-50 transition-colors">
                      <td className="p-8 font-bold text-gray-900 border-b border-gray-100 sticky left-0 bg-white z-20 group-hover:bg-gray-50 shadow-[4px_0_10px_rgba(0,0,0,0.05)] transition-colors">
                        {row.category}
                      </td>
                      <td className="p-8 text-center bg-green-50 border-b border-green-100 group-hover:bg-green-100/50 transition-colors">
                        <span className="text-green-800 font-bold text-lg">{row.badp}</span>
                      </td>
                      <td className="p-8 text-center text-gray-600 border-b border-gray-100">
                        {row.pla}
                      </td>
                      <td className="p-8 text-center text-gray-500 border-b border-gray-100">
                        {row.oxo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:hidden bg-gray-900 py-3 px-4 text-center text-xs font-bold text-green-400 border-t border-gray-800 uppercase tracking-widest">
            옆으로 밀어서 비교하기
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="bg-green-50 p-8 rounded-2xl border border-green-100" variants={fadeIn}>
            <h4 className="text-xl font-bold text-green-800 mb-3">✓ Ecofade 솔루션</h4>
            <p className="text-green-700 leading-relaxed">
              상온 토양에서 완전 분해, 미세 플라스틱 Zero, 재활용 가능
            </p>
          </motion.div>
          <motion.div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100" variants={fadeIn}>
            <h4 className="text-xl font-bold text-yellow-800 mb-3">△ PLA/PBAT</h4>
            <p className="text-yellow-800 leading-relaxed">
              생분해는 되지만 특수 시설 필요, 높은 원가, 약한 물성
            </p>
          </motion.div>
          <motion.div className="bg-red-50 p-8 rounded-2xl border border-red-100" variants={fadeIn}>
            <h4 className="text-xl font-bold text-red-800 mb-3">✗ 산화분해</h4>
            <p className="text-red-800 leading-relaxed">
              진짜 분해 아님, 미세 플라스틱 대량 발생, EU 사용 금지
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Safety & Environment */}
      <Section background="muted">
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">안전성 검증</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-sm border border-[var(--border)]"
            {...fadeIn}
          >
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
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--border)]"
            {...fadeIn}
          >
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
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
