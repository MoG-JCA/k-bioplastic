'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/Section';

// Shared Zod schemas for client-side validation
const baseSchema = z.object({
    company: z.string().min(1, "회사명을 입력해주세요."),
    name: z.string().min(1, "담당자명을 입력해주세요."),
    email: z.string().email("유효한 이메일 주소를 입력해주세요."),
    phone: z.string().regex(/^[\d-]{9,15}$/, "유효한 연락처를 입력해주세요."),
    message: z.string().min(5, "문의 내용을 5자 이상 입력해주세요."),
    privacy: z.boolean().refine((val) => val === true, {
        message: "개인정보 수집 및 이용에 동의해야 합니다.",
    }),
});

const badpSchema = baseSchema.extend({
    inquiryType: z.literal("badp"),
    products: z.array(z.string()).min(1, "최소 하나 이상의 제품을 선택해주세요."),
    specifications: z.string().optional(),
    quantity: z.string().optional(),
});

const miaoSchema = baseSchema.extend({
    inquiryType: z.literal("miao"),
    resinType: z.string().min(1, "적용 대상 플라스틱을 선택해주세요."),
    mainProducts: z.string().min(1, "주요 생산 제품을 입력해주세요."),
});

const generalSchema = baseSchema.extend({
    inquiryType: z.literal("general"),
});

const contactFormSchema = z.discriminatedUnion("inquiryType", [
    generalSchema,
    badpSchema,
    miaoSchema,
]);

