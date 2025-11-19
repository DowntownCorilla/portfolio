// 프로젝트 타입 정의

export interface Project {
  id: number;
  title: string;
  // 짧은 요약 (카드에 표시)
  description: string;
  // 상세 설명 (모달에 표시)
  detailedDescription?: string;
  tags: string[];
  image: string;
  // 추가 이미지들 (모달에서 갤러리로 표시 가능)
  additionalImages?: string[];
  github: string;
  // 라이브 데모 URL (선택사항)
  liveUrl?: string;
  // 프로젝트 기간
  period?: string;
  // 주요 기능 목록
  features?: string[];
  // 기술적 도전과제 및 해결방안
  challenges?: string[];
  // 프로젝트에서의 역할
  role?: string;
  // 팀 규모
  teamSize?: string;
}

