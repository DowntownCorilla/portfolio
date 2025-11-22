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
    detailImages: [
      '/project1/cover_p1.png',
      '/project1/landing_p1.png',
      '/project1/editor_p1.png',
      '/project1/payment_p1.png',
      '/project1/mypage_p1.png',
    ],
    github: 'https://github.com/MailMovers/mailmavers-frontend',
    liveUrl: 'https://mailtree.co.kr',
    period: '2024.08 - 2025.06 (10개월)',
    role: 'Frontend Developer',
    teamSize: '팀 프로젝트 (풀스택 1명, 프론트엔드 1명, 백엔드 2명)',
    contributionRate: 'Main Frontend Developer (기여도 70% 이상)',
    // 주요 기여 및 담당 업무
    contributions: [
      '상품 목록/상세, 메인 홈 화면 등 핵심 사용자 화면 고도화 진행',
      '장바구니 및 결제 플로우 고도화 (Toss Payments 연동)',
      '로그인·회원가입·세션 관리 등 인증 로직 구현',
      '마이페이지 전체 기능 개발',
      '사진 업로드 및 이미지 크롭 기능 구현',
      'React Native WebView 대응 및 모바일 앱 UI/기능 최적화',
      '전역 상태관리 및 대부분의 API 연동 구조 개발',
    ],
    // 기술적 도전과제 및 해결방안
    challenges: [
      {
        problem: '로그인 상태 관리 불일치 및 토큰 갱신 문제',
        solution:
          'Axios Interceptor에서 401 에러 발생 시 LocalStorage의 토큰을 직접 갱신하고 헤더를 재설정한 뒤 원본 요청을 재수행하도록 일원화하여, 상태 관리 라이브러리(Recoil) 의존성을 제거하고 인증 로직의 신뢰성 확보',
      },
      {
        problem: 'iOS에서 이미지 크롭 시 배경이 투명/검정으로 나오는 문제',
        solution:
          "globalCompositeOperation = 'destination-over' 속성을 활용해 캔버스 최하단 레이어에 강제로 흰색(fillStyle = '#FFFFFF')을 합성하여, iOS에서도 일관된 흰색 배경이 적용되도록 구현",
      },
      {
        problem: 'iOS에서 PNG 포맷 이미지 등록 실패 및 호환성 문제',
        solution:
          'User Agent로 iOS 환경을 감지(isIOS)하여, iOS일 때만 압축 효율이 좋은 image/jpeg (품질 0.9) 포맷으로 변환(toDataURL)하고 Blob으로 재가공하여 업로드 안정성 확보',
      },
      {
        problem: '결제 프로세스의 복잡한 상태 관리 최적화 (Props Drilling 해결)',
        solution: `1. 상태 분리 전략: 페이지 내에서만 일시적으로 쓰이는 UI 상태(모달 Open 여부 등)는 Custom Hook(useModal)으로 분리하여 로직을 캡슐화.
                   2. 전역 상태 도입: 여러 컴포넌트 깊숙이 전달되어야 하거나 다른 페이지(주소록 모달 등)와 공유해야 하는 데이터(주소 정보, 선택한 우표 등)는 Recoil Atom(selectedSenderAddressDataState 등)으로 전역 관리하여 Props 전달 없이 필요한 컴포넌트에서 직접 구독하여 사용하도록 리팩토링.`,
      },
      {
        problem: '소셜 로그인 연동 시 인증 플로우 문제 발생',
        solution: `초기에는 클라이언트(프론트)에서 소셜 로그인 SDK로 직접 인증 코드를 받아 백엔드로 전달하려 했으나, 인가 코드(Authorization Code)만으로는 회원가입 여부 확인 및 JWT 토큰 발급이 불가능함을 인지함.
                   프론트엔드는 "로그인 요청"만 보내고, 실제 인증/회원가입/토큰 발급은 백엔드에서 처리한 후 리다이렉트 URL을 통해 결과(토큰)만 프론트로 전달받는 방식으로 플로우 재설계.`,
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
    contributions: [
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
    contributions: [
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
    contributions: [
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
