'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-700">K-BIOPLASTIC</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-700 transition-colors">
              홈
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700 transition-colors">
              회사소개
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-700 transition-colors">
                솔루션
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/solution/badp" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700">
                  생분해 완제품 (BADP)
                </Link>
                <Link href="/solution/miao" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700">
                  생분해 첨가제 (MIAO)
                </Link>
              </div>
            </div>
            <Link href="/technology" className="text-gray-700 hover:text-green-700 transition-colors">
              기술 & 인증
            </Link>
            <Link href="/cases" className="text-gray-700 hover:text-green-700 transition-colors">
              적용사례
            </Link>
            <Link href="/contact" className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors">
              문의하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">
              홈
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">
              회사소개
            </Link>
            <Link href="/solution/badp" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">
              생분해 완제품 (BADP)
            </Link>
            <Link href="/solution/miao" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">
              생분해 첨가제 (MIAO)
            </Link>
            <Link href="/technology" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">
              기술 & 인증
            </Link>
            <Link href="/cases" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">
              적용사례
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-green-700 text-white hover:bg-green-800 rounded-md text-center">
              문의하기
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
