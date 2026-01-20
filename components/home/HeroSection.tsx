import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Eco-friendly Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/80" />
            </div>

            <div className="container-width relative z-10 pt-20">
                <div className="text-center max-w-4xl mx-auto">

                    <h1 className="text-5xl md:text-7xl font-bold font-display text-[var(--foreground)] mb-8 leading-tight tracking-tight">
                        자연으로 돌아가는<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-emerald-600">
                            진짜 생분해 솔루션
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-12 leading-relaxed max-w-2xl mx-auto">
                        기존 설비 그대로, 미세 플라스틱 Zero.<br />
                        지속 가능한 미래를 위한 가장 확실한 선택입니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/solution/badp">
                            <Button size="lg" className="min-w-[200px] shadow-lg shadow-green-900/20">
                                SingSingFresh (싱싱프레)
                            </Button>
                        </Link>
                        <Link href="/solution/miao">
                            <Button variant="outline" size="lg" className="min-w-[200px] bg-white/50 backdrop-blur-sm">
                                Ecofade (에코페이드)
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
