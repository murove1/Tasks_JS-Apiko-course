import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  button: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.sendButton.color,
    fontSize: 16,
    fontWeight: '600',
  },
  active: {
    color: colors.sendButton.active,
  },
});

export default styles;
