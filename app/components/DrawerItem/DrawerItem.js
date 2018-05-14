import React from 'react';
import { View, Text, Platform } from 'react-native';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation';
import { Touchable, Separator } from '../';
import s from './styles';
import { colors } from '../../styles';

const DrawerItem = ({ item, activeItemKey, navigation }) => {
  if (item.separator) {
    return <Separator />;
  }

  const isActive = item.key === activeItemKey;

  const onPress = () => {
    if (typeof item.onPress === 'function') {
      item.onPress();
    } else {
      navigation.navigate(item.key);
    }

    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <Touchable onPress={onPress}>
      <View style={[s.container, isActive && s.containerActive]}>
        <View style={s.icon}>
          <Ionicons
            color={isActive ? colors.drawerItem.iconActive : colors.drawerItem.icon}
            size={28}
            name={`${Platform.select({ ios: 'ios', android: 'md' })}-${item.iconName}`}
          />
        </View>
        <Text style={[s.title, isActive && s.titleActive]}>{item.title}</Text>
      </View>
    </Touchable>
  );
};

DrawerItem.propTypes = {
  item: T.shape({
    label: T.string,
    key: T.string,
    iconName: T.string,
    onPress: T.func,
    separator: T.bool,
  }),
  activeItemKey: T.string,
  navigation: T.object,
};

export default DrawerItem;
