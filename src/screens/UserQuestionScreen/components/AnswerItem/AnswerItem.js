import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import { Touchable, Votes } from '../../../../components';
import { AuthorInfo } from '../';
import { colors } from '../../../../styles';
import s from './styles';

const AnswerItem = () => (
  <View style={s.container}>
    <View style={s.topContainer}>
      <View style={s.leftContainer}>
        <Votes negative />
        <View>
          <Touchable useOpacity borderless onPress={() => {}}>
            <View>
              <Ionicons
                color={colors.answerItem.checkmark}
                size={32}
                name="md-checkmark-circle-outline"
              />
            </View>
          </Touchable>
        </View>
      </View>
      <View style={s.description}>
        <Text style={s.descriptionText}>
        Unfortunately, there is no such comples solution you can work in, Use FlatList or Section
        list for this kind of UI.
        </Text>
      </View>
    </View>
    <View>
      <AuthorInfo />
    </View>
  </View>
);

AnswerItem.propTypes = {};

export default AnswerItem;
