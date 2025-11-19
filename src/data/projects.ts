import { Project } from '@/types/project';

// 프로젝트 데이터
// 필요에 따라 여기에 더 많은 프로젝트를 추가할 수 있습니다
export const projects: Project[] = [
  {
    id: 1,
    title: '메일트리 - 온라인 우편 서비스',
    // 카드에 표시될 짧은 설명
    description: 'Next, React, Emotion, React-Query, TypeScript 를 활용해 ',
    // 모달에 표시될 상세 설명
    detailedDescription: `
      메일트리는 온라인 우편 서비스로, 사용자가 온라인으로 우편을 보낼 수 있는 서비스입니다.
      사용자가 온라인으로 우편을 보낼 수 있는 서비스입니다.
    `,
    tags: ['Next.js', 'React', 'React Native', 'Emotion', 'TypeScript'],
    image: '/project1.png',
    additionalImages: ['/project1-detail1.png', '/project1-detail2.png', '/project1-detail3.png'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.com',
    period: '2024.01 - 2024.03 (3개월)',
    role: 'Full Stack Developer',
    teamSize: '개인 프로젝트',
    // 주요 기능
    features: [
      '반응형 디자인으로 모든 디바이스에서 최적화된 사용자 경험',
      '실시간 재고 관리 시스템',
      '장바구니 및 위시리스트 기능',
      'Stripe를 통한 안전한 결제 처리',
      '주문 추적 및 이메일 알림',
      '관리자 대시보드를 통한 제품 및 주문 관리',
      'SEO 최적화 및 성능 개선',
    ],
    // 기술적 도전과제
    challenges: [
      '서버 컴포넌트와 클라이언트 컴포넌트의 적절한 분리로 성능 최적화',
      '실시간 재고 동기화를 위한 낙관적 업데이트 구현',
      'Stripe webhook을 활용한 결제 상태 관리',
      'Next.js Image 컴포넌트를 활용한 이미지 최적화로 로딩 속도 개선',
    ],
  },
  {
    id: 2,
    title: 'Real-time Chat App',
    description:
      'A full-stack chat application using Socket.IO for real-time messaging with a clean and dynamic user interface.',
    detailedDescription: `
      Socket.IO를 활용한 실시간 채팅 애플리케이션입니다. 
      WebSocket 기술을 이용하여 지연 시간 없는 메시지 전송과 
      실시간 사용자 상태 업데이트를 구현했습니다.
      
      Node.js와 Express를 백엔드로 사용하고, React로 구축한 
      직관적인 사용자 인터페이스를 통해 원활한 커뮤니케이션 
      경험을 제공합니다.
    `,
    tags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    image: '/project2.png',
    additionalImages: ['/project2-detail1.png', '/project2-detail2.png'],
    github: 'https://github.com/yourusername/realtime-chat',
    liveUrl: 'https://your-chat-demo.com',
    period: '2023.10 - 2023.12 (2개월)',
    role: 'Full Stack Developer',
    teamSize: '2명 (프론트엔드 1명, 백엔드 1명)',
    features: [
      '실시간 1:1 및 그룹 채팅',
      '파일 및 이미지 공유 기능',
      '사용자 온라인/오프라인 상태 표시',
      '읽음/안읽음 메시지 표시',
      '메시지 검색 기능',
      '채팅방 생성 및 관리',
      '이모지 반응 및 답장 기능',
    ],
    challenges: [
      'Socket.IO를 활용한 실시간 양방향 통신 구현',
      '메시지 무한 스크롤 및 가상화로 성능 최적화',
      '오프라인 상태에서의 메시지 큐잉 및 자동 재전송',
      'MongoDB를 활용한 효율적인 채팅 히스토리 저장 및 조회',
    ],
  },
  {
    id: 2,
    title: 'Real-time Chat App',
    description:
      'A full-stack chat application using Socket.IO for real-time messaging with a clean and dynamic user interface.',
    detailedDescription: `
      Socket.IO를 활용한 실시간 채팅 애플리케이션입니다. 
      WebSocket 기술을 이용하여 지연 시간 없는 메시지 전송과 
      실시간 사용자 상태 업데이트를 구현했습니다.
      
      Node.js와 Express를 백엔드로 사용하고, React로 구축한 
      직관적인 사용자 인터페이스를 통해 원활한 커뮤니케이션 
      경험을 제공합니다.
    `,
    tags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    image: '/project2.png',
    additionalImages: ['/project2-detail1.png', '/project2-detail2.png'],
    github: 'https://github.com/yourusername/realtime-chat',
    liveUrl: 'https://your-chat-demo.com',
    period: '2023.10 - 2023.12 (2개월)',
    role: 'Full Stack Developer',
    teamSize: '2명 (프론트엔드 1명, 백엔드 1명)',
    features: [
      '실시간 1:1 및 그룹 채팅',
      '파일 및 이미지 공유 기능',
      '사용자 온라인/오프라인 상태 표시',
      '읽음/안읽음 메시지 표시',
      '메시지 검색 기능',
      '채팅방 생성 및 관리',
      '이모지 반응 및 답장 기능',
    ],
    challenges: [
      'Socket.IO를 활용한 실시간 양방향 통신 구현',
      '메시지 무한 스크롤 및 가상화로 성능 최적화',
      '오프라인 상태에서의 메시지 큐잉 및 자동 재전송',
      'MongoDB를 활용한 효율적인 채팅 히스토리 저장 및 조회',
    ],
  },
  {
    id: 2,
    title: 'Real-time Chat App',
    description:
      'A full-stack chat application using Socket.IO for real-time messaging with a clean and dynamic user interface.',
    detailedDescription: `
      Socket.IO를 활용한 실시간 채팅 애플리케이션입니다. 
      WebSocket 기술을 이용하여 지연 시간 없는 메시지 전송과 
      실시간 사용자 상태 업데이트를 구현했습니다.
      
      Node.js와 Express를 백엔드로 사용하고, React로 구축한 
      직관적인 사용자 인터페이스를 통해 원활한 커뮤니케이션 
      경험을 제공합니다.
    `,
    tags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    image: '/project2.png',
    additionalImages: ['/project2-detail1.png', '/project2-detail2.png'],
    github: 'https://github.com/yourusername/realtime-chat',
    liveUrl: 'https://your-chat-demo.com',
    period: '2023.10 - 2023.12 (2개월)',
    role: 'Full Stack Developer',
    teamSize: '2명 (프론트엔드 1명, 백엔드 1명)',
    features: [
      '실시간 1:1 및 그룹 채팅',
      '파일 및 이미지 공유 기능',
      '사용자 온라인/오프라인 상태 표시',
      '읽음/안읽음 메시지 표시',
      '메시지 검색 기능',
      '채팅방 생성 및 관리',
      '이모지 반응 및 답장 기능',
    ],
    challenges: [
      'Socket.IO를 활용한 실시간 양방향 통신 구현',
      '메시지 무한 스크롤 및 가상화로 성능 최적화',
      '오프라인 상태에서의 메시지 큐잉 및 자동 재전송',
      'MongoDB를 활용한 효율적인 채팅 히스토리 저장 및 조회',
    ],
  },
];

// 특정 프로젝트 가져오기 헬퍼 함수
export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// 프로젝트 개수 가져오기
export const getProjectCount = (): number => {
  return projects.length;
};
