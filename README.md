# 🐱 하냥이 (Hanyangi)

> 고양이 캐릭터 "하냥이"가 ML로 사용자의 공부 습관을 학습하여, 과제를 자동 배치하고 폭력도 단계에 따라 점점 강하게 재촉하는 공부 관리 앱

---

## 🎯 핵심 기능

1. **과제 입력** — 마감일, 중요도, 난이도 입력
2. **ML 기반 자동 배치** — 사용자 패턴을 학습해 캘린더에 최적 시간 블록 배치
3. **폭력도 3단계 알림** — 다정한 격려부터 강한 압박까지, 캐릭터 표정/말투가 변화
4. **집중도 티어 시스템** — 브론즈 ~ 마스터 6단계
5. **친선전** — 친구와 공부 진척도 1:1 대결

## 🛠 기술 스택

- **Frontend**: React Native (Expo SDK 51) + TypeScript (strict)
- **상태관리**: Zustand + React Query
- **네비게이션**: React Navigation v6
- **폼**: react-hook-form + zod
- **애니메이션**: react-native-reanimated
- **백엔드**: FastAPI (Python) — 별도 레포
- **ML**: TensorFlow/Keras + scikit-learn

---

## 📦 설치

### 1. 사전 요구사항

- Node.js ≥ 18.x
- Yarn ≥ 1.22 (또는 npm ≥ 9)
- iOS 시뮬레이터 (Xcode) 또는 Android 에뮬레이터 (Android Studio)
- Expo Go 앱 (실기기 테스트용)

### 2. 의존성 설치

```bash
yarn install
# 또는
npm install
```

### 3. 환경변수 설정

```bash
cp .env.example .env
# .env 파일을 열어 필요한 값을 채워주세요
```

### 4. 실행

```bash
# Expo 개발 서버 시작
yarn start

# iOS 시뮬레이터로 실행
yarn ios

# Android 에뮬레이터로 실행
yarn android

# 웹 브라우저로 실행
yarn web
```

---

## 📁 폴더 구조

```
hanyangi/
├── App.tsx                    # 앱 진입점
├── app.json                   # Expo 설정
├── babel.config.js            # 경로 alias / Reanimated 플러그인
├── tsconfig.json              # TypeScript strict 설정
├── .env.example               # 환경변수 템플릿
└── src/
    ├── screens/               # 화면 컴포넌트 (Home, AddTask, Match, MyPage 등)
    ├── components/            # 재사용 컴포넌트 (Hanyangi, TaskCard 등)
    ├── navigation/            # 네비게이션 설정
    │   ├── RootNavigator.tsx
    │   └── MainTabNavigator.tsx
    ├── services/              # API 호출, 비즈니스 로직
    ├── store/                 # Zustand 스토어
    ├── hooks/                 # 커스텀 훅
    ├── types/                 # TypeScript 타입 정의
    ├── utils/                 # 유틸 함수 (validation, message 생성 등)
    ├── assets/                # 이미지, 폰트
    │   └── hanyangi/          # 하냥이 캐릭터 이미지 (mood × violenceLevel)
    └── constants/             # 상수 (theme.ts)
```

---

## 🎨 디자인 시스템

- **메인 컬러**: `#FFB6A3` (산호색)
- **폭력도 색상**: Lv1 부드러운 핑크 → Lv2 진한 산호 → Lv3 강렬한 빨강
- **폰트**: Pretendard (한글 최적화)

자세한 토큰은 `src/constants/theme.ts` 참고.

---

## 🚀 개발 로드맵

이 프로젝트는 단계별 STEP으로 진행됩니다:

- ✅ **STEP 0**: 프로젝트 초기 셋업 (현재 단계)
- ⏳ **STEP 1**: 디자인 시스템 + 하냥이 캐릭터 컴포넌트
- ⏳ **STEP 2**: 과제 입력 화면
- ⏳ **STEP 3**: ML 백엔드 (합성 데이터셋 + 모델 학습)
- ⏳ **STEP 4**: 캘린더 + ML 자동 배치
- ⏳ **STEP 5**: 폭력도 알림 시스템 (핵심 차별점)
- ⏳ **STEP 6**: 티어 시스템
- ⏳ **STEP 7**: 친선전
- ⏳ **STEP 8**: 마이페이지 + 인증
- ⏳ **STEP 9**: 캐릭터 에셋
- ⏳ **STEP 10**: API 통합
- ⏳ **STEP 11**: 테스트 & 배포

---

## 🧪 스크립트

```bash
yarn lint          # ESLint 검사
yarn lint:fix      # ESLint 자동 수정
yarn format        # Prettier 포맷팅
yarn type-check    # TypeScript 타입 검사
yarn test          # Jest 테스트 실행
```

---

## ⚠️ 윤리적 가이드라인

폭력도 레벨 3는 츤데레 컨셉의 압박 메시지로 구현되며, 다음 원칙을 지킵니다:

- 사용자가 우울/번아웃 신호를 보이면 자동으로 폭력도 다운
- 청소년 보호를 위한 가이드라인 준수
- 사용자가 언제든지 폭력도를 직접 조절 가능
- 정신건강 관련 도움말 링크 제공 (필요 시)

---

## 📝 라이선스

추후 추가 예정
