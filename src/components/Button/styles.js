import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button.color,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  text: {
    color: colors.button.text,
  },
});

export default styles;
