/**
 * ============================================================
 * RootNavigator - 앱 최상위 네비게이션
 * ============================================================
 * 인증 상태에 따라 Auth Stack 또는 Main Tab 네비게이터를 보여줍니다.
 * (현재는 메인 탭만 기본으로 설정. 인증 화면은 STEP 8에서 추가)
 * ============================================================
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainTabNavigator } from './MainTabNavigator';

/** Root Stack의 라우트 타입 정의 */
export type RootStackParamList = {
  Main: undefined;
  // 인증 화면들은 추후 추가 예정
  // Login: undefined;
  // SignUp: undefined;
  // 모달 형태 화면들
  TaskDetail: { taskId: string };
  MatchDetail: { matchId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          // 자연스러운 페이지 전환 효과
          animation: 'slide_from_right',
        }}
      >
        <RootStack.Screen name="Main" component={MainTabNavigator} />
        {/*
          TODO: 후속 STEP에서 추가할 화면들
          <RootStack.Screen name="TaskDetail" component={TaskDetailScreen} />
          <RootStack.Screen name="MatchDetail" component={MatchDetailScreen} />
        */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
