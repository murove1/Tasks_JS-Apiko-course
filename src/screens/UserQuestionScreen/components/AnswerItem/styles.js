import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.answerItem.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.answerItem.border,
  },
  topContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    backgroundColor: colors.answerItem.leftContainer,
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 20,
  },
  description: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 15,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default styles;
