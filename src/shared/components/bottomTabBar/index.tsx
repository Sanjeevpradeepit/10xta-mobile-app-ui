import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Home, Briefcase, CheckCircle, MessageCircleMore, } from 'lucide-react-native';
import { createStyles } from './styles';
import { useThemedStyles } from '@/shared/theme';

function useDeepestRoute() {
  const state = useNavigationState(s => s);
  let route: any = state.routes[state.index];
  while (route.state) route = route.state.routes[route.state.index];
  return route.name;
}

export default function BottomTabBar() {
  const navigation = useNavigation<any>();
  const route = useDeepestRoute();
  const styles = useThemedStyles(createStyles);

  const activeTab =
    route === 'JobsList' || route === 'JobDetails'
      ? 'JobsTab'
      : route;

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const index =
      activeTab === 'Home' ? 0 :
      activeTab === 'JobsTab' ? 1 :
      activeTab === 'Applications' ? 2 : 3;

    Animated.spring(translateX, {
      toValue: index * 90,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);

  return (
    <View style={styles.wrapper}>
      {/* Hide bar on JobDetails */}
      {route !== 'JobDetails' && (
        <>
          <View style={styles.row}>
            <Tab icon={Home} label="Home" active={activeTab === 'Home'} onPress={() => navigation.navigate('Home')} />
            <Tab icon={Briefcase} label="Jobs" active={activeTab === 'JobsTab'} onPress={() => navigation.navigate('JobsTab')} />
            <Tab icon={CheckCircle} label="Applications" active={activeTab === 'Applications'} onPress={() => navigation.navigate('Applications')} />
            <Tab icon={MessageCircleMore} label="Chat" active={activeTab === 'Chat'} onPress={() => console.log("")} />
          </View>

          <View style={styles.indicatorContainer}>
            <Animated.View
              style={[styles.indicator, { transform: [{ translateX }] }]}
            />
          </View>
        </>
      )}
    </View>
  );
}

function Tab({ icon: Icon, label, active, onPress }: any) {
  const styles = useThemedStyles(createStyles);

  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Icon size={22} color={active ? '#1A73E8' : '#9AA0A6'} />
      <Text style={[styles.label, active && styles.active]}>{label}</Text>
    </TouchableOpacity>
  );
}
