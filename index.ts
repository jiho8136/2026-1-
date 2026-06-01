/**
 * ============================================================
 * 하냥이 앱 전역 타입 정의
 * ============================================================
 * 이 파일은 앱 전반에서 사용하는 핵심 도메인 타입을 정의합니다.
 * 각 도메인별 세부 타입은 별도 파일로 분리할 수 있습니다.
 *   - task.ts: 과제 관련 타입
 *   - user.ts: 사용자 관련 타입
 *   - friend.ts: 친구/친선전 관련 타입
 * ============================================================
 */

// ============================================================
// 폭력도(Violence Level) - 하냥이의 재촉 강도
// ============================================================

/** 폭력도 단계: 1(다정함) → 2(불만족) → 3(극한 압박) */
export type ViolenceLevel = 1 | 2 | 3;

/** 하냥이 캐릭터의 감정 상태 */
export type HanyangiMood =
  | 'happy' // 행복함 (보통/완료 시)
  | 'neutral' // 평온
  | 'worried' // 걱정함 (마감 임박)
  | 'angry' // 화남 (지각 위험)
  | 'furious' // 분노 (마감 초과 직전)
  | 'sad' // 슬픔 (실패)
  | 'celebrating'; // 축하 (완료/달성)

// ============================================================
// 과제(Task) 관련
// ============================================================

/** 과제의 중요도 분류 */
export type ImportanceLevel =
  | 'major_required' // 전공 필수
  | 'major_elective' // 전공 선택
  | 'general_required' // 필수 교양
  | 'general_elective' // 선택 교양
  | 'personal'; // 개인 공부

/** 과제 카테고리 */
export type TaskCategory =
  | 'assignment' // 과제
  | 'exam' // 시험
  | 'reading' // 읽기
  | 'project' // 프로젝트
  | 'other'; // 기타

/** 과제 진행 상태 */
export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'overdue';

/** 난이도 1~5 */
export type Difficulty = 1 | 2 | 3 | 4 | 5;

/** 시간 블록 - ML이 추천한 학습 단위 */
export interface TimeBlock {
  id: string;
  taskId: string;
  startTime: Date;
  endTime: Date;
  completed: boolean;
  completedAt?: Date;
  /** 사용자가 보고하거나 측정한 집중도 점수 (0~100) */
  focusScore?: number;
  /** ML이 예측한 성공률 (0~1) */
  mlPredictedSuccess?: number;
}

/** 과제 */
export interface Task {
  id: string;
  userId: string;
  title: string;
  subject: string; // 과목명
  description?: string;
  category: TaskCategory;
  importance: ImportanceLevel;
  /** 예상 소요 시간 (시간 단위) */
  estimatedHours: number;
  deadline: Date;
  createdAt: Date;
  updatedAt?: Date;
  /** ML이 자동 배치한 시간 블록 목록 */
  scheduledBlocks?: TimeBlock[];
  status: TaskStatus;
  completedAt?: Date;
  /** 사용자가 입력한 난이도 */
  difficulty: Difficulty;
}

// ============================================================
// 사용자(User) 관련
// ============================================================

/** 집중도 티어 - 사용자의 공부 등급 */
export type UserTier =
  | 'bronze' // 브론즈
  | 'silver' // 실버
  | 'gold' // 골드
  | 'platinum' // 플래티넘
  | 'diamond' // 다이아
  | 'master'; // 마스터

/** 사용자 설정 */
export interface UserSettings {
  /** 기본 폭력도 - 사용자가 선택한 강도 */
  preferredViolenceLevel: ViolenceLevel;
  /** 알림 활성화 여부 */
  notificationsEnabled: boolean;
  /** 야간 방해 금지 시작 시간 (예: '22:00') */
  doNotDisturbStart?: string;
  doNotDisturbEnd?: string;
  /** 자동 폭력도 다운 (번아웃 감지 시) 활성 여부 */
  autoCooldownEnabled: boolean;
  /** 다크모드 */
  darkMode: boolean;
}

/** 사용자 */
export interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  school?: string;
  major?: string;
  tier: UserTier;
  /** 누적 포인트 - 티어 산정 기준 */
  totalPoints: number;
  /** 연속 학습 일수 */
  streakDays: number;
  settings: UserSettings;
  createdAt: Date;
}

/** 사용자 지표 - ML 입력 피처에 사용 */
export interface UserMetrics {
  userId: string;
  /** 평균 완료율 (0~1) */
  averageCompletionRate: number;
  /** 평균 집중도 점수 (0~100) */
  averageFocusScore: number;
  /** 미루기 지수 (0~1) - 1에 가까울수록 자주 미룸 */
  procrastinationIndex: number;
  /** 과목별 과거 완료율 매핑 */
  subjectCompletionRates: Record<string, number>;
  updatedAt: Date;
}

// ============================================================
// 친구 / 친선전(Match) 관련
// ============================================================

export type FriendshipStatus = 'pending' | 'accepted' | 'blocked';

export interface Friend {
  id: string;
  userId: string;
  friendId: string;
  friendInfo: Pick<User, 'username' | 'displayName' | 'avatarUrl' | 'tier'>;
  status: FriendshipStatus;
  since: Date;
}

export type MatchStatus = 'pending' | 'active' | 'completed' | 'cancelled';

/** 친선전 - 친구와의 공부 진척도 대결 */
export interface Match {
  id: string;
  challengerId: string;
  opponentId: string;
  startDate: Date;
  endDate: Date;
  status: MatchStatus;
  /** 점수: 각 참가자별 누적 점수 */
  scores: {
    challenger: number;
    opponent: number;
  };
  winnerId?: string;
}

// ============================================================
// 알림(Notification) 관련
// ============================================================

/** 알림 트리거 유형 */
export type NotificationTrigger =
  | 'block_starting' // 시간 블록 시작 예정
  | 'block_overdue' // 시간 블록 시작 시간 지남
  | 'deadline_approaching' // 마감 가까움
  | 'deadline_critical' // 마감 임박
  | 'task_completed' // 과제 완료
  | 'friend_taunt'; // 친선전 도발

export interface HanyangiNotification {
  id: string;
  trigger: NotificationTrigger;
  violenceLevel: ViolenceLevel;
  title: string;
  body: string;
  scheduledAt: Date;
  /** 관련 과제/블록 ID */
  taskId?: string;
  blockId?: string;
}

// ============================================================
// 공용 API 응답 타입
// ============================================================

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
}
