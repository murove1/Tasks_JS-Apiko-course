import React from 'react';
import T from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import {
  Logo,
  Button,
  Link,
  Votes,
  Tags,
} from '../../components';
import { AuthorInfo, AnswerItem } from './components';
import { globalStyles, headerStyles, colors } from '../../styles';
import s from './styles';

const UserQuestionScreenView = () => (
  <View style={[globalStyles.fillAll, s.container]}>
    <View style={s.header}>
      <View style={s.votesContainer}>
        <Votes positive />
      </View>
      <View style={s.infoContainer}>
        <Text style={s.title}>Chat component for React Native?</Text>
        <Tags />
      </View>
    </View>
    <View style={s.description}>
      <Text style={s.descriptionText}>
        Hi. I`m working with react native but can`t find the component for chats. Is there any
        component to build real chat application?
      </Text>
    </View>
    <AuthorInfo asked />
    <View style={s.answersHeader}>
      <View>
        <Text style={s.answersCount}>1 Answer</Text>
      </View>
      <View style={s.orderBy}>
        <Text style={s.orderByTitle}>order by</Text>
        <Link //eslint-disable-line
          style={s.orderByValue}
          text="votes"
          onPress={() => {}}
        />
      </View>
    </View>
    <AnswerItem />
    <TextInput
      style={s.input}
      value=""
      placeholder="Type your answer here..."
      onChangeText={() => {}}
      underlineColorAndroid={colors.userQuestionScreen.input}
    />
    <View style={s.bottom}>
      <Button onPress={() => {}} text="Submit Answer" />
    </View>
  </View>
);

UserQuestionScreenView.propTypes = {};

UserQuestionScreenView.navigationOptions = {
  headerTitle: <Logo header />,
  headerRight: <View />,
  ...headerStyles,
};

export default UserQuestionScreenView;
