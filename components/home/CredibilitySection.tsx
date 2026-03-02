'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const CredibilitySection = () => {
    return (
        <Section background="default">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 px-4"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                    데이터로 증명하는 <span className="text-blue-600">기술력</span>
                </h2>
                <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
                    국내외 공인 기관의 엄격한 테스트를 통과하여<br className="hidden md:block" /> 세계 수준의 생분해 기술력을 인정받았습니다.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {[
                    { title: 'EL 724', desc: '환경부 친환경 인증\n(생분해성 멀칭필름)', color: 'text-green-700', bg: 'bg-green-50/50', border: 'border-green-100' },
                    { title: 'ASTM', desc: 'D5511 국제 표준\n생분해 인증', color: 'text-blue-700', bg: 'bg-blue-50/50', border: 'border-blue-100' },
                    { title: 'OECD', desc: '207/208 독성 테스트\n통과', color: 'text-purple-700', bg: 'bg-purple-50/50', border: 'border-purple-100' },
                    { title: 'SGS', desc: '중금속 안전성\n인증 완료', color: 'text-orange-700', bg: 'bg-orange-50/50', border: 'border-orange-100' },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className={`${item.bg} ${item.border} border p-8 md:p-10 rounded-[2rem] text-center transition-all duration-300 shadow-sm hover:shadow-md`}
                    >
                        <div className={`text-3xl md:text-4xl font-bold ${item.color} mb-4 tracking-tighter`}>{item.title}</div>
                        <p className="text-sm md:text-base text-gray-600 whitespace-pre-line font-semibold leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mt-16"
            >
                <Link href="/technology">
                    <Button variant="ghost" className="gap-3 text-lg font-bold group px-8 py-6 rounded-2xl hover:bg-gray-50">
                        기술 & 인증 자세히 보기
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                </Link>
            </motion.div>
        </Section>
    );
};
