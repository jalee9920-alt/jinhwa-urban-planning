import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import { IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#0F4C81] mb-6">
                진화하는 도시,<br/>
                우리가 그리는 미래입니다.
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                진화도시플랜은 도시계획 엔지니어와 AI 전문가들이 모여 설립한 <span className="font-semibold text-[#0F4C81]">Prop-Tech 스타트업</span>입니다.
                <br/><br/>
                우리는 비효율적인 도시계획 관행을 기술로 혁신하여, 
                더 살기 좋고 지속 가능한 도시 환경을 만드는 것을 목표로 합니다.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={IMAGES.team} alt="Team Meeting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#0F4C81] mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p className="text-gray-600">도시계획 업무의 완전 자동화를 통해 인간이 창의성에 집중할 수 있는 환경을 만듭니다.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#0F4C81] mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Core Value</h3>
              <p className="text-gray-600">정확성(Accuracy), 신속성(Speed), 그리고 데이터 투명성(Transparency)을 최우선으로 합니다.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#0F4C81] mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Team</h3>
              <p className="text-gray-600">10년차 이상의 도시계획 기술사와 구글/네이버 출신 AI 개발자들이 함께합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History/Roadmap simple view */}
      <section className="py-20 bg-[#0F4C81] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Roadmap</h2>
          <div className="space-y-8 border-l-2 border-[#00B4D8] pl-8 ml-4">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#00B4D8] border-4 border-[#0F4C81]" />
              <h3 className="text-xl font-bold">2023. Q4</h3>
              <p className="text-blue-200">진화도시플랜 법인 설립 및 Seed 투자 유치</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#00B4D8] border-4 border-[#0F4C81]" />
              <h3 className="text-xl font-bold">2024. Q2</h3>
              <p className="text-blue-200">기초조사 자동화 모듈(Alpha) 개발 완료</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#0F4C81]" />
              <h3 className="text-xl font-bold text-[#00B4D8]">2024. Q4 (Current)</h3>
              <p className="text-white">전주기 자동화 MVP 출시 및 베타 테스터 모집</p>
            </div>
            <div className="relative opacity-70">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-400 border-4 border-[#0F4C81]" />
              <h3 className="text-xl font-bold">2025. Q2</h3>
              <p className="text-blue-200">SaaS 정식 런칭 및 B2G 조달 등록</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};