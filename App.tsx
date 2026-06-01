/**
 * ============================================================
 * 하냥이 (Hanyangi) - 앱 진입점
 * ============================================================
 * - Safe Area / Status Bar 설정
 * - React Query Provider
 * - Gesture Handler Root View
 * - 최상위 RootNavigator 마운트
 * ============================================================
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';

import { RootNavigator } from '@/navigation/RootNavigator';
import { colors } from '@/constants/theme';

// React Query 클라이언트 - 전역 단일 인스턴스
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 네트워크 재시도 1회, 화면 포커스 시 자동 refetch
      retry: 1,
      refetchOnWindowFocus: true,
      // 5분 stale time - 과한 요청 방지
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="dark" backgroundColor={colors.background} />
          <RootNavigator />
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export default App;
