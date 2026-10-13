export const categories = [
  {
    id: 'industry',
    name: '산업체 수요 맞춤형',
    english: 'Industry-Linked',
    symbol: '▥',
    description: '실제 기업이나 산업 현장에서 활용할 수 있는 시스템과 아이디어',
    color: '#e6eddb'
  },
  {
    id: 'social',
    name: '사회 문제 해결형',
    english: 'Social Problem Solving',
    symbol: '✳',
    description: '고령화, 환경, 안전, 취약계층 불편 등 사회적 문제를 해결하는 주제',
    color: '#e0eae8'
  },
  {
    id: 'community',
    name: '지역사회 연계형',
    english: 'Community-Based',
    symbol: '◒',
    description: '지역 상권과 주민에게 필요한 서비스를 개발하는 주제',
    color: '#ece7dd'
  },
  {
    id: 'future',
    name: '미래 신기술 융합형',
    english: 'Future Tech Integration',
    symbol: '⌘',
    description: 'AI와 첨단 기술을 융합하여 새로운 가치를 만드는 주제',
    color: '#e4e9f0'
  },
  {
    id: 'startup',
    name: '창업 연계형',
    english: 'Startup-Oriented',
    symbol: '◉',
    description: '제품과 서비스 출시를 목표로 시장 중심의 아이디어를 구현하는 주제',
    color: '#f0e5df'
  },
] as const;

export type CategoryId = (typeof categories)[number]['id'];
