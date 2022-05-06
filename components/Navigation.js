import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { BottomNavigation, Text } from 'react-native-paper';

import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Reddit from './Reddit';
import Twitter from './Twitter';
import Instagram from './Instagram';
import Icon from 'react-native-vector-icons/Feather';

const Navigation = () => {
  const Tabs = AnimatedTabBarNavigator();

    const RedditRoute = () => <Reddit/>;

const TwitterRoute = () => <Twitter/>;
const InstagramRoute = () => <Instagram/>;

// const RecentsRoute = () => <Text>Recents</Text>;

    
const [index, setIndex] = React.useState(0);
const [routes] = React.useState([
  { key: 'Reddit', title: 'Reddit', icon: "reddit", color: '#009688'  },
  { key: 'Twitter', title: 'Twitter', icon: 'twitter',color: '#009688' },
  { key: 'Instagram', title: 'Instagram', icon: 'instagram',color: '#009688' },
]);

// const renderScene = BottomNavigation.SceneMap({
//   Reddit: RedditRoute,
//   Twitter: TwitterRoute,
//   Instagram: InstagramRoute,
// });

return (
  <Tabs.Navigator
  // default configuration from React Navigation
  tabBarOptions={{
    activeTintColor: "#2F7C6E",
    inactiveTintColor: "#222222",
  }}
  appearance={{
    floating: true,
    shadow:true,
  }}
>

  <Tabs.Screen name="Reddit" component={Reddit}  options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="codesandbox"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
            />
        )
      }}/>
  <Tabs.Screen name="Instagram" component={Instagram}  options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="instagram"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
            />
        )
      }}/>
  <Tabs.Screen name="Twitter" component={Twitter}  options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="twitter"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
            />
        )
      }}/>
</Tabs.Navigator>
);
};

export default Navigation;
