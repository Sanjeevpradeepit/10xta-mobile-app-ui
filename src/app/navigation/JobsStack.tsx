import JobDetailsScreen from '@/modules/jobs/ui/jobDetailScreen';
import JobsListScreen from '@/modules/jobs/ui/jobsListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type JobsStackParamList = {
  JobsList: undefined;
  JobDetails: { jobId: string };
};

const Stack = createNativeStackNavigator<JobsStackParamList>();

export default function JobsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="JobsList" component={JobsListScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
    </Stack.Navigator>
  );
}
