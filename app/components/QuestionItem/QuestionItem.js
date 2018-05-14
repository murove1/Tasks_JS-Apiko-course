import React from 'react';
import { View, Text, Platform } from 'react-native';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Touchable } from '../';
import s from './styles';
import { colors } from '../../styles';

const QuestionItem = () => (
  <Touchable onPress={() => {}}>
    <View style={s.container}>
      <View style={s.statusContainer}>
        <Text style={s.votes}>273</Text>
        <Ionicons
          name={`${Platform.select({ ios: 'ios', android: 'md' })}-checkmark-circle`}
          color={colors.questionItem.icon}
          size={21}
        />
      </View>
      <View style={s.infoContainer}>
        <Text style={s.title}>What is a difference between React Native and React?</Text>
        <View style={s.tags}>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
          <Text style={s.tag}>tags</Text>
        </View>
        <View style={s.details}>
          <Text style={s.date}>asked Jan 6`16 by</Text>
          <Text style={s.author} onPress={() => {}}>
            shiva kumar
          </Text>
        </View>
      </View>
    </View>
  </Touchable>
);

QuestionItem.propTypes = {};

export default QuestionItem;
