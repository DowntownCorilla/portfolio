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
    tags: [
      'Next.js',
      'React',
      'React Native',
      'Emotion',
      'TypeScript',
      'React-query',
      'Axios',
      'Recoil',
      'Recoil-Persist',
      'Toss Payments',
    ],
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
    contributionRate: 'Frontend Developer (기여도 40%)',
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
          'User Agent로 iOS 환경을 감지하여, iOS일 때만 압축 효율이 좋은 image/jpeg (품질 0.9) 포맷으로 변환하고 Blob으로 재가공하여 업로드 안정성 확보',
      },
      {
        problem: '결제 프로세스의 복잡한 상태 관리 최적화 (Props Drilling 해결)',
        solution: `1. 상태 분리 전략: 페이지 내에서만 일시적으로 쓰이는 UI 상태(모달 Open 여부 등)는 Custom Hook(useModal)으로 분리하여 로직을 캡슐화.
                   2. 전역 상태 도입: 여러 컴포넌트 깊숙이 전달되어야 하거나 다른 페이지(주소록 모달 등)와 공유해야 하는 데이터(주소 정보, 선택한 우표 등)는 Recoil Atom으로 전역 관리하여 Props 전달 없이 필요한 컴포넌트에서 직접 구독하여 사용하도록 리팩토링.`,
      },
      {
        problem: '소셜 로그인 연동 시 인증 플로우 문제 발생',
        solution: `초기에는 클라이언트(프론트)에서 소셜 로그인 SDK로 직접 인증 코드를 받아 백엔드로 전달하려 했으나, 인가 코드만으로는 회원가입 여부 확인 및 JWT 토큰 발급이 불가능함을 인지함.
                   프론트엔드는 "로그인 요청"만 보내고, 실제 인증/회원가입/토큰 발급은 백엔드에서 처리한 후 리다이렉트 URL을 통해 결과(토큰)만 프론트로 전달받는 방식으로 플로우 재설계.`,
      },
    ],
  },
  {
    id: 2,
    title: '메일트리(어드민) - 관리자 페이지',
    description: '운영 효율성을 극대화한 Next.js 14 기반의 백오피스 시스템',
    detailedDescription: `
    서비스의 운영 효율을 극대화하기 위해 구축한 Next.js 14 기반의 백오피스 시스템입니다.
운영진이 사용하는 내부 시스템인 만큼 '디자인'보다 '기능 구현의 속도'가 중요하다고 판단하여 Bootstrap을 도입해 UI 개발 시간을 단축했습니다. 이렇게 확보된 리소스를 대량 송장 엑셀 처리, 데이터 시각화, 주문 상태 관리 등 핵심 비즈니스 로직의 완성도를 높이는 데 집중했습니다.
    `,
    preTags: ['Next.js', 'React', 'TypeScript', 'bootstrap SCSS', 'Emotion'],
    tags: ['Next.js', 'React', 'Bootstrap SCSS', 'Emotion', 'TypeScript', 'React-query', 'React-to-Print', 'SheetJS'],
    image: '/project2/dashboard_p2.png',
    detailImages: ['/project2/dashboard_p2.png'],
    github: 'https://github.com/MailMovers/mailtree_admin_frontend',
    period: '2024.10 - 2025.6 (8개월)',
    role: 'Frontend Developer',
    teamSize: '팀 프로젝트 (풀스택 1명, 프론트엔드 1명, 백엔드 1명)',
    contributionRate: 'Frontend Developer (기여도 50%)',
    contributions: [
      'Bootstrap SCSS 도입으로 UI 개발 시간을 단축하고 핵심 비즈니스 로직 구현에 리소스 집중',
      '실무자 협업을 통한 통합 작업 플로우 설계 (기존 3단계 공정을 단일 화면으로 압축하여 업무 효율 극대화)',
      'React-to-Print 기반의 정밀 출력 시스템 구현 (화면과 실물 편지지의 1:1 대응)',
      'SheetJS를 활용한 대용량 데이터 자동화 (일일 출고량 자동 산출 및 우표 데이터 일괄 업로드 처리)',
      '운영 대시보드 구축 및 비즈니스 확장 대응 (매출 지표 시각화 및 추가 상품 기능 도입으로 매출 상승 기여)',
    ],
    challenges: [
      {
        problem:
          '초기 도입한 Vite(SPA) 기반의 Bootstrap 템플릿이 Next.js(SSR) 환경과 빌드 설정 및 라우팅 방식이 달라 호환성 문제가 발생',
        solution:
          'Vite와 Next.js의 번들링 차이를 분석하여 Next.js로 마이그레이션을 진행하고, use client 지시어를 적절히 활용해 클라이언트 전용 라이브러리를 Next.js 14 App Router 환경에 성공적으로 이식하여 개발 생산성을 확보함',
      },
      {
        problem:
          '개발자가 설계한 로직과 현장 실무자의 실제 업무 패턴 간의 괴리로 인해, 기능은 동작하지만 업무 효율이 떨어지는 병목 현상 발견',
        solution: `실무자의 작업 방식을 직접 관찰하며 기획 의도를 설득하는 동시에 피드백을 수용함. 실무 동선에 맞춘 UI 플로우로 전면 재설계하여, '개발된 기능'이 아닌 '쓰이는 기능'을 만드는 사용자 중심의 어드민을 완성함`,
      },
      {
        problem:
          '주문 제작된 A5 변형 규격 편지지 사용으로 인해, 웹 화면과 실제 출력물의 줄바꿈/위치 오차가 발생하고 테스트 용지 낭비가 심함',
        solution:
          'CSS @media print와 @page 규칙을 활용해 커스텀 용지 규격을 코드로 정의하고, 화면상의 픽셀(px)을 실제 물리 단위(mm)와 1:1로 매칭하는 정밀 스타일링을 적용하여 출력 오차를 해결함',
      },
    ],
  },
  {
    id: 3,
    title: 'Telegram Mini App Game (MVP)',
    description: '2차원 배열 알고리즘 기반의 상태 관리와 모바일 인터랙션에 최적화된 웹 게임 프로토타입',
    detailedDescription: `
      텔레그램 미니 앱(Telegram Mini App) 탑재를 목표로 기획된 채굴 게임의 웹 프로토타입(PoC)입니다.

플랫폼 연동에 앞서 게임의 핵심 재미 요소(Core Loop)와 인터랙션 로직을 웹 환경에서 선행 검증하기 위해 개발했습니다. 5x5 그리드 내에서의 충돌 방지 알고리즘, 복잡한 게임 상태 관리, 그리고 모바일 터치 환경에 최적화된 UX를 구현하는 데 집중했습니다.

단순한 기능 구현을 넘어, 제한된 모바일 화면에서 사용자 몰입도를 높이는 '인터랙티브 웹 애플리케이션'의 가능성을 확인한 프로젝트입니다.
    `,
    preTags: ['Next.js', 'React', 'TypeScript', 'Emotion'],
    tags: ['Next.js', 'React', 'TypeScript', 'Emotion'],
    image: '/project3/main_p3.png',
    detailImages: [
      '/project3/main_p3.png',
      '/project3/main2_p3.png',
      '/project3/invite_p3.png',
      '/project3/mission_p3.png',
    ],
    github: 'https://github.com/chowalcamp/miningGame',
    liveUrl: 'https://mining-game-plum.vercel.app',
    period: '2025.4.23 - 2025.4.23 (1일)',
    role: 'Frontend Developer',
    teamSize: '개인 프로젝트',
    contributionRate: 'Frontend Developer (기여도 100%)',
    contributions: [
      'Next.js 14 App Router와 TypeScript를 활용한 타입 안전한 게임 애플리케이션 설계',
      '충돌 감지 알고리즘 및 보석 랜덤 배치 로직 구현',
      'Emotion을 활용한 컴포넌트 기반 스타일링 및 keyframe 애니메이션 시스템 구축',
      '5가지 독립적인 게임 상태(board, gems, coverMap, discoveredGemIds, score)의 효율적 관리',
      '모바일 우선 반응형 디자인 (max-width: 430px) 및 터치 인터랙션 최적화',
      '재사용 가능한 컴포넌트 라이브러리 구축 (cards, layout, gems)',
      '게임 자동 리셋 및 점수 계산 시스템 구현',
    ],
    challenges: [
      {
        problem: '복잡한 다중 게임 상태 관리로 인한 렌더링 최적화 이슈',
        solution:
          'React Hooks(useState, useEffect)를 활용하여 보드 상태, 보석 위치, 커버 맵, 발견된 보석 등 독립적인 상태를 분리 관리하고, 불변성을 유지한 상태 업데이트로 불필요한 리렌더링 방지',
      },
      {
        problem: '5x5 그리드에 다양한 크기의 보석을 겹치지 않게 배치하는 알고리즘 구현',
        solution:
          '2D 배열 기반 충돌 감지 알고리즘을 구현하여 각 보석 배치 시 영역 검사를 수행하고, 최대 100회 재시도 로직으로 보드 생성 성공률 보장',
      },
      {
        problem: '클릭 시 즉각적인 피드백과 부드러운 애니메이션 구현',
        solution:
          'Emotion keyframes와 CSS transform을 활용한 하드웨어 가속 애니메이션 구현으로 60fps 유지, setTimeout을 활용한 애니메이션 시퀀스 제어로 자연스러운 게임 플로우 구현',
      },
    ],
  },
  {
    id: 4,
    title: 'Naver Blog Content Simulator (PoC)',
    description:
      'OpenAI API를 활용한 컨텐츠 생성, 네이버 블로그 디자인 요소(인용구, 구분선) 외부 구현 가능성 검증 및 커스텀 마크다운 엔진 개발',
    detailedDescription: `
      인턴쉽 중에, 네이버 블로그 관련 서비스를 연구하던 중, 네이버 블로그 사용자들의 번거로움을 줄이기 위한 기능을 연구하던 프로젝트 입니다.
      네이버에서 블로그 자동 포스팅은 엄격하게 제제를 하고 있기 때문에, 이 프로젝트는 네이버 블로그 디자인 요소(인용구, 구분선) 외부 구현 가능성 검증을 목표로 하였습니다.
      사용자는 주제만 정하고, 그에 맞는 글을 OpenAI API를 활용하여 자동으로 생성하고, 네이버 블로그 디자인 요소(인용구, 구분선)을 외부 구현하여 사용자가 쉽게 블로그 포스팅을 할 수 있도록 하였습니다.
    `,
    preTags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'CSS Modules',
      'React-Query',
      'OpenAI API',
      'React-Markdown',
      'React-Hook-Form',
      'Playwright',
    ],
    image: '/project4/cover_p4.png',
    detailImages: [
      '/project4/cover_p4.png',
      '/project4/template_p4.png',
      '/project4/markdown_p4.png',
      '/project4/gif_quote_p4.gif',
      '/project4/gif_divider_p4.gif',
      '/project4/gif_highlighter_p4.gif',
    ],
    github: 'https://github.com/DowntownCorilla/blog-posting-markdown',
    liveUrl: 'https://blog-posting-markdown.vercel.app/',
    period: '2025.9.09 - 2025.9.10 (2일)',
    role: 'Frontend Developer',
    teamSize: '개인 프로젝트',
    contributionRate: 'Frontend Developer (기여도 100%)',
    contributions: [
      'Naver Editor UX 미러링을 위한 커스텀 마크다운 엔진 개발',
      'OpenAI API를 활용하여 커스텀 마크다운 문법이 적용된 콘텐츠 생성 로직 구현',
      'AI-Native Workflow(Full Vibe Coding) 도입 및 생산성 극대화',
      '봇 탐지 정책 위반 방지를 위한 "Safe Copy" 프로세스 설계',
    ],
    challenges: [
      {
        problem:
          'Client-Side에서 OpenAI API 직접 호출 시 API Key 및 프롬프트 로직이 네트워크 탭에 노출되는 보안 취약점 발생',
        solution:
          'Next.js 서버사이드 API Route를 활용하여 클라이언트와 OpenAI 간의 직접 통신을 차단하고, API Key와 프롬프트 로직이 브라우저에 노출되지 않도록 보안을 강화함',
      },
      {
        problem:
          'LLM의 환각(Hallucination) 현상으로 인해 개발자가 정의한 커스텀 문법을 무시하거나 표준 마크다운과 혼용하여 렌더링 오류 발생',
        solution:
          'System Prompt Engineering을 적용하여 페르소나 부여, 강력한 제약 조건(Constraints) 주입, Few-Shot 예시 제공을 통해 AI의 출력을 엄격하게 통제하고 문법 준수율을 확보함',
      },
      {
        problem:
          '네이버 블로그 고유의 디자인 요소(다양한 스타일의 인용구, 구분선 등)는 표준 마크다운 문법으로는 표현이 불가능하며, AI에게 복잡한 HTML/CSS 코드를 직접 생성하게 할 경우 토큰 낭비 및 구조적 오류의 발생 위험이 큼',
        solution:
          'AI가 생성하기 쉽고 명확한 독자적인 커스텀 마크다운 문법(:::quote-type:::)을 설계하여 토큰 효율성을 높이고, 프론트엔드에서 이를 해석하여 디자인 컴포넌트로 매핑하는 정규식 기반 커스텀 파서를 직접 개발하여 렌더링 안정성을 확보함',
      },
    ],
  },
  {
    id: 5,
    title: '플랜 A - AI 최적화 웨딩 플래너',
    description: '2025 새싹 해커톤 출전작: 사용자의 결정 피로감을 줄이는 AI 웨딩 플래너 앱',
    detailedDescription: `
      사용자의 정보를 입력받아, 스튜디오, 드레스, 메이크업, 웨딩홀 의 최적 조합을 추천하는 AI 웨딩 플래너 앱 입니다. 
      기존 사용자의 '결정 피로감'을 줄이기 위해 최적의 플랜A를 추천해주고, 필터링된 데이터를 제공함으로써 사용자가 원하는 플랜을 쉽게 조립할 수 있습니다.
    `,
    preTags: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT', 'OpenAI API'],
    tags: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT', 'OpenAI API', 'LangChain'],
    image: '/project5/cover_p5.png',
    detailImages: [
      '/project5/cover_p5.png',
      '/project5/research_p5.png',
      '/project5/example_p5.png',
      '/project5/future_p5.png',
      '/project5/apis_p5.png',
    ],
    github: 'https://github.com/dacon-winner/planA',
    liveUrl: 'https://view-glory-27028433.figma.site/',
    liveUrlNote: '⚠️ Figma 디자인 프로토타입만 확인 가능합니다',
    period: '2025.11.26 - 2025.12.02 (7일)',
    role: 'Backend Developer',
    teamSize: '팀 프로젝트 (풀스택 1명, 프론트엔드 2명, 백엔드 1명)',
    contributionRate: 'Backend Developer (기여도 30%)',
    contributions: [
      'DB 스키마 재설계 및 TypeORM 마이그레이션 구현',
      '21개의 RESTful API 엔드포인트 설계 및 구현',
      'RAG 패턴 기반 AI 추천 엔진 구현',
      'LangChain + OpenAI 기반 AI 추천 시스템 개발 (SSE 스트리밍)',
      'Swagger를 활용한 완벽한 API 문서화',
      '복잡한 비즈니스 규칙 구현 (예약-업체 연동, Soft Delete 등)',
    ],
    challenges: [
      {
        problem:
          '초기 설계에서 사용자가 하나의 플랜만 가질 수 있는 구조로 설계되어 있어, 사용자가 여러 플랜을 가질 수 있도록 기획 변경 시 데이터 구조 재설계가 필요함',
        solution:
          '기존 사용자(USER)에 사용자 입력정보가 포함되어있어, 플랜(PLAN)과 1:1 관계가 성립함, 이를 분리하기 위해 사용자 입력 정보 테이블(USERS_INFO)을 추가하여 사용자와 플랜을 1:N 관계로, 사용자 입력 정보를 플랜과 1:1 관계로 연결하여 변경함. 이를 통해 사용자는 여러 플랜을 비교해보고, 최적의 플랜을 고르기 위해 편집과, 비교플랜 생성을 자유롭게 할 수 있게 됨',
      },
      {
        problem: '초기단계에 적은 데이터와, 적은 리소스로 유지가 가능한 AI 인프라 구축이 필요함.',
        solution:
          'DB에서 사용자 조건에 맞는 업체들을 각 업종별로 10개씩 선정해 AI 컨텍스트에 포함하는 RAG 패턴 기반 AI 추천 엔진 구현으로 초기 데이터 규모 제한 속에서도 실시간 추천 성능 유지함. AI 로직 한번에 약 0.4원 정도의 비용이 소모됨',
      },
      {
        problem:
          '어플 특성상 긴 시간을 기다리는 것은 사용자 이탈 우려가 있음, AI 제너레이팅시, 중간 중간 진행 상황을 사용자에게 제공해야 함',
        solution:
          'Server-Sent Events(SSE) + LangChain 스트리밍 적용. AsyncGenerator로 AI 응답 청크를 실시간 전송하여 진행 상황 단계별 제공힘',
      },
      {
        problem: '플랜 삭제 시 관련 예약/통계 데이터 손실 우려',
        solution:
          'deleted_at 컬럼을 사용한 Soft Delete 방식 채택으로 이후 서비스 진행시, 예약은 되어있는데, 플랜이 사라져서 관련 예약이 손실되는 경우를 방지함',
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
