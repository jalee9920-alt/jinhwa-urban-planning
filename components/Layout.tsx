import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, LINKS } from '../constants';
import { Button } from './Button';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#333333]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                <div className="bg-[#0F4C81] p-1.5 rounded text-white group-hover:bg-[#0a355c] transition-colors">
                  <Building2 size={24} />
                </div>
                <span className="font-bold text-xl text-[#0F4C81]">진화도시플랜</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#00B4D8] ${
                    location.pathname === item.path ? 'text-[#0F4C81]' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a href={LINKS.mvp} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm" className="gap-2">
                  MVP 체험 <ExternalLink size={14} />
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-gray-50 text-[#0F4C81]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#00B4D8]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href={LINKS.mvp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full mt-4"
              >
                <Button variant="secondary" className="w-full gap-2">
                  MVP 체험 <ExternalLink size={16} />
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1e293b] text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Building2 size={24} className="text-[#00B4D8]" />
                <span className="font-bold text-xl">진화도시플랜</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-4">
                AI 기술을 활용하여 도시계획의 새로운 표준을 만듭니다. 
                복잡한 인허가부터 도면 작성까지 원스톱으로 해결하세요.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">서비스</h3>
              <ul className="space-y-3">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">문의</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">support@jinhwacity.com</li>
                <li className="text-gray-400">02-1234-5678</li>
                <li className="text-gray-400">서울시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Jinhwa City Plan. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-500 text-sm hover:text-white cursor-pointer">이용약관</span>
              <span className="text-gray-500 text-sm hover:text-white cursor-pointer">개인정보처리방침</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};