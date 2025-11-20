'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';

type FAQItem = {
    question: string;
    answer: string;
};

interface FAQSectionProps {
    title?: string;
    description?: string;
    items: FAQItem[];
    background?: 'default' | 'muted';
}

export function FAQSection({
    title = "자주 묻는 질문",
    description = "궁금한 점을 확인해보세요.",
    items,
    background = "default"
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section background={background}>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
                <p className="text-lg text-[var(--muted-foreground)]">
                    {description}
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-white shadow-md ring-1 ring-[var(--primary)]' : 'bg-white hover:bg-gray-50'
                            }`}
                    >
                        <button
                            onClick={() => toggleFAQ(idx)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <span className={`text-lg font-bold ${openIndex === idx ? 'text-[var(--primary)]' : 'text-gray-900'}`}>
                                Q. {item.question}
                            </span>
                            <span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                                <div className="flex gap-3">
                                    <span className="font-bold text-[var(--primary)]">A.</span>
                                    <div>{item.answer}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
