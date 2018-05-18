import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.questionItem.background,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.questionItem.border,
  },
  statusContainer: {
    marginRight: 5,
    alignItems: 'flex-end',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  votes: {
    color: colors.questionItem.votes,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  details: {
    flexDirection: 'row',
  },
  date: {
    marginRight: 3,
    color: colors.questionItem.date,
  },
  author: {
    color: colors.questionItem.author,
  },
});

export default styles;
