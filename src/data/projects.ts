import { Project } from '@/types/project';

// 프로젝트 데이터
// 필요에 따라 여기에 더 많은 프로젝트를 추가할 수 있습니다
export const projects: Project[] = [
  {
    id: 1,
    title: '메일트리 - 온라인 우편 서비스',
    // 카드에 표시될 짧은 설명
    description:
      'Next.js, TypeScript, React-Query, Emotion을 활용해 커스텀 편지 에디터와 결제 시스템을 탑재한 손편지 배송 커머스 플랫폼 구축',
    // 모달에 표시될 상세 설명
    detailedDescription: `
메일트리는 온라인 편지 작성 및 실물 우편 배송 플랫폼입니다.
웹 에디터를 통해 작성된 편지를 자동 페이지 분할 및 미리보기 기능을 통해 실제 우편물처럼 받아볼 수 있는 경험을 제공합니다.
    `,
    preTags: ['Next.js', 'React', 'React Native', 'TypeScript', 'Emotion'],
    tags: ['Next.js', 'React', 'React Native', 'Emotion', 'TypeScript'],
    image: '/project1/cover_p1.png',
    detailImages: ['/project1/cover_p1.png', '/project1/cover_p1.png', '/project1/cover_p1.png'],
    github: 'https://github.com/MailMovers/mailmavers-frontend',
    liveUrl: 'https://mailtree.co.kr',
    period: '2024.08 - 2025.06 (10개월)',
    role: 'Frontend Developer',
    teamSize: '팀 프로젝트 (풀스택 1명, 프론트엔드 1명, 백엔드 2명)',
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
    // 기술적 도전과제 및 해결방안
    challenges: [
      {
        problem: '초기 렌더링 속도가 느려 사용자 이탈률이 높았음',
        solution:
          'Next.js의 서버 컴포넌트와 클라이언트 컴포넌트를 적절히 분리하고, 동적 import를 활용하여 번들 크기를 40% 감소시켜 초기 로딩 시간을 2초에서 0.8초로 단축',
      },
      {
        problem: '여러 사용자가 동시에 같은 상품을 구매할 때 재고 불일치 문제 발생',
        solution:
          'Optimistic UI 업데이트와 낙관적 잠금(Optimistic Locking)을 구현하여 실시간 재고 동기화를 구현하고, 재고 부족 시 즉각적인 사용자 피드백 제공',
      },
      {
        problem: '결제 처리 중 네트워크 오류로 인한 결제 상태 불일치',
        solution:
          'Stripe webhook을 구현하여 비동기 결제 이벤트를 안정적으로 처리하고, 멱등성 키(Idempotency Key)를 활용해 중복 결제 방지',
      },
      {
        problem: '대용량 상품 이미지로 인한 느린 페이지 로딩',
        solution:
          'Next.js Image 컴포넌트의 자동 최적화 기능과 lazy loading을 활용하고, WebP 포맷 전환으로 이미지 용량을 평균 60% 감소시켜 로딩 속도 개선',
      },
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
    preTags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    tags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    image: '/project1/cover_p1.png',
    detailImages: ['/project2-detail1.png', '/project2-detail2.png'],
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
      {
        problem: '동시 접속자가 많을 때 서버 응답 지연 및 메시지 전송 실패',
        solution:
          'Socket.IO의 Room 기능과 Redis Adapter를 도입하여 수평 확장이 가능한 구조로 변경하고, 연결 풀링으로 동시 접속 처리 능력을 5배 향상',
      },
      {
        problem: '수천 개의 메시지를 렌더링할 때 스크롤 성능 저하',
        solution:
          'React Virtualized를 활용한 가상 스크롤 구현으로 DOM 노드 수를 제한하고, Intersection Observer API로 메시지 로딩 최적화하여 렌더링 성능 80% 개선',
      },
      {
        problem: '네트워크 불안정으로 인한 메시지 유실 및 순서 보장 문제',
        solution:
          '메시지 큐잉 시스템을 구현하여 오프라인 시 메시지를 로컬에 저장하고, 재연결 시 자동 재전송. 메시지 시퀀스 넘버를 활용해 순서 보장',
      },
      {
        problem: '채팅 히스토리가 증가하면서 데이터베이스 조회 속도 저하',
        solution:
          'MongoDB의 인덱싱 전략을 최적화하고, 채팅방별 샤딩을 구현. 페이지네이션과 캐싱을 조합하여 평균 조회 시간을 500ms에서 50ms로 단축',
      },
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
    preTags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    tags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    image: '/project1/cover_p1.png',
    detailImages: ['/project2-detail1.png', '/project2-detail2.png'],
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
      {
        problem: '동시 접속자가 많을 때 서버 응답 지연 및 메시지 전송 실패',
        solution:
          'Socket.IO의 Room 기능과 Redis Adapter를 도입하여 수평 확장이 가능한 구조로 변경하고, 연결 풀링으로 동시 접속 처리 능력을 5배 향상',
      },
      {
        problem: '수천 개의 메시지를 렌더링할 때 스크롤 성능 저하',
        solution:
          'React Virtualized를 활용한 가상 스크롤 구현으로 DOM 노드 수를 제한하고, Intersection Observer API로 메시지 로딩 최적화하여 렌더링 성능 80% 개선',
      },
      {
        problem: '네트워크 불안정으로 인한 메시지 유실 및 순서 보장 문제',
        solution:
          '메시지 큐잉 시스템을 구현하여 오프라인 시 메시지를 로컬에 저장하고, 재연결 시 자동 재전송. 메시지 시퀀스 넘버를 활용해 순서 보장',
      },
      {
        problem: '채팅 히스토리가 증가하면서 데이터베이스 조회 속도 저하',
        solution:
          'MongoDB의 인덱싱 전략을 최적화하고, 채팅방별 샤딩을 구현. 페이지네이션과 캐싱을 조합하여 평균 조회 시간을 500ms에서 50ms로 단축',
      },
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
    preTags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    tags: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB'],
    image: '/project1/cover_p1.png',
    detailImages: ['/project2-detail1.png', '/project2-detail2.png'],
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
      {
        problem: '동시 접속자가 많을 때 서버 응답 지연 및 메시지 전송 실패',
        solution:
          'Socket.IO의 Room 기능과 Redis Adapter를 도입하여 수평 확장이 가능한 구조로 변경하고, 연결 풀링으로 동시 접속 처리 능력을 5배 향상',
      },
      {
        problem: '수천 개의 메시지를 렌더링할 때 스크롤 성능 저하',
        solution:
          'React Virtualized를 활용한 가상 스크롤 구현으로 DOM 노드 수를 제한하고, Intersection Observer API로 메시지 로딩 최적화하여 렌더링 성능 80% 개선',
      },
      {
        problem: '네트워크 불안정으로 인한 메시지 유실 및 순서 보장 문제',
        solution:
          '메시지 큐잉 시스템을 구현하여 오프라인 시 메시지를 로컬에 저장하고, 재연결 시 자동 재전송. 메시지 시퀀스 넘버를 활용해 순서 보장',
      },
      {
        problem: '채팅 히스토리가 증가하면서 데이터베이스 조회 속도 저하',
        solution:
          'MongoDB의 인덱싱 전략을 최적화하고, 채팅방별 샤딩을 구현. 페이지네이션과 캐싱을 조합하여 평균 조회 시간을 500ms에서 50ms로 단축',
      },
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
