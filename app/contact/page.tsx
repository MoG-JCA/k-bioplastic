'use client';

import { useState } from 'react';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 API로 전송
    console.log('Form submitted:', { inquiryType, ...formData });
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-2xl">
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
                setInquiryType('');
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
              className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
            >
              새로운 문의하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">문의하기</h1>
          <p className="text-2xl">견적/샘플 문의 및 기술 상담</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">이메일</h3>
                <p className="text-gray-600">info@ecobio.co.kr</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">전화</h3>
                <p className="text-gray-600">TEL: 031-557-9153</p>
                <p className="text-gray-600">FAX: 070-8153-9153</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">운영 시간</h3>
                <p className="text-gray-600">평일 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">문의 양식</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  문의 유형 <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="badp"
                      checked={inquiryType === 'badp'}
                      onChange={(e) => setInquiryType(e.target.value)}
                      required
                      className="mt-1 mr-3"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">생분해 완제품(BADP) 구매/견적 문의</span>
                      <p className="text-sm text-gray-600">롤백, 지퍼백, 위생장갑 등 완제품 구매</p>
                    </div>
                  </label>

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="miao"
                      checked={inquiryType === 'miao'}
                      onChange={(e) => setInquiryType(e.target.value)}
                      required
                      className="mt-1 mr-3"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">생분해 첨가제(MIAO) 샘플/기술 문의</span>
                      <p className="text-sm text-gray-600">첨가제 샘플, 기술 적용 상담</p>
                    </div>
                  </label>

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="other"
                      checked={inquiryType === 'other'}
                      onChange={(e) => setInquiryType(e.target.value)}
                      required
                      className="mt-1 mr-3"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">기타 파트너십 문의</span>
                      <p className="text-sm text-gray-600">투자, 제휴, 기타 문의</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Common Fields */}
              {inquiryType && (
                <>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="이름을 입력하세요"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="email@example.com"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </div>

                  {/* BADP Specific Fields */}
                  {inquiryType === 'badp' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                          필요 제품 (다중 선택 가능) <span className="text-red-600">*</span>
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {badpProducts.map((product) => (
                            <label key={product} className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.products.includes(product)}
                                onChange={() => handleProductToggle(product)}
                                className="mr-2"
                              />
                              <span className="text-gray-700">{product}</span>
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="예: 30cm x 40cm"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            필요 수량
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="예: 월 1,000박스"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* MIAO Specific Fields */}
                  {inquiryType === 'miao' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          적용 대상 플라스틱 <span className="text-red-600">*</span>
                        </label>
                        <select
                          name="resinType"
                          value={formData.resinType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">선택하세요</option>
                          {resinTypes.map((resin) => (
                            <option key={resin} value={resin}>{resin}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          주요 생산 제품 <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="mainProducts"
                          value={formData.mainProducts}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="예: 쇼핑백, 포장재"
                        />
                      </div>
                    </>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      상세 문의 내용
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="추가로 문의하실 내용을 입력하세요"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-green-700 to-blue-700 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-green-800 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
                    >
                      문의하기
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
