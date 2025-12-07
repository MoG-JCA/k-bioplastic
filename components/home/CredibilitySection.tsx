import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const CredibilitySection = () => {
    return (
        <Section background="default">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    데이터로 증명하는 기술력
                </h2>
                <p className="text-lg text-[var(--muted-foreground)]">
                    국내외 공인 기관의 엄격한 테스트를 통과했습니다.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                    { title: 'EL 724', desc: '환경부 친환경 인증\n(생분해성 멀칭필름, 생분해성 농업용 필름)', color: 'text-green-700', bg: 'bg-green-50' },
                    { title: 'ASTM', desc: 'D5511 국제 표준\n생분해 인증', color: 'text-blue-700', bg: 'bg-blue-50' },
                    { title: 'OECD', desc: '207/208 독성 테스트\n통과', color: 'text-purple-700', bg: 'bg-purple-50' },
                    { title: 'SGS', desc: '중금속 안전성\n인증 완료', color: 'text-orange-700', bg: 'bg-orange-50' },
                ].map((item, i) => (
                    <div key={i} className={`${item.bg} p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300`}>
                        <div className={`text-3xl md:text-4xl font-bold ${item.color} mb-3`}>{item.title}</div>
                        <p className="text-sm text-gray-600 whitespace-pre-line font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/technology">
                    <Button variant="ghost" className="gap-2">
                        기술 & 인증 자세히 보기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                </Link>
            </div>
        </Section>
    );
};
