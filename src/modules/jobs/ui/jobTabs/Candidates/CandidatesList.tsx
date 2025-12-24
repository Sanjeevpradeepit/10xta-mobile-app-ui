import { FlatList } from 'react-native';
import CandidateCard from './CandidateCard';
import { CANDIDATES } from '@/modules/jobs/data/job.meta';

export default function CandidatesList() {
  return (
    <FlatList
      data={CANDIDATES}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <CandidateCard candidate={item} />}
      contentContainerStyle={{ padding: 8 }}
    />
  );
}
