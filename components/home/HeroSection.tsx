'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/images/hero-bg.png"
                        alt="Eco-friendly Background"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/80" />
            </div>

            <div className="container-width relative z-10 pt-20">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-[var(--foreground)] mb-8 leading-tight tracking-tight px-4 sm:px-0">
                            자연으로 돌아가는<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-emerald-600">
                                진짜 생분해 솔루션
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl lg:text-3xl text-[var(--muted-foreground)] mb-12 leading-relaxed max-w-2xl mx-auto px-6 sm:px-0"
                    >
                        기존 설비 그대로, 미세 플라스틱 Zero.<br />
                        지속 가능한 미래를 위한 가장 확실한 선택입니다.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center px-8 sm:px-0"
                    >
                        <Link href="/solution/badp" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:min-w-[220px] shadow-xl shadow-green-900/10 hover:shadow-green-900/20 transition-all duration-300">
                                SingSingFresh (싱싱프레)
                            </Button>
                        </Link>
                        <Link href="/solution/miao" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:min-w-[220px] bg-white/60 backdrop-blur-md border-[var(--border)] hover:bg-white/80 transition-all duration-300">
                                Ecofade (에코페이드)
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs font-medium text-[var(--muted-foreground)] tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-[var(--primary)] to-transparent" />
            </motion.div>
        </section>
    );
};
