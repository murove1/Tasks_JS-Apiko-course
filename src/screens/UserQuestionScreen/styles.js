import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.userQuestionScreen.background,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  votesContainer: {
    marginLeft: 15,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 5,
  },
  description: {
    backgroundColor: colors.userQuestionScreen.descriptionBackground,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.userQuestionScreen.descriptionBorder,
    paddingVertical: 15,
    paddingLeft: 15,
  },
  descriptionText: {
    fontSize: 16,
  },
  answersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  answersCount: {
    fontSize: 16,
    fontWeight: '600',
  },
  orderBy: {
    flexDirection: 'row',
  },
  orderByTitle: {
    fontSize: 14,
    marginRight: 5,
  },
  orderByValue: {
    fontSize: 14,
  },
  input: {
    backgroundColor: colors.userQuestionScreen.input,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.userQuestionScreen.inputBorder,
    fontSize: 16,
    height: 34,
    paddingLeft: 15,
    marginBottom: 12,
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
