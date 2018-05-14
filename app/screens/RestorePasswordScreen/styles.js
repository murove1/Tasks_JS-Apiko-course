import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.restorePasswordScreen.background,
    justifyContent: 'space-between',
  },
  info: {
    fontSize: 16,
    color: colors.restorePasswordScreen.info,
  },
  top: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 55,
  },
});

export default styles;
