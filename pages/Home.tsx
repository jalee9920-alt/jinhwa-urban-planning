import React from 'react';
import { ArrowRight, Clock, ShieldCheck, TrendingUp, CheckCircle, Brain, Map } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button } from '../components/Button';
import { LINKS, IMAGES } from '../constants';

const data = [
  { name: '기초조사', manual: 120, ai: 10 },
  { name: '법령검토', manual: 80, ai: 5 },
  { name: '도면작성', manual: 160, ai: 15 },
  { name: '조서작성', manual: 60, ai: 5 },
];

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Smart City Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/90 to-[#0F4C81]/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#00B4D8]/20 border border-[#00B4D8]/30 backdrop-blur-sm">
            <span className="text-[#00B4D8] font-semibold text-sm">BETA: 도시계획의 패러다임 전환</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            도시관리계획의 미래,<br />
            <span className="text-[#00B4D8]">AI로 완성하는 전주기 자동화</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200 mb-10">
            복잡한 법령 검토부터 도면 작성까지. <br className="hidden sm:block" />
            데이터 기반의 의사결정으로 도시관리계획의 정확도와 신뢰성을 혁신합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={LINKS.mvp} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto gap-2 shadow-lg shadow-[#00B4D8]/20">
                MVP 무료 체험하기 <ArrowRight size={20} />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
              도입 문의하기
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-[#00B4D8] font-semibold tracking-wide uppercase">Why Jinhwa?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#0F4C81] sm:text-4xl">
              반복적인 수작업에서 해방되세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4 p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                    <Clock size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">기존 방식의 한계</h3>
                  <p className="text-gray-600">
                    방대한 법령 검토와 수작업 도면 작성으로 인해 프로젝트 하나에 평균 6개월 이상 소요되며,
                    휴먼 에러 발생 위험이 상존합니다.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="text-gray-300 transform rotate-90 md:rotate-0" size={32} />
              </div>

              <div className="flex gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#0F4C81]">
                    <Brain size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">진화도시플랜의 솔루션</h3>
                  <p className="text-gray-600">
                    AI가 관련 법령을 자동 필터링하고, 지형 데이터를 분석하여 최적의 구획을 제안합니다.
                    소요 시간을 최대 90% 단축합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-[400px]">
              <h3 className="text-lg font-bold text-center text-gray-800 mb-6">업무 소요 시간 비교 (시간 단위)</h3>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="manual" name="기존 방식" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={40} />
                  <Bar dataKey="ai" name="AI 자동화" fill="#00B4D8" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F4C81]">핵심 기대 효과</h2>
            <p className="mt-4 text-gray-600">데이터 기반의 과학적 도시계획을 실현합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "비용 85% 절감",
                desc: "외주 용역비 및 인건비를 획기적으로 줄여 예산 효율성을 극대화합니다."
              },
              {
                icon: ShieldCheck,
                title: "정확도 향상",
                desc: "1,000건 이상의 법령 데이터를 학습한 AI가 인적 오류 없는 완벽한 검토를 수행합니다."
              },
              {
                icon: Map,
                title: "데이터 시각화",
                desc: "복잡한 도시 데이터를 직관적인 3D/2D 지도로 변환하여 빠른 의사결정을 돕습니다."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-[#F0F7FB] rounded-2xl flex items-center justify-center text-[#0F4C81] mb-6">
                  <item.icon size={30} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0F4C81] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 도시계획의 혁신을 경험하세요
          </h2>
          <p className="text-[#00B4D8] text-lg mb-10 font-medium">
            초기 파트너사를 위한 특별한 혜택이 기다리고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={LINKS.mvp} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F4C81] hover:bg-gray-100">
                무료 데모 시작하기
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-[#0a355c]">
              도입 상담 신청
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};