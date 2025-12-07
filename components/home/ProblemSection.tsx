import { Section } from '@/components/ui/Section';

export const ProblemSection = () => {
    return (
        <Section background="default">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    아직도 <span className="text-red-500">값비싼 PLA/산화분해 플라스틱</span>을 사용하고 계십니까?
                </h2>
                <p className="text-lg text-[var(--muted-foreground)]">
                    PLA와 산화분해 플라스틱의 한계를 넘어섭니다.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100 hover:border-red-200 transition-colors">
                    <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
                        <span className="text-3xl">⚠️</span> PLA/PBAT의 한계
                    </h3>
                    <ul className="space-y-4">
                        {[
                            '58℃ 특정 퇴비화 시설에서만 분해됨',
                            '기존 플라스틱 대비 2-3배 높은 원가',
                            '약한 물성으로 인한 찢어짐 발생',
                            '생산 설비 전면 교체 필요'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 hover:border-orange-200 transition-colors">
                    <h3 className="text-2xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                        <span className="text-3xl">🚫</span> 산화분해의 문제
                    </h3>
                    <ul className="space-y-4">
                        {[
                            '빛과 열로 쪼개질 뿐, 완전히 분해되지 않음',
                            '미세 플라스틱 유발로 환경 오염 가중',
                            'EU 등 선진국에서 사용 금지 추세',
                            '지속적인 그린워싱 논란'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};
