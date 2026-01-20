import Image from 'next/image';
import { Section } from '@/components/ui/Section';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-width relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">회사소개</h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            미세 플라스틱 없는 순환 경제,<br />
            <span className="font-semibold text-white">신선함을 지키는 기술</span>로 지속 가능한 미래를 만듭니다.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Section background="default">
        <h2 className="text-3xl font-bold mb-12 text-[var(--primary)]">CEO 인사말</h2>
        <div className="prose prose-lg max-w-none text-[var(--foreground)]">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">"우리는 포장 혁신을 넘어 내일의 시간을 팔고 있습니다"</h3>
          <p className="text-lg leading-relaxed mb-6">
            안녕하십니까, (주)에코바이오입니다.
          </p>
          <p className="leading-relaxed mb-6 text-gray-600">
            농산물과 식품의 선도유지는 생산자, 유통업자, 소비자 모두에게 가장 중요한 과제입니다.
            신선식품의 부패로 인한 손실은 매년 수조 원에 달하며, 이는 단순한 경제적 손실을 넘어
            음식물 쓰레기와 환경오염의 문제로 이어집니다.
          </p>
          <p className="leading-relaxed mb-6 text-gray-600">
            EcoBio는 이 문제에 대한 실질적인 해답을 제시합니다.
            <strong className="text-[var(--primary)]"> 선도유지 기능성 필름 기술</strong>을 통해 농산물과 식품의 신선도를 획기적으로 연장하고,
            동시에 <strong className="text-blue-600">생분해 소재</strong>를 적용하여 환경까지 보호하고 있습니다.
          </p>
          <p className="leading-relaxed mb-8 text-gray-600">
            싱싱프레 브랜드를 통해 가정에서, 선도유지 포장재를 통해 유통가에서,
            생분해 첨가제 기술을 통해 산업 현장에서,
            EcoBio는 신선함을 지키는 기술로 더 나은 미래를 만들어가겠습니다.
          </p>
        </div>
      </Section>

      {/* Company Profile Section */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--primary)]">Company Profile</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
              <div className="bg-gray-50 p-6 font-bold text-gray-700 md:col-span-1 border-b md:border-b-0 md:border-r border-gray-100 flex items-center">회사명</div>
              <div className="p-6 text-gray-800 md:col-span-2">(주)에코바이오</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
              <div className="bg-gray-50 p-6 font-bold text-gray-700 md:col-span-1 border-b md:border-b-0 md:border-r border-gray-100 flex items-center">설립일</div>
              <div className="p-6 text-gray-800 md:col-span-2">2024년 01월 10일</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100">
              <div className="bg-gray-50 p-6 font-bold text-gray-700 md:col-span-1 border-b md:border-b-0 md:border-r border-gray-100 flex items-center">사업부문</div>
              <div className="p-6 text-gray-800 md:col-span-2">생분해 필름제조 및 생분해 플라스틱 압축 필름</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gray-50 p-6 font-bold text-gray-700 md:col-span-1 border-r border-gray-100 flex items-center">주요상품</div>
              <div className="p-6 text-gray-800 md:col-span-2 space-y-2">
                <p>• 생분해 선도유지 필름/포장재/용기</p>
                <p>• 생분해 선도유지 지퍼백, 생분해 비닐백, 롤백, 위생장갑</p>
                <p>• 지자체 생분해 종량제봉투, 쇼핑백</p>
                <p>• 농업용 생분해 멀칭필름</p>
                <p>• 생분해 첨가제</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Major Brands Section */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">주요 브랜드</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            소비자와 산업 현장 모두를 위한 에코바이오의 브랜드 포트폴리오
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Brand 1: SingSingFresh */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--border)] flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-full h-48 bg-white rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative border border-gray-50">
              <Image
                src="/images/about/singsingfre_bi.png"
                alt="SingSingFresh Logo"
                fill
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">SingSingFresh (싱싱프레)</h3>
            <p className="text-green-600 font-medium mb-4">가정용 선도유지 전문 브랜드</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              "신선하고 생기 있게 오래오래"
              <br />
              냉장고 속 채소와 과일의 신선도를 지키는 스마트한 주방 생활의 시작입니다.
            </p>
            <ul className="text-left bg-gray-50 w-full p-4 rounded-xl space-y-2 text-sm text-gray-700">
              <li className="flex items-center"><span className="text-green-500 mr-2">●</span>선도유지 지퍼백/롤백</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">●</span>항균 위생장갑/수세미</li>
            </ul>
          </div>

          {/* Brand 2: Ecofade */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--border)] flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-full h-48 bg-white rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative border border-gray-50">
              <Image
                src="/images/about/ecofade_bi_01.png"
                alt="Ecofade Logo"
                fill
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ecofade Solution</h3>
            <p className="text-blue-600 font-medium mb-4">산업/농업용 생분해 솔루션</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              "자연에서 와서 자연으로 돌아가는"
              <br />
              미세 플라스틱 없는 친환경 산업 생태계를 구축하는 독보적인 기술 브랜드입니다.
            </p>
            <ul className="text-left bg-gray-50 w-full p-4 rounded-xl space-y-2 text-sm text-gray-700">
              <li className="flex items-center"><span className="text-blue-500 mr-2">●</span>산업용 스트레치 필름/포장재</li>
              <li className="flex items-center"><span className="text-blue-500 mr-2">●</span>농업용 멀칭 필름/배양토</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Certifications Status Section */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">인증 현황</h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            국내외 공인 기관이 검증한 안전성과 기술력
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[335/460] shadow-lg rounded-lg overflow-hidden bg-white">
                <Image src="/images/about/cert_el724.jpg" alt="환경표지 인증서" fill className="object-contain" />
              </div>
              <p className="mt-4 font-medium text-gray-700">환경표지 인증서 (EL724)</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[335/460] shadow-lg rounded-lg overflow-hidden bg-white">
                <Image src="/images/about/cert_patent.jpg" alt="특허증" fill className="object-contain" />
              </div>
              <p className="mt-4 font-medium text-gray-700">특허증 (생분해성 필름 제조)</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[335/460] shadow-lg rounded-lg overflow-hidden bg-white">
                <Image src="/images/about/cert_rnd.jpg" alt="연구개발전담부서 인정서" fill className="object-contain" />
              </div>
              <p className="mt-4 font-medium text-gray-700">연구개발전담부서 인정서</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Us Section */}
      <Section background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            왜 (주)에코바이오인가?
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            기존 생분해의 한계를 넘어선 4세대 솔루션
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:border-red-200 transition-colors group">
            <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1세대: 전분 기반</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 물에 녹을 뿐, 진짜 분해 아님</li>
              <li>• 미세 플라스틱 유발</li>
              <li>• 내구성 부족</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:border-orange-200 transition-colors group">
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🚫</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2세대: 산화분해</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 빛과 열로 쪼개질 뿐</li>
              <li>• 미세 플라스틱 대량 발생</li>
              <li>• EU 사용 금지</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border)] hover:border-yellow-200 transition-colors group">
            <div className="bg-yellow-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3세대: PLA/PBAT</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 58℃ 특수 시설 필요</li>
              <li>• 높은 원가 (2-3배)</li>
              <li>• 설비 교체 필요</li>
            </ul>
          </div>
        </div>

        {/* Our Solution */}
        <div className="max-w-5xl mx-auto bg-[var(--primary)] rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <Image
            src="/images/about-hero.png"
            alt="Circular Economy"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-xl mb-6 backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">4세대: EcoBio 솔루션</h3>
              <p className="text-green-100 text-lg">자연에서 와서 자연으로 돌아가는 완벽한 순환</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                '상온 토양에서 100% 생분해 (EL 724 인증)',
                '미세 플라스틱 Zero',
                '기존 플라스틱과 동일한 물성',
                '기존 설비 그대로 사용',
                '원가 부담 최소화',
                '100% 재활용 가능'
              ].map((item, i) => (
                <div key={i} className="flex items-center bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                  <span className="text-green-300 mr-3 text-xl">✓</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">비전 & 미션</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-[var(--border)] text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MISSION</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              모든 식품이 가장 신선하고 안전하게<br />
              소비될 수 있도록 포장 기술을 혁신
            </p>
          </div>

          <div className="bg-[var(--primary)] p-10 rounded-3xl shadow-lg text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">VISION</h3>
            <p className="text-lg text-green-50 leading-relaxed font-medium">
              Fresh-keeping + Sustainability를 결합한<br />
              글로벌 패키징 솔루션 리더로 성장
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
