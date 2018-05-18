import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.profileScreen.background,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingVertical: 15,
    backgroundColor: colors.profileScreen.profileInfo,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.profileScreen.border,
  },
  userName: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 3,
  },
  userEmail: {
    fontSize: 18,
  },
  postedContainer: {
    paddingLeft: 15,
    paddingVertical: 8,
  },
  postedTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
