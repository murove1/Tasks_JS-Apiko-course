import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  votes: {
    alignItems: 'center',
    marginBottom: 5,
  },
  count: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.votes.count,
  },
});

export default styles;
