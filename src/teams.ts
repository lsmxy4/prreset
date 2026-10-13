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

// 각 조의 작품 소개와 PPT·프로젝트 주소를 입력하세요.
export const teams: Team[] = [
    {
        name: '1조',
        title: '스마트 캠퍼스',
        category: 'industry',
        description: '더 편리한 학교생활을 위한 아이디어를 소개합니다.',
        bg: '#e6eddb',
        ink: '#658754',
        shape: '▥',
        pptUrl: '',
        projectUrl: ''
    },
    {
        name: '2조',
        title: '우리 동네 이야기',
        category: 'community',
        description: '지역의 숨은 이야기를 발견하고 함께 공유합니다.',
        bg: '#ece7dd',
        ink: '#a58762',
        shape: '◒',
        pptUrl: '',
        projectUrl: ''
    },
    {
        name: '3조',
        title: '작은 친환경 실천',
        category: 'social',
        description: '일상 속 작은 행동으로 만드는 변화를 담았습니다.',
        bg: '#e0eae8',
        ink: '#59857e',
        shape: '✳',
        pptUrl: '',
        projectUrl: ''
    },
    {
        name: '4조',
        title: '함께하는 배움',
        category: 'social',
        description: '서로의 지식을 나누는 새로운 학습 경험을 제안합니다.',
        bg: '#e9e5ef',
        ink: '#8e78a4',
        shape: '▧',
        pptUrl: '',
        projectUrl: ''
    },
    {
        name: '5조',
        title: '일상의 기록',
        category: 'startup',
        description: '평범한 순간을 특별하게 남기는 프로젝트입니다.',
        bg: '#f0e5df',
        ink: '#b08772',
        shape: '◉',
        pptUrl: '',
        projectUrl: ''
    },
    {
        name: '6조',
        title: '새로운 연결',
        category: 'future',
        description: '사람과 사람 사이를 이어 주는 방법을 고민합니다.',
        bg: '#e4e9f0',
        ink: '#7589a9',
        shape: '⌘',
        pptUrl: '',
        projectUrl: ''
    }
];
