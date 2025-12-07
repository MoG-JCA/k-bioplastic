import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '문의하기',
  description: '제품 문의, 견적 요청, 파트너십 제안 등 궁금하신 점을 남겨주세요. (주)에코바이오 전문가가 신속하게 답변 드립니다.',
};

export default function Contact() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">문의하기</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            제품 문의, 견적 요청, 파트너십 제안 등<br />
            궁금하신 점을 남겨주시면 신속하게 답변 드리겠습니다.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
