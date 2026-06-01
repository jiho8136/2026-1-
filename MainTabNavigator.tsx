/**
 * ============================================================
 * MainTabNavigator - 메인 하단 탭 네비게이션
 * ============================================================
 * 4개의 메인 탭:
 *   1. 홈 (캘린더 + 오늘의 과제)
 *   2. 과제 추가
 *   3. 친선전
 *   4. 마이페이지
 *
 * 실제 화면 컴포넌트는 후속 STEP에서 만들고, 여기서는
 * 플레이스홀더 화면을 사용합니다.
 * ============================================================
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors, spacing, typography } from '@/constants/theme';

/** 메인 탭의 라우트 타입 */
export type MainTabParamList = {
  Home: undefined;
  AddTask: undefined;
  Match: undefined;
  MyPage: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

// ----- 임시 플레이스홀더 화면들 (후속 STEP에서 교체) -----

interface PlaceholderProps {
  title: string;
  description?: string;
}

const PlaceholderScreen: React.FC<PlaceholderProps> = ({ title, description }) => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderTitle}>{title}</Text>
    {description ? <Text style={styles.placeholderDesc}>{description}</Text> : null}
  </View>
);

const HomeScreen = () => (
  <PlaceholderScreen title="🏠 홈" description="여기에 캘린더와 오늘의 과제가 표시됩니다" />
);
const AddTaskScreen = () => (
  <PlaceholderScreen title="➕ 과제 추가" description="STEP 2에서 폼이 구현됩니다" />
);
const MatchScreen = () => (
  <PlaceholderScreen title="⚔️ 친선전" description="친구와의 공부 대결" />
);
const MyPageScreen = () => (
  <PlaceholderScreen title="🐱 마이페이지" description="내 정보 및 통계" />
);

// ----- Tab Bar Icon (이모지로 임시 처리, 추후 SVG로 교체) -----

type TabIconProps = { focused: boolean; emoji: string };
const TabIcon: React.FC<TabIconProps> = ({ focused, emoji }) => (
  <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>{emoji}</Text>
);

// ----- Navigator -----

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { ...typography.heading3, color: colors.textPrimary },
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarLabelStyle: {
          ...typography.caption,
          fontFamily: 'Pretendard-Medium',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} emoji="🏠" />,
        }}
      />
      <Tab.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{
          title: '과제 추가',
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} emoji="➕" />,
        }}
      />
      <Tab.Screen
        name="Match"
        component={MatchScreen}
        options={{
          title: '친선전',
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} emoji="⚔️" />,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          title: '마이',
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} emoji="🐱" />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  placeholderTitle: {
    ...typography.heading2,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  placeholderDesc: {
    ...typography.body2,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  tabIcon: {
    fontSize: 22,
    opacity: 0.6,
  },
  tabIconActive: {
    opacity: 1,
    fontSize: 24,
  },
});
