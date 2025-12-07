import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const products = [
    {
        id: 1,
        name: '친환경 쇼핑백',
        description: '100% 생분해성 소재로 제작된 쇼핑백으로, 사용 후 자연으로 돌아갑니다.',
        image: '/images/badp-bag.png',
        tag: 'Retail',
    },
    {
        id: 2,
        name: '농업용 멀칭 필름',
        description: '수확 후 수거할 필요 없이 토양에 그대로 갈아엎는 생분해 필름입니다.',
        image: '/images/badp-film.png',
        tag: 'Agriculture',
    },
    {
        id: 3,
        name: '생분해 커틀러리',
        description: '플라스틱의 편리함은 그대로, 환경 호르몬 걱정 없는 안심 식기입니다.',
        image: '/images/miao-pellets.png', // Using pellets as placeholder for now or generic
        tag: 'Food Service',
    },
];

export function ProductShowcase() {
    return (
        <Section background="default">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    실제 적용 사례
                </h2>
                <p className="text-lg text-[var(--muted-foreground)]">
                    다양한 산업 분야에서 이미 에코바이오의 기술이 사용되고 있습니다.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border)]">
                        <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">
                                {product.tag}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{product.name}</h3>
                            <p className="text-[var(--muted-foreground)] mb-6 line-clamp-2">
                                {product.description}
                            </p>
                            <Link href={`/cases`}>
                                <Button variant="ghost" className="w-full justify-between group-hover:text-[var(--primary)]">
                                    자세히 보기
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
