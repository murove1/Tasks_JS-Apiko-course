import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.authorInfo.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.authorInfo.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
  },
  userActionDetails: {
    alignItems: 'flex-end',
  },
  typeAction: {
    fontSize: 14,
    fontWeight: '600',
  },
  actionTime: {
    fontSize: 14,
  },
});

export default styles;
