import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { ProductShowcase } from '@/components/ProductShowcase';
import { NewsSection } from '@/components/NewsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Eco-friendly Background"
            fill
            className="object-cover opacity-40"
            priority
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
                  생분해 생활솔루션 (유통/리테일)
                </Button>
              </Link>
              <Link href="/solution/miao">
                <Button variant="outline" size="lg" className="min-w-[200px] bg-white/50 backdrop-blur-sm">
                  생분해 플라스틱솔루션 (플라스틱 제조사)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
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

      {/* Solution Section */}
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
          <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border)]">
            <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">EcoBio 생분해 생활솔루션</h3>
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
          </div>

          {/* Ecofade Solution */}
          <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border)]">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">Ecofade 생분해 플라스틱솔루션</h3>
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
          </div>
        </div>
      </Section>

      {/* Product Showcase Section */}
      <ProductShowcase />

      {/* Credibility Section */}
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

      {/* Partners Section */}
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

      {/* News Section */}
      <NewsSection />

      {/* CTA Section */}
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
    </div>
  );
}
