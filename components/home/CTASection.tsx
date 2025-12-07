import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--primary)]">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container-width relative z-10 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    ESG 경영, 더 이상 미룰 수 없습니다
                </h2>
                <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
                    규제 대응부터 친환경 브랜드 이미지 구축까지,<br />
                    (주)에코바이오 전문가가 도와드리겠습니다.
                </p>
                <Link href="/contact">
                    <Button size="lg" className="bg-white !text-[var(--primary)] hover:bg-green-50 border-none shadow-xl">
                        견적 및 샘플 문의하기
                    </Button>
                </Link>
            </div>
        </section>
    );
};
