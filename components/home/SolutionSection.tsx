import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const SolutionSection = () => {
    return (
        <Section background="muted" className="relative overflow-hidden">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    EcoBio가 제안하는 생분해 솔루션
                </h2>
                <p className="text-lg text-[var(--muted-foreground)]">
                    고객의 니즈에 맞춘 최적의 생분해 솔루션을 제공합니다.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
                {/* SingSingFresh Solution */}
                <article className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border)]">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">SingSingFresh (싱싱프레)</h3>
                    <p className="text-[var(--muted-foreground)] mb-8">유통/리테일 파트너를 위한 친환경 완제품</p>

                    <ul className="space-y-3 mb-8">
                        {[
                            '멀칭필름 생분해성 인증 (EL 724)',
                            '기능성 필름 및 용기',
                            '농산물 저장·유통 포장제품',
                            '선도유지 지퍼백'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">✓</div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Link href="/solution/badp" className="block">
                        <Button className="w-full" variant="outline">자세히 보기</Button>
                    </Link>
                </article>

                {/* Ecofade Solution */}
                <article className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border)]">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">Ecofade (에코페이드)</h3>
                    <p className="text-[var(--muted-foreground)] mb-8">플라스틱 제조사를 위한 혁신 솔루션</p>

                    <ul className="space-y-3 mb-8">
                        {[
                            '플라스틱 생분해 첨가제',
                            '기존 생산 설비 및 금형 변경 불필요',
                            '최소한의 원가 상승으로 생분해 효과',
                            'ASTM, OECD, SGS 국제 인증 완료'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">✓</div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Link href="/solution/miao" className="block">
                        <Button className="w-full" variant="outline">자세히 보기</Button>
                    </Link>
                </article>
            </div>
        </Section>
    );
};
