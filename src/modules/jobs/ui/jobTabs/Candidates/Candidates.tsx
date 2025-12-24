import { View, Text } from 'react-native';
import CandidatesList from './CandidatesList';
import { CANDIDATES } from '@/modules/jobs/data/job.meta';

export default function Candidates() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: '700', marginBottom: 8 }}>
        {CANDIDATES.length} Candidates
      </Text>

      <CandidatesList />
    </View>
  );
}
