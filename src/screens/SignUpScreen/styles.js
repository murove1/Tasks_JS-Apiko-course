import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.signUpScreen.background,
    justifyContent: 'space-between',
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
  linkContainer: {
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
  },
});

export default styles;
