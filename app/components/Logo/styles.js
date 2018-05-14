import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    flex: 1,
    height: 124,
    width: 124,
    resizeMode: 'contain',
  },
  drawerContainer: {
    flex: 1,
    height: 144,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 34,
  },
  drawerImage: {
    resizeMode: 'contain',
    width: '100%',
  },
  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator,
  },
});

export default styles;
