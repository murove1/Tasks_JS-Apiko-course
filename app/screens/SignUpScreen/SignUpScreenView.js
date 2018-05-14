import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import {
  DrawerButton,
  PageTitle,
  Input,
  Button,
  Link,
} from '../../components';
import { globalStyles, headerStyles } from '../../styles';
import s from './styles';

const SignUpScreenView = ({
  navigateToSignIn,
  onSubmit,
  username,
  email,
  password,
  onChange,
}) => (
  <View style={[globalStyles.fillAll, s.container]}>
    <PageTitle title="Sign up" />
    <View style={s.top}>
      <View style={globalStyles.marginBottom20}>
        <Input
          value={username}
          placeholder="username"
          onChange={text => onChange('username', text)}
          marginBottom
        />
      </View>
      <View style={globalStyles.marginBottom20}>
        <Input
          value={email}
          placeholder="email"
          onChange={text => onChange('email', text)}
          marginBottom
        />
      </View>
      <View style={globalStyles.marginBottom20}>
        <Input
          value={password}
          placeholder="password"
          onChange={text => onChange('password', text)}
          secureTextEntry
          marginBottom
        />
      </View>
      <View style={s.linkContainer}>
        <Link //eslint-disable-line
          text="Already has an account?"
          onPress={navigateToSignIn}
        />
      </View>
    </View>
    <View style={s.bottom}>
      <Button onPress={onSubmit} text="Sign Up" />
    </View>
  </View>
);

SignUpScreenView.propTypes = {
  navigateToSignIn: T.func,
  username: T.string,
  email: T.string,
  password: T.string,
  onChange: T.func,
  onSubmit: T.func,
};

SignUpScreenView.navigationOptions = ({ navigation }) => ({
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  ...headerStyles,
});

export default SignUpScreenView;
