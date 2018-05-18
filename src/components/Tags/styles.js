import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: colors.questionItem.tagBackground,
    color: colors.questionItem.tagColor,
    marginRight: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 5,
  },
});

export default styles;
