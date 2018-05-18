import React from 'react';
import { View, Text } from 'react-native';
import {
  DrawerButton,
  Logo,
  PageTitle,
  QuestionsList,
  Avatar,
} from '../../components';
import s from './styles';
import { globalStyles, headerStyles } from '../../styles';
import avatar from '../../../assets/images/profile.png';

const ProfileScreenView = () => (
  <View style={[globalStyles.fillAll, s.container]}>
    <PageTitle title="Profile" />
    <View style={s.profileInfo}>
      <Avatar source={avatar} profile />
      <View>
        <Text style={s.userName}>@johndove</Text>
        <Text style={s.userEmail}>johndove@mail.com</Text>
      </View>
    </View>
    <View style={s.postedContainer}>
      <Text style={s.postedTitle}>Posted questions</Text>
    </View>
    <QuestionsList />
  </View>
);

ProfileScreenView.propTypes = {};

ProfileScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <View />,
  ...headerStyles,
});

export default ProfileScreenView;