export function ContactForm() {
    const [inquiryType, setInquiryType] = useState<any>('general'); // general, badp, miao
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
        // Consent
        privacy: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

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

    const validateForm = () => {
        const result = contactFormSchema.safeParse({ inquiryType, ...formData });
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            // Correct way to extract Zod errors
            result.error.issues.forEach((err) => {
                if (err.path[0]) {
                    fieldErrors[err.path[0] as string] = err.message;
                }
            });
            setErrors(fieldErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const handleProductToggle = (product: string) => {
        setFormData(prev => {
            const products = prev.products.includes(product)
                ? prev.products.filter(p => p !== product)
                : [...prev.products, product];
            return { ...prev, products };
        });
        if (errors.products) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs.products;
                return newErrs;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
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
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const data = await response.json();
                let errorMessage = data.error || '알 수 없는 오류가 발생했습니다.';

                if (data.details?.fieldErrors) {
                    const fieldErrors = Object.entries(data.details.fieldErrors)
                        .map(([key, msgs]) => `• ${key}: ${(msgs as any[]).join(', ')}`)
                        .join('\n');
                    errorMessage += `\n\n[상세 오류]\n${fieldErrors}`;
                }

                alert(`문의 전송에 실패했습니다.\n${errorMessage}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: val
        }));

        if (errors[name]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center pt-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white p-12 rounded-2xl shadow-2xl border border-gray-100">
                        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">문의가 성공적으로 접수되었습니다!</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            내용을 확인하여 영업일 기준 1-2일 내로<br />
                            담당자가 신속하게 연락드리겠습니다. 감사합니다.
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
                                    privacy: false,
                                });
                                setErrors({});
                            }}
                            className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            새 문의 작성하기
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Section background="default">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-8">
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gray-900">연락처 정보</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-xl mr-4 text-green-700 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">본사</p>
                                    <p className="text-gray-600 leading-relaxed">경기도 남양주시 다산지금로202<br />현대테라타워 B동 9층 69호</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-xl mr-4 text-green-700 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">전화</p>
                                    <p className="text-gray-600">031-557-9153</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-xl mr-4 text-green-700 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">이메일</p>
                                    <p className="text-gray-600">info@ecofade.co.kr</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-50 rounded-2xl h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 p-6 text-center">
                        <div className="text-gray-400 mb-2">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                        </div>
                        <span className="text-gray-500 font-medium">지도 API 준비 중입니다.</span>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100">
                    <div className="mb-10">
                        <label className="block text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">문의 유형 선택</label>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { id: 'general', label: '일반 문의', color: 'bg-gray-900', active: 'bg-gray-900 text-white shadow-lg ring-2 ring-offset-2 ring-gray-900' },
                                { id: 'badp', label: '생분해 생활솔루션', color: 'bg-green-600', active: 'bg-green-600 text-white shadow-lg ring-2 ring-offset-2 ring-green-600' },
                                { id: 'miao', label: '생분해 플라스틱솔루션', color: 'bg-blue-600', active: 'bg-blue-600 text-white shadow-lg ring-2 ring-offset-2 ring-blue-600' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => {
                                        setInquiryType(tab.id);
                                        setErrors({});
                                    }}
                                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${inquiryType === tab.id
                                        ? tab.active
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    회사명 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-xl border ${errors.company ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-gray-50/50`}
                                    placeholder="회사명을 입력하세요"
                                />
                                {errors.company && <p className="text-red-500 text-xs font-medium ml-1">{errors.company}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    담당자명 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-xl border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-gray-50/50`}
                                    placeholder="담당자 성함을 입력하세요"
                                />
                                {errors.name && <p className="text-red-500 text-xs font-medium ml-1">{errors.name}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    이메일 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-gray-50/50`}
                                    placeholder="example@company.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs font-medium ml-1">{errors.email}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    연락처 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-xl border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-gray-50/50`}
                                    placeholder="010-1234-5678"
                                />
                                {errors.phone && <p className="text-red-500 text-xs font-medium ml-1">{errors.phone}</p>}
                            </div>
                        </div>

                        {/* BADP Specific Fields */}
                        {inquiryType === 'badp' && (
                            <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                <h4 className="font-bold text-green-800 flex items-center text-base">
                                    <span className="bg-green-100 p-1.5 rounded-lg mr-2">🌱</span> 생분해 생활솔루션 상세 요청
                                </h4>
                                <div className="space-y-3">
                                    <label className="block text-sm font-bold text-gray-900">
                                        필요 제품 (다중 선택) <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {badpProducts.map((product) => (
                                            <label
                                                key={product}
                                                className={`flex items-center p-3.5 rounded-xl border transition-all cursor-pointer ${formData.products.includes(product)
                                                    ? 'bg-green-600 border-green-600 text-white shadow-md'
                                                    : 'bg-white border-green-200 text-gray-700 hover:border-green-400'
                                                    }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={formData.products.includes(product)}
                                                    onChange={() => handleProductToggle(product)}
                                                    className="sr-only"
                                                />
                                                <div className={`w-5 h-5 rounded border mr-3 flex items-center justify-center transition-colors ${formData.products.includes(product) ? 'bg-white border-white' : 'bg-gray-50 border-green-200'
                                                    }`}>
                                                    {formData.products.includes(product) && (
                                                        <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="text-sm font-semibold">{product}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.products && <p className="text-red-500 text-xs font-medium">{errors.products}</p>}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 pt-2">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700">필요 규격</label>
                                        <input
                                            type="text"
                                            name="specifications"
                                            value={formData.specifications}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white"
                                            placeholder="예: 30cm x 40cm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700">예상 수량</label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white"
                                            placeholder="예: 월 1,000박스"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* MIAO Specific Fields */}
                        {inquiryType === 'miao' && (
                            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                <h4 className="font-bold text-blue-800 flex items-center text-base">
                                    <span className="bg-blue-100 p-1.5 rounded-lg mr-2">🧪</span> 생분해 플라스틱솔루션 상세 요청
                                </h4>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700">
                                        적용 대상 플라스틱 <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="resinType"
                                        value={formData.resinType}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3.5 rounded-xl border ${errors.resinType ? 'border-red-500 ring-1 ring-red-500' : 'border-blue-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white cursor-pointer`}
                                    >
                                        <option value="">선택하세요</option>
                                        {resinTypes.map((resin) => (
                                            <option key={resin} value={resin}>{resin}</option>
                                        ))}
                                    </select>
                                    {errors.resinType && <p className="text-red-500 text-xs font-medium">{errors.resinType}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700">
                                        주요 생산 제품 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="mainProducts"
                                        value={formData.mainProducts}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3.5 rounded-xl border ${errors.mainProducts ? 'border-red-500 ring-1 ring-red-500' : 'border-blue-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white`}
                                        placeholder="예: 쇼핑백, 포장재, 빨대 등"
                                    />
                                    {errors.mainProducts && <p className="text-red-500 text-xs font-medium">{errors.mainProducts}</p>}
                                </div>
                            </div>
                        )}

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">
                                문의 내용 <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`w-full px-4 py-3.5 rounded-xl border ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-gray-50/50 resize-none`}
                                placeholder="문의하실 내용을 자세히 적어주세요. 상세하게 입력할수록 더 정확한 상담이 가능합니다."
                            />
                            {errors.message && <p className="text-red-500 text-xs font-medium ml-1">{errors.message}</p>}
                        </div>

                        <div className="pt-4 space-y-4">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        checked={formData.privacy}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500 cursor-pointer"
                                    />
                                </div>
                                <div className="ml-3">
                                    <label htmlFor="privacy" className="text-sm font-medium text-gray-700 cursor-pointer">
                                        <span className="text-green-600 font-bold">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                                    </label>
                                    {errors.privacy && <p className="text-red-500 text-xs font-medium mt-1">{errors.privacy}</p>}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`group relative w-full py-4 rounded-2xl text-lg font-bold text-white transition-all duration-300 transform active:scale-[0.98] shadow-xl overflow-hidden ${inquiryType === 'badp' ? 'bg-green-600 hover:bg-green-700 shadow-green-200' :
                                    inquiryType === 'miao' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200' :
                                        'bg-gray-900 hover:bg-gray-800 shadow-gray-200'
                                    } ${isSubmitting ? 'opacity-90 cursor-not-allowed' : ''}`}
                            >
                                <div className="relative z-10 flex items-center justify-center">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            전송 중...
                                        </>
                                    ) : (
                                        <>
                                            문의하기
                                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
}
