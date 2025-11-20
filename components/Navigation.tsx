'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container-width">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/ecobio_ci.png"
                alt="(주)에코바이오"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors">
              홈
            </Link>
            <Link href="/about" className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors">
              회사소개
            </Link>
            <div className="relative group">
              <button className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors flex items-center gap-1">
                솔루션
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md shadow-lg rounded-xl border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left p-2">
                <Link href="/solution/badp" className="block px-4 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--secondary)] rounded-lg transition-colors">
                  <span className="font-semibold block">생분해 완제품 (BADP)</span>
                  <span className="text-xs text-[var(--muted-foreground)]">친환경 완제품 솔루션</span>
                </Link>
                <Link href="/solution/miao" className="block px-4 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--secondary)] rounded-lg transition-colors">
                  <span className="font-semibold block">생분해 첨가제 (MIAO)</span>
                  <span className="text-xs text-[var(--muted-foreground)]">혁신적인 첨가제 기술</span>
                </Link>
              </div>
            </div>
            <Link href="/technology" className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors">
              기술 & 인증
            </Link>
            <Link href="/cases" className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors">
              적용사례
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                문의하기
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--foreground)] hover:text-[var(--primary)] focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-[var(--border)] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link href="/" className="block text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
            홈
          </Link>
          <Link href="/about" className="block text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
            회사소개
          </Link>
          <div className="space-y-2 pl-4 border-l-2 border-[var(--border)]">
            <p className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">솔루션</p>
            <Link href="/solution/badp" className="block text-base text-[var(--foreground)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
              생분해 완제품 (BADP)
            </Link>
            <Link href="/solution/miao" className="block text-base text-[var(--foreground)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
              생분해 첨가제 (MIAO)
            </Link>
          </div>
          <Link href="/technology" className="block text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
            기술 & 인증
          </Link>
          <Link href="/cases" className="block text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
            적용사례
          </Link>
          <div className="pt-4">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full">
              <Button variant="primary" className="w-full justify-center">
                문의하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
