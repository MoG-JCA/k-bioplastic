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
            <span className="font-semibold text-white">(주)에코바이오</span>가 만들어갑니다.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Section background="default">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-[var(--primary)]">CEO 인사말</h2>
          <div className="prose prose-lg max-w-none text-[var(--foreground)]">
            <p className="text-xl leading-relaxed mb-8 font-medium">
              안녕하십니까. (주)에코바이오 대표이사입니다.
            </p>
            <p className="leading-relaxed mb-6 text-[var(--muted-foreground)]">
              우리는 <strong className="text-[var(--primary)]">진짜 생분해 기술</strong>로 지구를 보호하고,
              기업의 지속 가능한 성장을 함께 만들어가는 4세대 생분해 기술 전문 기업입니다.
            </p>
            <p className="leading-relaxed mb-6 text-[var(--muted-foreground)]">
              기존의 PLA나 산화분해 플라스틱은 실제 자연 환경에서 분해되지 않거나,
              미세 플라스틱을 유발하여 더 큰 환경 문제를 야기해왔습니다.
              우리는 이러한 문제를 근본적으로 해결하기 위해,
              <strong className="text-blue-600">상온 토양에서 100% 생분해</strong>되는
              혁신적인 기술을 개발했습니다.
            </p>
            <p className="leading-relaxed text-[var(--muted-foreground)]">
              우리의 미션은 단순합니다. <strong>미세 플라스틱 Zero, 진짜 순환 경제</strong>를 실현하는 것입니다.
              귀사와 함께 지속 가능한 미래를 만들어가겠습니다.
            </p>
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

      {/* Company Values */}
      <Section background="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">우리의 핵심 가치</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: '진정성', desc: '그린워싱이 아닌,\n데이터와 인증으로 증명하는 진짜 기술', icon: '🌱', color: 'bg-green-50 text-green-700' },
            { title: '혁신', desc: '기존 생분해의 한계를 뛰어넘는\n4세대 기술', icon: '💡', color: 'bg-blue-50 text-blue-700' },
            { title: '파트너십', desc: '고객의 성공과 지구의 미래를\n함께 만들어갑니다', icon: '🤝', color: 'bg-purple-50 text-purple-700' },
          ].map((item, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-white border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto text-3xl ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">{item.title}</h3>
              <p className="text-[var(--muted-foreground)] whitespace-pre-line leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
