'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('general'); // general, badp, miao
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    // BADP specific
    products: [] as string[],
    specifications: '',
    quantity: '',
    // MIAO specific
    resinType: '',
    mainProducts: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const badpProducts = [
    '롤백 (Roll Bag)',
    '위생백 (Garbage Bag)',
    '위생장갑 (Disposable Gloves)',
    '지퍼백 (Zipper Bag)',
    '선도유지 기능성 지퍼백',
  ];

  const resinTypes = [
    'PE (폴리에틸렌)',
    'PP (폴리프로필렌)',
    'PET (폴리에틸렌 테레프탈레이트)',
    'PS (폴리스티렌)',
    'PVC (폴리염화비닐)',
    'ABS',
    '기타',
  ];

  const handleProductToggle = (product: string) => {
    setFormData(prev => {
      const products = prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product];
      return { ...prev, products };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inquiryType, ...formData }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('문의 전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 pt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-2xl border border-gray-100">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">문의가 접수되었습니다!</h2>
            <p className="text-xl text-gray-600 mb-8">
              영업일 기준 1-2일 내로 담당자가 연락드리겠습니다.<br />
              감사합니다.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setInquiryType('general');
                setFormData({
                  company: '',
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                  products: [],
                  specifications: '',
                  quantity: '',
                  resinType: '',
                  mainProducts: '',
                });
              }}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

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

      <Section background="default">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 text-green-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">본사</p>
                    <p className="text-gray-600">경기도 남양주시 다산지금로202<br />현대테라타워 B동 9층 69호</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 text-green-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">전화</p>
                    <p className="text-gray-600">031-557-9153</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 text-green-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">이메일</p>
                    <p className="text-gray-600">info@ecobio.co.kr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center border border-gray-200">
              <span className="text-gray-500 font-medium">지도 API 영역</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-[var(--border)]">
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">문의 유형</label>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setInquiryType('general')}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${inquiryType === 'general'
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  일반 문의
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('badp')}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${inquiryType === 'badp'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-green-50 text-green-700 hover:bg-green-100'
                    }`}
                >
                  BADP 견적/샘플
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('miao')}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${inquiryType === 'miao'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                >
                  MIAO 견적/샘플
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    회사명 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="회사명을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    담당자명 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="담당자 성함을 입력하세요"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    이메일 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="example@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    연락처 <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              {/* BADP Specific Fields */}
              {inquiryType === 'badp' && (
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 space-y-6">
                  <h4 className="font-bold text-green-800 flex items-center">
                    <span className="mr-2">🌱</span> BADP 상세 요청
                  </h4>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      필요 제품 (다중 선택 가능)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {badpProducts.map((product) => (
                        <label key={product} className="flex items-center p-3 bg-white rounded-lg border border-green-200 cursor-pointer hover:border-green-400 transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.products.includes(product)}
                            onChange={() => handleProductToggle(product)}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500 border-gray-300 mr-3"
                          />
                          <span className="text-gray-700 text-sm">{product}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        필요 규격
                      </label>
                      <input
                        type="text"
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="예: 30cm x 40cm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        예상 수량
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="예: 월 1,000박스"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* MIAO Specific Fields */}
              {inquiryType === 'miao' && (
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 space-y-6">
                  <h4 className="font-bold text-blue-800 flex items-center">
                    <span className="mr-2">🧪</span> MIAO 상세 요청
                  </h4>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      적용 대상 플라스틱
                    </label>
                    <select
                      name="resinType"
                      value={formData.resinType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">선택하세요</option>
                      {resinTypes.map((resin) => (
                        <option key={resin} value={resin}>{resin}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      주요 생산 제품
                    </label>
                    <input
                      type="text"
                      name="mainProducts"
                      value={formData.mainProducts}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="예: 쇼핑백, 포장재"
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  문의 내용 <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                  placeholder="문의하실 내용을 자세히 적어주세요."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 w-5 h-5 text-[var(--primary)] rounded focus:ring-[var(--primary)] border-gray-300"
                />
                <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                  <span className="text-[var(--primary)] font-semibold">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                </label>
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-xl text-lg font-bold text-white transition-all transform hover:scale-[1.02] shadow-lg ${inquiryType === 'badp' ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' :
                  inquiryType === 'miao' ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                    'bg-gray-900 hover:bg-gray-800'
                  }`}
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
