/**
 * ============================================================
 * 하냥이 디자인 시스템 (Theme)
 * ============================================================
 * 파스텔 + 따뜻한 톤을 메인으로 하며, 폭력도 단계별로 색상이
 * 점진적으로 강해지는 산호색 → 빨강 그라데이션을 사용합니다.
 *
 * 메인컬러: #FFB6A3 (산호색)
 * ============================================================
 */

// ============================================================
// 컬러 팔레트
// ============================================================
export const colors = {
  /** 메인 산호색 - 브랜드 컬러 */
  primary: '#FFB6A3',
  /** 보조 색상 - 더 부드럽고 밝은 산호 */
  secondary: '#FFE5D9',
  /** 강조 색상 - 진한 산호 (CTA용) */
  accent: '#FF8C7A',

  // 폭력도 단계별 색상 - 캐릭터/알림 톤 전환에 사용
  /** Lv1: 다정한 핑크 - "오늘도 화이팅이다냥~" */
  violenceLevel1: '#FFD4C7',
  /** Lv2: 진한 산호 - "정말 안 할 거야...?" */
  violenceLevel2: '#FF8C7A',
  /** Lv3: 강렬한 빨강 - "지금 당장!!" */
  violenceLevel3: '#D63031',

  // 시스템 색상
  success: '#6BCB77',
  warning: '#FFD93D',
  error: '#FF6B6B',
  info: '#4D96FF',

  // 텍스트
  textPrimary: '#2D3436',
  textSecondary: '#636E72',
  textTertiary: '#B2BEC3',
  textOnPrimary: '#FFFFFF',

  // 배경
  background: '#FFFAF7',
  backgroundSecondary: '#FFF0E8',
  surface: '#FFFFFF',
  surfaceVariant: '#F8F1ED',

  // 보더 / 디바이더
  border: '#F0E2D8',
  divider: '#EAEAEA',

  // 중요도 뱃지 색상
  importance: {
    majorRequired: '#E74C3C', // 전공필수 - 빨강
    majorElective: '#E67E22', // 전공선택 - 주황
    generalRequired: '#3498DB', // 필수교양 - 파랑
    generalElective: '#95A5A6', // 선택교양 - 회색
    personal: '#9B59B6', // 개인공부 - 보라
  },

  // 티어 색상
  tier: {
    bronze: '#CD7F32',
    silver: '#C0C0C0',
    gold: '#FFD700',
    platinum: '#E5E4E2',
    diamond: '#B9F2FF',
    master: '#FF6B9D',
  },

  // 투명 오버레이
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.2)',
  transparent: 'transparent',
} as const;

// ============================================================
// 타이포그래피
// ============================================================
/**
 * 한글 폰트는 Pretendard를 사용합니다.
 * (assets/fonts에서 expo-font로 로드)
 */
export const fontFamily = {
  thin: 'Pretendard-Thin',
  light: 'Pretendard-Light',
  regular: 'Pretendard-Regular',
  medium: 'Pretendard-Medium',
  semibold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
  extrabold: 'Pretendard-ExtraBold',
} as const;

export const typography = {
  heading1: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  heading2: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  heading3: {
    fontFamily: fontFamily.semibold,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.2,
  },
  body1: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  // 버튼용 스타일
  buttonLarge: {
    fontFamily: fontFamily.semibold,
    fontSize: 16,
    lineHeight: 20,
  },
  buttonMedium: {
    fontFamily: fontFamily.semibold,
    fontSize: 14,
    lineHeight: 18,
  },
} as const;

// ============================================================
// 간격 (4의 배수 기반)
// ============================================================
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

// ============================================================
// Border Radius
// ============================================================
export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  /** 완전한 원형용 */
  round: 999,
} as const;

// ============================================================
// 그림자 - iOS / Android 모두 호환
// ============================================================
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
} as const;

// ============================================================
// 애니메이션 duration
// ============================================================
export const animation = {
  fast: 150,
  normal: 250,
  slow: 400,
  verySlow: 600,
} as const;

// ============================================================
// 통합 테마 객체 - 컨텍스트에서 활용
// ============================================================
export const theme = {
  colors,
  fontFamily,
  typography,
  spacing,
  borderRadius,
  shadows,
  animation,
} as const;

export type Theme = typeof theme;
