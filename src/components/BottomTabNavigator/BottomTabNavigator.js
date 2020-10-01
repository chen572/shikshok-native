import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import {
  faHome,
  faSearch,
  faInbox,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import BottomTabIcon from './BottomTabIcon';
import BottomAddIcon from './BottomAddIcon';

function BottomTabNavigator({ navigation, background, colorTitle, colorIcon }) {
  return (
    <View style={[styles.bottomTabContainer, { backgroundColor: background }]}>
      <BottomTabIcon
        icon={faHome}
        colorIcon={colorIcon}
        colorTitle={colorTitle}
        title="Home"
        navigation={navigation}
      />
      <BottomTabIcon
        icon={faSearch}
        colorIcon={colorIcon}
        colorTitle={colorTitle}
        title="Search"
        navigation={navigation}
      />
      <BottomAddIcon navigation={navigation} />
      <BottomTabIcon
        icon={faInbox}
        colorIcon={colorIcon}
        colorTitle={colorTitle}
        title="Inbox"
        navigation={navigation}
      />
      <BottomTabIcon
        icon={faUser}
        colorIcon={colorIcon}
        colorTitle={colorTitle}
        title="Profile"
        navigation={navigation}
      />
    </View>
  );
}

export default BottomTabNavigator;
