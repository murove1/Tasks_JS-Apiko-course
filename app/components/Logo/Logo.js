import React from 'react';
import T from 'prop-types';
import { View, Image } from 'react-native';
import s from './styles';
import logo from '../../../assets/images/logo.png';

const Logo = ({
  borderBottom,
  borderTop,
  header,
  drawer,
}) => (
  <View
    style={[
      header && s.headerContainer,
      drawer && s.drawerContainer,
      borderBottom && s.borderBottom,
      borderTop && s.borderTop,
    ]}
  >
    <Image
      source={logo}
      style={[
        header && s.headerImage,
        drawer && s.drawerImage,
      ]}
    />
  </View>
);

Logo.propTypes = {
  borderBottom: T.bool,
  borderTop: T.bool,
  header: T.bool,
  drawer: T.bool,
};

export default Logo;
