import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { Avatar } from '../../../../components';
import s from './styles';
import avatar from '../../../../../assets/images/profile.png';

const AuthorInfo = ({ asked }) => (
  <View style={s.container}>
    <View style={s.userDetails}>
      <Avatar source={avatar} author />
      <Text style={s.username}>James Dove</Text>
    </View>
    <View style={s.userActionDetails}>
      <Text style={s.typeAction}>{asked
        ? 'asked'
        : 'answered'
        }
      </Text>
      <Text style={s.actionTime}>2 mins ago</Text>
    </View>
  </View>
);

AuthorInfo.propTypes = {
  asked: T.bool,
};

export default AuthorInfo;
