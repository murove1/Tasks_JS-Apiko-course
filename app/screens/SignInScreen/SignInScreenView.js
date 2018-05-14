import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import {
  PageTitle,
  Input,
  Button,
  Link,
} from '../../components';
import { globalStyles, headerStyles } from '../../styles';
import s from './styles';

const SignInScreenView = ({
  email,
  password,
  onChange,
  onSubmit,
  navigateToRestorePassword,
}) => (
  <View style={[globalStyles.fillAll, s.container]}>
    <PageTitle title="Sign in" />
    <View style={s.top}>
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
          text="Forgot password?"
          onPress={navigateToRestorePassword}
        />
      </View>
    </View>
    <View style={s.bottom}>
      <Button onPress={onSubmit} text="Sign In" />
    </View>
  </View>

);

SignInScreenView.propTypes = {
  navigateToRestorePassword: T.func,
  email: T.string,
  password: T.string,
  onChange: T.func,
  onSubmit: T.func,
};

SignInScreenView.navigationOptions = {
  ...headerStyles,
};

export default SignInScreenView;
