'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut' }
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

export default function Cases() {
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
            제품 및 적용사례
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed"
          >
            자연에서 와서 자연으로 돌아가는<br />
            <span className="font-semibold text-white">EcoBio의 실제 제품 라인업</span>
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <Section background="default">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">SingSingFresh (싱싱프레)</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            가정에서 만나는 스마트한 선도유지 솔루션
          </p>
        </motion.div>

        {/* Product 1: Fresh-keeping Zipper Bag */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white group"
          >
            <Image
              src="/images/products/page_16_img_1.jpeg"
              alt="선도유지 지퍼백"
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">선도유지 지퍼백</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              냉장고 속 과일과 야채를 더 오래오래! 에틸렌 가스를 흡착하여 숙성을 지연시키는 스마트한 기능성 지퍼백입니다.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <strong>용도:</strong> 육류/해산물 냉동보관, 김치 장기 보관, 여행 시 소지품 보관
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <strong>친환경:</strong> 100% 생분해 및 재활용 가능, 퇴비화 인증
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Product 2: Roll Bag */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">생분해 롤백 / 위생백</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              일반 플라스틱과 달리 자연 분해가 가능하여 매립 시 토양 오염을 줄입니다. 냉장/냉동 보관 시 결로 현상이 없습니다.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <strong>특징:</strong> 17x25cm ~ 30x40cm 다양한 규격
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <strong>활용:</strong> 야채/과일 신선 보관, 음식물 건조 방지, 식품 소분
              </li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative h-96 rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white group"
          >
            <Image
              src="/images/products/page_17_img_1.jpeg"
              alt="생분해 롤백"
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Product 3: Gloves & Scrubber */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white group"
          >
            <Image
              src="/images/products/page_18_img_7.jpeg"
              alt="위생장갑 및 수세미"
              fill
              className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">생분해 다용도 항균 수세미</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Biotite 항균 기능성 성분을 함유한 자연 분해 수세미입니다. 사용 후에도 자연으로 돌아가는 진정한 친환경 제품입니다.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <strong>항균력:</strong> 99.9% 항균, 지속 세척력 우수
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <strong>편의성:</strong> 한 장씩 뜯어쓰는 편리함, 위생적인 관리
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Industrial Section */}
      <Section background="muted">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ecofade Analysis (산업/농업 솔루션)</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            농식품부터 유통까지, B2B Fresh-keeping Solution
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {/* Vacuum Fish Packing */}
          <motion.div variants={staggerChild} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-50">
            <div className="relative h-64 bg-white rounded-xl mb-6 overflow-hidden border border-gray-100">
              <Image
                src="/images/products/page_19_img_1.jpeg"
                alt="선도유지 포장재"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">선도유지 포장재</h3>
            <p className="text-gray-600 mb-4">
              에틸렌 가스 제어 및 최적의 MA 환경 조성. 농산물 수출용(20~30일 선도 유지) 및 신선편이식품 포장에 최적화되었습니다.
            </p>
          </motion.div>

          {/* Industrial Bags */}
          <motion.div variants={staggerChild} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-50">
            <div className="relative h-64 bg-white rounded-xl mb-6 overflow-hidden border border-gray-100">
              <Image
                src="/images/products/page_22_img_6.jpeg"
                alt="생분해 비닐봉투"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">생분해 비닐봉투</h3>
            <p className="text-gray-600 mb-4">
              튼튼한 인장강도와 사용 편리성. 쇼핑백, 지자체 종량제 봉투 등 다양한 분야에 적용 가능하며 100% 생분해됩니다.
            </p>
          </motion.div>

          {/* Agricultural Film */}
          <motion.div variants={staggerChild} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-50">
            <div className="relative h-64 bg-white rounded-xl mb-6 overflow-hidden border border-gray-100">
              <Image
                src="/images/products/page_23_img_6.jpeg"
                alt="농업용 멀칭필름"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">농업용 멀칭필름</h3>
            <p className="text-gray-600 mb-4">
              수확 후 수거가 필요 없는 완전 생분해 필름. 탁월한 내열성과 내구성으로 작물 생육을 돕고 토양을 보호합니다.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              기능성, 안전성, 환경성의 완벽한 균형
            </h2>
            <p className="text-xl mb-8">
              EcoBio 솔루션으로 귀사의 제품 가치를 높이세요.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-700 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              제품 문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
