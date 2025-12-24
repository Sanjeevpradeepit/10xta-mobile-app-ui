import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import Screen from '@/shared/components/screen/Screen';
import CustomHeader from '@/shared/components/customHeader';
import { useThemedStyles } from '@/shared/theme';

import { createStyles } from './styles';
import { APPLICATION_TABS, ApplicationTab } from '../../data/applications.meta';
import { APPLICATION_TAB_COMPONENTS } from './tabs';

export default function ApplicationDetailsScreen({ navigation }: any) {
  const styles = useThemedStyles(createStyles);
  const [tab, setTab] = useState<ApplicationTab>(APPLICATION_TABS.SUMMARY);
  const ActiveTab = APPLICATION_TAB_COMPONENTS[tab];

  return (
    <Screen
      keyboardAvoid
      scroll
      listMode
      header={<CustomHeader onPressBack={() => navigation.goBack()} title="Candidate Details" />}
    >
      <View style={styles.container}>
        {/* Tabs */}
        <View style={styles.tabBar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Object.values(APPLICATION_TABS).map(t => (
              <TouchableOpacity key={t} onPress={() => setTab(t)}>
                <Text style={[styles.tab, tab === t && styles.activeTab]}>
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Active Tab */}
        <View style={styles.content}>
          {ActiveTab && <ActiveTab />}
        </View>
      </View>
    </Screen>
  );
}
