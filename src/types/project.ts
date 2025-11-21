// 프로젝트 타입 정의

// 기술적 도전과제와 해결방안
export interface Challenge {
  // 직면한 문제 또는 도전과제
  problem: string;
  // 문제를 해결한 방법
  solution: string;
}

export interface Project {
  id: number;
  title: string;
  // 짧은 요약 (카드에 표시)
  description: string;
  // 상세 설명 (모달에 표시)
  detailedDescription?: string;
  // 기술스택 요약 (카드에 표시)
  preTags: string[];
  // 기술스택 상세 (모달에 표시)
  tags: string[];
  image: string;
  // 추가 이미지들 (모달에서 갤러리로 표시 가능)
  detailImages?: string[];
  github: string;
  // 라이브 데모 URL (선택사항)
  liveUrl?: string;
  // 프로젝트 기간
  period?: string;
  // 주요 기능 목록
  features?: string[];
  // 기술적 도전과제 및 해결방안
  challenges?: Challenge[];
  // 프로젝트에서의 역할
  role?: string;
  // 팀 규모
  teamSize?: string;
}
