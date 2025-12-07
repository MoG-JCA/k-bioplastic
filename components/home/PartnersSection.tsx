import { Section } from '@/components/ui/Section';

export const PartnersSection = () => {
    return (
        <Section background="muted">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">글로벌 파트너와 함께합니다</h2>
                <p className="text-[var(--muted-foreground)]">다양한 산업군의 리딩 기업들이 선택했습니다.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {['농협 하나로마트', 'Walmart', 'P&G', 'Disney', 'Costco', '대형마트', '글로벌 리테일', '제조업체'].map((partner, idx) => (
                    <div key={idx} className="bg-white h-24 rounded-xl shadow-sm flex items-center justify-center border border-[var(--border)] hover:border-[var(--primary)] transition-colors">
                        <span className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors">{partner}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};
