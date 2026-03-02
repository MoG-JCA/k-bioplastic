'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const SolutionSection = () => {
    return (
        <Section background="muted" className="relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20 relative z-10 px-4"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    EcoBio가 제안하는 <span className="text-[var(--primary)]">생분해 솔루션</span>
                </h2>
                <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
                    단순한 플라스틱 대체를 넘어,<br className="md:hidden" /> 고객의 비즈니스 가치를 높이는 기술을 경험하세요.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto relative z-10 px-4">
                {/* SingSingFresh Solution */}
                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group bg-white p-12 rounded-[3rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 border border-gray-100"
                >
                    <div className="w-20 h-20 rounded-3xl bg-green-100 text-green-700 flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform duration-500">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4">SingSingFresh (싱싱프레)</h3>
                    <p className="text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed font-medium">유통/리테일 파트너를 위한<br />친환경 완제품 브랜드</p>

                    <ul className="space-y-4 mb-12">
                        {[
                            '멀칭필름 생분해성 인증 (EL 724)',
                            '기능성 필름 및 용기',
                            '농산물 저장·유통 포장제품',
                            '선도유지 지퍼백'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold">
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Link href="/solution/badp" className="block mt-auto">
                        <Button className="w-full py-7 text-lg rounded-2xl shadow-lg shadow-green-900/10" variant="outline">자세히 보기</Button>
                    </Link>
                </motion.article>

                {/* Ecofade Solution */}
                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                    className="group bg-white p-12 rounded-[3rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-gray-100"
                >
                    <div className="w-20 h-20 rounded-3xl bg-blue-100 text-blue-700 flex items-center justify-center mb-10 group-hover:-rotate-6 transition-transform duration-500">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4">Ecofade (에코페이드)</h3>
                    <p className="text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed font-medium">플라스틱 제조사를 위한<br />혁신적인 생분해 첨가제 솔루션</p>

                    <ul className="space-y-4 mb-12">
                        {[
                            '플라스틱 생분해 첨가제',
                            '기존 생산 설비 및 금형 변경 불필요',
                            '최소한의 원가 상승으로 생분해 효과',
                            'ASTM, OECD, SGS 국제 인증 완료'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold">
                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Link href="/solution/miao" className="block mt-auto">
                        <Button className="w-full py-7 text-lg rounded-2xl shadow-lg shadow-blue-900/10" variant="outline">자세히 보기</Button>
                    </Link>
                </motion.article>
            </div>
        </Section>
    );
};
