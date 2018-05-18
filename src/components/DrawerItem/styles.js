import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 52,
    backgroundColor: colors.drawerItem.background,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerActive: {
    backgroundColor: colors.drawerItem.backgroundActive,
  },
  icon: {
    height: 32,
    width: 32,
    marginRight: 16,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.drawerItem.title,
  },
  titleActive: {
    color: colors.drawerItem.titleActive,
  },
});

export default styles;
