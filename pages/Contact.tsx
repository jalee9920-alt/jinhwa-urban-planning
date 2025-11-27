import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { IMAGES, LINKS } from '../constants';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#00B4D8] h-64 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white z-10">도입 문의</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <div className="bg-[#0F4C81] text-white p-10 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-blue-200 mb-8">
                도시관리계획 자동화 솔루션 도입을 고민 중이신가요? 
                전문 컨설턴트가 상세히 안내해 드립니다.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-[#00B4D8]" />
                  <div>
                    <p className="font-medium">이메일</p>
                    <p className="text-blue-200">contact@jinhwacity.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-[#00B4D8]" />
                  <div>
                    <p className="font-medium">전화</p>
                    <p className="text-blue-200">02-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-[#00B4D8]" />
                  <div>
                    <p className="font-medium">오피스</p>
                    <p className="text-blue-200">서울시 강남구 테헤란로 123 진화빌딩 10층</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <p className="text-sm text-blue-300 mb-4">이미 계정이 있으신가요?</p>
               <a href={LINKS.mvp} target="_blank" rel="noopener noreferrer">
                 <Button className="w-full bg-white text-[#0F4C81] hover:bg-gray-100">MVP 로그인</Button>
               </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">문의 작성하기</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">회사/기관명</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                    <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">문의 유형</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all">
                        <option>솔루션 도입 문의</option>
                        <option>기술 제휴</option>
                        <option>기타</option>
                    </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                  <textarea rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all"></textarea>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" size="lg" className="gap-2">
                    보내기 <Send size={18} />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">문의가 접수되었습니다.</h3>
                <p className="text-gray-600 mb-8">담당자가 확인 후 24시간 이내에 기재해주신 연락처로 답변 드리겠습니다.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">다시 작성하기</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};