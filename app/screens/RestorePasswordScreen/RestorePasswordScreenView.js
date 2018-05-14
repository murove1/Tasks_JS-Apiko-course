import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { PageTitle, Input, Button } from '../../components';
import { globalStyles, headerStyles } from '../../styles';
import s from './styles';

const RestorePasswordScreenView = ({
  email,
  onChange,
  onSubmit,
}) => (
  <View style={[globalStyles.fillAll, s.container]}>
    <PageTitle title="Restore password" />
    <View style={s.top}>
      <Text style={[s.info, globalStyles.marginBottom20]}>
    We will send you an instruction how to reset your password to your email address.
      </Text>
      <View style={globalStyles.marginBottom20}>
        <Input
          value={email}
          placeholder="email"
          onChange={text => onChange('email', text)}
          marginBottom
        />
      </View>
    </View>

    <View style={s.bottom}>
      <Button onPress={onSubmit} text="Send instruction" />
    </View>
  </View>
);

RestorePasswordScreenView.propTypes = {
  email: T.string,
  onChange: T.func,
  onSubmit: T.func,
};

RestorePasswordScreenView.navigationOptions = {
  ...headerStyles,
};

export default RestorePasswordScreenView;
