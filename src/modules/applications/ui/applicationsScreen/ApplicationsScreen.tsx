import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { APPLICATIONS } from '../../data/applications.meta';
import ApplicationCard from '../../components/applicationCard';
import CustomHeader from '@/shared/components/customHeader';
import Screen from '@/shared/components/screen/Screen';

export default function ApplicationsScreen({navigation}:any) {

     const onPressBack = () => navigation.goBack();
  return (
     <Screen
                  keyboardAvoid
                  scroll
                  listMode
                  
                  header={<CustomHeader onPressBack={onPressBack} title="Appplications" />}
                >
    <View style={{ flex: 1, padding: 12 }}>

      <FlashList
        data={APPLICATIONS}
        renderItem={({ item }) => <ApplicationCard item={item} />}
        estimatedItemSize={120}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </Screen>
  );
}
