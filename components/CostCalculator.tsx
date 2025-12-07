'use client';

import { useState, useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { PLA_PRICE_MULTIPLIER, MIAO_PRICE_MULTIPLIER } from '@/lib/constants';

export function CostCalculator() {
    const [monthlyUsage, setMonthlyUsage] = useState<number>(10000); // kg
    const [currentPrice, setCurrentPrice] = useState<number>(1500); // KRW/kg (General Plastic)

    const [savings, setSavings] = useState<number>(0);
    const [miaoCost, setMiaoCost] = useState<number>(0);
    const [plaCost, setPlaCost] = useState<number>(0);

    useEffect(() => {
        // Validation: Ensure values are non-negative
        const validUsage = Math.max(0, monthlyUsage);
        const validPrice = Math.max(0, currentPrice);

        const baseCost = validUsage * validPrice;
        const calculatedPlaCost = baseCost * PLA_PRICE_MULTIPLIER;
        const calculatedMiaoCost = baseCost * MIAO_PRICE_MULTIPLIER;

        setPlaCost(calculatedPlaCost);
        setMiaoCost(calculatedMiaoCost);
        setSavings(calculatedPlaCost - calculatedMiaoCost);
    }, [monthlyUsage, currentPrice]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(amount);
    };

    return (
        <Section background="muted">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">예상 비용 절감 계산기</h2>
                    <p className="text-[var(--muted-foreground)]">
                        PLA/PBAT 대비 MIAO 도입 시 얼마나 절감할 수 있는지 확인해보세요.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg border border-[var(--border)]">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Inputs */}
                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    월간 플라스틱 사용량 (kg)
                                </label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="100000"
                                    step="1000"
                                    value={monthlyUsage}
                                    onChange={(e) => setMonthlyUsage(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
                                />
                                <div className="mt-2 flex justify-between items-center">
                                    <span className="text-sm text-gray-500">1,000kg</span>
                                    <span className="text-xl font-bold text-[var(--primary)]">{monthlyUsage.toLocaleString()} kg</span>
                                    <span className="text-sm text-gray-500">100,000kg</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    현재 원료 단가 (원/kg)
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        min="0"
                                        value={currentPrice}
                                        onChange={(e) => setCurrentPrice(Math.max(0, Number(e.target.value)))}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">원</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">* 일반 플라스틱(PE/PP) 기준 평균 단가</p>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="bg-gray-50 p-6 rounded-2xl space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>PLA/PBAT 전환 시 예상 비용</span>
                                    <span>(약 {PLA_PRICE_MULTIPLIER}배)</span>
                                </div>
                                <div className="text-xl font-bold text-gray-400 line-through">
                                    {formatCurrency(plaCost)}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-[var(--primary)] font-bold">
                                    <span>MIAO 도입 시 예상 비용</span>
                                    <span>(약 {MIAO_PRICE_MULTIPLIER}배)</span>
                                </div>
                                <div className="text-3xl font-bold text-[var(--primary)]">
                                    {formatCurrency(miaoCost)}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-1">월간 예상 절감액</p>
                                <p className="text-4xl font-bold text-green-600 animate-pulse">
                                    {formatCurrency(savings)}
                                </p>
                                <p className="text-xs text-green-600 mt-2">
                                    * PLA 대비 약 {plaCost > 0 ? ((savings / plaCost) * 100).toFixed(0) : 0}% 비용 절감 효과
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
