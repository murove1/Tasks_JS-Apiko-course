import React from 'react';
import T from 'prop-types';
import { Platform, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Touchable } from '../';
import { colors } from '../../styles';
import s from './styles';

const Votes = ({ positive, negative }) => (
  <View style={s.votes}>
    <Touchable useOpacity borderless onPress={() => {}}>
      <View>
        <Ionicons
          color={positive
            ? colors.votes.buttonActive
            : colors.votes.button
          }
          size={32}
          name={`${Platform.select({ ios: 'ios', android: 'md' })}-arrow-dropup-circle`}
        />
      </View>
    </Touchable>
    <Text style={s.count}>222</Text>
    <Touchable useOpacity borderless onPress={() => {}}>
      <View>
        <Ionicons
          color={negative
            ? colors.votes.buttonActive
            : colors.votes.button
          }
          size={32}
          name={`${Platform.select({ ios: 'ios', android: 'md' })}-arrow-dropdown-circle`}
        />
      </View>
    </Touchable>
  </View>
);

Votes.propTypes = {
  positive: T.bool,
  negative: T.bool,
};

export default Votes;
