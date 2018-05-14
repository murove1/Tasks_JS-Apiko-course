import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.input.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.input.border,
    height: 34,
    borderRadius: 4,
    paddingLeft: 10,
  },
});

export default styles;
