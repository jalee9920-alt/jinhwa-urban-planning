import React from 'react';
import { Database, FileText, CheckSquare, Layers, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

const steps = [
  {
    id: 1,
    title: '기초조사 자동화',
    icon: Database,
    description: '공공데이터포털, 국토정보플랫폼 API와 연동하여 대상지의 지형, 기후, 인구 데이터를 실시간으로 수집하고 분석합니다.',
    details: ['지형도면 고시 데이터 자동 수집', '환경생태등급 자동 판별', '표고/경사도 자동 분석 보고서 생성']
  },
  {
    id: 2,
    title: 'AI 입안 및 도면 작성',
    icon: Layers,
    description: '수집된 데이터를 바탕으로 용도지역 지구 변경안을 시뮬레이션하고, 규격에 맞는 도시계획 도면(CAD/GIS)을 자동 생성합니다.',
    details: ['토지이용계획안 복수 생성', '용적률/건폐율 최적화 시뮬레이션', 'AutoCAD 호환 파일(.dwg) 내보내기']
  },
  {
    id: 3,
    title: '법적 타당성 검토',
    icon: CheckSquare,
    description: '국토계획법 및 각 지자체 조례를 기반으로 입안된 계획의 법적 저촉 여부를 AI가 실시간으로 진단합니다.',
    details: ['1,200여 개 관련 법령 DB 연동', '규제 저촉 구간 히트맵 시각화', '조치 계획서 자동 초안 작성']
  },
  {
    id: 4,
    title: '결정조서 및 보고서 출력',
    icon: FileText,
    description: '도시관리계획 결정 조서, 사유서, 환경성 검토서 등 행정 절차에 필요한 법정 서식 문서를 원클릭으로 완성합니다.',
    details: ['도시관리계획 결정 조서 자동 생성', '심의용 PPT 자동 생성', '최종 성과품 패키징']
  }
];

export const Process: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-[#0F4C81] py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">전주기 프로세스</h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          복잡한 도시관리계획 절차를 AI 파이프라인으로 단순화했습니다.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <img 
            src={IMAGES.blueprint} 
            alt="Process Workflow" 
            className="w-full h-80 object-cover object-center"
          />
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              {/* Connector Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-[52px] top-24 bottom-[-48px] w-0.5 bg-gray-200 border-l border-dashed border-gray-300 z-0" />
              )}
              
              <div className="relative z-10 flex-shrink-0 w-24 h-24 bg-[#F0F7FB] rounded-full flex items-center justify-center border-4 border-white shadow-md">
                <step.icon size={40} className="text-[#0F4C81]" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.id}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#0F4C81] mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full" />
                    주요 산출물 및 기능
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <ArrowRight size={14} className="text-gray-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};