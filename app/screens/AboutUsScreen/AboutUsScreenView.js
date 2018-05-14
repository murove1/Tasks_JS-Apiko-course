import React from 'react';
import { WebView, View } from 'react-native';
import { DrawerButton, Logo } from '../../components';
import s from './styles';
import { headerStyles } from '../../styles';

const AboutUsScreenView = () => (
  <WebView style={s.container} source={{ uri: 'https://google.com' }} />
);

AboutUsScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <View />,
  ...headerStyles,
});

export default AboutUsScreenView;
