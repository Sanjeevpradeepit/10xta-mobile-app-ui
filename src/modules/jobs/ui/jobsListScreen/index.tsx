// src/features/jobs/screens/JobsListScreen.tsx
import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import JobCard, {Job} from '../../components/jobCard';
import CustomHeader from '@/shared/components/customHeader';
import Screen from '@/shared/components/screen/Screen';

type JobsStackParamList = {
  JobsList: undefined;
  JobDetails: {jobId: string};
};

type Props = NativeStackScreenProps<JobsStackParamList, 'JobsList'>;

const JOBS: Job[] = [
  {
    id: '1',
    code: 'JD103',
    title: 'iOS Manager',
    company: 'Symphony',
    location: 'Albion, CA, USA',
    statusColor: '#FF8800',
    submissions: 0,
    pipeline: 0,
  },
  {
    id: '2',
    code: 'JD102',
    title: 'iOS Team Lead',
    company: 'Symphony',
    location: 'Albion, CA, USA',
    statusColor: '#FF8800',
    submissions: 2,
    pipeline: 5,
  },
  {
    id: '3',
    code: 'JD104',
    title: 'Android Developer',
    company: 'Google',
    location: 'Mountain View, CA, USA',
    statusColor: '#2F80ED',
    submissions: 12,
    pipeline: 8,
  },
  {
    id: '4',
    code: 'JD105',
    title: 'React Native Engineer',
    company: 'Meta',
    location: 'Menlo Park, CA, USA',
    statusColor: '#6C5CE7',
    submissions: 6,
    pipeline: 4,
  },
  {
    id: '5',
    code: 'JD106',
    title: 'Backend Node.js Developer',
    company: 'Amazon',
    location: 'Seattle, WA, USA',
    statusColor: '#F2994A',
    submissions: 18,
    pipeline: 11,
  },
  {
    id: '6',
    code: 'JD107',
    title: 'DevOps Engineer',
    company: 'Netflix',
    location: 'Los Gatos, CA, USA',
    statusColor: '#EB5757',
    submissions: 9,
    pipeline: 7,
  },
];


const JobsListScreen: React.FC<Props> = ({navigation}) => {
      const onPressBack = () => navigation.goBack();
  return (
      <Screen
          keyboardAvoid
          scroll
          listMode
          
          header={<CustomHeader onPressBack={onPressBack} title="Job Details" />}
        >
      <FlatList
        data={JOBS}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <JobCard
            job={item}
            onPress={() => navigation.navigate('JobDetails', {jobId: item.id})}
          />
        )}
        contentContainerStyle={{paddingVertical: 8}}
      />
    </Screen>
  );
};

export default JobsListScreen;
