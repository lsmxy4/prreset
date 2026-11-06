import type { CategoryId } from './categories';

export interface Team {
  name: string;
  title: string;
  category: CategoryId;
  description: string;
  bg: string;
  ink: string;
  shape: string;
  pptUrl: string;
  projectUrl: string;
}

// PDF의 주목적을 기준으로 한 임시 분류입니다. 분류 근거는 프로젝트의 분류내역.md를 참고하세요.
// 실제 사이트 주소가 확인되면 projectUrl에 입력합니다.
export const teams: Team[] = [
  {
    "name": "A-1",
    "title": "강의톡",
    "category": "future",
    "description": "강의 음성을 다국어로 번역하고 AI 요약·키워드·퀴즈를 제공하는 학습 보조 시스템.",
    "bg": "#e4e9f0",
    "ink": "#7589a9",
    "shape": "⌘",
    "pptUrl": "presentations/강의톡_A-1.pdf",
    "projectUrl": "https://adelina211.dothome.co.kr/translate.php"
  },
  {
    "name": "A-2",
    "title": "실시간 로켓 시뮬레이터",
    "category": "future",
    "description": "물리 제어 패널과 로켓 비행 시뮬레이션을 연결하고 텔레메트리를 실시간으로 확인합니다.",
    "bg": "#e4e9f0",
    "ink": "#7589a9",
    "shape": "⌘",
    "pptUrl": "presentations/캡스톤디자인 포트폴리오 A-2.pdf",
    "projectUrl": ""
  },
  {
    "name": "A-3",
    "title": "스마트 주차 관리 시스템",
    "category": "community",
    "description": "교내 주차면의 센서 정보를 바탕으로 빈자리 확인과 예약·공유를 지원합니다.",
    "bg": "#ece7dd",
    "ink": "#a58762",
    "shape": "◒",
    "pptUrl": "presentations/SmartParking_Capstone_Final_A-3.pdf",
    "projectUrl": ""
  },
  {
    "name": "A-4",
    "title": "Unity 3D 인지능력 강화 훈련",
    "category": "social",
    "description": "고령층의 사용 편의성을 고려한 물리 버튼과 세 가지 게임형 인지훈련 모듈입니다.",
    "bg": "#e0eae8",
    "ink": "#59857e",
    "shape": "✳",
    "pptUrl": "presentations/Unity 3D 기반 인지능력A-4.pdf",
    "projectUrl": ""
  },
  {
    "name": "A-5",
    "title": "Clean-Guard",
    "category": "future",
    "description": "IoT 센서와 AI 분석으로 화장실의 악취·누수·환경 상태를 확인하는 관리 플랫폼.",
    "bg": "#e4e9f0",
    "ink": "#7589a9",
    "shape": "⌘",
    "pptUrl": "presentations/Clean-GuardA-5.pdf",
    "projectUrl": "https://clean-guard-coral.vercel.app/"
  },
  {
    "name": "A-6",
    "title": "친절한 이웃",
    "category": "social",
    "description": "CCTV·보안등 등 안전시설 정보와 안전 우선 경로, 이웃 도움요청을 제공합니다.",
    "bg": "#e0eae8",
    "ink": "#59857e",
    "shape": "✳",
    "pptUrl": "presentations/친절한이웃_결과서_발표A-6.pdf",
    "projectUrl": ""
  },
  {
    "name": "A-7",
    "title": "FitMap",
    "category": "community",
    "description": "현재 위치의 날씨·대기질과 지도 정보를 결합해 주변 운동 장소를 추천합니다.",
    "bg": "#ece7dd",
    "ink": "#a58762",
    "shape": "◒",
    "pptUrl": "presentations/FitMap_기획서A-7.pdf",
    "projectUrl": "https:fitmap.store"
  },
  {
    "name": "A-8",
    "title": "TripPay",
    "category": "future",
    "description": "생성형 AI와 실시간 환율을 활용하는 올인원 여행 정산 플랫폼.",
    "bg": "#e4e9f0",
    "ink": "#7589a9",
    "shape": "⌘",
    "pptUrl": "presentations/캡스톤디자인-진다은,문예영A-8.pdf",
    "projectUrl": "https://trippay-backend.onrender.com/"
  },
  {
    "name": "A-9",
    "title": "환경·피부 연동 AI 피부관리",
    "category": "future",
    "description": "피부 수분과 주변 온습도 측정, AI 얼굴 이미지 분석으로 맞춤형 피부관리를 지원합니다.",
    "bg": "#e4e9f0",
    "ink": "#7589a9",
    "shape": "⌘",
    "pptUrl": "presentations/스마트환경관리시스템(스킨팀)-A-9.pdf",
    "projectUrl": ""
  },
  {
    "name": "A-10",
    "title": "오!냉 · 오늘의 냉장고",
    "category": "social",
    "description": "식재료 등록과 소비기한 알림, 보유 재료 기반 레시피 추천으로 음식 낭비를 줄입니다.",
    "bg": "#e0eae8",
    "ink": "#59857e",
    "shape": "✳",
    "pptUrl": "presentations/오!냉 (OH!NAENG) 웹사이트 소개A-10.pdf",
    "projectUrl": ""
  },
  {
    "name": "B-1",
    "title": "상가 유동인구 분석",
    "category": "community",
    "description": "매장 방문객 측정과 공공 유동인구 데이터를 활용해 상권 분석과 운영 판단을 돕습니다.",
    "bg": "#ece7dd",
    "ink": "#a58762",
    "shape": "◒",
    "pptUrl": "presentations/상권분석(B-1).pdf",
    "projectUrl": "https://flow-up-supabase.vercel.app/"
  },
  {
    "name": "B-2",
    "title": "골목대場 퉁퉁이",
    "category": "community",
    "description": "공공데이터와 지도로 정화조 위치·정보를 확인하고 제보·승인·작업 의뢰를 연결합니다.",
    "bg": "#ece7dd",
    "ink": "#a58762",
    "shape": "◒",
    "pptUrl": "presentations/골목대場퉁퉁이(B-2).pdf",
    "projectUrl": "https://kjh480327.dothome.co.kr/"
  },
  {
    "name": "B-3",
    "title": "요기로드",
    "category": "startup",
    "description": "음식점 발굴부터 상담·방문 일정·계약 상태까지 지도에서 관리하는 영업 지원 웹 서비스.",
    "bg": "#f0e5df",
    "ink": "#b08772",
    "shape": "◉",
    "pptUrl": "presentations/요기로드(B-3).pdf",
    "projectUrl": ""
  },
  {
    "name": "B-4",
    "title": "Travel Lens",
    "category": "startup",
    "description": "카메라 번역·음성 통역·지도·여행 기록을 통합한 여행 보조 앱입니다.",
    "bg": "#f0e5df",
    "ink": "#b08772",
    "shape": "◉",
    "pptUrl": "presentations/Travel Lens(B-4).pdf",
    "projectUrl": ""
  },
  {
    "name": "B-5",
    "title": "동행",
    "category": "social",
    "description": "고령자를 위한 생활·행사 정보를 모아 제공하는 모바일 애플리케이션.",
    "bg": "#e0eae8",
    "ink": "#59857e",
    "shape": "✳",
    "pptUrl": "presentations/동행(B-5).pdf",
    "projectUrl": ""
  },
  {
    "name": "B-6",
    "title": "CareLink",
    "category": "social",
    "description": "간병 구인·구직 매칭과 센서 기반 환자 상태 모니터링을 연결하는 돌봄 플랫폼.",
    "bg": "#e0eae8",
    "ink": "#59857e",
    "shape": "✳",
    "pptUrl": "presentations/CareLink(B-6).pdf",
    "projectUrl": ""
  },
  {
    "name": "B-7",
    "title": "전통시장 상권 분석",
    "category": "community",
    "description": "영상·IoT·날씨 데이터를 통합해 전통시장 이용 패턴과 환경을 분석합니다.",
    "bg": "#ece7dd",
    "ink": "#a58762",
    "shape": "◒",
    "pptUrl": "presentations/재래시장_상권분석(B-7).pdf",
    "projectUrl": ""
  },
  {
    "name": "B-8",
    "title": "ROBODA",
    "category": "startup",
    "description": "로봇 제품 정보부터 중고거래·P2P 대여·수리 상담까지 연결하는 공유 플랫폼.",
    "bg": "#f0e5df",
    "ink": "#b08772",
    "shape": "◉",
    "pptUrl": "presentations/현우(B-8).pdf",
    "projectUrl": "https://roboda.kro.kr/"
  },
  {
    "name": "B-9",
    "title": "클린 매니지먼트 AI",
    "category": "future",
    "description": "센서 데이터를 해석해 흡연·누수·동파와 화장실 상황을 판단하는 AI 시스템.",
    "bg": "#e4e9f0",
    "ink": "#7589a9",
    "shape": "⌘",
    "pptUrl": "presentations/파오리백숙(B-9).pdf",
    "projectUrl": ""
  },
  {
    "name": "개인 · 정예준",
    "title": "QR-Place",
    "category": "startup",
    "description": "별도 주문 기기 없이 QR 주문·메뉴 추천·점주 통계를 제공하는 식당용 스마트 오더 플랫폼.",
    "bg": "#f0e5df",
    "ink": "#b08772",
    "shape": "◉",
    "pptUrl": "presentations/정예준 - 캡스톤디자인 개인 프로젝트 결과보고서.pdf",
    "projectUrl": "https://qr-place.vercel.app/dashboard"
  }
];
