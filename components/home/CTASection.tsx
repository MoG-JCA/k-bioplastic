'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const CTASection = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-green-700 to-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                ></motion.div>
            </div>

            <div className="container-width relative z-10 text-center text-white px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight"
                >
                    ESG 경영,<br className="md:hidden" /> 더 이상 미룰 수 없습니다
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-green-50 mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed"
                >
                    규제 대응부터 친환경 브랜드 이미지 구축까지,<br />
                    (주)에코바이오 전문가가 당신의 성공 파트너가 되어 드립니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="bg-white !text-green-700 hover:bg-green-50 border-none shadow-2xl px-12 py-8 text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            견적 및 샘플 문의하기
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
