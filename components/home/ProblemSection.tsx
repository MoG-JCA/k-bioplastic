'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

export const ProblemSection = () => {
    return (
        <Section background="default">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 px-4"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                    아직도 <span className="text-red-500 underline decoration-red-200 decoration-4 underline-offset-8">값비싼 PLA/산화분해 플라스틱</span>을<br className="hidden md:block" /> 사용하고 계십니까?
                </h2>
                <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
                    기존 생분해 소재의 치명적인 한계와<br className="md:hidden" /> 환경 오염의 위험성을 확인하세요.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {/* PLA/PBAT Issue Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-red-50/40 p-10 md:p-12 rounded-[2.5rem] border border-red-100/60 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500 group"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                            ⚠️
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-red-800">PLA/PBAT의 한계</h3>
                    </div>
                    <ul className="space-y-5">
                        {[
                            '58℃ 특정 퇴비화 시설에서만 분해됨',
                            '기존 플라스틱 대비 2-3배 높은 원가',
                            '약한 물성으로 인한 찢어짐 발생',
                            '생산 설비 전면 교체 필요'
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="flex items-start gap-4 text-gray-700 text-lg"
                            >
                                <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="font-medium">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Oxo-degradable Issue Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-orange-50/40 p-10 md:p-12 rounded-[2.5rem] border border-orange-100/60 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 group"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                            🚫
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-orange-800">산화분해의 문제</h3>
                    </div>
                    <ul className="space-y-5">
                        {[
                            '빛과 열로 쪼개질 뿐, 완전히 분해되지 않음',
                            '미세 플라스틱 유발로 환경 오염 가중',
                            'EU 등 선진국에서 사용 금지 추세',
                            '지속적인 그린워싱 논란'
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + (i * 0.1) }}
                                className="flex items-start gap-4 text-gray-700 text-lg"
                            >
                                <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="font-medium">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};
