import React from 'react';
import { Cpu, FileSearch, PenTool, MapPin, Grid, Lock } from 'lucide-react';
import { IMAGES } from '../constants';

const features = [
  {
    icon: Cpu,
    title: "AI 자동 법령 검토",
    desc: "전국 지자체 조례 및 상위 법령 DB를 실시간 크롤링하여, 계획안의 법적 정합성을 0.1초 만에 판별합니다."
  },
  {
    icon: PenTool,
    title: "도면 자동 생성 (Gen-Design)",
    desc: "파라미터 입력만으로 용도지역지구도, 도시계획시설결정도 등 법정 도면을 CAD 레이어 표준에 맞춰 생성합니다."
  },
  {
    icon: MapPin,
    title: "GIS 기반 입지 분석",
    desc: "경사도, 표고, 생태등급 등 12가지 이상의 입지 규제 요소를 3D 지도 위에서 직관적으로 분석합니다."
  },
  {
    icon: FileSearch,
    title: "조서 자동 작성",
    desc: "수정된 도면 내용과 연동하여 도시관리계획 결정 조서 및 사유서를 엑셀/한글 파일로 즉시 변환합니다."
  },
  {
    icon: Grid,
    title: "토지이용계획 시뮬레이션",
    desc: "다양한 대안(Scenario)별 용적률, 사업성, 공공기여량을 비교 분석하여 최적의 안을 도출합니다."
  },
  {
    icon: Lock,
    title: "데이터 보안 및 클라우드",
    desc: "공공기관 수준의 보안 규격을 준수하며, 클라우드 저장소를 통해 팀원 간 실시간 협업을 지원합니다."
  }
];

export const Features: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <img 
          src={IMAGES.ai_analysis} 
          alt="AI Analysis" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F4C81]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            강력한 AI 엔진,<br />
            <span className="text-[#00B4D8]">진화도시플랜 기술 스택</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            단순 반복 업무는 AI에게 맡기고, 엔지니어는 창의적인 도시 설계에 집중하세요.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#F0F7FB] rounded-xl flex items-center justify-center text-[#0F4C81] mb-6 group-hover:bg-[#0F4C81] group-hover:text-white transition-colors">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specs Summary */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#0F4C81] mb-8">시스템 요구사항 및 호환성</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 border-b pb-2">지원 데이터 포맷</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#00B4D8] rounded-full"/> AutoCAD (.dwg, .dxf)</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#00B4D8] rounded-full"/> GIS (.shp, .geojson)</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#00B4D8] rounded-full"/> Excel (.xlsx, .csv)</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#00B4D8] rounded-full"/> Image (.tiff, .jpg)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 border-b pb-2">권장 환경</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#0F4C81] rounded-full"/> Web Browser: Chrome, Edge, Safari (최신 버전)</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#0F4C81] rounded-full"/> OS: Windows, macOS, Linux</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#0F4C81] rounded-full"/> Network: 10Mbps 이상</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};